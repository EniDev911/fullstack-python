---
layout: post
title: Cargar imágenes (archivos) - Django
category: "django"
modulo: tutorial
img_path: /assets/img/posts/
thumbnail: https://miro.medium.com/v2/resize:fit:1400/0*cANADYxlVZWlfUdv
github:
  name: EniDev911/django-carga-de-archivos
---

### Crear el proyecto Django

Una vez tenemos preparado el entorno con Django instalado, abrimos la terminal y ejecutamos el comando para generar un nuevo proyecto:

{% include codeHeader.html icon="terminal" %}
```bash
django-admin startproject _site .
```

Remplaza **`_site`** con el nombre que desees para el proyecto. Esto generará la estructura de archivos y configuraciones básicas para el proyecto Django.


### Crear una aplicación

Una vez que hayas creado el proyecto Django, podemos crear una aplicación dentro del proyecto. Abrimos la terminal en la carpeta raíz del proyecto. Luego, ejecuta el siguiente comando:

{% include codeHeader.html icon="terminal" %}
```bash
python manage.py startapp galeria
```

Remplaza **`galeria`** con el nombre que quieras darle a la aplicación. Esto creará una nueva carpeta con la estructura necesaria para la aplicación.

### Configurar la aplicación en el proyecto

Antes de continuar, es importante configurar adecuadamente la aplicación y el proyecto Django. Abrimos el archivo `settings.py` dentro de la carpeta de la carpeta del proyecto y realizamos las siguientes modificaciones:

{% include codeHeader.html file="_site/settings.py"  %}
{3 7 8}
```py
INSTALLED_APP = [
  ...,
  'galeria'
]

# En la sección MEDIA_URL y MEDIA_ROOT, agregamos lo siguiente
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```
{: .nolineno }

Estas configuraciones son necesarias para que Django pueda manejar la subida y visualización de imágenes.

### Crear el modelo Imagen

En esta etapa, definiremos el modelo necesario para almacenar las imágenes y sus descripciones o subtítulo. Abrimos el archivo `models.py` de la carpeta de la aplicación y definimos el modelo:

{% include codeHeader.html file="galeria/models.py" %}
```py
from django.db import models

class Imagen(models.Model):
    caption = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/%Y/%m/%d')

    def delete(self, *args, **kwars):
    	 # Guarda la ruta del archivo de imagen
        imagen_path = self.image.path
        # Primero, eliminamos el archivo de la imagen
        super().delete(*args, **kwars)
        if os.path.isfile(imagen_path):
            os.remove(imagen_path)

        # Eliminar carpetas vacías utilizando un bucle while
        folder_path = os.path.dirname(imagen_path)
        while folder_path:
            if os.path.exists(folder_path):
                try:
                    os.rmdir(folder_path) # intenta eliminar la carpeta
                except OSError:
                    break # La carpeta no está vacía, no se elimina
            else:
                break # Se sale del bucle si la carpeta no existe
            folder_path = os.path.dirname(folder_path) # movemos hacia la carpeta padre

    def __str__(self):
        return self.caption
```
{: .nolineno }

En este modelo, hemos definido el campo `caption` para el texto que acompañará a la imagen y definimos `image` para la imagen en sí. La imagen se guardará en la carpeta `media/images/` siguiendo la estructura **año**, **mes** y **día** en la que se subió. Lo interesante aquí es que sobrescribimos el método `delete` para que cuando eliminemos una instancia que tenga una imagen asociada, es importante también eliminar el archivo físico del sistema de archivos para evitar ocupar espacio innecesario.

### Crear el formulario de la imagen

A continuación, vamos a crear un formulario para permitir a los usuarios subit imágenes. Crea un nuevo archivo llamado `forms.py` dentro de la carpeta de la aplicación y agrega el siguiente código:

{% include codeHeader.html file="galeria/forms.py" %}
```py
from django import forms
from .model import Imagen

class ImagenForm(forms.ModelForm):
	class Meta:
		model = Imagen
		fields = ('caption', 'image')
```
{: .nolineno }

Este formulario se vincula directamente con el model **`Imagen`** que definimos anteriormente. Los campos `caption` y `image` se mostrarán en el formulario.

### Crear las vistas de la aplicación

Ahora, debemos definir las vistas necesarias para la subida y visualización de las imágenes de nuestra aplicación, modificamos el archivo `views.py` dentro de la carpeta de la aplicación para definir la vista que manejará la subida de imágenes:

{% include codeHeader.html file="galeria/views.py" %}
{2 3 6 7 9 10 12 13 14 17 18}
```py
from django.shortcuts import render, redirect, get_object_or_404
from .forms import ImagenForm
from .models import Imagen

def index(request):
	if request.method == 'POST':
		form = ImagenForm(request.POST, request.FILES)
		if form.es_valid():
			form.save()
			return redirect('index')
	else:
		form = ImagenForm()
	images = ImageField.objects.all()
	return render(request, 'index.html', {'form': form, 'images': images})

def eliminar_imagen(request, id):
    imagen = get_object_or_404(Imagen, id=id)
    imagen.delete()
    return redirect('index')
```
{: .nolineno }

En esta vista, verificamos si el método de la solicitud es **`POST`**. Si es así, creamos una instancia del formulario **`ImagenForm`** y verificamos si es válido. Si pasa esta validación, guardamos el formulario y redirigimos al usuario nuevamente a la página principal. Si la solicitud no es **`POST`**, simplemente mostramos el formulario vacío.

También obtenemos todas las instancias de las imágenes almacenadas en la base de datos y las pasamos al contexto del renderizado de la página.

Por último tenemos la vista que nos permitirá eliminar la instancia, y llamará al método `delete` que sobrescribimos anteriormente.

### Configurar las URL de la aplicación

Por último, necesitamos definir las URLs necesarias para acceder a las vistas de nuestra aplicación. Abrimos el archivo `urls.py` de la carpeta del proyecto y agregamos el siguiente código:

{% include codeHeader.html file="_site/urls.py" %}
{3 4 5 9 10 13 14}
```py
from django.contrib import admin
from django.urls import path
from galeria import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('delete/<int:id>/', views.eliminar_imagen, name='eliminar_imagen')
]

if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

Para manejar los archivos que suben los usuarios, es necesario la configuración de `MEDIA_URL` y `MEDIA_ROOT` en `settings.py` que ya hicimos en pasos anteriores, la variable `settings.DEBUG` indica si estamos en modo desarrollo (`True`) o en modo producción (`False`), en modo desarrollo, es común servir los archivos estáticos y multimedia directamente desde Django, lo que es conveniente para pruebas y el desarrollo.

Al agregar `urlpatterns += static(...)`, estamos añadiendo nuevas rutas que Django utilizará para servir archivos multimedia. Para explicarlo mejor, la función `static(...)` crea patrones de URL para acceder a los archivos multimedia. Toma dos argumentos:

- `settings.MEDIA_URL`: La URL base para acceder a los archivos multimedia. Por ejemplo, si está configurado como `/media/`, las imágenes estarán disponible en rutas como `http://localhost:8000/media/path/image.jpg`.
- `document_root=settings.MEDIA_ROOT`: Es la carpeta o directorio en el sistema de archivos donde se almacenan esos archivos. Este es el path absoluto en el que Django buscará los archivos que se soliciten.

### Mostrar las imágenes y el formulario

Una vez tengamos configurado correctamente la aplicación de Django, podrás acceder a los archivos para renderizarlos en el template. Ahora creamos la carpeta **`templates`** como una subcarpeta de la aplicación y dentro se crea el archivo `index.html` con el siguiente código:

{% include codeHeader.html file="templates/index.html" %}
{10}
```html
{% raw %}<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Django upload images example</title>
</head>
<body>
    <form method="POST" enctype="multipart/form-data"> <!-- requerido añadir el enctype -->
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Guardar</button>
    </form>
    {% for image in images %}
        <figure style="display: inline-block;">
            <img src="{{ image.image.url }}" alt="{{ image.caption }}" height="200" width="200">
            <figcaption>{{ image.caption }}</figcaption><br />
            <a href="{% url 'eliminar_imagen' image.id %}">Eliminar</a>
        </figure>
    {% endfor %}
</body>
</html>{% endraw %}
```
{: .nolineno }

#### Captura de resultado

![img]({{ page.img_path | relative_url | append: 'django-subir-imagenes.png' }})

### Repositorio

{% include repository.html repo=page.github  %}