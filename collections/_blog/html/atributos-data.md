---
layout: post
title: "Atributos data"
category: "html"
thumbnail: 'https://github.com/EniDev911/assets/blob/main/images/svg/programming/html5.svg?raw=true'
toc: false
---

En **HTML5**, el atributo `data-*` se utiliza para almacenar información personalizada en elementos HTML. Este atributo permite agregar datos adicionales a un elemento sin afectar la funcionalidad ni la estructura del HTML. Los atributos `data-*` están diseñados para facilitar la integración de datos específicos con los elementos HTML de una manera estandarizada y accesible.

**Usando los atributos data (caso práctico)**

Vamos a realizar un ejemplo práctico simple para cambiar el tema entre claro y oscuro 🌙. Para realizar con éxito el ejemplo, vamos a usar HTML, CCS y JavaScript (para resaltar la utilidad de los atributos **data**).

En la parte de HTML, tenemos una estructura básica de una página con solo un encabezado y un botón:

{% include codeHeader.html icon="html" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ejemplo - usando atributos data</title>
</head>
<body data-theme="light">
	<h1>Haz clic para cambiar el tema!</h1>
	<button id="btn-theme">dark mode</button>
</body>
</html>
```

En el CSS, definimos dos conjuntos de estilos. Uno para el tema claro y otro para el tema oscuro. Con estos estilos, especificamos cómo se verá la página en cada uno de los temas. Por ejemplo, el tema claro tiene fondo blanco y texto negro, mientras que el tema oscuro tiene fondo negro y texto blanco:

{% include codeHeader.html icon="css"  %}
```css
body[data-theme="light"] {
	background-color: #fff;
	color: #000;
}

body[data-theme="dark"] {
	background-color: #000;
	color: #fff;
}
```

Ya luego, viene la parte mágica en JavaScript. Aquí es donde sucede la acción cuando el usuario hace clic en el botón.

{% include codeHeader.html icon="js" %}
```js
const btn = document.getElementById('btn-theme');
btn.addEventListener('click', () => {
	const currentTheme = document.body.getAttribute('data-theme');
	document.body.setAttribute('data-theme', currentTheme === "light" ? "dark" : "light");

	btn.innerText = currentTheme + ' mode';
});
```

**Resultado**:

{% capture html %}
<!DOCTYPE html><html lang="en"><head> <style>body[data-theme="light"] {background-color: #fff;color: #000;}body[data-theme="dark"] {background-color: #000;color: #fff;}</style><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Ejemplo - usando atributos data</title></head><body data-theme="light"><h1>Haz clic para cambiar el tema!</h1><button id="btn-theme">dark mode</button></body><script>const btn = document.getElementById("btn-theme");btn.addEventListener("click", () => {const currentTheme = document.body.getAttribute("data-theme");document.body.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");btn.innerText = currentTheme + " mode";});</script></html>
{% endcapture %}

<iframe srcdoc='{{ html }}' frameborder="0" class="w-100 mb-3 border rounded" height="280"></iframe>
