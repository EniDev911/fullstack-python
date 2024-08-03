---
layout: post
title: "Django,acceso a datos"
subtitle: "M7 - Desafío Evaluado"
show: true
show_next: true
type: evaluado
modulo: m7
img_path: /assets/img/desafios/m7-evaluado-acceso-datos/
---

## Descripción

Se solicita un proyecto de administración, donde tendremos `Tareas` y `SubTareas`. Las `Tareas` deben tener un identificador autonumérico, descripción y estado, las subtareas tienen los mismos campos, más una relación a `Tareas`. El proyecto debe contar con un archivo de servicios donde estará la lógica de aplicación sobre los modelos.

Entonces, debemos tener lo siguientes requerimientos:

1. Un proyecto llamado **"desafio2"** con una aplicación llamada **"desafioadl"**.
2. La conexión a base de datos se realiza con SQLite o Postgresql.
3. En **"desafioadl"** deben existir dos modelos: `Tarea` y `SubTarea`.
4. Los modelos deben tener campo id y descripción, la `SubTarea` debe tener una relación hacia `Tarea`.

{: align="center" }
```mermaid
%%{init: 
	{ 
		'erDiagram': 
		{
			'layoutDirection': "TD"},
			'theme': 'dark'} 
}%%
---
title: "Relación Tarea - Subtarea"
---
erDiagram
    t[Tarea] {
    	id int "PK"
    	descripcion TEXT "default=''"
    	eliminada BOOL "default=False"
    }
    st[Subtarea] {
    	id int "PK"
    	descripcion TEXT "default=''"
    	tarea_id INT "FK"
    }
    t ||--o{ st : tiene
```

{:start="5"}
5. Crear un archivo **desafio2/desafioadl/services.py**
6. Dentro del archivo **services.py** crear 6 funciones:
	- recupera_tareas_y_subtareas
	- crear_nueva_tarea
	- crear_sub_tarea
	- elimina_tarea
	- imprimir_en_pantalla
7. Cada función que opere sobre los modelos, luego actualizar, debe devolver un arreglo con las tareas y subtareas.
8. La función `imprimir_en_pantalla` debe ser capaz de recibir ese arreglo e imprimir tareas y subtareas de forma ordenada. Ej:

	```bash
	[1] descripción tarea 1
	.... [1] sub tarea 1
	.... [2] sub tarea 2
	[2] descripción tarea 2
	.... [3] sub tarea 1
	.... [4] sub tarea 2
	```

El alcance del proyecto llega hasta alcanzar la funcionalidad esperada en los modelos y servicios. Estos se evaluarán desde la shell de Django.

## Desarrollo

Aplicación y modelos creados:

```bash
django-admin startproject desafio2
cd desafio2
python manage.py startapp desafioadl
```

{% include codeHeader.html file="desafio2/desafioadl/models.py" %}
```py
from django.db import models

# Create your models here.
class Tarea(models.Model):
	descripcion = models.TextField(default="")
	eliminada = models.BooleanField(default=False)

	def __str__(self):
		return f"{self.id}. {self.descripcion}"

class SubTarea(models.Model):
	descripcion = models.TextField(default="")
	eliminada = models.BooleanField(default=False)
	tarea = models.ForeignKey(Tarea, on_delete=models.CASCADE)

	def __str__(self):
		return f"{self.descripcion}"
```
{: .nolineno }
