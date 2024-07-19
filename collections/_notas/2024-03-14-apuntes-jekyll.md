---
layout: post
title: "Apuntes Jekyll"
img_path: /assets/img/notas/
show_next: true
file:
  nav: "_includes/navigation.html"
  data: "_data/navigation.yml"
  config: "_config.yml"
---


## Front Matter

El **Front Matter** es un fragmento de [YAML](https://yaml.org/) que se encuentra entre dos líneas de tres guiones (`-`) en la parte superior de un archivo. Una de las cosas que podemos establecer en este fragmento son variables para página. Por ejemplo:

{% include codeHeader.html file="index.html" %}
```yml
---
num: 5
---
```
{: .nolineno }

Estas variables preliminares están disponibles en Liquid en la variable page. Por ejemplo, para acceder a la variable anterior, usaríamos:

{% include codeHeader.html file="index.html" %}
```html
<p>{% raw %}{{ page.num }}{% endraw %}</p>
```
{: .nolineno }


## Includes

La etiqueta {% raw %}`{% include %}`{% endraw %} permite incluir contenido de otro archivo almacenado en la carpeta :file_folder: `_includes`. Las inclusiones son útiles para tener una única fuente de código que se repite en todo el sitio o para mejorar la legibilidad.

Un ejemplo de lo anterior podría ser la navegación, a veces es mejor moverlo a una inclusión.

Creamos un archivo en `_includes/navigation.html`:

{% include newfile.html file=page.file.nav %}

Agregamos el siguiente código para el ejemplo:

{% include codeHeader.html file="navigation.html" %}
```html
<nav>
  <a href="/">Home</a>
  <a href="/about.html">About</a>
</nav>
```
{: .nolineno }

Dentro del archivo `_layouts/default.html` lo incluimos de la siguiente manera: 

{% include codeHeader.html file='default.html' %}
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    <!-- 👇 -->
    {% raw %}{% include navigation.html %}
    {{ content }}
  </body>
</html>{% endraw %}
```
{: .nolineno }

## Archivo de datos

Además de las variables integradas disponibles de Jekyll, podemos crear nuestros propios datos personalizados en los siguientes formatos:

- [YAML](https://yaml.org/)
- [JSON](https://www.json.org/json-en.html)
- [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)
- [TSV](https://en.wikipedia.org/wiki/Tab-separated_values)

Crear un archivo en `_data/navigation.yml`:

{% include newfile.html file=page.file.data %}

Y agregamos lo siguiente:  

{% include codeHeader.html file='navigation.yml' %}
```yml
- name: Home
  link: /
- name: About
  link: /about
```
{: .nolineno }

Jekyll pone este archivo de datos a su disposición a través de `site.data.navigation`. En lugar de generar cada enlace, podemos iterar sobre los datos:  

{% include codeHeader.html file='index.html' %}
```liquid
<nav>
  {% raw %}{% for item in site.data.navigation %}
    <a href="{{ item.link }}">{{ item.name }}</a>
  {% endfor %}{% endraw %}
</nav>
```
{: .nolineno }

> **Nota**: la salida será exactamente la misma. La diferencia es que ha facilitado la adición de nuevos elementos de navegación.

---

## Colecciones de Jekyll

Las colecciones en Jekyll son similares a las publicaciones que creamos en la carpeta `_post`. Entonces, ¿cuál es la diferencia?. Aquí un resumen simple:

- Utilizar **publicaciones** cuando se desea escribir artículos independientes, con fecha de publicación.
- Utilizar **colecciones** cuando se desea agrupar contenido relacionado, que pueda tener su propia página, pero la fecha no es importante.

### Crear una colección en Jekyll

Para utilizar una colección, primero debemos definirla en el archivo `_config.yml`. Por ejemplo, aquí una colección de gatos en dos ejemplos distintos:

{% include codeHeader.html icon="yml" %}
```yml
collections:
  - gatos
```
{: .nolineno }

{% include codeHeader.html icon="yml" %}
```yml
collections:
  gatos:
    output: true
```
{: .nolineno }

> **Nota**: al definir una colección como una matriz, sus páginas no se representarán de forma predeterminada. Para habilitar esto, se debe especificar `output: true` en la colección.

Ahora podemos agregar documentos detro de la carpeta `_gatos` (*importante el guión bajo al comienzo*).

### Usando las colecciones

Ahora que tenemos nuestra colección configurada, podemos usarla. Para este ejemplo, lo mostraremos en una vista de galería. Para ello creamos un archivo llamado `galeria.html` en la raíz del sitio, con la siguiente portada (*front matter*):

{% include codeHeader.html icon="yml" %}
```yml
layout: default
title: Galería
```
{: .nolineno }

Ahora todo lo que tenemos que hacer es recorrer nuestra colección, que se ha convertido en una variable global en `site` en nuestro archivo `_config.yml`. Para comenzar, agregamos el siguiente contenido debajo del *front matter*:

{% include codeHeader.html file="galeria.html" %}
```liquid
{% raw %}{% for gato in site.gatos %}
  <img src="{{ gato.image }}" alt="{{ gato.image_alt }}">
  <span>{{ gato.description }}</span>
{% endfor %}{% endraw %}
```
{: .nolineno }

Ahora podemos ver las imágenes en nuestra galería.

### Colecciones como páginas

También es posible generar los elementos de nuestra colección como páginas independientes. Para ello, necesitamos hacer tres cosas:

- Agregar la clave `output: true` dentro de la colección en el `_config.yml`
- Crear una layout para mostrar cada item de la colección
- Cambiar de layout para la colección que desea usar

### Agrupar colecciones

Desde la versión `3.7.0` de jekyll es posible almacenar todas las colecciones en un mismo lugar usando la siguiente configuración:

{% include codeHeader.html file=page.file.config %}
```yml
colecttions_dir: mi_coleccion
```
{: .nolineno }

Estos nos permite organizar nuestras colecciones con la siguiente estructura:

```bash
mi_coleccion/
  _coleccion1/
  _coleccion2/
  _coleccion3/
  _coleccion4/
```

---

## Filtros liquid

Los filtros cambian la salida de un objeto de Liquid. Se utilizan dentro de una salida y están separados por carácter de pipe (`|`).

### Transformación string

{% tabs ej1 %}
{% tab ej1 liquid %}
{% include codeHeader.html %}
```liquid
{% raw %}{% comment %} Comentarios {% endcomment %}
{{ "hola" | capitalize }}
{{ "Hola" | dowcase }}
{{ "hola" | upcase }}{% endraw %}
```
{: .nolineno }
{% endtab %}
{% tab ej1 resultado %}
```
{% comment %} Transformación de strinf {% endcomment %}
{{ "hola" | capitalize }}
{{ "Hola" | dowcase }}
{{ "hola" | upcase }}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Usar múltiples filtros

{% tabs ej2 %}
{% tab ej2 liquid %}
{% include codeHeader.html %}
```liquid
{% raw %}{{ "hola" | upcase | remove: 'HO' }}{% endraw %}
```
{: .nolineno }
{% endtab %}
{% tab ej2 resultado %}
```
{{ "hola" | upcase | remove: 'HO' }}
```
{: .nolineno }
{% endtab %}
{% endtabs %}


### Tamaño

{% tabs ej3 %}
{% tab ej3 liquid %}
{% include codeHeader.html %}
```liquid
{% raw %}{% assign frutas = "naranja,manzana,sandía" | split: ',' %}
{{ frutas | size }}
{{ 'frutas' | size }}{% endraw %}
```
{: .nolineno }
{% endtab %}
{% tab ej3 resultado %}
```
{% assign frutas = "naranja,manzana,sandía" | split: ',' %}
{{ frutas | size }}
{{ 'frutas' | size }}
```
{: .nolineno }
{% endtab %}
{% endtabs %}


### Notación de puntos

{% tabs ej4 %}
{% tab ej4 liquid %}
{% include codeHeader.html %}
```liquid
{% raw %}{% assign frutas = "naranja,manzana,sandía" | split: ',' %}
{% if frutas.size <= 3 %}
  Hay poca variedad de frutas
{% endif %}{% endraw %}
```
{: .nolineno }
{% endtab %}
{% tab ej4 resultado %}
```
{% assign frutas = "naranja,manzana,sandía" | split: ',' %}
{% if frutas.size <= 3 %}
  Hay poca variedad de frutas
{% endif %}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### where

<p><span style="background: #111; padding: 3px; border-radius: 5px;"><span style="color: olive">array</span> | <span style="color: darkyellow">where</span> : <span style="color: crimson">string</span>, <span style="color: crimson">string</span></span></p>

{% include codeHeader.html %}
```liquid
{% raw %}{% assign my_posts = site.posts | where:"author","enidev911" %}
<ul>
  {% for post in my_posts %}
  <li><a href="{{post.url}}">{{post.title}}</a></li>
  {% endfor %}
</ul>
{% comment %} Renderiza solo si el author del post es 'enidev911' {% endcomment %}{% endraw %}
```
{: .nolineno }

### escape

{% tabs ejescape %}
{% tab ejescape liquid %}
{% include codeHeader.html %}
```liquid
{% raw %}{{ '<p>Lorem ipsum...</p>' | escape }}{% endraw %}
```
{: .nolineno }
{% endtab %}
{% tab ejescape resultado %}
```
{{ '<p>Lorem ipsum...</p>' | escape }}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Ordenamiento

#### sort

Primero ordenaremos una colección o lista como las publicaciones y luego la mostraremos con un bucle for:

{% include codeHeader.html %}
```liquid
{% raw %}{% assign sorted-posts = site.posts | sort: 'title' %}
{% for post in sorted-posts limit: 5 %}
  <li>{{post.title}}</li>
{% endfor %}{% endraw %}
```
{: .nolineno }

#### sort | reverse

Podemos organizarlo en orden inverso de los títulos

{% include codeHeader.html %}
```liquid
{% raw %}{% assign sorted-posts = site.posts | sort: 'title' | reverse %}
{% for post in sorted-posts limit: 5 %}
  <li>{{post.title}}</li>
{% endfor %}{% endraw %}
```
{: .nolineno }

### Filtros

#### join

Combina los elementos de una matriz en una sola cadena usando un argumento separador:

{% tabs ejjoin %}
{% tab ejjoin liquid %}
{% include codeHeader.html %}
```liquid
{% raw %}{% assign authors = "enidev911, neck, darkonen" | split: ", " %}
{{ authors | join: " and "}}{% endraw %}
```
{: .nolineno }
{% endtab %}
{% tab ejjoin resultado %}
```
{% assign authors = "enidev911, neck, darkonen" | split: ", " %}
{{ authors | join: " and "}}
```
{: .nolineno }
{% endtab %}
{% endtabs %}