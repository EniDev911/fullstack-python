---
layout: post
title: Desafío Curriculum Vitae
modulo: m2
type: evaluado
show: true
show_next: true
img_path: /assets/img/desafios/curriculum/
github:
  name: eniDev911/m2-evaluado-curriculum
---

## Descripción

En este desafío nos piden armar un **CV** en **HTML** utilizando una estructura organizada y las etiquetas semántica correspondiente. Para ello nos dan la siguiente imagen como referencia para el desarrollo:

{: align="center" }
![img ronaldo]({{ page.img_path | relative_url | append: 'referencia.png'}}){: .w-100 .w-lg-50 .card }

---

## Desarrollo

Para cumplir con éxito el desafío, vamos a ir paso a paso para ir clarificando cada tema y dejando algunas sugerencias o recomendaciones.

### Estructura del proyecto

Cuando estamos trabajando en un sitio web de forma local, debemos mantener todos los archivos relacionados en un solo directorio o carpeta. Este directorio se puede crear en el lugar que desees, pero te recomiendo encarecidamente que lo hagas en algún lugar donde lo puedas encontrar fácilmente, tal vez en el escritorio.

> **Recomendacion**:<br>Elige un lugar para almacenar los proyectos de tus sitios web. **Ej**: crea un directorio llamado **proyectos_web** (o algo similar). Aquí vivirán todos los proyectos que vayas creando.
{: .prompt-success }

La estructura del proyecto es fundamental, veamos como estructurar nuestro proyecto. Pensemos en las cosas más comunes que encontramos en cualquier proyecto web simple:

- Un archivo html principal (Ej: *`index.html`*)
- Directorio para contener las imágenes (Ej: *`portada.jpg`* o *`portada.png`*)
- Directorio para contener archivos de estilos (Ej: *`estilo.css`*)
- Directorio para contener archivos script (Ej: *`funciones.js`*)

De esta forma, podemos tener nuestro proyecto bien organizado, además es común ver que todos los directorios relacionados con las hojas de estilos, scripts e imágenes se encuentran a su vez dentro de un directorio llamado **assets**.

Para nuestro proyecto **CV** vamos a crear entonces el siguiente árbol de directorios y archivos:

```
📂 curriculum/
├─ 📂 assets/
│  ├─ 📁 css/
│  ├─ 📁 js/
│  └─ 📂 img/
│     └─ foto.jpg
└─ index.html
```
{: .nolineno }


> Busca la foto que desees para colocar en el directorio `img`. En [https://robohash.org/](https://robohash.org/){: target='_blank' } puedes conseguir algunas imágenes de buena calidad basados en robots y más.
{: .prompt-note }

### Cabecera de un documento HTML

Como sabemos  la estructura de un documento HTML debía contener siempre dos etiquetas principales:

- La cabecera de la página ( `head`{:.tag} )
- El cuerpo de la página ( `body`{:.tag} )

El primero de ellos, se encarga de contener [etiquetas de metadatos](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML){: target="_blank" } (*información sobre el documento*) así como establecer **relaciones con otros documentos** y el segundo se encarga de la parte visual que se mostrará al usuario en el navegador. Veamos la siguiente ilustración que muestra las etiquetas principales de cualquier documento **HTML5**:

![img doc html](https://enidev911.github.io/fullstackjsg33/guias/html/guia-general/images/estructura-documento.png){: .rounded }

Existen varias etiquetas que podemos utilizar en esta sección de cabecera del documento:

{: .table.table-dark }
|Etiqueta|Atributos|Descripción|
|:-------|:--------|:----------|
|`title`{:.tag}||Título de la página.|
|`base`{:.tag}|*`href`*, *`target`*|URL base del documento.|
|`link`{:.tag}|*`href`*, *`hreflang`*, *`rel`*, *`media`*, *`type`*|Establece una relación del documento actual con otro externo.|
|`meta`{:.tag}|*`name`*,*`content`*,*`http-equiv`*,*`charset`*|Establece un metadato un metadato específico en el documento actual.|


También en la cabera se suele utilizar las etiquetas **Open Graph** que permiten destacar más nuestro sitio o página web.

### ¿Qué es Open Graph?

¿Te haz preguntado como es que cuando compartes una página, un blog, un video de YouTube o una canción de Spotify aparece una silueta de una tarjeta junto una imagen con su título?

Desde el año 2010, facebook introdujo el [protocolo Open Graph](https://ogp.me/){:target='_blank'} que permite que cualquier página web se pueda convertir en un objeto gráfico.

Un ejemplo de ello, es el siguiente:

{% tabs opg %}
{% tab opg html %}
{% include codeHeader.html icon="html" %}
{3 4 5 6 7}
```html
<html prefix="og: https://ogp.me/ns#">
<head>
  <meta property="og:title" content="Marco Contreras - Curriculum Vitae">
  <meta property="og:type" content="website" />
  <meta property="og:description" content="Curriculum Vitae - Programador FullStack" />
  <meta property="og:url" content="https://enidev911.github.io/curriculum">
  <meta property="og:image" content="https://enidev911.github.io/curriculum/perfil.png">
  ...
</head>
  ...
</html>
```
{% endtab %}
{% tab opg compartido en whatsapp %}
![img - opg whatsapp]({{ '/assets/img/ws-opg.png' | relative_url }}){:height='180'}
{% endtab %}
{% tab opg compartido en facebook %}
![img - opg facebook]({{ '/assets/img/fb-opg.png' | relative_url }}){:height='180' width='380'}
{% endtab %}
{% endtabs %}

### Etiquetas meta para describir la página

A pesar de que los motores de búsqueda como [Google](//google.com){:target='_blank'} analizan el contenido de la página para determinar automáticamente el fragmento adecuado para la descripción. También puede usar la información descriptiva del elemento `<meta name="description">` si resulta más apropiado que otras partes del contenido.

{% include codeHeader.html icon="html" %}
{3}
```html
<head>
  ...
	<meta name="description" content="Contenido relacionado de la página" />
  ...
</head>
```

> Una descripción meta es una información importante para los motores de búsqueda y los usuarios.
{: .prompt-note }

### Favicon (icono de pestaña)

Cuando tenemos varias pestañas en nuestro navegador, para una búsqueda más fácil e intuitiva entre pestañas, el navegador suele colocar iconos a la izquierda del título de las pestañas. Estos iconos son conocidos como **favicons** (*iconos favoritos*) ya que [fue un invento de Internet Explorer](https://es.wikipedia.org/wiki/Favicon#:~:text=La%20forma%20original%20de%20definir%20un%20favicono%20era%20poniendo%20un%20archivo%20llamado%20favicon.ico%20en%20el%20directorio%20ra%C3%ADz%20del%20servidor%20web%2C%20el%20cual%20era%20mostrado%20autom%C3%A1ticamente%20en%20los%20favoritos%20de%20Internet%20Explorer){:target='_blank'} para colocar icono cuando el usuario añadía una página a favoritos.

Para generar los favicons de una forma más comoda, podemos utilizar herramientas como [Real Favicon Generator](https://realfavicongenerator.net/){:target='_blank'}, donde podemos pasarle una imagen de alta resolución y nos genera un paquete **.zip** con los archivos y el código necesario para las diferentes versiones y resoluciones de los íconos. Ejemplo de ello sería el siguiente código:

{% include codeHeader.html icon="html" %}
{3 4 5 6 7}
```html
<head>
  ...
  <link rel="shorcut icon" href="/favicon.ico" /><!-- HTML4 -->
  <link rel="icon" sizes="64x64" href="/favicon.png" /><!-- HTML5 -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" /><!-- iPhone/iPad -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  ...
</head>
```

> **Ojo**:<br>Según la estructura que tenga el proyecto, se deben afinar los vínculos hacia los archivos.
{: .prompt-warning }


<div class="row g-3 my-3">
  <div class="col-12 col-md-6">
    <img src="{{ '/assets/img/favicon-light.png' | relative_url }}" alt="favicon light">
  </div>
  <div class="col-12 col-md-6">
    <img src="{{ '/assets/img/favicon-dark.png' | relative_url }}" alt="favicon dark">
  </div>
</div>


> El problema principal con los **favicons**, es que esta característica no está definida en la especificación, por lo que cada navegador y cada sistema operativo lo implementa como quiere. Hay navegadores que sólo soportan favicon en formato **PNG**, otros que solo soportan resoluciones específicas, etc.
{: .prompt-note }


> **Recomendación**<br>Si quieres íconos para utilizar en tus proyectos, te recomiendo las siguientes páginas: [Icons8](https://iconos8.es/){: target='_blank' }, [FlatIcon](https://www.flaticon.es/){: target='_blank' }
{: .prompt-success }

### Encabezado

En la parte principal del curriculum, vamos agrupar el título, nuestra foto de perfil y un subtítulo en lo que sería nuestro encabezado mediante la etiqueta `header`{:.tag}:

{% include codeHeader.html file='index.html' codepen="y" %}
```html
<!-- header  -->
<header>
	<h1>Curriculum Vitae</h1>
	<img src="./assets/img/perfil.png" width="260" alt="cv photo">
	<h2>Marco Contreras</h2>
</header>
```
{: .nolineno }

### Contenido

Dentro del contenido principal vamos a estar utilizando básicamente secciones para cada apartado como sería los **datos personales**, **formación académica**, **experiencia**, **información complementaria**, etc. Un ejemplo de ello sería lo siguiente:

{% include codeHeader.html file="index.html" codepen="y" %}
{5 6 7 8 9 10}
```html
<header>
  ...
</header>
<main>
  <section>
    <h3>Título</h3>
    <p>Párrafo</p>
    <blockquote>Notas</blockquote>
    <ul></ul>
  </section>
  <section>
    ....
  </section>
</main>
```

### Estilos para imprimir @media print

Este es un punto que se suele pasar por alto cuando se crean páginas o sitios web, y es poner un estilo específico para cuando alguien quiera imprimir y para nuestro curriculum sería positivo.

Al menos hay que tener en cuenta lo siguiente cuando se define un estilo para imprimir:

- Eliminar todo el contenido irrelevante como botones, menús, anuncios, etc.
- Al imprimir se pierde la interactividad y por lo tanto hay que tener en cuenta que los enlaces generalmente no muestran la **url**, y si tenemos enlaces debemos mostrar esas **url**.
- Centrar el título principal y subtítulo, eliminar emojis y caracteres raros.

Un ejemplo de lo anterior sería:

{% include codeHeader.html file='assets/css/print.css' %}
```css
@media print {
	body, section {
		color: #342;
		font-family: sans-serif;
	}
	h1, h2 {
		text-align: center;
	}
	img, button, footer {
		display: none;
	}
	a {
		text-decoration: none;
	}
	a[href^='https']:after {
		content: " (" attr(href) ")"; /* mostramos la url del enlace */
	}
}
```

Luego debemos vincular ese archivo desde nuestro HTML:

{% include codeHeader.html file="index.html" %}
{3}
```html
<head>
  ...
  <link rel="stylesheet" href="assets/css/print.css">
</head>
```

---

## Repositorio

{% include repository.html repo=page.github %}


*[CV]: Curriculum Vitae
*[HTML]: HyperText Markup Language