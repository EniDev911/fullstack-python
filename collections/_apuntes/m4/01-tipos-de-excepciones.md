---
layout: post
title: Tipos de Excepciones
modulo: m4
type: apunte
show: true
show_next: true
---

## Tipos de excepciones

{: .table .table-dark .table-hover }
|Tipos de Excepción|Error que la produce|
|:-----------------|:-------------------|
|`AttributeError`|Error en una referencia o asignación a un atributo.|
|`ImportError`|Importar un módulo no encontrado.|
|`IndexError`|Referenciar un índice fuera del rango posible en una secuencia.|
|`KeyError`|Referenciar una clave no existente en un diccionario.|
|`MemoryError`|Ejecución que consume toda la memoria disponible.|
|`NameError`|Referenciar a una variable no encontrada.|
|`TypeError`|Aplicar una operación o función a un objeto de tipo incorrecto.|
|`ZeroDivisionError`|Dividir por cero.|

### Escribir un bloque try/except en Python

{% include codeHeader.html icon="python" %}
```python
consultar = True

while consultar:
	try:
		edad = int(input("Ingrese su edad: "))
		consultar = False
	except ValueError:
		print("Debe ingresar un número")
```
{: .nolineno }

### Capturar múltiples excepciones

{% include codeHeader.html icon="python" %}
```python
consultar = True

while consultar:
	try:
		edad = int(input("Ingrese su edad: "))
		divisor = int(input("Ingrese un número para dividir su edad: "))
		print(edad / divisor)
		consultar = False
	except ValueError:
		print("Debe ingresar un número")
	except ZeroDivisionError:
		print("El N° por el cual desea dividir no puede ser 0")
	except Exception as e:
		print(f"ERROR: {e}")
	except:
		print("ERROR SIN INFORMACIÓN")
```
{: .nolineno }

### Lanzamiento de excepciones

Esto es posible mediante la declaración `raise`. Para ello, se debe indicar el tipo de excepción o generar una instancia de ella.

> **Ojo**: en caso de que se genere una instancia, se puede ingresar como argumento de su constructor el valor asociado de la excepción.

{% include codeHeader.html icon="python" %}
```python
consultar = True

while consultar:
	try:
		edad = int(input("Ingrese su edad: "))
		if edad < 0:
			raise Exception("Edad debe ser un N° positivo")
		divisor = int(input("Ingrese un número para dividir su edad: "))
		print(edad / divisor)
		consultar = False
	except ValueError:
		print("Debe ingresar un número")
	except ZeroDivisionError:
		print("El N° por el cual desea dividir no puede ser 0")
	except Exception as e:
		print(f"ERROR: {e}")
```
{: .nolineno }


### Excepciones definidas por el usuario

Para definir una excepción, se debe **crear una clase que derive de la clase base Excepción** (o de alguna bajo su jerarquía).

El valor asociado de una excepción corresponde en realidad a una lista de argumentos (`*args`), por lo que se puede especificar cualquier atributo (o atributos) en el constructor.

{% include codeHeader.html icon="python" %}
```py
class Error(Exception):
	pass

class EdadError(Error):
	def __init__(self, mensaje, edad):
		self.mensaje = mensaje
		self.edad = edad

consultar = True

while consultar:
	try:
		edad = int(input("Ingrese su edad: "))
		if edad < 0:
			raise EdadError("Debe ser un N° positivo.", edad)
		divisor = int(input("Ingrese número para dividir su edad: "))
		print(edad / divisor)
		consultar = False
	except ValueError:
		print("Debe ingresar un número")
	except ZeroDivisionError:
		print("El N° por el cual desea dividir no puede ser cero")
	except EdadError as e:
		print(f"La edad '{e.edad}' no es válida. {e.mensaje}")
	except Exception as e:
		print(f"ERROR: {e}")
```
{: .nolineno }


### Acciones de limpieza con finally

{% include codeHeader.html icon="python" %}
```py
class Error(Exception):
	pass

class EdadError(Error):
	def __init__(self, mensaje, edad):
		self.mensaje = mensaje
		self.edad = edad

intentos = 0
while intentos <= 3:
	try:
		edad = int(input("Ingrese su edad: "))
		if edad < 0:
			raise EdadError("Debe ser un N° positivo.", edad)
		divisor = int(input("Ingrese número para dividir su edad: "))
		print(edad / divisor)
	except ValueError:
		print("Debe ingresar un número")
	except ZeroDivisionError:
		print("El N° por el cual desea dividir no puede ser cero")
	except EdadError as e:
		print(f"La edad '{e.edad}' no es válida. {e.mensaje}")
	except Exception as e:
		print(f"ERROR: {e}")
	finally:
		intentos +=1
```
{: .nolineno }