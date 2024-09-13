---
layout: post
title: "Manejo de Excepciones"
subtitle: "M4 - Desafío Evaluado"
show: true
show_next: true
type: evaluado
modulo: m4
github:
  name: enidev911/m4-evaluado-manejo-de-excepciones
---

## Descripción

Usted trabaja para una empresa que se encuentra desarrollando una aplicación de galería de fotos. Le han solicitado controlar que no sea posible modificar el alto o el ancho de una foto creada, en caso de que se **esté intentando** modificar alguno de estos atributos por un valor menor a 1, o mayor al valor máximo determinado por el atributo de clase `MAX` de la clase `FOTO`. Le solicitan además hacer este control mediante una **excepción propia**, ya que se desea utilizar la misma excepción en otro sector del programa que recibe los valores de ancho y alto, y desea validarlos antes de crear nuevas fotos.

Se le proporciona el código que permite crear instancias de Foto, donde usted debe agregar el **lanzamiento de la excepción** en los métodos setter de ancho y alto, según las condiciones indicadas.

> **Apoyo**:<br>descargar el [Material de Apoyo aquí](apoyo-desafio-manejo-de-excepciones.zip) :point_left:

---

## Desarrollo

### Requerimiento 1

En un archivo llamado `error.py`, crear la excepción `DimensionError` derivada de `Exception`. Sobresscribir el constructor, recibiendo los parámetros `mensaje`, `dimension` y `maximo`, y asignándole los respectivos atributos de instancia.

Creamos un nuevo archivo:

{% include newfile.html file='error.py' %}

Definimos las siguientes clase según requerimiento:

{% include codeHeader.html file="error.py" %}
```python
class Error(Exception):
	"""Clase Base de Excepciones"""
	pass

class DimensionError(Error):

	def __init__(self, mensaje: str, dimension: float, maximo: int) -> None:
		self.mensaje = mensaje
		self.dimension = dimension
		self.maximo = maximo
```
{: .nolineno }

### Requerimiento 2

En la misma clase anterior, sobrecargar el método `__str__`, de forma tal que si sólo se ha ingresado `mensaje` al crear la excepción, se retorna el método de la clase padre. En caso contrario, crear y retornar un mensaje de retorno utilizando los atributos `mensaje` y/o `dimension` y/o `maximo`:

{% include codeHeader.html file="error.py" %}
```python
	def __str__(self) -> str:
		if self.mensaje != None and self.dimension is None and self.maximo is None:
			return super().__str__()
		else:
			ret = f"{self.mensaje}"
			if self.dimension != None:
				ret += f" valor ingresado: {self.dimension}."
			if self.maximo != None:
				ret += f" Máximo {self.maximo} permitido"
			return ret
```
{: .nolineno }

### Requerimiento 3

En el archivo `foto.py` entregado, modificar los métodos `setter` de `alto` y `ancho`, de forma tal que se lance una excepción de tipo `DimensionError` en caso de que el nuevo valor ingresado no cumpla con las condiciones descritas. En caso contrario, asignar el nuevo valor al atributo de instancia correspondiente:

{% include codeHeader.html file="foto.py" %}
```python
from error import DimensionError


class Foto:
	MAX = 2500

	def __init__(self, ancho: int, alto: int, ruta: str = "C:\\") -> None:
		self.__ancho = ancho
		self.__alto = alto
		ruta = ruta

	@property
	def ancho(self) -> int:
		return self.__ancho

	@ancho.setter
	def ancho(self, ancho) -> None:
		self.__ancho = ancho

	@property
	def alto(self) -> int:
		return self.__alto

	@alto.setter
	def alto(self, alto) -> None:
		if alto < 1 or alto > self.MAX:
			raise DimensionError(
				f"No puede ingresar un valor menor a 1 o mayor a {self.MAX}",
				alto,
				self.MAX,
			)
		else:
			self.__alto = alto

```
{: .nolineno }

---

## Repositorio

{% include repository.html repo=page.github %}