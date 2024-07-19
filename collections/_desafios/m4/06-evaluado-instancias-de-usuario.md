---
layout: post
title: "Instancias de usuario"
subtitle: "M4 - Desafío Evaluado"
show: true
show_next: true
type: evaluado
modulo: m4
github:
  name: enidev911/m4-evaluado-manejo-de-excepciones
---

## Descripción

Se le solicita crear un script Python que permita crear instancias de usuario a partir de los datos entregados en el archivo `usuarios.txt`, y almacene cada instancia creada en una lista.

Cada línea del archivo contiene un texto en estructura **json**, donde cada clave corresponde al nombre de un atributo de `Usuario`, y su valor asociado corresponde al valor que debe tener en dicho atributo cada instancia de usuario creada.

Se le solicita además que se maneje las posibles excepciones en cada intento de leer los datos de un usuario y crear una instancia a partir de ellos. En caso de que se produzca una excepción, se debe añadir a un archivo `error.log`.

---

## Desarrollo

### Requerimiento 1

Crear un archivo `script.py` que permita leer línea a línea el archivo `usuarios.txt`, y crear una instancia de `Usuario` a partir de los datos de cada línea leída.

Creamos el archivo:

{% include newfile.html file='script.py' %}


