---
layout: post
title: "Funciones en Python"
category: "Python"
thumbnail: /assets/img/python-funciones-card.png
---

## ¿Qué son las funciones?

En el contexto de la programación, una *función* es una secuencia de sentencias que realizan una operación y que reciben un nombre. Python y la gran mayoría de lenguajes de programación vienen con una gran variedad funciones nativas del lenguaje, pero Python al igual que otros lenguajes de programación nos permite definir **nuestras propias funciones**.

### ¿Por qué funciones?

Puede ser no estar muy claro por qué merece la pena molestarse en **dividir un programa en funciones**. Existen varias razones:

- El crear una función nueva te da la oportunidad de **dar nombre a un grupo de sentencias**, lo cual hace que tu programa sea **más fácil** de **leer**, **entender** y **depurar**.
- Las funciones pueden hacer que **un programa sea más pequeño, al eliminar código repetido**. Además, si quieres realizar cualquier cambio en el futuro, sólo tendrás que hacerlo en un único lugar.
- Las **funciones bien diseñadas una vez que se ha escrito y depurado, puedes reutilizarla** en otros programas.

---

## Funciones internas

Como se mencionaba al principio Python proporciona un número importante de funciones internas, que pueden ser  sin necesidad de tener que definirlas previamente. Los creadores y equipo de Python han escrito un conjunto de funciones para resolver problemas comunes y las han incluido en Python para que las podamos utilizar.

Algunas de las funciones incorporadas en Python son las siguientes:

{% capture funciones %}
---
title: "Funciones incorporadas"
---
graph TD
  min["min()"]
  max["max()"]
  round["round()"]
  sum["sum()"]
  input["input()"]
  list["list()"]
{% endcapture %}

{% include mermaid.html content=funciones %}

{% include codeHeader.html icon="python" compiler="y" %}
```py
numeros = [10, 3, 22, 14, 55, 43]
print(min(numeros)) # 3
print(max(numeros)) # 55
print(max('abcdefghijklmnopqrstuvwxyz')) # z
print(min('zyxwvutsrqponmlkjihgfedcba')) # a
```
{: .nolineno }

La función `max()` en el caso de las cadenas nos dice cuál es el "carácter más grande" de la cadena (que resulta ser la **z** en el abecedario), mientras que la función `min()` mps muestra el carácter más pequeño (que en el caso del abecedario es la **a**)

---


## Funciones definidas por el usuario

Anteriormente hemos visto las funciones internas que vienen con Python como `print()` para mostrar mensajes por la consola, pero al igual que en otros lenguajes de programación, también podemos definir **nuestras propias funciones**. Para ello debemos respetar la siguiente sintaxis.

### Sintaxis

```python
def nombre_funcion(parametros):
  # ...código

  return valor_de_retorno
```
{: .nolineno }

Como podemos observar, la función tiene un **nombre**, opcionalmente podrá recibir **parámetros**, en el cuerpo o bloque al interior contiene el **código a ejecutar** y opcionalmente, pero que en la mayoría de los casos se suele hacer, es que nos **retorne un valor**.

### Párametros y Argumentos

Algunas de las funciones internas en Python necesitan argumentos. Por ejemplo cuando se llama a la función `len()` espera que le pasemos un argumento que es el objeto de Python cuya longitud nos interesa conocer. El valor de retorno de la función `len()` es de **tipo entero** y en él se almacena el **número de elementos** pertenecientes al objeto transmitido:

{% include codeHeader.html icon="python" %}
```py
idioma = 'Español'
metales = ['Oro', 'Plata', 'Bronce']
print(len(idioma)) # 7
print(len(metales)) # 3
```
{: .nolineno }

Dentro de las funciones, los argumentos son asignados a variables llamadas *parámetros*. 

Un ejemplo de función definida por el usuario que recibe un parámetro:

{% include codeHeader.html icon="python" %}
```py
def repetir(parametro):
  print(parametro, end=' ')
  print(parametro)
```
{: .nolineno }

Esta función asigna el argumento que se envíe al momento de llamar a la función a una variable llamada `parametro` y luego imprime el valor del parámetro recibido (sea éste lo que sea) dos veces.

La función antes definida funcionará con cualquier valor que pueda ser mostrado en pantalla:

{% include codeHeader.html %}
```py
repetir("Span") # 'Span' 'Span'
repetir(12) # 12 12 
repetir(len("abcde")) # 5 5
```


### Argumentos Arbitrarios

Si no sabes cuántos argumentos se pasarán a la función, podemos usar en la función los `*args`. Python utiliza esto como un mecanismo que puede permitir un **número arbitrario de argumentos** posicionales a una función como una **tupla**.

{% include codeHeader.html icon="python" compiler="y" %}
```py
def ejemplo_funcion(*args):
	for arg in args:
		print(arg)

ejemplo_funcion("A", "B", "C", 1, 2, 3)
```
{: .nolineno }

`*args` es útil cuando necesitas manejar una **variedad de argumentos** en una función y no sabes de antemano cuántos serán, o cuando deseas **reutilizar una función** con diferentes **números de argumentos posicionales**.

### Argumentos de palabra clave

Los argumentos de palabra clave te permiten pasar valores utilizando un formato de `nombre=valor`.

Los `**kwargs` en Python son un mecanismo que permite a una función recibir un número variable de argumentos nombrados y acceder a ellos como un **diccionario**. `"kwargs"` es una abreviatura de *keyword arguments* (argumentos de palabras clave).

Por ejemplo, considera la siguiente función:

{% include codeHeader.html icon="python" compiler="y" %}
```python
def ejemplo_funcion(**kwargs):
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")


# Podemos llamar a esta función con cualquier número de argumentos nombrados:
ejemplo_funcion(a=1, b=2, c=3)
```
{: .nolineno }

En este caso, `a`, `b` y `c` son argumentos nombrados, y serán recibidos por la función como un **diccionario** con **claves** y **valoresvalores** correspondientes.

Es útil cuando necesitas manejar una variedad de argumentos en una función y no sabes de antemano cuántos serán, o cuando quieres proporcionar opciones adicionales de manera flexible.
