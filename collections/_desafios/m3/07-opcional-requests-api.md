---
layout: post
title: Usando requests con API
subtitle: "M3 - Desafío Opcional"
modulo: m3
type: opcional
show: true
show_next: true
github:
  name: enidev911/m3-opcional-requests-api
---

## Descripción

Se tiene una API que contiene cierta información personal de clientes. Esta API está siendo testeada porque otro equipo de desarrolladores quiere integrarla en una aplicación que utiliza información personal de personas.

- Para este desafío, se debe usar la API de pruebas de reqres, disponible en [https://reqres.in/](https://reqres.in/){: target='_blank'}.
- Esta API no requiere autenticación, y su unico recurso es users.
- Todas las solicitudes se hacen a [https://reqres.in/api/users](https://reqres.in/api/users){: target='_blank' }.
- Se considerará para la evaluación, que las respuestas de la API sean exitosa (códigos 2xx).


## Requerimientos


### 1. Obtener a todos los usuarios

Nos socilitan toda la información de los usuarios retornada por la API, debemos almacenarla en una variable llamada `users_data` e imprimirla en pantalla:

{% include codeHeader.html file="requests_get.py" %}
```python
import requests # pip install requests

endpoint = "https://reqres.in/api/users"
respuesta = requests.get(endpoint)

users_data = respuesta.json()['data']
print(*users_data, sep="\n")
```
{: .nolineno }


```plaintext
{'id': 1, 'email': 'george.bluth@reqres.in', 'first_name': 'George', 'last_name': 'Bluth', 'avatar': 'https://reqres.in/img/faces/1-image.jpg'}
{'id': 2, 'email': 'janet.weaver@reqres.in', 'first_name': 'Janet', 'last_name': 'Weaver', 'avatar': 'https://reqres.in/img/faces/2-image.jpg'}
{'id': 3, 'email': 'emma.wong@reqres.in', 'first_name': 'Emma', 'last_name': 'Wong', 'avatar': 'https://reqres.in/img/faces/3-image.jpg'}
{'id': 4, 'email': 'eve.holt@reqres.in', 'first_name': 'Eve', 'last_name': 'Holt', 'avatar': 'https://reqres.in/img/faces/4-image.jpg'}
{'id': 5, 'email': 'charles.morris@reqres.in', 'first_name': 'Charles', 'last_name': 'Morris', 'avatar': 'https://reqres.in/img/faces/5-image.jpg'}
{'id': 6, 'email': 'tracey.ramos@reqres.in', 'first_name': 'Tracey', 'last_name': 'Ramos', 'avatar': 'https://reqres.in/img/faces/6-image.jpg'}
```
{: .nolineno }

### 2. Crear un usuario

Crear un nuevo usuario que tenga el nombre (*name*) de `ignacio` y de trabajo (*job*) `profesor`. Guarda el diccionario de respuesta en una variable llamada `created_user` e imprímela en pantalla:

{% include codeHeader.html file="requests_post.py" %}
```python
import requests

endpoint = "https://reqres.in/api/users"

nuevo_usuario = {
	"name": "ignacio",
	"job": "profesor"
}

respuesta = requests.post(endpoint, nuevo_usuario)

created_user = respuesta.json()
print(created_user)
```
{: .nolineno }


### 3. Actualizar un usuario

Actualizar un usuario llamado `morpheus` para que tenga un campo llamado 'residence' igual a `zion`. Guarde el diccionario de respuesta en una variable llamada `updated_user` e imprímiela en pantalla:

{% include codeHeader.html file="requests_put.py" %}
```python
import requests

endpoint = "https://reqres.in/api/users/2"

usuario_actualizado = {
	"name": "morpheus",
	"residence": "zion"
}

respuesta = requests.put(endpoint, usuario_actualizado)

updated_user = respuesta.json()
print(updated_user)
```
{: .nolineno }

### 4. Eliminar a un usuario

Eliminar a un usuario llamado `Tracey`. Imprima el código de respuesta en pantalla:

{% include codeHeader.html file="requests_delete.py" %}
```python
import requests

endpoint = "https://reqres.in/api/users"
respuesta = requests.get(endpoint)

users_data = respuesta.json()['data']

for user in users_data:
    if user['first_name'] == 'Tracey':
        deleted_user = requests.delete(f"{endpoint}/{user['id']}")
        print(deleted_user.status_code)
```
{: .nolineno }

---

## Repositorio

{% include repository.html repo=page.github %}