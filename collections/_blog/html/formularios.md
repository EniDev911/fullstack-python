---
layout: post
title: "Fomularios HTML"
category: "html"
toc: false
thumbnail: "https://github.com/EniDev911/assets/blob/main/images/svg/programming/html5.svg?raw=true"
---

Uno de los aspectos más importante en un documento HTML es el uso de formularios, por lo que al día de hoy HTML con HTML5 a evolucionado bastante, por lo que han añadido etiquetas nuevas para crear nuevos controles en los formularios y nuevos atributos para validar información de algún tipo en específico. Vamos ir viendo los diferentes controles en la tabla a continuación.

### Contenedor de formulario

El primer paso para crear un formulario es indicar una etiqueta contenedora `form`{: .tag }:

{% include codeHeader.html icon="html" %}
{1 2 3}
```html
<form>
	...
</form>
```

La etiqueta `form`{: .tag } dispone de varios **atributos** que se pueden utilizar:

{: .table .table-dark }
|Atributo|Valor|Descripción|
|:-------|:----|:----------|
|`action`|URL|Dirección URL del back-end donde se enviará la información del formulario.|
|`method`|**get** \| post|Método HTTP de envió. GET se realiza a través de URL, POST para envió extenso de información.|
|`name`|nombre|Nombre del formulario. Útil para procesar posteriormente.|
|`target`|destino|Nombre del lugar donde se abrirá el formulario. `_blank` para nueva pestaña.|
|`enctype`|tipo|Codificación para el envió del formulario. Importante para envió de archivos.|
|`accept-charset`|codificación|Fuerza a utilizar una codificación en los parámetros de texto del formulario.|
|`autocomplete`|**on** \| off|Activa o desactiva el autocompletado para todos los campos del formulario.|
|`novalidate`|boolean|Con este atributo presente, el formulario obvia la validación HTML5.|

### Tipos de input

La etiqueta `input`{: .tag } puede tomar diferentes valores en su atributo `type` para permitir al usuario introducir información, además de otra etiqueta denominada `textarea`{: .tag } para introducir cantidades más grande de texto:

{: .table .table-dark }
|Tipo de información|Etiqueta|Ejemplo|
|:------------------|:-------|:------|
|Texto alfanumérico|`input type="text"`{: .tag}|<input type="text" placeholder="john doe" class="w-100">|
|Texto para búsquedas|`input type="search"`{: .tag }|<input type="search" placeholder="buscar" class="w-100">|
|Número de teléfono o móvil|`input type="tel"`{: .tag }|<input type="tel" placeholder="987654321" class="w-100">|
|Dirección URl|`input type="url"`{: .tag }|<input type="url" placeholder="https://developer.mozilla.org" class="w-100">|
|Campo oculto (no mostrar al usuario)|`input type="hidden"`{: .tag }|<input type="hidden" class="w-100">|
|Texto alfanumérico libre (extenso)|`textarea`{: .tag }|<textarea class="w-100" placeholder="Campo de texto más extenso. Para comentarios o descripciones"></textarea>|