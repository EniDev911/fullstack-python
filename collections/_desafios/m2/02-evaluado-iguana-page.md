---
layout: post
title: Desafío Iguana
modulo: m2
challenge: 2
type: evaluado
img_path: /assets/img/desafios/iguana/
show: true
show_next: true
folder_tree:
  - type: folder
    name: "iguana-page"
    open: true
    children:
      - type: file
        name: "index.html"
        icon: "fa-html5"
      - type: folder
        name: "assets"
        open: true
        children:
          - type: folder
            name: css
            children:
              - type: file
                name: "estilos.css"
                icon: "fa-css3-alt"
          - type: folder
            name: img
            children:    
              - type: file
                name: "bg-header.png"
                download_path: https://i.ibb.co/JjCD09h0/bg-header.png  
                icon: "image"
              - type: file
                name: "iguana-1.jpg"
                download_path: https://i.ibb.co/xt6HP64j/iguana-1.jpg  
                icon: "image"
              - type: file
                name: "iguana-2.jpg"
                download_path: https://i.ibb.co/JRd5r67X/iguana-2.jpg  
                icon: "image"
              - type: file
                name: "iguana-3.jpg"
                download_path: https://i.ibb.co/XZ7Q112X/iguana-3.jpg  
                icon: "image"
              - type: file
                name: "iguana-4.jpg"
                download_path: https://i.ibb.co/Zpqj86t1/iguana-4.jpg  
                icon: "image"
github:
  name: eniDev911/m2-evaluado-iguana-page
---

## __Contexto__

En este desafío, se nos pide crear una página web con los siguientes requerimientos:

- Aplicar correctamente las etiquetas semánticas de **HTML5**.
- Emplear correctamente los selectores en **CSS** ya sea para definir reglas por **id**, **clase** o **etiqueta**.
- Implementar estilos **CSS** para texto, color, fondo, alineación, imágenes y seguir el modelo de cajas, para la definición de aspectos visuales de una interfaz web.
- Implementar estilos **CSS**, utilizando las propiedades display, unidades de medida y estilos tipográficos avanzados.

Para lo anterior se nos proporciona la siguiente [maqueta](https://xd.adobe.com/spec/ae4025b8-0f4b-4775-4fd9-480cb31faa76-d871/){:target='_blank' class='link'}, te dejo también una ilustración compacta:

{: align='center' }
![img - iguana](https://enidev911.github.io/fullstackjsg33/src/public/images/png/iguana-page.png)

También contamos con un material de apoyo que podemos descargar [aquí]({{ page.img_path | relative_url | append: 'imagenes-iguana-page.zip' }}){: download='material-de-apoyo.zip' } :point_left:.

> El material de apoyo básicamente contiene las imágenes necesarias para trabajar en el desafío.
{: .prompt-note }

Para completar con éxito nuestro desafío, es fundamental mantener una organización adecuada de los archivos. Por ello, se recomienda utilizar una **estructura de assets** para trabajar, donde agrupemos los diferentes recursos del proyecto ordenadamente.

## __Estructura del proyecto 📂__

Al igual que en el desafío [{{ page.previous.title }}]({{ page.previous.url | relative_url }}), podemos usar el siguiente árbol de directorios basado en la **estructura assets**:

{% include folder-tree.html tree=page.folder_tree %}

## __Agregar Font Awesome 🎨__

Debemos añadir la librería para los íconos, lo podemos hacer a través de **CDN**, asegurémonos de poner la etiqueta `script`{:.tag} justo antes de la etiqueta de cierre del `body`{: .tag }:

{% include codeHeader.html icon="html" %}
{7}
```html
<!DOCTYPE html>
<html lang="es">
<head>
    ...
</head>
<body>
    <script src="https://kit.fontawesome.com/6b8f0c7049.js" crossorigin="anonymous"></script>
</body>
</html>
```

## __Agregar Google Fonts 🔠__

Otro de los requisitos es integrar la fuente [Raleway de Google fonts](https://fonts.google.com/specimen/Raleway){: target='_blank' class='link'} en las siguientes variantes:

- Raleway Light (300).
- Raleway Medium (500).

Una vez seleccionada las fuentes, las vinculamos dentro de `head`{: .tag } usando la etiqueta `link`{: .tag}:

{% include codeHeader.html icon="html" %}
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

## __Etiquetas semánticas__

Como en cada desafío nos piden utilizar correctamente las etiquetas semánticas. Es por ello que dispondremos de la siguiente forma la distribución de las etiquetas **HTML** (*en resumen*):

{% include codeHeader.html file='index.html' %}
{5 9 12 15 19}
```html
<!DOCTYPE html>
<html>
<body>
  <header>
	<!-- el header contiene la imagen grande -->
  </header>
  <main>
    <section>
      <!-- seccción de texto junto a la imagen -->
    </section>
    <section>
      <!-- sección de los iconos -->
    </section>
    <section>
      <!-- sección de la galería de imagenes -->
     </section>
  </main>
  <footer>
	<!-- el pie de página -->
  </footer>
</body>	
</html>
```
{: .nolineno }

## __Trabajar el Header__

Visto lo anterior, ya podemos entrar en tierra derecha, vamos a trabajar la siguiente parte de la maqueta:

![img - iguana]({{ page.img_path | relative_url | append: '01.png' }})

De esta forma podemos indentificar nuestro modelo de cajas que consiste en 3 cajas un `header`{: .tag} contenedor, un `h1`{:.tag} para el título y un `div`{:.tag} para la imagen grande que posicionaremos a través de **CSS**, por defecto las etiquetas antes mencionadas son **cajas de bloques** quiere decir que tienen su propiedad `display:block` lo que significa que utilizarán el 100% disponible de su contenedor.

> La maqueta del desafío te presentará algunas propiedades como el ancho y el alto en píxeles y eso complica las cosas para que el diseño se vea proporcional a cada pantalla. Por ello en lo que resta del desarrollo estaré usando unidades avanzadas que dependen del **viewport** (región visible de la página web en el navegador).
{: .prompt-warning }

Pasemos a ver el código, tenemos las siguientes tabs que nos permiten alternar y mirar el código que corresponde al **HTML** y **CSS** respectivamente:

{% tabs header_iguana %}
{% tab header_iguana html %}
En nuestro `index.html` seguido de la etiqueta `body`{:.tag} de apertura tendríamos que añadir lo siguiente:
{% include codeHeader.html file='index.html' codepen='y' title='Header Iguana Page' css=page.css.header %}
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
{% include codeHeader.html file='assets/css/style.css' %}
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
    background: url('../img/bg-header.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Si observaste bien al principio de la hoja de estilos, usamos un selector general como primera regla **CSS**, empleando el asterisco (`*`) y definimos algunas propiedades para que sean aplicadas a todos los elementos de la página y de esa forma tener un reseteo rápido de los estilos predeterminados de las etiquetas **HTML**:

{% include codeHeader.html icon="css" %}
```css
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
```
{: .nolineno }

Sin embargo entendamos mejor la parte de la imagen grande, que lo que hicimos fue usar el selector del elemento `div class="header__hero"`{:.tag} y establecer la imagen como fondo a través de la propiedad `background`:

{% include codeHeader.html icon="css" %}
```css
.header__hero {
	height: 100vh;
	background: url("../img/bg-header.jpg");
	background-size: 100% 100%; /* 👈 le decimos que use el 100% tanto en el eje x como en y */
	background-position: center;
	background-repeat: no-repeat; /* 👈 le decimos que si la imagen no es suficientemente grande su resolución no rellene repitiendo la misma */
}
```
{: .nolineno }

Lo demás no tiene mayor complejidad era simplemente centrar el título y darle algo de relleno, si observaste bien lo hice con medidas del **viewport** (al final obtendremos como una especie de folleto como resultado).

### Trabajando la sección de descripción e imagen

Ya podemos continuar con la siguiente sección. Pero antes que nada en el desafío se nos pide que debemos usar **clases específicas** por lo que nos sugiere que la sección use la clase con el nombre de `<section class="desc-section">` tal como se muestra a continuación:

![img - iguana]({{ page.img_path | relative_url | append: '02.png' }})

> Formas de alinear nuestras cajas en esta sección existen muchas, comenzando con la más sencilla que sería con flexbox (cosa que aquí no lo hare por la simple razón que no hemos entrado en esa materia).
{: .prompt-note }

Para tu buena suerte, te mostrare una forma muy sencilla (solía usar este truco en mis comienzos) que consiste en cambiar el display del elemento padre con el valor de `table`, para que se comporte como una tabla tradicional de html, pasemos a ver el código necesario en el **HTML** y **CSS** para luego comentarlo:

{% tabs desc_section %}
{% tab desc_section html %}
{% include codeHeader.html file='index.html' codepen='y' title='Iguana Page Section' css=page.css.desc %}
```html
<section class="desc-section">
	<div class="desc-section__text">
		<p>La iguana es un reptil perteneciente a la familia Iguanadiae. Su tamaño está entre los 15 cm hasta
			los 2 metros de largo y puede llegar a pesar unos 15 kg. Cuando están jóvenes tienen una coloración
			con tonos verdes y al ir madurando predomina un color grisáceo con crestas o espinas en su espalda.
		</p><br>
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
{% include codeHeader.html file='assets/css/style.css' %}
```css
.desc-section {
    padding: 3% 6%;
    display: table;
}

.desc-section__text {
    display: table-cell;
    width: 55%;
    font-size: 1.4vw;
    padding-right: 2.5vw;
    vertical-align: middle;
}

.desc-section__image {
    display: table-cell;
}

.desc-section__image img {
    width: 100%;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Como pudiste observar en el CSS, aplicamos los siguientes estilos para el contenedor `section class="desc-section"`{: .tag }: 

{% include codeHeader.html icon="css" %}
{2 3}
```css
.desc-section {
	padding: 3% 6%;
	display: table;
}
```
{: .nolineno }

Como vemos sólo hemos dado un relleno (*padding*) que en este caso se le asignó en porcentajes, un `3%` tanto arriba como abajo (eje Y) y un `6%` tanto a la izquierda como a la derecha (eje X), como estamos usando una etiqueta `section`{:.tag} no es necesario establecer un ancho, ya que al ser un elemento de bloque usará el `100%`.

> Aquí también se podría definir una altura (*height*) para que delimitemos la zona en la que vamos a trabajar. Para este ejemplo vamos a ignorarlo y trabajaremos con los tamaños de los elementos hijos y el padre adoptará automáticamente la altura adecuada.
{: .prompt-note }

Luego como mencionaba anteriormente, estamos asignando el valor `table` a la propiedad `display`, ya que, de esta forma será más fácil posicionar los elementos hijos, aprovechando el comportamiento de una tabla.

Sigamos pasemos a revisar los estilos del primer hijo:

{% include codeHeader.html icon="css" %}
{2 3 6}
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

Como podemos observar el valor de la propiedad `display` para este elemento es `table-cell`, que se utiliza para crear una **celda** y como también hemos especificado la propiedad `width` para que ocupe un `55%` del ancho disponible. Luego asignamos un tamaño de fuente que ya sabemos, lo hacemos con medidas relativas al **viewport** asi mismo para el `padding-right` ya que de esta forma no se verá pegada a la imagen, finalmente con la propiedad `vertical-align` podemos posicionar el contenido al medio con el valor `middle`.

Con lo anterior ya hicimos todo, ahora vamos revisar los estilos para el contenedor de la imagen:

{% include codeHeader.html icon="css" %}
```css
.desc-section__image {
	display: table-cell;
}
```
{: .nolineno }

En realidad ni siquiera era necesario haber puesto la propiedad anterior, pero por temas de entendimiento vamos a dejar la propiedad `display` en `table-cell` para mantener el contexto de tabla y por ende este contenedor sería la segunda columna o celda, además decirte que no es necesario definir ninguna otra propiedad ya que automáticamente toma el resto de ancho y alto disponible (comportamiento de una tabla).

Lo que nos resta en esta sección es la imagen y que si o si aquí debemos definir las siguientes propiedades:

{% include codeHeader.html icon="css" %}
{2 3}
```css
.desc-section__image img {
	width: 100%;
	height: 100%;
}
```
{: .nolineno }

> Si no establecemos ancho y alto en la imagen tomará sus medidas absolutas de acuerdo a su resolución.
{: .prompt-note }

### Trabajando la sección de características

Seguimos con la sección de los íconos, aquí para entender mejor vamos a ver la siguiente ilustración:

![img - iguana]({{ page.img_path | relative_url | append: '03.png' }})


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

Ya como podemos observar en esta sección vamos a requerir el uso de más etiquetas para poner lo necesario. Pasemos a ver el código **HTML** y **CSS**

{% tabs icon_section %}
{% tab icon_section html %}
{% include codeHeader.html file='index.html' codepen='y' title='Iguana Page Icon Section' css=page.css.icons fa=true %}
```html
<div class="icons-section">
	<h2 class="icons-section__title">Características</h2>
	<ul class="icons-section__content">
		<li>
			<i class="far fa-eye"></i>
			<div>Tercer ojo</div>
		</li>
		<li>
			<i class="far fa-hand-peace"></i>
			<div>Pacíficas</div>
		</li>
		<li>
			<i class="fas fa-paint-brush"></i>
			<div>Cambian de color</div>
		</li>
	</ul>
</div>
```
{: .nolineno }
{% endtab %}
{% tab icon_section css %}
{% include codeHeader.html file='style.css' %}
```css
.icons-section {
	background: #1E1A13;
	text-align: center;
	padding: 4% 0;
}

.icons-section__title {
	font-size: 4vw;
	text-transform: uppercase;
	font-weight: normal;
	margin-bottom: 3vw;
}

.icons-section__content {
    list-style: none;
}

.icons-section__content li {
    display: inline-block;
    margin: 0 3vw;
}

.icons-section__content li i {
	font-size: 6vw;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Como podemos observar tenemos en la etiqueta contenedora los siguientes estilos:

{% include codeHeader.html icon="css" %}
{2 3}
```css
.icons-section {
	background: #1E1A13;
	text-align: center;
	padding: 4% 0;
}
```
{: .nolineno }

Definimos el color de fondo que se corresponde con el de la maqueta y en formato hexadecimal tal cual se nos pide en el desafío. Luego tenemos la propiedad `text-align: center` que al igual como lo hemos hecho en los títulos pondrá el contenido centrado y esto nos permite así centrar tanto el contenido del título como el resto de elementos hijos.

{% include codeHeader.html icon="css" %}
```css
.icons-section__title {
	font-size: 4vw;
	text-transform: uppercase;
	font-weight: normal;
	margin-bottom: 3vw;
}
```
{: .nolineno }

En el título simplemente le hemos definido el tamaño de fuente, formatear el contenido para que se vea en mayúscula, cambiamos el ancho de la fuente que para las etiquetas `h1`{: .tag} hasta la `h6`{: .tag} que por defecto el ancho o peso (*weight*) es **bold** (700) para que sea **normal** (400) y por último aplicamos un `margin-bottom: 3vw` para que separemos el título del contenido.

Después tenemos lo siguiente:

{% include codeHeader.html icon="css" %}
{2}
```css
.icons-section__content {
    list-style: none;
}
```
{: .nolineno }

Como sabemos las etiquetas de listas como `ul`{: .tag } vienen con una viñeta para cada item de la lista es por ello que con la propiedad `list-style: none` le estamos quitando esa viñeta que viene por defecto.

Para que nuestros íconos con su respectivo texto, se vean uno al lado del otro tuvimos que añadir lo siguiente a las etiquetas `li`{: .tag }

{% include codeHeader.html icon="css" %}
{2 3}
```css
.icons-section__content li {
    display: inline-block;
    margin: 0 3vw;
}
```
{: .nolineno }

Sin embargo para que no se vieran tan juntos añadimos un margen con `margin: 0 3vw` para que sea la misma cantidad tanto de la izquierda y derecha.

Luego tenemos que aumentar el tamaño de los íconos con las siguiente propiedad:

{% include codeHeader.html icon="css" %}
{2}
```css
.icons-section__content li i {
	font-size: 6vw;
}
```
{: .nolineno }

Y por último aumentamos el tamaño de los textos:

{% include codeHeader.html icon="css" %}
{2}
```css
.icons-section__content li div {
	font-size: 2.4vw;
}
```
{: .nolineno }

### Trabajando la sección de la galería de imágenes

Podemos pasar a la siguiente sección donde tenemos que poner las imágenes de las iguanas como lo muestra la maqueta, veamos la siguiente ilustración para ver la estructura a utilizar:

![img - iguana]({{ page.img_path | relative_url | append: '04.png' }} )

Como siempre tenemos el siguiente código que luego comentamos:

{% tabs gallery_section %}
{% tab gallery_section html %}
{% include codeHeader.html file='index.html' %}
```html
<section class="gallery-section">
	<div class="gallery-section__box">
		<img
		src="./assets/img/iguana-2.jpg"
		alt="imagen de iguana"
		title="iguana de mar">
	</div>
	<div class="gallery-section__box">
		<img
		src="./assets/img/iguana-3.jpg"
		alt="imagen de iguana"
		title="iguana terrestre"
		>
	</div>
	<div class="gallery-section__box">
		<img
		src="./assets/img/iguana-4.jpg"
		alt="imagen de iguana"
		title="familia de iguanas">
	</div>
</section>
```
{: .nolineno }
{% endtab %}
{% tab gallery_section css %}
{% include codeHeader.html file='style.css' %}
```css
.gallery-section {
	display: table;
	padding: 4% 6%;
	border-spacing: 1vw;
}

.gallery-section__box {
	display: table-cell;
	width: 33%;
	height: 20vw;
}

.gallery-section__box img {
	width: 100%;
	height: 100%;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Como te mencionaba, formas de alinear hay muchas, yo opte por repetir la técnica de `display: table` en el contenedor:

{: align='center' }
![img - gif](https://c.tenor.com/oWKq4IvxM-4AAAAC/tenor.gif){:height='180'}

{% include codeHeader.html icon="css" %}
{2 3 4}
```css
.gallery-section {
	display: table;
	padding: 4% 6%;
	border-spacing: 1vw;
}
```
{: .nolineno }

Si te fijas, tenemos lo mismo que en secciones anteriores, el mismo relleno (*padding*), pero sin embargo ahora tenemos la propiedad `border-spacing: 1vw` que es la forma de crear un espaciador entre los elementos hijo que se configuren como celda.

Luego vamos a darle los estilos, como ancho y altura para los elementos contenedores de las imágenes, que se comportarán como las columnas de la tabla:

{% include codeHeader.html icon="css" %}
{3 4}
```css
.gallery-section__box {
	display: table-cell;
	width: 33%;
	height: 20vw;
	overflow: hidden;
}
```
{: .nolineno }

Y por último tenemos que ajustar las imágenes para que ocupen el 100% de su contenedor:

{% include codeHeader.html icon="css" %}
{2 3 4}
```css
.gallery-section__box img {
	width: 100%;
	height: 100%;
	transition: transform .5s ease;
}
```
{: .nolineno }

> El poner las imágenes dentro de una etiqueta `div`{: .tag} es opcional ya que podemos establecer un ancho y alto con los atributos *width* y *height* respectivamente en las etiquetas `img`{: .tag }
{: .prompt-note }

Pero lo mejor es tener nuestras imágenes en otros contenedores así nos da la posibilidad de hacer algunos efectos muy simple como una transición que cuando se pase el mouse por encima de cada imagen (*hover*) escalamos su tamaño original, tal como lo muestra el código anterior con la propiedad `transition: transform .5s ease`:

{% include codeHeader.html icon="css" %}
{2}
```css
.gallery-section__box img:hover {
	transform: scale(1.3);
}
```
{: .nolineno }

### Trabajando el footer de la página

Hemos llegado quizás a la parte más sencilla de la página valga la redundancia al pie de página, solo es cosa de ver el **HTML** y **CSS** y te darás cuenta que está pasando:

{% tabs footer_iguana %}
{% tab footer_iguana html %}
{% include codeHeader.html file="index.html" %}
```html
<footer>
	Visita <a href="https://www.anipedia.net/iguanas/iguana-verde/" target="_blank"
	title="abrir en una nueva pestaña">https://www.anipedia.net/iguanas/iguana-verde/</a> para conocer más.
</footer>
```
{: .nolineno }
{% endtab %}
{% tab footer_iguana css %}
{% include codeHeader.html file="style.css" %}
```css
footer {
    background-color: #1E1A13;
    text-align: center;
    font-size: 1.5vw;
    padding: 2% 0;
}

footer a {
    text-decoration: none;
    color: #fff;
    transition: color .3s ease;
}

footer a:visited {
    color: #cac;
}

footer a:hover {
    color: peru;
}
```
{: .nolineno  }
{% endtab %}
{% endtabs %}


## __Repositorio__

{% include repository.html repo=page.github %}

---

## __Recursos Adicionales__

- [Configurar el Kit de FontAwesome](https://docs.fontawesome.com/web/setup/use-kit){: target='_blank' }
- [Artículo de la MDN sobre el modelo de cajas](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Box_model){:target='_blank'}: La MDN (Mozilla Developer Network) es un sitio web de Mozilla que documenta tecnologías web.