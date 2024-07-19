---
layout: post
title: "Strings en javascript"
category: "javascript"
thumbnail: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hO8N5yFUYKlSG99pxgCwrghj2MMWjrlgz_MYTt68Jg&s
---


Un `string` en javascript se utiliza para representar un conjunto de caracteres. En programación, cuando hablamos de una variable que posee información de texto, decimos que su tipo de dato es un **String**. En javascript, es muy sencillo crear un `string`, tenemos dos formas:

{: class='table' border='1' }
|Constructor|Descripción|
|:----------|:----------|
|`new String(s)`{: .bg-warning .text-dark }|Crea un objeto de texto a partir del texto pasado en `s`.|
|`'s'`{: .bg-warning .text-dark }|Solo colocando el texto entre comillas dobles o simples (forma más común).|

Los `string` son tipos de datos primitivos, y por ende es más sencillo utilizar los literales (`''`) que su notación con el operador `new`. Para los textos, se pueden utilizar los siguientes sígnos:

- `'' comillas simples`
- `"" comillas dobles`
- <code class="language-plaintext highlighter-rouge">&#96;&#96; backstiks</code>

Veamos el siguiente ejemplo declarando variables de texto en javascript:

{% include codeHeader.html %}
```js
// Literal 
let textoPrincipal = "¡Hola Javascript!";
let textoSecundario = "Otro mensaje de texto";

// Objeto
let textoPrincipal = new String("¡Hola Javascript!");
let textoSecundario = new String("Otro mensaje de texto"); 
```
{: .nolineno }


## Propiedad length

En el caso de los **String**, solo tenemos la propiedad `.length` que nos devuelve la longitud o tamaño de la variable de texto. A continuación podemos ver unos ejemplos que podemos ejecutar en la consola del navegador:

{% include codeHeader.html %}
```js
"Enidev911".length; // 9
"Aprender es avanzar".length; // 19
```
{: .nolineno }

---

## Interpolación de variables

En **ECMAScript ES2015** se introducierón una interasente mejora en la manipulación general de los **String**, sobre todo respecto a la legibilidad de código.

Hasta antes de **ES2015**, si queríamos concatenar el valor de algunas variables con textos predefinidos por nosotros, teníamos que hacer lo siguiente:

{% include codeHeader.html %}
```js
let sujeto = "frase";
let adjetivo = "concatenada";
"Una " + sujeto + " bien " + adjetivo; // 'Una frase bien concatenada'
```
{: .nolineno }

El problema con el ejemplo anterior, es que a medida que añadimos más variable, el código se hace bastante complejo de leer.


Para evitarlo, es que se introducen los **backsticks**, que nos permiten interpolar el valor de las variables sin tener que cerrar, concatenar y abrir la cadena de texto continuamente:

{% include codeHeader.html %}
```js
let sujeto = "frase";
let adjetivo = "concatenada";
`Una ${sujeto} mejor ${adjetivo}` // 'Una frase mejor concatenada'
```
{: .nolineno }

Esto es una funcionalidad muy simple, pero que mejora sustancialmente la calidad de código generado.