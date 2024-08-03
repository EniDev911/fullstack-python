---
layout: post
title: "Django, acceso a datos"
subtitle: "M7 - Desafío Evaluado"
show: true
show_next: true
type: evaluado
modulo: m7
img_path: /assets/img/desafios/m7-evaluado-acceso-datos/
github:
  name: enidev911/desafio-evaluado-02-m7
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

{% tabs stp_2 %}
{% tab stp_2 aplicación %}
{% include codeHeader.html icon="terminal" %}
```bash
django-admin startproject desafio2
cd desafio2
python manage.py startapp desafioadl
```
{% endtab %}
{% tab stp_2 modelos %}
{% include codeHeader.html file="desafio2/desafioadl/models.py" %}
```py
from django.db import models

class Tarea(models.Model):
	descripcion = models.TextField(default="")
	eliminada = models.BooleanField(default=False)

	def __str__(self):
		return f"[{self.id}] {self.descripcion}"

class SubTarea(models.Model):
	descripcion = models.TextField(default="")
	eliminada = models.BooleanField(default=False)
	tarea = models.ForeignKey(Tarea, on_delete=models.CASCADE)

	def __str__(self):
		return f"[{self.id}] {self.descripcion}"
```
{: .nolineno }
{% endtab %}
{% endtabs %}





Creación de los servicios (funciones) solicitados:

{% include codeHeader.html file="desafio2/desafioadl/models.py" %}
```py
from .models import Tarea, SubTarea
import os

def recupera_tareas_y_sub_tareas():
	print("== Recuperar tareas ==\n")
	tareas = Tarea.objects.filter(eliminada=True)
	if tareas.exists():
		for tarea_eliminada in tareas:
			print(f"Tarea ID: {tarea_eliminada.id} ({tarea_eliminada.descripcion})")
		tarea_id = input("Ingresa el ID de la tarea que desea recuperar:\n> ")
		tarea = Tarea.objects.filter(id=tarea_id)
		estado = tarea.update(eliminada=False) if tarea.exists() and tarea[0].eliminada == True else 0
		if estado == 1:
			tarea[0].subtarea_set.all().update(eliminada=True)
			return imprimir_en_pantalla()
		return "No existe la tarea o ya se recupero"
	print("No existen tareas eliminadas aún")

def crear_nueva_tarea():
	print("== Crear nueva Tarea ==\n")
	Tarea.objects.create(descripcion=input("Descripción de la nueva tarea:\n> "))
	imprimir_en_pantalla()

def crear_sub_tarea():
	print("== Crear nueva SubTarea ==\n")
	descripcion=input("Descripción de la nueva subtarea:\n> ")
	for tarea in Tarea.objects.filter(eliminada=False):
		print(f"Tarea ID: {tarea.id} ({tarea.descripcion})")
	tarea_id = int(input("ID de la tarea a que pertenece:\n> "))
	if Tarea.objects.filter(id=tarea_id).count() == 1:
		SubTarea.objects.create(descripcion=descripcion, tarea_id=tarea_id)
		return imprimir_en_pantalla()
	print("No existe la Tarea con ese ID\n")
	crear_sub_tarea()

def elimina_tarea():
	print("== Elimina una Tarea ==\n")
	imprimir_en_pantalla()
	tarea_id = int(input(f"ID tarea a eliminar:\n> "))
	tarea = Tarea.objects.filter(id=tarea_id)
	estado = tarea.update(eliminada=True) if tarea.exists() and tarea[0].eliminada == False else 0
	return imprimir_en_pantalla() if estado == 1 else "No existe la tarea o ya esta eliminada"

def elimina_sub_tarea():
	print("== Elimina una SubTarea ==\n")
	imprimir_en_pantalla()
	subtarea_id = int(input(f"ID de la subtarea a eliminar:\n> "))
	subtarea = SubTarea.objects.filter(id=subtarea_id)
	estado = subtarea.update(eliminada=True) if subtarea.exists() and subtarea[0].eliminada == False else 0
	return imprimir_en_pantalla() if estado == 1 else "No existe la subtarea o ya esta eliminada"

def imprimir_en_pantalla():
		print("== Mostrando Tareas y SubTareas Actuales ==\n")
		tareas = Tarea.objects.filter(eliminada=False)
		if tareas.count() == 0:
			return print("No existen tareas aún")
		for tarea in tareas:
			print(tarea)
			for subtarea in tarea.subtarea_set.all():
				if subtarea.eliminada == False:
					print(f"  {subtarea}")
			print()
```
{: .nolineno }

---

## Repositorio

{% include repository.html repo=page.github %}


