---
layout: post
title: "Git - Guía general"
category: "git"
video_path: '/assets/videos/git'
thumbnail: https://raw.githubusercontent.com/EniDev911/assets/main/svg/software/git-scm.svg
---

## Configuración

### Configuración inicial

Para comenzar a personalizar aspectos básicos y avanzados de **Git** debemos saber del funcionamiento y cómo modificar su configuración predeterminada. Una herramienta inherente de **Git** llamada `git config` permite establecer y obtener variables de configuración que controlan aspectos del funcionamiento y la apariencia de **Git**. Estas variables se pueden almacenar en tres lugares diferentes:

1. ⚙️ `[path]/etc/gitconfig`{: .bg-light .text-dark }: Contiene los valores aplicados a cada usuario en el sistema y todos sus repositorios (si pasa la opción `--system` a `git config`, lee y escribe desde este archivo de configuración específicamente. Debido a que se trata de un archivo de configuración del sistema, se necesitaría información administrativa o **privilegios de superusuario** para realizar cambios.
2. ⚙️ `~/.gitconfig`{: .bg-light .text-dark } o `~/.config/git/config`{: .bg-light .text-dark }: Contiene valores específicos personalmente para el usuario. Puedes hacer que **Git** lea y escriba en este archivo específicamente al pasar la opción `--global` a `git config`, y esto afecta todos los repositorios con los que trabaja en el sistema del usuario.
3. `.git/config`{: .bg-light .text-dark }: Específico para ese único repositorio. Puede obligar a **Git** a leer y escribir en este archivo pasando la opción `--local` a `git config`, pero de hecho es la predeterminada. Como es de esperar, necesita estar ubicado en algún lugar de un repositorio de **Git** para que esta opción funcione correctamente.

> **Nota**<br>Cada nivel anula los valores del nivel anterior, por lo que los valores en `.git/config` superan a los de `[path]/etc/gitconfig`.

Puede ver todas sus configuraciones y de dónde provienen indicando el siguiente comando:

{% tabs git_config_show %}
{% tab git_config_show terminal %}
{% include codeHeader.html %}
```bash
git config --list --show-origin
```
{% endtab %}
{% tab git_config_show resultado %}
![img - all config](https://enidev911.github.io/fullstackjsg33/src/guides/git/fast-guide/assets/git.show.config.png)
{% endtab %}
{% endtabs %}

### Configuración de identidad

Después de instalar **Git**, los usuarios deben establecer inmediatamente el nombre de usuario y la dirección de correo eléctronico, que se usarán para cada confirmación (`commit`) de **Git**.

#### Configurar el nombre de usuario

{% include codeHeader.html %}
```bash
git config --global user.name "nombre de usuario" 
```

> Cambiar `"nombre de usuario"` por su nombre de usuario.


#### Configurar el email para el usuario

{% include codeHeader.html %}
```bash
git config --global user.email "usuario@correo.com"
```

> Cambiar `"usuario@correo.com"` por su correo electrónico de usuario.

De todas formas, cuando usamos git y no tenemos configurado el usuario, nos mostrará un mensaje que debemos identificarnos para realizar operaciones como una confirmación (`commit`). Para comprender ver la siguiente demostración:

<video src="{{ page.video_path | relative_url }}/config-user.mp4" width="100%" height="100%" controls class="border border-secondary"></video>

### Configurar editor

#### Configurar VS Code como el editor por defecto para git

{% include codeHeader.html %}
```bash
git config --global core.editor "code --wait"
```

> La opción `--wait` es para que la terminal se quede esperando hasta que cerremos el editor de texto.

Ver el archivo de configuración con el editor por defecto:

![img - open config with vscode](https://enidev911.github.io/fullstackjsg33/src/guides/git/fast-guide/assets/git.core.editor.png){: .border .border-secondary }

### Configurar colores

**Git** puede marcar con colores los resultados que se muestran en la terminal, ayudándote así a leerlos más fácilmente. Los siguientes parámetros se pueden modificar:

#### color.ui

**Git** coloreará automáticamente la mayor parte de los resultados que muestra. Podemos ajustar con precisión cada una de las partes a colorear; **pero si deseas activar de un golpe todos los colores por defecto, sólo debemos cambiar a `true` el parámetro `ui.color`**.

Para desactivar totalmente los colores:

{% include codeHeader.html %}
```bash
git config --global color.ui false
```

#### color.\*

Cuando se requiere ajustar específicamente, comando a comando, donde colorear y cómo colorear, podemos emplear los ajustes particulares de color. Cada uno de ellos se puede fijar en `true`, `false` o `always`:

- `color.branch`{: .bg-light .text-dark }
- `color.diff`{: .bg-light .text-dark }
- `color.interactive`{: .bg-light .text-dark }
- `color.status`{: .bg-light .text-dark }

Si no quieres usar el coloreado en el comando `status` por ejemplo, puedes indicar:

{% include codeHeader.html %}
```bash
git config --global color.status false
```

Además, cada uno de los comandos tiene parámetros adicionales para asignar colores a partes específicas, por si quieres precisar aún más.

Podemos ajustar a cualquiera de los siguientes colores:


<div class="row justify-content-center g-3 mb-2">
	<div class="col-3">
		<div class="mini_card">black (⬛)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">red (🔴)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">green (🍏)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">yellow (💛)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">blue (🔷)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">magenta (💜)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">cyan (💧)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">white (⬜)</div>
	</div>
</div>


También se pueden aplicar atributos como: 

<div class="row g-3 text-center mb-2">
	<div class="col-3">
		<div class="mini_card">bold<br>(negrita)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">dim<br>(tenue)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">ul<br>(subrayado)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">blink<br>(parpadeante)</div>
	</div>
	<div class="col-3">
		<div class="mini_card">reverse<br>(inverso)</div>
	</div>
</div>

Por ejemplo, para mostrar la **meta-información** del comando `diff` con letra color cian y con caracteres en negrita, podemos indicar:

{% tabs git_config_color %}
{% tab git_config_color terminal %}
{% include codeHeader.html %}
```bash
git config --global color.diff.meta "cyan bold"
```
{% endtab %}
{% tab git_config_color resultado %}
![img - color config](https://enidev911.github.io/fullstackjsg33/src/guides/git/fast-guide/assets/color.diff.png){: .border border-secondary }
{% endtab %}
{% endtabs %}

Otro ejemplo para cambiar los colores del comando `status` para la salida de:

- `color.status.changed` (cuando un archivo a cambiado de estado)
- `color.status.untracked` (cuando un archivo no es seguido por git)
- `color.status.added` (cuando un archivo es agregado al *stage area*)

{% tabs git_config_color_status %}
{% tab git_config_color_status terminal %}
{% include codeHeader.html %}
```bash
git config --global color.status.changed "white red bold"
```
{% include codeHeader.html %}
```bash
git config --global color.status.untracked "white magenta bold"
```
{% include codeHeader.html %}
```bash
git config --global color.status.added "white green bold"
```
{% endtab %}
{% tab git_config_color_status resultado %}
![img - color status git](https://enidev911.github.io/fullstackjsg33/src/guides/git/fast-guide/assets/color.status.png){: .border .border-secondary }
{% endtab %}
{% endtabs %}

### Configurar ALIAS

La herramienta `git config` también nos permite establecer **alias** que nos sirven principalmente para ahorrarnos un poco la escritura de comandos más largos. Aquí te dejo algunos ejemplos:

{% tabs git_config_alias %}
{% tab git_config_alias terminal %}
Para el comando `git branch`:

{% include codeHeader.html %}
```bash
git config --global alias.br branch
```

Para el comando `git checkout`:

{% include codeHeader.html %}
```bash
git config --global alias.co checkout
```

Para el comando `git commit`:

{% include codeHeader.html %}
```bash
git config --global alias.ci commit 
```

Para el comando `git status`:

{% include codeHeader.html %}
```bash
git config --global alias.st status
```

Para el comando `git remote`:

{% include codeHeader.html %}
```bash
git config --global alias.rt remote
```
{% endtab %}
{% tab git_config_alias resultado %}
![img - resultado comando](https://enidev911.github.io/fullstackjsg33/src/guides/git/fast-guide/assets/git.alias.gif){: .border .border-secondary }
{% endtab %}
{% endtabs %}

---

## Operaciones

### Incializar un proyecto con git

Para iniciar un proyecto en **Git**, primera debemos situarnos en el directorio donde tendrás tu proyecto o podemos crear en este caso una carpeta y entrar en ella y partir desde cero. Si estás Windows, Mac o Linux podemos crear una carpeta con el comando `mkdir` y luego entrar en ella con el comando `cd`.

Crea una carpeta para contener el proyecto y accedemos a esa carpeta:

{% include codeHeader.html %}
```bash
mkdir git-tutorial && cd git-tutorial
```

Inicializar un repositorio en local con git en el directorio actual:

{% include codeHeader.html %}
```bash
git init
```

Crear un nuevo **repositorio en local** con el nombre especificado (<span class="px-1">crea la carpeta y dentro inicia el repositorio local</span>):

{% include codeHeader.html %}
```bash
git init tutorial-git
```

### Contenido de la carpeta *.git*


A continuación, tenemos el árbol de directorios y archivos dentro de un directorio `.git` y comentado cada aspecto **importante** de saber desde mi punto de vista y experiencia:


```bash
📂 .git
├── 📂 branches
├── ⚙️ config # contiene las opciones de configuración de este repositorio
├── 📄 description
├── 📄 HEAD # contiene la referencia del commit a partir del cual se trabaja
├── 📂 hooks # contiene los script que se ejecutan en determinado momento
│   ├── 📄 applypatch-msg.sample
│   ├── 📄 commit-msg.sample
│   ├── 📄 fsmonitor-watchman.sample
│   ├── 📄 post-update.sample
│   ├── 📄 pre-applypatch.sample
│   ├── 📄 pre-commit.sample
│   ├── 📄 pre-merge-commit.sample
│   ├── 📄 pre-push.sample
│   ├── 📄 pre-rebase.sample
│   ├── 📄 pre-receive.sample
│   ├── 📄 prepare-commit-msg.sample
│   ├── 📄 push-to-checkout.sample
│   └── 📄 update.sample
├── 📄 index # el área "staging" tiene la información de los archivos que se incluirán en el "commit"
├── 📂 info # relativamente sin importancia contiene el archivo exclude
│   └── 📄 exclude # se puede usar para ignorar archivos en este proyecto (no está versionado como .gitignore)
├── 📂 logs # contiene el historial de las distintas ramas (interactivo con el comando log, reflog)
│   ├── 📄 HEAD
│   └── 📂 refs
│       └── 📂 heads
│           └── 📄 main
├── 📂 objects # el depósito interno de objetos, indexados por SHAs
│   ├── 📄 info
│   └── 📄 pack
└── 📂 refs # La copia maestra de todos los refs que existen en el repositorio, ya sean stashes, tags, etc.
    ├── 📂 heads
    │   └── 📄 main
    └── 📂 tags
```

### Visualización de los cambios

#### Status

El comando `status` muestra las rutas que tienen diferencias entre el archivo de índice (`index`) y la confirmación (`HEAD`) actual, las rutas que tienen diferencias entre el árbol de trabajo y el archivo de índice, y las rutas en el árbol de trabajo que no son rastreadas por **Git** (y no son ignoradas con archivos `.gitinore`).

Ver estado de los archivos:

{% include codeHeader.html %}
```bash
git status
```

![img - git status](https://enidev911.github.io/fullstackjsg33/src/guides/git/fast-guide/assets/git.status.png){: .border .border-secondary .shadow }

#### Short status

Si bien la salida de estado de git es bastante completa, también es bastante prolija. **Git** también tiene un indicador corto de estado para ver sus cambios de una manera más compacta. Si ejecuta `git status -s` o `git status --short` en resumen, obtiene una salida mucho más simplificada del comando:

{% include codeHeader.html %}
```bash
git status -s
```

![img - git status short](https://enidev911.github.io/fullstackjsg33/src/guides/git/fast-guide/assets/git.short.status.png){: .border .border-secondary .shadow }

### Agregar archivos a preparación

El **staging** o área de preparación es un lugar donde se guardan temporalmente los cambios, para luego en caso de ser **confirmados** serán llevados definitivamente al repositorio. Sabemos que el repositorio es el lugar donde se guardan todos los registros de los cambios realizados a los archivos.

El área del **staging** se puede considerar como el limbo donde los archivos están esperando por ser enviados al repositorio o ser regresado a la carpeta del proyecto.

{: align='center' }
![img - git staging](https://enidev911.github.io/fullstackjsg33/src/guides/git/fast-guide/assets/staging.png){: style="filter: invert(1);" }
*Como funciona el staging*

Agregar un archivo al stage area:

{% include codeHeader.html %}
```bash
git add archivo.txt
```

Agregar más de un archivo al stage area:

{% include codeHeader.html %}
```bash
git add archivo1.txt archivo2.txt
```

Agregar todos los archivos que terminan con la misma extensión:

{% include codeHeader.html %}
```bash
git add *.txt
```

Agregar todos los archivos al stage area:

{% include codeHeader.html %}
```bash
git add .
```

Agregar archivos de forma interactiva:

{% include codeHeader.html %}
```bash
git add -i
```

{% assign video_2 = page.video_path | append: '/git-add-interactive.mp4' %}

{% include video.html src=video_2 %}

### Eliminar archivos seguidos por git

Eliminar un archivo primera forma:

{% include codeHeader.html %}
```bash
rm archivo.txt
git add archivo.txt
git commit -m 'archivo eliminado'
```

Eliminar un archivo segunda forma (***recomendado***{: .px-1}):

{% include codeHeader.html %}
```bash
git rm archivo.txt
git commit -m 'archivo eliminado'
```

{% assign video_3 = page.video_path | append: '/git-rm.mp4' %}


{% include video.html src=video_3 %}

### Bajar y recuperar archivos del stage area

Sacar un archivo del **stage area**:

{% include codeHeader.html %}
```bash
git rm --cached archivo.txt 
```

Recuperar un archivo, descartando los cambios:

{% include codeHeader.html %}
```bash
git restore archivo.txt
```

### Renombrar archivos

Cuando renombramos un archivo en nuestra copia de trabajo directamente, GIT considera esta acción y para aclararle a GIT de que se trata de un renombramiento consta de dos operaciones:

1. borrar los archivos con el nombre antiguo y nuevo.
2. añadir el archivo recién nombrado al área de preparación (`stage area - git add`)

#### Primera forma:

Veamos la primera forma de cambiar el nombre a un archivo en GIT:

{% include codeHeader.html %}
```bash
mv archivo1.txt archivo1_renombrado.txt
git status
git add archivo1.txt archivo1_renombrado.txt
git commit -m "renombramos archivo1.txt  => archivo1_renombrado.txt"
```

> El inconveniente de la operación anterior es que rompe el historial de revisiones del archivo, y no podría obtener el historial de revisiones de este archivo recién nombrado antes de este momento de 
renombramiento. No es deseable este método en el control de versiones.


#### Segunda forma (*recomendado*)

Git tiene un comando para renombrar archivos y resolver el problema anterior de enlazamiento roto:

{% include codeHeader.html %}
```bash
git mv archivo1.txt archivo1_renombrado.txt
git commit -m "renombramos archivo1.txt  => archivo1_renombrado.txt"
```

---

### Eliminar el seguimiento de GIT

Si por error inicilizamos un repositorio local en un directorio que no era simplemente eliminamos la carpeta oculta `.git`, por medio del siguiente comando:

{% include codeHeader.html %}
```bash
rm -rf .git
```

Este comando `rm` se utiliza para remover directorios con todo su contenido dentro, siempre y cuando se utilice el flag `-r` y podemos indicar que se lleve a cabo a la fuerza por medio del flag `-f` de esta manera no nos solicitará confirmaciones. Veamos la siguiente demostración:


{% assign remove_folder_git = page.video_path | append: '/remove-git-folder.mp4' %}

{% include video.html src=remove_folder_git %}

---


### Ignorar archivos

A menudo, necesitaremos que cierta clase de archivos no sean monitoreados por **Git**. Por lo general, se trata de archivos que son generados automáticamente, como archivos de registro o archivos producidos por un sistema de compilación. En tales casos, **Git** nos permite crear un archivo llamado `.gitignore` donde podemos definir una lista de patrones que nos sirvan para ignorar todo tipo de archivos o directorios que coincidan con ellos.

> El archivo `.gitignore`, es un archivo que le dice a **Git** que tipo de archivos o carpetar ignorar en el proyecto.

El archivo `.gitignore` generalmente se coloca en el directorio raíz del proyecto. También es posible crear un archivo `.gitignore` global, y cualquier entrada en ese archivo se ignorará en todos tus repositorios de **Git**.

Cada entrada en este archivo es una **regla** o **patrón** para ignorar archivos o directorio, veamos el siguiente contenido de un archivo `.gitignore`:

{% include codeHeader.html file='.gitignore' %}
```bash
# ignora todos los archivos con extensión .a
*.a

# ignora todos los archivos dentro de la carpeta TODO
# pero no en los subdirectorio
/TODO

# ignora todos los archivos en cualquier directorio llamado build
build/

# ignora doc/notas.txt, pero no ignora doc/semana2/notas.txt
doc/*.txt

# ignorar todos los archivos .pdf en el directorio doc/ y cualquiera de sus subdirectorios
doc/**/*.pdf 
```
