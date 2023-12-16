---
layout: post
title: "Funciones en Python"
thumbnail: /assets/img/python-funciones-card.png
---

En el contexto de la programación, una *función* es una secuencia de sentencias que realizan una operación y que reciben un nombre. Cuando se define una función, 

Python y la gran mayoría de lenguajes de programación vienen con una gran variedad funciones nativas del lenguaje, pero Python al igual que otros lenguajes de programación nos permite definir **nuestras propias funciones**.

## ¿Por qué funciones?

Puede no estar muy claro por qué merece la pena molestarse em dividir un programa en funciones. Existen varias razones:

- El crear una función nueva te da la oportunidad de **dar nombre a un grupo de sentencias**, lo cual hace que tu programa sea más fácil de leer, entender y depurar.
- Las funciones pueden hacer que **un programa sea más pequeño, al eliminar código repetido**. Además, si quieres realizar cualquier cambio en el futuro, sólo tendrás que hacerlo en un único lugar.
- Las **funciones bien diseñadas una vez que se ha escrito y depurado, puedes reutilizarla** en otros programas.

---

## Funciones internas

Como se mencionaba al principio Python proporciona un número importante de funciones internas, que pueden ser  sin necesidad de tener que definirlas previamente.

{% capture funciones %}
---
title: "Funciones incorporadas"
---
graph TD
  abs["len()"]
  round["round()"]
  sum["sum()"]
  input["input()"]
  list["list()"]
{% endcapture %}

{% include mermaid.html content=funciones %}

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

