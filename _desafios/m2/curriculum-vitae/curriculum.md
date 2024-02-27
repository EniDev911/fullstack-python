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

{: .table.table-bordered }
|Etiqueta|Atributos|Descripción|
|:-------|:--------|:----------|
|`title`{:.tag}||Título de la página.|
|`base`{:.tag}|*`href`*, *`target`*|URL base del documento.|
|`link`{:.tag}|*`href`*, *`hreflang`*, *`rel`*, *`media`*, *`type`*|Establece una relación del documento actual con otro externo.|
|`meta`{:.tag}|*`name`*,*`content`*,*`http-equiv`*,*`charset`*|Establece un metadato un metadato específico en el documento actual.|

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

```html
<head>
	<meta name="description" content="Contenido relacionado de la página" />
</head
```
{: .nolineno }

> Una descripción meta es una información importante para los motores de búsqueda y los usuarios.


{: .nolineno }

---

## Encabezados

En la parte principal del curriculum, vamos agrupar el título, nuestra foto de perfil y un subtítulo en lo que sería nuestro encabezado mediante la etiqueta `header`{:.tag}:

{% tabs header %}
{% tab header html %}
{% include codeHeader.html %}
```html
<!-- header  -->
<header>
	<h1>Curriculum Vitae</h1>
	<img src="./assets/img/perfil.jpg" width="260" alt="cv photo">
	<h2>Marco Contreras</h2>
</header>
```
{: .nolineno }
{% endtab %}
{% tab header resultado %}
{% include ifr_results.html %}
{% endtab %}
{% endtabs %}


*[CV]: Curriculum Vitae
*[HTML]: HyperText Markup Language