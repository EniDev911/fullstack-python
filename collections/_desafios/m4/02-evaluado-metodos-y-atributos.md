---
layout: post
title: "Métodos y Atributos"
subtitle: "M4 - Desafío Evaluado"
show: true
show_next: true
type: evaluado
modulo: m4
github:
  name: enidev911/m4-evaluado-metodos-y-atributos
---

## Descripción

Una cadena de pizzería desea crear una aplicación para que los clientes puedan autogestionar sus pedidos. Por ahora, se te solicita crear un prototipo que resuelva el algoritmo que permita a un usuario ordenar una pizza de 3 ingredientes, y escoger el tipo de masa. Para ello debes utilizar Python y las características de la POO.

En esta cadena, una pizza puede tener **2 tipos de ingredientes**, **vegetales** y **proteicos**, y su **masa** puede ser **tradicional** o **delgada**. Dentro de los vegetales, las posibilidades son **tomate**, **aceitunas** y **champiñones**. Dentro de los proteicos, las posibilidades son **pollo**, **vacuno** o **carne vegetal**. Sin embargo, los ingredientes posibles pueden variar debido al **stock** y/o estacionalidad, por lo que se debe considerar que no siempre serán las alternativas posibles. Cualquier pizza ordenada debe tener 1 ingrediente proteico y 2 vegetales. Todas las pizzas tienen un precio de **$10.000** y **tamaño familiar**.

---

## Desarrollo

### Requerimiento 1

En el archivo `pizza.py`, crear una clase que permita crear objetos de tipo **Pizza**. Considerar qué atributos de clase debe contener la clase, según la descripción del problema.

Procedemos a crear el archivo `pizza.py`:

{% include newfile.html file="pizza.py" %}

La solución a este requerimiento es la siguiente:

{% include codeHeader.html file="pizza.py" compiler="y" %}
```py
class Pizza():
	"""
	Una simple clase que permite crear objetos de tipo Pizza.
	Nuestros atributos de clase serán para todos los objetos pizza.
	Sabemos que todas las pizzas tienen un costo de '$10.000'.
	Sabemos que todas las pizzas son de tamaño 'familiar'.
	"""
	precio = 10000 # 👈 atributo de clase
	tamanio = "familiar" # 👈 atributo de clase

if __name__ == "__main__":
	print(Pizza.precio)
	print(Pizza.tamanio)
```
{: .nolineno }

### Requerimiento 2

En el mismo archivo y clase del requerimiento anterior, agregar un método que permita validar un elemento dentro de una lista de casos posibles. Este método se debe **poder utilizar sin necesidad de crear un objeto de la clase**, y debe recibir 2 argumentos:

- El elemento a validar (un `string`)
- Los valores posibles a considerar para el elemento ingresado (una lista de `string`)

En caso de que el elemento ingresado como primer argumento se encuentre en la **lista de valores** posibles ingresadas como segundo argumento, el método debe retornar `True`. En caso contrario, debe retornar `False`.

La solución a este requerimiento es la siguiente:

{% tabs demo_method %}
{% tab demo_method método %}
{% include codeHeader.html file="pizza.py" %}
{6 7 8}
```python
class Pizza:

	precio = 10000
	tamanio = "familiar"

	@staticmethod
	def validar(elemento: str, opciones: list) -> bool:
		return False if elemento not in opciones else True
```
{: .nolineno }
{% endtab %}
{% tab demo_method demo %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
class Pizza:

	precio = 10000
	tamanio = "familiar"

	@staticmethod
	def validar(elemento: str, opciones: list) -> bool:
		return False if elemento not in opciones else True

if __name__ == "__main__":
	print(Pizza.validar('queso', ['huevos', 'queso']))
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Requerimiento 3

En el mismo archivo y clase del requerimiento anterior, agregar un **método** que permita realizar un pedido. Para ello, dentro de la definición de este método debe hacer lo siguiente:

- solicitar al usuario ingresar el **ingrediente proteico**.
- solicitar al usuario el primer ingrediente **vegetal**.
- solicitar al usuario el segundo ingrediente **vegetal**.
- solicitar al usuario el **tipo de masa**.

Cada ingreso debe almacenarse (o añadirse, si corresponde) en un atributo de la instancia.

Dentro del mismo método del requerimiento anterior, **una vez asignado los valores** a los atributos de la instancia, **debe evaluarse si se trata de un ingreso válido** (considerar información de la descripción), usando el método del requerimiento 2. **Si los 3 ingredientes y el tipo de masa son válidos**, deberá almacenar en un atributo el valor `True`. En caso contrario, deberá almacenar el valor `False`. Este atributo permitirá saber si una instancia es o no una **Pizza** válida.

La solución a este requerimiento es la siguiente:

{% tabs demo_method3 %}
{% tab demo_method3 método %}
{% include codeHeader.html file="pizza.py" %}
```python
	def ordenar(self):

		print(f"Ingredientes disponibles: {I_PROTEICOS}")
		self.proteico = input("Ingresa el ingrediente proteico: ").lower()

		print(f"\nIngredientes disponibles: {I_VEGETALES}")
		self.vegetal1 = input("Ingresa el primer ingrediente vegetal: ").lower()

		if Pizza.validar(self.vegetal1, I_VEGETALES):
			tmp_vegeles = I_VEGETALES.copy()
			tmp_vegeles.remove(self.vegetal1)

		print(f"\nIngredientes disponibles: {tmp_vegeles}")
		self.vegetal2 = input("\nIngresa el segundo ingrediente vegetal: ").lower()

		print(f"\nIngredientes disponibles: {T_MASA}")
		self.t_masa = input(f"Ingresa el tipo de masa: ")

		self.es_valido = (
			Pizza.validar(self.proteico, I_PROTEICOS)
			and Pizza.validar(self.vegetal1, I_VEGETALES)
			and Pizza.validar(self.vegetal2, I_VEGETALES)
			and Pizza.validar(self.t_masa, T_MASA)
		)
```
{: .nolineno }
{% endtab %}
{% tab demo_method3 demo %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
class Pizza:

	I_PROTEICOS = ["pollo", "vacuno", "carne vegetal"]
	I_VEGETALES = ["tomate", "aceitunas", "champiñones"]
	T_MASA = ["tradicional", "delgada"]

	@staticmethod
	def validar(elemento: str, opciones: list) -> bool:

		return False if elemento not in opciones else True

	def ordenar(self):

		print(f"Ingredientes disponibles: {self.I_PROTEICOS}")
		self.proteico = input("Ingresa el ingrediente proteico: ").lower()

		print(f"\nIngredientes disponibles: {self.I_VEGETALES}")
		self.vegetal1 = input("Ingresa el primer ingrediente vegetal: ").lower()

		if Pizza.validar(self.vegetal1, self.I_VEGETALES):
			tmp_vegeles = self.I_VEGETALES.copy()
			tmp_vegeles.remove(self.vegetal1)

		print(f"\nIngredientes disponibles: {tmp_vegeles}")
		self.vegetal2 = input("\nIngresa el segundo ingrediente vegetal: ").lower()

		print(f"\nIngredientes disponibles: {self.T_MASA}")
		self.t_masa = input(f"Ingresa el tipo de masa: ")

		self.es_valido = (
			Pizza.validar(self.proteico, self.I_PROTEICOS)
			and Pizza.validar(self.vegetal1, self.I_VEGETALES)
			and Pizza.validar(self.vegetal2, self.I_VEGETALES)
			and Pizza.validar(self.t_masa, self.T_MASA)
		)

if __name__ == "__main__":
	p = Pizza()
	p.ordenar()
	print("¿El pedido es válido?:", p.es_valido)
```
{: .nolineno }
{% endtab %}
{% endtabs %}


### Requerimiento 4

Dentro del mismo método del requerimiento 3, una vez asignados los valores a los atributos de instancia, debe evaluarse si se trata de un ingreso válido, usando el método del requerimiento 2. **Si los 3 ingredientes y el tipo de masa son válidos**, deberá almacenar en un atributo el valor `True`. En caso contrario, deberá almacenar el valor `False`. Este atributo permitirá saber si una instancia específica es o no una Pizza válida.

> **Tip**: Si lo deseas, puedes crear un archivo `ingredientes.py`que contenga 3 **variables de tipo lista**, una con los valores de ingredientes cárnicos posibles, otra con los valores de ingredientes de tipo vegetales, y otra con los valores posibles del tipo masa, e importar este archivo en el de la clase.

La solución a este requerimiento es la siguiente:

{% tabs requi4 %}
{% tab requi4 ingredientes %}
{% include codeHeader.html file="ingredientes.py" %}
```py
T_MASA = ['tradicional', 'delgada']
I_VEGETALES = ['tomate', 'aceitunas', 'champiñones']
I_PROTEICOS = ['pollo', 'vacuno', 'carne vegetal']
```
{: .nolineno }
{% endtab %}
{% tab requi4 clase Pizza %}
{% include codeHeader.html file="pizza.py" %}
```python
from ingredientes import I_PROTEICOS, I_VEGETALES, T_MASA

class Pizza:

	precio = 10000
	tamanio = "familiar"

	@staticmethod
	def validar(elemento: str, opciones: list) -> bool:
		return False if elemento not in opciones else True

	def ordenar(self):

		self.proteico = input(
			f"Ingresa el ingrediente proteico {I_PROTEICOS}: "
		).lower()
		self.vegetal1 = input(
			f"Ingresa el primer ingrediente vegetal {I_VEGETALES}: "
		).lower()

		tmp_vegetales = I_VEGETALES.copy()
		(
			tmp_vegetales.remove(self.vegetal1)
			if Pizza.validar(self.vegetal1, tmp_vegetales)
			else 0
		)

		self.vegetal2 = input(
			f"Ingresa el segundo ingrediente vegetal {tmp_vegetales}: "
		).lower()

		self.t_masa = input(f"Ingresa el tipo de masa {T_MASA}: ").lower()

		self.es_valido = (
			Pizza.validar(self.proteico, I_PROTEICOS)
			and Pizza.validar(self.vegetal1, I_VEGETALES)
			and Pizza.validar(self.vegetal2, I_VEGETALES)
			and Pizza.validar(self.t_masa, T_MASA)
		)


if __name__ == "__main__":
	p = Pizza()
	p.ordenar()
	print(p.es_valido)
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Requerimiento 5

En un archivo llamado `evaluaciones.py`, importe la clase creada en el requerimiento 1 (conteniendo los  requerimientos 2, 3 y 4), y realice lo siguiente:

- Usar la función `print()`, para que al ejecutar el script se muestre en pantalla los valores de los atributos de clase de la clase importada (**Pizza**), sin crear una instancia de ella.
- Usar la función `print()`, para que al ejecutar el script se muestre en pantalla si el elemento `"salsa de tomate"` se encuentra presente en la lista `["salsa de tomate", "salsa bbq"]`. Para ello use el método creado en el requerimiento 2, sin crear una instancia de la clase importada.
- Crear una instancia de la clase importada, y luego llamar al método del requerimiento 3, para que al ejecutar el script se solicite ingredientes y tipo de masa al usuario.
- Usar la función `print()`, para que al ejecutar script, luego de que el usuario haya ingresado los ingredientes y tipo de masa, se muestre en pantalla los ingredientes vegetales, el ingrediente proteico y el tipo de masa de la instancia creada en el paso anterior, y si esa instancia es una pizza válida
- Usar la función `print()`, para mostrar en pantalla si la clase Pizza es una pizza válida o no, haciendo uso del atributo creado en el requerimiento 4, **sin crear una instancia de la clase**. En este punto, la ejecución del script debe mostrar un error (todos los pasos anteriores se deben haber ejecutado correctamente).

La solución a este requerimiento es la siguiente:

{% tabs req_5 %}
{% tab req_5 evaluaciones %}
{% include codeHeader.html file="evaluaciones.py" %}
```py
from pizza import Pizza

# 1 al ejecutar el script se muestre en pantalla los valores de lo atributos clase
# de la clase importada Pizza, sin crear una instacia de ella.
print(Pizza.precio)
print(Pizza.tamanio)
```
{: .nolineno }
{% endtab %}
{% tab req_5 ingredientes %}
{% include codeHeader.html file="ingredientes.py" %}
```py
T_MASA = ['tradicional', 'delgada']
I_VEGETALES = ['tomate', 'aceitunas', 'champiñones']
I_PROTEICOS = ['pollo', 'vacuno', 'carne vegetal']
```
{: .nolineno }
{% endtab %}
{% tab req_5 clase pizza %}
{% include codeHeader.html file="pizza.py" %}
```python
from ingredientes import I_PROTEICOS, I_VEGETALES, T_MASA

class Pizza:

	precio = 10000
	tamanio = "familiar"

	@staticmethod
	def validar(elemento: str, opciones: list) -> bool:
		return False if elemento not in opciones else True

	def ordenar(self):

		self.proteico = input(
			f"Ingresa el ingrediente proteico {I_PROTEICOS}: "
		).lower()
		self.vegetal1 = input(
			f"Ingresa el primer ingrediente vegetal {I_VEGETALES}: "
		).lower()

		tmp_vegetales = I_VEGETALES.copy()
		(
			tmp_vegetales.remove(self.vegetal1)
			if Pizza.validar(self.vegetal1, tmp_vegetales)
			else 0
		)

		self.vegetal2 = input(
			f"Ingresa el segundo ingrediente vegetal {tmp_vegetales}: "
		).lower()

		self.t_masa = input(f"Ingresa el tipo de masa {T_MASA}: ").lower()

		self.es_valido = (
			Pizza.validar(self.proteico, I_PROTEICOS)
			and Pizza.validar(self.vegetal1, I_VEGETALES)
			and Pizza.validar(self.vegetal2, I_VEGETALES)
			and Pizza.validar(self.t_masa, T_MASA)
		)


if __name__ == "__main__":
	p = Pizza()
	p.ordenar()
	print(p.es_valido)
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Repositorio

{% include repository.html repo=page.github %}

*[POO]: "Programación Orientada a Objetos"