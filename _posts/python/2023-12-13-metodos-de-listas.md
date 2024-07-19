---
layout: post
title: "Métodos de listas"
category: "Python"
thumbnail: /assets/img/python-metodos-de-listas.png
---


## Acceder y modificar listas

Para acceder a un elemento de una lista se utilizan los índices. **Un índice es un número entero que indica la posición de un elemento en una lista**. El primer elemento de una lista siempre comienza en el índice 0.


Por ejemplo si tenemos una lista **x** con 5 elementos almacenado, podemos acceder a los mismos usando corchetes y un índice `[index]`, que va desde el `0` hasta el `-1` (el tamaño de la lista):


{% include codeHeader.html icon="python" compiler="y" %}
```py
x = [23, 50, "Versión 3", "Python", 3.87]
print(x[0]) # 23
print(x[1]) # 50
print(x[2]) # 'Versión 3'
print(x[3]) # 'Python'
print(x[4]) # 3.87
print(x[-1]) # 3.87
```
{: .nolineno }


---

## Buscar posiciones

### index

Con el método `index()` podemos saber en que índice (posición dentro de la lista) se encuentra un elemento.

Veamos la sintaxis del método:

```py
lista.index(elemento, incio, fin)
```
{: .nolineno }

- `elemento`: El elemento a buscar su índice.
- `inicio`: Busca el elemento a partir del índice dado. (Opcional)
- `fin`: Busca el elemento hasta el índice dado. (Opcional)

En el siguiente ejemplo, se encuentra la posición o su índice de un elemento dentro de una lista:

{% include codeHeader.html icon="python" compiler="y" %}
```python
animales = ["Perro", "Gato", "Ratón"]

index = animales.index("Perro")
print("El indice de Perro es:", index)

index = animales.index("Gato")
print("El indice de Gato es:", index)

index = animales.index("Ratón")
print("El indice de Ratón es:", index)
```
{: .nolineno }


---

## Añadir

### append()

Con el método `append()` puedes **agregar un nuevo elemento al final de una lista existente** (sobrescribe la original) este método acepta elementos de cualquier tipo de datos, lo que lo hace versátil para tipos de datos simples como números enteros y de punto flotante como para tipos de datos más complejos como tuplas o listas anidadas.

Veamos la sintaxis del método:

```py
lista.append(elemento)
```
{: .nolineno }

Aquí `lista` es el nombre de la lista y `elemento` el nuevo elemento que se agregará. En el siguiente ejemplo, se agregan elementos de diferentes tipos de datos a la misma lista:

{% include codeHeader.html icon="python" compiler="y" %}
```py
lista = []
lista.append(1)
lista.append("dos")
lista.append(True)
lista.append(("*", "+", "-", "/"))
print(lista)
```
{: .nolineno }

### insert()

El método `insert()` a diferencia de `append()` requiere dos parámetro, que son **el elemento a insertar** y **el índice dónde se debe insertar el elemento**. Es importante tener en cuenta que el parámetro índice siempre debe ser un número entero.

Veamos la sintaxis del método:

```py
lista.insert(indice, elemento)
```
{: .nolineno }

- `indice`: Es un número entero que determina en que posición se insertará el nuevo elemento.
- `elemento`: Es el nuevo elemento que puede ser cualquier tipo de datos existente en Python.

En el siguiente ejemplo, se agregan elementos a la misma lista pero en la posición que deseamos:

{% include codeHeader.html icon="python" compiler="y" %}
```py
ingredientes = ["azúcar", "harina"]
ingredientes.insert(0, "huevos")
print(ingredientes) # ["huevos", "azúcar", "harina"]
```
{: .nolineno }

---

## Eliminar

### pop()

El método `pop()` se encarga de eliminar siempre el último elemento de una lista en Python y nos retorna el elemento eliminado. Sin embargo también es posible indicarle una posición del elemento a eliminar `pop(indice)`.

En el siguiente ejemplo, tenemos una lista de jugadores pero vamos a eliminar el último y luego por la posición o índice del elemento:

{% include codeHeader.html icon="python" compiler="y" %}
```python
jugadores = ["Marco", "David", "Ricky", "Jose", "Gerardo", "Carlos"]

ultimo_eliminado = jugadores.pop()
print("El último jugador eliminado es", ultimo_eliminado)
```
{: .nolineno }

### remove()

El método `remove()` elimina un elemento por su valor. Es una opción más directa cuando se conoce y se tiene identificado el elemento a eliminar:

{% include codeHeader.html icon="python" compiler="y" %}
```python
jugadores = ["Marco", "David", "Ricky", "Jose", "Gerardo", "Carlos"]

jugadores.remove("Marco")

print("El jugador Marco ha sido eliminado")
print("Los jugadores restantes son:", jugadores)
```
{: .nolineno }

---

## Ordenar listas

### sort()

El método `sort()` ordena los elementos de menos a mayor por defecto cuando se tratan de un conjunto de números:

{% include codeHeader.html icon="python" compiler="y" %}
```py
l = [3, 1, 2, 0, 8, 4, 6, 5, 7, 9]
l.sort()
print(l) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
{: .nolineno }

Si lo aplicamos sobre un conjunto de **String** el método `sort()` ordenará alfabéticamente en orden ascendente (a-z):

{% include codeHeader.html %}
```py
colores = ['rojo', 'azul', 'verde', 'amarillo']
colores.sort()
print(colores) # ['amarillo', 'azul', 'rojo', 'verde']
```

---

## Filtrar listas

Python viene con una función incorporada `filter()` que se puede utilizar para objetos iterables como una lista, tupla, conjunto o diccionario y extraer elementos en el iterable que cumplan con una condición determinada.

**Sintaxis**:

```
filter(function, iterable)
```

- **function**: una función de Python que contiene la condición de filtrado.
- **iterable**: el iterable que se va a filtrar. En este caso, usaremos listas.

Ver la función `filter()` en acción, considere una lista de números, que se quiere solo los números menores de 50:

{% include codeHeader.html %}
```py
numbers = [79, 15, 92, 53, 46, 24, 81, 77, 37, 61]

# función que contiene la condición de filtrado
def is_even(num):
	if num < 50:
		return True
	else:
		return False

# la función list() es usada par crear una lista a partir de un iterable
# retornando el resultado de la función filter()
filtered_numbers = list(filter(is_even, numbers))
print(filtered_numbers)
```
