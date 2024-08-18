---
layout: post
title: "La consola de javascript"
category: "javascript"
thumbnail: /assets/img/consola_js.png
---


## La consola de JavaScript

La consola de JavaScript es una gran herramienta que viene integrada en la mayoría de los navegadores web que permite a los desarrolladores interactuar con el código de JavaScript y es un depurador por excelencia para las aplicaciones.

{: align='center'}
![img - consola]({{ page.thumbnail | relative_url }})
*Consola de JavaScript*

---


## Acceder a la consola

Para acceder a la consola de JavaScript existen diversas formas desde el navegador, podemos realizar las siguientes combinaciones de teclado:

{: .table .table-dark }
|Atajo|Descripción|
|:----|:----------|
|<strong><kbd>f12</kbd></strong> o <strong><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>I</kbd></strong>| Abrir las herramientas para desarrolladores (*DevTools*).|
|<strong><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>J</kbd></strong>| Acceder a las *DevTools* en la pestaña **Console**.|

---

## ¿Que podemos hacer en la consola?

En esta consola de JavaScript, podemos escribir cualquier código JavaScript como funciones o sentencias que estarán actuando en la página actual del navegador. De esta forma podemos observar los resultados que nos devuelve la consola al realizar diferentes acciones.


Cuando se comienza a programar, es típico crear un programa que muestre por pantalla un texto, generalmente el texto &lt;&lt;**Hola Mundo**&gt;&gt;. También podemos realizar, por ejemplo operaciones artiméticas ingresando números y los operadores correspondientes. En la consola de javascript podemos hacer esto de forma muy sencilla y directa:

<a name="ejemplo-hola-mundo">

{% include codeHeader.html %}
```js
console.log("Hola mundo"); // Hola Mundo
console.log(2 + 2); // 4
```
{: .nolineno }

### Funciones para la consola

Tenemos varias funciones para mostrar mensajes en la consola. Cada uno se enmarca en un contexto de uso, la siguiente tabla nos muestra algunas:


{: .table .table-dark }
|Función|Descripción|
|:------|:----------|
|`console`.`log`|Muestra la información por la consola.|
|`console`.`info`{: .bg-info .text-dark }|Equivalente al anterior. Se utiliza para mensajes informativos.|
|`console`.`warn`{: .bg-warning .text-dark }|Se utiliza para información de advertencia. Aparece en color amarillo.|
|`console`.`error`{: .bg-danger .text-light }|Se utiliza para información de error. Aparece en color rojo.|
|`console`.`clear`{: .bg-light .text-dark }|Se utiliza para limpiar la consola. Equivalente a pulsar <strong><kbd>CTRL</kbd> + <kbd>L</kbd></strong>|

La idea es utilizar en nuestro código la función que más se adapte a nuestra situación en cada caso (*errores graves con `console.error()`, errores leves con `console.warn()`*, etc..).

{% include codeHeader.html %}
```js
console.info("Yo apareceré en celeste o en blanco");
console.error("Yo apareceré en rojo");
console.warn("Yo apareceré en amarillo");
```
{: .nolineno }

### Aplicar varios datos

En el [ejemplo anterior](#ejemplo-hola-mundo), solo hemos aportado un dato por cada línea (*un texto o una operación aritmética*), pero `console.log()` y sus funciones hermanas permiten añadir varios datos en una misma línea, separándolo por comás (`,`):  

{% include codeHeader.html %}
```js
console.log("¡Hola a todos!", "miren el siguiente número:", 5 + 18);
```
{: .nolineno }

### Aplicar estilos en la consola

Aunque sólo se trata de pura diversión, se pueden aplicar estilos **CSS** en la consola de javascript haciendo uso de **`%c`**, que se remplazará por los estilos indicados:  

{% include codeHeader.html %}
```js
console.log("%cEniDev911!",
  "background:linear-gradient(#000, #555);"+
  "color:#fff; padding: 5px 10px;");
```
{: .nolineno }

>Es importante recalcar que cuando escribimos directamente en la consola de javascript podemos obviar el `console.log()` y escribir directamente la información, pero si queremos mostrar algo en la consola desde nuestra página web o aplicación javascript, es absolutamente necesario escribir `console.log()` (o cualquiera de las funciones de su familia) en nuestro código.

## Trucos adicionales

En cualquier navegador **Google chrome** podemos pulsar ya sea <strong><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>I</kbd></strong> o <strong><kbd>f12</kbd></strong> para abrir el panel, una vez dentro podemos hacer algunos trucos. 


### Hacer una captura de la pantalla

Para ello, una vez tenemos la consola abierta presionamos <strong><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd></strong>.

Aparecerá una ventana con un <kbd class="menu">Ejecutar>comando</kbd> o (*Run>command*) donde podremos escribir directamente acciones. En nuestro caso que queremos sacar una captura de pantalla sólo debemos escribir ***captura de pantalla*** o  ***screenshot*** (según idioma) y pulsar <strong><kbd>ENTER</kbd></strong>