---
layout: post
title: "Consumir Apis"
category: "Python"
thumbnail: /assets/img/python-apis.png
---

## Instalar Request

Antes que todo, debemos instalar la biblioteca [requests](https://pypi.org/project/requests/){: target='_blank'}, entonces procedemos con la instalación usando pip:

{% include codeHeader.html icon="terminal" %}
```bash
pip install requests
```

## Haciendo solicitudes

Para comenzar, usaremos el la biblioteca que acabamos de instalar para enviar una solicitud al sitio [JSONPlaceholder ](https://jsonplaceholder.typicode.com/){: target='_blank' } que es un servicio gratis para consumir una **API REST**. Para ello creamos un script llamado `script.py` y añadimos las siguiente lineas:

{% include codeHeader.html file='script.py' %}
```python
import requests

respuesta = requests.get("https://enidev911.github.io/fullstack-python/")

print(respuesta)
```

Si ahora ejecutamos nuestro script:

{% include codeHeader.html icon="terminal" %}
```bash
python script.py
```
{: .nolineno }

### Códigos de estado

Lo primero que podemos hacer es verificar el código de estado. Los códigos de estados HTTP van desde `1XX` a `5XX`. Los códigos de estados frecuentes que probablemente veamos son `200`, `404`, `500`.

A continuación, veamos el significado de los códigos de estados según su denominación:

- `1XX`: información
- `2XX`: éxito
- `3XX`: redireccionamiento
- `4XX`: error del cliente
- `5XX`: error del servidor

### Encabezados

Otro elemento que podemos obtener de la respuesta son los encabezados. Podemos acceder a través de un diccionaro Python que se encuentra en la propiedad `headers` del objeto de respuesta:

{% include codeHeader.html icon='python' %}
```python
print(respuesta.headers) # {'Date': 'Wed, 01 May 2024 13:37:15 GMT', 'Content-Type': 'application/json; charset=utf-8', 'Transfer-Encoding': 'chunked', 'Connection': 'keep-alive', 'Report-To': '{"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1714495292&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&s=%2FCC1PKoKy0QWpcf2ZYFyAFxs6vdiUDXoaLAFUSb9Rak%3D"}]}', 'Reporting-Endpoints': 'heroku-nel=https://nel.heroku.com/reports?ts=1714495292&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&s=%2FCC1PKoKy0QWpcf2ZYFyAFxs6vdiUDXoaLAFUSb9Rak%3D', 'Nel': '{"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}', 'X-Powered-By': 'Express', 'X-Ratelimit-Limit': '1000', 'X-Ratelimit-Remaining': '999', 'X-Ratelimit-Reset': '1714495323', 'Vary': 'Origin, Accept-Encoding', 'Access-Control-Allow-Credentials': 'true', 'Cache-Control': 'max-age=43200', 'Pragma': 'no-cache', 'Expires': '-1', 'X-Content-Type-Options': 'nosniff', 'Etag': 'W/"6b80-Ybsq/K6GwwqrYkAsFxqDXGC7DoM"', 'Content-Encoding': 'gzip', 'Via': '1.1 vegur', 'CF-Cache-Status': 'HIT', 'Age': '4386', 'Server': 'cloudflare', 'CF-RAY': '87d02a4a4f921e7c-EZE', 'alt-svc': 'h3=":443"; ma=86400'}
print(respuesta.headers["Content-Type"]) # application/json; charset=utf-8
```
{: .nolineno }

En muchas ocasiones, quizás no necesitemos usar la información de encabezado directamente, pero se encuentra allí si se requiere.

### Transformando a JSON

Ahora si sabemos que `application/json` es el tipo de contenido de la respuesta, podemos hacer que Requests convierta la respuesta en un diccionario y una lista para que podamos acceder a los datos con mayor facilidad.

Para ello necesitamos que los datos se analicen como [JSON](https://www.json.org/json-es.html){: target='_blank'}, y eso lo logramos usando el método `.json()` en el objeto de respuesta.

{% include codeHeader.html icon="python" %}
```python
json = respuesta.json() 
print(json) # [{'id': 1, 'name': 'Leanne Graham', 'username': 'Bret', 'email': 'Sincere@april.biz', 'address': {'street': 'Kulas Light', 'suite': 'Apt. 556', 'city': 'Gwenborough', 'zipcode': '92998-3874', 'geo': {'lat': '-37.3159', 'lng': '81.1496'}}, 'phone': '1-770-736-8031 x56442', 'website': 'hildegard.org', 'company': {'name': 'Romaguera-Crona', 'catchPhrase': 'Multi-layered client-server neural-net', 'bs': 'harness real-time e-markets'}}, {...}, {...}, {...}, {....}]
print(type(json)) # <class 'list'>
```
{: .nolineno }

Como podemos observar ya no es un texto simple como en el caso de `respuesta.text`. En este caso nos dice que se trata de una lista.

Al tratarse de una lista entonces supongamos que queremos mostrar sólo el primer elemento. Para ello debemos hacerlo a través de los corchetes `[]` indicando ´su índice que en esta caso sabemos que las listas comienzan con el índice `0`:

{% include codeHeader.html icon="python" %}
```python
print(json[0]) # {'id': 1, 'name': 'Leanne Graham', 'username': 'Bret', 'email': 'Sincere@april.biz', 'address': {'street': 'Kulas Light', 'suite': 'Apt. 556', 'city': 'Gwenborough', 'zipcode': '92998-3874', 'geo': {'lat': '-37.3159', 'lng': '81.1496'}}, 'phone': '1-770-736-8031 x56442', 'website': 'hildegard.org', 'company': {'name': 'Romaguera-Crona', 'catchPhrase': 'Multi-layered client-server neural-net', 'bs': 'harness real-time e-markets'}}
```
{: .nolineno }

Como obtenemos un diccionario, ahora supongamos que solo queremos los datos de una clave en específico. En este caso como se trata de una lista de usuarios digamos que queremos saber el nombre del primer usuario:

{% include codeHeader.html icon="python" %}
```python
print(json[0]['name']) # 'Leanne Graham'
```
{: .nolineno }