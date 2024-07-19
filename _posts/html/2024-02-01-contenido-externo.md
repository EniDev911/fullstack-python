---
layout: post
title: "Contenido Externo en HTML"
category: "html"
flash_path: '/assets/flash'
thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*2uAoVWvKlTTxKgywfoeg6w.png"
---


## Etiquetas de contenido externo

Las siguientes etiquetas sirven para incrustar contenido externo en nuestras páginas:

<div class="table-responsive" markdown="1">

{: .table border="1"}
|Etiqueta|Atributos|Descripción|
|:-------|:--------|:----------|
|`iframe`{:.tag}|`src`, `srcdoc`, `name`, `width`, `height`|Permite incrustar contenido externo.|
|`embed`{:.tag}|`src`, `type`, `width`, `height`|Permite incrustar contenido interactivo.|
|`object`{:.tag}|`data`, `type`, `name`, `form`, `width`, `height`|Permite incrustar contenido externo con fallback.|
|`param`{:.tag}|`name`, `value`|Define parámetros para `object`{:.tag}.|

</div>

---

## Marcos en línea (*iframes*)

Antiguamente, en versiones anteriores de **HTML**, se utilizaban etiquetas llamadas `frame`{: .tag } mediante las cuales se permitía dividir la pantalla en varias secciones. Hoy en día, ese modo de desarrollo no se utiliza por los problemas que generó en cuanto a la **accesibilidad**, **posicionamiento**, entre otras cosas.

Sin embargo, de todas esas etiquetas de **frames**, ha sobrevivido la etiqueta `iframe`{: .tag }, que sigue siendo útil para incrustar contenido externo. Veamos algunos ejemplos:

### Incrustar un video de Youtube


{% tabs ej_ifr_yt %}
{% tab ej_ifr_yt html %}
{% include codeHeader.html icon='html' %}
```html
<!-- Reproducción de un video de Youtube -->
<iframe
  width="500"
  height="400"
  src="https://www.youtube.com/embed/n2MGNWrfkTk">
</iframe>
<!-- Reproducción automática y Silenciado -->
<iframe 
  width="500" 
  height="400"
  src="https://www.youtube.com/embed/n2MGNWrfkTk?autoplay=1&mute=1">
</iframe>
<!-- Lista de reproducción en bucle -->
<iframe 
  width="500" 
  height="400"
  src="https://www.youtube.com/embed/n2MGNWrfkTk?playlist=LG3T2rzlR9Q,SLBKRZszn4k&loop=1">
</iframe>
```
{: .nolineno }
{% endtab %}
{% tab ej_ifr_yt resultado %}
<!-- Reproducción de un video de Youtube -->
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/n2MGNWrfkTk">
</iframe>
<br>
<iframe 
  width="100%" 
  height="400"
  src="https://www.youtube.com/embed/n2MGNWrfkTk?autoplay=1&mute=1">
</iframe>
<br>
<iframe 
  width="100%" 
  height="400"
  src="https://www.youtube.com/embed/n2MGNWrfkTk?playlist=LG3T2rzlR9Q,SLBKRZszn4k&loop=1">
</iframe>
{% endtab %}
{% endtabs %}

---

## Cargar contenido flash

Esto es gracias a un emulador llamado [Ruffle](https://ruffle.rs/){:target='_blank'}, para implementarlo en nuestros sitios web es necesario añadir la CDN:

{% include codeHeader.html icon="html" %}
```html
<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
```
{: .nolineno }


Veamos un ejemplo de como se vería el código para cargar un juego flash:

{% tabs flash_demo %}
{% tab flash_demo html %}
{% include codeHeader.html icon="html" %}
```html
<embed src="assets/flash/s_mario_63.swf" width="400" height="350" />
<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
<script>
  window.RufflePlayer = window.RufflePlayer || {};
    window.RufflePlayer.config = {
    "autoplay": "off", 
    "splashScreen": false, 
    "unmuteOverlay":"hidden",
    "menu": true,
};
</script>
```
{: .nolineno }
{% endtab %}
{% tab flash_demo resultado %}
<embed src="{{ page.flash_path | relative_url }}/s_mario_63.swf" width="400" height="350" />
{% endtab %}
{% endtabs %}


<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
<script>
  window.RufflePlayer = window.RufflePlayer || {};
    window.RufflePlayer.config = {
    "autoplay": "off", 
    "splashScreen": false, 
    "unmuteOverlay":"hidden",
    "menu": true,
};
</script>

