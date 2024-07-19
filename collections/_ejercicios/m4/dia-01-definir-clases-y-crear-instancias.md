---
layout: post
title: Definir clase y crear instancias
subtitle: Ejercicios Guiados - Día 1
modulo: m4
type: ejercicio
show: true
show_next: true
---

### Definir la clase Medicamento

Trabajas como programador para una cadena de farmacias que desea desarrollar un software para manejar su stock de medicamentos.

Como primera entrega, debes definir la clase que permite crear objetos de tipo **Medicamento**, los que tienen un **descuento** de 5% y un **IVA** de 18%.

**Paso 1**.

Definir la clase medicamento:

{% include codeHeader.html icon="python" %}
```python
class Medicamento():
```
{: .nolineno }

**Paso 2**.

Agregar el atributo `descuento` con un valor 0.05:

{% include codeHeader.html icon="python" %}
```python
class Medicamento():
	descuento = 0.05
```
{: .nolineno }

**Paso 3**.

Agregar el atributo `IVA` con valor 0.18:

{% include codeHeader.html icon="python" %}
```python
class Medicamento():
	descuento = 0.05
	IVA = 0.18
```
{: .nolineno }

---

### Crear una instancia de Medicamento

Desde la cadena farmaceútica, ahora solicitan que cada vez que se inicie el programa se debe generar una nueva instancia de un **Medicamento**.

Considera que el programa principal se ejecuta desde un archivo diferente a donde se ha definido la clase.

**Paso 1**.

Importar la clase `Medicamento` desde el módulo medicamento (`medicamento.py`), en el archivo actual (`programa.py`):

{% include codeHeader.html file="programa.py" %}
```python
from medicamento import Medicamento
```
{: .nolineno }

**Paso 2**.

Instanciar la clase `Medicamento` y almacenar la instancia en una variable:

{% include codeHeader.html file="programa.py" %}
```python
from medicamento import Medicamento

primer_medicamento = Medicamento()
```
{: .nolineno }

---

### Uso de la clase de Medicamento

Desde la cadena farmacéutica donde se está desarrollando el software que permite manejar el stock de medicamentos, te informan que se requiere agregar una nueva funcionalidad al programa, y esta consiste en que cada medicamento creado no puede tener un precio igual o menor a 0.

- Para ello, agregue dentro de la clase `Medicamento` un método estático que permita hacer la validación de que un argumento ingresado sea mayor a 0 o no, retornando `True` en caso de cumplir con esta condición, y False en el caso contrario.
- Te solicitan además crear un script que al ejecutarse solicite al usuario ingresar un precio, y mediante el método solicitado se informe en pantalla si es o no un precio válido. El script debe además, validar que todos los medicamentos tengan el mismo IVA y descuento. Para ello, crea dos instancias de la clase, y corrobore que ambas instancias tienen los mismos valores en estos atributos. De ser así, muestra en pantalla los valores de descuento e IVA, haciendo referencia directamente a la clase.

**Paso 1**.

Definir la clase `Medicamento` según el ejercicio guiado anterior, en el archivo `medicamento.py`:

{% include codeHeader.html file="medicamento.py" %}
```python
class Medicamento():
	descuento = 0.05
	IVA = 0.18
```
{: .nolineno }

**Paso 2**.

Definir el métodos estático `validar_mayor_a_cero`:

{5 6}
```python
class Medicamento():
	descuento = 0.05
	IVA = 0.18

	@staticmethod
	def validar_mayor_a_cero(numero: int):
```
{: .nolineno }

**Paso 3**.

Implementar la lógica solicitada dentro del método `validar_mayor_a_cero`:

{7}
```python
class Medicamento():
	descuento = 0.05
	IVA = 0.18

	@staticmethod
	def validar_mayor_a_cero(numero: int):
		return numero > 0
```
{: .nolineno }

**Paso 4**.

En un archivo llamado `programa.py` realiza el `import` de la clase `Medicamento`:

{% include codeHeader.html file="programa.py" %}
```python
from medicamento import Medicamento
```
{: .nolineno }

**Paso 5**.

Solicitar al usuario un precio y validar y almacenar el valor en una variable:

{% include codeHeader.html file="programa.py" %}
```python
precio = int(input("Ingrese un precio a validar:\n> "))
```
{: .nolineno }

**Paso 6**.

Llamar al método para validar precios y almacenar el retorno en una variable:

{% include codeHeader.html file="programa.py" %}
```python
es_valido = Medicamento.validar_mayor_a_cero(precio)
```
{: .nolineno }

**Paso 7**.

Mostrar en pantalla si el precio es válido o no:

{% include codeHeader.html file="programa.py" %}
```python
if es_valido:
	print("El precio ingresado es válido")
else:
	print("El precio no es válido")
```
{: .nolineno }

**Paso 8**.

A continuación del código anterior, crear dos instancias de la clase:

{% include codeHeader.html file="programa.py" %}
```python
m1 = Medicamento()
m2 = Medicamento()
```
{: .nolineno }

**Paso 9**.

Hacer validación de que ambos atributos son iguales en ambas instancias:

{% include codeHeader.html file="programa.py" %}
```python
if m1.IVA == m2.IVA and m1.descuento == m2.descuento:
```
{: .nolineno }

**Paso 10**.

Dentro de la condición anterior, agregar la salida por pantalla de los valores de estos atributos:

{2 3 4}
```python
if m1.IVA == m2.IVA and m1.descuento == m2.descuento:
	print("Todas las instancias tienen igual descuento e IVA")
	print("El valor del IVA es:", Medicamento.IVA)
	print("EL valor del descuento es:", Medicamento.descuento)
```
{: .nolineno }


Podemos darle al botón play al siguiente bloque de código para comprobar su funcionamiento:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class Medicamento():
	descuento = 0.05
	IVA = 0.18
	
	@staticmethod
	def validar_mayor_a_cero(numero: int):
		return numero > 0
		
precio = 100

es_valido = Medicamento.validar_mayor_a_cero(precio)

if es_valido:
	print("El precio ingresado es válido")
else:
	print("El precio no es válido")
	
m1 = Medicamento()
m2 = Medicamento()

if m1.IVA == m2.IVA and m1.descuento == m2.descuento:
	print("Todas las instancias tienen igual descuento e IVA")
	print("El valor del IVA es:", Medicamento.IVA)
	print("EL valor del descuento es:", Medicamento.descuento)
```
{: .nolineno }
