---
layout: post
title: "Bucles en javascript"
category: "javascript"
thumbnail: /assets/img/bucles-js.png
---


Una de las principales ventajas de la programación es la posibilidad de crear **bucles y repiticiones** para tareas específicas, y que no tengamos que realizarlas varias veces de forma manual. Existen muchas formas de realizar bucles, vamos a ver los más básicos, similares en otros lenguajes de programación:  

{: .table .table-dark }
|Tipo de bucle|Descripción|
|:------------|:----------|
|`while`|Bucles simples.|
|`for`|Bucles clásicos.|
|`do..while`|Bucles simples que se realizan mínimo una vez.|
|`for..in`|Bucles sobre posiciones de un array.|
|`for..of`|Bucles sobre elementos de un array.|
|`Arrays functions`|Bucles específicos de un array.|


Antes de comenzar a ver que tipos de bucles existen en javascript, es necesario conocer algunos conceptos básicos de los bucles:  

- **Condición**: Al igual que en los **if**, en los bucles se va a evaluar una condición para saber si se debe repetir el bucle o finalizarlo. Generalmente, si la condición es verdadera, se repite. Si es false, se finaliza.

- **Iteración**: Cada repitición de un bucle se denomina iteración. Por ejemplo si un bucle repite una acción 10 veces, se dice que tiene 10 iteraciones.

- **Contador**: Muchas veces, los bucles tienen una variable que se denomina contador, porque cuenta el número de repeticiones que ha hecho, para finalizar desde que llegue a un número concreto. Dicha variable hay que inicializarla (*crearla y darle un valor*) antes de comenzar el bucle.

- **Incremento**: Cada vez que terminemos un bucle se suele realizar el incremento (o decremento) de una variable, generalmente la denominada variable contador.


- **Bucle infinito**: Es lo que ocurre si un bucle se nos olvida incrementar la variable contador o escribimos una condición que nunca se pueda dar. El bucle se queda eternamente repitiéndose y el programa se queda **colgado**.

---

## Bucle while

El **bucle while** es uno de los bucles más simples que podemos crear. Vamos a partir con un ejemplo básico, para luego ir repasando todo lo que ocurre en cada iteración del bucle:  

{% include codeHeader.html icon="js" compiler="y" %}
```js
i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);
  i = i + 1; // Incrementamos el valor de i
}
```
{: .nolineno }

> La operación **i = i + 1** es lo que se suele llamar un incremento de una variable. Es muy común simplificarlo como **i++**, que hace exactamente lo mismo: aumenta su valor en 1.
{: .prompt-note }

Lo que ocurre a la hora de hacer funcionar este código es lo siguiente:  

- Antes de entrar en el bucle `while`, se inicializa la variable `i` en `0`.
- Antes de realizar la primera **iteración** del bucle, comprobamos la **condición**.
- Si la **condición es verdadera**, hacemos lo que está dentro del bucle.
- Mostramos por pantalla el valor de `i` y luego incrementamos el valor actual de `i en **1**.
- Volvemos al inicio del bucle para hacer una **nueva iteración**. Comprobamos de nuevo la **condición** del bucle.
- Cuando la **condición sea falsa**, salimos del bucle y continuamos el programa.



Un bucle **while** es muy simple, pero requiere que declaremos una variable previamente para evaluar y evitar que el programa se quede **colgado en un bucle infinito** por olvidarnos de este factor y además dentro debemos recordar incrementar el valor de la variable.

---

## Bucle for

El bucle **for** es quizás uno de los más utilizado en el mundo de la programación. En javascript se utiliza exactamente igual que en otros lenguajes como [Java](https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)), [C/C++](https://es.wikipedia.org/wiki/C%2B%2B). 

Veamos el mismo ejemplo anterior utilizando un bucle `for`:

{% include codeHeader.html icon="js" compiler="y" %}
```js
// for (inicialización; condición; incremento)
for (i = 0; i < 5; i++) {
  console.log("Valor de i:", i);
}
```
{: .nolineno }

Como vemos, la sintaxis de un **bucle for** es mucho más compacta y rápida de escribir a diferencia del **bucle while**. La primera vez puede parecer algo confuso, pero es mucho más práctica porque te obliga a escribir la **inicialización**, la **condición** y el **incremento** antes del propio bucle, y eso hace que no te olvides de estos tres puntos fundamentales.

>En programación es muy habitual empezar a contar desde **cero**. Mientras que en la vida real se contaría **desde 1 hasta 10**, en programación se contaría **desde 0 hasta 9**.
{: .prompt-note }

### Ejemplos: Dibujando formas

Un buen ejemplo práctico para comenzar a ver el potencial de un bucle `for` es tratar de crear patrones  para dibujar diferentes formas.

Veamos un primer ejemplo dibujando un árbol de navidad:

> Si deseas que el tamaño de nuestro árbol pueda variar, podemos pedirle al usuario que lo ingrese mediante algún método de entrada como podría ser `prompt` el número de pisos.

{% tabs ejemplo_arbol_bucle %}
{% tab ejemplo_arbol_bucle bucle for %}
{% include codeHeader.html icon="js" compiler="y" %}
```js
let caracter = "*";
let pisos = 10;

console.log(" ".repeat(pisos) + "🌟")

for (i = 1; i <= pisos; i++){
  
  console.log(" ".repeat(pisos - i), caracter.repeat(i + i));
    
}
```
{: .nolineno }
{% endtab %}
{% tab ejemplo_arbol_bucle explicación %}

Como podemos ver en un principio hemos declarado dos variables:

```js
let caracter = "*";
let pisos = 10;
```
{: .nolineno }

- `let caracter`: Almacenará el caracter que se encargará de dibujar el cuerpo del árbol.
- `let pisos`: Almacenará el tamaño del cuerpo de nuestro árbol como tal.

Luego hemos imprimido la estrella en la consola justo en la posición donde comienza el árbol, es cosa de crear la cantidad de espacios en blanco según el tamaño total del árbol:

```js
// El método repeat() de los String devuelve una nueva cadena que contiene el número especificado de copias de esta cadena, concatenadas entre sí.
// <pisos>: es la variable que determina el tamaño del árbol.
console.log(" ".repeat(<pisos>));
```
{: .nolineno }

A continuación declaramos un bucle `for` que se va a encargar de ejecutar algunas instrucciones una cantidad determinada de veces:

```js
// repeat(): método de String que devuelve una nueva cadena que contiene el número especificado de copias de esta cadena, concatenadas entre sí.
// <pisos>: es la variable que determina el tamaño del árbol.
for (i = 1; i <= pisos; i++){

  // Console.log: Imprimir en consola.
    // Primer argumento: Estamos creando los espacios en horizontal del árbol.
    // Segundo argumento: Estamos expandiendo el ancho del árbol.
  console.log(" ".repeat(pisos - i), caracter.repeat(i + i));
    
}
```
{: .nolineno }


{% endtab %}
{% tab ejemplo_arbol_bucle resultado %}
```bash
          🌟
          **
         ****
        ******
       ********
      **********
     ************
    **************
   ****************
  ******************
 ********************
```
{% endtab %}
{% endtabs %}



### Incremento múltiple

Aunque no suele ser habitual, es posible añadir varias inicializaciones o incrementos en un bucle **for** separando por comas. En el siguiente ejemplo además de aumentar el valor de una variable `i`, incializamos una variable `j` con el valor **5** y lo vamos decrementando:  

{% include codeHeader.html icon="js" compiler="y" %}
```js
for (i = 0, j = 5; i < 5; i++, j--) {
  console.log("Valor de i y j:", i, j);
}
```
{: .nolineno }


---

## Anidación de bucles

Al igual que cualquier otro objeto o estructura de control, podemos anidar bucles. En este caso el bucle externo controla el número de repiticiones del bucle interno y el bucle interno se ejecuta completamente en cada iteración del bucle externo.


### Ejemplo: Tablas de multiplicar

Un buen ejemplo práctico para comenzar con los bucles anidados son las tablas de multiplicar.

Supongamos que queremos mostrar las tablas de multiplicar del 1 al 9 realizando las primeras 10 operaciones por cada tabla. Podemos utilizar bucles anidados para lograr esto de la siguiente manera:

{% tabs t_multiplicar %}
{% tab t_multiplicar bucle for %}
{% include codeHeader.html icon="js" compiler="y" %}
```js
for (i = 1; i <= 9; i++) {

  console.log("-----------------------------");
  console.log("Tabla de multiplicar del " + i);
  console.log("-----------------------------");

  for (j = 10; j >= 1; j--) {
    console.log(i, "X", j, "=", i * j);
  }

}
```
{: .nolineno }
{% endtab %}
{% tab t_multiplicar bucle while %}
{% include codeHeader.html icon="js" compiler="y" %}
```js
let i = 1;

while (i <= 10) {

	console.log("-----------------------------");
  console.log("Tabla de multiplicar del " + i);
  console.log("-----------------------------");

  let j = 10;

  while (j >= 1) {
        console.log(i, "X", j, "=", i * j);
        j--;
  }

  i++;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}
