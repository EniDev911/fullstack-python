---
layout: post
title: Desafío pull request
modulo: m2
challenge: 9
type: opcional
image_path: '/assets/img/desafios/fork-pull-request'
show: true
show_next: true
---

## Requerimientos

Nos presentan un proyecto desarrollado por el profesor y que es ampliamente utilizado por los desarrolladores. Los alumnos al ver el proyecto consideran que hay varios cambios que podrían mejorar el contenido del repositorio.

1. Crear un fork del siguiente [repositorio](https://github.com/DireccionAcademicaADL/Landing){: target='_blank' }. 👈
	- {: .mb-2 }para mi resulta muy sencillo hacerlo a través de la herramienta [gh-cli](https://cli.github.com/){: .target='_blank' }:

	```bash
	gh repo fork DireccionAcademicaADL/Landing
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- Si no tienes configurado e instalado [gh-cli](https://cli.github.com/){: .target='_blank' }, deben entrar en el repositorio y forkearlo de la siguiente manera:
	![img - fork]({{page.image_path | relative_url }}/fork.png){: .border .border-secondary .my-3 }

2. Clonar el repositorio a nuestro computador.
	- {: .mb-2 }En mi caso ya esta hecho cuando ejecute el comando en el paso anterior con la herramienta [gh-cli](https://cli.github.com/){: .target='_blank' }, sino debes clonarlo con el comando `clone` de git:

	```bash
	git clone <tu-usuario>/Landing
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

3. Generar un cambio simple en el proyecto.
	- {: .mb-2 }En mi caso, mi propuesta es muy básica, consiste en añadirle una sutil sombra a los botones con la clase `.button_di-buffala`:
	
<div class="ps-4">

{8}
```css
.button_di-buffala {
	background-color: #325DFF;
	border-radius: 30px;
	padding: 2rem 6rem;
	color: #fff;
	text-transform: uppercase;
	text-decoration: none;
	box-shadow: 2px 4px 7px #2223;
}
```

</div>

{: start="4" }
4. Commitear los cambios:
	- {: .mb-2 }Guardamos los cambios, y realizamos las operaciones para una nueva confirmación:
	
	```bash
	git add assets/css/style.css
	git commit -m "agregue una sutil sombra a los botones con la clase '.button_di-buffala'"
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

5. Hacer push a nuestro repositorio forkeado.
	- {: .mb-2 }Ahora empujamos los cambios al repositorio remoto:

	```bash
	git push -u origin master
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

6. Crear un pull request describiendo los cambios implementados.
	- {: .mb-2 }Nuevamente este paso, usando mi herramienta favorita es muy sencillo:
	
	```bash
	gh pr create --title "Propongo un cambio en los botones" --body "Añadi una sombra en los botones con la clase '.button_di-buffala'"
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	Resultado:

	![img - pull-request]({{page.image_path | relative_url }}/pull-request.png){: .border .border-secondary .my-3 }
