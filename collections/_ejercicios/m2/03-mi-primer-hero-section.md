---
layout: post
title: Mi primer Hero Section
subtitle: Ejercicio Guiado - Día 04
modulo: m2
type: ejercicio
show: true
toc: false
show_next: true
css:
  ej_1: |-
    #wrapper {
      background-image: url(../img/bg-hero.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
---

En este ejercicio aprenderemos a crear un **Hero-Section** aplicando los estilos a textos y fondos con las propiedades de fuentes y background respectivamente.

Para este ejercicio ocuparemos el siguiente bloque de código HTML:

{% include codeHeader.html icon="html" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hero Section</title>
</head>
<body>
  <header>
    <h1>Descubre lo último en tecnología bebiendo café</h1>
    <h3>Charlas, eventos y simposios sobre tecnología</h3>
  </header>
</body>
</html>
```
{: .nolineno }

Asignemos el fondo a la etiqueta `header`{: .tag } utilizando la dirección una imagen, un posicionamiento centrado, un tamaño autoajustable y evitamos que se repita la imagen:

{% include codeHeader.html icon="css" %}
```css
header {
    background-image: url(../img/bg-hero.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
```
{: .nolineno }

El texto del Hero Section es blanco, tiene sombra, una tipografía específica y está alineado a la derecha, para esto ocupemos las propiedades **color**, **text-align**, **font-family** y una cuarta propiedad **text-shadow**:

{% include codeHeader.html icon="css" %}
```css
header {
    background-image: url(../img/bg-hero.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
     /* Propiedades Agregadas */
    font-family: Open sans;
    text-shadow: 0px 3px 6px black;
    text-align: right;
    color: white;
}
```
{: .nolineno }

Para apuntar al encabezado `h1`{: .tag } de nuestro header, utilizaremos la especificidad CSS, en donde declaramos de forma horizontal la jerarquía de los elementos, siendo este encabezado parte del `header`{: .tag }, declaramos entonces los estilos de la siguiente manera:

{% include codeHeader.html icon="css" %}
```css
header h1 {
  font-size: 60px;
}
```
{: .nolineno }

Ahora solo falta definir el tamaño del `h3` de nuestro Hero Section, el cual tiene un tamaño de **60px**. Quedando de la siguiente manera:

{% include codeHeader.html icon="css" %}
```css
header h3 {
  font-size: 40px;
  font-weight: lighter;
}
```
{: .nolineno }

