---
layout: post
title: Ricomida
modulo: m2
img_path: '/assets/img/desafios/ricomida/'
type: evaluado
show: true
show_next: true
---

## Descripción

- **Requisitos**
	- Construir un layout responsivo (Bootstrap - Mobile First)
	- Realizar la construcción del HTML y CSS siguiendo la guía de estilo proporcionada.
	- Utilizar el sistema de grilla de Bootstrap.
	- Añadir un carousel de imágenes al proyecto (como se ve en la maqueta).
	- Añadir *tooltips* en los botones de la página.

- **Fuentes**
	- Cabin Regular (400)
	- Cabin Bold (700)
	- Lobster Regular (400)

- **Colores**
  - {: data-color='#373A3C" o var(--secondary)' style='--color:#373A3C' }
  - {: data-color='#DDDDDD' style='--color:#DDDDDD' }
  - {: data-color='#000000' style='--color:#000' }
  - {: data-color='#DC3545 o var(--danger)' style='--color:#DC3545' }

Las imágenes para este desafío se pueden decargar [aquí]({{ page.img_path | relative_url | append: 'apoyo-desafio-ricomida.zip'}}) 👈

Para guiarnos, tenemos la siguiente [maqueta](https://xd.adobe.com/spec/d60d3e21-4554-4e17-4fb1-e61d39f3d2b3-a03c/){:target='_blank' } con la vista *mobile* y *desktop*.

---

## Desarrollo

Para cumplir con éxito el desafío, vamos a ir paso a paso para ir clarificando cada tema y dejando algunas sugerencias o recomendaciones.

### Estructura del proyecto

```bash
📂 ricomida
├── 📂 assets
│   ├── 📂 css # 👈 para las hojas de estilos
│   │   └── style.css 
│   ├── 📂 img # 👈 para las imágenes
│   │   │── principal.jpg
│   │   │── recipe-card-1.png
│   │   │── recipe-card-2.png
│   │   │── recipe-card-3.png
│   │   │── slider-1.png
│   │   │── slider-2.png
│   │   │── slider-3.png
│   │   │── slider-4.png
│   │   │── slider-5.png
│   │   │── slider-6.png
│   │   │── slider-7.png
│   │   └── slider-8.png
│   └── 📂 js # 👈 para los scripts
│       └── script.js 
└── index.html # página principal
```

### Starter template

Para este desafío vamos a comenzar el *starter template* para copiar y pegar en tu `index.html`. El *starter template* incluye:

- `CDN Bootstrap CSS`
- `link a nuestro style.css`
- `CDN GOOGLE FONTS (Cabin,Lobster)`
- `CDN Bootstrap JS`
- `CDN JQuery 3.6 minificado`
- `link a nuestro script.js`

{% include codeHeader.html file='index.html' %}
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ricomida</title>
    <!-- Boostrap CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- GOOGLE FONTS: Cabin,Lobster -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&family=Lobster&display=swap" rel="stylesheet">
    <!-- Nuestro CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>

    <!-- JQuery 3.6 minificado CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- Boostrap JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- Nuestro archivo de javascript -->
    <script src="assets/js/script.js"></script>
  </body>
</html>
```

### Desarrollar (*navbar*)

Este navbar no tiene nada diferente a los que hemos construido en desafíos anteriores, por ello es que pasaremos directo al código que debemos añadir a continuación de la etiqueta `body`{:.tag} y no olvides agregar el **CSS** en la hoja de estilos para configurar las fuentes de **GOOGLE FONTS**:

> Si quieres entender más sobre el componente `navbar`, puedes echar un vistazo al [artículo de suricata - entender el componente navbar]({{ '/desafios/m2/03/suricata#entender-el-componente-navbar' | relative_url }}).


{% tabs navbar_ricomida %}
{% tab navbar_ricomida html %}
{% include codeHeader.html file='index.html' codepen='y' bs=true %}
```html
 <!-- NAVIGATION -->
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
    <div class="container">
      <a href="#" class="navbar-brand fs-3">
        Ricomida
      </a>
      <button class="navbar-toggler" data-bs-target="#mynav" data-bs-toggle="collapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynav">
        <div class="navbar-nav ms-auto mb-2 mb-lg-0">
          <a href="#" class="nav-link">Inicio</a>
          <a href="#recetas" class="nav-link">Recetas</a>
          <a href="#nosotros" class="nav-link">Nosotros</a>
          <a href="#contacto" class="nav-link">Contacto</a>
        </div>
      </div>
    </div>
  </nav>
```
{: .nolineno }
{% endtab %}
{% tab navbar_ricomida css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
body {
  font-family: 'Cabin', sans-serif;
}

.navbar-brand {
  font-family: 'Lobster', cursive;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Desarrollar el (*hero*)

En lo que respecta a la sección *hero*, donde va una imagen grande acompañada de un texto y los botones, tenemos que desarrollar como ya hemos visto en desafíos anteriores usando el sistema de grilla de bootstrap. Revisemos el código a continuación:

{% tabs ricomida_hero %}
{% tab ricomida_hero html %}
{% include codeHeader.html file='index.html' codepen='y' bs=true %}
```html
<section id="hero" class="py-4">
  <div class="container text-center text-lg-start">
    <div class="row align-items-center">
      <div class="col-12 col-md-6">
        <img src="assets/img/principal.jpg" alt="pizza" class="img-fluid">
      </div>
      <div class="col-12 col-md-6">
        <h2 class="display-5 fw-bold">PIZZA AL ESTILO CHICAGO CON
          ESPINACAS Y
          CHAMPIÑONES
        </h2>
        <div style="height: 2px; background-color:#000; margin: 15px 0"></div>
        <h4 class="fw-bolder">110 MIN / 6 A 8 PORCIONES</h4>
        <div class="mt-5 d-flex justify-content-center justify-content-md-start">
          <a id="boton-correo" class="btn btn-outline-dark me-4" data-bs-toggle="tooltip" data-bs-placement="bottom"
            data-bs-title="Presiona para enviar a tu correo">Enviar por correo</a>
          <a class="btn btn-outline-dark" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-title="Agrega esta receta a tus favoritos">Añadir a favoritos</a>
        </div>
      </div>
    </div>
</section>
```
{: .nolineno }
{% endtab %}
{% endtabs %}

De acuerdo con la maqueta del desafío, nos muestra que cuando pasemos por encima de los botones, se nos debe activar un *tooltip* como se muestra a continuación:

![img - tooltips]({{ page.img_path | relative_url | append: 'tooltips.png' }})

Para cumplir con este requerimiento, debemos habilitar los *tooltip* que ofrece bootstrap ya que de forma predeterminada vienen deshabilitado, lo primero que tenemos que hacer es revisar su [documentación y ver las instrucciones](https://getbootstrap.com/docs/5.3/components/tooltips/#enable-tooltips){:target='_blank'}, luego incluir el siguiente código en nuestro archivo de javascript de la siguiente manera:

> **Ojo**<br>Bootstrap nos recomienda en sus últimas versiones el no usar JQuery para estos casos, recordando de que Bootstrap en su versión 3 y 4 dependen directamente de esta librería.


{% tabs enable_tooltip %}
{% tab enable_tooltip js %}
Puede elegir pegar este código de javascript nativo en su archivo de javascript `script.js`.
{% include codeHeader.html file='assets/js/script.js' %}
```js
// habilitar todos los tooltip de bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
```
{: .nolineno }
{% endtab %}
{% tab enable_tooltip jquery %}
Puede elegir pegar este código de JQuery en su archivo de javascript `script.js`.
{% include codeHeader.html file='assets/js/script.js' %}
```js
$(document).ready(function () {
  // habilitar todos los tooltip de bootstrap
  $('[data-bs-toggle="tooltip"]').tooltip()
})
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Hecho lo anterior, nuestros tooltip se mostrarán al pasar el mouse por encima.

---

## Desarrollar (*carousel*)

Aquí debemos tener mucho cuidado al momento de desarrollar el carrusel, ya que a pesar de que bootstrap tiene un [componente carousel](https://getbootstrap.com/docs/5.3/components/carousel/){:target='_blank'} tenemos que poner atención en como utlizarlo.

### Como funciona un *carousel*

El carrusel (*carousel*) es lo más parecido a una presentación de diapositivas para recorrer una serie de contenido.

Un **componente carousel** de bootstrap típico consta de los siguientes elementos:

1. **Contenedor principal** (`div class="carousel" id="myCarousel"`{:.tag}): es el envoltorio para el componente la clase principal que debe llevar es `.carousel` y debemos definir un `id` único como podría ser `id='myCarousel'`.
2. **Contenedor de items** (`div class="carousel-inner"`{:.tag}): es el donde vamos a envolver todos los items del carousel, en este contenedor debemos establecer la clase `.carousel-inner`.
3. **Items de carousel** (`div class="carousel-item"`{:.tag}): los elementos que se van a mostrar en el carrusel, como imágenes y otros componentes, es importante que uno de estos elementos lleve la clase `.active`.

> **Ojo**<br>Es importante que al menos uno de los elementos `div class="carousel-item"`{:.tag} lleve la clase `.active`. De lo contrario no se mostrará nada en el documento.

{: align='center' }
![img - carousel]({{ page.img_path | relative_url }}/carousel.png){: .border .border-secondary }
*Ilustración componente Carousel*

Si observaste bien, notarás que tenemos dos bloque con las clase `.carousel-item` y el primero tiene adicionalmente la clase `.active`, sin esta última no veríamos nada en la página, esto es equivalente a decir que nuestro presentación tiene dos diapositivas y cada una de ella posee 4 ilustraciones sobre comida. Pasemos a revisar entonces el **HTML**, **CSS** y además también tenemos que copiar el código de la pestaña **JS** ya que esto le da la interactividad de cambiar el indicador de el bloque `.carousel-item` actual:

{% tabs ricomida_carousel %}
{% tab ricomida_carousel html %}
{% include codeHeader.html file='index.html' %}
```html
<!-- 1 requerimiento: CARRUSEL -->
<section class="container d-none d-lg-block py-3 border-2 border-bottom border-dark" id="nosotros">
  <div class="carousel slide" id="my-carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row">
          <div class="col">
            <img src="./assets/img/slider-1.png" alt="comida 01" class="w-100">
          </div>
          <div class="col">
            <img src="./assets/img/slider-2.png" alt="comida 02" class="w-100">
          </div>
          <div class="col">
            <img src="./assets/img/slider-3.png" alt="comida 03" class="w-100">
          </div>
          <div class="col">
            <img src="./assets/img/slider-4.png" alt="comida 04" class="w-100">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="row">
          <div class="col">
            <img src="./assets/img/slider-5.png" alt="comida 05" class="w-100">
          </div>
          <div class="col">
            <img src="./assets/img/slider-6.png" alt="comida 06" class="w-100">
          </div>
          <div class="col">
            <img src="./assets/img/slider-7.png" alt="comida 07" class="w-100">
          </div>
          <div class="col">
            <img src="./assets/img/slider-8.png" alt="comida 08" class="w-100">
          </div>
        </div>
      </div>
    </div>
  </div>
  <ol class="carousel-indicators">
    <li data-bs-target="#my-carousel" data-bs-slide-to="0" class="active indicador" aria-current="true"
      aria-label="Slide 1"></li>
    <li class="indicador" data-bs-target="#my-carousel" data-bs-slide-to="1" aria-label="Slide 2"></li>
  </ol>
</section>
```
{: .nolineno }
{% endtab %}
{% tab ricomida_carousel css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
.carousel-indicators {
  position: relative;
  list-style: none;
  margin-top: 35px;
}

.carousel-indicators > li {
  border-radius: 50%;
  height: 25px !important;
  width: 25px !important;
  background-color: black !important;
}
```
{: .nolineno }
{% endtab %}
{% tab ricomida_carousel js %}
{% include codeHeader.html file='assets/js/script.js' %}
```js
// Evento: cuando se completo la transición de cambio de diapositiva...
document.querySelector('#my-carousel').addEventListener('slide.bs.carousel', event => {
  document.querySelectorAll(".indicador").forEach(element => {
    element.classList.toggle("active");
  })
})
```
{: .nolineno }
{% endtab %}
{% tab ricomida_carousel resultado %}
{% include ifr_results.html src='demo/carousel.html' %}
{% endtab %}
{% endtabs %}

---

## Desarrollar sección (*ingredientes*)

Esta sección así como las anteriores debemos desarrollar en base al sistema de grilla en bootstrap. La versión *desktop* consta de dos columnas (`.col-lg-6`) y en *mobile* utilizará las 12 (`col-12`) y tener los títulos **INGREDIENTES** y **PREPARACIÓN** en una etiqueta por ejemplo `h3`{: .tag } (*no utilizar más h3 en el resto de la página que no sean estos títulos*{: .px-1}) para cumplir con el **requerimiento-4** que consiste en los siguiente:

**Selectores de etiqueta**: Utilizando los selectores de etiqueta y el método de jQuery `on` con el evento `dblclick`, solamente modificar el color del texto de los títulos "INGREDIENTES" y "PREPARACIÓN" a color rojo cuando se haga doble clic sobre cada uno de ellos por individual. (3 Puntos)
{: .bg-light .text-dark .p-2 .rounded }

{% tabs ricomida_ingrediente %}
{% tab ricomida_ingrediente html %}
{% include codeHeader.html file='index.html' %}
```html
<section class="container py-4 border-2 border-bottom border-dark" id="ingredientes_receta">
  <div class="row">
    <div class="col-12 col-lg-6">
      <h3 class="text-decoration-underline link-offset-3">
      INGREDIENTES</h3>
      <ul class="list-unstyled fs-5">
        <li class="my-4">Masa</li>
        <li>20 gr de levadura seca instantánea</li>
        <li>1 cucharadita de azúcar</li>
        <li>500 ml agua tibia</li>
        <li>100 ml aceite vegetal</li>
        <li>4 cucharadas de aceite de olivia</li>
        <li>65 gr harina de maíz fina (chuchoca)</li>
        <li>2 cucharaditas de sal</li>
        <li>625 gr harina</li>
        <li class="mb-4">Salsa</li>
        <li>5 cucharadas de aceite de oliva</li>
        <li>&#189; cebolla picada en cubos finos</li>
        <li>2 cucharaditas de sal</li>
        <li>3 cucharadas de Orégano Gourmet</li>
        <li>1 &#189; cucharadas de Albahaca Gourmet</li>
        <li>2 tarro de tomates en cubos al natural</li>
        <li>2 cucharaditas de azúcar</li>
        <li class="mb-4">Relleno</li>
        <li>&#189; cebolla, en cubos</li>
      </ul>
    </div>
    <div class="col-12 col-lg-6">
      <h3 class="text-decoration-underline link-offset-3">PREPARACIÓN</h3>
      <ol class="list-unstyled fs-5">
        <li class="my-4">1. Para la masa, disolver la levadura y el azúcar en agua tibia en un bol grande. Dejar
          reposar 2 minutos.
          Agregar el aceite, la harina de maíz, sal y 400gr de harina. Mezclar bien. Amasar y agregar el resto de
          harina, la
          cantidad necesaria para tener una masa blanda. Poner en el mesón y amasar por 5 minutos o hasta tener una
          masa lisa y
          elástica (agregar harina en el mesón a medida que se va amasando para que la masa no se pegue) . Poner la
          masa en un bol
          aceitado, tapar con un paño de cocina limpio y dejar reposar hasta que la masa duplique su volumen
          (leudar). Golpear la
        masa para que baje y luego dejar leudar por 40 minutos adicionales.</li>
        <li class="my-4">2. Mientras tanto preparar la salsa: Calentar 4
          cucharadas de aceite en una olla a fuego medio. Agregar la cebolla, Orégano Gourmet, Albahaca Gourmet, sal
          y cocinar
          hasta que la cebolla esté dorada. Agregar el ajo y cocinar por 30 segundos. Agregar los tomates junto al
          jugo del tarro,
          a la mezcla de cebolla. Agregar el azúcar y cocinar hasta que la mezcla se haya reducido y espesado, como
          30 minutos.
        Sazonar con sal y pimienta a gusto. Reservar.</li>
        <li>
          3. Relleno: Cocinar las chalotas en el aceite de oliva hasta que estén
          transparentes. Agregar los champiñones y las espinacas, cocinar hasta que estén cocidos y se haya
          evaporado todo el
        líquido que hayan votado los vegetales. Reservar.</li>
        <li class="my-4">4. Calentar el horno a 220C.</li>
        <li class="my-4">5. Una vez que la masa haya reposado,
          dividirla en dos bolas. Estirar cada masa para cubrir dos moldes (desmontables) de 26 cm, hacer un borde
          de 5 cm con la
          masa. Dividir el relleno entre las dos pizza, tapar con el queso mozarella, luego terminar con la salsa de
          tomates y
          finalmente espolvorear el queso rallado. 6. Hornear por 35 a 40 minutos o hasta que el relleno esté
          caliente y la base
        esté esponjosa y dorada. Esperar unos minutos antes de desmoldar.</li>
      </ol>
    </div>
  </div>
</section>
```
{: .nolineno }
{% endtab %}
{% tab ricomida_ingrediente jquery %}
{% include codeHeader.html file='assets/js/script.js' %}
```js
// requerimiento 4: Utilizando los selectores de etiqueta 
// capturar el evento`dblclick` 
$("h3").dblclick(function () {
// modificar el color del texto de los títulos
// "INGREDIENTES" y "PREPARACIÓN" a color rojo
	$(this).css({
	  "color": "red"
	})
})
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Desarrollar sección (*recetas relacionadas*)

Tenemos entonces esta sección donde vamos a seguir utilizando el sistema de grilla en bootstrap. La versión *desktop* consta de tres columnas (`.col-lg-4`) y en *mobile* utilizará las 12 (`col-12`) y dentro de las columnas vamos a usar el famoso componente [Card](https://getbootstrap.com/docs/5.3/components/card/){:targer='_blank'}:

{% tabs recetas_ricomida %}
{% tab recetas_ricomida html %}
{% include codeHeader.html file='index.html' %}
```html
<section class="container py-4" id="recetas_relacionadas">
  <h3 class="display-5 text-center fw-bold">RECETAS RELACIONADAS</h3>
  <div class="row mt-5 g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="assets/img/recipe-card-1.png" alt="imagen de comida (postre)" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title fw-bold">PANQUEQUES CON MANJAR Y CREMA</h5>
          <p class="card-text">Mus enim elementum dignissim class eleifend justo, ut nunc magnis est vulputate
            nostra, blandit erat luctus faucibus
          orci.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="assets/img/recipe-card-2.png" alt="imagen de comida (postre)" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title fw-bold">TIRAMISÚ</h5>
          <p class="card-text">Congue fermentum dignissim rhoncus elementum ac nisi, proin phasellus lacinia sed
            faucibus mauris, taciti scelerisque
          nulla ornare consequat.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="assets/img/recipe-card-3.png" alt="imagen de comida (plateada)" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title fw-bold">PLATEADA</h5>
          <p class="card-text">Cubilia elementum posuere arcu rhoncus egestas lectus, diam aliquam laoreet ac
            eleifend risus, urna auctor inceptos
          mattis dapibus.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```
{: .nolineno }
{% endtab %}
{% tab recetas_ricomida jquery %}
{% include codeHeader.html file='assets/js/script.js' %}
```js
// requerimitneo 5: usar el método toggle desaparcer/aparecer
// el contenido en todas las tarjetas
$(".card-title").click(function () {
	// esto debe suceder cuando el usuario haga un clic 
	// sobre el título de cualquiera de las tres tarjetas.
	$(this).next().toggle("slow")
})
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Desarrollar sección (*newsletter*)

Para esta sección en particular no se requiere mucho, ya que sólo tenemos que añadir el siguiente **HTML** con las correspondiente clases de bootstrap para obtener el mismo resultado que la maqueta y con **CSS** cambiar la propiedad `font-family` de una palabra:

{% tabs ricomida_newsletter %}
{% tab ricomida_newsletter html %}
{% include codeHeader.html file='index.html' %}
```html
<!-- SUSCRIBITE EN NUESTRO NEWSLETTER -->
<section class="container-fluid bg-danger py-5 mt-5 text-light text-center" id="contacto">
  <h3 class="h2 fw-bold mt-5 pt-5">SUSCRÍBETE EN NUESTRO NEWSLETTER</h3>
  <p class="fs-3">y obtén las mejores recetas que tenemos en <span class="ricomida-text">Ricomida</span></p>
  <button class="btn btn-lg btn-outline-light px-5 mb-5">Empezar</button>
</section>
```
{: .nolineno }
{% endtab %}
{% tab ricomida_newsletter css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
.ricomida-text {
  font-family: 'Lobster', cursive;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Desarrollar (*footer*)

Hemos llegado como siempre digo a la parte más sencilla, solo es cosa de ver el **HTML** y te darás cuenta que está pasando:

{% tabs footer_ricomida %}
{% tab footer_ricomida html %}
{% include codeHeader.html file='index.html' %}
```html
<!-- FOOTER -->
<footer class="fs-2 ricomida-text text-center py-4 text-light bg-dark">
  Ricomida
</footer>
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Resultado


{% tabs ricomida %}
{% tab ricomida html %}
{% include codeHeader.html file='index.html' %}
```html
{{ site.data.m2.ricomida.html }}
```
{% endtab %}
{% tab ricomida css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
{{ site.data.m2.ricomida.css }}
```
{% endtab %}
{% tab ricomida js %}
{% include codeHeader.html file='assets/js/script.js' %}
```js
{{ site.data.m2.ricomida.js }}
```
{% endtab %}
{% tab ricomida resultado %}
{% include ifr_results.html 
  src='demo' %}
{% endtab %}
{% endtabs %}