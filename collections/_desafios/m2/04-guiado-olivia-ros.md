---
layout: post
title: Desafío - Olivia Ros
modulo: m2
type: guiado
img_path: '/assets/img/desafios/olivia-ros/'
show: true
show_next: true
css:
  banner: |-
    #banner {
      background-image: url(//raw.githubusercontent.com/EniDev911/assets/main/desafio-olivia-ros/bg-hero.jpg);
      background-repeat: no-repeat;
      background-size: cover;
    }
---

## Descripción

En este desafío guiado no nos proporcionan más información que lo siguiente:

- Implementar [Bootstrap](https://getbootstrap.com/){:target='_blank'}
- Desarrollar un diseño responsivo siguiendo la filosofía de *mobile first*.
- Implementar el sistema de grilla de Bootstrap.
- Aplicar las clases de Boostrap para personalizar el diseño y los colores de la página.
- Nos ofrecen la siguiente [maqueta](https://xd.adobe.com/spec/a587f5e9-e57c-424d-65c3-3bd10353c0fc-d3b6/grid){:target='_blank'} para guiarnos con la versión móvil y de escritorio.

Eso en resumen, ya que nos proporciona los íconos de [fontawesome](https://fontawesome.com/){:target='_blank'} me di el trabajo de buscarlos y te los comparto a continuación:

*clic sobre el ícono para copiar*

<div class="row g-3 mb-2">
	<div class="col-4 col-md-2">
		<div class="mini_card cursor" onclick="copyClipboard(this.innerHTML)">
			<i class="fa-solid fa-camera fa-3x"></i>
		</div>
	</div>
	<div class="col-4 col-md-2">
		<div class="mini_card cursor" onclick="copyClipboard(this.innerHTML)">
			<i class="fa-solid fa-bullhorn fa-3x"></i>
		</div>
	</div>
	<div class="col-4 col-md-2">
		<div class="mini_card cursor" onclick="copyClipboard(this.innerHTML)">
			<i class="fa-regular fa-map fa-3x"></i>
		</div>
	</div>
</div>

> Descargar los logos y demás imágenes desde la plataforma o en su defecto, puedes descargar los assets [aquí]({{ page.img_path | relative_url | append: 'imagenes-olivi-ros.zip' }}) :point_left:
{: .prompt-note }

---

## Desarrollo

Para cumplir con éxito el desafío, vamos a ir paso a paso para ir clarificando cada tema y dejando algunas sugerencias o recomendaciones.

### Añadir Bootstrap

Para este proyecto nos piden integrar bootstrap vía **CDN**, te dejo a continuación un **starter template** que contiene lo siguiente:

- `CDN Bootstrap CSS`
- `CDN Bootstrap JS`
- `Kit FontAwesome`
- `Nuestro style.css`

Para copiar y pegar en tu `index.html`:

{% include codeHeader.html file='index.html' codepen="y" %}
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Olivia Ros</title>
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

### Desarrollando el (*navbar*)

Ya como hemos visto en [{{ page.previous.title }}]({{ page.previous.url  | relative_url }}) en la sección de [entender el componente navbar]({{ page.previous.url  | relative_url }}#entender-el-componente-navbar) donde explique todo lo necesario sobre el componente [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/){:target='_blank'} de **bootstrap**, vamos a pasar directamente al código necesario para obtener la barra tal como nos muestra la maqueta ( **Recordar**: pegar el código justo después de la etiqueta `body`{: .tag } ):

{% include codeHeader.html icon='html' codepen='y' title='navbar olivia-ros' bs=true %}
```html
<nav class="navbar navbar-expand-lg bg-dark py-3" data-bs-theme="dark">
	<div class="container">
		<a href="#">
			<img src="assets/img/logo.png" alt="logo">
		</a>
		<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="menu">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item">
					<a href="#acerca_de_mi" class="nav-link">Acerca de mí</a>
				</li>
				<li class="nav-item">
					<a href="#trabajos" class="nav-link">Trabajos</a>
				</li>
				<li class="nav-item">
					<a href="#contacto" class="nav-link">Contacto</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
```
{: .nolineno }


### Desarrollar el (*hero section*)

Cuando hablamos de [*hero section*](https://en.wikipedia.org/wiki/Web_banner){: target='_blank'} normalmente nos referimos a la sección principal de un sitio web, es común ver un *banner* grande que se muestra en la parte superior después del menú. Un *hero section* suele consistir en una imagen o un vídeo destacado, acompañado de algún texto para captar la atención del usuario y un llamado a una acción en concreto, para llevar a cabo con éxito esta sección debemos identificar los elementos involucrados, tal como lo muestra la ilustración:

![img - hero]({{ page.img_path | relative_url | append: 'bg-hero.png' }})

{% tabs hero_olivia_ros %}
{% tab hero_olivia_ros html %}
{% include codeHeader.html file='index.html' codepen='y' title='olivia-ros - hero' bs=true css=page.css.banner %}
```html
<header id="banner" class="min-vh-100 d-flex align-items-center text-white">
  <div class="container text-end">
    <div class="row justify-content-end">
      <div class="col-12 col-md-10 col-lg-7">
        <h1 class="display-2 fw-bolder">Comidas del fin del mundo</h1>
        <p class="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
          blandit
          dapibus.
          Nunc at
          enim et lacus
          porttitor tincidunt. Donec imperdiet augue nec aliquet sagittis.</p>
        <a href="#trabajos" class="btn btn-outline-info text-white" role="button">Trabajos</a>
        <a href="#contacto" class="btn btn-info text-white ms-3" role="button">Contacto</a>
      </div>
    </div>
  </div>
</header>
```
{: .nolineno }
{% endtab %}
{% tab hero_olivia_ros css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
#banner {
  background-image: url(../img/bg-hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Desarrollar sección ( *acerca de mí* )

Como en el [desafío guiado anterior]({{ page.previous.url | relative_url }}), para desarrollar con éxito esta sección tenemos que usar correctamente la grilla de bootstrap en conjunto con otro componente como podría ser un [Card](https://getbootstrap.com/docs/5.3/components/card/){:target='_blank'}

> no olvides incluir la librería de [FontAwesome](https://fontawesome.com/){:target='_blank'} para que se puedan visualizar los íconos.
{: .prompt-warning }

{% include codeHeader.html file='index.html' codepen='y' title='olivia-ros - acerca de mí' bs=true fa=true %}
```html
<section id="acerca_de_mi" class="py-5">
  <div class="container">
    <h2 class="text-center fw-bolder display-4 mb-4">Acerca de mí</h2>
    <p class="text-center fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
      blandit
      dapibus. Nunc at enim et lacus
      porttitor tincidunt. Donec imperdiet augue nec aliquet sagittis.</p>
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card text-center border-0">
          <i class="fa-solid fa-camera fa-3x"></i>
          <div class="card-body">
            <h5 class="card-title fs-4 mt-3">Fotógrafa de comida</h5>
            <p class="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
              blandit dapibus.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card text-center border-0">
          <i class="fa-solid fa-bullhorn fa-3x"></i>
          <div class="card-body">
            <h5 class="card-title fs-4 mt-3">Crítica culinaria</h5>
            <p class="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
              blandit dapibus.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card text-center border-0">
          <i class="fa-regular fa-map fa-3x"></i>
          <div class="card-body">
            <h5 class="card-title fs-4 mt-3">Bloggera de viajes</h5>
            <p class="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
              blandit dapibus.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```
{: .nolineno }


### Desarrollar sección (*mis trabajos*)

El siguiente código usa las tarjetas con las imágenes del desafío olivia-ros y distribuidas en la grilla de bootstrap:

> Las imágenes son las mismas que las del desafío, pero están siendo vinculadas en otro servidor, por lo que debes indicar la ruta que corresponde a las imágenes de tu proyecto.
{: .prompt-note }

{% tabs olivia_ros_trabajos %}
{% tab olivia_ros_trabajos html %}
{% include codeHeader.html file='index.html' codepen='y'  title='olivia-ros - mis trabajos' bs=true css='#trabajos { background: #17A2B8; }' %}
```html
<section id="trabajos" class="py-5">
  <div class="container">
    <h2 class="text-center text-white display-4 fw-bolder">Mis trabajos</h2>
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
        <div class="card">
          <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-olivia-ros/card-1.jpg" alt="Imagen de asado" class="card-img-top object-fit-cover" height="235">
          <div class="card-body">
            <h5 class="card-title mb-3 fs-4">Asado en la Patagonia</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
              blandit dapibus.</p>
          </div>
          <div class="card-footer py-4 bg-white border-0">
            <a href="#" role="button" class="btn btn-outline-info">Ver más</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
        <div class="card">
          <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-olivia-ros/card-2.jpg" alt="Imagen de asado" class="card-img-top object-fit-cover" height="235">
          <div class="card-body">
            <h5 class="card-title mb-3 fs-4">Papas del fin del mundo</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
              blandit dapibus.</p>
          </div>
          <div class="card-footer py-4 bg-white border-0">
            <a href="#" role="button" class="btn btn-outline-info">Ver más</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-olivia-ros/card-3.jpg" alt="Imagen de asado" class="card-img-top object-fit-cover" height="235">
          <div class="card-body">
            <h5 class="card-title mb-3 fs-4">Salmones de Alaska</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
              blandit dapibus.</p>
          </div>
          <div class="card-footer py-4 bg-white border-0">
            <a href="#" role="button" class="btn btn-outline-info">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```
{: .nolineno }
{% endtab %}
{% tab olivia_ros_trabajos css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
#trabajos {
  background: #17A2B8;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}


### Desarrollar sección (*Contacto*)

En esta sección, tenemos un formulario el cual consta simplemente de tres campos y [boostrap nos ofrece varias opciones de diseño y componentes para estilizar el formulario](https://getbootstrap.com/docs/5.3/forms/overview/){:target='_blank'}.


{% include codeHeader.html file='index.html' codepen='y' title='olivia-ros - contacto' bs=true %}
```html
<section id="contacto" class="py-5">
  <div class="container">
    <h2 class="text-center display-4 fw-bolder">Contáctame</h2>
    <p class="fs-5 text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris id purus
      blandit dapibus.
      Nunc at enim
      et lacus
      porttitor tincidunt. Donec imperdiet augue nec aliquet sagittis.</p>
    <form class="mt-4">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre">
      </div>
      <div class="mb-3">
        <label for="mail" class="form-label">Correo electrónico</label>
        <input type="email" id="mail" class="form-control" placeholder="correo electrónico">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
          placeholder="Escribe aquí tu mensaje"></textarea>
      </div>
      <div class="text-end mt-2">
        <button type="submit" class="btn btn-info text-white">Enviar</button>
      </div>
    </form>
  </div>
</section>
```
{: .nolineno }

### Desarrollar el (*footer*)

Para terminar veamos el siguiente código que es básicamente la parte más sencilla de la página:

{% tabs olivia_ros_footer %}
{% tab olivia_ros_footer html %}
{% include codeHeader.html file='index.html' codepen='y' title='olivia-ros - footer' bs=true css='footer{background:#000;}' %}
```html
<footer class="py-3 text-white text-center">
  Olivia Ros 2019. Todos los derechos reservados.
</footer>
```
{: .nolineno }
{% endtab %}
{% tab olivia_ros_footer css %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
footer {
  background: #000;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Repositorio

{% tabs oliviaros %}
{% tab oliviaros github %}
[![github](https://socialify.git.ci/enidev911/m2-guiado-olivia-ros/image?description=1&descriptionEditable=M2%20%3A%20Olivia%20Ros%20-%20Desaf%C3%ADo%20guiado&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark){: .card }](https://github.com/EniDev911/m2-guiado-olivia-ros)
{% endtab %}
{% tab oliviaros github cli %}
{% include codeHeader.html icon='terminal' %}
```bash
gh repo clone EniDev911/m2-guiado-olivia-ros
```
{% endtab %}
{% tab oliviaros ssh %}
{% include codeHeader.html icon='terminal' %}
```bash
git clone git@github.com:EniDev911/m2-guiado-olivia-ros.git
```
{% endtab %}
{% tab oliviaros github page %}
{% include ifr_results.html 
  src='https://enidev911.github.io/m2-guiado-olivia-ros/' %}
{% endtab %}
{% endtabs %}