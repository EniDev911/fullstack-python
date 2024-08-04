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