---
layout: post
title: Generar objetos a partir de un archivo
subtitle: Ejercicio Guiado - Día 11
modulo: m4
type: ejercicio
show: true
toc: false
show_next: true
---

## Enunciado

Se le solicita crear instancias del `Producto` a partir de los datos contenidos en un archivo de texto. Cada línea del archivo entregado corresponde a un texto en estructura **json**, donde cada clave corresponde al nombre de uno de los atributos de `Producto`, y el valor asociado a dicha clave corresponde al valor que debe poseer el atributo en la instancia.

**Paso 1**.

Creamos un archivo `productos.py`:

{% include newfile.html file='productos.py' %}

La estructura de la clase `Producto` es la siguiente:

{% include codeHeader.html file="productos.py" %}
```python
class Producto():
	def __init__(self, nombre: str, precio: int) -> None:
		self.nombre = nombre
		self.precio = precio
```
{: .nolineno }


**Paso 2**.

En el mismo archivo, importar el módulo `json`, y crear una variable contenedora de las instancias creadas, como una lista vacia:

{% include codeHeader.html file="productos.py" %}
```python
import json

instancias = []
```
{: .nolineno }

**Paso 3**.

Abrir el archivo de texto que contiene los productos en modo lectura y utilizando `with`:

{% include codeHeader.html file="productos.py" %}
```python
with open("productos.txt") as productos:
```
{: .nolineno }

**Paso 4**.

Dentro del bloque `with`, leer y almacenar una línea del texto:

{% include codeHeader.html file="productos.py" %}
```python
	linea = productos.readline()
```
{: .nolineno }

**Paso 5**.

Luego, iniciar un bucle `while` que se ejecute mientras `linea` tenga un valor:

{% include codeHeader.html file="productos.py" %}
```python
	while linea:
```
{: .nolineno }

**Paso 6**.

Dentro del ciclo, usar `linea` como argumento de `json.loads()`, y almacenar su retorno en una variable:

{% include codeHeader.html file="productos.py" %}
```python
		producto = json.loads(linea)
```
{: .nolineno }

**Paso 7**.

Luego, crear la instancia de `Producto` correspondiente y añadirla a la lista de instancias:

{% include codeHeader.html file="productos.py" %}
```python
		instancias.append(
			Producto(producto.get("nombre"), producto.get("precio"))
		)
```
{: .nolineno }

**Paso 8**.

Finalmente, actualizar el contenido de la variable `linea`:

{% include codeHeader.html file="productos.py" %}
```python
		linea = productos.readline()
```
{: .nolineno }
