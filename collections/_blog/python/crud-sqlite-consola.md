---
layout: post
title: "Crud Python - Sqlite"
category: "python"
subtitle: Guía paso a paso como hacer un SQLITE CRUD en Python.
thumbnail: "https://enidev911.github.io/guias/assets/images/python/crud-sqlite-consola.png"
---

## Comenzando

Creamos un nuevo archivo `main.py`:

{% include newfile.html file="main.py" %}

{% include codeHeader.html file='main.py' %}
```py
def init():
    pass

if __name__ == "__main__":
    init()
```
{: .nolineno }

La instrucción `if __name__ == "__main__":` comprueba si el script se está ejecutando como programa principal. Si es así, llama a la función `init()` que de momento solo tiene la declaración `pass` esto es más que nada para promover la modularidad y la reutilización. Permite que el script sirva como programa independiente y como módulo importable.

### Abrir una nueva conexión a SQLITE

{% include codeHeader.html file='main.py' %}
{1 4}
```py
import sqlite3

def init():
    conexion = sqlite3.connect("cars.db")

if __name__ == "__main__":
    init()
```

Ahora como se puede observar en el código anterior, importamos el módulo de `sqlite3` que viene integrado con Python y dentro de la función `init()` que arranca junto a la ejecución del programa almacenamos en la variable `conexion` una nueva conexión a un archivo llamado **`cars.db`**.

### Crear una tabla en la base de datos

Para facilitarnos la existencia, vamos a modularizar el código, quiere decir que vamos subdividir el programa en más archivos.

Creamos un nuevo archivo `db.py`:

{% include newfile.html file="db.py" %}

{% capture dbmodule %}
import sqlite3
from sqlite3 import Error
import os

CURDIR = os.path.dirname(os.path.abspath(__file__))
FILENAME = "schema.sql"
FILE = os.path.join(CURDIR, "db", FILENAME)

def open_db():
    try:
        con = sqlite3.connect('cars.db')
        return con
    except Error as e:
        print('Error: ', e)

def run_query(sql, params='', multiple=False):

    with open_db() as con:
        cursor = con.cursor()
        try:
            if multiple:
                return cursor.executemany(sql, params)
            else:
                return cursor.execute(sql, params)
        except Error as e:
            print('Error: ', e)

def create_schema():
    with open(FILE, 'r') as sql_file:
        sql_script = sql_file.read()
        schema_created = run_query(sql_script)
        if schema_created.rowcount == -1:
            print("Database created successfully")

if __name__ == "__main__":
    create_schema()
{% endcapture %}

{% include codeHeader.html file='db.py' %}
```py
{{ dbmodule }}
```
{: .nolineno }

Como vemos en primer lugar tenemos que importar el módulo, luego tenemos que definir algunas funciones como:

**`open_db()`**
: Se encargará de crear o abrir la base de datos envultos en un bloque `try/except` para manejar posibles errores.

**`run_query`**
: Esta función va a utilizar la conexión que retorna `open_db` y con ella podemos realizar consultas a la base de datos.

**`create_schema()`**
: La función va a construir el esquema de la base de datos que tenemos que crearlo luego en un archivo `schema.sql`.

{% tabs create_table %}
{% tab create_table main %}
{% include codeHeader.html file='main.py' %}
```py
import db

def init():
    db.create_schema()

if __name__ == "__main__":
    init()
```
{% endtab %}

{% tab create_table db module %}
{% include codeHeader.html file='db.py' %}
```py
{{ dbmodule }}
```
{% endtab %}
{% tab create_table sql %}
{% include codeHeader.html file='db/schema.sql' %}
```sql
CREATE TABLE IF NOT EXISTS cars(
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(12) NOT NULL
);
```
{% endtab %}
{% endtabs %}

### Insertar Datos

Para comenzar con las operaciones del CRUD, creamos un nuevo archivo `crud.py`:

{% include newfile.html file="crud.py"  %}

Y en el archivo vamos a crear una función que pueda utilizar el módulo `db.py` para llamar a la función `run_query` y así insertar algunos datos:

{% capture insert_data %}
import db

def insert_data():
  insert_query = "INSERT INTO cars (brand, model) VALUES(?, ?)"
  cars_data = [
      ('Chevrolet', 'Chevrolet Camaro'),
      ('Chevrolet', 'Chevrolet Captiva'),
      ('Fiat', 'Fiat 125 Mirafiori'),
      ('Fiat', 'Fiat 125 Centurion'),
      ('Honda', 'Honda CR-V'),
      ('Honda', 'Honda CR-X del Sol'),
      ('Honda', 'Honda CR-Z')
  ]

  result = db.run_query(insert_query, cars_data, True)
  print("Record inserted successfully into table", result.rowcount)
{% endcapture %}

{% include codeHeader.html file="crud.py" %}
```py
{{ insert_data}}
```
{: .nolineno }

Ahora, desde el módulo principal `main.py` importamos al módulo `crud.py` y ejecutamos la función `insert_data`:


{% tabs insertdata %}
{% tab insertdata main %}
{% include codeHeader.html file='main.py' %}
{6}
```py
import db
import crud

def init():
    # db.create_schema()
    crud.insert_data()

if __name__ == "__main__":
    init()
```
{% endtab %}
{% tab insertdata crud module %}
{% include codeHeader.html file='crud.py' %}
```py
{{ insert_data }}
```
{% endtab %}
{% tab insertdata db module %}
{% include codeHeader.html file='db.py' %}
```py
{{ dbmodule }}
```
{% endtab %}
{% tab insertdata resultado %}
```
Record inserted successfully into table 7
```
{: .nolineno }
{% endtab %}
{% endtabs %}

### Consultado los datos de la tabla

Recuperamos los datos insertados anteriormente:

{% tabs getdata %}
{% tab getdata main %}
{% include codeHeader.html file='main.py' %}
```py
import db
import crud

def init():
    # db.create_schema()
    # crud.insert_data()
    crud.get_data()

if __name__ == "__main__":
    init()
```
{% endtab %}

{% tab getdata crud module %}
{% include codeHeader.html file='crud.py' %}
```py
import db
from prettytable import from_db_cursor # pip install prettytable

{{ site.data.crud_python_sqlite["crud.py"].get_data }}

{{ site.data.crud_python_sqlite["crud.py"].insert_data }}
```
{% endtab %}

{% tab getdata db module %}
{% include codeHeader.html file='db.py' %}
```py
{{ site.data.crud_python_sqlite["db.py"] }}
```
{% endtab %}

{% tab getdata resultado %}
```
+-------+-----------+--------------------+
| rowid | brand     | model              |
+-------+-----------+--------------------+
| 1     | Chevrolet | Chevrolet Camaro   |
| 2     | Chevrolet | Chevrolet Captiva  |
| 3     | Fiat      | Fiat 125 Mirafiori |
| 4     | Fiat      | Fiat 125 Centurion |
| 5     | Honda     | Honda CR-V         |
| 6     | Honda     | Honda CR-X del Sol |
| 7     | Honda     | Honda CR-Z         |
+-------+-----------+--------------------+
```
{: .nolineno }
{% endtab %}
{% endtabs %}


> `prettytable` es una librería de Python que da formato de tabla a los datos por consola.


---

## Actualización de datos

Podemos actualizar los modelos de autos:


{% tabs updatedata %}
{% tab updatedata main %}
{% include codeHeader.html file='main.py' %}
```python
import db
import crud

def init():
    # db.create_schema()
    # crud.insert_data()
    crud.update_data("CR-V", "HR-V")
    crud.get_data()

if __name__ == "__main__":
    init()
```
{% endtab %}
{% tab updatedata crud module %}
{% include codeHeader.html file='crud.py' %}
```py
import db
from prettytable import from_db_cursor # pip install prettytable

{{ site.data.crud_python_sqlite["crud.py"].update_data }}

{{ site.data.crud_python_sqlite["crud.py"].get_data }}
```
{% endtab %}

{% tab updatedata db module %}
{% include codeHeader.html file='db.py' %}
```py
{{ site.data.crud_python_sqlite["db.py"] }}
```
{% endtab %}
{% tab updatedata resultado %}
```
+-------+-----------+---------------+
| rowid | brand     | model         |
+-------+-----------+---------------+
| 1     | Chevrolet | Camaro        |
| 2     | Chevrolet | Captiva       |
| 3     | Fiat      | Mirafiori     |
| 4     | Fiat      | 125 Centurion |
| 5     | Honda     | HR-V          |
| 6     | Honda     | CR-X del Sol  |
| 7     | Honda     | CR-Z          |
+-------+-----------+---------------+
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Eliminar datos

Eliminar datos desde la tabla:

{% tabs deletedata %}
{% tab deletedata main %}
{% include codeHeader.html file='main.py' %}
```py
import db
import crud

def init():
    # db.create_schema()
    # crud.insert_data()
    # crud.update_data("CR-V", "HR-V")
    crud.delete_data("Camaro")
    crud.get_data()

if __name__ == "__main__":
    init()
```
{% endtab %}

{% tab deletedata crud module %}
{% include codeHeader.html file='crud.py' %}
```py
import db
from prettytable import from_db_cursor # pip install prettytable

{{ site.data.crud_python_sqlite["crud.py"].get_data }}

{{ site.data.crud_python_sqlite["crud.py"].delete_data }}
```
{% endtab %}
{% tab deletedata db module %}
{% include codeHeader.html file='db.py' %}
```py
{{ site.data.crud_python_sqlite["db.py"] }}
```
{% endtab %}
{% tab deletedata resultado %}
```
+-------+-----------+---------------+
| rowid | brand     | model         |
+-------+-----------+---------------+
| 2     | Chevrolet | Captiva       |
| 3     | Fiat      | Mirafiori     |
| 4     | Fiat      | 125 Centurion |
| 5     | Honda     | HR-V          |
| 6     | Honda     | CR-X del Sol  |
| 7     | Honda     | CR-Z          |
+-------+-----------+---------------+
```
{: .nolineno }
{% endtab %}
{% endtabs %}
