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

Existen varias etiquetas que podemos utilizar en esta sección de cabecera del documento:




{3 4 5 6}
```css
/* style.css */
/* change background color if the OS is on Dark Mode */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000 !important;
  }
}
```


```css
/* style.css */
/* change background color if the OS is on Dark Mode */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000 !important;
  }
}
```

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