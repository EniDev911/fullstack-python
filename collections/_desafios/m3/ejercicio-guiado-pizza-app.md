---
layout: post
title: Pizza App
type: guiado
show: true
modulo: m3
---

## Estructura del proyecto

Para cumplir con éxito y aplicando el principio de modularización vamos a trabajar con la siguiente estructura:

```bash
📂 pizza_app
│── main.py # script principal
│── add.py
│── masa.py
│── remove.py
│── salsa.py
│── show.py
└── tiempo.py
```

---

## Desarrollo

Definimos nuestro formato para almacenar las pizzas. En este caso se encuentra en un diccionario con la siguiente estructura:


{% include codeHeader.html icon="python" %}
```python
ingredientes_orden = {
	'masa': 'Masa Tradicional',
	'salsa': 'Salsa de Tomate',
	'ingredientes': ['Queso']
}
```
{: .nolineno }


### Menú

El menú se le mostrará al usuario para que pueda seleccionar alguna opción. 

Por ejemplo:

{% include codeHeader.html icon="python" %}
```python
opcion = input('''¿Qué desea realizar?

(1) Cambiar tipo de Masa
(2) Cambiar tipo de Salsa
(3) Agregar Ingredientes
(4) Eliminar Ingredientes
(5) Ordenar con los Ingredientes Actuales

(0) Consultar ingredientes de la pizza

Otro número cancelará el pedido.
> ''')
```
{: .nolineno }

En este caso asociamos un número a cada capacidad que debe tener nuestra app. Además informamos que en caso de utilizar otro número el pedido se cancelará.

### Cambiar la masa

Ahora en nuestro archivo `masa.py` definimos una función que se encargará de cambiar el tipo de masa:

{% tabs funcion_tipo_masa %}
{% tab funcion_tipo_masa python %}
{% include codeHeader.html icon="python" %}
```python
def tipo_masa(ingredientes, eleccion):

	if eleccion == 'T':
		ingredientes['masa'] = 'Masa Tradicional'
	elif eleccion == 'D':
		ingredientes['masa'] = 'Masa Delgada'
	elif eleccion == 'B':
		ingredientes['masa'] = 'Masa con Bordes de Queso'

	if eleccion in ['T', 'D', 'B']:
		print(f"Su masa se cambió a {ingredientes['masa']}")
	else:
		print("No se ha cambiado su tipo de Masa")

	return ingredientes
```
{: .nolineno }
{% endtab %}
{% tab funcion_tipo_masa explicación %}
{: .rounded .p-3 style='background: #191919' }
Definimos la función que permitirá escoger el tipo de masa modificando la clave `'masa'` del diccionario de ingredientes, para ello solicitará los ingredientes actuales y una elección como argumentos. Finalmente informará que se cambio la masa, caso contrario si se indica una opción inválida informará que no se cambio el tipo de masa.
{% endtab %}
{% endtabs %}


Para probar esta funcionalidad podemos ejecutar la función utilizando un set de ingredientes de prueba para determinar si el resultado es el esperado. Agregemos el siguiente código al final del archivo `masa.py`:


{% include codeHeader.html icon="python" %}
```python
if __name__ == "__main__":

	ingredientes_prueba = {
		'masa': 'Masa Tradicional',
		'salsa': 'Salsa de Tomate',
		'ingredientes': ['Queso']
	}

	eleccion = input('''Seleccione el tipo de Masa:

(T) Masa Tradicional
(D) Masa Delgada
(B) Masa con Bordes de Queso

Otra opción no modificará el tipo de Masa.
> ''')

	ingredientes = tipo_masa(ingredientes_prueba, eleccion.upper())
	print(ingredientes)
```
{: .nolineno }


### Cambiar la salsa

De la misma forma que en la sección anterior, vamos a implementar la elección del tipo de salsa en el archivo `salsa.py`:


{% tabs funcion_tipo_salsa %}
{% tab funcion_tipo_salsa python %}
{% include codeHeader.html icon="python" %}
```py
def tipo_salsa(ingredientes, eleccion):

	if eleccion == 'T':
		ingredientes['salsa'] = 'Salsa de Tomate'
	elif eleccion == 'A':
		ingredientes['salsa'] = 'Salsa Alfredo'
	elif eleccion == 'B':
		ingredientes['salsa'] = 'Salsa Berbecue'
	elif eleccion == 'P':
		ingredientes['salsa'] = 'Salsa Pesto'

	if eleccion in ['T', 'A', 'B', 'P']:
		print(f"Su salsa se cambió a {ingredientes['salsa']}")
	else:
		print("No se ha cambiado su tipo de Salsa")

	return ingredientes
```
{: .nolineno }
{% endtab %}
{% tab funcion_tipo_salsa explicación %}
{: .rounded .p-3 style='background: #191919'}
Definimos la función `tipo_salsa()`. Esta funcionalidad es muy parecida a la de elección de masa, solo que permitirá escoger el tipo del salsa, modificando la clave `'salsa'` del diccionario de ingredientes. Al igual que la función de `tipo_masa()` solicitará los ingredientes actuales y una elección.
{% endtab %}
{% endtabs %}

Para probar el código se ejecutará la función utilizando un set de ingredientes de prueba para determinar si entrega el resultado esperado. Al final del archivo `salsa.py` agrega el siguiente código:

{% include codeHeader.html icon="python" %}
```python
if __name__ == "__main__":

	ingredientes_prueba = {
		'masa': 'Masa Tradicional',
		'salsa': 'Salsa de Tomate',
		'ingredientes': ['Queso']
	}

	eleccion = input('''Seleccione el tipo de Salsa:

(T) Salsa de Tomate
(A) Salsa Alfredo
(B) Salsa Berbecue
(P) Salsa Pesto

Otra opción no modificará el tipo de Salsa.
> ''')

	ingredientes = tipo_salsa(ingredientes_prueba, eleccion.upper())
	print(ingredientes)
```
{: .nolineno }

### Agregar ingredientes

Ahora se implementará la opción para agregar ingredientes en el archivo `add.py`:

{% tabs funcion_add %}
{% tab funcion_add python %}
{% include codeHeader.html icon="python" %}
```python
def agregar_ingrediente(ingredientes, eleccion):
	disponibles = ['Tomate', 'Champiñones', 'Aceituna', 'Cebolla',
	'Pollo', 'Jamón', 'Carne', 'Tocino', 'Queso']

	nuevo_ingrediente = disponibles[eleccion - 1]

	if nuevo_ingrediente in ingredientes['ingredientes']:
		print('El ingrediente ya existe')
	else:
		ingredientes['ingredientes'].append(nuevo_ingrediente)
		print(f"Se ha agregado {nuevo_ingrediente}")

	return ingredientes
```
{: .nolineno }
{% endtab %}
{% tab funcion_add explicación %}
{: .rounded .p-3 style='background: #191919' }
En este caso, se define una **lista** de ingredientes disponibles. La función `agregar_ingrediente()` solicitará los ingredientes actuales y una elección numérica. Esta elección numérica se utilizará como índice para identificar qué ingrediente fue solicitado. Si el ingrediente ya ha sido agregado se devolverá un mensaje informando que el ingrediente ya existe. En caso contrario, el diccionario se agregará a la lista de ingredientes y se informará de esto al usuario. Finalmente la función devuelve los ingredientes actualizados.
{% endtab %}
{% endtabs %}

Para probar el código se ejecutará la función utilizando un set de ingredientes de prueba para determinar si entrega el resultado esperado. Al final del archivo `add.py` agrega el siguiente código:

{% include codeHeader.html icon="python" %}
```py
if __name__ == "__main__":

	ingredientes_prueba = {
		'masa': 'Masa Tradicional',
		'salsa': 'Salsa de Tomate',
		'ingredientes': ['Queso']
	}

	eleccion = int(input('''Seleccione el ingrediente que desea agregar:

(1) Tomate
(2) Champiñones
(3) Aceituna
(4) Cebolla
(5) Pollo
(6) Jamón
(7) Carne
(8) Tocino
(9) Queso

Otra opción no modificará los ingredientes actuales.
> '''))

	ingredientes = agregar_ingrediente(ingredientes_prueba, eleccion)
	print(ingredientes)
```
{: .nolineno }

### Quitando ingredientes

De manera análoga vamos a implementar la funcionalidad para eliminar ingredientes existentes en el archivo `remove.py`:

{% tabs funcion_remove %}
{% tab funcion_remove python %}
{% include codeHeader.html icon="python" %}
```python
def quitar_ingrediente(ingredientes, eleccion):

	disponibles = ['Tomate', 'Champiñones', 'Aceituna', 'Cebolla',
	'Pollo', 'Jamón', 'Carne', 'Tocino', 'Queso']

	quitar = disponibles[eleccion - 1]

	if quitar in ingredientes['ingredientes']:
		ingredientes['ingredientes'].remove(quitar)
		print(f"Se ha quitado {quitar}")
	elif len(ingredientes['ingredientes']) == 0:
		print("No hay ningún ingrediente que quitar")
	else:
		print("No se puede quitar ese ingrediente, porque no está incluido")

	return ingredientes
```
{: .nolineno }
{% endtab %}
{% tab funcion_remove explicación %}
{: .rounded .p-3 style='background: #191919' }
En este caso también se define una **lista** de ingredientes disponibles. La función `quitar_ingrediente()` solicitará los ingredientes actuales y una elección numérica. Esta elección numérica se utilizará de la misma manera que se utilizó al agregar un ingrediente.<br><br>Las opciones posibles acá son, si el ingrediente está presente se remueve y se informa. En el caso que no hayan ingredientes se avisará que no se puede quitar más porque no hay más ingredientes. Finalmente, en caso de que se quiera remover un ingrediente que no está también será informado, la función retorna los ingredientes actualizados.
{% endtab %}
{% endtabs %}

Para probar el código se ejecutará la función utilizando un set de ingredientes de prueba para determinar si entrega el resultado esperado. Al final del archivo `remove.py` agrega el siguiente código:

{% include codeHeader.html icon="python" %}
```python
if __name__ == "__main__":

	ingredientes_prueba = {
		'masa': 'Masa Tradicional',
		'salsa': 'Salsa de Tomate',
		'ingredientes': ['Queso']
	}

	eleccion = int(input('''Seleccione el ingrediente que desea quitar:

(1) Tomate
(2) Champiñones
(3) Aceituna
(4) Cebolla
(5) Pollo
(6) Jamón
(7) Carne
(8) Tocino
(9) Queso

Otra opción no modificará los ingredientes actuales.
> '''))

	ingredientes = quitar_ingrediente(ingredientes_prueba, eleccion)
	print(ingredientes)
```
{: .nolineno }

### Estimando el tiempo para una orden

Una vez que se ordena, se estimará el tiempo que toma realizar esa orden. Esto irá en el archivo `tiempo.py`:


{% tabs funcion_tiempo %}
{% tab funcion_tiempo python %}
{% include codeHeader.html icon="python" %}
```python
def estimar_tiempo(ingredientes):

	nro_ingredientes = len(ingredientes['ingredientes'])
	tiempo = 20 + nro_ingredientes * 2
	return tiempo
```
{: .nolineno }
{% endtab %}
{% tab funcion_tiempo explicación %}
{: .rounded .p-3 style='background: #191919' }
Esta función simplemente tomará los ingredientes actuales y los contará. A partir de eso reportará el tiempo según los requerimientos.
{% endtab %}
{% endtabs %}

Para probar el código se ejecutará la función utilizando un set de ingredientes de prueba para determinar si entrega el resultado esperado. Al final del archivo `tiempo.py` agrega el siguiente código:

{% include codeHeader.html icon="python" %}
```py
if __name__ == "__main__":

	ingredientes_prueba = {
		'masa': 'Masa Tradicional',
		'salsa': 'Salsa de Tomate',
		'ingredientes': ['Queso']
	}

	print(estimar_tiempo(ingredientes_prueba))
```
{: .nolineno }


### Mostrar la orden

La última funcionalidad a implementar contempla los ingredientes, para ello en el archivo `show.py` definimos la siguiente función:

{% tabs funcion_show %}
{% tab funcion_show python %}
{% include codeHeader.html icon="python" %}
```python
def mostrar_ingredientes(ingredientes):
	print(f"Su masa es: {ingredientes['masa']}")
	print(f"Su salsa es: {ingredientes['salsa']}")
	print("Los ingredientes son:")
	[print(f"- {ingr}") for ingr in ingredientes['ingredientes']]
```
{: .nolineno }
{% endtab %}
{% tab funcion_show explicación %}
{: .rounded .p-3 style='background: #191919' }
Esta función simplemente reportará la masa, salsa y listará uno a uno los ingredientes.
{% endtab %}
{% endtabs %}

Para probar el código se ejecutará la función utilizando un set de ingredientes de prueba para determinar si entrega el resultado esperado. Al final del archivo `show.py` agrega el siguiente código:

{% include codeHeader.html icon="python" %}
```python
if __name__ == "__main__":

	ingredientes_prueba = {
		'masa': 'Masa Tradicional',
		'salsa': 'Salsa de Tomate',
		'ingredientes': ['Queso', 'Tomate', 'Pollo']
	}

	mostrar_ingredientes(ingredientes_prueba)
```
{: .nolineno }


### Arrancar el programa

Para terminar la app ensamblamos las distintas partes dentro de `main.py`:

{% tabs main_script %}
{% tab main_script python %}
{% include codeHeader.html icon="python" %}
```python
while True:
	opcion = input('''¿Qué desea realizar?

(1) Cambiar tipo de Masa
(2) Cambiar tipo de Salsa
(3) Agregar Ingredientes
(4) Eliminar Ingredientes
(5) Ordenar con los Ingredientes Actuales

(0) Consultar ingredientes de la pizza

Otro Número cancelará el pedido.
> ''')
```
{: .nolineno }
{% endtab %}
{% tab main_script explicación %}
<div markdown="1" class="p-3 rounded" style="background: #191919">

Esto permitirá que siempre que se ejecute alguna acción volvamos a este menú principal. Para determinar las acciones a ejecutar entonces se pueden utilizar condicionales que ejecuten cada una de las funciones desarrolladas.
> Usar `while True` debe ser utilizado con cautela ya que genera un Ciclo Infinito. En este programa los casos de salida vendrán dados por el uso de `exit()`.

</div>
{% endtab %}
{% endtabs %}

Cambiar masa:

{% include codeHeader.html icon="python" %}
```python
if opcion == '1':
	eleccion = input('''Seleccione el tipo de Masa:
		
(T) Masa Tradicional
(D) Masa Delgada
(B) Masa con Bordes de Queso

Otra opción no modificará el tipo de Masa.
> ''')

	ingredientes_orden = tipo_masa(ingredientes_orden, eleccion.upper())
```
{: .nolineno }

Cambiar salsa:

{% include codeHeader.html icon="python" %}
```python
elif opcion == '2':
	eleccion = input('''Seleccione el tipo de Salsa:

(T) Salsa de Tomate
(A) Salsa Alfredo
(B) Salsa Berbecue
(P) Salsa Pesto

Otra opción no modificará el tipo de Salsa.
> ''')

	ingredientes_orden = tipo_salsa(ingredientes_orden, eleccion.upper())
```
{: .nolineno }

Agregar ingredientes:

{% include codeHeader.html icon="python" %}
```python
elif opcion == '3':
	eleccion = int(input('''Seleccione el ingrediente que desea agregar:

(1) Tomate
(2) Champiñones
(3) Aceituna
(4) Cebolla
(5) Pollo
(6) Jamón
(7) Carne
(8) Tocino
(9) Queso

Otra opción no modificará los ingredientes actuales.
> '''))

	ingredientes_orden = agregar_ingrediente(ingredientes_orden, eleccion)
```
{: .nolineno }


Eliminar ingrediente:

{% include codeHeader.html icon="python" %}
```python
elif opcion == '4':
	eleccion = int(input('''Seleccione el ingrediente que desea quitar:

(1) Tomate
(2) Champiñones
(3) Aceituna
(4) Cebolla
(5) Pollo
(6) Jamón
(7) Carne
(8) Tocino
(9) Queso

Otra opción no modificará los ingredientes actuales.
> '''))

	ingredientes_orden = quitar_ingrediente(ingredientes_orden, eleccion)
```
{: .nolineno }


Ordenar:

{% tabs ordenar_pizza %}
{% tab ordenar_pizza python %}
{% include codeHeader.html icon="python" %}
```python
elif opcion == '5':

	tiempo = estimar_tiempo(ingredientes_orden, eleccion)
	print(f"Su pizza estará lista en {tiempo} minutos")
	ordenar = input("Desea ordenar ahora S/N: ").upper()

	if ordenar == 'S':
		print("Gracias por ordenar en Pizza JAT")
		print("Disfrute su Pizza")
		exit()
```
{: .nolineno }
{% endtab %}
{% tab ordenar_pizza explicación %}
{: .rounded .p-3 style='background: #191919' }
En este caso, `estimar_tiempo()` nos indica el tiempo que demorará en estar lista la Pizza. Luego de informar de esto al usuario, se confirma si se desea ordenar y en caso de aceptar se termina el programa.
{% endtab %}
{% endtabs %}

Mostrar ingredientes:

{% include codeHeader.html icon="python" %}
```python
elif opcion == '0':
	mostrar_ingredientes(ingredientes_orden)
```
{: .nolineno }

Cancelación del pedido:

{% include codeHeader.html icon="python" %}
```python
else:
	print("Su pedido ha sido cancelado. Gracias por contactarse a Pizza Jat")
	exit()
```
{: .nolineno }

El código final de `main.py` se vería de la siguiente forma:

{% include codeHeader.html file='main.py' %}
```python
from masa import tipo_masa
from salsa import tipo_salsa
from add import agregar_ingrediente
from remove import quitar_ingrediente
from show import mostrar_ingredientes
from tiempo import estimar_tiempo

ingredientes_orden = {
	'masa': 'Masa Tradicional',
	'salsa': 'Salsa de Tomate',
	'ingredientes': ['Queso']
}

print("¡Gracias por ordenar con nosotros!")
while True:

	opcion = input('''¿Qué desea realizar?

(1) Cambiar tipo de Masa
(2) Cambiar tipo de Salsa
(3) Agregar Ingredientes
(4) Eliminar Ingredientes
(5) Ordenar con los Ingredientes Actuales

(0) Consultar ingredientes de la pizza

Otro Número cancelará el pedido.
> ''')

	if opcion == '1':
		eleccion = input('''Seleccione el tipo de Masa:

(T) Masa Tradicional
(D) Masa Delgada
(B) Masa con Bordes de Queso

Otra opción no modificará el tipo de Masa
> ''')

		ingredientes_orden = tipo_masa(ingredientes_orden, eleccion.upper())

	elif opcion == '2':
		eleccion = input('''Seleccione el tipo de Salsa:

(T) Salsa de Tomate
(A) Salsa Alfredo
(B) Salsa Berbecue
(P) Salsa Pesto

Otra opción no modificará el tipo de Salsa.
> ''')

		ingredientes_orden = tipo_salsa(ingredientes_orden, eleccion.upper())

	elif opcion == '3':
		eleccion = int(input('''Seleccione el ingrediente que desea agregar:

(1) Tomate
(2) Champiñones
(3) Aceituna
(4) Cebolla
(5) Pollo
(6) Jamón
(7) Carne
(8) Tocino
(9) Queso

Otra opción no modificará los ingredientes actuales.
> '''))

		ingredientes_orden = agregar_ingrediente(ingredientes_orden, eleccion)

	elif opcion == '4':
		eleccion = int(input('''Seleccione el ingrediente que desea quitar:

(1) Tomate
(2) Champiñones
(3) Aceituna
(4) Cebolla
(5) Pollo
(6) Jamón
(7) Carne
(8) Tocino
(9) Queso

Otra opción no modificará los ingredientes actuales.
> '''))

		ingredientes_orden = quitar_ingrediente(ingredientes_orden, eleccion)

	elif opcion == '5':

		tiempo = estimar_tiempo(ingredientes_orden, eleccion)
		print(f"Su pizza estará lista en {tiempo} minutos")
		ordenar = input("Desea ordenar ahora S/N: ").upper()

		if ordenar == 'S':
			print("Gracias por ordenar en Pizza JAT")
			print("Disfrute su Pizza")
			exit()

	elif opcion == '0':
		mostrar_ingredientes(ingredientes_orden)
	else:
		print("Su pedido ha sido cancelado. Gracias por contactarse a Pizza Jat")
		exit()
```

### Refactorizando

Si bien el programa comenzó con un buen diseño modularizado resulta ser un programa muy largo. Actualmente tiene más de 80 líneas de código nuestro `main.py`. Podríamos generar un archivo más conciso que tuviera lo justo y necesario para entender de buena manera el flujo.

Por ejemplo, es posible notar que en todas las opciones se despliega un menú que es, en general bastante largo. Una cosa que podemos hacer es almacenar eso en variables que se definan en un script aparte. Lo mismo pasa con nuestra Pizza base, no es fundamental tenerla en el archivo principal.

Para ello creamos un nuevo archivo llamado `datos.py`. Este contendrá variables que acortarán bastante el código:

{% include codeHeader.html file="datos.py" %}
```python
ingredientes = {
	'masa': 'Masa Tradicional',
	'salsa': 'Salsa de Tomate',
	'ingredientes': ['Queso']
}

T_MASA = '''Seleccione el tipo de Masa:

(T) Masa Tradicional
(D) Masa Delgada
(B) Masa con Bordes de Queso

Otra opción no modificará el tipo de Masa
> '''

T_SALSA = '''Seleccione el tipo de Salsa:

(T) Salsa de Tomate
(A) Salsa Alfredo
(B) Salsa Berbecue
(P) Salsa Pesto

Otra opción no modificará el tipo de Salsa.
> '''

AG_INGREDIENTE = '''Seleccione el ingrediente que desea agregar:

(1) Tomate
(2) Champiñones
(3) Aceituna
(4) Cebolla
(5) Pollo
(6) Jamón
(7) Carne
(8) Tocino
(9) Queso

Otra opción no modificará los ingredientes actuales.
> '''

QT_INGREDIENTE = '''Seleccione el ingrediente que desea quitar:

(1) Tomate
(2) Champiñones
(3) Aceituna
(4) Cebolla
(5) Pollo
(6) Jamón
(7) Carne
(8) Tocino
(9) Queso

Otra opción no modificará los ingredientes actuales.
> '''

menu = '''¿Qué desea realizar?

(1) Cambiar tipo de Masa
(2) Cambiar tipo de Salsa
(3) Agregar Ingredientes
(4) Eliminar Ingredientes
(5) Ordenar con los Ingredientes Actuales

(0) Consultar ingredientes de la pizza

Otro Número cancelará el pedido.
> '''
```
{: .nolineno }

El texto asociado a cada menú será una variable, por lo tanto podríamos reescribir nuestro `main.py` de la siguiente manera:

{% include codeHeader.html file="main.py" %}
```python
from masa import tipo_masa
from salsa import tipo_salsa
from add import agregar_ingrediente
from remove import quitar_ingrediente
from show import mostrar_ingredientes
from tiempo import estimar_tiempo
import datos as d

ingredientes_orden = d.ingredientes

print("¡Gracias por ordenar con nosotros!")
while True:
	opcion = input(d.menu)

	if opcion == '1':
		eleccion = input(d.T_MASA).upper()
		ingredientes_orden = tipo_masa(ingredientes_orden, eleccion)

	elif opcion == '2':
		eleccion = input(d.T_SALSA).upper()
		ingredientes_orden = tipo_salsa(ingredientes_orden, eleccion)

	elif opcion == '3':
		eleccion = int(input(d.AG_INGREDIENTE))
		ingredientes_orden = agregar_ingrediente(ingredientes_orden, eleccion)

	elif opcion == '4':
		eleccion = int(input(d.QT_INGREDIENTE))
		ingredientes_orden = quitar_ingrediente(ingredientes_orden, eleccion)

	elif opcion == '5':
		tiempo = estimar_tiempo(ingredientes_orden)
		print(f"Su pizza estará lista en {tiempo} minutos")
		ordenar = input("Desea ordenar ahora S/N: ").upper()

		if ordenar == 'S':
			print("Gracias por ordenar en Pizza JAT")
			print("Disfrute su Pizza")
			exit()

	elif opcion == '0':
		mostrar_ingredientes(ingredientes_orden)

	else:
		print("Su pedido ha sido cancelado. Gracias por contactarse a Pizza Jat")
		exit()
```

De esta forma se ha podido reducir el largo código casi a la mitad. Además es posible entender de mejor manera el contenido de este.

Lo único que se agregó adicional fueron las lineas 7 que importa el script `datos.py`

### Mejorando la experiencia de usuario

Si comienza hacer pruebas se puede observar que ciertos menús pasan demasiado rápido. Además, si se hacen muchos procesos en el código se notará que todo el historial de comandos quedará en la pantalla. Es por eso que podemos hacer pausas y limpiezas de pantalla que permitan un mejor flujo de la app.

Para esto consideramos las siguientes acciones:

- Cada menú se despliegue se debe realizar en una ventana limpia.
- Entre cada elección se debe dejar una línea de separación para la reaparición del menú principal.
- La opción que muestra los ingredientes debe permanecer por 5 segundos antes de que reaparezca el menú principal.
- Para los mensajes de finalización de programa por cancelación o por confirmación de orden se dejarán 3 segundos.


El script `main.py` quedará de la siguiente manera:

{% include codeHeader.html file="main.py" %}
```python
from masa import tipo_masa
from salsa import tipo_salsa
from add import agregar_ingrediente
from remove import quitar_ingrediente
from show import mostrar_ingredientes
from tiempo import estimar_tiempo
import datos as d
import time, os, sys

clear = 'cls' if sys.platform == 'win32' else 'clear'
ingredientes_orden = d.ingredientes

print("¡Gracias por ordenar con nosotros!")
while True:

	os.system(clear)
	opcion = input(d.menu)

	if opcion == '1':
		os.system(clear)
		eleccion = input(d.T_MASA).upper()
		ingredientes_orden = tipo_masa(ingredientes_orden, eleccion)

	elif opcion == '2':
		os.system(clear)
		eleccion = input(d.T_SALSA).upper()
		ingredientes_orden = tipo_salsa(ingredientes_orden, eleccion)

	elif opcion == '3':
		os.system(clear)
		eleccion = int(input(d.AG_INGREDIENTE))
		ingredientes_orden = agregar_ingrediente(ingredientes_orden, eleccion)

	elif opcion == '4':
		os.system(clear)
		eleccion = int(input(d.QT_INGREDIENTE))
		ingredientes_orden = quitar_ingrediente(ingredientes_orden, eleccion)

	elif opcion == '5':
		os.system(clear)
		tiempo = estimar_tiempo(ingredientes_orden)
		print(f"Su pizza estará lista en {tiempo} minutos")
		ordenar = input("Desea ordenar ahora S/N: ").upper()

		if ordenar == 'S':
			print("Gracias por ordenar en Pizza JAT")
			print("Disfrute su Pizza")
			time.sleep(3)
			exit()

	elif opcion == '0':
		os.system(clear)
		mostrar_ingredientes(ingredientes_orden)
		time.sleep(5)

	else:
		print("Su pedido ha sido cancelado. Gracias por contactarse a Pizza Jat")
		time.sleep(3)
		exit()
```

## Repositorio

{% tabs repo_pizza_app %}
{% tab repo_pizza_app github %}
[![pizza_app](https://socialify.git.ci/EniDev911/pizza_app/image?description=1&descriptionEditable=M3%3A%20desaf%C3%ADo%20guiado%20-%20pizza%20app&language=1&name=1&owner=1&theme=Dark){: .card }](//github.com/enidev911/pizza_app)
{% endtab %}
{% endtabs %}