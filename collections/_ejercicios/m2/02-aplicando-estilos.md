---
layout: post
title: Aplicando estilos
subtitle: Ejercicio Guiado - Día 03
modulo: m2
type: ejercicio
show: true
toc: false
show_next: true
css:
  ej_1: |-
    #wrapper {
      background: darkgray;
    }
    .text-blue {
      color: blue;
    }
    .text-red {
      color: red;
    }
    .text-white {
      color: white;
    }
---

### Chi, chi, chi, le, le, le

A continuación, vamos a poner en práctica lo aprendido aplicando estilos a los siguientes elementos HTML:

{% include codeHeader.html icon="html" %}
```html
<div>
	<h5>Chi Chi Chi</h5>
	<h4>Le Le Le</h4>
	<h3>¡Viva Chile!</h3>
</div>
```
{: .nolineno }

Luego asignamos un id `"wrapper"` al `div`{: .tag } que envuelve los encabezados, posteriormente con CSS definamos el fondo gris oscuro y asignamos clases a los elementos `h*`{: .tag }:

{% tabs ej_1 %}
{% tab ej_1 html %}
{% include codeHeader.html icon="html" codepen="y" css=page.css.ej_1 %}
```html
<div id="wrapper">
	<h5 class="text-blue">Chi Chi Chi</h5>
	<h4 class="text-red">Le Le Le</h4>
	<h3 class="text-white">¡Viva Chile!</h3>
</div>
```
{: .nolineno }
{% endtab %}
{% tab ej_1 css %}
{% include codeHeader.html icon="css" %}
```css
#wrapper {
 background: darkgray;
}

.text-blue {
	color: blue;
}

.text-red {
	color: red;
}

.text-white {
	color: white;
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}