---
layout: post
title: "✏️ Visual studio code"
text: "Editor de código"
subtitle: "Instalación y extensiones"
img_path: /assets/img/vscode/
img: https://raw.githubusercontent.com/EniDev911/assets/main/svg/software/code.visualstudio.svg
show_next: true
---

## Obtener VS Code

Para utilizar **Visual Studio Code**, puedes descargarlo desde la página oficial: [Visual Studio Code](https://code.visualstudio.com/){:target='_blank'}. Si te interesa una versión **open source**, descarga [Visual Studio Codium](https://vscodium.com/){:target='_blank'}

## Extensiones

A continuación muestro un listado de las extensiones de **VS CODE** que más suelo utilizar y que nos permite aumentar nuestra productividad. Están categorizadas por temática:


### Tema y Coloreado

<div class="table-responsive" markdown="1">

{: .table .table-bordered  }
|Nombre|Descripción|Enlace|
|:-----|:----------|:-----|
|*VSCode Color Picker*|Color Picker para otro tipo de documentos. Ideal para colores en Javascript o WebComponents.|[link](https://marketplace.visualstudio.com/items?itemName=AntiAntiSepticeye.vscode-color-picker){: target='_blank' }|
|*es6-string-html*|Coloreado de sintaxis para *HTML*, *CSS*, *SVG*, *XML*, *SQL*, *GLSL* en string templates. Ideal para WebComponents.|[link](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html){: target='_blank' }|
|*Image preview*|Muestra una previsualización de la imagen referenciada en el margen de la línea.|[link](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview){: target='_blank' }|
|*indent-rainbow*|Colorea las indentaciones con columnas de colores.|[link](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow){: target='_blank' }|

</div>

### Uso frontend

<div class="table-responsive" markdown="1">

{: .table .table-bordered  }
|Nombre|Descripción|Enlace|
|:-----|:----------|:-----|
|*colorize*|Muestra los colores CSS escritos en el fondo del propio código..|[link](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize){: target='_blank' }|
|*HTML to CSS/LESS/SCSS*|Permite copiar código HTML y pegar la estructura en forma de código CSS.|[link](https://marketplace.visualstudio.com/items?itemName=tautvydasderzinskas.vscode-html-to-css){: target='_blank' }|

</div>


### Uso backend

<div class="table-responsive" markdown="1">

{: .table .table-bordered  }
|Nombre|Descripción|Enlace|
|:-----|:----------|:-----|
|*PostgreSQL*|Permite la gestión de conexiones a PostgreSQL.|[link](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres){: target='_blank' }|
|*Jupyter*|Permite la edición de cuadernos de Jupyter en VS Code.|[link](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter){: target='_blank' }|

</div>


### Configuración

Toda la configuración en VSCODE se maneja desde el archivo `setting.json`. Para llegar a este archivo primero debemos ingresar a la configuraciones desde la barra lateral:

![img - open setting](https://enidev911.github.io/fullstackjsg33/src/guides/vs-code/use-guide/assets/img/file/settings1.png)


## Fragmentos (Snippets)

Se puede definir fácilmente *snippets* sin usar ninguna extensión. Los *snippets* están escritos en formato [JSON](http://www.json.org/json-es){: target='_blank' }


### Crear tus propios fragmentos

Para crear o editar *snippets*, seleccione (**File** -> **Preferences** -> **Configure user snippets**):

{: align="center" .my-5 }
![img - menu snippets]({{ page.img_path | relative_url | append: 'menu-snippets.png' }}){: .card .w-100 .w-lg-50 }

A continuación **seleccione el lenguaje** para que el identificador de lenguaje pueda detectarlo y recomendarlo al editar un archivo basado en ese lenguaje, o bien seleccione **New Global Snippets File** para que este *snippet* se encuentre disponible para todos los lenguajes:

{: align="center" .my-5 }
![img - menu snippets]({{ page.img_path | relative_url | append: 'menu-snippets-select-language.png' }}){: .card .w-100 .w-lg-50 }

A continuación, veremos un ejemplo de un fragmento para diferentes lenguajes:



{% tabs snippets %}
{% tab snippets javascript %}
{% include codeHeader.html file="Code/User/snippets/javascript.json" %}
```json
{
	"For Loop": {
		"prefix": ["for", "for-const"],
		"body": ["for (const ${2:element} of ${1:array}) {", "\t$0", "}"],
		"description": "Un bucle for."
	}
}
```
{: .nolineno }
{% endtab %}
{% tab snippets python %}
{% include codeHeader.html file="Code/User/snippets/python.json" %}
```json
{
	"Getter": {
		"prefix": ["@propery", "property", "getter"],
		"body": ["@property", "def ${1:name}(self):", "\treturn self.__${1:name}"],
		"description": "Accesador de un atributo privado"
	}
}
```
{: .nolineno }
{% endtab %}
{% endtabs %}


*[VSCODE]: Visual Studio Code
*[JSON]: JavaScript Object Notation