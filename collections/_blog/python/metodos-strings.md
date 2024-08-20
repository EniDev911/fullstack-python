---
layout: post
title: "Métodos de strings"
category: "python"
thumbnail: /assets/img/python-metodos-de-string.png
---

> **NOTA**<br>Recordemos que las cadenas son inmutables; por ende, todos los métodos a continuación no actuán sobre el objeto original sino que retorna uno nuevo.

## Métodos para transformar

### capitalize()

Retorna la cadena con su primera letra en mayúscula:

{% include codeHeader.html icon="python" compiler="y" %}
```py
print("hello world".capitalize()) # Hello world
```
{: .nolineno }

### swapcase()

Cambia las mayúsculas por minúsculas y viceversa:

{% include codeHeader.html icon="python" compiler="y" %}
```py
print("Hello World".swapcase()) # hEELO wORLD
```
{: .nolineno }


### upper()

Retornan una copia de la cadena con todas sus letras en mayúsculas:

{% include codeHeader.html icon="python" compiler="y" %}
```py
print("Hello".upper()) # HELLLO
```
{: .nolineno }


### casefold() o lower()

Retornan una copia de la cadena con todas sus letras en minúsculas:

{% include codeHeader.html icon="python" compiler="y" %}
```py
print("HELLO WORLD".casefold()) # hello world
print("HELLO WORLD".lower()) # hello world
```
{: .nolineno }

---

## Métodos de alineación

### center(), ljust(), rjust()

Estos métodos alinean una cadena en el *centro*, la *izquierda*, o la *derecha* respectivamente. Toman un argumento, la cantidad de caracteres respecto de la cual se producirá la alineación:

**Sintaxis**:

```
nueva_cadena = cadena.[center,ljust,rjust](ancho[, caracter_de_relleno])
```
{: .nolineno }

- **cadena**: Es la cadena original que deseas alinear.
- **ancho**: Es un entero que representa el ancho total deseado de la nueva cadena después de la alineación.
- **caracter_de_relleno**: (opcional): Es el carácter que se utiliza para rellenar los espacios vacíos a los lados de la cadena. De forma predeterminada utiliza el espacio en blanco.

{% include codeHeader.html icon="python" compiler="y" %}
```py
print("hello".center(10)) # ..hello...
print("hello".ljust(10)) # hello.....
print("hello".rjust(10)) # .....hello
print("hello".center(10)) # por defecto son espacios
print("hello".center(10, "*")) # ***Hola***
```
{: .nolineno }

---

## Métodos de separación y unión

### split()

El método para dividir una cadena según un **carácter separador** es `split()`. Cuyo separador por defecto son espacios en blancos y saltos de líneas:

{% include codeHeader.html icon="python" compiler="y" %}
```py
str = "Hello World!\n¡Hola Mundo!".split()
print(str) # ['Hello', 'World!', '¡Hola', 'Mundo']
```
{: .nolineno }

El indicador o separador se puede pasar como argumento:

{% include codeHeader.html icon="python" compiler="y" %}
```py
str = "Hello World!\n¡Hola Mundo!".split(" ") # indicador espacio en blanco
print(str) # ['Hello', 'World!\n¡Hola', 'Mundo']
```
{: .nolineno }


O bien , para separar únicamente según saltos de líneas usando el método `splitlines()`:

{% include codeHeader.html icon="python" compiler="y" %}
```py
str = "Hello World!\n¡Hola Mundo!".splitlines()
print(str) # ['Hola Mundo!', 'Hello World!'] (equivalente a split("\n"))
```
{: .nolineno }


> **NOTA** <br>Un segundo argumento en `split()` indica cuál es el máximo de divisiones que puede tener lugar el string.