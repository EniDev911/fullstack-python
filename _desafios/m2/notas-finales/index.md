---
layout: default
title: Desafío - Notas Finales
---

## Descripción

En este desafío nos solicitan llenar dinámicamente la información de una tabla a partir de datos ingresados por el usuario mediante el método `prompt()`.

Para este desafío nos brindan solo la parte de html y los estilos que son básicamente clases de [bootstrap](https://getbootstrap.com/), la parte de javascript la debemos desarrollar nosotros.

---

## Variables globales

Vamos a comenzar declarando unas variables globales para que esten disponible a lo largo del script actual:

{% include codeHeader.html %}
```js
// variables globales
var validado = false;
var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var get = (id) => document.getElementById(id); //  Abreviamos su uso :D
```
{: .nolineno }

---

## Validación

Aunque no es un requerimiento, debemos tomar en cuenta que el objetivo es calcular promedios, y por ello podemos deducir que esperamos trabajar con números, entonces para evitar ejecutar la operación cuando no se reciben números como argumentos, podemos crear una sencilla función y valiendonos de las expresiones regulares saber si la entrada del usuario contiene números o no:

{% include codeHeader.html %}
```js
function validarEntradas(valores) {
    const regexp = /^([.,0-9])*$/
    return valores.every(valor => regexp.test(valor));
}
```
{: .nolineno }

Aquí la expresión regular, para aquellos que no están muy familizarizados con este tipo de herramientas, estamos diciendo lo siguiente:
- `//`: Dentro de las barras se debe encerrar el patrón de la expresión regular
- `^`:  El signo de intercalación nos permite identificar si  los caracteres que le siguen coinciden con el inicio de la serie de entrada (en este caso los números).
- `()`: Un parentesís de apertura y uno de cierre indican una agrupación de algunos caracteres dentro de una expresión regular.
- `[]`: Los corchetes de apertura y cierre y el grupo de caracteres que incluyen definen una clase de carácter. Por ejemplo:
  - `[aeiou]`: coincide con cualquier vocal.
  - `[a-z]`: coincide con cualquier letra minúscula.
  - `[0-9]`: significa cualquier dígito único.
- `.`: El punto coincide con cualquier carácter individual, excepto con el carácter de nueva línea (`\n`).
- `*`: El asterisco coincide con el carácter o grupo de caracteres anteriores de la expresión regular una o más veces.
- `$`: El Signo de dólar como el último carácter de una expresión regular, identifica el final de un término. En este contexto, se suele hacer referencia al signo de dólar como un carácter de ancla.

---

## Sacar promedio

Ya y como podemos suponer, si estamos validando números quiere decir que vamos a recibir un conjunto de números por lo que debemos crear un mecanismo que permita obtener un resultado para ese conjunto de números. 

Para ello definiremos una función para obtener el promedio según los valores recibidos por los usuarios:

{% include codeHeader.html %}
```js
function obtenerSuma(acumulador, numeroActual) {
  return acumulador + Math.round(numeroActual);
}

function sacarPromedio(notas) {
  const total = notas.reduce(obtenerSuma , 0);
  return (total / notas.length).toFixed(2);
}
```
{: .nolineno }

Como podemos ver usamos el método que tienen los **array** llamado [`reduce()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce){:target='_blank'}. Este método ejecuta un **callback** a cada elemento de la matriz, en orden, pasando el valor de retorno de cálculo en el elemento anterior. EL resultado final es el **callback** ejecutado en todo los elementos de la matriz y es por ello que hemos definido una función auxiliar `obtenerSuma()` como nuestro **callback** en el método `reduce()` y así sea más legible de leer el código y como segundo parámetro hemos indicado el valor de iniciación del acumulador que es 0, esto nos sirve para almacenar el total de los valores ingresados por el usuario en una variable, luego retornaremos el total dividido por la cantidad de elementos del array, es evidente que en determinados casos nos pueda generar un número con una cantidad exagerada de decimales es por ello que usamos la función `toFixed(2)` para que podamos siempre delimitar el resultado a dos decimales.

---

## Mostrar resultado

Ahora vamos a definir la función que se encagará de mostrar los resultado en el lugar que corresponda: 

{% include codeHeader.html %}
```js
function mostrarResultado(modulo, notas) {
  get(`${modulo}-nota1`).textContent = nota1;
  get(`${modulo}-nota2`).textContent = nota2;
  get(`${modulo}-nota3`).textContent = nota3;
  get(`${modulo}-promedio`).textContent = sacarPromedio(notas);
}
```
{: .nolineno }

Como mencionamos anteriormente, debemos colocar el valor según corresponda es por eso que tenemos que definimos la función con dos parámetros, el primero para identificar el módulo ya que los nodos en la tabla en el html se compone de la siguiente manera:

- `<td id="{html,css,js}>-nota1"></td>`
- `<td id="{html,css,js}>-nota2"></td>`
- `<td id="{html,css,js}>-nota3"></td>`
- `<td id="{html,css,js}>-promedio"></td>`

Y como segundo parámetro esperamos el conjunto de notas, para llamar a la función correspondiente que se encarga de obtener el resultado y así podemos mostrarlo en el nodo que corresponde.

---

## Pedir entradas (notas)

Ahora podemos definir otra función que nos permita recoletar las entradas de los usuarios y al mismo tiempo convertirlas a números, esta función es la que va estar asociada a los botones que tenemos para sacar el promedio de cada módulo, es por eso que como parámetro tenemos el propio evento que será desencadenado por el botón:

{% include codeHeader.html %}
```js
function pedirNotas(evento) {
    const modulo = evento.target.id.split("_");
    nota1 = +prompt("Escriba la nota 1 [" + modulo[1].toUpperCase() + "]:");
    nota2 = +prompt("Escriba la nota 2 [" + modulo[1].toUpperCase() + "]:");
    nota3 = +prompt("Escriba la nota 3 [" + modulo[1].toUpperCase() + "]:");
    const notas = [nota1, nota2, nota3];
    validado = validarEntradas(notas);
    if (!validado) {
        confirm('Números inválidos, ¿Quieres volver a intentar?')
          ? pedirNotas(evento)
          : 0
    } else {
        mostrarResultado(modulo[1], notas)
    }
}
```
{: .nolineno }

> **OJO:**<br>El uso de `+prompt("...")` convertirá la respuesta en un número, no precisamente en un número entero. Este es un buen truco, pero no una solución definitiva y mucho menos limpia es solo una forma rápida de convertir un tipo de dato a otro, si quieres hacer verificaciones más profunda te recomiendo el uso de funciones como `parseInt()` o el constructor `Number`.

El método `split()` nos permite dividir la cadena según el separador que indiquemos, en este caso es el guión bajo (`_`), los botones tienen como identificador la nomenclatura de `btn_{html,css,js}` entonces si usamos el método `split` sobre la cadena `"btn_html"` nos retornará un arreglo `["btn", "html"]` y
para poder recuperar el valor que nos interesa que es `"html"` tenemos que acceder a su posición que sería el **índice 1**.

---

## Asociar las funciones a los botones

{% include codeHeader.html %}
```js
let botones = document.querySelectorAll("button[id^='btn']")
botones.forEach((boton) => {
    boton.addEventListener('click', pedirNotas)
})
```
{: .nolineno }

---

## Resultado final

{% tabs base %}
{% tab base index.html %}
{% include codeHeader.html %}
```html
{{ site.data.m2.notas_finales.html }}
```
{% endtab %}
{% tab base script.js %}
{% include codeHeader.html %}
```js
{{ site.data.m2.notas_finales.js }}
```
{% endtab %}
{% tab base resultado %}
{% include ifr_results.html 
  src=site.data.m2.notas_finales.url %}
{% endtab %}
{% endtabs %}
