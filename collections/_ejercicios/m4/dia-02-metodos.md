---
layout: post
title: Día 02 - Métodos
subtitle: Ejercicios Guiados - Día 2
modulo: m4
type: ejercicio
show: true
show_next: true
---

## Cadena Farmacéutica

### 1. Crear método que asigna un precio válido

Desde la cadena farmacéutica donde se está desarrollando el software que permite manejar el stock de medicamentos, se solicita que el programa permita asignar un precio ingresado por el usuario a cada instancia creada. Sin embargo, no es posible usar una asignación simple de valor al atributo, ya que antes de asignar un precio a cualquier medicamento se debe validar que este sea un precio válido (mayor a 0).

- Para cumplir con lo requerido, agrega un método de instancia al código existente hasta el momento, que dentro de su lógica llame al método que valida un precio positivo.
- Si el retorno del llamado es `True`, se asigna el valor ingresado por parámetro al valor de precio de la instancia de la clase, y si el retorno es `False`, no se asigna el valor y se muestra un mensaje en pantalla.

**Paso 1**.

Definir la clase `Medicamento` según el ejercicio guiado anterior en día 1:

{% include codeHeader.html file="medicamento.py" %}
```python
class Medicamento():
	descuento = 0.05
	IVA = 0.18

	@staticmethod
	def validar_mayor_a_cero(numero: int):
		return numero > 0
```
{: .nolineno }

**Paso 2**.

A continuación del código anterior, a nivel de la clase, definir **método de instancia** que asigna al precio de la instancia el precio ingresado como parámetro del método:

{% include codeHeader.html file="medicamento.py" %}
```python
	def asigna_precio(self, precio_entregado: int):
```
{: .nolineno }

**Paso 3**.

Dentro del método anterior, hacer el llamado al método que válida que un número sea mayor a 0, dando como argumento el precio ingresado por parámetro, y almacenar retorno en una variable local.

{2}
```python
	def asigna_precio(self, precio_entregado: int):
		es_valido = self.validar_mayor_a_cero(precio_entregado)
```
{: .nolineno }

**Paso 4**

Dentro del método `asigna_precio`, evaluar si `es_valido` es igual a `True`. De ser así, asignar el parámetro ingresado a la variable precio de la instancia.

{3 4}
```python
	def asigna_precio(self, precio_entregado: int):
		es_valido = self.validar_mayor_a_cero(precio_entregado)
		if es_valido:
			self.precio = precio_entregado
```

**Paso 5**

Concatenar al `if` declarado una cláusula `else`, dentro de la cual se ejecute un `print` indicando que el precio ingresado por parámetro no es válido.

{5 6 7}
```python
	def asigna_precio(self, precio_entregado: int):
		es_valido = self.validar_mayor_a_cero(precio_entregado)
		if es_valido:
			self.precio = precio_entregado
		else:
			print("El precio '{}' no es un precio válido".format(precio_entregado))
```
{: .nolineno }


**Paso 6**.


En un script `ejecucion.py` importar la clase `Medicamento` desde el archivo `medicamento.py`:

{% include codeHeader.html file="ejecucion.py" %}
```python
from medicamento import Medicamento
```
{: .nolineno }

**Paso 7**.

Crear una instancia de medicamento:

{% include codeHeader.html file="ejecucion.py" %}
```python
medicamento_nuevo = Medicamento()
```
{: .nolineno }

**Paso 8**.

Almacenar en una variable, como entero, el precio ingresado por el usuario:

{% include codeHeader.html file="ejecucion.py" %}
```python
precio = int(input("Ingese el precio del medircamento\n> "))
```
{: .nolineno }

**Paso 9**.

Hacer la asignación en la instancia:

{% include codeHeader.html file="ejecucion.py" %}
```python
medicamento_nuevo.asigna_precio(precio)
```
{: .nolineno }

### 2. Crear método que asigna descuento a un medicamento

Continuando con el desarrollo de la farmaceútica, se pide esta vez que en el método que asigna el precio válido, se asigne un descuento siguiendo las siguientes reglas:

- 10% de descuento si el medicamento cuesta entre $10.000 y $19.999
- 20% de descuento si el medicamento cuesta entre $20.000 y $29.999
- 30% de descuento si el medicamento cuesta entre $30.000 o más.

El descuento se debe definir como un número decimal (`0.1` si es 10%, `0.2` si es 20% y `0.3` si es 30%)


**Paso 1**.

Definir la clase `Medicamento` según el ejercicio anterior:

{% include codeHeader.html file="medicamento.py" %}
```py
class Medicamento():
	descuento = 0.05
	IVA = 0.18

	@staticmethod
	def validar_mayor_a_cero(numero: int):
		return numero > 0

	def asigna_precio(self, precio_entregado: int):
		es_valido = self.validar_mayor_a_cero(precio_entregado)
		if es_valido:
			self.precio = precio_entregado
		else:
			print("El precio '{}' no es un precio válido".format(precio_entregado))
```
{: .nolineno }


**Paso 2**.

Si el precio es válido, definir el atribuito de instancia "descuento" con valor por defecto 0 (se muestra solo bloque `if` del método `asigna_precio` del código anterior):

{3}
```py
		if es_valido:
			self.precio = precio_entregado
			self.descuento = 0.0
```

**Paso 3**.


Aplicar reglas de negocio entregadas para el valor del descuento de acuerdo al valor del precio para la instancia:

{5 6 7 8 9 10}
```py
		if es_valido:
			self.precio = precio_entregado
			self.descuento = 0.0

			if self.precio >= 10000 and self.precio < 20000:
				self.descuento = 0.1
			elif self.precio >= 20000 and self.precio < 30000:
				self.descuento = 0.2
			elif self.precio >= 30000:
				self.descuento = 0.3
```

---

## Tienda Nuestras Mascotas

### 1. Tienda de artículos para mascotas

La tienda "**Nuestras mascotas**" se dedica a la venta de productos para perros, gatos y mascotas exóticas. Actualmente, se está evaluando la idea de realizar una tienda virtual, para lo cual se requiere primero realizar un prototipo en Python que permita ingresar una orden de compra. Cada orden de compra tiene un **identificador** (un código numérico), un **total de productos**, **un monto**, y **un código de descuento**. El código de descuento, por defecto una cadena vacía, puede ser "10PORCIENTO" si el monto es superior a 10.000, o "20PORCIENTO" si es mayor a 20.000.

Para crear este programa, se debe crear la clase que permita definir la estructura de cada orden de compra creada, y un script que, al ser ejecutado, cree una instancia de esa clase y asigne a la instancia los valores para el identificador, el total de productos, el monto y el código de descuento (si corresponde). Estos valores deben ser solicitados desde la línea de comandos al momento de ejecutar el script.

**Paso 1**.

Crear un archivo `orden_compra.py` y definir la clase `OrdenCompra`:

{% include newfile.html file='orden_compra.py' %}

{% include codeHeader.html file="orden_compra.py" %}
```py
class OrdenCompra():

	# Se crea un método de instancia para definir atributos
	def nueva_orden(self):
		# Se define los atributos de instancia
		self.indentificador = 0
		self.total_productos = 0
		self.monto = 0
		self.codigo_descuento = ""
```
{: .nolineno }

**Paso 2**.

Crear un archivo `generar_orden.py` que importe la clase `OrdenCompra` desde `orden_compra`:

{% include newfile.html file='generar_orden.py' %}

{% include codeHeader.html file="generar_orden.py" %}
```py
from orden_compra import OrdenCompra
```
{: .nolineno }

**Paso 3**.

En el script anterior, a continuación, crear un objeto de tipo `OrdenCompra`, y llamar al método `nueva_orden`:

{% include codeHeader.html file="generar_orden.py" %}
```py
oc = OrdenCompra()
oc.nueva_orden()
```
{: .nolineno }

**Paso 4**.

A continuación de la línea anterior, solicitar al usuario el valor para el identificador, mediante la función `input()`:

{% include codeHeader.html file="generar_orden.py" %}
```py
oc.identificador = int(input("Ingrese identificador de la OC:\n> "))
```
{: .nolineno }

**Paso 5**.

En las dos líneas siguientes, repetir el paso anterior para el total de productos y el monto:

{% include codeHeader.html file="generar_orden.py" %}
```py
oc.total_productos = int(input("Ingrese total de productos:\n> "))
oc.monto = int(input("Ingrese monto:\n> "))
```
{: .nolineno }

**Paso 6**.

Determinar si se debe aplicar un código de descuento. El valor del código de descuento no se debe solicitar al usuario, sino que lo determina el programa según lo ingresado por el usuario en el atributo monto:

{% include codeHeader.html file="generar_orden.py" %}
```py
if oc.monto > 20000:
	oc.codigo_descuento = "20PORCIENTO"
elif oc.monto > 10000:
	oc.codigo_descuento = "10PORCIENTO"
```
{: .nolineno }

### 2. Refactorizar tienda de artículos

Desde la tienda Nuestras Mascotas, te solicitan refactorizar la clase `OrdenCompra`, de tal forma, que la lógica que aplica un código de descuento se ejecute cada vez que asigna un monto, lo cual se debe realizar mediante un método propio, en lugar del operador símbolo `"="`. De la misma forma, te solicitan que solo las instancias que tengan un monto asignado mediante este método cuenten con el atributo `codigo_descuento`. EL script que instancia la clase y solicita los valores al usuario, debe llamar al nuevo método creado al momento de asignar el monto, en lugar de hacer uso del símbolo `"="` para la asignación.

**Paso 1**.

Del ejercicio anterior, eliminar `codigo_descuento`, y definir método de instancia `asigna_monto`:

{% include codeHeader.html file="orden_compra.py" %}
```py
class OrdenCompra():

	# Se crea un método de instancia para definir atributos
	def nueva_orden(self):
		# Se define los atributos de instancia
		self.indentificador = 0
		self.total_productos = 0
		self.monto = 0

	def asigna_monto(self, nuevo_monto: int):
```
{: .nolineno }

**Paso 2**.

Dentro del método `asigna_monto`, asignar el monto ingresado al atributo, y definir el código de descuento como una cadena vacía.

{% include codeHeader.html file="orde_compra.py" %}
```py
	def asigna_monto(self, nuevo_monto: int):
		self.monto = nuevo_monto
		self.codigo_descuento = ""
```
{: .nolineno }

**Paso 3**.

Dentro del mismo método, incluir la lógica que asigna descuento (tomado del script `generar_orden.py`):

{5 6 7 8}
```py
	def asigna_monto(self, nuevo_monto: int):
		self.monto = nuevo_monto
		self.codigo_descuento = ""

		if oc.monto > 20000:
			oc.codigo_descuento = "20PORCIENTO"
		elif oc.monto > 10000:
			oc.codigo_descuento = "10PORCIENTO"
```
{: .nolineno }

### 3. Refactorizar script generar_orden

Desde la tienda Nuestras Mascotas, te solicitan refactorizar el script `generar_orden.py`, de tal forma, que se pueda modificar el valor del monto mediante el método `asigna_monto`. Por ahora, el identificador y el total de productos deben mantener su forma de asignación.

Se solicita además que una vez asignado el monto se muestre en pantalla el código de descuento.

**Paso 1**.

A partir del script `generar_orden.py` desarrollado anteriormente, elimina la asignación del monto y del código de descuento:

{% include codeHeader.html file="generar_orden.py" %}
```py
from orden_compra import OrdenCompra

oc = OrdenCompra()
oc.nueva_orden()
oc.identificador = int(input("Ingrese identificador de la OC:\n> "))
oc.total_productos = int(input("Ingrese total de productos:\n> "))
```
{: .nolineno }

**Paso 2**.

Almacena en una variable el ingreso del usuario para el valor del monto:

{% include codeHeader.html file="generar_orden.py" %}
```py
monto = int(input("Ingrese monto:\n> "))
```
{: .nolineno }

**Paso 3**.

Desde la instancia `oc`, llama al método `asigna_monto`, usando como argumento la variable monto:

{% include codeHeader.html file="generar_orden.py" %}
```py
oc.asigna_monto(monto)
```
{: .nolineno }

**Paso 4**

Utiliza la instancia `oc` para mostrar en pantalla el valor del atributo `codigo_descuento`:

{% include codeHeader.html file="generar_orden.py" %}
```py
print(oc.codigo_descuento)
```
{: .nolineno }


