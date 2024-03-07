---
layout: post
title: Ricomida
modulo: m2
challenge: 5
type: evaluado
---

## Desafío

- **Requisitos**
	- Construir un layout responsivo (Bootstrap - Mobile First)
	- Realizar la construcción del HTML y CSS siguiendo la guía de estilo proporcionada.
	- Utilizar el sistema de grilla de Bootstrap.
	- Añadir un carousel de imágenes al proyecto (como se ve en la maqueta).
	- Añadir *tooltips* en los botones de la página.

- **Fuentes**
	- Cabin Regular (400)
	- Cabin Bold (700)
	- Lobster Regular (400)

- **Colores**
	- <span class="px-1 mb-2" style="background: #373A3C">#373A3C</span> o var(--secondary)
	- <span class="px-1 mb-2" style="background: #DDDDDD; color: #111">#DDDDDD</span>
	- <span class="px-1 mb-2" style="background: #000; color: #bbb">#000000</span>
	- <span class="px-1 mb-2" style="background: #DC3545; color: #bbb">#DC3545</span> o var(--danger)


---

## Resultado


{% tabs ricomida %}
{% tab ricomida index.html %}
{% include codeHeader.html %}
```html
{{ site.data.m2.ricomida.html }}
```
{% endtab %}
{% tab ricomida style.css %}
{% include codeHeader.html %}
```css
{{ site.data.m2.ricomida.css }}
```
{% endtab %}
{% tab ricomida resultado %}
{% include ifr_results.html 
  src='demo' %}
{% endtab %}
{% endtabs %}