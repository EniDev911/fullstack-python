---
layout: post
title: Curriculum Vitae en HTML
modulo: m2
type: evaluado
show: true
show_next: true
img_path: /assets/img/desafios/curriculum/
github:
  name: eniDev911/m2-evaluado-curriculum
folder_tree:
  - type: folder
    name: "mi-cv"
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
                name: "profile.png"
                download_path: https://i.ibb.co/SXnSFrkB/profile.png   
                icon: "image"
---

## __Contexto__

En este desafío, se nos pide armar un Curriculum Vitae (**CV**) en **HTML**, utilizando una estructura organizada y las etiquetas semántica correspondiente. Como referencia para el desarrollo, se nos proporciona la siguiente [imagen de referencia]({{ page.img_path | relative_url | append: 'referencia.webp'}}){:target='_blank'}.

Para completar el desafío con éxito, avanzaremos paso a paso de forma estructurada, aclarando cada tema en detalle y ofreciendo sugerencias y recomendaciones útiles. Comenzaremos por definir la estructura del proyecto.

## __Paso 1: Estructura del Proyecto 📂__

Cuando trabajamos en un sitio o página web de forma local, es importante **mantener todos los archivos relacionados en un solo directorio o carpeta**. Puedes crear este directorio en cualquier ubicación del sistema, pero es recomendable elegir un lugar de fácil acceso, como el escritorio.

> Elige un lugar específico para almacenar tus proyectos web. Por ejemplo, puedes crear un directorio llamado **proyectos_web** (o algo similar), donde organizarás todos los proyectos que desarrolles.
{: .prompt-success }

Veamos cómo organizar nuestro proyecto de manera adecuada. Para ello,  pensemos en los elementos más comunes que encontramos en cualquier proyecto web simple:

- Un archivo html principal (Ejemplo: **`index.html`**)
- Directorio para contener las imágenes (Ejemplo: **`portada.jpg`**, **`perfil.png`**)
- Directorio para contener archivos de estilos (Ejemplo: **`estilos.css`**)
- Directorio para contener archivos script (Ejemplo: **`funciones.js`**)

Siguiendo esta estructura, mantendremos un proyecto bien organizado. Además, es común agrupar estos directorios dentro de una carpeta llamada **`📂 assets`**.

Para nuestro proyecto **CV** vamos a crear entonces el siguiente árbol de directorios y archivos:

{% include folder-tree.html tree=page.folder_tree %}

## __Paso 2: Cabecera de un documento HTML 🧬__

Como sabemos, la estructura básica de un documento HTML debe incluir siempre dos secciones o etiquetas principales:

- La **cabecera del documento** ( `head`{:.tag} )
- El **cuerpo del documento** ( `body`{:.tag} )

La sección de cabecera `head`{:.tag} del documento se encarga de incluir [metadatos sobre la página](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML){: target="_blank" }, como el título del documento, la codificación de caracteres, enlaces a hojas de estilo, scripts y otros recursos externos. Esta parte no es visible directamente para el usuario.

Por otro lado, la sección `body`{:.tag} del documento se encarga de todo el contenido visual que se muestra en el navegador, como texto, imágenes, enlaces, botones, etc.

A continuación, veamos una ilustración que representa las etiquetas principales de cualquier documento HTML5:

![Documento HTML graph](https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/svg/html/documentoHtml.svg)

Existen varias etiquetas que podemos utilizar en esta sección de cabecera del documento:

<div class="table-responsive" markdown="1">

{: .table .table-dark  }
|Etiqueta|Atributos|Descripción|
|:-------|:--------|:----------|
|`title`{:.tag}||Título de la página.|
|`base`{:.tag}|*`href`*, *`target`*|URL base del documento.|
|`link`{:.tag}|*`href`*, *`hreflang`*, *`rel`*, *`media`*, *`type`*|Establece una relación del documento actual con otro externo.|
|`meta`{:.tag}|*`name`*,*`content`*,*`http-equiv`*,*`charset`*|Establece un metadato un metadato específico en el documento actual.|

</div>

También, en la cabecera de un documento HTML, se suelen utilizar las etiquetas **Open Graph**, que permiten destacar más nuestro sitio o página web.

### __¿Qué es Open Graph?__

¿Te haz preguntado cómo, al compartir una página web, un blog, un video de YouTube o una canción de Spotify, aparece una vista previa con una imagen y su título?

Desde el año 2010, facebook introdujo el [protocolo Open Graph](https://ogp.me/){:target='_blank'}, que permite convertir cualquier página web en un objeto gráfico, mejorando su presentación en redes sociales.

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
{% tab opg vista en whatsapp %}
![img - opg whatsapp]({{ '/assets/img/ws-opg.png' | relative_url }}){:height='180'}
{% endtab %}
{% tab opg vista en facebook %}
![img - opg facebook]({{ '/assets/img/fb-opg.png' | relative_url }}){:height='180' width='380'}
{% endtab %}
{% endtabs %}

### __Etiquetas meta para describir la página__

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

### __Favicon (icono de pestaña)__

Cuando tenemos varias pestañas en nuestro navegador, para facilitar la búsqueda y la navegación entre pestañas, el navegador suele colocar iconos a la izquierda del título de las pestañas. Estos iconos son conocidos como **favicons** (iconos favoritos), ya que [fue un invento de Internet Explorer](https://es.wikipedia.org/wiki/Favicon#:~:text=La%20forma%20original%20de%20definir%20un%20favicono%20era%20poniendo%20un%20archivo%20llamado%20favicon.ico%20en%20el%20directorio%20ra%C3%ADz%20del%20servidor%20web%2C%20el%20cual%20era%20mostrado%20autom%C3%A1ticamente%20en%20los%20favoritos%20de%20Internet%20Explorer){:target='_blank'}, que los introdujo cuando el usuario añadía una página a sus favoritos.

Para generar los favicons de manera más comoda, podemos utilizar herramientas como [Real Favicon Generator](https://realfavicongenerator.net/){:target='_blank'}, donde podemos pasarle una imagen de alta resolución y nos genera un paquete **.zip** con los archivos y el código necesario para las diferentes versiones y resoluciones de los íconos. Ejemplo de ello sería el siguiente código:

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

> Según la estructura que tenga el proyecto, se deben afinar los vínculos hacia los archivos.
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


## __Paso 3: Encabezado del Currículum 📝__

En la parte principal del CV, vamos a agrupar el título, nuestra foto de perfil y los datos personales utilizando como contenedor la etiqueta `header`{:.tag}.

Para ello, nos guiaremos con la siguiente ilustración a modo de ejemplo:

![encabezado]({{ page.img_path | relative_url | append: 'encabezado.webp'}})

{% include codeHeader.html file='index.html' codepen="y" %}
```html
<header align="center">
  <img src="https://i.ibb.co/SXnSFrkB/profile.png" width="80" height="80" alt="cv photo">
  <h1>JUAN PERÉZ</h1>
  <table align="center">
    <tr>
      <td align="left">
        📍 Coquimbo, Chile | ✉️ juanperez@mail.com
      </td>
    </tr>
    <tr>
      <td align="left">
        📞 +56 956120021 | 💼 linkedin.com/in/juanperez
      </td>
    </tr>
  </table>
</header>
<hr>
```
{: .nolineno }

## __Paso 4: Secciones del Curriculum 👔__

Dentro del contenido principal, vamos a estar trabajando básicamente con secciones (`section`{:.tag}) para cada apartado, como la **formación académica**, la **experiencia**, la **información complementaria**, etc. Un ejemplo de esa estructura sería lo siguiente:

{% include codeHeader.html icon="html" %}
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

## __Paso 5: Estilos para imprimir 🖨️📄 (Opcional)__

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


## __Repositorio 📥__

{% include repository.html repo=page.github %}

---

## __Recursos Adicionales 🔗__

Si quieres íconos para utilizar en tus proyectos, te recomiendo las siguientes páginas:
- [Icons8](https://iconos8.es/){: target='_blank' }: Ofrece una gran variedad de íconos gratuitos y personalizables en diferentes estilos, además de herramientas como generadores de imágenes y fondos.
- [FlatIcon](https://www.flaticon.es/){: target='_blank' }: Una biblioteca de íconos vectoriales, con opciones en formato PNG, SVG y más, ideales para diseño web y aplicaciones.
