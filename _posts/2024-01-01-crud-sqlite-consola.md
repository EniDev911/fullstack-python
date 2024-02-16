---
layout: post
title: "Crud Python - Sqlite"
thumbnail: "https://enidev911.github.io/guias/assets/images/python/crud-sqlite-consola.png"
---

## Comenzando

{% tabs main %}
{% tab main main.py %}
{% include codeHeader.html %}
```py
def init():
    pass

if __name__ == "__main__":
    init()
```
{% endtab %}
{% endtabs %}


La instrucción `if __name__ == "__main__":` comprueba si el script se está ejecutando como programa principal. Si es así, llama a la función `init()` que de momento solo tiene la declaración `pass` esto es más que nada para promover la modularidad y la reutilización. Permite que el script sirva como programa independiente y como módulo importable.

---

## Abrir una nueva conexión a SQLITE

{% tabs main %}
{% tab main main.py %}
{% include codeHeader.html %}
```py
import sqlite3

def init():
    conexion = sqlite3.connect("cars.db")

if __name__ == "__main__":
    init()
```
{% endtab %}
{% endtabs %}


Ahora como se puede observar en el código anterior, importamos el módulo de **sqlite3** que viene integrado con Python y dentro de la función `init()` que arranca junto a la ejecución del programa almacenamos en la variable `conexion` una nueva conexión a un archivo llamado **cars.db**.

---

## Crear una tabla en la base de datos

Para facilitarnos la existencia, vamos a modularizar el código, quiere decir que vamos subdividir el programa en partes más pequeñas:

{% tabs main %}
{% tab main main.py %}
{% include codeHeader.html %}
```py
import db

def init():
    db.create_schema()

if __name__ == "__main__":
    init()
```
{% endtab %}

{% tab main db.py %}
{% include codeHeader.html %}
```py
{{ site.data.crud_python_sqlite["db.py"] }}
```
{% endtab %}

{% tab main db/schema.sql %}
{% include codeHeader.html %}
```sql
CREATE TABLE IF NOT EXISTS cars(
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(12) NOT NULL
);
```
{% endtab %}
{% tab main resultado %}
```
Database created successfully
```
{: .nolineno }
{% endtab %}
{% endtabs %}


---

## Insertar Datos

Ahora, insertemos nuevos registros de autos en la tabla **cars**:


{% tabs insertdata %}
{% tab insertdata main.py %}
{% include codeHeader.html %}
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
{% tab insertdata crud.py %}
{% include codeHeader.html %}
```py
import db

{{ site.data.crud_python_sqlite["crud.py"].insert_data }}
```
{% endtab %}
{% tab insertdata db.py %}
{% include codeHeader.html %}
```py
{{ site.data.crud_python_sqlite["db.py"] }}
```
{% endtab %}
{% tab insertdata resultado %}
```
Record inserted successfully into table 7
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Consultado los datos de la tabla

Recuperamos los datos insertados anteriormente:

{% tabs getdata %}
{% tab getdata main.py %}
{% include codeHeader.html %}
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

{% tab getdata crud.py %}
{% include codeHeader.html %}
```py
import db
from prettytable import from_db_cursor # pip install prettytable

{{ site.data.crud_python_sqlite["crud.py"].get_data }}
```
{% endtab %}

{% tab getdata db.py %}
{% include codeHeader.html %}
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
{% tab updatedata main.py %}
{% include codeHeader.html %}
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
{% tab updatedata crud.py %}
{% include codeHeader.html %}
```py
import db
from prettytable import from_db_cursor # pip install prettytable

{{ site.data.crud_python_sqlite["crud.py"].update_data }}

{{ site.data.crud_python_sqlite["crud.py"].get_data }}
```
{% endtab %}

{% tab updatedata db.py %}
{% include codeHeader.html %}
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
{% tab deletedata main.py %}
{% include codeHeader.html %}
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

{% tab deletedata crud.py %}
{% include codeHeader.html %}
```py
import db
from prettytable import from_db_cursor # pip install prettytable

{{ site.data.crud_python_sqlite["crud.py"].delete_data }}

{{ site.data.crud_python_sqlite["crud.py"].get_data }}
```
{% endtab %}
{% tab deletedata db.py %}
{% include codeHeader.html %}
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
