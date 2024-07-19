---
layout: post
title: Validación de datos
subtitle: Ejercicio Guiado - Día 10
modulo: m4
type: ejercicio
show: true
show_next: true
---

### Enunciado

Usted forma parte de una empresa que se encuentra desarrollando una aplicación de calendario y agenda. Se le ha solicitado, mediante una aplicación de consola Python, crear un pequeño demo que ejecute el algoritmo para validar el ingreso de los datos necesarios para crear una reunión previo a crearla. Por ahora se le pide que considere que una reunión debe tener los siguientes atributos y validaciones:

- `Titulo`: Cadena de texto. No puede tener más de 150 caracteres.
- `Hora`: Cadena de texto. El contenido debe estar en formato `"HH:MM:SS"`.

Desde su empresa le han solicitado que maneje las validaciones de datos ingresados mediante uso de excepciones propias.

**Paso 1.**

En un archivo llamado `error.py`, definir la clase `Error`, que deriva de `Exception`, sin implementación. En el mismo archivo, definir a continuación la clase `HoraError`, que deriva de `Error`, sin implementación:

Creamos el archivo `error.py`:

{% include newfile.html file='error.py' %}

Y agregamos lo siguiente:

{% include codeHeader.html file="error.py" %}
```py
class Error(Exception):
	"""Clase Base de Excepciones"""
	pass

class HoraError(Error):
	pass
```
{: .nolineno }

**Paso 2.**

En el mismo archivo, definir la clase `LargoTextoError`, sobreescribir el constructor, admitiendo los parámetros `mensaje`, `texto` (opcional) y `largo` (opcional), los cuales debe asignar a atributos de instancia. En el caso del texto, acortar en caso de que supere los 50 caracteres:

{% include codeHeader.html file="error" %}
```py
class LargoTextoError(Error):

	def __init__(self, mensaje:str, texto:str = None, largo:int = None) -> None:
		self.mensaje = mensaje
		self.texto = (f"{texto[:50]}..." if texto is not None and len(texto) > 50 else texto)
		self.largo = largo
```
{: .nolineno }

**Paso 3.**

En el mismo archivo, sobrecargue el método `__str__`. En caso de que no se haya ingresado **texto** y tampoco el **largo**, retornar el método de la clase padre. En caso contrario, según los valores ingresados, construir el mensaje de retorno:

{% include codeHeader.html file="error.py" %}
```py
	def __str__(self) -> str:
		if self.texto is None and self.largo is None:
			return super().__str__()
		else:
			ret = f"{self.mensaje}"
			if self.texto != None:
				ret += f" Texto ingresado: {self.texto}."
			if self.largo != None:
				ret += f" Máximo {self.largo} caracteres permitidos"
			return ret
```
{: .nolineno }

**Paso 4.**

En un archivo `reunion.py`, definir la clase `Reunion`, con los atributos solicitados.

Creamos el archivo:

{% include newfile.html file='reunion.py' %}

Y agregamos lo siguiente:

{% include codeHeader.html file="reunion.py" %}
```python
class Reunion():
	def __init__(self, titulo:str, hora:str) -> None:
		self.titulo = titulo
		self.hora = hora
```
{: .nolineno }

**Paso 5.**

En un archivo `demo.py`, importar las clases `HoraError`, `LargoTextoError` y `Reunion`. Importar también el módulo `re`, y definir las variables `titulo` y `hora` asignando `None`. Definir también una variable `time_re` con el valor indicado:

Creamos el archivo:

{% include newfile.html file='demo.py' %}

Y agregamos lo siguiente:

{% include codeHeader.html file="demo.py" %}
```py
from error import HoraError, LargoTextoError
from reunion import Reunion
import re


titulo = None
hora = None
time_re = "^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$"
```
{: .nolineno }

**Paso 6.**

Luego iniciar un ciclo `while` infinito y dentro de este crear un bloque `try`/`except`. La cláusula `except` debe manejar todas las excepciones de tipo `Exception`. En ella mostrar la instancia de la excepción y agregar la instrucción `continue`. Agregar también una cláusula `else`, y en ella agregar la instrucción `break`:


{% include codeHeader.html file="demo.py" %}
```py
while True:
	try:
		pass
	except Exception as e:
		print(f"\n{e}\n")
		continue
	else:
		break
```
{: .nolineno }

**Paso 7.**

Luego, dentro de la cláusula `try`, solicitar el título, en caso de que este no tenga valor o su largo supere los 150. Luego de ser ingresado, en caso de que su largo sea superior a 150, lanzar una excepción de tipo `LargoTextoError`:

{% include codeHeader.html file='demo.py' %}
```python
if titulo is None or len(titulo) < 150:
	titulo = input("\nIngrese título de la reunión (Máximo 150 caracteres):\n> ")

	if len(titulo) > 150:
		raise LargoTextoError("Título de la reunión excede máximo de caracteres", titulo, 150)

```
{: .nolineno }

**Paso 8.**

A continuación, también dentro de la cláusula `try`, solicitar la hora, en caso de que tenga valor o no tenga formato permitido. Luego de ingresada, en caso de que no tenga el formato solicitado, lanzar una excepción de tipo `HoraError`:

{% include codeHeader.html file='demo.py' %}
```py
if hora is None or re.search(time_re, hora) is None:
	hora = input("\nIngrese hora de la reunión (Formato: HH:MM:SS):\n> ")

	if re.search(time_re, hora) is None:
		raise HoraError("Formato de Hora debe ser HH:MM:SS")
```
{: .nolineno }

**Paso 9.**

A continuación del ciclo `while`, crear una instancia de `Reunion` con el título y la hora ingresados:

{% include codeHeader.html file='demo.py' %}
```py
r = Reunion(titulo, hora)
print("\nReunión creada correctamente.")
```
{: .nolineno }


### Resultado

{% tabs validacion_de_datos %}
{% tab validacion_de_datos clases error %}
{% include codeHeader.html file='error.py' %}
```python
class Error(Exception):
	"""Clase Base de Excepciones"""
	pass

class HoraError(Error):
	pass

class LargoTextoError(Error):

	def __init__(self, mensaje:str, texto:str = None, largo:int = None) -> None:
		self.mensaje = mensaje
		self.texto = (f"{texto[:50]}..." if texto is not None and len(texto) > 50 else texto)
		self.largo = largo

	def __str__(self) -> str:
			if self.texto is None and self.largo is None:
				return super().__str__()
			else:
				ret = f"{self.mensaje}"
				if self.texto != None:
					ret += f" Texto ingresado: {self.texto}."
				if self.largo != None:
					ret += f" Máximo {self.largo} caracteres permitidos"
				return ret
```
{: .nolineno }
{% endtab %}
{% tab validacion_de_datos clase reunión %}
{% include codeHeader.html file='reunion.py' %}
```python
class Reunion():
	def __init__(self, titulo:str, hora:str) -> None:
		self.titulo = titulo
		self.hora = hora
```
{: .nolineno }
{% endtab %}
{% tab validacion_de_datos demostración %}
{% include codeHeader.html file='demo.py' %}
```python
from error import HoraError, LargoTextoError
from reunion import Reunion
import re

titulo = None
hora = None
time_re = "^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$"

while True:
	try:
		if titulo is None or len(titulo) < 150:
			titulo = input(
				"\nIngrese título de la reunión (Máximo 150 caracteres):\n> "
			)

			if len(titulo) > 150:
				raise LargoTextoError(
					"Título de la reunión excede máximo de caracteres", titulo, 150
				)

		if hora is None or re.search(time_re, hora) is None:
			hora = input("\nIngrese hora de la reunión (Formato: HH:MM:SS):\n> ")

			if re.search(time_re, hora) is None:
				raise HoraError("Formato de Hora debe ser HH:MM:SS")
	except Exception as e:
		print(f"\n{e}\n")
		continue
	else:
		break

r = Reunion(titulo, hora)
print("\nReunión creada correctamente.")
```
{: .nolineno }
{% endtab %}
{% endtabs %}
