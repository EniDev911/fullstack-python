---
layout: post
title: Branching
modulo: m2
type: evaluado
show: true
show_next: true
---

## Descargar material de apoyo

Descarga el el [material de apoyo para el desafío aquí](apoyo-desafio-evaluado-branching.zip){: download='Apoyo desafío - Branching.zip' }


## Requerimientos

1. Podemos inicializar git en nuestro proyecto de forma local usando el comando `init`:

	- {: .mb-2 }Navegamos al proyecto descargado e iniciamos git:

	```bash
	cd git-landing
	git init
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Inicilizar git en el proyecto descargado:

	```bash
	git init git-landing
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Crear una nueva rama (*development*) para trabajar en nuevas funcionalidades:<br>(<small class="text-warning"><strong>OJO</strong> para crear una nueva rama primero debemos realizar un commit en la rama actual</small>)
	
	```bash
	git add .
	git commit -m "primer commit"
	git branch development
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Listamos las *branches* del proyecto y commit asociados:

	```bash
	git show-branch
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Cambiamos de rama con el comando `checkout`:<br><small>Nos mostrará el siguiente mensaje la terminal: (<span class="text-light">Switched to branch 'development'</span>)</small>

	```bash
	git checkout development
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Al hacer click en la imagen, serán redirigidos a GitHub:<br><small class="d-block mb-2">(<span class="text-warning">Ojo</span> esto ya viene hecho, asi que solo voy a añadir el atributo para que habrá en una nueva pestaña)</small>
	```html
<a href="https://github.com/" target="_blank">
	<img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" alt="octocat">
</a>
	```
	{:  .nolineno .cursor onclick='copyClipboard(this.textContent)' }

2. Crear nuevos cambios en nuevas ramas y realizar las combinaciones para ver cómo trabajan entre ellas:

	- {: .mb-2 }Creamos otra rama de una forma diferente, a través del comando `checkout`<br><small>Nos mostrará el siguiente mensaje la terminal: (<span class="text-light">Switched to branch 'otrarama'</span>)</small>

	```bash
	git checkout -b otrarama
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Hacemos modificaciones en el archivo `index.html`, por ejemplo ya que la url de la imagen de github está rota, vamos a cambiar el atributo `src` de esa etiqueta:

	```html
<img src="https://raw.githubusercontent.com/EniDev911/assets/main/svg/software/github.svg" alt="octocat" style="filter: invert(1)">
	```
	{: .nolineno .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Guardamos los cambios, preparamos el archivo con el comando (`add`) y hacemos una nueva confirmación (`commit`):

	```bash
	git add index.html
	git commit -m "cambie el atributo src a img y le añadi un filtro con el atributo style"
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Ahora nos cambiamos a la rama `development` con el comando (`checkout`) y hacemos una fusión con la rama llamada `otrarama` con el comando (`merge`):
	
	```bash
	git checkout development
	git merge otrarama -m "fusión de la rama development con la rama otrarama"
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }