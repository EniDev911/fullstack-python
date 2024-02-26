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

## Meta datos

Para añadir infomación sobre la página y otros datos podemos hacerlo a través de la etiquetas `<meta>`:

{% include codeHeader.html %}
```html
<head>
	<meta name="description" content="Contenido relacionado de la página">
</head
```

> Una descripción meta es una información importante para los motores de búsqueda y los usuarios.

### Etiquetas meta robots

{: .nolineno }

---

## Encabezados

En la parte principal del curriculum, vamos agrupar el título, nuestra foto de perfil y un subtítulo en lo que sería nuestro encabezado mediante la etiqueta `<header>`:

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