---
layout: post
title: "Funciones en Python"
thumbnail: /assets/img/python-funciones-card.png
---

## Funciones en Python

En el contexto de la programación, una *función* es una secuencia de sentencias que realizan una operación y que reciben un nombre. Cuando se define una función, Python y la gran mayoría de lenguajes de programación vienen con una gran variedad funciones nativas del lenguaje, pero Python al igual que otros lenguajes de programación nos permite definir **nuestras propias funciones**.

## ¿Por qué funciones?

Puede no estar muy claro por qué merece la pena molestarse en dividir un programa en funciones. Existen varias razones:

- El crear una función nueva te da la oportunidad de **dar nombre a un grupo de sentencias**, lo cual hace que tu programa sea más fácil de leer, entender y depurar.
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

{% include codeHeader.html %}
```py
numeros = [10, 3, 22, 14, 55, 43]
print(min(numeros)) # 3
print(max(numeros)) # 55
print(max('abcdefghijklmnopqrstuvwxyz')) # z
print(min('zyxwvutsrqponmlkjihgfedcba')) # a
```

La función `max()` en el caso de las cadenas nos dice cuál es el "carácter más grande" de la cadena (que resulta ser la **z** en el abecedario), mientras que la función `min()` mps muestra el carácter más pequeño (que en el caso del abecedario es la **a**)

---

## Párametros y argumentos

Algunas de las funciones internas en Python necesitan argumentos. Por ejemplo cuando se llama a la función `len()` espera que le pasemos un argumento que es el objeto de Python cuya longitud te interesa conocer. El valor de retorno de la función `len()` es de tipo entero y en él se almacena el **número de elementos pertenecientes al objeto transmitido**:

{% include codeHeader.html %}
```py
idioma = 'Español'
metales = ['Oro', 'Plata', 'Bronce']
print(len(idioma)) # 7
print(len(metales)) # 3
```

Dentro de las funciones, los argumentos son asignados a variables llamadas *parámetros*. A continuación tenemos un ejemplo de función definida por el usuario que recibe un argumento:

{% include codeHeader.html %}
```py
def repetir(parametro):
  print(parametro, end=' ')
  print(parametro)
```

Esta función asigna el argumento a un parámetro llamado `parametro`. Cuando la función es llamada, imprime el valor del parámetro (sea éste lo que sea) dos veces.

La función antes definida funcionará con cualquier valor que pueda ser mostrado en pantalla:

{% include codeHeader.html %}
```py
repetir("Span") # 'Span' 'Span'
repetir(12) # 12 12 
repetir(len("abcde")) # 5 5
```

---

## Argumentos Arbitrarios

Si no sabes cuántos argumentos se pasarán a la función, puede usar **\*args** para permitir un número arbitrario de argumentos posicionales:


{% tabs multiargs %}
{% tab multiargs script.py %}
{% include codeHeader.html %}
```py
def mi_funcion(*args):
	for arg in args:
		print(arg)

mi_funcion("A", "B", "C", 1, 2, 3)
```
{% endtab %}
{% tab multiargs resultado %}
```
A
B
C
1
2
3
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Argumentos de palabra clave

Los argumentos de palabra clave te permiten pasar valores utilizando la sintaxis **<<nombre=valor>>**
