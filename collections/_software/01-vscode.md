---
layout: post
title: "✏️ Visual studio code"
text: "Editor de código"
subtitle: "Instalación y extensiones"
img_path: /assets/img/vscode/
thumbnail: https://raw.githubusercontent.com/EniDev911/assets/main/svg/software/code.visualstudio.svg
show_next: true
---

__Visual Studio Code__ no es solo un editor de código, sino que puede adaptarse a cualquier flujo de trabajo. Su diseño modular y extensible te permite personalizarlo de tal forma para que tenga todas las características de un __IDE__. Aquí te explico cómo instalarlo y te comparto algunas extensiones que uso.

## __Instalar VS Code__

Para utilizar **Visual Studio Code**, puedes descargarlo desde su página oficial: [Visual Studio Code](https://code.visualstudio.com/){:target='_blank'}. Si prefieres una versión **open source**, prueba [Visual Studio Codium](https://vscodium.com/){:target='_blank'}.

Durante el proceso de instalación, lo más importante es asegurarte de marcar la opción __agregar a PATH__. Esto nos permitirá abrir __VS Code__ desde una línea de comandos. El resto de las opciones son opcionales y dependen se sus preferencias.

![Asistente de instalación]({{ page.img_path | relative_url | append: 'asistente-vscode.webp'}})

## __Extensiones 🧩__

A continuación muestro un listado de las extensiones de **VS CODE** que más suelo utilizar y que nos permite aumentar nuestra productividad. Están categorizadas por temática:


### __Tema y Coloreado 🎨__
{: .text-warning }


{: .table .table-dark  }
|Nombre|Descripción|Enlace|
|:-----|:----------|:-----|
|*VSCode Color Picker*|Color Picker para otro tipo de documentos. Ideal para colores en Javascript o WebComponents.|[link](https://marketplace.visualstudio.com/items?itemName=AntiAntiSepticeye.vscode-color-picker){: target='_blank' }|
|*es6-string-html*|Coloreado de sintaxis para *HTML*, *CSS*, *SVG*, *XML*, *SQL*, *GLSL* en string templates. Ideal para WebComponents.|[link](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html){: target='_blank' }|
|*Image preview*|Muestra una previsualización de la imagen referenciada en el margen de la línea.|[link](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview){: target='_blank' }|
|*indent-rainbow*|Colorea las indentaciones con columnas de colores.|[link](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow){: target='_blank' }|


### __Uso Frontend 🌐__
{: .text-warning }

{: .table .table-dark  }
|Nombre|Descripción|Enlace|
|:-----|:----------|:-----|
|**colorize**|Muestra los colores CSS escritos en el fondo del propio código.|[link](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize){: target='_blank' }|
|*HTML to CSS/LESS/SCSS*|Permite copiar código HTML y pegar la estructura en forma de código CSS.|[link](https://marketplace.visualstudio.com/items?itemName=tautvydasderzinskas.vscode-html-to-css){: target='_blank' }|


### __Uso Backend 🖥️__
{: .text-warning }

{: .table .table-dark  }
|Nombre|Descripción|Enlace|
|:-----|:----------|:-----|
|*PostgreSQL*|Permite la gestión de conexiones a PostgreSQL.|[link](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres){: target='_blank' }|
|*Jupyter*|Permite la edición de cuadernos de Jupyter en VS Code.|[link](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter){: target='_blank' }|


### __Configuración ⚙️__

Toda la configuración en __VS Code__ se maneja desde el archivo `setting.json`. Para llegar a este archivo primero debemos ingresar a configuraciones desde la barra lateral:

![img - open setting](https://enidev911.github.io/fullstackjsg33/src/guides/vs-code/use-guide/assets/img/file/settings1.png)

## __Snippets (Fragmentos de Código)__

Una de las características que puede mejorar significativamente tu productividad es el uso de Snippets, que en la mayoría de casos, estos vienen incluidos cuando instalas alguna extensión en específico. Sin embargo, en VS Code se puede definir fácilmente __snippets__ sin usar ninguna extensión. Los __snippets__ están escritos en formato [JSON](http://www.json.org/json-es){: target='_blank' }.

### __Crear Snippets__

Para crear o editar __snippets__, selecciona lo siguiente (**File** -> **Preferences** -> **Configure user snippets**):

{: align="center" .my-5 }
![img - menu snippets]({{ page.img_path | relative_url | append: 'menu-snippets.png' }}){: .w-100 .w-lg-50 }

A continuación, __selecciona el lenguaje__ para que el identificador de lenguaje pueda detectarlo y recomendarlo al editar un archivo basado en ese lenguaje, o bien selecciona **New Global Snippets File** para que este *snippet* se encuentre disponible para todos los lenguajes:

{: align="center" .my-5 }
![img - menu snippets]({{ page.img_path | relative_url | append: 'menu-snippets-select-language.png' }}){: .w-100 .w-lg-50 }

A continuación, veamos un ejemplo básico de un snippet para diferentes lenguajes:

Ruta donde se almacenan los snippters
{% tabs snippets %}
{% tab snippets javascript %}
{% include codeHeader.html file="javascript.json" %}
```js
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
```js
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


## __Extensión de PostgreSQL__

### Añadir nueva conexión

![img - nueva conexión]({{ page.img_path | relative_url | append: 'extension-postgres-new-conn.png'}})

### Configurar parámetros del servidor

{: align="center" }
![img - configurar servidor]({{ page.img_path | relative_url | append: 'extension-postgres-config.png'}}){: .card .w-100 .w-lg-50 }

### Obtener datos de tablas

{: align="center" }
![img - configurar servidor]({{ page.img_path | relative_url | append: 'extension-postgres-fetch.png'}})

*[JSON]: JavaScript Object Notation