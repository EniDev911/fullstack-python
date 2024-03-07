---
layout: post
title: Desafío - Suricata
modulo: m2
challenge: 3
type: guiado
---

## Requerimientos

- **Tipografías**
	- [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=Open){:target='_blank'}
		- Open Sans Regular (400)
		- Open Sans Bold (700)
- **Colores**
	- {: data-color='#212529' style='--color:#212529' }
	- {: data-color='#FFF o var(--white)' style='--color:#fff' }
	- {: data-color='#E83E8C o var(--pink)' style='--color:#E83E8C' }
	- {: data-color='#17A2b8 o var(--info)' style='--color:#17A2b8'} 
- **Íconos**
	- `<i class="fa-brands fa-cc-visa"></i>` <i class="fa-brands fa-cc-visa fs-4"></i>
	- `<i class="fa-brands fa-cc-mastercard"></i>` <i class="fa-brands fa-cc-mastercard fs-4"></i>
	- `<i class="fa-brands fa-cc-amex"></i>` <i class="fa-brands fa-cc-amex"></i>
	- `<i class="fa-brands fa-cc-diners-club"></i>` <i class="fa-brands fa-cc-diners-club"></i>
	- `<i class="fa-brands fa-cc-paypal"></i>` <i class="fa-brands fa-cc-paypal"></i>
	- `<i class="fa-brands fa-cc-discover"></i>` <i class="fa-brands fa-cc-discover"></i>

---

## Añadir Bootstrap

Para este proyecto nos piden integrar la librería de bootstrap, descargando los archivos e incluirlos en el proyecto.

Para ello debemos seguir los siguientes pasos:

- [Descargar los archivos CSS y JS compilados v5.3.3](https://github.com/twbs/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-dist.zip){:download='bootstrap_v-5.3.3'}
- Extraer el contenido (descomprimelo en la ubicación que desees).
- En la **carpeta CSS** buscamos el archivo **bootstrap.min.css**.
- En la **carpeta JS** buscamos el archivo **bootstrap.bundle.min.js**.


### Vincular bootstrap

{6 10}
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<title>Suricata</title>
</head>
<body>
	<script src="assets/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Integrar la barra de navegación

{% tabs navbar_suricata %}
{% tab navbar_suricata html %}
{% include codeHeader.html file='index.html' %}
```html
<!-- NAVBAR MENU -->
<nav class="navbar navbar-dark navbar-expand-lg">
	<div class="container">
		<a class="navbar-brand" href="#">
			<img src="./assets/img/logo.png" alt="logo suricata" height="50">
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<!-- collapse menu -->
		<div class="collapse navbar-collapse" id="main-navbar">
			<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link text-light" href="#">Inicio</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="#">Productos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="#">Contacto</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
```
{: .nolineno }
{% endtab %}
{% tab navbar_suricata CSS %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
:root {
	--pink: #E83E8C;
	--white: #fff;
}
```
{% endtab %}
{% endtabs %}

---

## Resultado

{% tabs suricata %}
{% tab suricata HTML %}
{% include codeHeader.html file='index.html' %}
```html
{{ site.data.m2.suricata.html }}
```
{% endtab %}
{% tab suricata CSS %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
{{ site.data.m2.suricata.css }}
```
{% endtab %}
{% tab suricata resultado %}
{% include ifr_results.html 
  src='demo' %}
{% endtab %}
{% endtabs %}