---
layout: post
title: "Dotenv para variables de entorno"
category: "python"
subtitle: Trabajar con variables de entorno con Dotenv
thumbnail: /assets/img/posts/python-dotenv.png
---

## Introducción

En el desarrollo de aplicaciones, especialmente en entornos de producción, es crucial manejar las configuraciones y secretos de manera segura. La librería **python-dotenv** facilita la carga de variables de entorno desde un archivo `.env` en nuestro proyecto. Esto permite separar la configuración sensible del código fuente, mejorando la seguridad y la mantenibilidad de la aplicación.

## ¿Qué es un archivo .env?

Un archivo `.env` es un archivo de texto plano que contiene pares **clave-valor**. Su uso principal es almacenar las configuraciones, como credenciales de bases de datos, claves API y otros parámetros de configuración que no deberían estar expuestos en el código fuente. Por ejemplo:

{% include codeHeader.html file=".env" %}
```plaintext
DATABASE_URL=postgres://user:password@localhost/db_name
SECRET_KEY=my_secret_key
DEBUG=True
```

## Instalación

Para comenzar a utilizar `python-dotenv`, primero debemos instalar la librería. Podemos hacerlo con el administrador de paquetes `pip`:

{% include codeHeader.html icon="terminal" %}
```bash
pip install python-dotenv
```

## Uso básico

### Cargar variables de entornos

Una vez instalada la librería, podemos cargar las variables de un archivo `.env` en nuestra aplicación con la función `load_dotenv` de la siguiente manera:

{% include codeHeader.html icon="python" %}
{2 5 8 9 10}
```py
import os
from dotenv import load_dotenv

# cargar el archivo .env
load_dotenv()

# Accede a las variables de entorno
database_url = os.getenv("DATABASE_URL")
secret_key = os.getenv("SECRET_KEY")
debug_mode = os.getenv("DEBUG", False) # Valor por defecto si no se encuentra

print(f"Database URL: {database_url}")
print(f"Secret Key: {secret_key}")
print(f"Debug Mode: {debug_mode}")
```


### Cargar la configuración en un diccionario

Es posible tener todas las configuraciones agrupadas en un diccionario, usando **python-dotenv** lo hace fácil con la función `dotenv_values()`. La función `dotenv_values()` funciona más menos de la misma manera que `load_dotenv()`, excepto que no toca el entorno y por ende no es necesario importar la librería `os` para obtener las variables de entornos, solo devuelve un [`dict`](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) con los valores analizados en el archivo `.env`. Ejemplo:

{% tabs load_values %}
{% tab load_values python %}
{% include codeHeader.html icon="python" %}
```py
from dotenv import dotenv_values

config = dotenv_values()

print(config["USUARIO"]) # user1
print(config["DATABASE"]) # store
print(config["PORT"]) # 3306
```
{: .nolineno }
{% endtab %}
{% tab load_values archivo .env %}
{% include codeHeader.html file=".env" %}
```plaintext
USUARIO=user1
DATABASE=store
PORT=3306
```
{% endtab %}
{% endtabs %}

## Consideraciones

Cuando se crea el archivo `.env` en el proyecto con las variables necesarias. Asegúrate de no incluir este archivo en el control de versiones, como Git, recuerda agregar `.env` en el archivo `.gitignore` para evitar que se suba con el resto del código fuente a la plataforma en la nube.