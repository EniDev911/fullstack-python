---
layout: post
title: Branching
modulo: m2
challenge: 8
type: opcional
---

## Requerimientos

1. Podemos inicializar git en nuestro proyecto de forma local usando el comando `init`:

	- {: .mb-2 }Navegamos al proyecto descargado e iniciamos git:

	```bash
	cd proyecto
	git init
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Inicilizar git en el proyecto descargado:

	```bash
	git init proyecto
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Crear una nueva rama (*development*) para trabajar en nuevas funcionalidades
	
	```bash
	git branch development
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Listamos las *branches* del proyecto y commit asociados

	```bash
	git show-branch
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

	- {: .mb-2 }Cambiamos de rama con el comando `checkout`

	```bash
	git checkout development
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

2. Crear nuevos cambios en nuevas ramas y realizar las combinaciones para ver cómo trabajan entre ellas:

	- {: .mb-2 }Creamos otra rama de una forma diferente, a través del comando `checkout`

	```bash
	git checkout -b otrarama
	```
	{: .cursor onclick='copyClipboard(this.textContent)' }

