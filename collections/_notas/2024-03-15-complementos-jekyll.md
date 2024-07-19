---
layout: post
title: "Complementos Jekyll"
img_path: /assets/img/notas/
show_next: true
---

### Prefijo automático

Si bien Jekyll viene con un compilador Sass incorporado, no proporciona prefijos CSS. Una forma que encontré para resolver ese problema es instalando [jekyll-autoprefixer](https://github.com/vwochnik/jekyll-autoprefixer){: target='_blank' } como complemento (*plugin*).

Para ello vamos agregar la gema `jekyll-autoprefixer` al Gemfile (por alguna razón otras versiones a mi no me funciona):

{% include codeHeader.html file="Gemfile" %}
```bash
gem "jekyll-autoprefixer", "1.0.1"
```

Instalamos la gema:

{% include codeHeader.html icon="terminal" %}
```bash
bundle install
```
{: .nolineno }

Para habilitar el complemento, abrimos el archivo `_config.yml` y lo añadimos:

{% include codeHeader.html file="_config.yml"%}
```yml
plugins:
  - jekyll-autoprefixer
```
{: .nolineno }

Ahora veremos que el archivo css que se produce tendrá los prefijos correspondiente. Ej:

{% include codeHeader.html file="main.css" %}
```css
pre {
  -moz-tab-size: 2;
    -o-tab-size: 2;
       tab-size: 2;
}

.rouge-table .lineno {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
```
{: .nolineno }

Luego en el mismo archivo `_config.yml` podemos configurar con la palabra clave `autoprefixer`. Por ejemplo para decir que queremos que los prefijos admitan las útimas 4 versiones de cada navegador, agregamos lo siguiente:

{% include codeHeader.html file="_config.yml"%}
```yml
autoprefixer:
  browsers:
    - last 4 versions
```
{: .nolineno }
