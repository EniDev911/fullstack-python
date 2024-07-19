---
layout: post
title: "Usando entrada estándar input"
category: "Python"
thumbnail: /assets/img/python-input-card.png
---


Los desarrolladores a menudo tenemos la necesidad de interactuar con los usuarios, ya sea para obtener datos o para proporcionar algún tipo de resultado. La mayoría de los programas actuales utilizan un cuadro de diálogo como una forma de pedirle al usuario que proporcione algún tipo de entrada (*input*). Mientras que Python nos proporciona dos funciones incorporadas para leer la entrada estándar desde el teclado.

**Sintaxis** :

```py
input([prompt]) # Para Python en su versión 3.x
raw_input([prompt]) # Para Python en su versión 2.x
```
{: .nolineno }

> **prompt**: es un argumento opcional recibe una cadena de texto para mostrar al usuario.


Esta función `input()` primero toma la entrada del usuario y luego se evalúa la expresión, lo que significa que Python identifica automáticamente si el usuario ingresó una cadena (*string*), un número (*number*) o una lista (*arreglo*). Si la entrada proporcionada no es correcta, Python genera un error de sintaxis o una excepción como [**_`ValueError`_**](https://docs.python.org/3/library/exceptions.html#ValueError). 

**Ejemplo:**


{% include codeHeader.html icon="python" %}
```py
val = input("Ingresa un valor: ")
print(val)
# Ingresa un valor :  10
# output: 10 
# por defecto lo almacena como una cadena
print(type(val))
# <class 'str'>
```
{: .nolineno }

Usando la conversión de tipos, si convierte explícitamente una variable que contiene a la función `input()` o utilizandola directamente en su declaración y si el usuario ingresa un valor erróneo tendría una excepción de tipo [**_`ValueError`_**](https://docs.python.org/3/library/exceptions.html#ValueError):


{% include codeHeader.html icon="python" %}
```py
val = int(input("Ingresa un número: "))
# o también ocurrirá un error si lo tengo de la siguiente manera
# print(int(val))
print(val)
# Ingresa un valor :  diez
# output: ValueError: invalid literal for int() with base 10: 'diez'
```
{: .nolineno }

{: align='center'}
![img - exception]({{ 'assets/img/exception_input.png' | relative_url }}){:height='190'}


---


## Como funciona internante input() en Python

- Primero se ejecuta la función `input()`, el flujo del programa se detendrá hasta que el usuario haya dado la entrada.

- El texto o mensaje que se ingreso a la opción `prompt` muestra en la pantalla de salida para pedirle al usuario que ingrese un valor de entrada.

- Lo que sea que ingrese como entrada, la función `input()` lo convierte en una cadena, quiere decir, si ingresa un valor entero, será procesado como una cadena, necesitará convertirlo explícitamente en un número entero en su código usando la [conversión de tipo](https://www.w3schools.com/python/python_casting.asp). Ej: 

{% include codeHeader.html icon="python" %}
```py
num = input("Ingrese un número: ")
print(type(num))
# output: <class 'str'>
num = int(input("Ingrese un número: "))
print(type(num))
# output: <class 'int'>
# otra opción más legible es:
num = input("Ingrese un número: ")
print(type(int(num)))
```
{: .nolineno }

---

## Tomando múltiples entradas del usuario en Python

En Python se pueden tomar múltiples valores o entradas en una línea mediante dos métodos:

- usando el método `split()`
- usando la comprensión de lista ([*`list comprehension`*](https://www.w3schools.com/python/python_lists_comprehension.asp))

### Usando el método split()

Esta función ayuda obtener múltiples entradas de los usuarios rompe la entrada dada por el separador, cualquier espacio en blanco es un separador. Generalmente, los desarrolladores usan el método `split()` para dividir una cadena de Python, pero se puede usar para tomar múltiples entradas. 


**Sintaxis**: 

```py
str.split(separator, maxplit)
```
{: .nolineno }

**Ejemplos**: 

{% include codeHeader.html icon="python" %}
```py
x, y = input('Ingresa dos valores: ').split()
print('Eje x:', x)
print('Eje y:', y)
# ======== Salida
a, b = input('Ingresa dos valores: ').split()
print('Primer número {} y segundo número es {}'.format(a, b))
```
{: .nolineno }

---


## Usando la comprensión de listas

La comprensión de lista es una forma elegante de definir y crear listas en Python. Podemos crear listas como enunciado matemáticos en una sola línea. También se utiliza para obtener múltiples entradas de un usuario.

**Sintaxis**:

```
[expression for variable in collection if condition]
```
{: .nolineno }

A menudo la expresión (es decir, aquello que terminará inserto en la lista resultante) es igual a la variable, la condición es opcional. La colección puede ser una lista o cualquier otro objeto iterable (esto es, cualquier cosa sobre lo que podamos aplicar un bucle `for`).

**Ejemplo**: 


{% include codeHeader.html icon='python' %}
```py
x = [int(x) for x in input("Ingrese múltiples valores separados por coma: ").split(",")]
print("Numeros de la lista: ", x)
```
{: .nolineno }

---

## Ocultar la información de entrada

Otro aspecto que es importante son las contraseñas al momento de manejar entradas, debemos buscar la manera segura de ingresar esta información. Python propociona la función `getpass.getpass()` del módulo con el mismo nombre. Le solicita al usuario una contraseña sin hacer eco. El módulo [getpass](https://docs.python.org/es/3.9/library/getpass.html){: target='_blank' } proporciona una forma segura de manejar las solicitudes de contraseña donde los programas interactúan con los usuarios a través del terminal. Este módulo proporciona dos funciones:

- `getpass.getpass()`
- `getpass.getuser()`

### Función getpass

La función `getpass()` retorna la entrada del usuario como una cadena.

**Sintaxis**: 

```py
getpass.getpass(prompt='Password: ', stream=None) 
```
{: .nolineno }

Veamos el siguiente ejemplo para comprender su implementación.

{% include codeHeader.html icon='python' %}
```py
# Ejemplo 1: Sin argumentos en la llamada.
import getpass

try:
    p = getpass.getpass()
    
except Exception as error:
    print('ERROR', error)
else:
    print('Contraseña ingresada:', p)
# Entrada del usuario:
# Password : (No se muestra lo que se escribe.)
# output: Contraseña ingresada: salchipapa123
```
{: .nolineno }

Al no proporcionar una cadena como argumento se muestra el valor `password:` al usuario ya que es el valor por defecto que tiene la función. Hay ciertos programas que solicitan preguntas de seguridad en lugar de solicitar contraseñas para mejorar la seguridad. Aquí, la solicitud se puede cambiar a cualquier valor.


{% include codeHeader.html icon="python" %}
```py
# Ejemplo 2: cambiamos la pregunta
import getpass
 
p = getpass.getpass(prompt='¿Cuál es tu color favorito? ')
 
if p.lower() == 'azul':
    print('Bienvenido..!!!')
else:
    print('La respuesta ingresada es incorrecta..!!!')
# Entrada: ¿Cuál es tu color favorito? Azul
# output: Bienvenido
```
{: .nolineno }

### Función getuser

La función `getuser()` muestra el nombre de inicio de sesión del usuario. Esta función verifica las variables de entorno **`LOGNAME`**, **`USER`**, **`LNAME`** y **`USERNAME`**, en orden, y devuelve el valor de la primera cadena que no sea vacía. 

**Sintaxis**: 

```py
getpass.getuser()
```
{: .nolineno }


Veamos el siguiente ejemplo para comprender su implementación.

{% include codeHeader.html icon="python" %}
```py
#Ejemplo 3: Mostrando el usuario 
import getpass

user = getpass.getuser()

while True:
    pwd = getpass.getpass("Usuario : %s, Password: " % user)

    if pwd == 'abcd123':
        print("Bienvenido!!!")
        break
    else:
        print("La contraseña es incorrecta.")
# Entrada : Usuario: Will
```
{: .nolineno }
