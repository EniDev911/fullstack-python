---
layout: post
title: Desafío guiado - Suricata
modulo: m2
img_path: '/assets/img/desafios/suricata/'
type: guiado
show: true
show_next: true
css:
  navbar: |-
      :root {
        --dark: #212529;
        --white: #fff;
        --pink: #E83E8C;
        --info: #17A2b8;
      }
      .navbar {
          background: var(--pink);
      }
---

## Descripción

En este desafío nos piden crear la página web de **Suricata** aplicando los conceptos y herramientas aprendidas, en nuestro desarrollo debemos considerar lo siguiente:

- Construir un **layout responsivo** (*Mobile First*).
- Realizar la construcción de HTML y CSS siguiendo la maqueta proporcionada.
- Utilizar  [Bootstrap](https://getbootstrap.com/){: target='_blank'}

- **Tipografías**
	- [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=Open){:target='_blank'}
		- Open Sans Regular (400)
		- Open Sans Bold (700)
- **Colores** (*click sobre el color para copiar*)

	- {: data-color='#212529' style='--color:#212529' }
	- {: data-color='#FFF o var(--white)' style='--color:#fff' }
	- {: data-color='#E83E8C o var(--pink)' style='--color:#E83E8C' }
	- {: data-color='#17A2b8 o var(--info)' style='--color:#17A2b8'}

- **Íconos** (*click sobre el ícono para copiar*)

<div class="row g-3 mb-2">
{% for icon in site.data.m2.suricata.icons %}
	<div class="col-4 col-md-2">
		<div class="mini_card cursor" onclick="copyClipboard(this.innerHTML)">
			{{ icon }}
		</div>
	</div>
{% endfor %}
</div>

Para lo anterior se nos proporciona [maqueta](https://xd.adobe.com/spec/dcf92897-39ba-4e9a-4d25-af16b55e2c78-aac8/grid){: target='_blank'} la cual posee dos vistas una para dispositivos móviles y para **PC** de escritorio.

De todas formas veamos el siguiente *wireframe* donde podemos ver un esquema general:

![mockup]({{ page.img_path | relative_url }}/mockup.png)

> **Nota**: El término *wireframe* tiene diferentes uso, pero es empleado en el diseño y desarrollo de aplicaciones móviles y páginas web como una representación visual con el fin de establecer la estructura básica de una página.


---

## Desarrollo

Para cumplir con éxito nuestro desafío es necesario tener una organización como corresponde de los diferentes archivos es por eso que se recomienda utilizar una **estructura de assets** para trabajar.

### Estructura del proyecto

Igual como en el [{{ page.previous.title }}]({{ page.previous.url | relative_url }}) podemos usar el siguiente árbol de directorios basado en la **estructura assets**:

> **Ojo**: Descargar los logos y demás imágenes desde la plataforma o en su defecto [aquí]({{ page.img_path | relative_url | append: 'imagenes-suricata.zip' }}) :point_left:


```bash
📂 suricata
├── 📂 assets
│   ├── 📂 css # 👈 para las hojas de estilos
│   │   └─ style.css
│   ├── 📂 img # 👈 para las imágenes
│   │   │─ bebidas.jpg
│   │   │─ colaciones.jpg
│   │   │─ desayunos.jpg
│   │   │─ dulces.jpg
│   │   │─ empanadas.jpg
│   │   │─ logo.jpg
│   │   │─ logo-footer.jpg
│   │   └─ verduras.jpg
│   ├── 📁 js # 👈 para los archivos de javascript
│   └── 📁 favicons # 👈 para los favicons (opcional)
└── index.html # página principal
```
{: .nolineno }

### Añadir Bootstrap

Para este proyecto nos piden integrar [bootstrap](https://getbootstrap.com/){:target='_blank'}, descargando los archivos e incluirlos en el proyecto.

Para ello debemos seguir los siguientes pasos:

- [<i class="fa-solid fa-file-zipper"></i> Descargar los archivos CSS y JS compilados de bootstrap v5.3.3](https://github.com/twbs/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-dist.zip){:download='bootstrap_v-5.3.3'}
- Extraer el contenido (descomprimelo en la ubicación que desees).
- En la **carpeta CSS** buscamos el archivo `bootstrap.min.css`.
- En la **carpeta JS** buscamos el archivo `bootstrap.bundle.min.js`.
- Movemos los archivos a nuestro proyecto y a su correspondiente carpeta.

Para ser justo, si sólo necesitamos dos archivos, sería mejor descargar dichos archivos directamente y moverlos a nuestro proyecto a la carpeta correspondiente a su extensión, así que simplemente da clic sobre los enlaces a continuación y se descargarán:

- [<i class="fa fa-file"></i> `bootstrap.min.css`](https://raw.githubusercontent.com/EniDev911/assets/main/bootstrap/v5.3.3/css/bootstrap.min.css){: target='_blank' download='bootstrap.min.css'}
- [<i class="fa fa-file"></i> `bootstrap.bundle.min.js`](https://raw.githubusercontent.com/EniDev911/assets/main/bootstrap/v5.3.3/js/bootstrap.bundle.min.js){: target='_blank' download='bootstrap.bundle.min.js'}

Los archivos descargados entonces deberían quedar de la siguiente forma:

```bash
📂 suricata
├── 📂 assets
│   ├── 📂 css
│   │   ├── bootstrap.min.css  # 👈 estilos de bootstrap
│   │   └── style.css # 👈 nuestros estilos
│   └── 📂 js
│       └── bootstrap.bundle.min.js # 👈 funcionalidad de bootstrap
└── index.html # página principal
```
{: .nolineno }


### Vincular bootstrap

Luego de mover los archivos descargados de bootstrap donde corresponde, vamos abrir el `index.html` para vincular los archivos externos como lo muestra el siguiente código:

{% include codeHeader.html file='index.html' %}
```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- aquí los estilos de bootstrap  👇  -->
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<!-- aquí nuestros estilos CSS  👇  -->
	<link rel="stylesheet" href="assets/css/style.css">
	<title>Suricata</title>
</head>
<body>
	<!-- aquí la funcionalidad de bootstrap  👇  -->
	<script src="assets/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```
{: .nolineno }


### Entender el componente navbar

La barra de navegación, o *navbar*, es el primer componente que tenemos que desarrollar. Bootstrap 5 ofrece un conjunto de **clases** y **componentes** dedicados para crear *navbars* responsivas y estilizadas de manera rápida y sencilla, pero no se trata de sólo copiar y pegar los ejemplos que nos pone su documentación, sino que entender como está compuesto el componente como tal.

#### Estructura básica de un Navbar

Un componente *navbar* de bootstrap típico consta de los siguientes elementos:

1. **Contenedor principal** (`nav`{:.tag}): Es el envoltorio para el componente, la clase principal que debe llevar es `.navbar`.
2. **Contenedor de items** (`div class="container-fluid"`{: .tag }): Opcionalmente podemos envolver los elementos del navbar en este contenedor fluido para que ocupe todo el ancho de la ventana.
3. **Botón de Toogler** (`button class="navbar-toggler"`{:.tag}): Este botón, será visible en dispositivos móviles cuando la barra (*navbar*) está colapsada.
4. **Collapsible Content** (`div class="collapse navbar-collapse"`{:.tag}): Es el contenedor de los elementos de la navbar que se colapsarán en dispositivos móviles. Se controla con la clase `.collapse` y se vincula al botón toggler.
5. **Navegación** (`ul class="navbar-nav"`{:.tag}): Los elementos de la barra *navbar*, como enlaces y otros componentes, se colocan dentro de una lista no ordenada (`ul`{:.tag}) con la clase `.navbar-nav`.
6. **Items de Navegación** (`li class="nav-item"`{: .tag}): cada elemento de la barra *navbar* se coloca dentro de un elemento de lista (`li`{:.tag}) con la clase `.nav-item`.
7. **Enlaces** (`a class="nav-link"`{: .tag}): los enlaces dentro de los elementos de la barra *navbar* deben tener la clase `.nav.link`.

### Como se debería ver y comportar el navbar

Como sabemos los componentes *navbars* son responsivos y tienen funcionalidad por ende es importante no solamente **vincular** los estilos de bootstrap sino que también **el archivo de javascript de bootstrap**, de lo contrario nuestra barra de navegación no se desplegaría en dispositivos móviles al presionar el botón. Veamos su aspecto en pantalla:

{% tabs navbar_screen %}
{% tab navbar_screen desktop %}
{: align='center' .border-bottom .border-secondary .pb-2}
![img - navbar]({{ page.img_path | relative_url | append: 'navbar-desktop.png' }})
*barra de navegación en PC*
{% endtab %}
{% tab navbar_screen mobile %}
{: align='center' .border-bottom .border-secondary .pb-2}
![img - navbar]({{ page.img_path | relative_url | append: 'navbar-mobile.png' }})
*barra de navegación en dispositivo móvil*
{% endtab %}
{% endtabs %}

### Desarrollar el navbar de suricata

Después de haber añadido bootstrap y ver la estructura y como se compone un *navbar*, vamos a desarrollar la nuestra para el desafío, el siguiente código debe ir a continuación de la etiqueta `body`{: .tag} de nuestra estructura básica:


{% tabs navbar_suricata %}
{% tab navbar_suricata html %}
{% include codeHeader.html file='index.html' codepen='y' title='navbar suricata' css=page.css.navbar bs=true %}
```html
<!-- NAVBAR MENU -->
<nav class="navbar navbar-dark navbar-expand-lg">
	<div class="container">
		<a class="navbar-brand" href="#">
			<img src="./assets/img/logo.png" alt="logo suricata" height="50">
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar">
			<span class="navbar-toggler-icon"></span>
		</button>
		<!-- collapse menu -->
		<div class="collapse navbar-collapse" id="main-navbar">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item">
					<a class="nav-link active" href="#">Inicio</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Productos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contacto</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
```
{: .nolineno }
{% endtab %}
{% tab navbar_suricata CSS %}
{% include codeHeader.html file='assets/css/style.css' %}
```css
{{ page.css.navbar }}
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Como podemos observar nuestra clase base es `.navbar` en la etiqueta con valor semántico `nav`{:.tag} pero debemos ajustar el componente para que sea responsivo es por ello que seguido lleva la clase `.navbar-expand-lg` para que muestre las opciones del menú en pantallas que superen el *breakpoint lg* quiere decir pantallas con un ancho igual o mayor a `992px`.

Seguido tenemos un `div class="container"`{: .tag } y es para que nuestros elementos no estén pegado a las esquinas:

![img - navbar]({{ page.img_path | relative_url }}/navbar-suricata-container.png)

Después tenemos un etiqueta de **enlace** `a`{:.tag} con la clase `.navbar-brand` que normalmente corresponde poner el nombre de la empresa o producto, pero como tenemos un logo es que dentro de esta etiqueta vinculamos la imagen del logo con una etiqueta de imagen y le definimos la ruta hacia la imagen en el atributo `src` y también su tamaño con el atributo `height`:

{2}
```html
<a class="navbar-brand" href="#">
	<img src="./assets/img/logo.png" alt="logo suricata" height="50">
</a>
```

Seguido tenemos el botón que como sabemos se mostrará sólo en dispositivos móviles y no basta sólo con llevar la clase `.navbar-toggler` ya que para usar el complemento de alternar el menú de navegación cuando se presione el botón (mostrar/ocultar) debemos si o si tener los siguientes atributos que estarán resaltado a continuación:

{3 4}
```html
<button class="navbar-toggler"
	type="button" 
	data-bs-toggle="collapse"
	data-bs-target="#main-navbar">
	<span class="navbar-toggler-icon"></span>
</button>
```
- `data-bs-toggle="collapse"`: atributo para controlar la clase `.collapse` que se encarga de mostrar u ocultar el contenido plegable.
- `data-bs-target="#main-navbar"`: atributo para conectar con el contenido plegable o sea el contenedor de los elementos del menú debe llevar el `id="main-navbar"` y por ende también la clase `.collapse`.

Por último tenemos el contenido plegable:

```html
<div class="collapse navbar-collapse" id="main-navbar">
	<ul class="navbar-nav ms-auto">
		<li class="nav-item">
			<a class="nav-link active" href="#">Inicio</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">Productos</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">Contacto</a>
		</li>
	</ul>
</div>
```
{: .nolineno }

---

## Entender la grilla de bootstrap

**Bootstrap** ofrece una cuadrícula (*grid*) formado por filas compuestas por 12 columnas, en ella se puede especificar cuántas columnas ocupará un solo elemento. No importa cuántos elementos tenga una fila, al final deberán sumar 12 columnas. Por ejemplo veamos un protitipo de página si la quisiera diseñar con la grilla de bootstrap:

<div class="container mb-4">
  <div class="row border border-light" style="background: #292929">
    <div class="col-12 border border-light py-2">
    	Banner de 12 columnas
    </div>
    <div class="col-6 border border-light py-2">
    	Panel Izquierdo de 6 columnas
    </div>
    <div class="col-6 border border-light py-2">
    	Panel Derecho de 6 columnas
    </div>
    <div class="col-3 border border-light py-2">
    	Panel 1 de 4 columnas
    </div>
    <div class="col-3 border border-light py-2">
    	Panel 2 de 4 columnas
    </div>
    <div class="col-3 border border-light py-2">
    	Panel 3 de 4 columnas
    </div>
    <div class="col-3 border border-light py-2">
    	Panel 4 de 4 columnas
    </div>
    <div class="col-12 border border-light py-2">
    	Footer de 12 columnas
    </div>
  </div>
</div>

### Contenedores, Filas y Columnas

Se debe especificar un contenedor usando una clase `.container` o `.container-fluid` para colocar elementos dentro de él. Ahí se especificará una fila y las columnas que se tendrán dentro de ella.

Primero se creará un contenedor como se mencionó, con la clase `.container`:

{1}
```html
<div class="container">
	...
</div>
```

Luego se especificará una fila con la clase `.row`:

{2}
```html
<div class="container">
	<div class="row">
		...
	</div>
</div>
```

Finalmente dentro de la fila podemos crear las columnas con la clase `.col` como sabemos son 12 columnas:

> **Nota**: Añadimos la clase `.border` para ver lo que ocupa cada columna.

{% include codeHeader.html icon='html' codepen='y' title='demo grilla' bs=true %}
```html
<div class="container">
	<div class="row">
		<div class="col border">1</div>
		<div class="col border">2</div>
		<div class="col border">3</div>
		<div class="col border">4</div>
		<div class="col border">5</div>
		<div class="col border">6</div>
		<div class="col border">7</div>
		<div class="col border">8</div>
		<div class="col border">9</div>
		<div class="col border">10</div>
		<div class="col border">11</div>
		<div class="col border">12</div>
	</div>
</div>
```
{: .nolineno }

> **Nota**: **Bootstrap** no permite el uso de más de 12 columnas, en caso de que se especifique de esa manera, la columna sobrante se colocará inmediatamente debajo del resto de las columnas o sea abajo de la primera columna.

### Opciones de cuadrícula

**Bootstrap** utiliza medidas `em` o `rem` en la mayoría de los tamaños, pero cuando se trata de comportamiento responsivo los puntos de interrupción (*breakpoints*) son establecidos en `px` (*píxeles*) así como los anchos de los contenedores. Esto se debe a que el ancho de la ventana gráfica de los diferentes dispositivos se encuentran en **píxeles** y no cambia con el **tamaño de la fuente**.

También **bootstrap** nos ofrece un prefijo para configurar una columna según el dispositivo, basandonos en la siguiente tabla nos podremos guiar de una mejor forma:

<div class="table-responsive">
<table class="table" border="1">
  <thead class="text-center">
    <th class="h1 bg-secondary">📺</th>
    <th class="fit">Muy pequeño<br /><span class="font-weight-normal">&lt;576 px</span></th>
    <th class="fit">Pequeño<br /><span class="font-weight-normal">&ge;576 px</span></th>
    <th class="fit">Medio<br /><span class="font-weight-normal">&ge;768 px</span></th>
    <th class="fit">Grande<br /><span class="font-weight-normal">&ge;992 px</span></th>
    <th class="fit">Extra grande<br /><span class="font-weight-normal">&ge;1200 px</span></th>
  </thead>
  <tbody>
    <tr>
      <th class="fit">Prefijo clase</th>
      <td align="center" class="fit"><code class="fs-5 text-warning">.col-</code></td>
      <td align="center" class="fit"><code class="fs-5 text-warning">.col-sm-</code></td>
      <td align="center" class="fit"><code class="fs-5 text-warning">.col-md-</code></td>
      <td align="center" class="fit"><code class="fs-5 text-warning">.col-lg-</code></td>
      <td align="center" class="fit"><code class="fs-5 text-warning">.col-xl-</code></td>
    </tr>
  </tbody>
</table>
</div>


### Configuración de las columnas

Si tuvieramos que hacer la siguiente distribución para **pantallas grandes** como lo muestra la siguiente ilustración:

![grilla de col-4]({{ page.img_path | relative_url | append: 'ex-col-4.png' }})

Sería fácil aplicar esa configuración de la cuadrícula pensando en que nuestro objetivo son puras pantallas grandes:

{% include codeHeader.html icon='html' codepen='y' title='demo grilla' css='.col-4 { padding: 30px;}' bs=true %}
```html
<div class="container">
	<h2 align="center">Primera Fila</h2>
	<div class="row">
		<div class="col-4 border">
		 <h5>Columna 1</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
		<div class="col-4 border">
		 <h5>Columna 2</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
		<div class="col-4 border">
		 <h5>Columna 3</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
	</div>

	<h2 align="center">Segunda Fila</h2>
	<div class="row">
		<div class="col-4 border">
		 <h5>Columna 1</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
		<div class="col-4 border">
		 <h5>Columna 2</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
		<div class="col-4 border">
		 <h5>Columna 3</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
	</div>
</div>
```
{: .nolineno }

El problema se genera cuando abrimos el inspector con clic derecho y seleccionamos **inspeccionar** o con la combinación de teclas (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>i</kbd>).

Es ahora que necesitamos aplicar la filosofía de *mobile first* y con **boostrap** simplemente consiste en ordenar las clases usando su prefijo `col-` para decirle cuantas columnas usará en los distintivos dispositivos. Vamos al siguiente ejemplo para que comprendas es similar al anterior pero notarás la diferencia:

{% include codeHeader.html icon='html' codepen='y' title='demo grilla responsive' css='.col-12, .col-4 { padding: 30px;}' bs=true %}
```html
<div class="container">
	<h2 align="center">Primera Fila</h2>
	<div class="row">
		<div class="col-12 col-lg-4 border">
		 <h5>Columna 1</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
		<div class="col-12 col-lg-4 border">
		 <h5>Columna 2</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
		<div class="col-12 col-lg-4 border">
		 <h5>Columna 3</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
	</div>

	<h2 align="center">Segunda Fila</h2>
	<div class="row">
		<div class="col-12 col-lg-4 border">
		 <h5>Columna 1</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
		<div class="col-12 col-lg-4 border">
		 <h5>Columna 2</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
		<div class="col-12 col-lg-4 border">
		 <h5>Columna 3</h5>
		 <div class="card">
			<img src="https://simerdeka.untirta.ac.id/_assets/img/simerdeka/konten/default.jpg" alt="" class="card-img-top">
		 </div>
		</div>
	</div>
</div>
```
{: .nolineno }

Si observas bien la primera clase agregada a cada `div`{:.tag} más interno es `.col-12`. Esto es para especificar que cuando el tamaño de la pantalla es extra pequeño (ancho mínimo de `576px` o menos), la columna ocupará toda la fila (las 12 columnas).

Si entendiste como funciona la grilla, vas muy bien para lo que sigue, así que ***ANIMO*** :star2:...

{:align='center'}
![meme](https://i.redd.it/rexwi5zdll531.jpg){:height='300'}

---

## Utilizar el componente card

Este componente es muy sencillo y se compone básicamente de 3 partes principales:

{: align='center' }
![card]({{ page.img_path | relative_url }}/card-simple.png)

Dado que las tarjetas (*cards*) son etiquetas `div`{:.tag}, abarcarán todo el ancho disponible de forma predeterminada. Para establecer un ancho, podemos aplicarlo directamente con **CSS** o colocarlas dentro de la cuadrícula de **bootstrap** que ya sabemos como funciona. En el siguiente ejemplo de código podemos ver el uso del componente **card** dentro de una columna para que adopte diferentes anchos según el dispositivo:


{% include codeHeader.html icon='html' codepen='y' title='demo componente card' bs=true %}
```html
<div class="container">
	<h2 align="center">Componente card</h2>
	<div class="row">
		<div class="col-12 col-md-6 col-lg-4">
			<div class="card">
				<img src="//robohash.org/221" alt="robot" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">Robot aleatorio</h5>
					<p class="card-text">Robot extraido de robohash.org</p>
				</div>
				<div class="card-footer nav">
					<a href="#" class="nav-link">Link</a>
					<a href="#" class="nav-link">Link</a>
				</div>
			</div>
		</div>
	</div>
</div>
```
{: .nolineno }

### Combinar la card con otros componentes

Una card no se limita a usar solo una imagen, un título y texto también podemos combinarlos con listas como sería el componente [ListGroup](https://getbootstrap.com/docs/5.3/components/list-group/){:target='_blank'} y esto es perfecto para poder crear la tarjeta que nos presenta la maqueta del desafío suricata que es parecido a la siguiente ilustración:

{:align='center'}
![card - suricata]({{ page.img_path | relative_url }}/card-suricata.png)

### Desarrollar la grilla para las tarjetas

Para terminar veamos el siguiente código usando las tarjetas con las imágenes de suricata y distribuidas en la grilla de bootstrap:

> **Nota**: Las imágenes son las mismas que las del desafío, pero están siendo vinculadas en otro servidor, por lo que debes indicar la ruta que corresponde a las imágenes de tu proyecto

{% include codeHeader.html icon='html' codepen='y' title='demo grilla responsive suricata' bs=true %}
```html
<div class="container py-5">
  <div class="row g-5">
    <!-- ITEM 1  -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-suricata/colaciones.jpg" alt="imagen colaciones" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title fw-bold">Colaciones</h5>
          <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item nav">
            <a class="nav-link d-inline" href="#">Ver más</a>
            <a class="nav-link d-inline" href="#">Comprar</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- ITEM 2 -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-suricata/desayunos.jpg" alt="imagen desayunos" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title fw-bold">Desayunos</h4>
          <p class="card-text">Iste natus error sit voluptatem accusantium</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item nav">
            <a class="nav-link d-inline" href="#">Ver más</a>
            <a class="nav-link d-inline" href="#">Comprar</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- ITEM 3 -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-suricata/bebidas.jpg" alt="imagen bebidas" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title fw-bold">Bebidas</h4>
          <p class="card-text">Doloremque laudantium, totam rem aperiam, eaque</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item nav">
            <a class="nav-link d-inline" href="#">Ver más</a>
            <a class="nav-link d-inline" href="#">Comprar</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- ITEM 4 -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-suricata/verduras.jpg" alt="imagen verduras" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title fw-bold">Verduras</h4>
          <p class="card-text">Ipsa quae ab illo inventore veritatis et quasi architecto</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item nav">
            <a class="nav-link d-inline" href="#">Ver más</a>
            <a class="nav-link d-inline" href="#">Comprar</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- ITEM 5 -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-suricata/dulces.jpg" alt="imagen dulces" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title fw-bold">Dulces</h4>
          <p class="card-text">Some quick example text to build on the card title and</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item nav">
            <a class="nav-link d-inline" href="#">Ver más</a>
            <a class="nav-link d-inline" href="#">Comprar</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- ITEM 6 -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="//raw.githubusercontent.com/EniDev911/assets/main/desafio-suricata/empanadas.jpg" alt="imagen empanadas" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title fw-bold">Empanadas</h4>
          <p class="card-text">Some quick example text to build on the card title and</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item nav">
            <a class="nav-link d-inline" href="#">Ver más</a>
            <a class="nav-link d-inline" href="#">Comprar</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```
{: .nolineno }

---

## Repositorio

{% tabs suricata %}
{% tab suricata github %}
[![github](https://socialify.git.ci/enidev911/m2-guiado-suricata/image?description=1&descriptionEditable=M2%20%3A%20Suricata%20-%20Desaf%C3%ADo%20guiado&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark){: .card }](https://github.com/EniDev911/m2-guiado-suricata)
{% endtab %}
{% tab suricata github cli %}
{% include codeHeader.html icon='terminal' %}
```bash
gh repo clone EniDev911/m2-guiado-suricata
```
{% endtab %}
{% tab suricata ssh %}
{% include codeHeader.html icon='terminal' %}
```bash
git clone git@github.com:EniDev911/m2-guiado-suricata.git
```
{% endtab %}
{% tab suricata github page %}
{% include ifr_results.html 
  src='https://enidev911.github.io/m2-guiado-suricata/' %}
{% endtab %}
{% endtabs %}

*[VSC]: Visual Studio Code