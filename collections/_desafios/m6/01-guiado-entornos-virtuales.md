---
layout: post
title: "Entornos Virtuales"
subtitle: "M6 - Desafío Guiado"
show: true
show_next: true
type: guiado
modulo: m6
img_path: /assets/img/desafios/m6-guiado-entornos-virtuales/
---


Como profesional del desarrollo web con Django, probablemente te toque (o desees) trabajar en más de un proyecto al mismo tiempo, lo cual plantea ciertas problemáticas como el manejo de los módulos de python requeridospara cada proyecto.

Como sabemos, un proyecto Django es un conjunto de aplicaciones que tienen paquetes de Python de los cuales dependen sus funcionalidades, por lo cual normalmente distintos proyectos tendrán distintas dependencias, o al menos distintas versiones de estas.

> **Importante** Las versiones utilizadas para este desafío, son para intencionar que es posible tener, en un mismo proyecto de Django, múltiples aplicaciones y que estas respondan a versiones distintas. Para obtener información de las últimas versiones de Django, puedes consultar la [documentación oficial](https://docs.djangoproject.com/){: target='_blank'}

### Manejo de múltiples entornos virtuales

Ya conoces los programas utilitarios `pip` y `virtualenvwrapper` y sus usos dentro de un proyecto de Django, es hora de ponerlos en práctica, recuerda que para instalar paquetes en un entorno en específico, este debe encontrarse activado (Recuerda los pasos para activarlos).

Deberás crear 5 entornos virtuales distintos con los siguientes nombres:

- ferretería
- laesquina
- onlyflans
- prestobar
- taller


Para cada entorno virtual deberás instalar las siguientes dependencias:

**ferretería**
: django 3.2.4

**laesquina**
: django en la última versión menor a 3

**onlyflans**
: django 3.2

**prestobar**
: astral en su última versión disponible

**taller**
: pytz en su versión 2019.3

---

## Desarrollo


Instalar Virtualenvwrapper:

{% tabs virtualwrapper %}
{% tab virtualwrapper windows %}
{% include codeHeader.html icon="terminal" %}
```bash
pip install virtualenvwrapper-win
```
{% endtab %}
{% tab virtualwrapper linux %}
{% include codeHeader.html icon="terminal" %}
```bash
pip3 install virtualenvwrapper
```
{% endtab %}
{% endtabs %}

En Windows tenemos que agregar una variable de entorno `WORKON_HOME` para especificar la ruta para almacenar entornos. De manera predeterminada, es %USERPROFILE%\Envs.

{% include codeHeader.html icon="terminal" %}
```bat
setx WORKON_HOME %USERPROFILE%\Envs
```

Y otra cosa es asegurarnos, de que la siguiete ruta se encuentre disponible en el PATH:

{: .fs-6 .p-2 .rounded style="background: #000; border: 1px solid #ccc"}
```txt
C:\Users\<usuario>\AppData\Local\Programs\Python\<Version-Python>\Scripts
```


{: align="center" .rounded }
*Instalación en Debian*
![instalar virtualenvwrapper - img]({{ page.img_path | relative_url | append: 'instalacion-virtualenvwrapper.png'}}){: .rounded .border }


Crear un entorno virtual con Virtualenvwrapper:

{% include codeHeader.html icon="terminal" %}
```bash
mkvirtualenv [nombre-entorno]
```
{: .nolineno }

Ahora podemos crear los entornos solicitados:

{% include codeHeader.html icon="terminal" %}
```bash
mkvirtualenv ferretería
mkvirtualenv laesquina
mkvirtualenv onlyflans
mkvirtualenv prestobar
mkvirtualenv taller
```
{: .nolineno }

**Instalar paquetes y generar los archivos requirements.txt**

Para el entorno ferretería:

{% tabs ferreteria %}
{% tab ferreteria instalar paquete %}
```bash
➜ workon ferretería
(ferretería) ➜  pip install django==3.2.4
```
{% endtab %}
{% tab ferreteria requirements.txt %}
```bash
➜ workon ferretería
(ferretería) ➜  pip freeze > requirements.ferreteria.txt
(ferretería) ➜  cat requirements.ferreteria.txt
   1   │ asgiref==3.8.1
   2   │ Django==3.2.4
   3   │ pytz==2024.1
   4   │ sqlparse==0.5.0
   5   │ typing_extensions==4.12.2
```
{% endtab %}
{% endtabs %}

Para el entorno laesquina:

{% tabs laesquina %}
{% tab laesquina instalar paquete %}
```bash
➜ workon laesquina
(laesquina) ➜  pip install "django>=2,<3"
```
{% endtab %}
{% tab laesquina requirements.txt %}
```bash
➜ workon laesquina
(laesquina) ➜  pip freeze > requirements.laesquina.txt
(laesquina) ➜  cat requirements.laesquina.txt
   1   │ Django==2.2.28
   2   │ pytz==2024.1
   3   │ sqlparse==0.5.0
```
{% endtab %}
{% endtabs %}

Para el entorno onlyflans:

{% tabs onlyflans %}
{% tab onlyflans instalar paquete %}
```bash
➜ workon onlyflans
(onlyflans) ➜  pip install django==3.2.0
```
{% endtab %}
{% tab onlyflans requirements.txt %}
```bash
➜ workon onlyflans
(onlyflans) ➜  pip freeze > requirements.onlyflans.txt
(onlyflans) ➜  cat requirements.onlyflans.txt
   1   │ asgiref==3.8.1
   2   │ Django==3.2
   3   │ pytz==2024.1
   4   │ sqlparse==0.5.0
   5   │ typing_extensions==4.12.2
```
{% endtab %}
{% endtabs %}

Para el entorno prestobar:

{% tabs prestobar %}
{% tab prestobar instalar paquete %}
```bash
➜ workon prestobar
(prestobar) ➜  pip install astral
```
{% endtab %}
{% tab prestobar requirements.txt %}
```bash
➜ workon onlyflans
(prestobar) ➜  pip freeze > requirements.prestobar.txt
(prestobar) ➜  cat requirements.prestobar.txt
 1   │ astral==3.2
```
{% endtab %}
{% endtabs %}

Para el entorno taller:

{% tabs taller %}
{% tab taller instalar paquete %}
```bash
➜ workon taller
(taller) ➜  pip install pytz==2019.3
```
{% endtab %}
{% tab taller requirements.txt %}
```bash
➜ workon taller
(taller) ➜  pip freeze > requirements.taller.txt
(taller) ➜  cat requirements.taller.txt
 1   │ pytz==2019.3
```
{% endtab %}
{% endtabs %}

### Requerimiento 1

Screenshot de la lista de todos los entornos virtuales creados:

{: align="center" .rounded }
*Listar entornos virtuales*
![instalar virtualenvwrapper - img]({{ page.img_path | relative_url | append: 'listar-entornos.png'}}){: .rounded .border }

### Requerimiento 2

En un archivo `requerimientos-desafio1.zip` con respaldos de los requerimientos de todos los entornos virtuales.

<a href="requerimientos-desafio1.zip" class="btn btn-outline-warning">Descargar zip 
<i class="fa-solid fa-file-zipper"></i></a>

### Requerimiento 3

Archivo `requirements-calendarlunar.txt` con respaldo de requerimientos de entorno virtual *calendariolunar*.

Primero creamos el entorno virtual **calendariolunar**:

{% include codeHeader.html icon="terminal" %}
```bash
mkvirtualenv calendariolunar
```

Activamos el entorno:

{% include codeHeader.html icon="terminal" %}
```bash
workon calendariolunar
```

Instalamos desde el archivo [requirements.txt](https://github.com/agapanto/calendariolunar.cl/blob/master/requirements.txt){:target="_blank" }:

{% include codeHeader.html icon="terminal" %}
```bash
pip install -r requirements.txt
```

Y vemos el listado de módulos instalados con `pip frezee`:

```bash
(calendariolunar) ➜  pip freeze | cat
 1   │ asgiref==3.4.1
 2   │ astral==2.2
 3   │ certifi==2021.5.30
 4   │ chardet==4.0.0
 5   │ charset-normalizer==2.0.5
 6   │ Django==3.2.7
 7   │ django-debug-toolbar==3.2.2
 8   │ django-mathfilters==0.4.0
 9   │ djangorestframework==3.12.4
 10  │ gunicorn==20.1.0
 11  │ idna==2.7
 12  │ python-dateutil==2.8.0
 13  │ pytz==2018.4
 14  │ requests==2.26.0
 15  │ six==1.12.0
 16  │ sqlparse==0.2.4
 17  │ urllib3==1.24.2
 18  │ whitenoise==5.3.0
```