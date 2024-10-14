---
layout: post
title: Desafío - Notas Finales
modulo: m2
type: guiado
show: true
img_path: /assets/img/desafios/notas-finales/
show_next: true
---

## Descripción

En este desafío nos solicitan llenar dinámicamente la información de una tabla a partir de datos ingresados por el usuario mediante el método `prompt()`.

Para este desafío nos brindan solo la parte de html y los estilos que son básicamente clases de [bootstrap](https://getbootstrap.com/), la parte de javascript la debemos desarrollar nosotros.

---

## Desarrollo

Para cumplir con éxito el desafío, vamos a ir paso a paso para ir clarificando cada tema y dejando algunas sugerencias o recomendaciones.

### Estructura del proyecto

```bash
📂 notas-finales
├── 📂 assets
│   ├── 📁 css # 👈 para las hojas de estilos
│   ├── 📁 img # 👈 para las imágenes
│   └── 📂 js # 👈 para los scripts
│       └── script.js 
└── index.html # página principal
```

> Debido a las fallas de la plataforma en cuanto a la descarga del **Material de Apoyo**, que básicamente es un archivo, para descargar el archivoindex.html haz [`clic aquí`]({{ page.img_path | relative_url | append: 'notas-finales-apoyo.zip' }}){:download='material.zip'} 👈
{: .prompt-warning }

Si por alguna razón no pudiste descargar el material de apoyo, pega el siguiente código en tu `index.html`:

{% include codeHeader.html file='index.html' codepen='y' title='Notas Finales' %}
```html
<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Notas finales</title>
  <!-- Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <h1 class="my-5">Notas Finales</h1>
    <div class="row mb-2">
      <div class="col-2 fw-bold">Nombre</div>
      <div class="col-2">Marco Contreras</div> <!-- Cambia esto al nombre que corresponda -->
    </div>
    <div class="row mb-3">
      <div class="col-2 fw-bold">Carrera</div>
      <div class="col-2">Desarrollo web</div>
    </div>
    <table class="table">
      <thead class="bg-dark text-light">
        <tr>
          <th scope="col">Ramo</th>
          <th scope="col">Nota 1</th>
          <th scope="col">Nota 2</th>
          <th scope="col">Nota 3</th>
          <th scope="col">Promedio</th>
        </tr>
      </thead>
      <tbody id="tbody">
        <tr>
          <td id="html" class="fw-bold">HTML</td>
          <td id="html-nota1" class=""></td>
          <td id="html-nota2" class=""></td>
          <td id="html-nota3" class=""></td>
          <td id="html-promedio" class=""></td>
        </tr>
        <tr>
          <td id="css" class="fw-bold">CSS</td>
          <td id="css-nota1" class=""></td>
          <td id="css-nota2" class=""></td>
          <td id="css-nota3" class=""></td>
          <td id="css-promedio" class=""></td>
        </tr>
        <tr>
          <td id="js" class="fw-bold">JavaScript</td>
          <td id="js-nota1" class=""></td>
          <td id="js-nota2" class=""></td>
          <td id="js-nota3" class=""></td>
          <td id="js-promedio" class=""></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-danger" id="btn_html">HTML</button>
    <button class="btn btn-primary" id="btn_css">CSS</button>
    <button class="btn btn-warning" id="btn_js">JS</button>
  </div>
  <!-- JS BOOTSTRAP -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    crossorigin="anonymous"></script>
  <!-- Nuestro Script -->
  <script src="assets/js/script.js"></script>
</body>
</html>
```

### Variables globales

Quiero dejarte en claro lo siguiente, estas son las diferencias de `let`, `var` y `const`:
- `const`: nos permite declarar variables inmutables, osea no se puede cambiar o sobrescribir en otra parte del script actual.
- `var` y `let`: nos permiten crear variables mutables que si se puede cambiar.
 - `var`: nos permite definir variables al alcance de su función más cercana. Y un detalle es que tiene un valor por defecto que es `undefined`.
- `let`: nos permite definir variables al alcance de su bloque mas cercano, osea de su estructura. Otro detalle, se usa let para definir una variable que si tenga su valor por el programador.

> Mi opinión personal, es que en estos momentos no te compliques si usar una declaración u otra, sólo utiliza `var` porque primero se debe aprender a pensar y razonar, luego dedicate a cosas de estándares y demás.
{: .prompt-note }

Vamos a comenzar declarando unas variables globales para que esten disponible a lo largo del script actual:

{% include codeHeader.html file='assets/js/script.js' %}
```js
// variables globales
var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var total = 0;
```
{: .nolineno }

### Obtener promedio

Como podemos suponer, si estamos declarando variables con valores enteros quiere decir que vamos a trabajar con números por lo que debemos crear un mecanismo que permita obtener un resultado para ese conjunto de números que en este caso son las **notas**. 

Para ello definiremos una función para obtener el promedio de notas:

{% include codeHeader.html file='assets/js/script.js' %}
```js
function obtenerPromedio() {
  total = (nota1 + nota2 + nota3);
  return (total / notas.length).toFixed(2); // 👈 retornamos el promedio ajustado a 2 decimales
}
```
{: .nolineno }

### Pedir entradas (notas)

Ahora podemos definir otra función que nos permita recoletar las entradas de los usuarios y al mismo tiempo convertirlas a números, esta función es la que va estar asociada a los botones que tenemos para sacar el promedio de cada módulo:

{% include codeHeader.html file='assets/js/script.js' %}
```js
function pedirNotas() {
  nota1 = +prompt("Ingresa la primera nota");
  nota2 = +prompt("Ingresa la segunda nota");
  nota3 = +prompt("Ingresa la tercera nota");
}
```
{: .nolineno }

> **OJO:**<br>El uso de `+prompt("...")` convertirá la respuesta en un número, no precisamente en un número entero. Este es un buen truco, pero no una solución definitiva y mucho menos limpia es solo una forma rápida de convertir un tipo de dato a otro, si quieres hacer verificaciones más profunda te recomiendo el uso de funciones como `parseInt()` o el constructor `Number`.

### Mostrar resultado

Ahora vamos a darle la funcionalidad a los botones para pedir los datos (*las notas*) y luego mostrar los datos en el lugar que corresponda en la tabla: 

{% include codeHeader.html file='assets/js/script.js' %}
```js
// seleccionar los botones en el documento
var botonHtml = document.getElementById("btn_html");
var botonCss = document.getElementById("btn_css");
var botonJs = document.getElementById("btn_js");

botonHtml.onclick = function() {
  pedirNotas();
  document.getElementById("html-nota1").textContent = nota1;
  document.getElementById("html-nota2").textContent = nota2;
  document.getElementById("html-nota3").textContent = nota3;
  document.getElementById("html-promedio").textContent = obtenerPromedio();
}

botonCss.onclick = function(){
  pedirNotas();
  document.getElementById("css-nota1").textContent = nota1;
  document.getElementById("css-nota2").textContent = nota2;
  document.getElementById("css-nota3").textContent = nota3;
  document.getElementById("css-promedio").textContent = obtenerPromedio();
}

botonJs.onclick = function(){
  pedirNotas();
  document.getElementById("js-nota1").textContent = nota1;
  document.getElementById("js-nota2").textContent = nota2;
  document.getElementById("js-nota3").textContent = nota3;
  document.getElementById("js-promedio").textContent = obtenerPromedio();
}
```
{: .nolineno }


---

## Repositorio

{% tabs notas_finales %}
{% tab notas_finales html %}
{% include codeHeader.html file='index.html' %}
```html
{{ site.data.m2.notas_finales.html }}
```
{% endtab %}
{% tab notas_finales js %}
{% include codeHeader.html file='assets/js/script.js' %}
```js
{{ site.data.m2.notas_finales.js }}
```
{% endtab %}
{% tab notas_finales github %}
Repositorio 👉 <a href="https://github.com/EniDev911/notas-finales" target="_blank">https://github.com/EniDev911/notas-finales</a>

Github Pages 👉 <a href="https://enidev911.github.io/notas-finales/" target="_blank">https://enidev911.github.io/notas-finales/</a>
{% endtab %}
{% endtabs %}
