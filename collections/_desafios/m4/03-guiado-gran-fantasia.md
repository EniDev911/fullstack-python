---
layout: post
title: "Gran Fantasía"
subtitle: "M4 - Desafío Guiado"
type: "guiado"
modulo: m4
img_path: /assets/img/desafios/gran-fantasia/
show: true
show_next: true
github:
  name: enidev911/m4-guiado-gran-fantasia
---

## Descripción

Has sido contratado por la startup **Juego por comida**, y se te ha solicitado desarrollar el algoritmo de la primera escena de su próximo juego "**Gran Fantasía**".

El prototipo debe desarrollarse utilizando una aplicación de consola escrita en Python, que conste de un script principal que ejecute el juego, y una clase que permita crear personajes, que debe ser importada en el script principal. Las opciones de juego del usuario, así como el nombre de su personaje, se deben solicitar mediante *`input()`*.

La clase que permite crear personajes debe considerar lo siguiente:

- Cada personaje tiene un nombre, el cual debe ser especificado al **momento de crear un personaje**.
- Cada **personaje recién creado** tiene **nivel 1** y **experiencia 0** (estos son los únicos valores posibles al momento de crear un personaje).
- A cada personaje es posible consultarle o asignarle un estado. Al solicitar el estado de un personaje, se debe mostrar en pantalla su nombre, su nivel y su experiencia. Al asignar un valor al estado, este valor corresponderá a la experiencia recibidad por el personaje. Según la experiencia recibida, se debe modificar la experiencia actual del personaje y su nivel de acuerdo a lo siguiente:
	- Los valores posible de experencia son entre 0 y 99 inclusive.
	- El nivel mínimo es 1 y no hay máximo.
	- Cada **100 puntos** de experiencia recibidos, el personaje sube 1 nivel y experiencia 0. Si se asigna 250 a su estado, pasará a tener nivel 3 y experiencia 50.
	- Si la experiencia recibida es negativa, se debe restar a la experiencia actual del personaje. Cada vez que la experiencia sea menor a 0, el personaje baja de nivel (su nivel disminuye en 1). Ejemplo: el personaje tiene actualmente nivel 3 y experiencia 50. Si **se asigna -150** a su estado, pasará a tener nivel 2 y experiencia 0. Si el personaje ya tiene nivel 1 y experiencia 0, no se altera su nivel ni su experiencia al recibir experiencia negativa.
	
> **Tip**: Puede usar una variable temporal que corresponda a la suma entre la **experiencia actual** del personaje y **la asignada al estado**. Luego, mediante ciclos `while` puede ir actualizando este valor y nivel del personaje, terminados los ciclos, se asigna la experiencia actual el valor de la suma temporal actualizado. Otra posible solución es utilizando división redondeada (`//`) y módulo (`%`).

- Un personaje se considera mayor a otro si tiene mayor nivel, y se considera menor a otro si tiene menor nivel.

> **Tip**: Investiga sobre los métodos especiales `__gt__` y `__lt__`. Puedes revisar la documentación oficial en el siguiente [link](https://docs.python.org/es/3/library/operator.html#operator.__lt__){: target='_blank' }

El script principal que ejecuta la escena del juego debe considerar el siguiente flujo:

- Dar la bienvenida al jugador y solicitar el nombre para su personaje.
- Crear el personaje del jugador y mostrar su estado en pantalla.
- Crear un personaje "**Orco**" y calcular la probabilidad de ganar que tiene el personaje del jugador versus el orco. Para esta probabilidad, debe considerar lo siguiente:
	- Si el jugador es **menor al orco**, tiene un **33%** de probabilidad de ganar.
	- Si el jugador es **mayor al orco**, tiene un **66%** de probabilidad de ganar.
	- Si el jugador es **igual al orco**, tiene un **50%** de probabilidad de ganar.

> **Tip**: Puede agregar en la clase un **método de instancia** que retorne la probabilidad de la instancia actual de ganar versus otra instancia.

- Informar por pantalla al jugador que ha aparecido un orco y la probabilidad que tiene de ganarle. Informarle también que **en caso de ganarle, recibirá 50 puntos de experiencia** y **el orco perderá 30** y que, en **caso de perder**, **perderá 30 puntos de experiencia** mientras que **el orco ganará 50**. Consultar finalmente al jugador si desea atacar o huir. El jugador debe ingresar **1 para atacar** y **2 para huir**.


> **Tip**: Puedes agregar en la clase **un método estático** que reciba por parámetro la probabilidad, muestre en pantalla todo lo requerido y retorne la opción de juego del usuario.


- Mientras la opción de juego del usuario sea "**Atacar (1)**", se debe realizar lo siguiente:
	- Obtener el resultado del ataque del jugador al orco, donde los resultados posibles son "**Gana**" o "**Pierde**". Para ello, **genere un número al azar entre 0 y 1**. Si **el número obtenido es menor o igual que la probabilidad calculada**, entonces **el resultado del ataque es "Gana"**. En **caso contrario, el resultado es "Pierde"**.
	{: .my-3 }
	- > **Tip**: puede usar el módulo `uniform()` del módulo `random`.
	- **Informar al jugador el resultado** del ataque, **los puntos de experiencia** ganados o perdidos según corresponda, **actualizar el estado del orco**, **actualizar el estado de su personaje** y mostrar sus estados posteriores a la actualización. Recordar que si el jugador gana, obtiene 50 puntos de experiencia y el orco pierde 30, y en caso contrario, el jugador pierde 30 puntos de experiencia y el orco gana 50.
	- Con el estado modificado, **actualizar el valor de probabilidad de ganar al orco**, y **volver a consultar al jugador su opción** de juego.
- Si el jugador ha incluido huir, mostrar un mensaje en pantalla informando que el orco ha quedado atrás.


---

## Desarrollo

### Requerimiento 1

En un archivo `personaje.py`, crea la clase que permita crear personajes. Considerando la información entregada en la descripción del problema, la clase debe tener los siguientes métodos:

- Constructor (considera parámetros y valores asignados a atributos de instancia). <i class="fa fa-check"></i>
- Getter de estado. <i class="fa fa-check"></i>
- Setter de estado. <i class="fa fa-check"></i>
- Sobrecarga para comparar **"menor que"**. <i class="fa fa-check"></i>
- Sobrecarga para comparar **"mayor que"**. <i class="fa fa-check"></i>
- Sobrecarga para comparar **"igual que"** (opcional). <i class="fa fa-check"></i>
- Método de instancia que retorna la probabilidad de la instancia actual de ganar respecto de otra instancia (opcional). <i class="fa fa-check"></i>
- Método que muestra diálogo de enfrentamiento al orco (incluyendo probabilidad de ganar) y retorna opción escogida por el jugador (opcional). <i class="fa fa-check"></i>


La solución a este requerimiento es la siguiente:

{% tabs getter_setter %}
{% tab getter_setter solución 1 %}
{% include codeHeader.html icon="python" %}
```python
from dialogos import leer_dialogos

class Personaje:

    # Constructor
    def __init__(self, nombre):
        self.nombre = nombre  # 👈 atributo de instancia asignado por parámetro
        self.nivel = 1  # 👈 valor asignado en atributo de instancia
        self.experiencia = 0  # 👈 valor asignado en atributo de instancia

    # Getter de estado
    @property
    def estado(self):
        return (
            f"NOMBRE:{self.nombre.upper():10}"
            f"NIVEL:{self.nivel:<10}"
            f"EXPERIENCIA:{self.experiencia}"
        )

    # Setter de estado
    @estado.setter
    def estado(self, exp):
        tmp_exp = self.experiencia + exp

        while tmp_exp >= 100:
            self.nivel += 1
            tmp_exp -= 100

        while tmp_exp < 0:
            if self.nivel > 1:
                tmp_exp = 100 + tmp_exp
                self.nivel -= 1
            else:
                tmp_exp = 0
        self.experiencia = tmp_exp

    @staticmethod
    def jugar(probabilidad: int):
        print("¡Oh no!, ¡Ha aparecido un Orco!")
        print("Con tu nivel actual, tienes un {0}% de probabilidad de ganarle al Orco".format(probabilidad))
        print()
        print("Si ganas, ganarás 50 puntos de experiencia y el orco perderá 30.")
        print("Si pierdes, perderás 30 puntos de experiencia y el orco ganará 50.")
        print("¿Qué deseas hacer?\n1. Atacar\n2. Huir")
        return int(input("> "))

    def probabilidad_de_ganar(self, other):
        if self > other:
            self.probabilidad = 0.66
        elif self < other:
            self.probabilidad = 0.33
        elif self == other:
            self.probabilidad = 0.5

        return self.probabilidad

    def __gt__(self, other):
        return self.nivel > other.nivel

    def __lt__(self, other):
        return self.nivel < other.nivel

    def __eq__(self, other):
        return self.nivel == other.nivel


if __name__ == "__main__":
    import random

    aleatorio = random.uniform(0, 1)
    p1 = Personaje("puffy")
    p2 = Personaje("laly")
    Personaje.jugar(p1.probabilidad_de_ganar(p2) * 100)

    if aleatorio > p1.probabilidad:
        p1.estado = -30
        p2.estado = 50
    else:
        p1.estado = 50
        p2.estado = -30

    print(p1.estado)
    print(p2.estado)
```
{: .nolineno }
{% endtab %}
{% tab getter_setter solución 2 %}
{% include codeHeader.html icon="python" compiler="y" %}
```py
class Personaje():

	def __init__(self, nombre):
		self.nombre = nombre
		self.nivel = 1
		self.experiencia = 0

	## Getter estado
	@property
	def estado(self):
		return f"NOMBRE: {self.nombre.upper()} \
		NIVEL: {self.nivel}\
		EXPERIENCIA: {self.experiencia}"

	@estado.setter
	def estado(self, experiencia):
		total_experiencia = self.experiencia + experiencia
		
		if total_experiencia < 0:
			self.experiencia = (total_experiencia % 100)
			self.nivel -= abs(experiencia) // 100

			if self.nivel < 1:
				self.nivel = 1
				self.experiencia = 0
			
		else:
			self.experiencia += (experiencia % 100)
			self.nivel += total_experiencia // 100

if __name__ == "__main__":
	p1 = Personaje("marco")
	print(p1.estado)

	p1.estado = 50
	print(p1.estado)
```
{: .nolineno }
{% endtab %}
{% endtabs %}


### Requerimiento 2

En un archivo `juego.py`, crea la clase que permita jugar, considerando la información entregada en la descripción del problema:

- **Importar módulos** necesarios para el desarrollo del juego. <i class="fa fa-check"></i>
- **Creación de personajes** y **almacenamiento de opción** de juego **del jugador** (calculando y mostrando probabilidad de ganar). <i class="fa fa-check"></i>
- Para la opción de ataque, según el resultado obtenido, actualización de estados de los personajes.
- A continuación del punto anterior, dentro del ataque, mostrar estados actualizados de los personajes, y nueva consulta al usuario considerando la probabilidad actualizada de ganar.


<u><strong>Ejemplo de salida:</strong></u>

{: .shadow .p-3 .fs-6 style='background: #000; border: 1px solid #333'}
```txt
¡Bienvenido a Gran Fantasía!
Por favor indique nombre de su personaje:
EniDev911

NOMBRE: EniDev911     NIVEL: 1     EXP: 0

¡Oh no!, ¡Ha aparecido un Orco!

Con tu nivel actual, tienes un 50.0% de probabilidades de ganarle al Orco.

Si ganas, ganarás 50 puntos de experiencia y el orco perderá 30.
Si pierdes, perderás 30 puntos de experiencia y el orco ganará 50.

¿Qué desea hacer?
1. Atacar
2. Huir
1

¡Le has ganado al orco, felicidades!
¡Recibirás 50 puntos de experiencia!

NOMBRE: EniDev911     NIVEL: 1     EXP: 50
NOMBRE: Orco     NIVEL: 1     EXP: 0

Con tu nivel actual, tienes 33.0% de probabilidad de ganarle al Orco.

Si ganas, ganarás 50 puntos de experiencia y el orco perderá 30.
Si pierdes, perderás 30 puntos de experiencia y el orco ganará 50.

¿Qué desea hacer?
1. Atacar
2. Huir
2

¡Has huido! El orco ha quedado atrás
```



{% include codeHeader.html file="juego.py" %}
```python
from personaje import Personaje
import random, time, os

if __name__ == "__main__":

    print("¡Bienvenido a Gran Fantasía!")
    print("Por favor indique nombre de su personaje:")
    clear = lambda: os.system("cls" if os.name == "nt" else "clear")
    p1 = Personaje(input())
    orco = Personaje("Orco")

    while True:

        print(p1.estado + "\n")
        jugar = Personaje.jugar(p1.probabilidad_de_ganar(orco) * 100)

        if jugar == 1:
            if random.uniform(0, 1) < p1.probabilidad:
                p1.estado = 50
                orco.estado = -30
                clear()
                print("¡Le has ganado al orco, felicidades!")
                print("¡Recibirás 50 puntos de experiencia!")
                time.sleep(2)
                clear()
            else:
                p1.estado = -30
                orco.estado = 50
                clear()
                print("¡Oh no! ¡El orco te ha ganado!")
                print("¡Has perdido 30 puntos de experiencia!")
                time.sleep(2)
                clear()
        else:
            break

print("¡Has huido! El orco ha quedado atrás.")
```
{: .nolineno }

---

## Mejoras

### Separar los diálogos del código

Una buena idea para mejorar la organización del proyecto es crear un nuevo módulo que permita leer un archivo que contendrá los diálogos del juego.

En este caso vamos a usar el [formato CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas){: target='_blank' }, ya que podemos instalar una [extensión para VS CODE](https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv){: target='_blank' }  para editar archivos `.csv` como si fuera una hoja de calculos:

![img - csv dialogos]({{ page.img_path | relative_url | append: 'dialogos_csv_vscode.png'}}){: .card }

Entonces creamos un nuevo archivo `dialogos.py` y añadimos lo siguiente (en la pestaña **csv** dejare el contenido de los diálogos):

{% tabs dialogos %}
{% tab dialogos python %}
{% include codeHeader.html file="dialogos.py" %}
```python
import csv

def leer_dialogos(key:str) -> str:
    with open('dialogos.csv', encoding='utf-8') as f:
        csv_reader = csv.DictReader(f)
        dialogos = {row['Id']:row['Dialogo'] for row in csv_reader}

    return dialogos[key]

if __name__ == "__main__":
    print(leer_dialogos('principal'))
```
{: .nolineno }
{% endtab %}
{% tab dialogos csv %}
{% include codeHeader.html file='dialogos.csv' %}
```
Id,Dialogo
principal,¡Bienvenido a Gran Fantasía!
p1,Por favor indique nombre de su personaje:
inicio,"¡Oh no!, ¡Ha aparecido un Orco!"
probabilidad,"Con tu nivel actual, tienes un {0}% de probabilidad de ganarle al Orco"
si_ganas,"
Si ganas, ganarás 50 puntos de experiencia y el orco perderá 30."
si_pierdes,"Si pierdes, perderás 30 puntos de experiencia y el orco ganará 50.
"
jugar,"¿Qué deseas hacer?
1. Atacar
2. Huir"
ganado,"¡Le has ganado al orco, felicidades!
¡Recibirás 50 puntos de experiencia!"
perdido,"¡Oh no! ¡El orco te ha ganado!
¡Has perdido 30 puntos de experiencia!"
```
{% endtab %}
{% endtabs %}


---

## Repositorio

{% include repository.html repo=page.github %}