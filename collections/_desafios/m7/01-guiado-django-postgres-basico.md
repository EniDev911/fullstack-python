---
layout: post
title: "Django, PostgreSQL básico"
subtitle: "M7 - Desafío Guiado"
show: true
show_next: true
type: guiado
modulo: m7
img_path: /assets/img/desafios/m7-guiado-postgres-basico/
---

## Descripción

Este desafío está pensado como un problema que se presenta cuando debemos crear un proyecto Django desde cero y realizar la conexión a una base de datos. Por lo general, al trabajar en proyectos para terceros, suele darse esta actividad a diferencia de cuando ingresan a un proyecto que ya está en curso, donde la configuración base está realizada con antelación y nuestro propósito sería añadir funcionalidades.

Se creará un proyecto django llamado "**desafiodb**", y luego una aplicación de proyecto llamada "**testdb**", el cual se conectara localmente a una base de datos postgresql llamada "**adl-test**". Luego se deben generar y aplicar las migraciones para generar una tabla llamada **adltest** con los campos "**campo1**" (char de largo 100) y "**valor1**" (integer).

---

## Desarrollo

### Requerimiento 1

Instalación del motor de base de datos Postgresql, creación de base de datos y asignación de permisos al usuario por defecto. Adjuntar una captura  de pantalla de la asignación de permisos al usuario y de la base de datos vacía.

![requerimiento1 - img]({{ page.img_path | relative_url | append: 'createuser-and-createdb.png' }})

### Requerimiento 2

Entregar el proyecto en un archivo **.zip** con el nombre del desafío y su nombre con el siguiente formato "**proyecto-desafio1-nombre-apellido.zip**".

[(Este repositorio 👈)](https://github.com/EniDev911/proyecto-desafio1-marco-contreras/archive/refs/heads/main.zip)

### Requerimiento 3

Captura de pantalla donde se visualice la correcta ejecución de las migraciones.

La siguiente captura muestra la creación del proyecto y luego generamos la aplicación **testdb** y a continuación instalamos la librería para conectarnos a PostgreSQL:

![requerimiento2 - img]({{ page.img_path | relative_url | append: 'startproject-and-startapp-install-psycopg2.png' }})

En la siguiente captura tenemos la visualización del proceso de las migraciones:

![requerimiento3 - img]({{ page.img_path | relative_url | append: 'run-migrations.png' }})

### Requerimiento 4

Captura de pantalla de pgadmin, donde se pueda visualizar la base de datos creada, la tabla solicitada con sus campos y las tablas generadas por Django:

![requerimiento4 - img]({{ page.img_path | relative_url | append: 'pgadmin.png' }})

