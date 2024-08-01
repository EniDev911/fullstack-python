---
layout: post
title: Operando con modelos
subtitle: Ejercicios Guiados - Día 2
modulo: m7
type: ejercicio
show: true
show_next: true
---

## Ejercicio propuesto

En este ejercicio crearemos un proyecto y generamos operaciones sobre datos en el modelo **user**.

Para esto utilizaremos la base de datos por defecto que es sqlite y para realizar los ejercicios **la shell de django**.

1. Iniciamos un nuevo entorno virtual y creamos un proyecto nuevo de django:

{% include codeHeader.html icon="terminal" %}
```bash
pipenv shell
pipenv install django 
django-admin startproject proyecto_capitulo_2
```

{:start="2"}
2. Creamos una aplicación llamada **testdb**:

{% include codeHeader.html icon="terminal" %}
```bash
cd proyecto_capitulo_2
python manage.py startapp testadl
```

{: start="3" }
3. Agregamos la nueva aplicación a la lista `INSTALLED_APP`:

{% include codeHeader.html file="proyecto_capitulo_2/settings.py" %}
```py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'testadl'
]
```
{: .nolineno }

{: start="4" }
4. Volvemos a la terminal. En este caso, no hemos creado modelos, por lo tanto no tenemos que ejecutar el comando `makemigrations`, solo ejecutamos `migrate` para reflejar los modelos por defecto de Django en la base de datos:

{% include codeHeader.html icon="terminal" %}
```bash
python manage.py migrate
```

{:start="5"}
5. Ahora, desde la terminal nos iremos a la shell de Django:

{% include codeHeader.html icon="terminal" %}
```bash
python manage.py shell
```

{:start="6"}
6. Vamos a listar los campos disponibles que tenemos en el modelo User, para eso utilizaremos "`_meta`". El modelo `_meta` del API de django ORM, permite a otros componentes como **queries**, **admin**, **formularios** conocer las capacidades de un determinado modelo, este modelo tiene 2 métodos:

- `Objecto._meta.get_field("nombre_del_campo")` el cual obtiene la información relacionada a este campo, como su tipo de dato.
- `Objeto._meta.get_fields()` el cual retorna una lista con todos los campos disponibles en el modelo.

{1 2 3 4}
```py
>>> from django.contrib.auth.models import User
>>> campos = User._meta.get_fields()
>>> for c in campos:
...   print(c.name)
 logentry
 id
 password
 last_login
 is_superuser
 username
 first_name
 last_name
 email
 is_staff
 is_active
 date_joined
 groups
 user_permission
 >>>
```

{:start="7"}
7. Entonces crearemos 2 usuarios, usando el siguiente código:

{% tabs ex_create %}
{% tab ex_create python %}
{% include codeHeader.html icon="python" %}
```py
u1 = User(username="jdoe", first_name="Jhon", last_name="Doe", email="jdoe@mail.com")
u1.save()
u2 = User(username="ltorvalds", first_name="Linus", last_name="Torvalds", email="ltorvalds@mail.com")
u2.save()
```
{: .nolineno }
{% endtab %}
{% tab ex_create shell django %}
```py
>>> u1 = User(username="jdoe", first_name="Jhon", last_name="Doe", email="jdoe@mail.com")
>>> u1.save()
>>> u2 = User(username="ltorvalds", first_name="Linus", last_name="Torvalds", email="ltorvalds@mail.com")
>>> u2.save()
```
{: .nolineno }
{% endtab %}
{% endtabs %}

{:start="8"}
8. Listamos los usuarios existentes:

{% tabs ex_show %}
{% tab ex_show python %}
{% include codeHeader.html icon="python" %}
```py
from django.contrib.auth.models import User
users = User.objects.all()
for user in users:
	print(user)
```
{: .nolineno }
{% endtab %}
{% tab ex_show shell django %}
```py
>>> from django.contrib.auth.models import User
>>> users = User.objects.all()
>>> for user in users:
...     print(user)
...
jdoe
ltorvalds
```
{: .nolineno }
{% endtab %}
{% endtabs %}

{:start="9"}
9. Eliminamos al usuario Juan Doe y listamos los usuarios existentes, solo debería quedar uno:

{% tabs ex_delete %}
{% tab ex_delete python %}
{% include codeHeader.html icon="python" %}
```py
from django.contrib.auth.models import User
User.objects.filter(username='jdoe').delete()
users = User.objects.all()
for user in users:
	print(user)
```
{: .nolineno }
{% endtab %}
{% tab ex_delete shell django %}
```py
>>> from django.contrib.auth.models import User
>>> User.objects.filter(username='jdoe').delete()
(1, {'auth.User': 1})
>>> users = User.objects.all()
>>> for user in users:
...     print(user)
...
ltorvalds
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Ejercicio propuesto 2

Sobre el mismo proyecto anterior anterior, crear un modelo llamado `Cliente`, y otro llamado `Producto`, `Cliente` debe tener los campos:

- id (autoincremento)
- usuario
- nombre
- apellido
- correo

> **Nota**: El **id**, lo podemos definir como un tipo de dato auto-númerico y con el parámetro `primary-key=True`. Si no lo hacemos el ORM automáticamente lo define. Por lo tanto al definirlo, podemos utilizar un nombre distinto para el campo si así lo deseamos.

El modelo `Producto` debe tener:

- id (autonumerico)
- descripción

En `Producto`, generar un campo `ForeignKey` hacia `Cliente`, donde un `Cliente` puede tener varios productos.

{: align="center" }
```mermaid
%%{init: 
	{ 
		'erDiagram': 
		{
			'layoutDirection': "LR"},
			'theme': 'dark'} 
}%%
---
title: "Relación Cliente - Producto"
---
erDiagram
    c[Cliente] {
    	id int "PK"
        usuario char(50)
        nombre char(50)
        apellido char(50)
        correo char(50)
    }
    p[Producto] {
    	id int "PK"
    	descripcion char(50)
    	cliente int "FK"
    }
    c ||--o{ p : tiene
```

Luego aplicar las migraciones y desde la shell de Django hacemos lo siguiente:

- Crear un usuario
- Agregar dos productos
- Listar el usuario y los productos

> **Nota**: para recuperar los datos de los productos desde el cliente se debe ocupar el `Cliente` con el método `producto_set` (se utiliza el método `_set`, para realizar la consulta reversa). Una consulta directa sería buscar el cliente desde los productos, ya que un producto puede tener un cliente y un cliente muchos productos según nuestro modelo (producto->cliente). Con la consulta reversa, buscamos de una forma más natural para nosotros, desde el cliente a los productos, pero como cliente no tiene una clave foránea apuntando a los productos, debemos realizarlos de esta forma para que el orm haga la búsqueda inversa.


```py
cliente = Cliente.objects.get(pk=1)
productos = cliente.productos_set.all()
```
{: .nolineno }

> **Nota**: Al utilizar pk=1, estamos refiriéndonos al campo "Primary Key" con una abreviación, también podemos utilizar el nombre del campo, por ejemplo `id=1`.

### Solución

1. Creamos dos modelos en el archivo **testadl/models.py**:

{% include codeHeader.html file="testadl/models.py" %}
```py
from django.db import models

class Cliente(models.Model):
	id = models.AutoField(primary_key=True)
	usuario = models.CharField(max_length=50)
	nombre = models.CharField(max_length=50)
	apellido = models.CharField(max_length=50)
	correo = models.EmailField(max_length=50)

class Producto(models.Model):
	id = models.AutoField(primary_key=True)
	descripcion = models.CharField(max_length=50)
	cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
```
{: .nolineno }


{:start="2"}
2. Desde la consola ejecutamos las migraciones:

{% include codeHeader.html icon="terminal" %}
```bash
python manage.py makemigrations
python manage.py migrate
```

{:start="3"}
3. Entramos a la shell:

{% include codeHeader.html icon="terminal" %}
```bash
python manage.py shell
```

{:start="4"}
4. Creamos un cliente y dos productos.

{% tabs stp_4 %}
{% tab stp_4 python %}
{% include codeHeader.html icon="python" %}
```py
from testadl.models import Cliente, Producto
cliente1 = Cliente(usuario="pperez", nombre="Pedro", apellido="Perez", correo="pperez@mail.com")
cliente1.save()
cliente1.producto_set.create(descripcion="Bebida")
cliente1.producto_set.create(descripcion="Pan")
```
{: .nolineno }
{% endtab %}
{% tab stp_4 shell django %}
```py
>>> from testadl.models import Cliente, Producto
>>> cliente1 = Cliente(usuario="pperez", nombre="Pedro", apellido="Perez", correo="pperez@mail.com")
>>> cliente1.save()
>>> cliente1.producto_set.create(descripcion="Bebida")
<Producto: Producto object (1)>
>>> cliente1.producto_set.create(descripcion="Pan")
<Producto: Producto object (2)>
```
{: .nolineno }
{% endtab %}
{% endtabs %}

{:start="5"}
5. Consultamos el usuario y recuperamos los productos:

{% tabs stp_5 %}
{% tab stp_5 python %}
{% include codeHeader.html icon="python" %}
```py
cliente_productos = Cliente.objects.first()
cliente_productos.producto_set.all()
```
{: .nolineno }
{% endtab %}
{% tab stp_5 shell django %}
```py
>>> cliente_productos = Cliente.objects.first()
>>> cliente_productos.producto_set.all()
<QuerySet [<Producto: Producto object (1)>, <Producto: Producto object (2)>]>
```
{: .nolineno }
{% endtab %}
{% endtabs %}


