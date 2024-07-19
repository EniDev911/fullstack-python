---
layout: post
title: "Creación de clases y objetos"
subtitle: "M4 - Desafío Opcional"
type: "opcional"
modulo: m4
show: true
show_next: true
github:
  name: enidev911/m4-opcional-creacion-clases-y-objetos
---

## Descripción

En un emprendimiento dedicado a la venta de té de hoja artesanal, se puede comprar té de distintos sabores (té negro, té verde, e infusión de hierbas) y en 2 formatos (300gr y 500gr). Cada tipo de té tiene, además, un tiempo de preparación (en minutos) y una recomendación de consumo (se explica en un pequeño texto). Todos los té tienen un tiempo de duración de 1 año o 365 días.

Los 3 sabores de té se pueden comprar en cualquiera de los 2 formatos, teniendo **el formato de 300gr** un valor de **$3.000** y el de **500gr** un valor de **$5.000**.

Los diferentes té se preparan de la siguiente manera:

- El té negro tiene un tiempo de preparación de 3 minutos.
- El té verde tiene un tiempo de preparación de 5 minutos.
- El agua de hierbas (*infusiones*) tiene un tiempo de preparación de 6 minutos.

Los diferentes té se recomienda consumir de la siguiente manera:

- El té negro se recomienda consumir al desayuno.
- El té verde se recomienda consumir al medio día.
- El agua de hierbas (*infusiones*) al atardecer.

Utilizando Python y las características de la POO, se solicita en primera instancia generar un programa que permita obtener el tiempo de preparación, recomendación y precio, según el sabor y el formato entregado por el usuario, para así obtener los datos necesarios para generar un pedido.

## Desarrollo

### Requerimiento 1

Crear en un archivo llamado `te.py` una clase que permita instanciar objetos de tipo **Te**. Para ello, debe considerar un nombre adecuado para la clase, y el o los atributos de clase.

Creemos el archivo correspondiente:

{% include newfile.html file="te.py" %}

> **Recordar**: Un atributo de clase es aquel que se define a nivel de clase, y que todas las *instancias* tendrán el mismo valor.

Como sabemos los todos los té deben tener ciertos valores, en nuestra clase lo podemos declarar los siguientes **atributo estático**:


> **Ojo**: Ya que debe ser un atributo común en todas las instancias. Como buena practica este valor no debería ser modificado. Es por ello que en vez de almacenar los posibles valores en un diccionario o lista, lo hacemos en una tupla ya que se trata de una estructura inmutable.

Entonces podemos agregar lo siguiente a nuestro script `te.py`:

{% include codeHeader.html file="te.py" %}
```py
class Te:

	duracion = 365
	formato = (300, 500)
	sabor = ('Té negro', 'Té verde', 'Agua de hierba')
```
{: .nolineno }

### Requerimiento 2

En el archivo `te.py` y en la clase del requerimiento anterior, agregue un **método estático** que retorne el tiempo de preparación y la recomendación correspondiente, según el sabor ingresado por parámetro. Debe retornar el tiempo y recomendación correspondiente, según la descripción del problema.

Considere el parámetro sabor como un número entero, con la siguientes 3 posibles valores:

- 1: Corresponde a **Té negro**
- 2: Corresponde a **Té verde**
- 3: Corresponde a **Agua de hierbas**

Entonces agregamos el método a nuestro script `te.py`:

{% tabs demo_method %}
{% tab demo_method método %}
{% include codeHeader.html file="te.py" %}
```py
	@staticmethod
	def preparacion(sabor):
		"""
		1 = Té negro
		2 = Té verde
		3 = Agua de hierbas
		"""
		return {
			sabor == 1: "Preraración en 3 minutos, consumir al desayuno", 
			sabor == 2: "Preraración en 5 minutos, consumir al medio día", 
			sabor == 3: "Preraración en 6 minutos, consumir al atardecer"
		}.get(True, "Valor no válido")
```
{: .nolineno }
{% endtab %}
{% tab demo_method demo %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
class Te:

	@staticmethod
	def preparacion(sabor):
		"""
		1 = Té negro
		2 = Té verde
		3 = Agua de hierbas
		"""
		return {
			sabor == 1: "Preraración en 3 minutos, consumir al desayuno", 
			sabor == 2: "Preraración en 5 minutos, consumir al medio día", 
			sabor == 3: "Preraración en 6 minutos, consumir al atardecer"
		}.get(True, "Valor no válido")

if __name__ == "__main__":
	te = Te()
	print(Te.preparacion(1))
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Requerimiento 3

En el archivo `te.py` y en la clase del primer requerimiento, agregue un **método estático** que **retorne el precio** según el **formato** ingresado (número entero).

- Debe retornar el precio adecuado según la descripción del problema:

Entonces agregamos el método a nuestro script `te.py`:

{% tabs demo_method2 %}
{% tab demo_method2 método %}
{% include codeHeader.html file="te.py" %}
```python
	@staticmethod
	def obtener_precio(formato):
		"""
		1 = 300gr
		2 = 500gr
		"""
		return {
			formato == 1: 3000,
			formato == 2: 5000
		}.get(True, "Opción no válida")
```
{: .nolineno }
{% endtab %}
{% tab demo_method2 demo %}
{% include codeHeader.html icon="python" compiler="y" %}
```py
class Te:

	@staticmethod
	def obtener_precio(formato):
		"""
		1 = 300gr
		2 = 500gr
		"""
		return {
			formato == 1: 3000,
			formato == 2: 5000
		}.get(True, "Opción no válida")
	
if __name__ == "__main__":
	print("Precio:","$", Te.obtener_precio(1))
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Requerimiento 4

En un archivo llamado `instancias.py`, importe la clase del primer requerimiento.

A partir de esta clase:

- Cree dos instancias.
- Almacene el tipo de dato de cada instancia creada en una variable (**Tip**: use la función `type()`).
- Muestre por pantalla, usando `print()`, el valor de cada tipo de dato almacenado.
- En caso de que ambos tipos almacenados sean iguales, muestre por pantalla, usando `print()`, el mensaje "Ambos objetos son del mismo tipo". En caso contrario, mostrar mensaje "Los objetos no son del mismo tipo".

Procedemos a crear el nuevo archivo:

{% include newfile.html file="instancias.py" %}

Y agregamos lo siguiente en el script recien creado:

{% tabs req_4 %}
{% tab req_4 instancias %}
{% include codeHeader.html file="instancias.py" %}
```python
from te import Te

if __name__ == "__main__":
	t1 = Te()
	t2 = Te()
	tipo_t1 = type(t1)
	tipo_t2 = type(t2)
	print(tipo_t1)
	print(tipo_t2)

	if tipo_t1 == tipo_t2:
		print("Ambos objetos son del mismo tipo")
	else:
		print("Los objetos no son del mismo tipo")
```
{: .nolineno }
{% endtab %}
{% tab req_4 clase Te %}
{% include codeHeader.html file="te.py" %}
```python
class Te():
	
	duracion = 365
	sabor = ("Té negro","Té verde","Aguas de hierba")
	formato = (300 ,500)
	
	@staticmethod
	def obtener_precio(formato):
		"""
		1 = 300gr
		2 = 500gr
		"""
		return {
			formato == 1: 3000,
			formato == 2: 5000
		}.get(True, "Opción no válida")
	
	@staticmethod
	def preparacion(sabor):
		"""
		1 = Té negro
		2 = Té verde
		3 = Agua de hierbas
		"""
		return {
			sabor == 1: "Preraración en 3 minutos, consumir al desayuno", 
			sabor == 2: "Preraración en 5 minutos, consumir al medio día", 
			sabor == 3: "Preraración en 6 minutos, consumir al atardecer"
		}.get(True, "Valor no válido")
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Requerimiento 5

En un archivo llamado `pedido.py`, escriba un programa que al ser ejecutado permita al usuario ingresar los datos para generar un pedido de té. Para ello, el programa debe hacer lo siguiente:

- Pedir al usuario que ingrese el valor para cada atributo requerido para especificar su pedido.
- Los valores entregados por el usuario deben almacenarse en variables.
- Utilizar las variables anteriores en los métodos de la clase del requerimiento 1 (importarla en este script).
- Mostrar en pantalla, mediante la función `print()`, el detalle de toda la información del té ordenado, a partir de los valores ingresados por el usuario, y los obtenidos a partir de los métodos de la clase del requerimiento 1. Por lo tanto, debe mostrar en pantalla los valores de:
	- Sabor del tipo de té (como texto)
	- Formato (como número)
	- Precio (como número)
	- Recomendación (como texto)

Procedemos a crear el nuevo archivo:

{% include newfile.html file="pedido.py" %}

Y agregamos lo siguiente en el script recien creado:

{% tabs creacion_clases_obj %}
{% tab creacion_clases_obj pedido %}
{% include codeHeader.html file="pedido.py" %}
```python
from te import Te

sabor = int(input(
"""Hola, ingrese una opción para el tipo de té
(1) Té negro
(2) Té verde
(3) Aguas de hierba
> """))

formato = int(input(
"""Hola, ingrese una opción para el formato del té
(1) 300gr
(2) 500gr
> """))


print("Detalles del pedido:")
print("Sabor:", Te.sabor[sabor - 1])
print("Formato:", Te.formato[formato - 1], "gr")
print("Precio:", "$", Te.obtener_precio(formato))
print("Recomendación:", Te.preparacion(sabor))
```
{: .nolineno }
{% endtab %}
{% tab creacion_clases_obj clase te %}
{% include codeHeader.html icon="python" %}
```py
class Te():
	
	duracion = 365
	sabor = ("Té negro","Té verde","Aguas de hierba")
	formato = (300 ,500)
	
	@staticmethod
	def obtener_precio(formato):
		"""
		1 = 300gr
		2 = 500gr
		"""
		return {
			formato == 1: 3000,
			formato == 2: 5000
		}.get(True, "Opción no válida")
	
	@staticmethod
	def preparacion(sabor):
		"""
		1 = Té negro
		2 = Té verde
		3 = Agua de hierbas
		"""
		return {
			sabor == 1: "Preraración en 3 minutos, consumir al desayuno", 
			sabor == 2: "Preraración en 5 minutos, consumir al medio día", 
			sabor == 3: "Preraración en 6 minutos, consumir al atardecer"
		}.get(True, "Valor no válido")
```
{: .nolineno }
{% endtab %}
{% endtabs %}

## Repositorio

{% include repository.html repo=page.github %}

*[POO]: Programación orientada a objetos