---
layout: post
title: "Aplicación Web en Python"
subtitle: "M6 - Desafío Guiado"
show: true
show_next: true
type: guiado
modulo: m6
img_path: /assets/img/desafios/m6-guiado-aplicacion-web-python/
---

## Descripción

Un cliente nos solicita una aplicación web donde tenga la vista `Home`, `About` y `Contact`. En este sentido, la solición es entregarle un ejemplo utilizando Django. Para los contenidos de las vistas se pueden entregar textos de prueba generados por Lorem Ipsum.

En el caso de la vista contact, se sugiere implementar un mini formulario de contacto con HTML.

El registro en el urlpatterns quedaría de la siguiente manera:

```python
urlpatterns = [
	path('admin/', admin.site.urls),
	path('', home),
	path('about/', about),
	path('contact/', contact)
]
```
{: .nolineno }


## Desarrollo

### Requerimiento 1

Crea la vista para el `Home` de la aplicación:

{% tabs req_1 %}
{% tab req_1 vista home %}
{% include codeHeader.html file="app/views.py" %}
```python
from django.template import loader

def home(request: HttpRequest) -> HttpResponse:
	template = loader.get_template("index.html")
	return HttpResponse(template.render())
```
{: .nolineno }
{% endtab %}
{% tab req_1 template %}
{% include codeHeader.html file="app/templates/index.html" %}
```html
<!DOCTYPE html>
<html>
<body>
	<h1>Hello World!</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu diam dignissim velit hendrerit finibus. Nunc tempor sem diam, nec imperdiet magna ultricies quis. Proin tristique egestas ligula sed euismod. Nullam posuere, metus vel finibus dictum, urna dolor porttitor magna, a ultricies mauris nibh eget quam. Phasellus libero dolor, luctus at metus quis, porttitor venenatis ipsum. Mauris hendrerit nulla non dolor fermentum, vel vestibulum enim aliquet. Sed dolor nulla, porttitor ornare congue mollis, blandit at est.</p>
	<p>Vivamus ac suscipit justo. Mauris commodo nisl facilisis eleifend tempor. Pellentesque et aliquet orci. Nulla facilisi. Sed sodales id lacus et ornare. Nulla ut ex pharetra, iaculis purus quis, eleifend ligula. Fusce at suscipit arcu. Nam fringilla odio lacus, a maximus felis iaculis non. Aenean feugiat rutrum ullamcorper. Mauris at sollicitudin augue. Aenean condimentum ut dolor sed pulvinar. Aenean luctus, neque nec lobortis cursus, nulla lorem luctus lectus, ut aliquet metus libero sit amet elit. Nunc ipsum dolor, euismod eu massa ut, ornare viverra odio. Curabitur tincidunt sem vel dapibus vehicula. Cras a sagittis sapien. Fusce sapien lorem, egestas euismod odio in, commodo cursus mi.</p>
	<p>Cras laoreet est vestibulum lacus venenatis, eu suscipit neque scelerisque. Cras vestibulum, turpis vel consectetur malesuada, leo justo scelerisque ligula, quis lobortis turpis sem quis neque. Aenean ut pulvinar ex. Mauris nisl erat, faucibus eget magna et, accumsan vestibulum ex. Aenean varius nisl dictum mauris lacinia aliquet ut non nunc. Aenean scelerisque euismod tempus. Donec nec libero ac mi elementum imperdiet at vitae dolor. Aliquam egestas ipsum eget risus convallis, non scelerisque massa pharetra. Cras nisi lacus, consequat sed commodo a, pharetra vel risus.</p>
</body>
</html>
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Vista en el navegador:

![img - vista home]({{ page.img_path | relative_url | append: 'vista-home.png'}}){: .border .rounded }

---

### Requerimiento 2

Crear la vista para el `About` de la aplicación:

{% tabs req_2 %}
{% tab req_2 vista home %}
{% include codeHeader.html file="app/views.py" %}
```python
def about(request: HttpRequest) -> HttpResponse:
	template = loader.get_template("about.html")
	return HttpResponse(template.render())
```
{: .nolineno }
{% endtab %}
{% tab req_2 template %}
{% include codeHeader.html file="app/templates/about.html" %}
```html
<!DOCTYPE html>
<html>
<body>
	<h1>About</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu diam dignissim velit hendrerit finibus. Nunc tempor sem diam, nec imperdiet magna ultricies quis. Proin tristique egestas ligula sed euismod. Nullam posuere, metus vel finibus dictum, urna dolor porttitor magna, a ultricies mauris nibh eget quam. Phasellus libero dolor, luctus at metus quis, porttitor venenatis ipsum. Mauris hendrerit nulla non dolor fermentum, vel vestibulum enim aliquet. Sed dolor nulla, porttitor ornare congue mollis, blandit at est.</p>
	<p>Vivamus ac suscipit justo. Mauris commodo nisl facilisis eleifend tempor. Pellentesque et aliquet orci. Nulla facilisi. Sed sodales id lacus et ornare. Nulla ut ex pharetra, iaculis purus quis, eleifend ligula. Fusce at suscipit arcu. Nam fringilla odio lacus, a maximus felis iaculis non. Aenean feugiat rutrum ullamcorper. Mauris at sollicitudin augue. Aenean condimentum ut dolor sed pulvinar. Aenean luctus, neque nec lobortis cursus, nulla lorem luctus lectus, ut aliquet metus libero sit amet elit. Nunc ipsum dolor, euismod eu massa ut, ornare viverra odio. Curabitur tincidunt sem vel dapibus vehicula. Cras a sagittis sapien. Fusce sapien lorem, egestas euismod odio in, commodo cursus mi.</p>
	<p>Cras laoreet est vestibulum lacus venenatis, eu suscipit neque scelerisque. Cras vestibulum, turpis vel consectetur malesuada, leo justo scelerisque ligula, quis lobortis turpis sem quis neque. Aenean ut pulvinar ex. Mauris nisl erat, faucibus eget magna et, accumsan vestibulum ex. Aenean varius nisl dictum mauris lacinia aliquet ut non nunc. Aenean scelerisque euismod tempus. Donec nec libero ac mi elementum imperdiet at vitae dolor. Aliquam egestas ipsum eget risus convallis, non scelerisque massa pharetra. Cras nisi lacus, consequat sed commodo a, pharetra vel risus.</p>
</body>
</html>
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Vista en el navegador:

![img - vista about]({{ page.img_path | relative_url | append: 'vista-about.png'}}){: .border .rounded }
