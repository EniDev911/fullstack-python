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
```py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class RegisterForm(UserCreationForm):
	email = forms.EmailField(required=True)

	class Meta:
		model = User
		fields = ['username', 'email', 'password1', 'password2']
```
{: .nolineno }


## Crear las vistas para el registro

En `views.py` vamos a definir la vista para manejar el registro:

{% include codeHeader.html file="users/views.py" %}
```py
from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import RegisterForm

def register(request):
	if request.method == "POST":
		form = RegisterForm(request.POST)
		if form.is_valid():
			user = form.save()
			login(request, user)
			return redirect('home')
	else:
		form = RegisterForm()
	return render(request, 'users/register.html', {'form': form})
```
{: .nolineno }


## Crear la plantilla de registro

Crear el directorio `templates/users` dentro de la aplicación y añadimos un archivo llamado `register.html`:

{% include codeHeader.html file="templates/users/register.html" %}
```html
{% raw %}!DOCTYPE html>
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