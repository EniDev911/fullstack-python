---
layout: post
title: Desafío - Cuppon
modulo: m2
challenge: 5
type: evaluado
img_path: '/assets/img/desafios/cuppon/'
show: true
show_next: true
---

## Requerimientos

- **Tipografía**
  - Roboto [Google Fonts](https://fonts.google.com/){:target='_blank'}
    - Roboto Light (300).
    - Roboto Medium (500).

- **Colores**
	- {: data-color='#212529' style='--color:#212529' }
	- {: data-color='#707070' style='--color:#707070' }
	- {: data-color='#F8F9FA o var(--light)' style='--color:#F8F9FA' }
	- {: data-color='#FFF o var(--white)' style='--color:#FFF' }
	- {: data-color='#28A745 o var(--success)' style='--color:#28A745' }

Las imágenes para este desafío se pueden decargar [aquí]({{ page.img_path | relative_url | append: 'cuppon-imgs.zip'}}){:download='cuppon-imgs.zip'} 👈

Para guiarnos, tenemos la versión móvil en la siguiente [maqueta](https://xd.adobe.com/spec/aad024b9-c153-43f1-4dd6-da519734e1ee-dce1/grid){:target='_blank'}

---

## Desarrollo

Para cumplir con éxito el desafío, vamos a ir paso a paso para ir clarificando cada tema y dejando algunas sugerencias o recomendaciones.


### Estructura del proyecto

Igual como en el [{{ page.previous.title }}]({{ page.previous.url | relative_url }}) podemos usar el siguiente árbol de directorios basado en la **estructura assets**:


```bash
📂 cuppon
├── 📂 assets
│   ├── 📂 css # 👈 para las hojas de estilos
│   │   └── style.css 
│   ├── 📂 img # 👈 para las imágenes
│   │   │── cupon-1.jpg
│   │   │── cupon-2.jpg
│   │   │── cupon-3.jpg
│   │   │── cupon-4.jpg
│   │   │── cupon-5.jpg
│   │   │── cupon-6.jpg
│   │   │── logo-white.png
│   │   └── logo-black.png
│   └── 📁 js # 👈 para los scripts (opcional)
└── index.html # página principal
```

### Starter template

Para este desafío nos piden integrar bootstrap vía **CDN**, te dejo a continuación al igual que en el [desafío guiado anterior en la sección - añadir bootstrap]({{ page.previous.url | relative_url }}#añadir-bootstrap) el *starter template* para copiar y pegar en tu `index.html`. El *starter template* incluye:

- `CDN Bootstrap CSS`
- `CDN Bootstrap JS`
- `Kit FontAwesome`
- `Nuestro style.css`

{% include codeHeader.html file='index.html' %}
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cuppon</title>
    <!-- Bootstrap CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
     <!-- My CSS -->
     <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>

    <!-- Bootstrap JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- KIT FONT AWESOME -->
    <script src="https://kit.fontawesome.com/6b8f0c7049.js" crossorigin="anonymous"></script>
  </body>
</html>
```

### Desarrollar el (*navbar*)

Ya hemos hecho este paso de crear las barras de navegación en desafíos anteriores, así que sólo tenemos que ir agregando el siguiente código seguido de la etiqueta `body`{: .tag}:

> **Nota**: Las imágenes son las mismas que las del desafío, pero están siendo vinculadas en otro servidor, por lo que debes indicar la ruta que corresponde a las imágenes de tu proyecto.

{% tabs cuppon_navbar %}
{% tab cuppon_navbar html %}
{% include codeHeader.html file='index.html' codepen='y' title='navbar - cuppon' bs=true css='.navbar { background-color: #28a745' %}
```html
<nav class="navbar navbar-dark navbar-expand-md">
  <div class="container">
    <!-- LOGO MARCA -->
    <a href="#" class="navbar-brand">
      <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-cuppon/logo-white.png" alt="logo" width="110">
    </a>
    <!-- BUTTON HAMBURGUESA -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#my-nav"
      aria-controls="main-nav" aria-label="Toggle navigation" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- MENU -->
    <div class="collapse navbar-collapse" id="my-nav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <a href="#promociones" class="nav-link">Promociones</a>
        <a href="#reservas" class="nav-link">Reservas</a>
        <a href="#contacto" class="nav-link">Contacto</a>
      </ul>
    </div>
  </div>
</nav>
```
{: .nolineno }
{% endtab %}
{% tab cuppon_navbar css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
:root {
  --primer-color: #212529;
  --segundo-color: #707070;
  --blanco-light: #F8F9FA;
  --blanco: #FFF;
  --verde: #28a745;
}

.navbar {
  background-color: var(--verde);
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}


Como vemos el componente [navbar](https://getbootstrap.com/docs/5.3/components/navbar/){:target='_blank'} ya es responsivo, y sólo nos basta con indicar con la clase `navbar-expand-md` para que su comportamiento cambie cuando el dispositivo tenga un ancho **≥ 768px**.

### Creando el layout responsivo

Como sabemos **bootstrap** ofrece una grilla compuesta por 12 columnas, en ella se puede especificar cuántas columnas ocupará un solo elemento. Por ejemplo a continuación tenemos bloques que están distribuidos en la grilla de bootstrap con diferentes configuraciones:

<div class="container mb-4">
  <div class="row g-2">
    <div class="col-12 border border-light py-2">
    	.col-12
    </div>
    <div class="col-6 border border-light py-2">
    	.col-6
    </div>
    <div class="col-6 border border-light py-2">
    	.col-6
    </div>
    <div class="col-3 border border-light py-2">
    	.col-3
    </div>
    <div class="col-3 border border-light py-2">
    	.col-3
    </div>
    <div class="col-3 border border-light py-2">
    	.col-3
    </div>
    <div class="col-3 border border-light py-2">
    	.col-3
    </div>
    <div class="col-12 border border-light py-2">
    	.col-12
    </div>
  </div>
</div>

### Punto de interrupción (*breakpoint*)

Los puntos de interrupción son claves para un **diseño responsive** son anchos personalizables que determinan como se deben comportar los elementos afectados. **Boostrap en su versión 5** en adelante incluye 6 puntos de interrupción:

<div class="table-responsive" markdown="1">

{: .table }
|Breakpoint|Dispositivo|Tamaño|
|:---------|:----------|:-----|
|`x-small`|**None**|< 576px|
|`small`|**sm**|≥ 576px|
|`medium`|**md**|≥ 768px|
|`large`|**lg**|≥ 992px|
|`extra-large`|**xl**|≥ 1200px|
|`extra-extra-large`|**xxl**|≥ 1400px|

</div>

### Configurar grilla

Para crear nuestro layout responsive, aquí si tenemos que usar la grilla de bootstrap.

{2}
```html
<!-- PROMOS SECTION -->
<section class="container-lg my-5">
  <!-- fila -->
</section>
```

Como podemos observar, tenemos un `section class='container my-5'`{: .tag } como sabemos el sistema de grilla debe tener un contenedor que lo estamos proporcionando con la clase `container` y para que el contenido no esté apegado a la navegación y pie de página añadimos la clase `my-5` para agregar margenes arriba y abajo (*en el eje y*).


### Configurar la fila

Luego de especificar un contenedor para colocar los elementos, seguido se especificará una fila:

{2}
```html
<section class="container-lg my-5">
  <div class="row">
    <!-- columnas -->
  </div>
</section>
```

Ahora para continuar con las columnas, ya vimos que lo que son los (*breakpoints*) asi que esto es importante para que cada columna pueda ocupar el ancho que corresponda según el disposiivo.

Veamos rápidamente el uso de (*breakpoints*) en columnas:

<div class="table-responsive">
<table class="table" border="1">
  <thead class="text-center">
    <th class="h1 bg-secondary">📺</th>
    <th>Muy pequeño<br><span class="font-weight-normal">&lt;576 px</span></th>
    <th>Pequeño<br><span class="font-weight-normal">&ge;576 px</span></th>
    <th>Medio<br><span class="font-weight-normal">&ge;768 px</span></th>
    <th>Grande<br><span class="font-weight-normal">&ge;992 px</span></th>
    <th>Extra grande<br><span class="font-weight-normal">&ge;1200 px</span></th>
  </thead>
  <tbody>
    <tr>
      <th>Prefijo clase</th>
      <td><code>.col-</code></td>
      <td><code>.col-sm-</code></td>
      <td><code>.col-md-</code></td>
      <td><code>.col-lg-</code></td>
      <td><code>.col-xl-</code></td>
    </tr>
  </tbody>
</table>
</div>

### Configurar columna

Configurar una columna correctamente con sus respectivos *breakpoints* nos dará el siguiente resultado para diferentes dispositivos:

<div class="row align-items-center text-center" markdown="1">
<div class="col-11 col-md-4" markdown="1">
![img col-11]({{ page.img_path | relative_url }}/cuppon-col-mobile.png){:height='380'}
</div>
<div class="col-11 col-md-8" markdown="1">
![img col-md-6]({{ page.img_path | relative_url }}/cuppon-col-tablet.png){:height='350'}
</div>
<div class="col-11" markdown="1">
![img col-md-12]({{ page.img_path | relative_url }}/cuppon-col-desktop.png){:height='450'}
</div>
</div>

{3}
```html
<section class="container-lg my-5">
  <div class="row justify-content-center">
    <div class="col-11 col-md-6 col-lg-4">
      <!-- card -->
    </div>
  </div>
</section>
```

> En la fila añadimos el la clase `justify-content-center` ya que al tratarse de un contenedor flexible, nos posicionará el contenido al centro.

Como podemos observar en el ejemplo, tenemos la columna configurada de forma responsiva para los diferentes dispositivo, cada columna abarcará 11 espacios de la grilla en dispositivos pequeños (*mobile*), 6 espacios de la grilla en dispositivos medianos (*tablets*) y 4 espacios de la grilla en dispositivos grandes (*desktop*)

El código para terminar la sección de las tarjetas dentro de la grilla sería el siguiente:

> **Nota**: Las imágenes son las mismas que las del desafío, pero están siendo vinculadas en otro servidor, por lo que debes indicar la ruta que corresponde a las imágenes de tu proyecto.

{% include codeHeader.html file='index.html' codepen='y' title='grilla - cuppon' bs=true fa=true %}
```html
<section class="container-lg my-5">
  <div class="row g-4 justify-content-center">
    <!-- primer item -->
    <div class="col-11 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-cuppon/cupon-1.jpg" alt="primer item" class="card-img-top" height="230">
        <div class="card-body">
          <h4 class="card-title fw-normal">Plumón Coral Fleece estampado en modelo y tamaño a elección</h4>
          <p class="card-text text-secondary">Plumones Manolino<br>
            <i class="fa-solid fa-location-dot"></i> 9191 Avenida Vitacura, Chile
          </p>
          <hr>
          <div class="text-end">
            <span class="fs-5 text-secondary me-2">$45.990</span>
            <span class="fs-4 text-success fw-bold">$22.290</span>
          </div>
        </div>
      </div>
    </div>
    <!-- segundo item -->
    <div class="col-11 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-cuppon/cupon-2.jpg" alt="primer item" class="card-img-top" height="230">
        <div class="card-body">
          <h4 class="card-title fw-normal">Entrada para compartir + platos de fondo + postres + bebestibles</h4>
          <p class="card-text text-secondary">V for Vegan<br>
            <i class="fa-solid fa-location-dot"></i> 777 Jesse Pinkman, Chile
          </p>
          <hr>
          <div class="text-end">
            <span class="fs-5 text-secondary me-2">$300.000</span>
            <span class="fs-4 text-success fw-bold">$25.290</span>
          </div>
        </div>
      </div>
    </div>
    <!-- tercer item -->
    <div class="col-11 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-cuppon/cupon-3.jpg" alt="segundo item" class="card-img-top" height="230">
        <div class="card-body">
          <h4 class="card-title fw-normal">Evaluación integral + blanqueamiento dental led + limpieza + fluoración
          </h4>
          <p class="card-text text-secondary">Clínica Dental Quijada<br>
            <i class="fa-solid fa-location-dot"></i> 1342, Blanco Encalada, Chile
          </p>
          <hr>
          <div class="text-end">
            <span class="fs-5 text-secondary me-2">$300.000</span>
            <span class="fs-4 text-success fw-bold">$25.290</span>
          </div>
        </div>
      </div>
    </div>
    <!-- cuarto item -->
    <div class="col-11 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-cuppon/cupon-4.jpg" alt="cuarto item" class="card-img-top" height="230">
        <div class="card-body">
          <h4 class="card-title fw-normal">Colación para 2 personas + postre (no incluye bebidas)</h4>
          <p class="card-text text-secondary">Suricata almacen<br>
            <i class="fa-solid fa-location-dot"></i> 1071 Miguel Claro, Chile
          </p>
          <hr>
          <div class="text-end">
            <span class="fs-5 text-secondary me-2">$4.200</span>
            <span class="fs-4 text-success fw-bold">$2.100</span>
          </div>
        </div>
      </div>
    </div>
    <!-- quinto item -->
    <div class="col-11 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-cuppon/cupon-5.jpg" alt="cuarto item" class="card-img-top" height="230">
        <div class="card-body">
          <h4 class="card-title fw-normal">1, 2 o 4 tickets para Stukids. Elige sucursal</h4>
          <p class="card-text text-secondary">Stukids Centro de Eventos<br>
            <i class="fa-solid fa-location-dot"></i> 133 El tranque, Chile
          </p>
          <hr>
          <div class="text-end">
            <span class="fs-5 text-secondary me-2">$4.000</span>
            <span class="fs-4 text-success fw-bold">$2.500</span>
          </div>
        </div>
      </div>
    </div>
    <!-- sexto item -->
    <div class="col-11 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-cuppon/cupon-6.jpg" alt="sexto item" class="card-img-top" height="230">
        <div class="card-body">
          <h4 class="card-title fw-normal">San Pedro de Atacama : 1 o 2 noches en alojamiento a elección</h4>
          <p class="card-text text-secondary">D-Latam Travel</p>
          <hr>
          <div class="text-end">
            <span class="fs-5 text-secondary me-2">$80.200</span>
            <span class="fs-4 text-success fw-bold">$44.100</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```
{: .nolineno }


### Desarrollar sección (*formulario*)

Esta sección es más de lo mismo, si realizaste el [desafío guiado anterior en la sección de contacto]({{ page.previous.url | relative_url }}#desarrollar-sección-contacto), claro que debemos cambiar algunas cosas el color de fondo, pero vamos al código y lo pegas a continuación de la sección anterior y también no te olvides de agregar el CSS que es para cambiar el color de fondo, que se acerca más al de la maqueta ya que la clase `bg-success`  de bootstrap no es el mismo color que la maqueta:

{% tabs formulario_cuppon %}
{% tab formulario_cuppon html %}
{% include codeHeader.html file='index.html' codepen='y' title='formulario - cuppon' bs=true css='#formulario_cupon { background-color: #28a745' %}
```html
<section class="text-center py-4" id='formulario_cupon'>
  <h3 class="fs-4 text-light">Recibe cupones en tu correo</h3>
  <div class="container">
    <form>
      <div class="m-3">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre">
      </div>
      <div class="m-3">
        <input type="email" class="form-control" placeholder="Correo electrónico">
      </div>
      <button type="reset" class="btn btn-light px-4">Enviar</button>
    </form>
  </div>
</section>
```
{: .nolineno }
{% endtab %}
{% tab formulario_cuppon css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
#formulario_cupon {
  background-color: var(--verde);
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}


### Desarrollar (*footer*)

Hemos llegado a la parte más sencilla, solo es cosa de ver el **HTML** y te darás cuenta que está pasando:

> **Nota** Las imágenes son las mismas que las del desafío, pero están siendo vinculadas en otro servidor, por lo que debes indicar la ruta que corresponde a las imágenes de tu proyecto.

{% include codeHeader.html file='index.html' codepen='y' title='footer - cuppon' bs=true %}
```html
<footer class="text-center py-4">
  <img src=" //raw.githubusercontent.com/EniDev911/assets/main/desafio-cuppon/logo-black.png" alt="logo footer" height="45">
  <p class="fs-6 text-secondary mt-2" id="copyright">© 2018 Cuppon Latam .Todos los derechos
    reservados.</p>
</footer>
```
{: .nolineno }

---

## Repositorio


{% tabs cuppon %}
{% tab cuppon github %}
[![github](https://socialify.git.ci/enidev911/m2-evaluado-cuppon/image?description=1&descriptionEditable=M2%20%3A%20Cuppon%20-%20Desaf%C3%ADo%20evaluado&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark){: .card }](https://github.com/EniDev911/m2-evaluado-cuppon)
{% endtab %}
{% tab cuppon github cli %}
{% include codeHeader.html icon='terminal' %}
```bash
gh repo clone EniDev911/m2-evaluado-cuppon
```
{% endtab %}
{% tab cuppon ssh %}
{% include codeHeader.html icon='terminal' %}
```bash
git clone git@github.com:EniDev911/m2-evaluado-cuppon.git
```
{% endtab %}
{% tab cuppon github page %}
{% include ifr_results.html 
  src='https://enidev911.github.io/m2-evaluado-cuppon/' %}
{% endtab %}
{% endtabs %}