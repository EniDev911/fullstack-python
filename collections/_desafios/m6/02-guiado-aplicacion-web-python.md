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


## Desarrollo

## Requerimiento 1

Crea la vista para el `Home` de la aplicación:

{% include codeHeader.html icon="python" %}
```python
def Home(request: HttpRequest) -> HttpResponse:
	return HttpResponse("")
```

