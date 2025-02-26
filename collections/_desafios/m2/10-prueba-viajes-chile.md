---
layout: post
title: Prueba - Viaje Chile
modulo: m2
type: evaluado
image_path: '/assets/img/desafios/viajes-chile'
show: true
---

## Requerimientos

1. [Construir la estructura de la página](#estructura-del-proyecto)
    - Construir la estructura de un archivo HTML, utilizando correctamente las etiquetas semánticas para definir las distintas secciones de la página.
    - Realizar correctamente la carga de archivos y organización del directorio.

2. [Componer visualmente el documento HTML con propiedades CSS](#establecer-los-aspectos-visuales-con-css)
    - Aplicar la sintaxis de CSS utilizando selectores y clases de manera correcta, definiendo notoriamente el aspecto visual del documento.
    - Utilizar recursos externos como [Google Fonts](https://fonts.google.com/){: target='_blank' } y [Font Awesome](https://fontawesome.com/){: target='_blank'}, para definir estilos de fuente.

3. [Emplear elementos de Bootstrap en el documento HTML](#starter-template)
    - Realizar una correcta integración del **CDN de Bootstrap**
    - Emplear al menos 3 componentes de Bootstrap (excluyendo aquellos con JavaScript), haciendo uso de la grilla y clases utilitarias.
    - Documentar la versión de los recursos utilizados.

4. [Agregar componentes que utilicen JavaScript](#desarrollar-el-carousel)
    - Utilizar adecuadamente la sintaxis de JavaScript.
    - Aplicar correctamente dos o más componentes de Bootstrap JS (carousel, tooltips, entre otros).
    - El código debe estar ordenado y documentado.

5. [Gestionar el código fuente utilizando Github](#configurar-el-repositorio-remoto-y-local)
	- Inicializar **GIT** para versionar el proyecto localmente, realizando 5 o más commits.
	- Implementar la creación de repositorio remoto en Github para el versionamiento del proyecto.
	- Crear la página en **Github Pages**.

Descargar los *assets* (imágenes) [aquí](assets-viajes-chile.zip) 👈

---

## __Estructura del proyecto__

El proyecto estará organizado en una __estructura de assets__, tal como lo muestra el siguiente árbol de archivos y directorios:


```bash
📂 viajes-chile
├── 📂 assets
│   ├── 📂 css # 👈 para las hojas de estilos
│   │   └── style.css 
│   ├── 📂 img # 👈 para las imágenes
│   │   │── card1.jpg
│   │   │── card2.jpg
│   │   │── card3.jpg
│   │   │── card4.jpg
│   │   │── carousel1.jpg
│   │   │── carousel2.jpg
│   │   │── carousel3.jpg
│   │   └── viajes.svg
│   └── 📂 js # 👈 para los scripts
│       └── script.js 
└── index.html # página principal
```

También nos solicitan lo siguiente:

{: .card .text-dark .p-2 }
Construir la estructura de un archivo HTML, utilizando correctamente las etiquetas semánticas para definir las distintas secciones de la página.

A modo general nuestra `index.html` tendrá la siguiente estructura semántica:

{3 4 5 6 7 8 9 10}
```html
<html>
    <body>
        <nav>...</nav>
        <header>...</header>
        <main>
            <section id="quienes-somos">...</section>
            <section id="destacados">...</section>
            <section id="contacto">...</section>
        </main>
        <footer>...</footer>
    </body>
</html>
```

Y el otro item del requerimiento 1 nos dice:

{: .card .text-dark .p-2 }
Realizar correctamente la carga de archivos y organización del directorio.

La carga la vemos a continuación en la próxima sección (*starter template*) y la organización ya la vimos anteriormente en el árbol de archivos y directorio.

---

## Starter template

Para este desafío vamos a comenzar el *starter template* para copiar y pegar en tu `index.html`. El *starter template* incluye:

- `CDN Bootstrap CSS`
- `Google Fonts - Scope One`
- `link a nuestro style.css`
- `CDN Bootstrap JS`
- `CDN JQuery 3.6 minificado`
- `link a nuestro script.js`


Case destacar que en el requerimiento 2 item 2 nos solicita explicítamente este aspecto:

{: .card .text-dark .p-2 }
Utilizar recursos externos como Google Fonts y Font Awesome, para definir estilos de fuente.

{% include codeHeader.html file='index.html' %}
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Viajes Chile</title>
    <!-- BOOTSTRAP CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <!-- Google Fonts: Scope One -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Scope+One&display=swap" rel="stylesheet">
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="shortcut icon" href="assets/img/viajes.svg" type="image/x-icon">
</head>
</head>

<body>

    <!-- BOOTSTRAP JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <!-- JQuery 3.6 minificado CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- FONT AWESOME -->
    <script src="https://kit.fontawesome.com/6b8f0c7049.js" crossorigin="anonymous"></script>
    <!-- MI SCRIPT -->
    <script src="assets/js/script.js"></script>
</body>

</html>
```

---

## Configurar el repositorio remoto y local

Vamos en esta ocasión a comenzar con el último paso, ya que es fundamental antes de desarrollar. Aquí dependiendo del nombre que tenga el proyecto, debemos abrirlo con el editor de preferencia e inicializar git en el proyecto.


### Crear un nuevo repositorio

- Iniciamos sesión en **Github**, luego hacemos clic en el ícono más <kbd class="menu">+</kbd> en la barra superior para abrir un submenú, ahora hacemos clic en la opción **New repository** para ir a la pantalla de Crear nuevo repositorio.
![img - nuevo-repositorio]({{ page.image_path | relative_url }}/new-repository.png){: .my-3 .card }
- En esta pantalla, completamos los campos **Repository Name**, el campo **Description** es opcional y dejamos el repositorio como
**Public** (las páginas de Github siempre deben ser repositorios públicos). A continuación, hacemos clic en el botón verde **Create repository** en la parte inferior de la pantalla:
![img - nuevo-repositorio]({{ page.image_path | relative_url }}/nuevo-repositorio.png){: .w-100 .card  .my-3 }
- Ahora estamos en la pantalla de configuración rápida (*Quick setup*) donde nos muestran los comandos de git, pero sigamos adelante, luego solo utilizaremos el de la línea 6.
![img - nuevo-repositorio]({{ page.image_path | relative_url }}/quick-setup.png){: .card  .my-3 }
> **Ojo:** aquí estamos seleccionando la opción de víncular por el protocolo **SSH**, si no haz configurado una llave SSH en github debes seleccionar **HTTP**. Si quieres aprender a configurar una llave SSH para GitHub revisa este [artículo]({{ '/github/configurar-ssh-en-github' | relative_url }}) 👈

### Crear un nuevo repositorio local

- En la siguiente ilustración, vemos el proceso final para la creación de un repositorio local que posteriormente vincularemos a nuestro repositorio remoto que hemos creado anteriormente.
![img - nuevo-repositorio]({{ page.image_path | relative_url }}/new-repository-local.png){: .card  .my-3 }
    1. Crea una carpeta en nuestro sistema de archivos e inicializa git:

    ```bash
    git init viajes-chile
    ```
    {: .mt-2 .cursor onclick='copyClipboard(this.textContent)' }

    {: start='2' }
    2. Entramos en la carpeta `viajes-chile`:

    ```bash
    cd viajes-chile
    ```
    {: .mt-2 .cursor onclick='copyClipboard(this.textContent)' }

    {: start='3' }
    3. Agregar el repositorio remoto que creamos en Github:

    ```bash
    git remote add origin git@github.com:<tu-usuario>/<repositorio.git>
    ```
    {: .mt-2 .cursor onclick='copyClipboard(this.textContent)' }

    {: start='4' }
    4. Creamos la estructura de directorios **assets** propuesta en la sección [estructura del proyecto]({{ page.url | relative_url }}#estructura-del-proyecto).
    Usando `zsh`, `bash` (en Mac/Linux) o `git-bash` (en Windows):
    
    ```bash
    mkdir -p assets/{css,js,img}
    ```
    {: .mt-2 .cursor onclick='copyClipboard(this.textContent)' }

    ![img - creación de directorios]({{ page.image_path | relative_url }}/create-assets-directories.png){: height='300' .border .border-secondary }<br>
    *Creación de directorios (git-bash)*

    Podemos crear los archivos necesario también desde la terminal:
    ```bash
    touch index.html
    touch assets/css/style.css
    touch assets/js/script.js
    ```
    {: .mt-2 .cursor onclick='copyClipboard(this.textContent)' }

    > Aquí podemos pegar el [Starter template]({{ page.url | relative_url }}#starter-template) en nuestro `index.html`.
    
    {: start='5' }
    5. Hacer un primer commit en nuestro repositorio local:

    ```bash
    git add .
    git commit -m "primer commit (starter template)"
    ```
    {: .mt-2 .cursor onclick='copyClipboard(this.textContent)' }

    {: start='6' }
    6. Ya podemos empujar estos archivos a nuestro repositorio remoto (*poner la rama que tienes configurada por defecto*):
    
    ```bash
    git push -u origin main
    ```
    {: .mt-2 .cursor onclick='copyClipboard(this.textContent)' }

    
---

## Establecer los aspectos visuales con CSS

Como vemos en la ilustración del desafío el fondo es oscuro, y vamos a definir el fondo usando **CSS** tal como nos solicita en el requerimiento 2 item 1:

{: .card .text-dark .p-2 }
Aplicar la sintaxis de CSS utilizando selectores y clases de manera correcta, definiendo notoriamente el aspecto visual del documento.

Y también definir una fuente que ya cargamos en el [starter template](#starter-template) para usarla en todo el documento también la vamos añadir esa propiedad (`font-family`) y otras relaciondas con la fuente al `body`{: .tag }:

{% tabs viajes_chile_css %}
{% tab viajes_chile_css html %}
{% include codeHeader.html file='index.html' %}
```html
<body>
    ...
</body>
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_css css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
body {
    background: #000;
    font-family: "Scope One", serif;
    font-weight: 400;
    font-style: normal;
}
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_css git %}
{% include codeHeader.html %}
```bash
git add assets/css/style.css
git commit -m "Añadimos los estilos básicos para el body (fuente y color de fondo)"
```
{% endtab %}
{% endtabs %}


---

## Desarrollar el (*navbar*)

Este navbar no tiene nada diferente a los que hemos construido en desafíos anteriores, por ello es que pasaremos directo al código que debemos añadir a continuación de la etiqueta `body`{:.tag} y no olvides agregar el código **JS** en tu script para configurar un efecto de cambio del `background-color` cuando se hace `scroll` en la página. También hay un requerimiento sobre la barra de navegación específico:

{: .card .text-dark .p-2 }
Una barra de navegación fija en la parte superior de la pantalla, con el logo y links a diferentes secciones de la página, haciendo un smooth scroll.

Para fijar siempre la barra de navegación en la parte superior sólo basta con añadirle la clase `fixed-top` al componente `navbar`:

> Si quieres entender más sobre el componente `navbar`, puedes echar un vistazo al [artículo de suricata - entender el componente navbar]({{ '/desafios/m2/03/suricata#entender-el-componente-navbar' | relative_url }}).


{% tabs viajes_chile_navbar %}
{% tab viajes_chile_navbar html %}
{% include codeHeader.html file='index.html' %}
```html
<nav class="navbar navbar-expand-lg fixed-top navbar-dark" id="nav">
    <div class="container">
        <a href="#" class="navbar-brand">
            <img src="assets/img/viajes.svg" alt="logo" height="40"> Viajes Chile
        </a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu"
            aria-expanded="true" aria-label="toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                <li class="nav-item">
                    <a href="#" class="nav-link">Inicio</a>
                </li>
                <li class="nav-item"><a href="#quienes-somos" class="nav-link">Quienes somos</a></li>
                <li class="nav-item"><a href="#destacados" class="nav-link">Destacados</a></li>
                <li class="nav-item"><a href="#contacto" class="nav-link">Contacto</a></li>
            </ul>
        </div>
    </div>
</nav>
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_navbar js %}
{% include codeHeader.html file='assets/js/script.js' %}
```js
// scroll 
window.addEventListener("scroll", () => {
  const nav = document.getElementById('nav');
  (window.scrollY > 40)
    ? nav.style.background = "#000"
    : nav.style.background = "transparent"
})
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_navbar git %}
{% include codeHeader.html %}
```bash
git add index.html
git commit -m "Agregue el componente navbar de bootstrap y añadi el logo"
git add assets/js/script.js
git  commit -m "Agregado detector de evento para scroll para cambiar el background del navbar"
```
{% endtab %}
{% endtabs %}

---

## Desarrollar el (*carousel*)

Por si no conoces el concepto de **carga diferida**, o ***lazy loading*** en inglés, es básicamente una acción que nos permite retrasar la carga del sitio web y de los objetos que lo componen hasta que sean realmente requeridos por el comportamiento del usuario.

Si nos fijamos, en el carrusel nos proporcionan imágenes con mucha resolución, sino me crees te dejo la prueba:

![img - dimensiones]({{ page.image_path | relative_url }}/dimensiones-imagen-carrusel.png){: .w-50 }

El problema con esto, es que cuando se abre la página o sitio web, el navegador carga todos los recursos necesarios para mostrar la página adecuadamente. Durante ese proceso de carga, se **recuperan todos los objetos, no solo los que se encuentran en el área visible**, esto provoca un tiempo de carga innecesario.

Si quieres profundizar y evitar tener estos problemas, te invito a investigar más soluciones yo sólo voy a dejar mi solución basada en el atributo `loading='lazy'` en la segunda y tercera imagen del carrusel:

{% tabs viajes_chile_carrusel %}
{% tab viajes_chile_carrusel html %}
{% include codeHeader.html file='index.html' %}
```html
<header>
    <!-- CARRUSEL WRAPPER -->
    <div id="carrusel" class="carousel slide lazy" data-bs-ride="carousel">
      <!-- CARRUSEL INNER -->
      <div class="carousel-inner">
        <!-- CARRUSEL: ITEM 1 -->
        <div class="carousel-item active">
          <img src="assets/img/carousel1.jpg" alt="imagen carrusel 1" class="d-block w-100">
        </div>
        <!-- CARRUSEL: ITEM 2 -->
        <div class="carousel-item">
          <img src="assets/img/carousel2.jpg" alt="imagen carrusel 2" class="d-block w-100" loading="lazy">
        </div>
        <!-- CARRUSEL: ITEM 3 -->
        <div class="carousel-item">
          <img src="assets/img/carousel3.jpg" alt="imagen carrusel 3" class="d-block w-100" loading="lazy">
        </div>
      </div>
      <!-- CONTROLES DESLIZANTES -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carrusel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carrusel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</header>
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_carrusel git %}
{% include codeHeader.html %}
```bash
git add index.html
git commit -m "Agregado el componente carrusel de bootstrap y las respectivas imágenes"
```
{% endtab %}
{% endtabs %}

---

## Desarrollar sección (*Quienes somos*)

Aquí en esta sección no requerimos más que el uso de las clases de bootstrap y el uso de unos íconos de [FontAwesome](https://fontawesome.com/){: target='_blank'} tal como nos solicita el desafío:

{: .card .text-dark .p-2 }
Una sección de presentación, utilizando favicons y 3 párrafos (debe desaparecer en tamaños pequeños de pantalla).

{% tabs viajes_chile_quienessomos %}
{% tab viajes_chile_quienessomos html %}
{% include codeHeader.html file='index.html' %}
```html
<!-- SECTION: QUIENES SOMOS -->
<!-- REQUERIMIENTO : esconder en pantalla mobile -->
<section class="py-5 container d-none d-lg-block text-light" id="quienes-somos">
    <h2 class="text-center text-uppercase my-3">¿Quienés somos?</h2>
    <hr class="text-secondary mb-4">
    <div class="row mt-4">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="bg-info text-center">
          <i class="fa-sharp fa-solid fa-plane fs-3"></i>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, inventore? Blanditiis corporis,
          eveniet iure ex dolore quisquam autem modi optio neque praesentium aut expedita rem? Eum ducimus
          laborum eligendi exercitationem!
          Molestiae cum nemo aperiam accusamus id eius mollitia ullam consequuntur a distinctio obcaecati
          officia, error similique dolorem molestias dolorum eos possimus ducimus? Modi quasi voluptas
          adipisci quo a optio voluptate?
          Doloremque asperiores maxime iusto eveniet exercitationem pariatur, non qui facere tenetur eaque
          sed hic atque magnam praesentium rerum harum ipsum! Veritatis, quidem accusamus maiores quisquam
          illo beatae nam quasi vero!
        </p>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, inventore? Blanditiis corporis,
          eveniet iure ex dolore quisquam autem modi optio neque praesentium aut expedita rem? Eum ducimus
          laborum eligendi exercitationem!
          Molestiae cum nemo aperiam accusamus id eius mollitia ullam consequuntur a distinctio obcaecati
          officia, error similique dolorem molestias dolorum eos possimus ducimus? Modi quasi voluptas
          adipisci quo a optio voluptate?
          Doloremque asperiores maxime iusto eveniet exercitationem pariatur, non qui facere tenetur eaque
          sed hic atque magnam praesentium rerum harum ipsum! Veritatis, quidem accusamus maiores quisquam
          illo beatae nam quasi vero!
        </p>
        <div class="bg-info text-center">
          <i class="fa-sharp fa-solid fa-map-location-dot fs-3"></i>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="bg-info text-center">
          <i class="fa-sharp fa-solid fa-earth-asia fs-3"></i>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, inventore? Blanditiis corporis,
          eveniet iure ex dolore quisquam autem modi optio neque praesentium aut expedita rem? Eum ducimus
          laborum eligendi exercitationem!
          Molestiae cum nemo aperiam accusamus id eius mollitia ullam consequuntur a distinctio obcaecati
          officia, error similique dolorem molestias dolorum eos possimus ducimus? Modi quasi voluptas
          adipisci quo a optio voluptate?
          Doloremque asperiores maxime iusto eveniet exercitationem pariatur, non qui facere tenetur eaque
          sed hic atque magnam praesentium rerum harum ipsum! Veritatis, quidem accusamus maiores quisquam
          illo beatae nam quasi vero!
        </p>
      </div>
    </div>
</section>
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_quienessomos git %}
{% include codeHeader.html %}
```bash
git add index.html
git commit -m "Agregada la sección de 'Quienes Somos'"
```
{% endtab %}
{% endtabs %}


---

## Desarrollar sección (*destacados*)

En la sección de **destacados**, vamos a utilizar sólo clases de bootstrap y el sistema de grilla para su correcta visualización en los diferentes dispositivos, así como nos sugiere el requerimiento:

{: .card .text-dark .p-2 }
Una sección de destacados, que muestre 4 cards (tarjetas) con la imagen e información asociada.

{% tabs viajes_chile_destacados %}
{% tab viajes_chile_destacados html %}
{% include codeHeader.html file='index.html' %}
```html
<!-- SECTION: DESTACADOS -->
<section class="py-5" id="destacados">
    <h2 class="text-center text-uppercase text-light my-3">Destacados</h2>
    <div class="container">
      <hr class="text-secondary">
      <div class="row g-4 px-3 px-lg-0">
        <!-- COL: 1 > CARD : 1 -->
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img  src="assets/img/card1.jpg" class="card-img-top" alt="card imagen 1" data-bs-toggle="tooltip"
              title="Paisaje de una isla" data-bs-placement="bottom" height="190" loading="lazy">
            <div class="card-body bg-info">
              <p class="card-text text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat dolores quae
                qui! Quisquam officiis dolor beatae odio earum molestias, quis ipsam perferendis facilis
                libero voluptate accusantium repudiandae blanditiis ratione?
              </p>
            </div>
          </div>
        </div>
        <!-- COL: 2 > CARD : 2 -->
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img src="assets/img/card2.jpg" class="card-img-top" alt="card imagen 2" data-bs-toggle="tooltip"
              title="Paisaje desierto" data-bs-placement="bottom" height="190" loading="lazy">
            <div class="card-body bg-info">
              <p class="card-text text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat dolores quae
                qui! Quisquam officiis dolor beatae odio earum molestias, quis ipsam perferendis facilis
                libero voluptate accusantium repudiandae blanditiis ratione?
              </p>
            </div>
          </div>
        </div>
        <!-- COL: 3 > CARD : 3 -->
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img src="assets/img/card3.jpg" class="card-img-top" alt="card imagen 3" data-bs-toggle="tooltip"
              title="Paisaje desierto rocoso" data-bs-placement="bottom" height="190" loading="lazy">
            <div class="card-body bg-info">
              <p class="card-text text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat dolores quae
                qui! Quisquam officiis dolor beatae odio earum molestias, quis ipsam perferendis facilis
                libero voluptate accusantium repudiandae blanditiis ratione?
              </p>
            </div>
          </div>
        </div>
        <!-- COL: 4 > CARD : 4 -->
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img src="assets/img/card4.jpg" class="card-img-top" alt="card imagen 4" data-bs-toggle="tooltip"
              title="Paisaje de la selva" data-bs-placement="bottom" height="190" loading="lazy">
            <div class="card-body bg-info">
              <p class="card-text text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat dolores quae
                qui! Quisquam officiis dolor beatae odio earum molestias, quis ipsam perferendis facilis
                libero voluptate accusantium repudiandae blanditiis ratione?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_destacados js %}
{% include codeHeader.html file='assets/js/script.js' %}
```js
$(document).ready(function () {
  // habilitar todos los tooltip de bootstrap
  $('[data-bs-toggle="tooltip"]').tooltip()
})
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_destacados git %}
{% include codeHeader.html %}
```bash
git add index.html
git commit -m "Agregado la sección 'destacados'"
git add assets/js/script.js
git commit -m "Habilitamos los tooltips usando Jquery"
```
{% endtab %}
{% endtabs %}


---

## Desarrollar sección (*contacto*)

La sección de *contacto* consta sólo de un formulario y al igual como ya hemos hecho en desafíos anteriores vamos a utilizar las clases de bootstrap necesarias y como extra (opcional) voy a simular un pequeño **popup** que notifique que se envió el correo usando javascript, quiero aclarar que no me detengo a explicar mucho el código de javascript ya que es tan poco que cada uno podría investigar cada línea en internet:

{: .card .text-dark .p-2 }
Una sección de formulario de contacto

{% tabs viajes_chile_contacto %}
{% tab viajes_chile_contacto html %}
{% include codeHeader.html file='index.html' %}
```html
<!-- SECTION: CONTACTO -->
<section class="py-5 container text-light" id="contacto">
    <h2 class="text-center text-uppercase my-3">Contacto</h2>
    <hr class="text-secondary mb-4">
    <div class="row">
        <div class="col-10 col-lg-12 mx-auto">
            <form action="" id="formulario" class="mt-4">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input id="nombre" type="text" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="asunto" class="form-label">Asunto</label>
                    <input id="asunto" type="text" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="mensaje" class="form-label">Mensaje</label>
                    <textarea id="mensaje" cols="30" rows="10" class="form-control" required></textarea>
                </div>
                <button class="btn btn-info text-light" data-bs-toggle="tooltip"
                    data-bs-title="Enviar mensaje">Enviar</button>
            </form>
        </div>
    </div>
</section>

<!-- POPUP -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="popup" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="assets/img/viajes.svg" class="rounded me-2" alt="icono" height="20">
        <strong class="me-auto text-uppercase">Información</strong>
        <small id="date"></small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body text-secondary">
        Se envió su correo exitosamente
        <i class="fa-solid fa-envelope fa-bounce text-success"
          style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;"></i>
      </div>
</div>
</div>
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_contacto js %}
{% include codeHeader.html file='assets/js/script.js' %}
```js
// form submit
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = new Date(Date.now());
    const popup = document.getElementById('popup');
    document.getElementById("date").textContent = date.toLocaleString();
    const toast = bootstrap.Toast.getOrCreateInstance(popup);
    toast.show()
    setTimeout(() => {
        toast.hide()
    }, 2500)
    e.target.reset();
})
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_contacto git %}
{% include codeHeader.html %}
```bash
git add index.html
git commit -m "Agragdada la sección 'contacto'"
git add assets/js/script.js
git commit -m "Mostrar el popup cuando se active el evento submit en el formulario"
```
{% endtab %}
{% endtabs %}

---

## Desarrollar el (*footer*)

Esta es la parte final del desafío, donde sólo debemos usar las etiquetas correspondiente para el pie de página (*footer*), y añadirle algunos íconos de **fontawesome** de las redes sociales tal como nos piden en el desafío:

{: .card .text-dark .p-2 }
Una sección footer con links a las redes sociales.

{% tabs viajes_chile_footer %}
{% tab viajes_chile_footer html %}
{% include codeHeader.html file='index.html' %}
```html
<!-- FOOTER -->
<footer class="bg-info container-fluid py-3 text-light">
    <div class="row text-center align-items-center">
        <div class="col-10 col-md-6 fs-4 mx-auto">
            VIAJES CHILE
        </div>
        <div class="col-10 col-md-6 text-center mx-auto">
            <a href="//github.com" class="text-decoration-none text-light" target="_blank">
                <i class="fa-brands fa-github-square fs-4 me-2" data-bs-toggle="tooltip" data-bs-title="Github"></i>
            </a>
            <a href="//linkedin.com" class="text-decoration-none text-light" target="_blank">
                <i class="fa-brands fa-linkedin fs-4 me-2" data-bs-toggle="tooltip" data-bs-title="Linkedin"></i>
            </a>
            <a href="//twitter.com" class="text-decoration-none text-light" target="_blank">
                <i class="fa-brands fa-twitter-square fs-4 me-2" data-bs-toggle="tooltip"
                    data-bs-title="Twitter"></i>
            </a>
            <a href="//facebook.com" class="text-decoration-none text-light" target="_blank">
                <i class="fa-brands fa-facebook-square fs-4 me-2" data-bs-toggle="tooltip"
                    data-bs-title="Facebook"></i>
            </a>
        </div>
    </div>
</footer>
```
{: .nolineno }
{% endtab %}
{% tab viajes_chile_footer git %}
{% include codeHeader.html %}
```bash
git add index.html
git commit -m "Agregado el footer de la página"
```
{% endtab %}
{% endtabs %}

---


## Desplegando en (*github-pages*)

Este es un paso realmente sencillo que consta de dos comando:

- `git branch -M gh-pages`: Aquí estamos renombrando la rama actual con el nombre de `gh-pages` (*GitHub reconoce este nombre y activa automáticamente el despligue en Github Pages*).
- `git push origin gh-pages`: Actualizar este cambio en GitHub para que se cree esta rama.

{% include codeHeader.html %}
```bash
git branch -M gh-pages
git push origin gh-pages
```

## Resultado

{% tabs viajes_chile_resultado %}
{% tab viajes_chile_resultado github %}
[![github](https://socialify.git.ci/enidev911/viajes-chile/image?language=1&owner=1&name=1&stargazers=1&theme=Light){: .card }](//github.com/enidev911/viajes-chile)
{% endtab %}
{% endtabs %}
