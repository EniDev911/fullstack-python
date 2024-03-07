---
layout: post
title: Desafío - Cuppon
modulo: m2
challenge: 5
type: evaluado
---

## Descripción

- **Colores**
	- {: data-color='#212529' style='--color:#212529' }
	- {: data-color='#707070' style='--color:#707070' }
	- {: data-color='#F8F9FA o var(--light)' style='--color:#F8F9FA' }
	- {: data-color='#FFF o var(--white)' style='--color:#FFF' }
	- {: data-color='#28A745 o var(--success)' style='--color:#28A745' }

---

## Creando el layout responsivo

Como sabemos **bootstrap** ofrece una grilla compuesta por 12 columnas, en ella se puede especificar cuántas columnas ocupará un solo elemento.

<div class="container mb-4">
  <div class="row border border-light">
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

Los puntos de interrupción son claves para un **diseño responsive** son anchos personalizables que determinan como se deben comportar los elementos afectados. Boostrap incluye 6 puntos de interrupción:

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

### Agregar el componente navbar


Sabiendo lo anterior podemos partir agregando el componentes de navegación:

{% include codeHeader.html file='index.html' %}
```html
<nav class="navbar navbar-dark navbar-expand-md">
	<div class="container">
	  <!-- LOGO MARCA -->
	  <a href="#" class="navbar-brand">
	    <img src="./assets/img/logo-white.png" alt="logo" width="110">
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

Como vemos el componentes [navbar](https://getbootstrap.com/docs/5.3/components/navbar/){:target='_blank'} ya es responsivo, y sólo nos basta con indicar con la clase `navbar-expand-md` que su comportamiento cambie cuando el dispositivo tenga un ancho **≥ 768px**.

### Diseñar las card responsive

Para crear una card responsive, aquí si tenemos usar en esta la grilla de bootstrap.

Fijemonos en la siguiente imagen:

{: align='center' }
![img card-mobile](cuppon-mobile.png){:height='350'}
![img card-responsive](cuppon-card.png){:height='350'}

{2 3 5}
```html
<!-- PROMOS SECTION -->
<section class="container-lg my-5">
  <div class="row">
    <!-- primer item -->
    <div class="mx-auto col-11 col-md-6 col-lg-4 mb-3">
      <div class="card">
        <img src="./assets/img/cupon-1.jpg" alt="primer item" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title fw-normal">Plumón Coral Fleece estampado en modelo y tamaño a elección</h4>
          <p class="card-text text-secondary">Plumones Manolino<br>
            <i class="fa-solid fa-location-dot"></i> 9191 Avenida Vitacura, Chile
          </p>
          <hr>
          <div class="text-end">
            <span class="text-secondary me-2">$45.990</span>
            <span class="oferta">$22.290</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- segundo item -->
</section>
```

Como podemos observar, tenemos un `section class='container my-5'`{: .tag } como sabemos el sistema de grilla debe tener un contenedor que lo estamos proporcionando con la clase `container` y para que el contenido no esté apegado a la navegación y pie de página añadimos la clase `my-5` para agregar margenes arriba y abajo (*en el eje y*).

## Resultado

{% tabs cuppon %}
{% tab cuppon HTML %}
{% include codeHeader.html file='index.html' %}
```html
{{ site.data.m2.cuppon.html }}
```
{% endtab %}
{% tab cuppon CSS %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
{{ site.data.m2.cuppon.css }}
```
{% endtab %}
{% tab cuppon resultado %}
{% include ifr_results.html 
  src='demo' %}
{% endtab %}
{% endtabs %}