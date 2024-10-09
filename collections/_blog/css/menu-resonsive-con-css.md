---
layout: post
title: Menú responsive con CSS
subtitle: Diseñar una barra de navegación con HTML y CSS
category: css
thumbnail: https://miguelquispe.com/images/posts/crear-un-menu-responsive/banner-menu-responsive.jpg
---

## Crear un Menú responsive: Desafío creativo

En el mundo del diseño web responsive, uno de los elementos más comunes y
útiles es el menú hamburguesa. Aunque muchas veces frameworks como
[**Bootstrap**](https://getbootstrap.com/){:target='_blank'} ofrecen soluciones rápidas y eficientes, hay algo muy gratificante en construir tu propio menú desde cero utilizando solo HTML y CSS. Como aprender sobre flexbox, grid, media queries y más.

Otra ventaja es la personalización. Al utilizar Bootstrap, es fácil caer en el mismo diseño que otros sitios web. Si diseñamos nuestro menu podemos ajustar cada detalle y hasta el comportamiento de los elementos, y por último recordar que el componente Navbar de Bootstrap utiliza JavaScript y para nuestro menú no queremos nada de JavaScript 🙅‍♂️.

Debemos tener en cuenta que para lograr que nuestro menu responsive con solo HTML y CSS sea funcional existen varios métodos que vamos a ir practicando y profundizar en ello.

## Menu usando pseudo-clase :target

Vamos a comenzar con el método más sencillo para que nuestro menú funcione sin javascript.

### Crear la estructura básica del HTML

{% include codeHeader.html file="index.html" codepen="y" %}
{7 10 11 12 13 14 15 16 17 18 19 20 21 22}
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menú Responsive sin JavaScript</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="logo">Mi Sitio</div>
    <nav>
      <a href="#menu" class="menu-icon">&#9776;</a>
      <ul class="nav-list" id="menu">
        <a href="#!" class="menu-close">✖</a>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>
```

Lo más relevante en el código anterior, es la vinculación con la hoja de estilo y la estructura del menú.

### Estilos CSS

Lo interesante viene a continuación en las reglas de estilos usando flexbox, media queries y para la funcionalidad la pseudo clase `:target`.

{% include codeHeader.html file="style.css" %}
```css
/* Reset */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  font-family: Arial, sans-serif;
}

/* Contenedores flex, y bg */
header,
nav,
.nav-list {
  display: flex;
  background: #333;
}

/* Elementos ocultos para desktop */
.menu-icon,
.menu-close {
  display: none;
}

header {
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;
}

.nav-list {
  list-style: none;
  gap: 25px;
}

@media(max-width: 768px) {
  /* Mobile */

  /* Mostrar el icono hamburguesa */
  .menu-icon {
    display: block;
  }

  .nav-list {
    /* Ocultamos el menu por defecto */
    display: none;
    /* ---------- */
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  /* Mostramos el menu y el botón para cerrarlo */
  #menu:target,
  #menu:target .menu-close {
    display: flex;
  }

  .menu-close {
    align-self: flex-start;
  }
}
```
{: .nolineno }

### Resultado

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PoMGWPP" data-pen-title="Untitled" data-user="EniDev911" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/EniDev911/pen/PoMGWPP">
  Untitled</a> by EniDev911 (<a href="https://codepen.io/EniDev911">@EniDev911</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br><br>