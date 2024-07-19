---
layout: post
title: "Añadir bootstrap al proyecto"
img_path: /assets/img/notas/
show_next: true
---

Hasta el momento, venía utilizando bootstrap vía CDN, pero ya que estoy usando Sass, aprovecho de personalizarlo agregando las fuentes al proyecto.


En mi caso voy a crear un nuevo directorio en `_sass/bootstrap`. Esta carpeta contendrá todos los archivos fuentes de [sass de bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/#source-files){: target='_blank'}, separado de mis archivos personalizado. De la carpeta comprimida sólo me interesa `bootstrap-5.3.3/scss/` que contiene los archivos necesarios.

La distribución en el proyecto ahora se ve así:

```bash
📂 _sass
│── 📂 bootstrap
│   │─ 📂 form
│   │─ 📂 helpers
│   │─ 📂 mixins
│   │─ 📂 vendor
│   └─ 📂 utilities
└── base.scss
📂 assets
└── 📂 css
    └─ main.scss
```

### Opción 1: incrustar todo el sass de bootstrap

La forma más sencilla de usar los archivos fuentes dentro de Jekyll es importar el `bootstrap.scss` desde el archivo de entrada `main.scss`, de esa forma se importa todos los archivos Sass restantes de Bootstrap en el orden correcto. El archivo actualizado `main.scss` ahora tiene el siguiente aspecto:

{% include codeHeader.html file="main.scss" %}
```sass
---
---
@import "bootstrap/bootstrap";
@import "base";
```
{: .nolineno }

> **Ojo**: El orden importa, bootstrap debe importarse antes que los estilos personalizados. De lo contrario, el proceso de compilación fallará.

En este punto, los archivos de Bootstrap ya están integrados en mi proyecto de Jekyll. Al reconstruir el proyecto, se aplicaron los estilos de Bootstrap de forma predeterminada. Para verificar que las variables, mixins y otras características de bootstrap se puede usar el archivo `base.scss` y hacer algo como lo siguiente:

{% include codeHeader.html file="base.scss" %}
```scss
$primary: #89A55D;

h1 {
  text-align: center;
  color: $primary;
  background-color: $secondary;
}
```
{: .nolineno }

### Opción 2: incrustar Bootstrap Sass de forma selectiva

En lugar de importar todos los archivos sass de bootstrap, puedo importar sólo los archivos que realmente necesito. En este caso, el orden de las importaciones importa:

{% include codeHeader.html file="main.scss" %}
```scss
---
---
@import "bootstrap/functions";

// 2. Include any default variable overrides here
$primary: #89A55D;

// 3. Include remainder of required Bootstrap stylesheets
@import "bootstrap/variables";
@import "bootstrap/mixins";
@import "bootstrap/root";

// 4. Include any optional Bootstrap CSS as needed
@import "bootstrap/utilities";
@import "bootstrap/reboot";
@import "bootstrap/containers";
@import "bootstrap/forms";
@import "bootstrap/buttons";
@import "bootstrap/transitions";
@import "bootstrap/dropdown";
@import "bootstrap/nav";
@import "bootstrap/navbar";

// 5. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "bootstrap/utilities/api";

// 6. Additional custom code
@import "base";
```
{: .nolineno }

El primer archivo que se debe importar es `functions.scss` ya que es necesario para procesar el código fuente correctamente.
