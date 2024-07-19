---
layout: post
title: "Barra de progreso de lectura"
---

Hola, te cuento me llama la atención mostrar ese indicador de progreso de lectura.

Por lo general, estos indicadores se ubican en la parte superior de la página en la mayoría de blogs y, a medida que te desplazas hacia abajo, van incrementando cada vez más hasta que ocupa todo el ancho.

Primero, agregue un `div`{: .tag } con la clase `.progressBar`:

{% include codeHeader.html icon="html" %}
```html
<div class="progressBar"></div>
```
{: .nolineno }

El `div`{: .tag } está inicialmente vacío, por lo que cualquier cambio en el ancho del indicador afectará el ancho de todo el `div`{: .tag }. Comenzando con su ancho de `width: 0`, calcularemos y variaremos el estilo de este ancho, a medida que nos desplazamos por toda la página (usando javascript). Los estilos para el `div`{: .tag } inicial son los siguientes:

{% include codeHeader.html icon="css3" %}
```css
.progressBar {
	position: fixed;
	top: 0;
	left: 0;
	height: 8px;
	background: linear-gradient(to right, #ff5f6d, #ffc371);
	width: 0%;
	z-index: 100;
	transition: width 0.2s ease-out;
}
```
{: .nolineno }

Y básicamente eso es todo en cuanto al HTML y CSS. Hablemos ahora de la parte divertidad, la funcionalidad.

En el javascript seleccionamos a los elementos involucrados:

{% include codeHeader.html icon="js" %}
```js
const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('section');
```
{: .nolineno }


Podría haber utilizado  el método `Math.abs()` para devolver el valor absoluto de la parte superior, pero en su lugar, tomaremos el valor negativo del mismo para convertirlo en un valor positivo.

Imaginemos que el rectángulo completo es la ventana gráfica del sitio web. Al principio, la ventana gráfica permanece en la parte superior de la página, cuando el ancho de la barra de progres es `width: 0`. Si la página se puede desplazar lo suficiente, entonces la longitud de la página excede la altura de la ventana gráfica y nuestra función `scrollProgressBar` se activa.

Después de eso, el porcentaje de progreso se calculará utilizando la siguiente fórmula:


{% include codeHeader.html icon="js" %}
```js
const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('section');

const scrollProgressBar = () => {
    let scrollDistance = -(section.getBoundingClientRect().top);
    let progressPercentage =
        (scrollDistance /
            (section.getBoundingClientRect().height - 
                document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);
    progressBar.style.width = val + '%';

    if (val < 0) {
        progressBar.style.width = '0%';
    }
};

window.addEventListener('scroll', scrollProgressBar);
```
{: .nolineno }