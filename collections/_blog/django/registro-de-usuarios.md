---
layout: post
title: Registro de usuarios - Django
category: "django"
thumbnail: https://learn.microsoft.com/es-es/training/achievements/django-create-data-driven-websites.svg
---

## Configurar la aplicación en settings

Añadimos la aplicación al archivo `settings.py` de tu proyecto:

{% include codeHeader.html file="_project/settings.py" %}
{3}
```py
INSTALLED_APPS = [
    # Otras apps
    'users',
]
```

## Crear el formulario de registro

En la aplicación, creamos un archivo `forms.py` para definir un formulario para el registro de usuarios usando `UserCreationForm` que ya lo proporciona Django:

{% include codeHeader.html file="users/forms.py" %}
{6 7 8}
```py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class UserForm(UserCreationForm):
	class Meta:
		model = User
		fields = ['username', 'email', 'password1', 'password2']
```
{: .nolineno }

La clase `Meta` es una forma de definir metadatos para una clase, en este caso el modelo `User` de Django y `fields` que define qué campos del modelo se incluirán en el formulario.


## Crear la vista para manejar el formulario

En `views.py` vamos a definir la vista para manejar el registro:

{% include codeHeader.html file="users/views.py" %}
{2 3 7 9}
```py
from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import UserForm

def register(request):
	if request.method == "POST":
		form = UserForm(request.POST)
		if form.is_valid():
			user = form.save()
			login(request, user)
			return redirect('home')
	else:
		form = UserForm()
	return render(request, 'registration/register.html', {'form': form})
```
{: .nolineno }

Como se destaca en la línea 2, la función `login()` que estamos importando, permite autenticar a un usuario y establecer una sesión para él. En la siguiente línea que se destaca importamos el formulario que definimos anteriormente, luego que preguntamos si la petición del formulario viene por el método `POST`, destacamos la línea que crea una instancia del formulario `UserForm` y asignándola a la variable `form` pero además le pasamos como argumento `request.POST` que contiene los datos en un diccionario para ser usados por Django. Esto permite al formulario validar y procesar los datos enviados por el formulario y gracias a eso podemos preguntar si el formulario es válido con `if form.isvalid()`. Una vez valida los datos del formulario. Si es válido, se pueden procesar los datos para guardarlos en la base de datos con `form.save()`.

## Crear la plantilla de registro

Crear el directorio `templates/registration` dentro de la aplicación y añadimos un archivo llamado `register.html`:

{% include codeHeader.html file="registration/register.html" %}
```html
{% raw %}<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registro</title>
</head>
<body>
    <h2>Registro</h2>
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Registrar</button>
    </form>
</body>
</html>{% endraw %}
```
{: .nolineno }

## Configurar las url

Añadimos la ruta en nuestro archivo `urls.py` del proyecto:

{% include codeHeader.html file="_project/urls.py" %}
```py
from django.urls import path
import users.views as views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', views.register, name='register'),
]
```
{: .nolineno }

## Configurar la página de inicio

Creamos la vista para manejar la página de inicio:

{% include codeHeader.html file="users/views.py" %}
```py
def home(request):
	return render(request, 'home.html')
```
{: .nolineno }

Luego añadimos un link para ir al registro desde la página de inicio que crearemos en `templates/home.html`:

{% include codeHeader.html file="home.html" %}
```html
{% raw %}<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
  </head>
  <body>
    <a href='{% url "login" %}'>Iniciar sesión</a>
    <a href='{% url "register" %}'>Registrarse</a>
  </body>
</html>{% endraw %}
```
{: .nolineno }