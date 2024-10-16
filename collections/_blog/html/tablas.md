---
layout: post
title: "Tablas en HTML"
category: "html"
toc: false
thumbnail: "https://enidev911.github.io/fullstackjsg33/src/guides/html/fast-guide/assets/table/01.png"
---

Las tablas están incluidas en **HTML** desde sus primeras versiones y son una forma común de presentar datos claramente. Además, si lo construimos de forma semántica y correctamente, es muy simple darle estilos desde **CSS** y cambiar el diseño.

Una tabla puede ser sencilla o compleja, dependiento de nuestro objetivo y la cantidad de atributos a utilizar. Primero veamos las etiquetas básicas para crear una tabla de la forma más sencilla posible:

{:.table .table-dark }
|Etiqueta|Descripción|
|:-------|:----------|
|`table`{:.tag}|Etiqueta contenedora donde se definirá toda la tabla.|
|`tr`{:.tag}|**Table Row**. Etiqueta contenedora de cada una de las fila en la tabla.|
|`th`{:.tag}|**Table Header**. Etiqueta contenedora de cada una de las celdas de cabecera en la tabla.|
|`td`{:.tag}|**Table Data**. Etiqueta contenedora de cada una de las celdas en la tabla.|

Crear tablas con **HTML** es algo más largo ya que comprende el uso de varias etiquetas pero es muy sencillo entender su estructura, todo parte indicando la etiqueta `table`{: .tag }:

{% include codeHeader.html icon="html" %}
{1 2 3}
```html
<table>
	...
</table>
```

Después debemos delimitar la zona para la cabecera de la tabla usando `thead`{: .tag }:


{% include codeHeader.html icon="html" %}
{2 3 4}
```html
<table>
	<thead>
		...
	</thead>
</table>
```

De manera que ahora podamos definir nuestras cabeceras de la tabla con la etiqueta`th`{: .tag }:

{% include codeHeader.html icon="html" %}
{3 4 5}
```html
<table>
	<thead>
		<th>Columna 1</th>
		<th>Columna 2</th>
		<th>Columna 3</th>
	</thead>
</table>
```

Teniendo las cabeceras, seguimos construyendo la tabla ahora nuestro objetivo es el cuerpo de la tabla que podemos definirlo con `tbody`{: .tag }:

{% include codeHeader.html icon="html" %}
{7 8 9}
```html
<table>
	<thead>
		<th>Columna 1</th>
		<th>Columna 2</th>
		<th>Columna 3</th>
	</thead>
	<tbody>
		...
	</tbody>
</table>
```

Ahora tenemos que encargarnos de presentar los datos correctamente, primero tenemos que crear las filas con `tr`{: .tag }. El siguiente código resalta la definición de 2 filas:

{% include codeHeader.html icon="html" %}
{8 9 10 12 13 14}
```html
<table>
	<thead>
		<th>Columna 1</th>
		<th>Columna 2</th>
		<th>Columna 3</th>
	</thead>
	<tbody>
		<tr>
			Primera fila
		</tr>

		<tr>
			Segunda fila
		</tr>
	</tbody>
</table>
```

Por último debemos definir los datos para cada celda de la respectiva fila en la tabla usando la etiqueta `td`{: .tag }:

{% include codeHeader.html icon="html" codepen="y" title="Ejemplo de tabla en HTML" %}
{9 10 11 14 15 16}
```html
<table>
	<thead>
		<th>Columna 1</th>
		<th>Columna 2</th>
		<th>Columna 3</th>
	</thead>
	<tbody>
		<tr>
			<td>Dato 1</td>
			<td>Dato 2</td>
			<td>Dato 3</td>
		</tr>
		<tr>
			<td>Dato 1</td>
			<td>Dato 2</td>
			<td>Dato 3</td>
		</tr>
	</tbody>
</table>
```


*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets