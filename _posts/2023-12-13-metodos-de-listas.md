---
layout: post
title: "Métodos de listas"
thumbnail: /assets/img/python-metodos-de-string.png
---


## Acceder y modificar listas

Si tenemos una lista `x` con 5 elementos almacenado, podemos acceder a los mismos usando corchetes y un índice `[0]`, que va desde el **0** hasta el **-1** (el tamaño de la lista):

{% include codeHeader.html %}
```py
x = [23, 50, "Versión 3", "Python", 3.87]
print(x[0]) # 23
print(x[1]) # 50
print(x[2]) # 'Versión 3'
print(x[3]) # 'Python'
print(x[4]) # 3.87
print(x[-1]) # 3.87
```


## Añadir

### append()

El método `append()` agrega un nuevo elemento a una matriz (al final, sobrescribe la original):

{% include codeHeader.html %}
```py
lista = [1,2,3,4,5]
lista.append(6)
lista
```

### insert()

El método `insert()` añade un elemento en una posición o índice determinado.

**Sintaxis**:

```
lista.insert(<index>, <obj>)
```

- **index**: Es un entero que determina en que posición se insertará el nuevo elemento.
- **obj**: Es el nuevo elemento que puede ser cualquier estructura de datos existente en Python.

{% include codeHeader.html %}
```py
l = [1, 3]
l.insert(1, 2)
print(l) # [1, 2, 3]
```

---

## Ordenar listas

### sort()

El método `sort()` ordena los elementos de menos a mayor por defecto cuando se tratan de un conjunto de números:

{% include codeHeader.html %}
```py
l = [3, 1, 2, 0, 8, 4, 6, 5, 7, 9]
l.sort()
print(l) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

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
