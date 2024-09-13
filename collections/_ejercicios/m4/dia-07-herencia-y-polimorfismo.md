---
layout: post
title: Día 7 - Herencia y Polimorfismo
subtitle: Ejercicios Guiados
modulo: m4
type: ejercicio
show: true
show_next: true
---

Desde un emprendimiento, se te ha solicitado comenzar el diseño de la estructura de clases para sus productos. Por ahora, se considera solamente el caso de los chocolates, donde existen, por el momento, solo los chocolates amargos (en el futuro habrá más tipos específicos, pero considera que no pueden existir chocolates "a secas"). Todos los chocolates deben tener un porcentaje de cacao específico, de acuerdo a su tipo, siendo el de los chocolates amargos entre 75% y 85%.

A su vez, también existe una variedad de chocolates amargos sin gluten. Se debe considerar que existirán en el futuro otros productos, además de los chocolates, que también serán sin gluten.

**Paso 1**.

En un archivo `sin_gluten.py`, definir la clase `SinGluten`, la cual contiene solamente un atributo de clase `tipo_producto` con el valor `"Sin Gluten"`:

{% include codeHeader.html file="sin_gluten.py" %}
```py
class SinGluten():
	tipo_producto = "Sin Gluten"
```
{: .nolineno }

**Paso 2**.

En un archivo `chocolate.py`, importar la clase `SinGluten`, además de la clase `ABC` y el decorador `abstracmethod` desde `abc`. A continuación, crear la clase abstracta `Chocolate`:

{% include codeHeader.html file="chocolate.py" %}
```py
from sin_gluten import SinGluten
from abc import ABC, abstracmethod

class Chocolate(ABC):
```
{: .nolineno }


**Paso 3**.

Dentro de esta clase, definir el método abstracto `validar_porc_cacao`, que recibe un número flotante por parámetro:

{% include codeHeader.html file="chocolate.py" %}
```py
	@abstracmethod
	def validar_porc_cacao(self, porc: float) -> float:
		pass
```
{: .nolineno }

**Paso 4**.

Dentro de la misma clase, definir el constructor de la clase, el cual asigna un valor entregado por parámetro al atributo `porc_cacao`. Este valor debe estar corregido mediante el método `validar_porc_cacao`:

{% include codeHeader.html file="chocolate.py" %}
```py
	def __init__(self, porc_cacao: float):
		self.porc_cacao = self.validar_porc_cacao(porc_cacao)
```
{: .nolineno }

**Paso 5**.

A continuación, en el mismo archivo, se crea la clase `ChocolateAmargo`, la cual hereda la clase `Chocolate`. Se define un método `validar_porc_cacao`, donde; si el valor entregado es menor a 0.75, se retorna 0.75; si el valor entregado es mayor a 0.85, se retorna 0.85. En cualquier otro caso, se retorna el valor entregado:

{% include codeHeader.html file="chocolate.py" %}
```py
class ChocolateAmargo(Chocolate):
	def validar_porc_cacao(self, porc: float):
		return min(max(0.75, porc), 0.85)
```
{: .nolineno }

**Paso 6**.

Finalmente, en el mismo archivo, se crea la clase `ChocolateAmargiSinGluten`, la cual hereda tanto de `ChocolateAmargo` como de `SinGluten`:

{% include codeHeader.html file="chocolate.py" %}
```py
class ChocolateAmargoSinGluten(ChocolateAmargo, SinGluten):
	pass
```
{: .nolineno }

Ejemplo de instancia de chocolate amargo:

{% include codeHeader.html file="chocolate.py" %}
```py
if __name__ == '__main__':
	c = ChocolateAmargo(0.3)
	print(c.porc_cacao) # salida: 0.75
```
{: .nolineno }

---

### Polimorfismo en subclases

Desde la empresa "Juegos por comida", te han solicitado programar el prototipo de una batalla entre un jugador y un monstruo. Para ello, debes considerar que tanto los jugadores como los monstruos poseen puntos de vida (HP), puntos de ataque (ATK) y puntos de defensa (DF), y opcionalmente un arma (solo especificar armas al crear jugadores), que son asignados al momento de crearse. Además, tanto los jugadores como los monstruos pueden generar ataques y defenderse.

Para esta demostración, se le solicita generar un script `demo.py` que genere un jugador con 500 de HP, 10 de ATK, 5 de DF y una espada. El jugador debe enfrentarse al monstruo "Bégimo", el cual tiene 1.000 de HP, 1 de ATK y 8 de DF. Ambos deben enfrentarse alternadamente en turnos de ataque-defensa, hasta que alguno de los dos muera (tenga HP igual o menor a 0).

Los ataques generan un puntaje de ataque (número entero).

- En el caso de los jugadores que tienen un arma, se debe retornar la cantidad de puntos de ATK más un número al azar entre 1 y 5, en caso contrario solo se retorna los puntos de ATK.
- En el caso de los monstruos, debe retornar los puntos de ATK más el 1% del HP actual (retorna un número entero).

La acción de defensa recibe un ataque (numero entero) y disminuye el HP.

- En el caso de los jugadores, al ataque recibido se le debe restar un número al azar entre 1 y los puntos de DF, y el resultado de ello (forzar a ser un número entero mayor a 0) se debe restar el HP.
- En el caso de los monstruos, al ataque recibido se le debe restar los puntos de DF y e 0.1 del HP actual, y el resultado de ello (forzar a ser un número entero mayor a 0) se debe restar al HP.

Independiente de quien inicie el ataque, el oponente debe defenderse del ataque recibido, y luego atacar de vuelta al atacante (en caso de que aún tenga HP), quien a su vez se defenderá de este ataque y luego volverá  a atacar (en caso de que aún tenga HP), y así sucesivamente hasta que alguno de los dos muera.

**Aspectos técnicos**

Se solicita que tanto `Jugador` como `Monstruo` hereden de una clase común `Personaje`, con el fin de reutilizar el constructor desde aquella clase. Debe considerar que no pueden existir instancias de `Personaje`, y que todas las clases que hereden de ella deben implementar su propio método de ataque y defensa. Por el momento, no se debe aplicar encapsulamiento de los atributos.

**Paso 1**.

En un archivo `personaje.py`, crear la clase abstracta `Personaje` con un constructor que recibe por parámetro `hp`, `atk`, `df`, y `arma`, y los asigna en los respectivos atributos de instancia. Ésta será la clase padre tanto de `Jugador` como `Monstruo`:

{% include codeHeader.html file="personaje.py" %}
```py
from abc import ABC, abstractmethod

class Personaje(ABC):
	def __init__(self, hp: int, atk: int, df: int, arma: str="") -> None:
		self.hp = hp
		self.atk = atk
		self.df = df
		self.arma = arma
```
{: .nolineno }

**Paso 2**.

A continuación, en la misma clase, definir los métodos abstractos ataque y defensa:

{% include codeHeader.html file="personaje.py" %}
```py
	@abstractmethod
	def ataque(self) -> int:
		pass

	@abstractmethod
	def defensa(self, ataque: int) -> None:
		pass
```
{: .nolineno }

**Paso 3**.

En un archivo llamado `jugador.py`, importar `random` y `Personaje`, y definir la clase `Jugador` que herede de `Personaje`:

{% include codeHeader.html file="jugador.py" %}
```py
import random
from personaje import Personaje

class Jugador(Personaje):
```
{: .nolineno }

**Paso 4**.

A continuación, en el mismo archivo, definir el método ataque. Retornar el ataque de la instancia más un número al azar entre 1 y 5 en caso de que exista un arma, o solo el ataque de la instancia en caso contrario:

{% include codeHeader.html file="jugador.py" %}
```py
	def ataque(self) -> int:
		return (self.atk + random.randint(1, 5)
			if self.arma else self.atk)
```
{: .nolineno }

**Paso 5**.

A continuación, dentro de la misma clase, definir el método `defensa`, el cual recibe como argumento un ataque. Dentro del método, al hp de la instancia se debe asignar el hp actual menos la resta entre el ataque recibido y un número al azar entre 1 y la defensa de la instancia (en caso de que sea un número positivo).

{% include codeHeader.html file="jugador.py" %}
```py
	def defensa(self, ataque: int) -> None:
		self.hp -= max(ataque - random.randint(1, self.df), 0)
```
{: .nolineno }

**Paso 6**.

En otro archivo llamado `monstruo.py`, importar `Personaje` y definir la clase `Monstruo` heredando `Personaje`:

{% include codeHeader.html file="monstruo.py" %}
```py
from personaje import Personaje

class Monstruo(Personaje):
```
{: .nolineno }

**Paso 7**.

A continuación, dentro de la misma clase, definir el método ataque. Retornar el ataque de la instancia más el 1% del hp de la instancia (como número entero):

{% include codeHeader.html file="monstruo.py" %}
```py
	def ataque(self) -> int:
		return self.atk + int(self.hp * 0.01)
```
{: .nolineno }


**Paso 8**.

A continuación, dentro de la misma clase, definir el método `defensa`, el cual recibe como parámetro un ataque. El método asigna al hp de la instancia el valor actual menos la resta entra el ataque y la suma entre la defensa de la instancia y el 0.1% del hp actual (como número entero, en caso que sea mayor a 0):

{% include codeHeader.html file="monstruo.py" %}
```py
	def defensa(self, ataque: int) -> None:
		self.hp -= max(ataque - (self.df + int(self.hp * 0.001)), 0)
```
{: .nolineno }


**Paso 9**.

Finalmente, en un archivo llamado `demo.py`, importe las clases `Jugador` y `Monstruo`:

{% include codeHeader.html file="demo.py" %}
```py
from jugador import Jugador
from monstruo import Monstruo
```
{: .nolineno }

**Paso 10**.

En el mismo archivo anterior, genera al jugador y el monstruo solicitados dentro de una lista. Definir además una variable auxiliar con valor 0 (esta variable almacenará el ataque):

{% include codeHeader.html file="demo.py" %}
```py
enfrentados = [Jugador(500, 10, 5, "espada"), Monstruo(1000, 1, 8)]
atk = 0
```
{: .nolineno }

**Paso 11**.

Iniciar un ciclo `while` que se ejecutará mientras no exista elementos dentro de la lista enfrentados con HP igual o menor a 0. Dentro del `while`, iniciar otro ciclo `for` que recorra la lista de enfrentados. Dentro del ciclo `for`, ejecutar la defensa del elemento iterado, en caso de que exista un valor para la variable auxiliar atk:

{% include codeHeader.html file="demo.py" %}
```py
while any(e.hp <= 0 for e in enfrentados) == False:
	for i in enfrentados:
		if atk:
			e.defensa(atk)
```
{: .nolineno }

**Paso 12**.

A continuación, dentro del ciclo `for`, en caso de que el elemento iterado aún tenga HP, generar un ataque, que se almacenará en la variable auxiliar `aux`:

{% include codeHeader.html file="demo.py" %}
```py
		if e.hp > 0:
			atk = e.ataque()
		else:
			print(f"¡Oh no!, el {e.__class__.__name__} ha muerto :(")
```
{: .nolineno }

---

### Polimorfismo y sobreescritura de métodos

Desde la empresa "**Juegos por comida**", te han solicitado modificar el demo realizado previamente, consistente en la batalla entre un jugador y un monstruo. Te solicitan que, previo al enfrentamiento, el monstruo debe mostrar el diálogo "**GRAAAWR**".

- Considera que todos los monstruos son "personajes no jugadores", y que todos los "personajes no jugadores" pueden realizar diálogos.
- Los "personajes no jugadores" necesitan un nombre para crearse. Este nombre se debe concatenar al principio de cada diálogo, por ejemplo: Bégimo: "GRAAAWR".
- También han solicitado que al morir alguno de los enfrentados, se muestre en pantalla el mensaje "¡Felicidades!, ¡Haz ganado la batalla!", en caso de que el vencedor sea el jugador, y el mensaje "¡Oh no!, haz perdido la batalla :(" en caso de que el vencedor sea el mostruo.

**Aspectos técnicos**

En esta etapa, se solicita aplicar encapsulamiento a los atributos, además no se debe permitir crear instancias de `Monstruo` que tengan armas, por lo que se debe sobreescribir el constructor de la clase base.

**Paso 1**.

En un archivo `npc.py`, definir la clase `NPC` (del inglés "non player character"). En ella, definir un constructor que reciba por parámetro nombre, el cual se asigna a un atributo privado de instancia, y argumentos opcionales de palabra clave, los cuales se deben usar como argumento en el llamado al constructor de `super()`:

{% include codeHeader.html file="npc.py" %}
```py
class NPC():
	def __init__(self, nombre: str, **kwargs) -> None:
		super().__init__(**kwargs)
		self.__nombre = nombre
```
{: .nolineno }

**Paso 2**.

A continuación, en la misma clase, definir el método `mostrar_dialogo`, el cual recibe por parámetro un texto, y luego lo muestra por pantalla en la forma solicitada usando `print`:

{% include codeHeader.html file="npc.py" %}
```py
	def mostrar_dialogo(self, mensaje: str) -> None:
		print(f"{self.__nombre}: {mensaje}")
```
{: .nolineno }

**Paso 3**.

En el archivo `personaje.py`, refactorizar la clase abstracta `Personaje` con un constructor que recibe por parámetro `hp`, `atk`, `df`, y `**kwargs`, y los asigna en los respectivos atributos privados de instancia y constructor de `super()`:

{% include codeHeader.html file="personaje.py" %}
```py
from abc import ABC, abstractmethod

class Personaje(ABC):
	def __init__(self, hp: int, atk: int, df: int, **kargs) -> None:
		super().__init__(**kargs)
		self.__hp = hp
		self.__atk = atk
		self.__df = df
```
{: .nolineno }

**Paso 4**.

En la misma clase, definir la propiedad `hp`, ya que requiere ser accedida desde fuera de la clase (por el script `demo.py`, y por las clases hijas):

{% include codeHeader.html file="personaje.py" %}
```py
	@property
	def hp(self) -> int:
		return self.__hp
```
{: .nolineno }

**Paso 5**.

En la misma clase, definir el método `setter` de `hp`, ya que requiere ser modificado desde fuera de la clase (desde las clases hijas):

{% include codeHeader.html file="personaje.py" %}
```py
	@hp.setter
	def hp(self, hp) -> None:
		self.__hp = hp
```
{: .nolineno }

**Paso 6**.

Seguidamente en la misma clase, definir la propiedad `atk`, ya que requiere ser accedida desde fuera de la clase (desde las clases hijas):

{% include codeHeader.html file="personaje.py" %}
```py
	@property
	def atk(self):
		return self.__atk
```
{: .nolineno }

**Paso 7**.

A continuación, en la misma clase, definir la propiedad `df`, ya que requiere ser accedida desde fuera de la clase (desde las clases hijas):

{% include codeHeader.html file="personaje" %}
```py
	@property
	def df(self):
		return self.__df
```
{: .nolineno }

**Paso 8**.

Mantener la definición de los métodos abstractos ataque y defensa:

{% include codeHeader.html file="personaje.py" %}
```py
	@abstractmethod
	def ataque(self) -> None:
		pass

	@abstractmethod
	def defensa(self, ataque: int) -> None:
		pass
```
{: .nolineno }

**Paso 9**.

En el archivo `jugador.py`, sobreescribir el constructor de la clase `Jugador`, de forma tal que dentro de éste se haga el llamado al constructor de la clase padre, y a continuación se asigne el valor de arma al atributo de instancia:

{% include codeHeader.html file="jugador.py" %}
```py
import random
from personaje import Personaje

class Jugador(Personaje):
	def __init__(self, hp: int, atk: int, df: int, arma: str = None) -> None:
		super().__init__(hp, atk, df)
		self.__arma = arma
```
{: .nolineno }

**Paso 10**.

Mantener los métodos ataque y defensa:

{% include codeHeader.html file="jugador.py" %}
```py
	def ataque(self) -> int:
		return (self.atk + random.randint(1, 5)
			if self.arma else self.atk)

	def defensa(self, ataque: int) -> None:
		self.hp -= max(ataque - random.randint(1, self.df), 0)
```
{: .nolineno }

**Paso 11**.

En el archivo `monstruo.py`, refactorizar la clase `Monstruo`, de forma tal que herede de `Personaje` y de `NPC` respectivamente. Sobrescribir el constructor, el cual debe recibir por parámetro una lista de argumentos de palabra clave, y usarlo como argumento para el llamado al constructor de `super()`:

{% include codeHeader.html file="monstruo.py" %}
```py
from personaje import Personaje
from npc import NPC

class Monstruo(Personaje, NPC):
	def __init__(self, **kargs) -> None:
		super().__init__(**kargs)
```
{: .nolineno }

**Paso 12**.

A continuación, en el mismo archivo, mantener los métodos ataque y defensa:

{% include codeHeader.html file="monstruo.py" %}
```py
	def ataque(self) -> int:
		return self.atk + int(self.hp * 0.01)

	def defensa(self, ataque: int) -> None:
		self.hp -= max(ataque - (self.df + int(self.hp * 0.001)), 0)
```
{: .nolineno }

**Paso 13**.

En el script `demo.py`, luego de importar las clases requeridas, crea una instancia de `Monstruo`, especificando con el nombre de cada parámetro los argumentos requeridos según lo solicitado. Luego, desde la instancia, haz el llamado al método `mostrar_dialogo` para mostrar el mensaje solicitado:

{% include codeHeader.html file="demo.py" %}
```py
from jugador import Jugador
from monstruo import Monstruo

m = Monstruo(hp=1000, atk=1, df=8, nombre="Bégimo")
m.mostrar_dialogo("GRAAAWR")
```
{: .nolineno }

**Paso 14**.

Modificar la lista enfrentados para que almacene la instancia de `Monstruo` creada:

{% include codeHeader.html file="demo.py" %}
```py
enfrentados = [Jugador(500, 10, 5, "espada"), m]
```
{: .nolineno }

**Paso 15**.

Modificar la condición que evalúa el hp del enfrentamiento recorrido, de forma que en caso de que haya muerto se evalúe el tipo de su clase (mediante `isinstance`) para mostrar en pantalla el mensaje solicitado:

{% include codeHeader.html file="demo.py" %}
```py
while any(e.hp <= 0 for e in enfrentados) == False:
	for e in enfrentados:
		if atk:
			e.defensa(atk)
		if e.hp > 0:
			atk = e.ataque()
		else:
			if isinstance(e, Monstruo):
				print("¡Felicidades!, haz ganado la batalla")
			elif isinstance(e, Jugador):
				print("Oh no!, haz perdido la batalla :(")
```
{: .nolineno }