---
layout: post
title: Día 04 - Constructor, accesadores y mutadores
subtitle: Ejercicios Guiados - Día 4
modulo: m4
type: ejercicio
show: true
show_next: true
---


## Cadena Farmacéutica

### 1. Ingreso de medicamentos

Desde la cadena farmacéutica, te han solicitado generar un prototipo de aplicación que permita generar medicamentos a partir de datos ingresados por el usuario. Para ello, el script debe solicitar (mediante línea de comandos) que el usuario ingrese nombre del medicamento, precio y stock.

Con los datos de nombre y stock, debes crear una instancia de la clase `Medicamento`. Esta clase debe ser refactorizada, a partir de la generada en el ejercicio guiado `Crear un método que asigna descuento a un medicamento` del día 02, para cumplir con los siguientes requerimientos:

1. Por defecto, cada medicamento debe tener un precio bruto de 0, precio neto de 0 y descuento de 0. Estos tres datos no se pueden modificar al momento de crear la instancia, por lo que toda instancia creada debe tener estos valores inicialmente.

2. Cada instancia creada debe también tener un nombre, el cual necesariamente debe ser entregado al momento de crear la instancia, y un stock. Si el stock no es entregado al momento de crear la instancia, se debe asignar un valor de 0.

3. El precio bruto se debe asignar en una instancia ya creada. Al ser asignado, en caso de que sea mayor a 0, se debe asignar a la vez el precio bruto del medicamento, el descuento se debe aplicar sobre el precio bruto más el IVA, y solo se aplicará en caso de que el valor del medicamento esté entre $10.000 y $19.000 (10% de descuento), o sea mayor o igual a $20.000 (20% de descuento).

Finalmente, el script debe mostrar en pantalla el nombre del medicamento ingresado y su precio bruto. En caso de tener descuento, también lo debe mostrar en pantalla. Por último, debe mostrar también por pantalla el precio final (considerando IVA y descuento).

**Paso 1**.

A partir del archivo `medicamento.py` modificar la clase `Medicamento` eliminando el atributo descuento y el método asigna precio:

{% include codeHeader.html file="medicamento.py" %}
```py
class Medicamento():
	IVA = 0.18

	@staticmethod
	def validar_mayor_a_cero(numero: int):
		return numero > 0
```
{: .nolineno }

**Paso 2**.

Agregar constructor con parámetro **nombre** sin valor por defecto, y **stock** con valor por defecto de 0. En el cuerpo del constructor, se debe asignar los valores ingresados por parámetro a los atributos de instancia nombre y stock, y asignar con valor 0 los atributos de instancia de los precios y el descuento:

{% include codeHeader.html file="medicamento.py" %}
```py
	def __init__(self, nombre: str, stock: int = 0):
		self.nombre = nombre
		self.stock = stock
		self.precio_bruto = 0
		self.precio_final = 0.0
		self.descuento = 0.0
```
{: .nolineno }

**Paso 3**.

A continuación del código anterior, agregar `@property` precio, para así definir el getter del atributo `precio_final`:

{% include codeHeader.html file="medicamento.py" %}
```py
	@property
	def precio(self):
		return self.precio_final
```
{: .nolineno }


**Paso 4**.

A continuación del código anterior, agregar el setter de la propiedad precio. El método asociado debe recibir como parámetro un precio bruto, dentro de este se debe agregar una validación de que el precio ingresado por parámetro sea mayor a 0:

{% include codeHeader.html file="medicamento.py" %}
```py
	@precio.setter
	def precio(self, precio_bruto: int):
		if self.validar_mayor_a_cero(precio_bruto):
```
{: .nolineno }

**Paso 5**.

Dentro del bloque `if` del paso anterior, asignar el valor del atributo `precio_bruto` desde el valor ingresado por parámetro, y del atributo `precio_final` considerando el IVA:

{% include codeHeader.html file="medicamento.py" %}
```py
	@precio.setter
	def precio(self, precio_bruto: int):
		if self.validar_mayor_a_cero(precio_bruto):
			self.precio_bruto = precio_bruto
			self.precio_final = precio_bruto * self.IVA
```
{: .nolineno }

**Paso 6**.

A continuación del código anterior, dentro del bloque if, asignar valor de descuento, si corresponde, de acuerdo al precio final obtenido:

{% include codeHeader.html file="medicamento.py" %}
```py
	if self.precio_final >= 10000 and self.precio_final < 20000:
		self.descuento  = 0.1
	elif self.precio_final >= 20000:
		self.descuento = 0.2
```
{: .nolineno }

**Paso 7**.

A continuación del código anterior, aplicar descuento

{% include codeHeader.html file="medicamento.py" %}
```py
	if self.descuento:
		self.precio_final *= 1 - self.descuento
```
{: .nolineno }

**Paso 8**.

En un archivo llamado `programa.py`, importar la clase `Medicamento`:

{% include newfile.html file='programa.py' %}

{% include codeHeader.html file="programa.py" %}
```py
from medicamento import Medicamento
```
{: .nolineno }

**Paso 9**.

Solicitar al usuario ingresar el nombre del medicamento, el stock y el precio bruto, luego, almacenar cada ingreso en una variable, y transformar el stock y el precio bruto a número entero:

{% include codeHeader.html file="programa.py" %}
```py
nombre = input("Ingrese nombre del medicamento:\n")
stock = int(input("Ingrese stock del medicamento:\n"))
precio_bruto = int(input("Ingrese precio bruto del medicamento:\n"))
```
{: .nolineno }

**Paso 10**.

A continuación del código anterior, crear una instancia de medicamento y asignar el precio a partir del precio bruto:

{% include codeHeader.html file="programa.py" %}
```py
m1 = Medicamento(nombre, stock)
m1.precio = precio_bruto
```
{: .nolineno }

**Paso 11**.

A continuación del código anterior, mostrar en pantalla el nombre del medicamento y el precio bruto:

{% include codeHeader.html file="programa.py" %}
```py
print(f"El precio bruto del medicamento {m1.nombre} es {m1.precio_bruto}")
```
{: .nolineno }

**Paso 12**.

A continuación del código anterior, si tiene descuento, mostrar en pantalla:

{% include codeHeader.html file="programa.py" %}
```python
if m1.descuento:
	print(f"Tiene un descuento de {m1.descuento * 100}%")
```
{: .nolineno }

**Paso 13**.

A continuación del código anterior, mostrar en pantalla el precio final:

{% include codeHeader.html file="programa.py" %}
```py
print(f"El precio final del medicamento es {m1.precio_final}")
```
{: .nolineno }

---

### 2. Stock de medicamentos

Desde la cadena farmacéutica para la cual has venido desarrollando un programa para manejar los medicamentos en venta, te solicitan esta vez crear un prototipo que permita manejar el stock de medicamentos a medida que son ingresados. En este contexto, el cliente especifica que el programa debe considerar lo siguiente:


- Para ingresar un medicamento se debe solicitar nombre y stock, y añadir a un listado de medicamentos ingresados.
- Dos medicamentos se consideran iguales si tienen el mismo nombre (insensible a mayúsculas).
- Solo se debe solicitar (y asignar) el precio (considerando lo mismo del programa anterior en cuanto a IVA, descuento y precio final) en caso de que se ingrese un medicamento que no existe.
- Si se ingresa un medicamento que ya existe, se debe agregar al stock del medicamento existente el del medicamento del nuevo ingreso.
- Luego de cada ingreso (de un medicamento nuevo existente), se debe  informar nombre del medicamento ingresado, precio bruto, descuento (si posee), el precio final, stock, y cantidad de medicamentos distintos que tiene ingresados la farmacia.
- El programa debe permitir un nuevo ingreso de medicamento hasta que el usuario indique lo contrario.

**Paso 1**.

A partir de la clase `Medicamento` del archivo `medicamento.py` del ejercicio anterior "Ingreso de medicamento", sobrecarga el método `__eq__`, de forma que dos instancias de `Medicamento` se consideren iguales si sus nombres son iguales (independiente de mayúsculas y minúsculas):

{% include codeHeader.html file="medicamento.py" %}
```python
class Medicamento():

	def __init__(self, nombre: str, stock: int = 0):
		self.nombre = nombre
		self.stock = stock
		self.precio_bruto = 0
		self.precio_final = 0.0
		self.descuento = 0.0

	@staticmethod
	def validar_mayor_a_cero(numero: int):
		return numero > 0

	@property
	def precio(self):
		return self.precio_bruto

	@precio.setter
	def precio(self, precio_bruto: int):
		if self.validar_mayor_a_cero(precio_bruto):
			self.precio_bruto = precio_bruto
			self.precio_final = precio_bruto + precio_bruto * IVA

			if self.precio_final >= 10000 and self.precio_final < 20000:
				self.descuento = 0.1 
			elif self.precio_final >= 20000:
				self.decuento = 0.2

			if self.descuento:
				self.precio_final *= 1 - self.descuento

	def __eq__(self, other):
		return self.nombre.lower() == other.nombre.lower()
```
{: .nolineno }

**paso 2**.

A continuación del código anterior, sobrecargar el método `__iadd__` (permite sobrecargar operación de asignación `+=`), de forma que, al sumar dos instancias iguales de `Medicamento`, se añada al stock de la instancia actual el stock de la segunda instancia. El método debe retornar la instancia actual:


{% include codeHeader.html file="medicamento.py" %}
```py
	def __iadd__(self, other):
		if self == other:
			self.stock += other.stock
		return self
```
{: .nolineno }

**Paso 3**.

En el archivo `programa.py`, luego de importar la clase `Medicamento`, consultar mediante `input` si el usuario desea ingresar un medicamento y almacenar la opción ingresada en una variable. También iniciar una lista vacía donde se irán almacenando los medicamentos ingresados:

{% include codeHeader.html file="medicamento.py" %}
```py
from medicamento import Medicamento

opcion_ingreso = int(input("¿Desea agregar un medicamento?\n1. Si\n2. No\n"))
ingresados = []
```
{: .nolineno }

**Paso 4**.

A continuación del código anterior, iniciar un ciclo `while` que tenga como condición de ingreso que la opción ingresada en el paso anterior sea 1. Dentro del ciclo, consultar nombre y stock, y crear una instancia de `Medicamento` con estos datos:

{% include codeHeader.html file="programa.py" %}
```python
while opcion_ingreso == 1:
	nombre = input("\nIngrese nombre del medicamento:\n")
	stock = int(input("\nIngrese stock del medicamento:\n"))
	m = Medicamento(nombre, stock)
```
{: .nolineno }

**Paso 5**.

A continuación del código anterior, consultar si el nuevo medicamento se encuentra ya ingresado (**Nota**: el operador `in` desencadena un llamado `__eq__`). De ser así, realizar la suma de stocks y remplazar el medicamento ingresado por el existente:

{% include codeHeader.html file="programa.py" %}
```python
	if m in ingresados:
		indice = ingresados.index(m)
		ingresados[index] += m
```
{: .nolineno }

**Paso 6**.

En caso de que no se cumpla la condición anterior, solicitar el precio, asignar y agregar el medicamento a la lista de ingresados:


{% include codeHeader.html file="programa.py" %}
```python
	else:
		ingresados.append(m)
		precio_bruto = int(input("\nIngrese precio bruto del medicamento:\n"))
		m.precio = precio_bruto
```
{: .nolineno }

**Paso 7**.

Luego de finalizar el ingreso, muestre en pantalla los datos del medicamento ingresado, y la cantidad de medicamentos distintos ingresados:

{% include codeHeader.html file="programa.py" %}
```py
	print(f"\n**** DATOS MEDICAMENTO {m.nombre} ****")
	print(f"PRECIO BRUTO: ${m.precio_bruto}")
	if m.descuento:
		print(f"DESCUENTO: {m.descuento * 100}%")
	print(f"PRECIO FINAL: ${m.precio}")
	print(f"STOCK: {m.stock}")

	print(f"\nLa farmacia cuenta con {len(ingresados)} medicamentos\n")
```
{: .nolineno }

**Paso 8**.


Por último, al final del ciclo, consultar nuevamente si se desea ingresar o no un nuevo medicamento:

{% include codeHeader.html file="programa.py" %}
```python
	opcion_ingreso = int(input("¿desea agregar un medicamento?\n1. Sí\n2. No\n"))
```
{: .nolineno }