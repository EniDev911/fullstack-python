---
layout: default
title: Desafío Curriculum Vitae
modulo: m2
type: evaluado
---

## Descripción

En este desafío nos piden armar un **CV** en **HTML** utilizando una estructura organizada y las etiquetas semántica correspondiente.

---

## Estructura

```
curriculum/
├─ assets/
│  └─ img/
│     └─ foto.jpg
└─ index.html
```
{: .nolineno }

---

## Cabecera de un documento HTML

Como sabemos  la estructura de un documento HTML debía contener siempre dos etiquetas **HTML** principales:

- La cabecera de la página o `head`{:.tag}
- El cuerpo de la página o `body`{:.tag}

El primero de ellos, se encarga de contener **etiquetas de metadatos** (*información sobre el documento*) así como establecer **relaciones con otro documentos**. El segundo de la parte visual que se mostrará al usuario en el navegador.

![img doc html](https://enidev911.github.io/fullstackjsg33/guias/html/guia-general/images/estructura-documento.png)

Existen varias etiquetas que podemos utilizar en esta sección de cabecera del documento:

<div class="table-responsive" markdown="1">

{: .table.table-bordered }
|Etiqueta|Atributos|Descripción|
|:-------|:--------|:----------|
|`title`{:.tag}||Título de la página.|
|`base`{:.tag}|*`href`*, *`target`*|URL base del documento.|
|`link`{:.tag}|*`href`*, *`hreflang`*, *`rel`*, *`media`*, *`type`*|Establece una relación del documento actual con otro externo.|
|`meta`{:.tag}|*`name`*,*`content`*,*`http-equiv`*,*`charset`*|Establece un metadato un metadato específico en el documento actual.|

</div>

### ¿Qué es Open Graph?

¿Te haz preguntado como es que cuando compartes una página, en un blog, un video de YouTube o una canción de Spotify aparece una silueta de una tarjeta junto una imagen con su título?

Desde el año 2010, facebook introdujo el [protocolo Open Graph](https://ogp.me/){:target='_blank'} que permite que cualquier página web se pueda convertir en un objeto gráfico.

Un ejemplo de ello, es el siguiente:

{% tabs opg %}
{% tab opg html %}
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

A pesar de que los motores de búsqueda como [Google](//google.com){:target='_blank'} analiza el contenido de la página para determinar automáticamente el fragmento adecuado para la descripción. También puede usar la información descriptiva del elemento `<meta name="description">` si resulta más apropiado que otras partes del contenido.

{3}
```html
<head>
  ...
	<meta name="description" content="Contenido relacionado de la página" />
  ...
</head>
```

> Una descripción meta es una información importante para los motores de búsqueda y los usuarios.


### Favicon (icono de pestaña)

Cuando tenemos varias pestañas en nuestro navegador, para una búsqueda más fácil e intuitiva entre prestañas, el navegador suele colocar iconos a la izuierda del título de las pestañas. Estos iconos son conocidos como **favicons** (*iconos favoritos*) ya que [fue un invento de Internet Explorer](https://es.wikipedia.org/wiki/Favicon#:~:text=La%20forma%20original%20de%20definir%20un%20favicono%20era%20poniendo%20un%20archivo%20llamado%20favicon.ico%20en%20el%20directorio%20ra%C3%ADz%20del%20servidor%20web%2C%20el%20cual%20era%20mostrado%20autom%C3%A1ticamente%20en%20los%20favoritos%20de%20Internet%20Explorer){:target='_blank'} para colocar icono cuando el usuario añadía una página a favoritos.


Para generar los favicons de una forma más comoda, podemos utilizar herramientas como [Real Favicon Generator](https://realfavicongenerator.net/){:target='_blank'}, a la cúal le pasamos un logo de alta resolución y nos genera un paquete **.zip** con los archivos y el código necesario para las diferentes versiones y resoluciones de los iconos. Ejemplo de ello sería el siguiente código:

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

>Según la estructura del proyecto se deben afinar las rutas hacia los vínculos.

<div class="row g-3 my-3">
  <div class="col-12 col-md-6">
    <img src="{{ '/assets/img/favicon-light.png' | relative_url }}" alt="favicon light">
  </div>
  <div class="col-12 col-md-6">
    <img src="{{ '/assets/img/favicon-dark.png' | relative_url }}" alt="favicon dark">
  </div>
</div>


> El problema principal con los **favicons**, es que esta característica no está definida en la especificación, por lo que cada navegador y cada sistema operativo la implementa como quiere. Hay navegadores que sólo soportan favicon en formato **PNG**, otros que solo soportan resoluciones específicas, etc.



---

## Encabezado

En la parte principal del curriculum, vamos agrupar el título, nuestra foto de perfil y un subtítulo en lo que sería nuestro encabezado mediante la etiqueta `header`{:.tag}:

{% tabs header %}
{% tab header html %}
{% include codeHeader.html %}
```html
<!-- header  -->
<header>
	<h1>Curriculum Vitae</h1>
	<img src="./assets/img/perfil.png" width="260" alt="cv photo">
	<h2>Marco Contreras</h2>
</header>
```
{: .nolineno }
{% endtab %}
{% tab header resultado %}
{% include ifr_results.html %}
{% endtab %}
{% endtabs %}

---

## Contenido

Dentro del contenido principal vamos a estar utilizando básicamente secciones para cada apartado como sería los **datos personales**, **formación académica**, **experiencia**, **información complementaria**, etc. Un ejemplo de ello sería lo siguiente:



{5 6 7 8 9 10}
```html
<header>
  ...
</header>
<main>
  <section>
    <h3>Título</h3>
    <p>Párrafo</p>
    <blockquote>Notas</blockquote>>
    <ul></ul>
  </section>
  <section>
    ....
  </section>
</main>
```

---

## Resultado final

{% tabs base %}
{% tab base index.html %}
{% include codeHeader.html %}
```html
{{ site.data.m2.curriculum.html }}
```
{% endtab %}
{% tab base script.js %}
{% include codeHeader.html %}
```js
{{ site.data.m2.curriculum.js }}
```
{% endtab %}
{% tab base resultado %}
{% include ifr_results.html 
  src=site.data.m2.curriculum.url %}
{% endtab %}
{% endtabs %}



*[CV]: Curriculum Vitae
*[HTML]: HyperText Markup Language