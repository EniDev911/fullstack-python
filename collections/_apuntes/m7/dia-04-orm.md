---
layout: post
title: El ORM de Django, Día 4
modulo: m7
type: apunte
show: true
show_next: true
---

### Parámetros transversales

También existen una serie de parámetros transversales a los campos, los cuales definiremos a continuación:

{: .table .table-dark }
|parámetro|descripcipción|Por defecto|
|:--------|:-------------|:----------|
|`null`|Si `null=True`, django permitirá valores nulos|`False`|
|`blank`|Si `blank=True`, django permite grabar valores en blanco (a nivel de django)|`False`|
|`choices`|Realiza una validación en el modelo sobre los valores posibles en un campo dado.|Opcional|
|`db_column`|Este parámetro nos permite setear un nombre para la columna en la base de datos.|Opcional|

---

### Relaciones One to One

Mirando las relaciones desde el punto de vista de la bases de datos relacionales, podemos decir que una relación **One to One** existe cuando cada fila (registro) en una tabla, tiene solo una fila relacionada en una segunda tabla.

Por ejemplo, una empresa podría decidir asignar una oficina a solamente un empleado. Entonces, un empleado puede tener solo una oficina. La misma empresa podría también decidir que un departamento puede tener solo un gerente, entonces un gerente puede dirigir solamente un departamento.

{: align="center" }
```mermaid
%%{init: 
	{
		'theme': 'dark'
	}
}%%
erDiagram
	m[Manager] {
		name char(50) "NOT NULL"
		last_name char(50) "NOT NULL"
		position char(50) "NOT NULL"
	}
	d[Department] {
		description char(100) "NOT NULL"
		manager_id int "FK NOT NULL UNIQUE"
	}
	m ||--|| d : tiene
```

Ahora, si llevamos esto al ORM, podemos decir que las filas son objetos, por lo tanto, el objeto tiene un campo de un tipo especial que lo relaciona con otro objeto.

El tipo especial de campo del que hablamos se llama `OneToOneField`. Este campo nos permite relacionar dos objetos entre sí (uno a uno), por ejemplo un empleado con su oficina, o un autor con un perfil:

{: align="center" }
```mermaid
%%{init: 
	{
		'theme': 'dark'
	}
}%%
classDiagram
	direction LR
	Office "1" <--> "1" Employee
	Department "1" <--> "1" Manager
```

Se diferencia del campo `ForeignKey` en que `OneToOne` nos permite realizar solamente una relación uno a uno y en la query se devolverá solamente un objeto relacionado.

#### Ejemplo OneToOneField

{% include codeHeader.html icon="python" %}
```py
from django.db import models

class Modelo1(models.Model):
	nombre_relacion = models.OneToOneField('Modelo2', blank=False, null=False, on_delete=models.CASCADE)
```
{: .nolineno }

En el ejemplo podemos ver una serie de elementos. El primero es el nombre de la relación, el cual **es una instancia del campo OneToOneField**, a través del cual se tendrá acceso al campo relacionado.

Para el parámetro `on_delete` Django nos provee 6 opciones de comportamiento dependiendo de nuestros requerimientos:

{: .list }
**CASCADE**
: Cuando se elimina el objeto al que hace referencia, también elimina los objetos que tienen referencias

**PROTECT**
: Prohíbe la eliminación del objeto referenciado. Para eliminarlo tendrá que eliminar todos los objetos que hacen referencia a él manualmente. Equivalente de SQL: **RESTRICT**

**SET_NULL**
: Establece la referencia en **NULL** (requiere que el campo sea anulable). Por ejemplo, cuando se elimina un usuario, es posible que desee mantener los comentarios que publicó en las publicaciones del blog, pero digamos que fue publicado por un usuario anónimo (o eliminado). Equivalente de SQL: **SET_NULL**

**SET_DEFAULT**
: Establece el valor por defecto. Equivalente de SQL: **SET_DEFAULT**

**SET**
: Establece  un valor dado. Esto no es parte de SQL estándar, es manejado completamente por Django.

**DO_NOTHING**
: Probablemente sea una mala idea ya que esto crearía problemas de integridad en la base de datos (haciendo referencia a un objeto que en realidad no existe). Equivalente de SQL: **NO_ACTION**.

> **NOTA**:<br>El uso de las opciones anteriores, va a depender de los requerimientos que tengamos, pero una de las más comúnmente usada es **CASCADE** ya que nos permite eliminar datos y no dejar datos relacionados huérfanos o corruptos.

### Relación Many to Many

Una relación Many to Many (muchos a muchos) denota un tipo de cardinalidad en donde un registro de una tabla A puede estar relacionada a muchos registros de una tabla B y, a su vez, los registros de la tabla B pueden estar relacionados a muchos registros de la tabla A.

Un ejemplo más concreto puede ser la relación entre las tablas Libro y Autor. Un libro puede tener varios, y su vez un autor puede haber participado o escrito muchos libros.

{: align="center" }
```mermaid
%%{init: { 'theme': 'dark'}}%%
erDiagram
	Book }|--|{ Author : "N - N"
```

Al igual que en la relación One to One, en Many to Many tenemos un campo para realizar la relación, este es ManyToManyField.

Para el ejemplo que realizaremos, debemos generar estos dos modelos:

{% include codeHeader.html file="views.py" %}
```py
from django.db import models

class Libro(models.Model):
	titulo = models.CharField(max_length=100, null=False, blank=False)
	year = models.IntegerField(null=False, blank=False)

class Autor(models.Model):
	nombre = models.CharField(max_length=50, null=False, blank=False)
	apellido = models.CharField(max_length=50, null=False, blank=False)
	libros = models.ManyToManyField(Libro, related_name="autores")
```
{: .nolineno }

En el código anterior, podemos ver el modelo `Libro` que tiene dos campos **titulo** y **year**. Por su lado, el modelo `Autor` tiene los campos **nombre**, **apellido** y **libros**, donde libros es la relación many to many. En este caso, pusimos la relación en `Autor`.

En el campo ManyToManyField, tenemos 2 parámetros, el primero es el objeto con el cual se relaciona, y el segundo, **related_name**, nos permite agregar un nombre para la relación inversa ya que sino lo utilizamos, tenemos que volver a ocupar el sufijo **_set** que nos permite realizar la query inversa.

#### Tabla intermedia con campos extra

En ocasiones, los requerimientos del proyecto nos pueden llevar a necesitar agregar información acerca de la relación, por ejemplo, la fecha de creación de la relación y algún identificador de quien la creó, entre otras. Para esos casos Django nos permite utilizar un modelo personalizado haciendo las veces del modelo intermedio anteriormente revisado.

{: align="center" }
```mermaid
---
config:
  theme: dark
---
erDiagram
	a[Autor] {
		id int "NOT NULL PK"
		nombre char(50) "NOT NULL"
		apellido char(50) "NOT NULL"
	}
	al[AutorLibro] {
		id int "NOT NULL PK"
		autor_id int "NOT NULL FK1"
		libro_id int "NOT NULL FK2"
		creado_por char(100) "NOT NULL"
		creacion datetime "NOT NULL"
	}
	l[Libro] {
		id int "NOT NULL PK"
		titulo char(100) "NOT NULL"
		year int "NOT NULL"
	}

	a ||--|{ al : "1-N"
	l ||--|{ al : "1-N"
```

Para realizar esta relación personalizada utilizamos un par de elementos extra. Primero, debemos crear un modelo de relación ya que necesitamos uno más completo que el provisto por el ORM. Este modelo utiliza el campo `ForeignKey` donde creamos dos claves, una apuntando a `Autor` y otra a `Libro`, además de agregar los nuevos campos que necesitamos.


