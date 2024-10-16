---
layout: post
title: Día 6 - Colaboración y Composición
subtitle: Ejercicios Guiados
modulo: m4
type: ejercicio
show: true
show_next: true
---

## Ejercico guiado - Módulo de venta de productos

Desde la tienda "**Mis Mascotas**", la cual se dedica a la venta de productos para mascotas (perro, gato y exótico), te han solicitado desarrollar un prototipo para el backend del módulo de venta de su sitio web de e-commerce. El prototipo debe ser una aplicación de consola en Python, donde los ingresos de cada detalle de venta (producto y cantidad) deben realizarse mediante `input`.

Por ahora, solo se debe considerar el detalle de la venta (tanto su ingreso como mostrarlo por pantalla). El detalle de la venta está constituido a su vez por una lista de ítems, donde cada ítem posee un nombre del producto y una cantidad.

Al ejecutarse el script principal del programa, el cual debe importar la o las clases necesarias para su funcionamiento, se debe solicitar el ingreso del nombre del producto del ítem del detalle de venta y su cantidad asociada. Además, se debe seguir solicitando ítems hasta que el usuario indique lo contrario. Una vez finalizado el ingreso de ítems, se debe mostrar en pantalla el detalle de la venta.

**Paso 1**.

Antes de escribir el código, se debe identificar las clases presentes en el problema, y las relaciones entre ellas. En este caso, las clases identificadas son 3:

- `Venta`
- `DetalleVenta`
- `DetalleVentaItem`

**Paso 2**.

Identificar las relaciones entre las distintas clases, que permitirán resolver el algoritmo del problema:

`Venta` y `DetalleVenta`:

- `Venta` tiene un `DetalleVenta`.
- Dado el contexto explicado, un `DetalleVenta` no puede existir en forma independiente, sino que siempre se asocia a una `Venta` específica.
- Por lo tanto, la relación entre estas clases es de **composición**, siendo la `Venta` el compuesto y el `DetalleVenta` el componente.

`Venta` y `DetalleVentaItem`:

- `Venta` usa un `DetalleVentaItem` para agregar un ítem a su detalle.
- Para que exista una `Venta`, no es necesario que posea un `DetalleVentaItem`; solo lo requiere para realizar la acción de agregar ítems al detalle.
- Por lo tanto, la relación de estas clases es de colaboración, donde `DetalleVentaItem` colabora con `Venta` para agregar un ítem a su detalle.


`DetalleVenta` y `DetalleVentaItem`:

- `Venta` tiene una lista de `DetalleVentaItem`.
- El `DetalleVentaItem` se agrega una vez ya creada la instancia `DetalleVenta`. Es decir, `DetalleVentaItem` existe de forma independiente de `DetalleVenta` (se crea dentro de `Venta`).
- Por lo tanto, la relación de estas clases es de agregación, siendo `DetalleVenta` la clase padre, y `DetalleVentaItem` la clase hija.

**Paso 3**.

En un archivo `venta.py`, se crea la clase de menor jerarquía, que en este caso es `DetalleVentaItem`. Siguiendo las buenas prácticas, se define sus atributos de instancia (producto y cantidad) como atributos privados con valores asignables por parámetro en el constructor.

{% include codeHeader.html file="venta.py" %}
```py
class DetalleVentaItem():
	def __init__(self, producto: str, cantidad: int):
		self.__producto = producto
		self.__cantidad = cantidad
```
{: .nolineno }

**Paso 4**.

A continuación, en la misma clase, se define las propiedades de producto y cantidad para poder acceder a los valores de los atributos privados. Los valores solo se asignan al momento de crear la instancia, por lo que no es necesario crear *setters*.

{% include codeHeader.html file="venta.py" %}
```py
	@property
	def producto(self):
		return self.__producto

	@property
	def cantidad(self):
		return self.__cantidad
```
{: .nolineno }

**Paso 5**.

Luego, se crea la segunda clase de menor jerarquía, que sería `DetalleVenta`. En su constructor, sólo se define la lista de ítems como atributo privado, como una lista vacía (no se tiene ítems al momento de crear el detalle de venta):

{% include codeHeader.html file="venta.py" %}
```py
class DetalleVenta():
	def __init__(self):
		self.__items = []
```
{: .nolineno }

**Paso 6**.

En la misma clase, definir el método `agregar_item`, el cual recibe por parámetro la instancia de la clase y una instancia de `DetalleVentaItem`. Dentro del método, se agrega la instancia de ítem recibida a la lista de ítems de la instancia de la clase:

{% include codeHeader.html file="venta.py" %}
```py
	def agregar_item(self, item: DetalleVentaItem):
		self.__items.append(item)
```
{: .nolineno }

**Paso 7**.

En la misma clase, sobrecargar el método `__str__` de forma que al usar una instancia de `DetalleVenta` como argumento de `print`, se muestre en pantalla la información de todos los ítems ingresados:

{% include codeHeader.html file="venta.py" %}
```py
	def __str__(self):
		retorno = ("::::::::DETALLE DE ESTA VENTA::::::\n"
			"PRODUCTO\tCANTIDAD\n")
		items = [
			f"{i.producto}\t\t{i.cantidad}\n"
			for i in self.__items
		]

		return f"{retorno}{''.join(items)}"
```
{: .nolineno }

**Paso 8**.

Finalmente, se crea la clase de mayor jerarquía, que en este caso es `Venta`. En su constructor, se asigna una instancia de `DetalleVenta` (creada dentro del constructor) al atributo privado de detalle:

{% include codeHeader.html file="venta.py" %}
```py
class Venta():
	def __init__(self):
		self.__detalle = DetalleVenta()
```
{: .nolineno }

**Paso 9**.

En la misma clase, crear un método de instancia `modificar_detalle`, que recibe por parámetro la instancia, el nombre del producto dado por el usuario para agregar al detalle, y su cantidad asociada.

{% include codeHeader.html file="venta.py" %}
```py
def modificar_detalle(self, producto: str, cantidad: int):
```
{: .nolineno }

**Paso 10**.

Dentro del método anterior, generar una instancia de `DetalleVentaItem` con el producto y cantidad ingresados. Luego usar esa instancia como argumento para el método `agregar_item` del detalle de la instancia:

{% include codeHeader.html file="venta.py" %}
```py
def modificar_detalle(self, producto: str, cantidad: int):
	detalle_venta_item = DetalleVentaItem(producto, cantidad)
	self.__detalle.agregar_item(detalle_venta_item)
```
{: .nolineno }

**Paso 11**.

Para terminar la clase `Venta`, se debe agregar la propiedad detalle, la cual retorna la instancia de detalle dentro de la clase:

{% include codeHeader.html file="venta.py" %}
```py
	@property
	def detalle(self):
		return self.__detalle
```
{: .nolineno }

**Paso 12**.

En un archivo llamado `programa.py`, importe la clase `Venta` del módulo venta y cree una instancia de ella:

{% include codeHeader.html file="programa.py" %}
```py
from venta import Venta

venta = Venta()
```
{: .nolineno }

**Paso 13**.

Consultar al usuario si desea agregar un ítem a la venta y almacenar la opción:

{% include codeHeader.html file="programa.py" %}
```py
opcion = int(input(
	"¿Desea ingresar un ítem a la venta?\n"
	"1. Si\n2. No\n"))
```
{: .nolineno }

**Paso 14**.

Mientras la opción sea 1, consultar y almacenar en variables el producto y cantidad asociada para el ítem de la venta:

{% include codeHeader.html file="programa.py" %}
```py
while opcion == 1:
	producto = input("\nIngrese nombre del producto vendido:\n")
	cantidad = int(input("\nIngrese cantidad vendida del producto:\n"))
```
{: .nolineno }

**Paso 15**.

A continuación, dentro del ciclo, llamar al método `modificar_detalle` de la instancia de venta creada, usando como argumento el producto y la cantidad ingresados por el usuario:

{% include codeHeader.html file="programa.py" %}
```py
	venta.modificar_detalle(producto, cantidad)
```
{: .nolineno }

**Paso 16**.

Al final del ciclo, volver a consultar si se desea ingresar un ítem a la venta:

{% include codeHeader.html file="programa.py" %}
```py
	opcion = int(input(
		"\n¿Desea ingresar un ítem a la venta?\n"
		"1. Sí\n2. No\n"))
```
{: .nolineno }

**Paso 17**.

Finalmente, fuera del ciclo, imprimir el detalle de la venta ingresada:

{% include codeHeader.html file="programa.py" %}
```py
print(venta.detalle)
```
{: .nolineno }


### Ejercicio en replit

{% include ifr_results.html src="https://replit.com/@marcocontreraas/dia-6-modulo-de-venta?embed=true" %}