---
layout: post
title: Desafío Iguana
modulo: m2
challenge: 2
type: evaluado
image_path: '/assets/img/desafios/iguana'
show: true
---

## Descripción

En este desafío se nos pide los siguientes requerimientos:

- Aplicar correctamente las etiquetas semánticas de HTML5.
- Emplear correctamente los selectores en CSS ya sea para definir reglas por `id`, `clase` o `etiqueta`.
- Implementar estilos CSS para texto, color, fondo, alineación, imágenes y seguir el modelo de cajas, para la definición de aspectos visuales de una interfaz web.
- Implementar estilos CSS, utilizando las propiedades display, unidades de medida y estilos tipográficos avanzados.

Para lo anterior se nos proporciona la siguiente [maqueta](https://xd.adobe.com/spec/ae4025b8-0f4b-4775-4fd9-480cb31faa76-d871/){:target='_blank' class='link'}, te dejo también una ilustración compacta:

{: align='center' }
![img - iguana](https://enidev911.github.io/fullstackjsg33/src/public/images/png/iguana-page.png)

También contamos con un material de apoyo que podemos descargar [aquí](./Apoyo-Iguana-Page.zip){: download='material-de-apoyo.zip' }

> El material de apoyo básicamente contiene las imágenes necesarias para trabajar el desafío.

---

## Estructura del proyecto

```bash
📂 iguana-page
├── 📂 assets
│   ├── 📂 css # 👈 para las hojas de estilos
│   ├── 📂 img # 👈 para las imágenes
│   └── 📂 favicon # 👈 para los favicon
└── index.html # página principal
```
{: .nolineno }

---

## Desarrollo

### Integrar la librería  Font Awesome

Debemos añadir la librería, lo podemos hacer a través **CDN**, aseguremonos de poner el script justo antes de la etiqueta de cierre del `body`{: .tag }:

{9}
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iguana Page</title>
</head>
<body>
    <script src="https://kit.fontawesome.com/6b8f0c7049.js" crossorigin="anonymous"></script>
</body>
</html>
```
{: .nolineno }

### Añadir la fuente Raleway de Google Font

Otro de los requisitos es integrar la fuente [Raleway de Google fonts](https://fonts.google.com/specimen/Raleway){: target='_blank' class='link'} en las siguientes variantes:

- Raleway Light (300).
- Raleway Medium (500).

Una vez seleccionada las fuentes, las vinculamos dentro de la eqtiqueta `head`{: .tag }:

{6 7 8}
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&display=swap" rel="stylesheet">
    <title>Iguana Page</title>
</head>
<body>
    <script src="https://kit.fontawesome.com/6b8f0c7049.js" crossorigin="anonymous"></script>
</body>
</html>
```

### Etiquetas semánticas

Como en cada desafío nos piden utilizar correctamente las etiquetas semánticas. Es por ello que dispondre de la siguiente manera la estructura del **HTML**:

{% include codeHeader.html file='index.html' %}
```html
<!DOCTYPE html>
<html>
<body>
  <header>
	<!-- ... -->
  </header>
  <main>
    <section>
      <!-- ... -->
    </section>
    <section>
      <!-- ... -->
    </section>
    <section>
      <!-- ... -->
     </section>
  </main>
  <footer>
	<!-- ... -->
  </footer>
</body>	
</html>
```
{: .nolineno }

### Trabajando el header

Visto lo anterior, ya podemos entrar en tierra derecha, vamos a trabajar la siguiente parte de la maqueta:

![img - iguana]({{ page.image_path | relative_url }}/01.png)

De esta forma podemos indentificar nuestro modelo de cajas que consiste en 3 cajas un `header`{: .tag} contenedor, un `h1`{:.tag} para el título y un `div`{:.tag} para la imagen grande que posicionaremos a través de CSS, por defecto las etiquetas antes mencionadas son **cajas de bloques** quiere decir que utilizarán el 100% de su contenedor.

> **Ojo**:<br>La maqueta del desafío te presentará algunas propiedades como el ancho y el alto en píxeles y eso complica las cosas para que el diseño se vea proporcional a cada pantalla. Por ello en lo que resta del desarrollo estaré usando unidades avanzadas que dependen del **viewport** (región visible de la página web en el navegador).

Pasemos a ver el código, tenemos las siguientes tabs que nos permiten alternar y mirar el código corresponden al html y al css:

{% tabs header_iguana %}
{% tab header_iguana html %}
Nuestro html tendría que contener lo siguiente:
{% include codeHeader.html icon='html' %}
```html
<!-- header -->
<header class="header">
	<h1 class="header__title">iguanas</h1>
	<div class="header__hero"></div>
</header>
```
{: .nolineno }
{% endtab %}
{% tab header_iguana css %}
En nuestro archivo `assets/css/style.css` tendría que contener lo siguiente:
{% include codeHeader.html icon='css' %}
```css
/* GENERAL */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Raleway', sans-serif, monospace;
	background: #000;
	color: #fff;
}

/*HEADER PAGE*/

.header {
	width: 100%;
	height: auto;
}

.header__title {
	text-align: center;
	text-transform: uppercase;
	font-size: 4.5vw;
	padding: 30px 0;
}

.header__hero {
	display: block;
	height: 100vh;
	background: url("../img/bg-header.jpg");
	background-size: 100% 100%;
	background-position: center;
	background-repeat: no-repeat;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Si observaste bien al principio de la hoja de estilos, usamos un selector general y aplicamos algunas propiedades para hacer un reseteo rápido a la página:

```css
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
```
{: .nolineno }

Sin embargo entendamos mejor la parte de la imagen grande, que lo que hicimos fue usar el selector del elemento `div class="header__hero`{:.tag} e establecer la imagen como background:

```css
.header__hero {
	height: 100vh;
	background: url("../img/bg-header.jpg");
	background-size: 100% 100%; /* 👈 le decimos que use el 100% tanto en el eje x como en y */
	background-position: center;
	background-repeat: no-repeat; /* 👈 le decimos que si la imagen no es suficiente grande no rellene repitiendo la misma */
}
```
{: .nolineno }

Lo demás no tiene mayor complejidad era simplemente centrar el título y darle algo de relleno, si observaste bien lo hice con medidas del **viewport** (al final obtendremos como una especie de folleto como resultado).


### Trabajando la sección de descripción e imagen

Ya podemos continuar con la siguiente sección. Pero antes que nada en el desafío se nos pide que debemos usar **clases específicas** por lo que nos sugiere que la sección use la clase con el nombre de `<section class="desc-section">` tal como se muestra a continuación:

![img - iguana]({{ page.image_path | relative_url }}/02.png)



> **Nota**<br>Formas de alinear nuestras cajas en esta sección existen muchas, comenzando con la más sencilla que sería con flexbox (cosa que aquí no lo hare por la simple razón que no hemos entrado en esa materia).

Para tu buena suerte, te mostrare una forma muy sencilla (solía usar este truco en mis comienzos) que consiste en cambiar el display del elemento padre con el valor de `table`, para que se comporte como una tabla tradicional de html, pasemos a ver el código necesario en el **HTML** y **CSS** para luego comentarlo:

{% tabs desc_section %}
{% tab desc_section html %}
{% include codeHeader.html icon='html' %}
```html
<section class="desc-section">
	<div class="desc-section__text">
		<p>La iguana es un reptil perteneciente a la familia Iguanadiae. Su tamaño está entre los 15 cm hasta
			los 2 metros de largo y puede llegar a pesar unos 15 kg. Cuando están jóvenes tienen una coloración
			con tonos verdes y al ir madurando predomina un color grisáceo con crestas o espinas en su espalda.
		</p>
		<p>
			La alimentación de la iguana va variando según su etapa de vida, pero la mayor parte de sus años son
			herbívoras. Viven en lugares tropicales con mucha vegetación y es un animal que puede ser
			domesticado.
		</p>
	</div>
	<div class="desc-section__image">
		<img
		src="./assets/img/iguana-1.jpg"
		alt="imagen de iguana"
		class="desc-section__image"
		title="Iguana verde">
	</div>
</section>
```
{: .nolineno }
{% endtab %}
{% tab desc_section css %}
{% include codeHeader.html icon='css' %}
```css
.desc-section {
	padding: 3% 6%;
	display: table;
}

.desc-section__text {
	display: table-cell;
	width: 55%;
	font-size: 1.4vw;
	padding-left: 2.5vw;
	vertical-align: middle;
}

.desc-section__image {
	display: table-cell;
}

.desc-section__image img {
	width: 100%;
	height: 100%;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Como pudiste observar en el CSS, aplicamos los siguientes estilos para el contenedor `section class="desc-section"`{: .tag }: 

```css
.desc-section {
	padding: 3% 6%;
	display: table;
}
```
{: .nolineno }

Como vemos sólo hemos dado un relleno (*padding*) que en este caso se le asignó en procentajes, un `3%` tanto arriba como abajo (eje Y) y un `6%` tanto a la izquierda como a la derecha (eje X), como estamos usando una etiqueta `section`{:.tag} no es necesario establecer un ancho, ya que al ser un elemento de bloque usará el `100%`.

> Aquí también se podría definir una altura (*height*) para que delimitemos la zona en la que vamos a trabajar. Para este ejemplo vamos a ignorarlo y trabajaremos con los tamaños de los elementos hijos y el padre adoptará automáticamente la altura adecuada.

Luego como mencione anteriormente estamos asignando el valor `table` a la propiedad `display`, ya que de esta forma será más fácil posicionar los elementos hijos aprovechando el comportamiento de una tabla.

Sigamos pasemos a revisar los estilos del primer hijo:

```css
.desc-section__text {
	display: table-cell;
	width: 55%;
	font-size: 1.4vw;
	padding-right: 2vw;
	vertical-align: middle;
}
```
{: .nolineno }

Como podemos observar el valor de la propiedad `display` para este elemento es `table-cell`, que se utiliza para crear una **celda** y como también hemos especificado la propiedad `width` para que ocupe un `55%` del ancho disponible. Luego asignamos un tamaño de fuente que ya sabemos lo hacemos con medidas relativas al **viewport** asi mismo para el `padding-right` ya que de esta forma no se verá pegada a la imagen, finalmente con la propiedad `vertical-align` podemos posicionar el contenido al medio con el valor `middle`.

Con lo anterior ya hicimos todo, ahora vamos revisar los estilos para el contenedor de la imagen:

```css
.desc-section__image {
	display: table-cell;
}
```
{: .nolineno }

En realidad ni siquiera era necesario haber puesto la propiedad anterior, pero por temas de entendimiento vamos a dejar el display en `table-cell` para mantener el contexto de tabla y por ende este contenedor sería la segunda columna o celda, además decirte que no es necesario definir ninguna otra propiedad ya que automáticamente toma el resto de ancho y alto disponible.

Lo que nos resta en esta sección es la imagen y que si o si aquí debemos definir las siguientes propiedades:

```css
.desc-section__image img {
	width: 100%;
	height: 100%;
}
```
{: .nolineno }

> **OJO**<br>Si no establecemos ancho y alto en la imagen tomará sus medidas absolutas de acuerdo a su resolución.


### Trabajando la sección de características

#### Iconos requeridos

Los iconos que se utilizan son los siguientes:

<div class="row justify-content-evenly my-3">
	<div class="col-4">
		<div class="mini_card mb-3">
			<i class="far fa-eye fs-3"></i>
		</div>
	</div>
	<div class="col-4">
		<div class="mini_card">
			<i class="far fa-hand-peace fs-3"></i>
		</div>	
	</div>
	<div class="col-4">
		<div class="mini_card">
			<i class="fas fa-paint-brush fs-3"></i>
		</div>
	</div>
</div>

{% include codeHeader.html icon='html' %}
```html
<!-- far fa-eye -->
<i class="far fa-eye"></i>
<!-- far fa-hand-peace -->
<i class="far fa-hand-peace"></i>
<!-- fas fa-paint-brush -->
<i class="fas fa-paint-brush"></i>
```
{: .nolineno }



---

## Resultado

{% tabs iguana %}
{% tab iguana html %}
{% include codeHeader.html file='index.html' %}
```html
{{ site.data.m2.iguana.html }}
```
{% endtab %}
{% tab iguana css %}
{% include codeHeader.html file='style.css' %}
```css
{{ site.data.m2.iguana.css }}
```
{% endtab %}
{% tab iguana resultado %}
{% include ifr_results.html 
  src=site.data.m2.iguana.url %}
{% endtab %}
{% endtabs %}