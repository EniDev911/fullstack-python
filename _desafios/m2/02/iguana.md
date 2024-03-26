---
layout: post
title: Desafío Iguana
modulo: m2
challenge: 2
type: evaluado
---

## Estructura del proyecto

```bash
📂 iguana-page
├── 📂 assets
│   ├── 📂 css # 👈 para las hojas de estilos
│   ├── 📂 img # 👈 para las imágenes
│   └── 📂 favicon # 👈 para los favicon
└── index.html # página principal
```
{: .nolineno }

---

## Integrar la librería  Font Awesome

Debemos añadir la librería, lo podemos hacer a través **CDN**, aseguremonos de poner el script justo antes de la etiqueta de cierre del `body`{: .tag }:

{9}
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iguana Page</title>
</head>
<body>
    <script src="https://kit.fontawesome.com/6b8f0c7049.js" crossorigin="anonymous"></script>
</body>
</html>
```
{: .nolineno }

### Iconos requeridos

Los iconos que se utilizan son los siguientes:

<div class="row justify-content-evenly my-3">
	<div class="col-4">
		<div class="mini_card">
			<i class="far fa-eye fs-3"></i>
		</div>
	</div>
	<div class="col-4">
		<div class="mini_card">
			<i class="far fa-hand-peace fs-3"></i>
		</div>	
	</div>
	<div class="col-4">
		<div class="mini_card">
			<i class="fas fa-paint-brush fs-3"></i>
		</div>
	</div>
</div>

{% include codeHeader.html icon='html' %}
```html
<!-- far fa-eye -->
<i class="far fa-eye"></i>
<!-- far fa-hand-peace -->
<i class="far fa-hand-peace"></i>
<!-- fas fa-paint-brush -->
<i class="fas fa-paint-brush"></i>
```
{: .nolineno }

---

## Etiquetas semánticas

Como en cada desafío nos piden utilizar correctamente las etiquetas semánticas. Es por ello que dispondre de la siguiente manera la estructura del **HTML**:

{% include codeHeader.html file='index.html' %}
```html
<!DOCTYPE html>
<html>
<body>
  <header>
	<!-- ... -->
  </header>
  <main>
	<section>
	  <!-- ... -->
	</section>
	<section>
	  <!-- ... -->
	</section>
	<section>
	  <!-- ... -->
	</section>
  </main>
  <footer>
	<!-- ... -->
  </footer>
</body>	
</html>
```
{: .nolineno }

---

## Resultado

{% tabs iguana %}
{% tab iguana html %}
{% include codeHeader.html file='index.html' %}
```html
{{ site.data.m2.iguana.html }}
```
{% endtab %}
{% tab iguana css %}
{% include codeHeader.html file='style.css' %}
```css
{{ site.data.m2.iguana.css }}
```
{% endtab %}
{% tab iguana resultado %}
{% include ifr_results.html 
  src=site.data.m2.iguana.url %}
{% endtab %}
{% endtabs %}