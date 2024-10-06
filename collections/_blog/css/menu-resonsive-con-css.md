---
layout: post
title: Menú responsive con CSS
subtitle: Diseñar una barra de navegación con HTML y CSS
category: css
thumbnail: https://miguelquispe.com/images/posts/crear-un-menu-responsive/banner-menu-responsive.jpg
---

## Crear la estructura básica del HTMl

{% include codeHeader.html file="index.html" %}
```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Menú responsive</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<!-- Aqui seguiremos con el contenido del menu -->
</body>
</html>
```

## La Barra de Navegación

El contenido del html será el siguiente para la barra de navegación:

{% include codeHeader.html file="index.html" %}
```html
<nav class="main-nav">
	<ul id="main-menu" class="main-menu">
		<li class="main-menu__item">
			<a href="" class="main-menu__link">Home</a>
		</li>
		<li class="main-menu__item">
			<a href="" class="main-menu__link">About</a>
		</li>
		<li class="main-menu__item">
			<a href="" class="main-menu__link">Blog</a>
		</li>
		<li class="main-menu__item">
			<a href="" class="main-menu__link">Contact</a>
		</li>
	</ul>
</nav>
```
{: .nolineno }

## Estilos CSS

{% include codeHeader.html file="style.css" %}
```css
body {
    margin: 0;
    background: #333;
    font-family: sans-serif;
}

.main-nav {
    position: relative;
}

.toggle-menu {
    position: absolute;
    top: 10px;
    left: 10px;
}


.main-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    align-items: center;
    background-color: lightsalmon;
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    transform: translateY(-100%);
    z-index: -1;
}


.main-menu__item {
    width: 100%;
    line-height: 3.2rem;
}

.main-menu__link {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.48rem;
}
.toggle-menu__checkbox {
    display: none;
}
.toggle-menu__checkbox:checked+#main-menu{
    transform: translateY(0);
    display: none;
}

@media (min-width: 768px) {
    .main-menu {
        /* flex-direction: row; */

    }
}
```
{: .nolineno }