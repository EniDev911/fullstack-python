---
layout: post
title: "Crud Python - Sqlite"
thumbnail: "https://enidev911.github.io/guias/assets/images/python/crud-sqlite-consola.png"
---


## Contexto

Antes de sumergirnos

{% tabs modelo %}
{% tab modelo python %}
{% include codeHeader.html %}
```python
class Cliente:

    def __init__(self, nombre, apellido, tel, direccion, ciudad):
        self.nombre = nombre
        self.apellido = apellido
        self.telefono = tel
        self._email = '{}.{}@gmail.com'.format(nombre, apellido)
        self.direccion = direccion
        self.ciudad = ciudad

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, value):
        self._email = value

    @property
    def nombre_completo(self):
        return '{} {}'.format(self.nombre, self.apellido)

    def __repr__(self):
        return "Cliente('{}', '{}', '{}', '{}', '{}')".format(
            self.nombre,
            self.apellido,
            self.telefono,
            self.direccion,
            self.ciudad)
```
{% endtab %}
{% endtabs %}


> `@property` es un decorador incorporado para el uso de captadores y definidores en Python orientado a objetos

---

## Abrir una nueva conexión

Necesitamos crear un objeto de conexión para representar nuestra base de datos. En este caso, nuestra base de datos tendrá el nombre de `clientes.db` este nombre lo usaremos al invocar el método `.connect()` del módulo de sqlite3 y si no encuentra la ubicación del archivo lo crea:

{% include codeHeader.html %}
```py
import sqlite3

conexion = sqlite3.connect('clientes.db')
```

---

## Crear un cursor

Un cursor nos permite interactuar con la base de datos a través de comandos [SQL](https://es.wikipedia.org/wiki/SQL){:target='_blank'}, podemos crear un cursor llamando al método `.cursor()` del objeto de conexión creado previamente:

{% include codeHeader.html %}
```py
import sqlite3

conexion = sqlite3.connect('clientes.db')
cursor = conexion.cursor()
```

Con el cursor a nuestra disposición podemos llamar al método `.execute()` para ejecutar el comando [SQL](https://es.wikipedia.org/wiki/SQL){:target='_blank'} para crear la tabla.

El comando **SQL** que deberíamos ejecutar es de varias líneas, por ende cuando entremos en el método `.execute()` del cursor usaremos **comillas triples** (*docstring*) para envolver el comando **SQL** de la siguiente manera:



{% include codeHeader.html %}
```py
cursor.execute("""
    CREATE TABLE IF NOT EXISTS clientes(
        id INTEGER PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        apellido VARCHAR(50) NOT NULL,
        telefono VARCHAR(12) NOT NULL,
        email VARCHAR(50) NOT NULL,
        direccion VARCHAR(100),
        ciudad VARCHAR(50))
    """)

conexion.commit()
```

