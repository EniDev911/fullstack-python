---
layout: post
title: "Crud Python - Sqlite"
thumbnail: "https://enidev911.github.io/guias/assets/images/python/crud-sqlite-consola.png"
---


## Contexto

Antes de sumergirnos en el ejemplo **CRUD**

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

> Hemos agregado la cláusula `IF NOT EXISTS` para evitar errores cada vez que ejecutemos el script

---

## Insertar datos en la tabla

Ahora que ya hemos creado la tabla en la base de datos, agregaremos algunos registros en la tabla de clientes. Para eso podemos usar el comando `SQL - INSERT` y usando la clase **Cliente** para crear objetos como representaciones de clientes:



{% tabs ej_insertar %}
{% tab ej_insertar main.py %}
{% include codeHeader.html %}
```python
from modelos.cliente import Cliente

import sqlite3

connection = sqlite3.connect("clientes.db")
cursor = connection.cursor()

cliente_1 = Cliente("marco", "contreras", "+569-84687949", "block 327", "coquimbo")

cursor.execute(
    """
  INSERT INTO clientes (nombre, apellido, telefono, email, direccion, ciudad)
  VALUES (:nombre, :apellido, :telefono, :email,:direccion, :ciudad)
    """,
    {
        "nombre": cliente_1.nombre,
        "apellido": cliente_1.apellido,
        "telefono": cliente_1.telefono,
        "email": cliente_1.email,
        "direccion": cliente_1.direccion,
        "ciudad": cliente_1.ciudad,
    },
)

connection.commit()
connection.close()
```
{% endtab %}
{% tab ej_insertar modelos/cliente.py %}
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