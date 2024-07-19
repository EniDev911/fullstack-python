---
layout: post
title: "Interacciones entre objetos"
subtitle: "M4 - Desafío Evaluado"
challenge: 23
show: true
show_next: true
type: evaluado
modulo: m4
github:
  name: enidev911/m4-evaluado-interaccion-entre-objetos
---


{{page.categories}}

## Descripción

Te encuentras participando de un proyecto de emprendimiento que consiste en una aplicación móvil de compra y reparto de productos. El equipo ha decidido hacer el backend de la aplicación utilizando Python y el paradigma orientado a objetos. Para el primer prototipo de entrega, se solicita realizar una aplicación de consola en Python, donde los ingresos de valores se hagan mediante `input()`.

El equipo te ha solicitado diseñar e implementar la arquitectura de clases que involucra a la **entidad principal** "**Tienda**". Estas son las consideraciones que se deben tener en cuenta respecto de las tiendas:

- Existen por el momento 3 tipos de tienda (en el futuro podría haber más), los cuales son "**Restaurante**", "**Supermercado**" y "**Farmacia**".
- Todas las tiendas deben poder **ingresar un producto**, **listar producto existente**, y **realizar ventas**.
- **Cada tienda creada**, independiente de su tipo, **posee un nombre**, **un listado de producto** y un **costo de delivery** (todas las tiendas se crean inicialmente sin productos). En **una tienda ya existente**, **no se puede modificar el nombre ni el costo de delivery**, pero sí se puede modificar los productos (mediante el **ingreso de un producto**, o mediante la **realización de ventas**).
- Los productos tienen un **nombre**, un **precio** y un **stock**. Los 3 valores se deben solicitar al momento de crear un producto nuevo, pero **si no se indica stock**, se asume que es **0**. No se puede modificar el nombre ni el precio de un producto, solo su stock. Si se intenta **modificar el stock por un valor menor a 0**, se debe **asignar 0** en su lugar. De cada producto se puede obtener su nombre, su precio o su stock.


> **Nota**: Se asume que cada producto es específico de una tienda. Es decir, un producto no existe por sí mismo, sino que como parte de una tienda.

Respecto del comportamiento de cada tipo de tienda, considere lo siguiente:

- Para **ingresar un producto a una tienda**, se debe solicitar los datos requeridos del producto. Una vez creado el producto, éste se añade a la lista de productos de la tienda (dado por su nombre), se debe modificar su stock, sumando al valor existente el stock del nuevo ingreso. Se conserva el precio del primer ingreso de un mismo producto. **Tip** pruebe sobrecargar los operadores `__add__`, `__sub__` y `__eq__`.

> **Nota**: Los productos de las tiendas tipo **Restaurante** siempre tienen stock igual a 0, ya que el producto se fabrica al momento de que se realiza la venta. Es decir, aunque se especifique un valor de stock, los productos de estas tiendas se crean con stock 0 y este no se modifica si se añade nuevamente el mismo producto a la lista de productos existentes de la tienda.

- Al **listar los productos existentes**, se debe ocultar el stock de los productos en el caso de la tiendas tipo **Restaurante** y **Farmacia**. Las tiendas de tipo **Supermercado** deben añadir el mensaje "Pocos productos disponibles" junto a la cantidad de stock del producto, en caso de que el stock del producto sea inferior a 10. Las tiendas tipo **Farmacia** deben añadir el mensaje "Envío gratis al solicitar este producto" junto al precio de los productos con un valor superior a los $15.000.

> **Nota**: Considera que el método para listar los productos será llamado dentro de la función `print()`, por lo que debe retornar un string.

- Para **realizar una venta**, se debe solicitar el nombre del producto que desea vender y la cantidad requerida. Las tiendas de tipo **Farmacia** y **Supermercado** deben tener stock existente del producto indicado (si no poseen stock, o no existe el producto solicitado, no se realiza ninguna acción). Sin embargo, los productos de las tiendas tipo **Restaurante** siempre tienen stock 0, por lo que no es necesario hacer esta validación ni modificar el stock (**Tip**: puede usar `pass`). Además, en el caso específico de las tiendas de tipo **Farmacia**, no se puede solicitar una cantidad superior a 3 por producto en cada venta (si se solicita una cantidad mayor a 3, no se realiza ninguna acción). En el caso de las tiendas de tipo **Farmacia** o **Supermercado**, si la cantidad requerida es mayor a la existente, solo se venderá la cantidad disponible (quedando entonces el stock del producto en 0).


### Requerimiento 1

En un archivo `producto.py`, definir la clase que permita instanciar productos. Considera para la definición de esta clase lo señalado en la descripción de la problemática (utilice **ENCAPSULAMIENTO**).

#### Solución

Creamos el nuevo archivo:

{% include newfile.html file="producto.py" %}

Según la descripción, los productos tienen 3 atributos (nombre, precio, stock) y estos valores se deben solicitar al momento de crear un nuevo producto.

Entonces podemos implementar el método `__init__` dentro de la clase y para encapsular los atributos de instancia, debemos usar los nombres con dos guiones bajos (`__`):

{% include codeHeader.html file="producto.py" %}
```python
class Producto:

	def __init__(self, nombre, precio, stock):
		self.__nombre = nombre
		self.__precio = precio
		self.__stock = stock
```
{: .nolineno }

Luego también nos dice que el nombre y el precio de un producto no se puede modificar, solo su stock.

Los "**Getters**"" y "**Setters**" se utilizan en POO para garantizar el principio de la encapsulación de datos. Claramanete el **getter** se emplea para obtener el o los datos y el **setter** para cambiar el valor de los datos.

Por ende vamos a implementar los getter exclusivamente para nombre y precio, en el caso del stock implementamos el getter y setter:

> **Ojo**: Si se intenta modificar el stock por un valor menor a 0, se debe asignar 0.

{% include codeHeader.html file="producto.py" %}
```python
	@property
	def nombre(self):
		return self.__nombre

	@property
	def precio(self):
		return self.__precio

	@property
	def stock(self):
		return self.__stock

	@stock.setter
	def stock(self, stock:int) -> None:
		# En caso de que el nuevo stock sea menor a 0, asignamos 0
		self.__stock = 0 if stock < 0 else stock
```
{: .nolineno }

### Requerimiento 2

En un archivo `tienda.py`, definir la o las clases necesarias para instanciar los distintos tipos de tienda (utilice **ABSTRACCIÓN** y **ENCAPSULACIÓN**). Cada clase que permita instanciar una tienda debe tener (considerar para cada punto la información entregada en la descripción de la problemática):

- Un método constructor
- Un método para ingresar un producto (utilice **COMPOSICIÓN**, y opcionalmente **COLABORACIÓN**)
- Un método para listar productos
- Un método para realizar ventas (utilice **COLABORACIÓN**)

> **NOTA**: Una clase compuesta puede tener una lista de componentes del mismo tipo, almacenado en un atributo de tipo lista.

> **NOTA2**: Si utilizas un método sobrecargado, también se considera colaboración.

#### Solución

Creamos el nuevo archivo:

{% include newfile.html file="tienda.py" %}

En el archivo creado, vamos a comenzar definiendo una clase abstracta. Recordemos que en Python la clase abstracta debe poseer al menos un método abstracto, y solo posee firma (sin implementación).

Para definir la clase abstracta, tenemos que importar la clase `ABC` y el decorador `abstractmethod` desde el módulo `abc`.

Y hacemos que nuestra entidad principal `Tienda` reciba como argumento la clase `ABC`:

{% include codeHeader.html file="tienda.py" %}
```python
from abc import ABC, abstractclassmethod

class Tienda(ABC):
	# clase abstracta
```
{: .nolineno }

Luego sabemos que todas las tiendas pueden **ingresar un producto**, **listar todos los productos** y **realizar ventas**. Por ende vamos a definir los métodos abstractos: `ingresar_producto()`, `listar_productos()` y `realizar_venta()`:

{% tabs clase_abc %}
{% tab clase_abc métodos %}
{% include codeHeader.html file="tienda.py" %}
```python
	# Métodos abstractos
	@abstractclassmethod
	def agregar_producto(self):
		pass

	@abstractclassmethod
	def listar_productos(self):
		pass

	@abstractclassmethod
	def realizar_venta(self):
		pass
```
{: .nolineno }
{% endtab %}
{% tab clase_abc clase %}
{% include codeHeader.html file="tienda.py" %}
```py
from abc import ABC, abstractclassmethod

class Tienda(ABC):

	@abstractclassmethod
	def agregar_producto(self):
		pass
	@abstractclassmethod
	def listar_productos(self):
		pass
	@abstractclassmethod
	def realizar_venta(self):
		pass
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Sabemos que existen 3 tipos de tienda `Restaurante`, `Supermercado` y `Farmacia`, en el mismo archivo a continuación definimos esas clases que reciben como argumento nuestra clase abstracta.

Cada tienda creada, independiente de su tipo, posee un nombre, un listado de producto y un costo de delivery (todas las tiendas se crean inicialmente sin productos):


{% include codeHeader.html file="tienda.py" %}
```python
class Restaurante(Tienda):

	def __init__(self, nombre:str, delevery:int) -> None:
		self.__nombre = nombre
		self.__delevery = delevery
		self.__productos = []

class Supermercado(Tienda):

	def __init__(self, nombre:str, delevery:int) -> None:
		self.__nombre = nombre
		self.__delevery = delevery
		self.__productos = []

class Farmacia(Tienda):

	def __init__(self, nombre:str, delevery:int) -> None:
		self.__nombre = nombre
		self.__delevery = delevery
		self.__productos = []
```
{: .nolineno }

Acerca del comportamiento de **ingresar productos**, sabemos que debemos solicitar los datos requeridos para crear el producto, éste se añade a la lista de productos, si el producto ya existe (*dado por su nombre*).

Aquí debemos sobrecargar el método `__eq__` en nuestro archivo `producto.py` para que podamos comparar un objeto con otro a través de su atributo nombre, a continuación tenemos el método sobrecargado para agregarlo a nuestra clase `Producto`:

{% include codeHeader.html file="producto.py" %}
```py
	def __eq__(self, other) -> bool:

		if isinstance(other, Producto):
			return self.__nombre == other.__nombre
		else:
			raise TypeError("Tipo inválido para operar")
```
{: .nolineno }

En el caso de los `Restaurante` siempre tienen stock 0, ya que el producto se fabrica y su stock no se modifica si se añade nuevamente el mismo producto a la lista de productos.

Comencemos implementando el método para la clase `Restaurante`:

{% tabs add_restaurant %}
{% tab add_restaurant método %}
{% include codeHeader.html file="tienda.py" %}
```python
	def agregar_producto(self) -> None:

		nombre = input("\nIngrese nombre del producto:\n> ")
		precio = int(input("\nIngrese el precio del producto:\n> "))
		producto = Producto(nombre, precio, 0)

		if producto not in self.__productos:
			self.__productos.append(producto)
```
{: .nolineno }
{% endtab %}
{% tab add_restaurant clase %}
{% include codeHeader.html file="tienda.py" %}
```python
from producto import Producto # poner al principio del archivo

class Restaurante(Tienda):

	def __init__(self, nombre, delevery) -> None:
		self.__nombre = nombre
		self.__delevery = delevery
		self.__productos = []

	def agregar_producto(self) -> None:

		nombre = input("\nIngrese nombre del producto:\n> ")
		precio = int(input("\nIngrese el precio del producto:\n> "))
		producto = Producto(nombre, precio, 0)

		if producto not in self.__productos:
			self.__productos.append(producto)
```
{: .nolineno }
{% endtab %}
{% endtabs %}


Para el caso de `Supermercado` y `Farmacia` si el producto existe, se debe modificar su stock, sumando al valor existente el con el nuevo valor ingresado. Se conserva el precio y el nombre de un mismo producto.

Aquí debemos sobrecargar el método `__add__` en nuestro archivo `producto.py` para que podamos retornar un nuevo objeto conservando el nombre y el precio del primero y sumando el atributo stock del objeto existente con otro objeto, a continuación tenemos el método sobrecargado para agregarlo a nuestra clase `Producto`:

{% include codeHeader.html file="producto.py" %}
```py
	def __add__(self, other):

		if isinstance(other, Producto):
			return Producto(self.__nombre, self.__precio, self.__stock + other.__stock)
		else:
			raise TypeError("Tipo inválido para operar")
```
{: .nolineno }


Con el paso anterior realizado, podemos implementar el método `agregar_producto()` en la clase `Supermercado` y `Farmacia`:

{% include codeHeader.html file="tienda.py" %}
```python
	def agregar_producto(self) -> None:

		nombre = input("\nIngrese nombre del producto:\n> ")
		precio = int(input("\nIngrese el precio del producto:\n> "))
		stock = int(input("\nIngrese el stock del producto:\n> "))
		producto = Producto(nombre, precio, stock)

		if producto in self.__productos:
			index = self.__productos.index(producto)
			self.__productos[index] += producto
		else:
			self.__productos.append(producto)
```
{: .nolineno }

Acerca del comportamiento de **listar productos** existentes, se debe ocultar el stock de los productos en el caso de la tiendas tipo `Restaurante` y `Farmacia`.

En las farmacias se debe añadir el mensaje `"Envío gratis al solicitar este producto"` junto al precio de los productos, para los productos con un valor superior a los $15.000, vamos a implementar el método con `listar_productos()` para las farmacias:

{% include codeHeader.html file="tienda.py" %}
```python
```
{: .nolineno }


Las tiendas de tipo Supermercado deben añadir el mensaje “Pocos productos disponibles” junto a la cantidad de stock del producto, en caso de que el stock del producto sea inferior a 10. 


### Requerimiento 3

En un archivo `programa.py`, implementa la lógica necesaria para crear una tienda e ingresar sus productos. Se debe solicitar ingresar productos hasta que el usuario indique lo contrario. Luego, se le debe dar al usuario **las opciones** de **listar los productos existentes**, **realizar una venta**, o **salir del programa**. Para las primeras dos opciones, debe hacer llamados a los métodos de su instancia y luego volver a consultar cuál de las 3 acciones se desea realizar. Si se escoge la tercera opción, se finaliza la ejecucción del programa.


---

## Repositorio

{% include repository.html repo=page.github %}