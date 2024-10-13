---
layout: post
title: "Desarrollo de funcionalidades"
img_path: /assets/img/notas/
show_next: true
show: false
---

{% include date_es.html date=page.date time-attributes=' class="post-date"' %}

## Funcionalidades

Ahora voy a explicar en parte como desarrollé algunas funcionalidades para los bloques de código que muestra el siguiente diseño:

{: align="center" }
![img - bloques de código]({{ page.img_path | relative_url | append: 'bloques-de-codigos.png'}})

Algo importante es entender como vamos a desarrolar la funcionalidad para que sea sencillo de reutilizar. En Jekyll tenemos archivos Markdown para escribir páginas con un formato agradable y también jekyll tiene los **includes** que es una forma efectiva de reutilizar bloques de código y contenido en diferentes partes de nuestro sitio web. En resumen la sintaxis que quiero lograr es parecido a lo siguiente:

{% include codeHeader.html file="random-post.md"  %}
````markdown
{% raw %}{% include codeHeader.html %}
```js
const myvar = "hello world";
console.log(myvar);
```{% endraw %}
````

## Copiar al portapapeles

### Paso 1: Crear el archivo include

Primero, necesitamos crear un [archivo include](https://jekyllrb.com/docs/includes/){: target='_blank' } que contendrá el fragmento de HTML para la cabecera o parte superior de los bloques de código. Para creamos el archivo `codeHeader.html` en la carpeta de los includes:

{% include newfile.html file="_includes/codeHeader.html" %}

Vamos a empezar por el botón para copiar al portapapeles. Para ello añadimos el siguiente fragmento al archivo:

{% include codeHeader.html file="codeHeader.html" %}
{2 3 4}
```html
<div class="code-header">
	<button onclick="copyCode(this)">
		<i class="fa-regular fa-clipboard"></i>
	</button>
</div>
```

Como estoy enfocado en desarrollar la funcionalidad, no voy a extender este artículo en cuanto a los estilos, eso quizás lo comente en otro momento. Por ahora lo importante es entender que tenemos un botón que llama o mejor dicho invoca a la función `copyCode(this)` y esto es importante ya que vamos a estar programando esta función en javascript en otro archivo (esto es algo personal, ya que se podría escribir el código de javascript en el mismo include entre etiquetas `script`{: .tag }).

### Paso 2: Crear un archivo js

En otro archivo que voy a llamar `copyClipboard.js` que podemos crear dentro de la carpeta **assets** en el proyecto:

{% include newfile.html file="assets/copyClipboard.js" %}

> no olvidar incluir este script en el layout principal. Ej:<br/>
`<script src="{{ "./copyClipboard.js"  | relative_url }}"></script>`
{: .prompt-note }

Ahora, antes de continuar con enseñar el código, vamos a ver como se renderiza en el navegador cuando escribimos una página y usamos el include:

{% tabs render_include %}
{% tab render_include renderizado %}
{% include codeHeader.html icon="html" %}
{6 7 8 9 10 11 12}
```html
<div class="code-header">
	<button onclick="copyCode(this)">
		<i class="fa-regular fa-clipboard"></i>
	</button>
</div>
<div class="highlight">
	<pre class="highlight">
		<code>
			...
		</code>
	</pre>
</div>
```
{% endtab %}
{% tab render_include markdown %}
{% include codeHeader.html file="random-post.md"  %}
````markdown
{% raw %}{% include codeHeader.html %}
```js
const myvar = "hello world";
console.log(myvar);
```{% endraw %}
````
{% endtab %}
{% endtabs %}

Como podemos observar, todos los elementos que corresponden al bloque de código, se generan a la misma altura que nuestro fragmento del **include**, lo que significa que para seleccionar a ese elemento hermano, podemos utilizar las propiedades del DOM en javascript para acceder a los elementos relacionados.

Entonces escribamos la función para copiar al portapapeles:

{% include codeHeader.html file="assets/clipBoard.js" %}
```js
function copyCode(e) {
	const parent = e.parentElement;
	const code = parent.nextElementSibling.textContent;
	window.navigator.clipboard.writeText(code.trim());
	alert("Copiado!");
}
```
{: .nolineno }


### Paso 3: Resumen

- **`parentNode`**: Para acceder al elemento padre.
- **`nextElementSibling`**: Para obtener el siguiente hermano.
- **`previousElementSibling`**: Para obtener el hermano anterior.
- **`querySelector`**: Para seleccionar hermanos específicos utilizando selectores CSS.
- 

**Ejemplo parentNode:**

{% include codeHeader.html icon="html" codepen="y" %}
```html
<div id="contenedor">
    <p id="parrafo1">Soy el primer párrafo.</p>
    <p id="parrafo2">Soy el segundo párrafo.</p>
    <p id="parrafo3">Soy el tercer párrafo.</p>
</div>

<script>
    const parrafo2 = document.getElementById('parrafo2');
    const padre = parrafo2.parentNode // Obtiene al padre (#contenedor)
    console.log(padre)
</script>
```
{: .nolineno }


**Ejemplo nextElementSibling:**

{% include codeHeader.html icon="html" codepen="y" %}
```html
<div>
    <p id="parrafo1">Soy el primer párrafo.</p>
    <p id="parrafo2">Soy el segundo párrafo.</p>
</div>

<script>
    const primerParrafo = document.getElementById('parrafo1');
    const segundoParrafo = primerParrafo.nextElementSibling; // Selecciona el siguiente hermano

    console.log(segundoParrafo.textContent); // Imprime: "Soy el segundo párrafo."
</script>
```
{: .nolineno }

#### Desglose del Código de copyCliboard

1. **`window.navigator`**:
   - `window` es el objeto global en un entorno de navegador que representa la ventana del navegador.
   - `navigator` es una propiedad del objeto `window` que proporciona información sobre el navegador y su configuración.

2. **`clipboard`**:
   - `clipboard` es una propiedad del objeto `navigator` que permite interactuar con el portapapeles del sistema. Esta API permite leer y escribir datos en el portapapeles de manera programática.

3. **`writeText()`**:
   - `writeText()` es un método de la API del portapapeles que permite escribir texto en el portapapeles. Acepta un argumento: una cadena de texto que se desea copiar.

4. **`code.trim()`**:
   - `code` es la variable que contiene el texto a copiar.
   - `trim()` es un método de cadena en JavaScript que elimina los espacios en blanco al principio y al final de la cadena.

### Paso 4: resultado demo

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="result" data-slug-hash="ZEgLyqv" data-pen-title="copy-clipboard" data-editable="true" data-user="EniDev911" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/EniDev911/pen/ZEgLyqv">
  copy-clipboard</a> by EniDev911 (<a href="https://codepen.io/EniDev911">@EniDev911</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br><br>