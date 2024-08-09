---
layout: post
title: "Contenido Multimedia en HTML"
category: "html"
flash_path: '/assets/flash'
video_path: '/assets/videos'
thumbnail: '/assets/img/contenido-multimedia.png'
---

## Imágenes

Para incluir imágenes en el contenido de la página, podemos utilizar la etiqueta `img`{: .tag }, que es una etiqueta que dispone de varios atributos para modificar como se verá la imagen, sin embargo los atributos `src` y `alt` son obligatorios. Veamos el resto de atributos:

{: .table .table-dark }
|Atributo|Descripción|
|:-------|:----------|
|`src`|Indica el nombre de la **URL** de la imagen a mostrar. (**Obligatorio**)|
|`alt`|Establece un texto alternativo que describe la imagen a mostrar. (**Obligatorio**)|
|`width`|Indica el ancho de la imagen en píxeles. (sin usar la unidad px)|
|`height`|Indica el alto de la imagen en píxeles. (sin usar la unidad px)|


## Nuevas etiquetas de imágenes

**HTML5** incorporó un nuevo sistema para utilizar imágenes en nuestros documento **HTML** de forma mucho más flexible que la tradicional etiqueta `img`{: .tag } que nos permitirá mostrar imágenes dependiendo de nuestras necesidades. Para ello, podemos utilizar  las siguientes etiquetas:


{: .table .table-dark  }
|Atributo|Atributos|Descripción|
|:-------|:--------|:----------|
|`picture`{: .tag }||Agrupa una serie de imágenes. (Etiqueta contenedora)|
|`source`{: .tag }|`srcset, sizes, media, type`|Mostrará la imagen que cumpla una serie de criterios opcionales.|


Como podemos ver, lo interesante está en la etiqueta `source`{: .tag }, que tiene una serie de atributos disponibles para utilizar. Vamos a ver para que sirve cada uno:


{: .table .table-dark }
|Atributo|Descripción|
|:-------|:----------|
|`srcset`|Serie de imágenes separadas por coma (`,`) que se utilizarán. (**Obligatorio**)|
|`sizes`|Tamaño específico de la imagen que finalmente se mostrará.|
|`media`|Condición que se debe cumplir para que se muestre la imagen.|
|`type`|Tipo de formato de imagen. (Opcional)|

Una de las primeras ventajas que nos ofrece estas etiquetas es la de utilizar formatos diferentes, dependiendo del soporte del navegador. Podríamos hacer algo como lo siguiente:

{% tabs ex_picture_cat %}
{% tab ex_picture_cat html %}
{% include codeHeader.html icon="html" %}
```html
<picture>
  <source media="(min-width: 650px)" srcset="https://googlechrome.github.io/samples/picture-element/images/kitten-large.png">
  <source media="(min-width: 465px)" srcset="https://googlechrome.github.io/samples/picture-element/images/kitten-medium.png">
  <!-- img tag para para navegadores que no soportan el elemento <picture> -->
  <img src="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png" alt="a cute kitten">
</picture>
```
{: .nolineno }
{% endtab %}
{% tab ex_picture_cat resultado %}
<picture style="display: block; width: 100%; text-align: center">
  <source media="(min-width: 650px)" srcset="https://googlechrome.github.io/samples/picture-element/images/kitten-large.png">
  <source media="(min-width: 465px)" srcset="https://googlechrome.github.io/samples/picture-element/images/kitten-medium.png">
  <!-- img tag para para navegadores que no soportan el elemento <picture> -->
  <img src="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png" alt="a cute kitten">
</picture>
{% endtab %}
{% endtabs %}


---

## Audios

En **HTML5** también es posible añadir archivos de audio y colocar sonidos, podscats, o simplemente música como ambientación.

Para ello tenemos la etiqueta `audio`{: .tag } que tiene algunos atributos disponibles para utilizar. Vamos a ver para que sirve cada uno:

{: .table .table-dark }
|Atributo|Descripción|
|:-------|:----------|
|`src`|Audio a reproducir. Obligatorio si no se proporciona `source`{: .tag }.|
|`preload`|Indica como realizar la precarga del audio.|

Un primer ejemplo muy básico para colocar un audio en nuestra página sería utilizando el atributo `src` para indicar el archivo multimedia de audio:

{% include codeHeader.html icon='html' %}
```html
<audio src="audio.mp3"></audio>
```
{: .nolineno }

Otra forma de incluir un audio pero de manera más controlada es el siguiente ejemplo:

{% include codeHeader.html icon='html' %}
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Tu navegador no soporta el elemento de audio.
</audio>
```
{: .nolineno }


---

## Videos

En  **HTML5** se introduce la interesante posibilidad de **mostrar videos directamente** desde nuestro nevagdor. De hecho, si arrastramos un video a la ventana del navegador, veremos que comienza a reproducirse en él. Para insertar videos en nuestras páginas HTML tenemos que utilizar la etiqueta `video`{: .video }, que junto a la etiqueta `source`{: .tag } nos permiten utilizar estas capacidades multimedia de **HTML5**.


La etiqueta `source`{: .tag } especifica recursos de medios múltiples para las etiquetas `picture`{: .tag }, `audio`{: .tag }, `video`{: .tag }.

### Video (*modo básico*)

La etiqueta `video`{: .tag } tiene varios atributos como veremos a continuación:

{: .table .table-dark }
|Atributo|Valor|Descripción|
|:-------|:----|:----------|
|`src`|Dirección `url`|Video a reproducir. (**Obligatorio** si actua como etiqueta contenedora)|
|`poster`|Dirección `url`|Muestra una imagen a modo de presentación.|
|`preload`|**auto** \| metadata \| none|Indica como realizar la precarga del video.|
|`muted`|**false**|Establece el video sin sonido (silenciado).|
|`constrols`|**false**|Muestra los controles de reproducción. Por defecto no se muestran.|
|`width`|**size**|Indica el tamaño de ancho del video (en píxeles).|
|`height`|**size**|Indica el tamaño de alto del video (en píxeles).|

Un primer ejemplo muy básico para colocar un video en nuestra página web sería el siguiente:


{% tabs ex_video_normal %}
{% tab ex_video_normal html %}
{% include codeHeader.html icon="html" %}
```html
<video src="video.mp4" width="640" height="460"></video>
```
{: .nolineno }
{% endtab %}
{% tab ex_video_normal resultado %}
<video src="https://eidev911.github.io/fullstackjsg33/src/guides/html/fast-guide/assets/estrella_de_la_muerte.mp4" class="w-100"></video>
{% endtab %}
{% endtabs %}

Sin embargo, esto mostrará el primer fotograma del video, con un tamaño de 640x460, pero se verá como una imagen, ya que no muestra los controles del video y tampoco tiene la autoreproducción activada. Podríamos solucionarlo indicando los atributos `controls` y `autoplay`.

Otro ejemplo básico para colocar un video pero mostrando los constroles:

{% tabs ex_video_controls %}
{% tab ex_video_controls html %}
{% include codeHeader.html icon="html" %}
```html
<video src="video.mp4" width="640" height="460" controls></video>
```
{: .nolineno }
{% endtab %}
{% tab ex_video_controls resultado %}
<video src="https://enidev911.github.io/fullstackjsg33/src/guides/html/fast-guide/assets/estrella_de_la_muerte.mp4" class="w-100" controls></video>
{% endtab %}
{% endtabs %}

### El atributo (*poster*)

Por defecto, las etiquetas `video`{: .tag } muestran el primer fotograma del video enlazado o una pantalla negra inicial. Sin embargo, podemos mostrar una imagen personalizada como si fuera una carátula o una miniatura de un video de Youtube, de tal forma que el video no se llega a mostrar hasta que el usuario pulsa en el botón de **play**.

Para ello, utilizaremos el atributo `poster`, que funciona de forma similar al tributo `src` de las etiquetas `img`{: .tag }. En ella podemos vincular introduciendo la dirección de la imagen que queremos utilizar:

{% tabs video_con_poster %}
{% tab video_con_poster html %}
{% include codeHeader.html icon="html" %}
```html
<video src="video.mp4"
	type="video/mp4"
	poster="poster.jpg" 
	controls>
</video>
```
{: .nolineno }
{% endtab %}
{% tab video_con_poster resultado %}
<video poster="https://pbs.twimg.com/media/EhADsOUXYAYOuOp.jpg" src="{{ page.video_path | relative_url }}/maul_vs_obiwan.mp4" type="video/mp4" class="w-100" controls></video>
{% endtab %}
{% endtabs %}


### Formatos de video

Antes de continuar con el modo avanzado de etiquetas de video, debemos conocer una serie de conceptos básicos y los diferentes formatos de video que existen actualmente. En primer lugar, debemos saber que un archivo de video tiene dos partes principales:

- `formato contenedor`: el formato del video en sí.
- `componentes codificados`: lo que tiene en su interior que pueden ser múltiples componentes codificados con diferentes *codecs*.

De hecho, un video básico suele tener, como mínimo, un componente de video y otro de audio, pero puede tener muchos más (subtítulos, imágenes, etc..). Estos detalles son importantes, ya que dependiendo del formato y/o codec de un video, puede que sea factible utilizarlo para la web o no, asi que hay que conocer un poco sobre estos conceptos.


A continuación tenemos la tabla con los formatos/codecs más conocidos y utilizados:

{: .table .table-dark }
|Formato|Codec utilizado|Características|
|:------|:--------------|:--------------|
|`MP4`|[x264](https://www.videolan.org/developers/x264.html), [DivX H264](https://www.divx.com/en/software/technologies/h264/)|Alta calidad. Codec x264 libre.|
|`WebM`|[VP8](https://www.3cx.es/voip-sip/vp8/), [VP9](https://es.wikipedia.org/wiki/VP9)|Alternativa libre a MP4 de Google.|
|`AV1`|Basado en [VP10](https://encode.su/threads/2462-Google-VP10-video-codec) , [Daala](https://xiph.org/daala/) y [Thor](https://en.wikipedia.org/wiki/Thor_(video_codec))|Compite con HEVC/H.265.|
|`HEVC`|[x265 ](https://www.x265.org/), [DivX HEVC](https://www.divx.com/en/software/technologies/hevc/)|Futura evolución de MP4.|
|`OGV`|[Theora](https://www.theora.org/)|Alternativa libre a MP4.|
|`MKV`|[Matroska](https://www.matroska.org/index.html)|Buena compresión. Potente. (alto consumo)|


### Video (*modo avanzado*)

Sin embargo, aún con lo hemos visto todavía falta ver todas las posibilidades multimedia que tenemos con **HTML5**. La etiqueta `video`{: .tag } también puede actuar como etiqueta contenedora e incluir varias etiquetas **HTML** para dotar de mayor compatibilidas, o capacidades adicionales. Las etiquetas que podemos usar son dos:

{: .table .table-dark }
|Atributo|Atributos|Descripción|
|:-------|:--------|----------|
|`source`{: .tag }|`src`, `type`|Establece un archivo de video o lo añade como alternativa.|
|`track`{: .tag }|`src`, `srclang`, `label`, `kind`, `default`|Establece un archivo de subtítulos o lo añade como alternativa.|

Si utilizamos la etiqueta `video`{: .tag } como etiqueta contenedora, podemos incluir etiquetas `source`{: .tag } en su interior para proporcionar formatos alternativos y tener mayor compatibilidad con otros navegadores y navegadores antiguos que no soporten **HTML5**:

{% include codeHeader.html icon="html" %}
```html
<video width="600" height="400">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <source src="video.ogv" type="video/ogg" />
  Su navegador no soporta contenido multimedia.
</video>
```
{: .nolineno }