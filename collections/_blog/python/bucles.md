---
layout: post
title: Bucles
category: "python"
toc: false
thumbnail: /assets/img/loops-python.png
---

Los bucles son una parte esencial de la programación. Cada programa que usas seguro utiliza los bucles.

Los bucles son bloques con declaraciones que se ejecutan repetidamente hasta que se cumple una condición.

## Bucle while

Un bucle `while` es muy simple, pero requiere que declaremos una variable previamente para evaluar y evitar que el programa se quede **congelado en un bucle infinito** por olvidarnos de este factor y además dentro debemos recordar incrementar el valor de la variable:

{: #ejemplo_while }
{% include codeHeader.html icon="python" compiler="y" %}
```py
i = 0 # Inicialización de la variable contador

# Condición: Mientras la variable contador sea menor de 5
while (i < 5):
	print("Valor de i:", i)
	i = i + 1 # Incrementamos el valor de i
```
{: .nolineno }

> La operación `i = i + 1` es lo que se suele llamar un incremento de una variable. Es muy común simplificarlo con un operador de incremento `i += 1`, que hace exactamente lo mismo: aumenta su valor en 1
{: .prompt-note }

---

## Bucle for

El bucle `for` es quizás uno de los más utilizado en el mundo de la programación. A diferencia del bucle `while`, un bucle `for` es un bucle que se repite un número predeterminado de veces. La sintaxis de un bucle `for` es la siguiente:

**Sintaxis**:

```
for variable in elemento iterable (lista, cadena, range, etc.):
	cuerpo del bucle
```
{: .nolineno }

No es necesario definir la variable de control antes del bucle como en los bucles `while`, aunque igual es posible utilizar como variable de control una variable ya definida en el programa.

Vamos a replicar el mismo [ejemplo anterior](#ejemplo_while) utilizando un bucle for:

{% include codeHeader.html icon="python" compiler="y" %}
```py
# Repetir 5 veces comenzando el rango desde 0
for i in range(0, 5):
	print("Valor de i:", i)
```
{: .nolineno }

Si la variable de control no se va a utilizar en el cuerpo del bucle, como en el ejemplo anterior, se puede utilizar (`_`) en vez de un nombre de variable. Esta es solo una notación que no tiene ninguna consecuencia con respecto al funcionamiento del programa, pero sirve de ayuda a la persona que esté leyendo el código fuente, que sabe así que los valores no se van a utilizar. Por ejemplo:

{% include codeHeader.html icon="python" compiler="y" %}
```py
for _ in [0, 1, 2]:
	print("Hola")
```
{: .nolineno }

En los ejemplos anteriores, la variable de control `i` no se utilizaba en el bloque de instrucciones para algo relevante, pero en muchos casos sí que se utiliza. Cuando se utiliza, hay que tener en cuenta de que la variable de control va tomando los valores del elemento actual del recorrido. Por ejemplo:

{% include codeHeader.html icon="python" compiler="y" %}
```py
for i in [3, 4, 5]:
	print(f"Hola. Ahora i vale {i} y su cuadrado es {i ** 2}")
```
{: .nolineno }
