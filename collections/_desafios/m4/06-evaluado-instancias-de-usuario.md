---
layout: post
title: "Instancias de usuario"
subtitle: "M4 - Desafío Evaluado"
show: true
show_next: true
type: evaluado
modulo: m4
github:
  name: enidev911/m4-evaluado-instancias-de-usuario
---

## Descripción

Se le solicita crear un script Python que permita crear instancias de usuario a partir de los datos entregados en el archivo `usuarios.txt`, y almacene cada instancia creada en una lista.

Cada línea del archivo contiene un texto en estructura **json**, donde cada clave corresponde al nombre de un atributo de `Usuario`, y su valor asociado corresponde al valor que debe tener en dicho atributo cada instancia de usuario creada.

Se le solicita además que se maneje las posibles excepciones en cada intento de leer los datos de un usuario y crear una instancia a partir de ellos. En caso de que se produzca una excepción, se debe añadir a un archivo `error.log`.

---

## Desarrollo

### Requerimiento 1

Crear un archivo `script.py` que permita leer línea a línea el archivo `usuarios.txt`, y crear una instancia de `Usuario` a partir de los datos de cada línea leída.

Creamos el archivo:

{% include newfile.html file='script.py' %}

Luego en un archivo llamado `usuarios.txt` vamos añadir el siguiente contenido:

{% include codeHeader.html file="usuarios.txt" %}
```plaintext
{"nombre": "Page", "apellido": "Stappard", "email": "pstappard0@java.com", "genero": "Bigender"}
{"nombre": "Alli", "apellido": "Truckell", "email": "atruckell1@lulu.com", "genero": "Agender"}
{"nombre": "Nissy", "apellido": "Dell Casa", "email": "ndellcasa2@godaddy.com", "genero": "Female"}
{"nombre": "Corney", "apellido": "Brannan", "email": "cbrannan3@amazon.co.uk", "genero": "Bigender"}
{"nombre": "Ethelyn", "apellido": "Wainscoat", "email": "ewainscoat4@wisc.edu", "genero": "Polygender"}
{"nombre": "Marj", "apellido": "Impy", "email": "mimpy5@youku.com", "genero": "Non-binary"}
{"nombre": "Stacee", "apellido": "Blakeney", "email": "sblakeney6@i2i.jp", "genero": "Agender"}
{"nombre": "Robena", "apellido": "Selcraig", "email": "rselcraig7@jugem.jp", "genero": "Female"}
{"nombre": "Llywellyn", "apellido": "Hendrickson", "email": "lhendrickson8@usgs.gov", "genero": "Genderqueer"}
{"nombre": "Inger", "apellido": "Baldcock", "email": "ibaldcock9@alibaba.com", "genero": "Female"}
```

En el archivo `script.py` añadimos el siguiente contenido (lo destacado es lo que permite leer el archivo línea a línea):

{% include codeHeader.html file="script.py" %}
{12 13 14 15 16 17 18 19 20}
```py
import os, json
from datetime import datetime
from usuario import Usuario

instancias = []

CURDIR = os.path.dirname(os.path.abspath(__file__))
FILENAME = "usuarios.txt"
FILE = os.path.join(CURDIR, FILENAME)

try:
    with open(FILE) as file:
        linea = file.readline()

        while linea:
            usuario = json.loads(linea)
            instancias.append(
			    Usuario(usuario.get("nombre"), usuario.get("apellido"), usuario.get("email"), usuario.get("genero"))
		    )
            linea = file.readline()

        for usuario in instancias:
            print()
            print("Usuario:", usuario.nombre)
            print("Apellido:", usuario.apellidos)
            print("Email:", usuario.email)
            print("Genero:", usuario.genero)
        
except Exception as e:
	...
```

### Requerimiento 2

En el mismo archivo, manejar las posibles excepciones al leer cada línea y/o generar cada instancia, y agregar la excepción en un archivo `error.log`.

En el archivo `script.py` añadimos el siguiente contenido (lo destacado es lo que permite manejar la excepción y escribir en el archivo `error.log`):

{% include codeHeader.html file="script.py" %}
{13 14 15 16 17 18 19 20}
```py
import os, json
from datetime import datetime
from usuario import Usuario

instancias = []

CURDIR = os.path.dirname(os.path.abspath(__file__))
FILENAME = "usuarios.txt"
FILE = os.path.join(CURDIR, FILENAME)

try:
	...
except Exception as e:
    with open("error.log", "a+") as log:
        log.seek(0)
        print(log.read())
        now = datetime.now()
        log.write(f"[{now.strftime('%Y-%m-%d %H:%M:%S')}] ERROR: {e}\n")
        log.seek(0)
        print(log.read())
```

---

## Repositorio

{% include repository.html repo=page.github %}

