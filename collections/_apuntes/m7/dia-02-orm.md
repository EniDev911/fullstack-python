---
layout: post
title: El ORM de Django
modulo: m7
type: apunte
show: true
show_next: true
---

### Los modelos

Según la documentación oficial de Django, un modelo es una fuente única y definitiva de información sobre tus datos. Este contiene los campos esenciales y comportamientos de los datos que estás almacenando, generalmente cada modelo es mapeado a una sola base de datos.

- Cada modelo es una clase de python que hereda de `django.db.models.Model`.
- Cada atributo del modelo representa un campo de la base de datos.
- Los modelos son definidos usualmente en el archivo `models.py` generado automáticamente por el manager de django al crear una aplicación nueva.

{% tabs ex_model %}
{% tab ex_model python %}
{% include codeHeader.html icon="python" %}
```py
from django.db import models

class Person(models.Model):
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=30)
```
{: .nolineno }
{% endtab %}
{% tab ex_model sql %}
```sql
CREATE TABLE myapp_person (
    "id" serial NOT NULL PRIMARY KEY,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(30) NOT NULL
);
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Tipos de datos

Algunos de los tipos más comunes para asignar a las propiedades de nuestro modelo son:

{: .table .table-dark }
|Tipo|Descripción|
|:---|:----------|
|`CharField`|Usado para definir cadenas de texto de largo fijo.|
|`TextField`|Usado para definir cadenas de texto de largo arbitrario.|
|`IntegerField`|Usado para almacenar números enteros.|
|`DateField`|Usado para almacenar o representar información de fechas.|
|`DateTimeField`|Usado para almacenar o representar información de fecha y hora.|
|`EmailField`|Usado para almacenar o representar direcciones de correo electrónico.|

En el siguiente ejemplo tenemos una relación a nivel de modelos:

{% include codeHeader.html icon="python" %}
```py
from django.db import models

class Musician(models.Model):
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	instrument = models.CharField(max_length=100)

class Album(models.Model):
	artist = models.ForeignKey(Musician, on_delete=models.CASCADE)
	name = models.CharField(max_length=100)
	release_date = models.DateField()
	num_starts = models.IntegerField()
```
{: .nolineno }




