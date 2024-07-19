---
layout: post
title: Tipos de atributos
modulo: m4
type: apunte
show: true
show_next: true
---

## Tipos de atributos

### Estáticos o de clase

Pertenecen a la definición de la clase como tal, por lo que es posible acceder a ellos o asignarles un valor, **directamente desde la clase**, sin necesidad de generar un objeto o instancia.

### No estáticos o de instancias

No pertenecen a la definición de la clase como tal, por lo que para acceder a ellos o asignarles un valor **se requiere primero crear un objeto** (o instancia) de la clase.

{: .table }
|Características|Atributos de clase|Atributos de instancia|
|:--------------|:----------------:|:--------------------:|
|Puede contener un dato o conjunto de datos|:x:|:heavy_check_mark:|
|Su tipo de dato está dado por el valor asignado|:heavy_check_mark:|:heavy_check_mark:|
|Se define dentro de una clase|:heavy_check_mark:|:heavy_check_mark:|
|Se puede leer su valor sin crear una instancia u objeto de la clase|:heavy_check_mark:|:x:|


### ¿Cómo definir una clase con atributos estáticos?

- Si se quiere definir atributos estáticos para la clase, se debe escribir cada atributo en el bloque indentado, siguiendo la misma convención que para los nombres de variables y funciones en Python (*snake_case*).
- Como buena práctica, se le asigna a estos atributos un valor que luego no será modificado, ya que debe ser un atributo común a todas las instancias.

{% include codeHeader.html icon="python" %}
```python
class Pelota():
	forma = "redondeada"
```
{: .nolineno }