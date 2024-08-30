---
layout: post
title: "Software y herramientas"
img_path: /assets/img/notas/
show_next: true
---

### Editor -  Sublime Text

Por supuesto, cualquier editor de Markdown serviría, pero me alegró mucho saber que existen **complementos** de **Jekyll** para mi editor favorito, **Sublime Text**, que facilita la publicación.

{% include cards/basic-card.html name="sublimetext" href="https://www.sublimetext.com/" %}

### Sublime Text - Extensiones

Recien instalado, Sublime Text no ofrece ningún soporte específico de Markdown, sin resaltado de sintaxis y formato especial en cursiva o negrita, atajos de teclado y además sin vista previa de salida HTML entre otras cosas.

Para agregar estas características debemos instalar algunos complementos (*plugins*) y configurar algunas preferencias.

#### MarkdownEditing

Este complemento proporciona formato en línea de Markdown. Eso significa negritas, editor de título, cursivas para palabras envueltas en los simbolos de asteriscos (\*) y contiene algunos esquemas de colores para los archivos Markdown en el editor. 

Los textos con las reglas marcadas para las citas de bloque y el código fuente también se sombrearán de manera diferente. Manejará inteligentemente listas de viñetas y listas numeradas con solo presionar <kbd>Enter</kbd>, lo que me ahorrará mucho tiempo al escribir :pencil2:. También incluirá los cierres automáticamente de comillas dobles, paréntesis, guiones bajos, etc.

[![markdownediting](https://packagecontrol.io/readmes/img/7a03e1296598e9d0e7e46fbc4793e5ec75c5188e.png)](https://packagecontrol.io/packages/MarkdownEditing){: target='blank'}

Atajos de teclado de MarkdownEditing:

{: .table .table-dark }
|Combinación|Descripción|
|:---------:|-----------|
|<kbd>Alt</kbd>+<kbd>b</kbd>|Escribir el texto en negrita.|
|<kbd>Alt</kbd>+<kbd>i</kbd>|Escribir el texto en italica.|
|<kbd>Alt</kbd>+<kbd>t</kbd>|Crea una nueva lista de tareas (GFM).|
|<kbd>Alt</kbd>+<kbd>x</kbd>|Marca como realizada la tarea actual (GFM).|
|<kbd>Shift</kbd>+<kbd>Enter</kbd>|Anidar lista de tareas (GFM), luego se repite la combinación <kbd>Alt</kbd>+<kbd>t</kbd>|
|<kbd>Shift</kbd>+<kbd>tab</kbd>|Desanidar listas.|
|<kbd>Ctrl</kbd>+<kbd>d</kbd>|Selecciona la palabra en el cursor, luego presiona el asterísco (\*) y se convierte en cursiva, si le das dos veces se convierte en negrita.|

---

#### MarkdownPreview

Ya tenemos instalada la extensión que nos provee la edición de archivos Markdown en Sublime Text. Este complemento en realidad no es tan fundamental para lo que estoy desarrollando, pero si es fundamental para la previsualización en el navegador de nuestros archivos Markdown (sin necesidad de usar el servidor integrado de jekyll), el complemento lo buscamos con el nombre de [MarkdownPreview](https://packagecontrol.io/packages/MarkdownPreview){: target='_blank' } y nos ayudará para obtener una vista previa en el navegador :earth_africa: de nuestros archivos Markdown.

¡Hasta la vista! :v: :wave: