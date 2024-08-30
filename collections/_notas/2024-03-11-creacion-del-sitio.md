---
layout: post
title: "Creación del sitio"
img_path: /assets/img/notas/
show_next: true
---

{% include date_es.html date=page.date time-attributes=' class="post-date"' %}

### Un nuevo proyecto de Jekyll

Empecé creando un nuevo proyecto en blanco de jekyll:

{% include codeHeader.html icon="terminal" %}
```bash
jekyll new fullstack-python --blank
```

Al ser un proyecto en blanco, no tardó demasiado en crearse y mostrarme los mensajes de que el proyecto se ha creado:

```bash
New jekyll site installed in /home/user/fullstack-python.
```

### Añadir Jekyll

Dentro del proyecto usamos **Bundler** para crear un **Gemfile** vacío y luego agregamos Jekyll como dependencia:

{% include codeHeader.html icon="terminal" %}
```bash
bundle init
bundle add jekyll
```

### Servir el sitio

Una vez instaladas las dependencias, utilicé nuevamente **Bundler** para construir el proyecto y servirlo en local:

{% include codeHeader.html icon="terminal" %}
```bash
bundle exec jekyll serve
```

Por último abri el navegador en <http://127.0.0.1:4000/> y ya se ve algo :relaxed::

![img - nuevo proyecto]({{ page.img_path | relative_url | append: 'nuevo_proyecto.png'}}){: .card }

### Despliegue

Ya teniendo el proyecto corriendo en local, necesito hacerlo publico para el resto, así que lo voy a desplegar en **Github Page**, pero antes tenemos que crear un archivo `.gitignore`, para decirle a Git, que ignore todo lo que no es necesario en el proceso de compilación de Jekyll.

Creamos el archivo:

{% include newfile.html file='.gitignore' %}

Y agregamos lo siguiente:

{% include codeHeader.html file=".gitignore" %}
```bash
_site
.sass-cache
.jekyll-metadata
Gemfile.lock
```

> **Nota**: el sitio creado se sirve a través de GitHub Pages, por ende añadi tambiém el `Gemfile.lock` al archivo `.gitignore`. Esto se debe a que si llevo la gema versionada estrictamente y sus dependencias. Github Pages potencialmente podría resultar en el uso de versiones obsoletas de la gema.

Entonces, vamos a iniciar git y hacer el primer commit:

{% include codeHeader.html file=".gitignore" %}
```bash
git init
git add .
git commit -m "first commit"
git branch -M gh-pages
```

> **Nota**: Si queremos que nuestro sitio se despliegue automáticamente, debemos tener una rama con el nombre de gh-pages.

Listo, ya nos queda sólo crear el repositorio en Github y que mejor que hacerlo a través de la terminal con la herramienta [Gh Cli](https://cli.github.com/){: target='_blank'}:

{% include codeHeader.html icon="terminal" %}
```bash
gh repo create --public -s=. -r=origin
```

El comando anterior nos mostrará los siguientes mensajes:

```
✓ Created repository <user-name>/<repo-name> on GitHub
✓ Added remote git@github.com:<user-name>/<repo-name>.git
```
{: .nolineno }

Ya por último empujamos los cambios a la rama *gh-pages*:

{% include codeHeader.html icon="terminal" %}
```bash
git push -u origin gh-pages
```

Esperamos algunos minutos para que podamos ver el sitio en la siguiente url [https://enidev911.github.io/fullstack-python](https://enidev911.github.io/fullstack-python){:target='_blank'}.

Hasta aquí todo bien, ahora me faltaba decidir que editor y extensiones podría utilizar para ser más rápido y productivo al momento de dedicarme al desarrollo del sitio web, ya que esto lo haré en **mis tiempos libres**. Quizás en la próxima nota te cuente acerca de las herramientas que estaré utilizando.

¡Hasta la vista! :v: :wave:
