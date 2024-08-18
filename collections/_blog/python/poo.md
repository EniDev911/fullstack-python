---
layout: post
title: POO - Python
category: "Python"
thumbnail: /assets/img/python-poo.png
img_path: /assets/img/posts/python-poo
---

## POO

### ¿Qué es una Clase?

Podemos pensar en **clases** como en **plantillas** para crear **objetos**. Define de manera genérica cómo van a ser los objetos de determinado tipo. Por ejemplo, en la vida real, una clase para representar a personas puede llamarse **Persona** y tener una serie de **atributos** como **nombre**, **apellido**, **estatura** (que normalmente son propiedades), y una serie de **comportamientos** que pueden tener, como **hablar**, **caminar** o **comer** y que se implementan como **métodos de clases** (*funciones*).

Una clase por sí sola no sirve de nada, pues no es más que un concepto, sin entidad real. Para poder utilizar una clase en un programa lo que hay que hacer es **instanciarla**. Instanciar una clase consiste en **crear un nuevo objeto concreto de la misma**. Es decir, **un objeto ya es una entidad concreta** que se crea a partir de la plantilla que es la clase. Este nuevo objeto tiene ya "una existencia" real, puesto que ocupa memoria y se puede utilizar en el programa. Asi un objeto puede ser una persona que se llame **Marco, de 1.78 mt de estatura** o **María, de 1.64 mt de estatura** y que en nuestro programa podría hablar, caminar o comer, que son los comportamientos que estarían definidos en la clase.

Pasemos a ver mejor una sencilla ilustración ya que una imagen vale más que mil palabras.


{: align="center" }
![img - clases e instancias]({{ page.img_path | relative_url }}/clases_e_instancias.png)
*Diferencia entre clases VS instancias*

De este modo, si tenemos que manejar personas podemos ir creándolas a medida que necesitemos, y actuar sobre ellas individualmente. Cada una tiene sus propios datos y sus propias acciones.

> **Recordar**: La clase define de forma genérica cómo son las personas, y los objetos son personas concretas.

La POO es muy potente porque nos permite modelar de manera sencilla datos y comportamientos del mundo real. Al poder manejar los datos y los comportamientos de cada objeto de manera independiente nos evita tener que mantener datos globales y coordinar todo eso.

### Los cuatro pilares de la POO

Lo anterior por si solo es genial. Sin embargo, no es suficiente. Para poder manejar de manera eficiente las clases y los objetos que se generan con la POO son necesarios algunos principios que nos ayudarán a reducir la complejidad, ser más eficientes y evitar problemas. **Son los 4 pilares de la POO**. Todos los lenguajes orientados a objetos los implementan de una manera u otra, y es **indispensable** conocerlos bien.

#### Pilar 1 : Encapsulación

El concepto de encapsulación es el más evidente de todos. Pero, precisamente por su sencillez, a veces pasa inadvertido.

**La encapsulación** es la característica de un lenguaje POO que **permite que todo lo referente a un objeto quede aislado dentro de éste**. Es decir, que todos los datos referentes a un objeto queden "encerrados" dentro de éste y sólo de puede acceder a ellos **a través de los miembros** que la clase proporcione (propiedades y métodos).

> **Recordar**: gracias a la encapsulación, toda la información que sea declarada interna de un objeto está contenida dentro del propio objeto.

Normalmente, en POO, al encapsular el comportamiento y el estado de un objeto dentro de la clase que lo define, estos no son posibles de acceder ni modificar desde otras clases, sino que necesariamente debe hacerse por medio del objeto. En Python sí es posible acceder y modificar los atributos de una clase, esto porque a diferencia de lo que ocurre con otros lenguajes, todos los métodos y atributos de la clase **son públicos**.

En Python es posible indicar que un atributo o un método es **privado**, limitando en cierta forma su acceso desde fuera de la clase, debemos tener en cuenta algunas cosas como:

- Se debe anteponer el nombre del atributo o del método con dos guiones bajos (*underscore*) "`__`".
- Aplicar accesadores (*getter*) y mutadores (*setter*) para los atributos de la clase, conservando el mismo nombre del atributo para las propiedades.

Si tenemos la subclase **Pirata** que tiene un atributo de instancia `__apodo` definido como privado. Es decir, no es posible acceder a él ni modificarlo directamente desde fuera de la clase; ya que al momento de hacerlo se genera un error de tipo `AttributeError`, indicando que el atributo solicitado no existe.


```py
class Pirata(Persona):

	def __init__(self, apodo):
		self.__apodo = apodo

pir = Pirata('barbaroja')
print(pir.__apodo)
```
{: .nolineno }

Resultado:

```py
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Pirata' object has no attribute '__apodo'
```
{: .nolineno }

Para acceder o modificar el `__apodo`, se puede hacer uso **de una propiedad** llamada **apodo** (sin los underscore al principio), por lo que para acceder al atributo de la instancia se hará uso del *getter* de la propiedad, y para modificarlo se hará uso del *setter* de la propiedad. Ejemplo:

```py
class Pirata(Persona):

	def __init__(self):
		self.__apodo = "barbaroja"

	@property
	def apodo(self):
		# Como está dentro de la clase, si puede
		# accedr al atributo aunque sea privado
		return self.__apodo
	
	@apodo.setter
	def apodo(self, nuevo_apodo: str):
		# Puede modificar el atributo privado
		# porque está dentro de la clase
		self.__apodo = nuevo_apodo

pir = Pirata()
print(pir.apodo) # barbaroja
pir.apodo = "cruel"
print(pir.apodo) # cruel
```
{: .nolineno }

Sin embargo existe una manera de acceder a un atributo privado a partir de una instancia, pero su sintaxis no es muy amigable:


```python
print(pir._Pirata__apodo) # barbaroja
```
{: .nolineno }

#### Pilar 2 : Abstracción

Este concepto está muy relacionado con el anterior. Como la propia palabra indica, el principio de abstracción lo que implica es que la clase debe **representar las características de la entidad hacia el mundo exterior, pero ocultando la complejidad** que llevan asociada. O sea, nos abstrae de la complejidad que haya dentro dándonos una serie de atributos y comportamientos (propiedades y métodos) que podemos usar sin preocuparnos de qué pasa por dentro cuando lo hagamos.

Así, una clase (y por lo tanto todos los objetos que se crean a partir de ella) debe exponer para su uso solo lo que sea necesario. Cómo se haga "por dentro" es irrelevante para los programas que hagan uso de los objetos de esa clase.

En nuestro ejemplo de Persona tenemos la acción de **hablar**. Está puede suponer que se genere una voz sintética a partir de un texto que se indica como parámetro de la acción para la cual quizá ocurran un montón de cosas. El programa simplemente tiene acceso a un objeto **Marco** y llama a la función `hablar()`. No tiene ni idea de toda la complejidad interna que puede suponer. Si mañana cambiamos el modo de sintetizar la voz o cualquier otra acción interna, es indeferente para el programa que usa nuestros objetos de tipo **Persona**.


> **Recordar**: La abstracción está muy relacionada con la encapsulación, pero va un paso más allá pues no sólo controla el acceso a la información, sino también oculta la complejidad de los procesos que estemos implementando.

En Python, puede existir tanto clases abstractas como métodos abstractos, la cual debe poseer al menos 1 método abstracto, y este es aquel que solo posee firma (sin implementación).

Para poder definir una clase abstracta, es necesario **importar la clase ABC** del módulo **abc**.

La clase **ABC** se debe entregar como argumento de la clase abstracta. Los métodos abstractos (definido dentro de la clase abstracta), deben hacer uso del decorador`@abstractmethod`, el cual también se debe importar desde el módulo **abc**.

Como el método abstracto no tiene implementación, en su bloque usamos la palabra reservada `pass`:

```py
from abc import ABC, abstractmethod

class Persona(ABC):

	@abstractmethod
	def hablar(self, texto: str):
		pass

	@abstractmethod
	def mover(self):
		pass
```
{: .nolineno }

Ahora se crea una subclase Pirata, que recibe como argumento la clase base Persona, de la cual deberá implementar su método abstracto `hablar()` y `mover()`:

{% include codeHeader.html icon="python" %}
```py
from abc import ABC, abstractmethod

class Persona(ABC):

	@abstractmethod
	def hablar(self, texto: str):
		pass

	@abstractmethod
	def mover(self):
		pass

class Pirata(Persona):

	def __init__(self, apodo):
		self.apodo = apodo

	def hablar(self, texto:str):
		print(texto)

	def mover(self):
		print("Moviendose")
```
{: .nolineno }

Como vemos, mediante la abstracción, es posible establecer la pauta a seguir para todas las subclases que comparten comportamientos en común, dados por la clase base, por otro lado, el encapsulamiento permite delimitar dentro de una clase todo el comportamiento y estado de cada objeto instanciado de dicha clase.

#### Pilar 3 : Herencia

Desde el punto de vista de la genética, cuando una persona obtiene de sus padres ciertos rasgos (el color de los ojos o de la piel, una enfermedad genética, etc...) se dice que los hereda. Del mismo modo **en POO cuando una clase hereda de otra obtiene los rasgos que tuviese la primera**.

Dado que una clase es un patrón que define cómo es y cómo se comporta una cierta entidad, una clase que hereda de otra obtiene todos los rasgos de la primera y **añade otros nuevos** y además también **puede modificar algunos de los que ha heredado**.

A la clase de la que se hereda se llama **clase base**, y a la clase que hereda de ésta se le llama **clase derivada**.

Así, como en un juego que involucra personas, podemos tener clases de personas más especializadas para representar a personajes especiales del juego. Por ejemplo, podríamos definir clases como **Pirata**, **Piloto** o **Agente** que heredan de la clase **Persona**. Todos los objetos de estas clases heredan las propiedades y métodos de **Persona**, pero pueden particularizar algunos de ellos y además añadir cosas propias.

Veamos otra ilustración a modo de ejemplo (aunque más adelante cuando llevemos a la práctica estos conceptos en el lenguaje Python usaremos **diagramas de clases**):

{: align="center" }
![img - clases e instancias]({{ page.img_path | relative_url }}/herencia_pirata.png)
*POO - Herencia*

Por ejemplo, los objetos de clase **Pirata** tienen un método nuevo que es **Abordar** que en el juego sirve para asaltar a un barco enemigo. Pero además presentan una propiedad que solo tienen los piratas llamada **Sobrenombre**, que es el nombre por el que se le conoce (un pirata puede ser de nombre **Pedro** y de apellido **Zalud** pero su sobrenombre es **"Barbaroja"**).

No solo eso. Lo bueno de la herencia es que podemos reutilizar todo lo que tuviésemos en la clase base. Supongamos que en nuestro juego, los piratas hablan de forma diferente a los demás. El método **Hablar** se modifica para que le añada expresiones como **¡Arrrr!** o un **¡Por todos los demonios!** aleatoriamente a la frase y que así parezca más a un pirata. Para que el pirata hable no tendríamos que volver hacer todo el código relacionado con hablar. Eso ya sabe como hacerlo por el simple hecho de ser una persona (por heredar de la clase **Persona**). Lo único que tendríamos que hacer es añadir esas expresiones de pirata a la frase y luego delegar la síntesis de voz y todo lo demás a la clase base. Sería facilísimo y conseguiríamos consistencia entre todas las clases a la hora de particularizar la forma de hablar.


> **Recordar**: La herencia es una de las carácteristicas más potente de la POO ya que fomenta la reutilización del código permitiendo al mismo tiempo la particularización o especialización del mismo.

#### Herencia Simple en Python

La herencia simple consiste en que una clase hija hereda solamente desde una clase padre, por lo que solamente hay dos clases involucradas en la relación:

- Se debe definir una clase cualquiera, la cuál será la clase padre y la herencia se creará en el momento en que se crea la clase hija y use su clase padre como argumento en su definición.
- De esta forma, las instancias de la clase hija poseerán tanto los atributos como los métodos de la clase padre:

#### Pilar 4 : Polimorfismo

La palabra polimorfismo viene del griego "polys" (muchos) y "morfo" (forma), y quiere decir **"cualidad de tener muchas formas"**.

En POO, el concepto de polimorfismo se refiere al hecho de que **varios objetos de diferentes clases, pero con una base común, se puede usar de manera indistinta**, sin tener que saber de qué clase exacta son para poder hacerlo.

Supongamos que en nuestro juego tenemos un montón de personajes que están juntos en un mismo escenario. Hay varios piratas y un montón de personajes que son de tipo persona. En un momento dado necesitamos que todos se pongan hablar. Cada uno lo hace de una forma diferente, ya que son tipos de personajes distintos. Sería algo bastante tedioso tener que localizar primero a los de un tipo y hacerlos hablar, luego a los otros y así sucesivamente. La idea es que puedas tratarlos a todos como personas, independientemente del tipo específico de persona que sean y simplemente decirles que hablen.

Al derivar todos de la clase **Persona** todos pueden hablar, y al llamar al método **Hablar** de cada uno de ellos se utilizará el proceso adecuado según el tipo (los piratas meterán	sus expresiones adicionales que hemos visto, los pilotos dirán "Entrando en la pista" o lo que sea adecuado). Todo esto de manera transparente para el programador. Esto es el polimorfismo.

De hecho, el polimorfismo puede ser más complicado que eso ya que se puede dar también mediante la sobrecarga de métodos y, sobre todo, a través del uso de interfaces, pero el concepto es el que acabo de explicar.

> **Recordar**: El polimorfismo nos permite utilizar a los objetos de manera genérica, aunque internamente se comporten según su variedad específica.


**Gracias a estos cuatro principios** que cumplen todos los lenguajes orientados a objetos se facilita mucho la programación de ciertos tipos de problemas, se minimizan errores, se escribe código más rápido y se puede mantener más fácilmente cuando haya modificaciones en el futuro.

Cada lenguaje tiene su sintaxis específica para crear objetos y expresar los cuatro pilares, pero estos conocimientos son genéricos te valdrán para cualquiera de ellos.

### Clases en Python

Comparado con otros lenguajes de programación, el mecanismo de clases de Python agrega clases con un mínimo de diferencia de sintaxis y semánticas. Es una mezcla de los mecanismo de clases encontrados en **C++** y **Modula-3**. Las clases de Python proveen todas las características normales de la POO:

- El mecanismo de la herencia de clases permite múltiples clases base.
- Una clase derivada puede sobrescribir cualquier método de su(s) clase(s) base.
- Y un método puede llamar al método de la clase base con el mismo nombre.

Los objetos pueden tener una cantidad arbitraria de datos de cualquier tipo. Al igual que con los módulos, las clases participan de la naturaleza dinámica de Python: se crean en tiempo de ejecución, y pueden modificarse luego de su creación.

#### Sintaxis de definición de clases

La forma más sencilla de definir una clase se ve de la siguiente manera:

{% include codeHeader.html icon="python" %}
```python
class NombreClase:
	# ...
	# ...
```
{: .nolineno }

#### Objetos clase

Los **objetos clase** soportan dos tipos de operaciones:

- hacer referencia hacia atributos.
- hacer referencia hacia instanciación.

Para hacer referencia hacia los atributos de la clase se usa la **sintaxis estándar** de todas las referencias a atributos en Python.

{% include codeHeader.html icon="python" %}
```python
class MiClase:
	""" Una simple clase de ejemplo """
	i = 12345

	def f(self):
		return "hello world"
```
{: .nolineno }

En el ejemplo anterior entonces `MiClase.i` y `MiClase.f` son referencias válidas, que retornan un entero y un objeto función respectivamente. `__doc__` también es un atributo válido, que retorna la documentación asociada a la clase:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class MiClase:
	""" Una simple clase de ejemplo """

	# ...

print(MiClase.__doc__)
```
{: .nolineno }


La *instanciación* de clases usa la notación de funciones. Hagamos de cuenta que el **objeto de clase** es una función sin parámetros que **retorna una nueva instancia de la clase**. Por ejemplo:

{% include codeHeader.html icon="python" %}
```python
# crea una instancia de la clase 'MiClase'
# y asigna este objeto a la variable 'o'
o = MiClase()
```
{: .nolineno }

Entiéndase que la **operación de instanciación** (*llamar a un objeto clase*) crea un objeto vacío. Muchas clases necesitan crear objetos con instancias en un estado inicial particular. Por lo tanto una clase puede definir un **método especial** llamado `__init__()`.


#### Método \_\_init\_\_

Cuando una clase define un método `__init__`, la instanciación de la clase **automáticamente invoca a** `__init__()` para la instancia recien creada. Entonces, en este ejemplo, una instancia nueva e inicializada se puede obtener haciendo lo siguiente:

{% include codeHeader.html icon="python" %}
```python
class MiClase:

	def __init__(self):
		self.data = []

o = MiClase()
```
{: .nolineno } 

Por supuesto que no sería el mejor uso como lo vemos en el ejemplo, el método `__init__()` puede recibir argumentos para mayor flexibilidad. En ese caso, los argumentos que se pasen al operador de instanciación de la clase van para el método `__init__()`. Por ejemplo:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class MiClase:

	def __init__(self, x, y):
		self.x = x
		self.y = y

o = MiClase(20, 30.5)
print(o.x, o.y)
```
{: .nolineno }


#### Objetos instancias

Ahora, ¿Qué podemos hacer con los objetos instancia? La única operación que es entendida por los objetos instancia es la referencia de atributos. Hay dos tipos de nombres de atributos válidos, atributos de datos y métodos.

Los atributos de datos no necesitan ser declarados, tal como las variables locales son creada la primera vez que se le asigna algo. Por ejemplo, el siguiente código muestra como se definen estos atributos después de ser creado el objeto:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class MiClase:
	""" Una simple clase """

o = MiClase()
o.x = 10
o.y = 40

print(o.x, o.y) # 10 40
```
{: .nolineno }

#### Objetos métodos

El otro atributo de instancia es el **método**. Un método es una función que **pertenece a** un objeto. En Python, el término método no está limitado a instancia de clases, otros **tipos de objetos** también tienen métodos. Por ejemplo, los objetos lista tienen métodos llamados `append`, `insert`, `sort` y así sucesivamente. Pero, usaremos el término método para referirnos exclusivamente a métodos de objetos instancias de clase, ya que si hacemos referencia a una función directamente desde la clase, se mantiene como un objeto función, en cambio al crear una instancia sería un objeto método:

{% tabs ej_objects_f %}
{% tab ej_objects_f código %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
class MiClase:

  def f(self):
    return 'hello world'
    
obj = MiClase()

print(MiClase.f)
print(obj.f)
```
{: .nolineno }
{% endtab %}
{% tab ej_objects_f resultado %}
```python
<function MiClase.f at 0x7faddfdd9ca0>
<bound method MiClase.f of <__main__.MiClase object at 0x7faddfe7c370>>
```
{: .nolineno }
{% endtab %}
{% endtabs %}

#### Variables de clase y de instancia

En general, las variables de instancia son datos únicos de cada instancia y las **variables de clase** son para atributos y métodos compartidos por todas las instancias de la clase:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class Perro:

	tipo = 'canino'

	def __init__(self, nombre):
		self.nombre = nombre

p1 = Perro('Fido')
p2 = Perro('Batan')

print(p1.tipo, p2.tipo)
print(p1.nombre, p2.nombre)
```
{: .nolineno }

Un aspecto importante a considerar es que los datos compartidos pueden tener efectos inesperados cuando involucramos **objetos mutables** como las **listas** y **diccionarios**. Por ejemplo, en el siguiente código no se debería usar como **variable de clase** la lista `trucos` porque una sola lista sería compartida por todas las instancia de **Perro**:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class Perro:

	trucos = []

	def __init__(self, nombre):
		self.nombre = nombre

	def agregar_truco(self, truco):
		self.trucos.append(truco)

p1 = Perro('Fido')
p2 = Perro('Batan')

p1.agregar_truco('hacerse el muerto')
p2.agregar_truco('dar la mano')

print(p1.trucos)
```
{: .nolineno }

El correcto diseño de lo que queremos lograr es a través de las **variables de instancias**:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class Perro:

	def __init__(self, nombre):
		self.nombre = nombre
		self.trucos = []

	def agregar_truco(self, truco):
		self.trucos.append(truco)

p1 = Perro('Fido')
p2 = Perro('Batan')

p1.agregar_truco('hacerse el muerto')
p2.agregar_truco('dar la mano')

print(p1.trucos)
```
{: .nolineno }


### Ciclo de vida de un objeto

Normalmente, no nos preocupamos mucho de la creación y destrucción de variables, pero a menudo, cuando nuestros objetos se vuelven más complejos, resulta necesario efectuar algunos pasos dentro del objeto para configurar la construcción de éste y, posiblemente, realizar alguna acción  cuando el objeto es descartado.

Si queremos que nuestro objeto sea consciente de esos momentos de creación y destrucción, debemos agregarle métodos especialmente nombrados a tal efecto:


{% include codeHeader.html icon="python" compiler="y" %}
```python
class Post:

	def __init__(self):
		print("Estoy construido")

	def __del__(self):
		print("Estoy destruido")

np = Post()
np = 33
print("`np` contiene:", np)
```

Si ejecutamos lo anterior, produce el siguiente resultado:

```
Estoy construido
Estoy destruido
`np` contiene: 33
```
{: .nolineno }


Cuando Python construye un objeto, llama al método `__init__()` para darnos la posibilidad de configurar algunos valores por defecto o iniciales para cuyo objeto.

Cuando Python encuentra la línea 10:

```python
np = 33
```
{: .nolineno }


Efectivamente *"tiramos a la basura"* el objeto para reutilizar la variable `np`, almacenando el valor **33**. Justo en el momento que nuestro objeto `np` está siendo *"destruido"* se llama al método `__del__()`. No podemos evitar que nuestro objeto sea destruido, pero podemos efectuar la configuración que resulte necesaria antes de que el objeto deje de existir. 

Cuando desarrollamos y empezamos a definir nuestras clases, es bastante común agregarles un constructor que fije sus valores iniciales. Es poco probable y raro necesitar un destructor de objetos.


### Método constructor

Continuando con nuesta clase **Post**, vamos agregar un **método constructor** el cual va a definir el objeto de la clase con sus diferentes atributos. En este caso, un **post** puede caracterizarse por su **autor**, **título**, **descripción**, **contenido**, **fecha de publicación** entre otros:

{% include codeHeader.html icon="python" %}
```python
class Post:

	def __init__(self, title, description, content, published):
		self.title = title
		self.description = description
		self.content = content
		self.published = published

np = Post(
	'POO - Python',
	'Programación Orientada a Objetos en Python',
	'La programación orientada a objetos, que es un paradigma de programación...',
	'04/14/2024, 17:49:46'
	)
```
{: .nolineno }

### Métodos estáticos

Un método estático es aquel que podemos **llamar directamente desde la clase**, sin necesidad de crear una instancia de ella para hacer uso de él. Para definir un método estático, se puede hacer de dos formas.

Usando la función icorporada (*Built in Functions*) `staticmethod()` retorna un método estático para una función determinada:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class Calculadora:

	def sumar_numeros(num1, num2):
		return num1 + num2

Calculadora.sumar_numeros = staticmethod(Calculadora.sumar_numeros)

suma = Calculadora.sumar_numeros(5, 8)
print("Suma:", suma)
```
{: .nolineno }


Y la otra forma es usando el decorador `@staticmethod`:

{% include codeHeader.html icon="python" compiler="y" %}
```python
class Calculadora:

	@staticmethod
	def sumar_numeros(num1, num2):
		return num1 + num2

print(Calculadora.sumar_numeros(5, 8))
```
{: .nolineno }

La diferencia entre un **método estático** y un **método de clase** es:

- El **método estático** no sabe nada sobre la clase y solo se ocupa de los parámetros.
- El **método de clase** funciona con la clase ya que su primer parámetro es siempre la clase misma.


### Colaboración en Python

Que una clase colabore con otra, quiere decir que una clase debe ser **instanciada** dentro de la otra, en este caso, se creará la clase **Superficie**, y luego la clase **Pelota**. La clase Pelota debe instanciar dentro de ella a la clase **Superficie**, para poder generar un rebote (se ha simplificado para enfocarnos en la colaboración):


{% include codeHeader.html icon="python" compiler="y" %}
```python
class Superficie():
	def __init__(self):
		self.__resistencia = 2

	@property
	def resistencia(self):
		return self.__resistencia
	
class Pelota():
	def rebotar(self, altura:float):
		# Se instancia la clase que colabora con Pelota
		s = Superficie()
		rebotes = []

		while altura > 0:
			rebotes.append(altura)
			rebotes.append(0)
			# La instancia de Superficie colabora con Pelota para rebotar
			altura //= s.resistencia

		return rebotes

p = Pelota()
print(p.rebotar(10)) # [10, 0, 5, 0, 2, 0, 1, 0]
```
{: .nolineno }


> **Nota**: Los objetos que forman parte de una colaboración no dependen del otro para existir.


### Composición de objetos

La composición es otra forma de **interacción entre objetos de distinta clase**, donde una clase tiene un atributo que es instancia de otra clase. Esta, posee el atributo que se denomina **clase compuesta**, mientras que la clase a la cual pertenece el atributo de la clase compuesta se denomina **clase componente**.

La composición es también llamada **agregación fuerte**, siendo la agregación la interacción entre objetos donde una clase padre tiene una clase hija, como atributo de ella. En la composición, la clase padre corresponde a la clase compuesta, y la clase hija corresponde a la clase componente.

La diferencia entre la **agregación normal** y la **agregación fuerte** (*composición*), es que en la primera la instancia de la clase hija puede existir en forma independiente de su clase padre, en cambio, en la composición la instancia específica del componente requiere necesariamente de la existencia de la clase compuesta para existir.

Para condicionar que la instancia hija pueda existir en forma independiente de la instancia padre, se debe considerar lo siguiente:

- Dar al constructor de la clase padre una instancia de la clase hija como argumento.
- Asignarlo a un atributo de instancia.

De esta forma, se debe primero crear una instancia de la clase hija (es decir, puede existir por sí misma), que se usa como argumento para crear la clase padre.

> **Recordar**: Python no es estrictamente tipado, por lo que si no se indica el tipo de dato del atributo en el constructor, el uso de la agregación es difícil de deducir.


{% include codeHeader.html icon="python" compiler="y" %}
```python
class Material():
	def __init__(self, nombre:str, duracion:str, textura:str):
		self.nombre = nombre
		self.duracion = duracion
		self.textura = textura

class Pelota():
	def __init__(self, tamanio:int, color:str, material:Material):
		self.tamanio = tamanio
		self.color = color
		# La pelota tiene un material
		self.material = material

# El material existe en forma independiente a la pelota
m = Material("Plástico", "Corta", "Lisa")
p = Pelota(16, "Amarillo", m)

print(type(p.material)) #  Salida: <class '__main__.Material'>
print(p.material.nombre) # Salida: Plástico
```
{: .nolineno }

Para condicionar que una instancia hija no pueda existir por sí sola independiente de una clase padre, se debe considerar lo siguiente:

- Crear la instancia de la clase hija (componente) dentro del constructor de la clase padre (compuesto).
- Asignar esta instancia a un atributo, es decir, **el componente no se debe usar como argumento** al momento de crear la instancia.

Por lo tanto, la clase compuesta debe contener la información necesaria para crear la instancia de la clase componente dentro de su constructor. Ejemplo:

{% include codeHeader.html icon="python" compiler="y" %}
```python
from abc import ABC, abstractmethod

class Material(ABC):
	@abstractmethod
	def romper(self):
		pass

class MaterialPlastico(Material):
	nombre = "Plástico"
	duracion = "Corta"

	def __init__(self, textura:str):
		self.textura = textura

	def romper(self):
		pass

class Pelota():
	def __init__(self, tamanio:int, color:str, textura:str):
		self.tamanio = tamanio
		self.color = color
		self.textura = textura
		# La pelota está compuesta por un componente material
		self.material = MaterialPlastico(self.textura)

p = Pelota(19, "Roja", "Lisa")
print(p.material.nombre) # Salida: Plástico
```
{: .nolineno }


*[POO]: Programación orientada a objetos