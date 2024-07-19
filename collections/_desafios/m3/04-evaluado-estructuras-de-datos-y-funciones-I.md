---
layout: post
title: Estructuras de datos y funciones I
subtitle: M3 - Desafío Evaluado
modulo: m3
type: evaluado
show: true
show_next: true
github:
  name: enidev911/m3-evaluado-estructuras-de-datos-y-funciones-I
---

## Actividad 1

### Enunciado

Crear un archivo `conversiones.py` y una estructura de datos apropiadas que permita ingresar tasas de conversión. Las distintas tasas de conversión se deben ingresar mediante `sys.argv` en el siguiente orden:

- Sol
- Peso Argentino
- Dolár Americano

Para ello considere las siguientes tasas de conversión de Peso Chileno:

- a Sol peruano: **0.0046**
- a Peso Argentino: **0.093**
- Dólar Americano: **0.00013**

Además, ingrese 4to argumento será el valor chileno a convertir. El programa debe devolver el valor en peso chileno de las 3 divisas ingresadas.

Al ejecutar el programa se espera el siguiente output:

{% include codeHeader.html icon="terminal" %}
```bash
python conversiones.py 0.0046 0.093 0.0013 10000
```

Respuesta esperada:

{% include codeHeader.html icon="terminal" %}
```plaintext
Los 10000 pesos equivalen a:
46.0 Soles
930.0 Pesos Argentinos
13.0 Dólares
```
{: .nolineno }

### Desarrollo

Para comenzar a desarrollar, creamos el script:

{% tabs conversionespy %}
{% tab conversionespy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch conversiones.py
```
{% endtab %}
{% tab conversionespy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > conversiones.py
```
{% endtab %}
{% endtabs %}

Como siempre, un nuevo desafío donde se nos pide leer los valores desde la línea de comandos, como de costumbre sabemos que debemos prevenir que el usuario cometa errores, es por ello que antes de ejecutar el programa validamos la cantidad de elementos en `sys.argv`:

{% include codeHeader.html icon="python" %}
```py
import sys

if len(sys.argv) >= 5:
	print("Ejecutar el programa")

else:
	print("Debes pasarme como mínimo 4 argumentos desde la línea de comando. En este orden:")
	print(*["Sol Peruano", "Peso argentino", "Dólar americano"], sep="\n")
	print("$python conversiones.py 0.0046 0.093 0.0013 10000")
```
{: .nolineno }

Para realizar la conversión es una operación bastante sencilla, ya que sólo debemos multiplicar el indicador de conversión por el valor a covertir, en este caso la cantidad en peso Chileno:

```py
float(indicador) * int(peso_chileno)
```
{: .nolineno }

Nuestro script quedaría de la siguiente manera:

{% tabs activity_1_result %}
{% tab activity_1_result python %}
{% include codeHeader.html file='conversiones.py' %}
```py
import sys

if len(sys.argv) >= 5:

    conversiones = {
        "Soles": sys.argv[1],
        "Pesos Argentinos": sys.argv[2],
        "Dólares": sys.argv[3]
    }

    pesos_chileno = int(sys.argv[4])

    print("Los", pesos_chileno, "equivalen a:")
    for k,v in conversiones.items():
        print(pesos_chileno * float(v), k)

else:
	print("Debes pasarme como mínimo 4 argumentos desde la línea de comando. En este orden:")
	print(*["Sol Peruano", "Peso Argentino", "Dólar americano", "Peso Chileno"], sep="\n")
	print("$python conversiones.py 0.0046 0.093 0.0013 10000")
```
{% endtab %}
{% tab activity_1_result resultado %}
{% include codeHeader.html icon="terminal" %}
```bash
python conversiones.py 0.0046 0.093 0.0013 10000
```
```plaintext
Los 10000 equivalen a:
46.0 Soles
930.0 Pesos Argentinos
13.0 Dólares
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Actividad 2

### Enunciado

El texto **lorem ipsum** es un texto que se utiliza para demostrar tipografías además de usarse para rellenar espacios que requieran largos textos.

Genere un archivo llamado `word_count.py` que importe un texto a Python y realice las siguientes tareas:

- Utilizando una estructura de datos apropiada, cuente la cantidad de caracteres distintos que componen un texto.

- Cuente el número de palabras distintas que componen el texto ingresado. Para separar un texto puede utilizar el método `.split()`


> **TIP:** Para importar texto en python puede adaptar el siguiente código

{% include codeHeader.html icon="python" %}
```python
with open("texto.txt", "r") as file:
	texto = file.read()
```
{: .nolineno }

Donde `texto.txt` corresponderá a la ruta del archivo a importar.

Para comprobar el correcto funcionamiento del código se provee el archivo **lorem_ipsum.txt**. Al ejecutar el programa se espera el siguiente output:

```bash
python word_count.py lorem_ipsum.txt
```
Respuesta esperada:

```plaintext
El número de caracteres distintos es: 40
El número de palabras distintas es: 243
```
{: .nolineno }

### Desarrollo

Creamos un nuevo archivo `word_count.py`:

{% tabs wordcountpy %}
{% tab wordcountpy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch word_count.py
```
{% endtab %}
{% tab wordcountpy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > word_count.py
```
{% endtab %}
{% endtabs %}

Y también colocamos el archivo **lorem_ipsum.txt** dentro del mismo directorio. Debería quedarnos de la siguiente manera:

```bash
📂 estructura-de-datos-y-funciones-I
│── conversiones.py # 👈 script actividad 1
│── word_count.py # 👈 script actividad 2
└── lorem_ipsum.txt # 👈 archivo de texto con el contenido
```

> **Apoyo**: para descargar el archivos de apoyo presiona [aquí](apoyo_estructuras_de_datos_y_funciones_I.zip) 👈

Como nos recomiendan primero vamos abrir el archivo **lorem_ipsum.py** usando el administrador de contexto [`with`](https://book.pythontips.com/en/latest/context_managers.html){: target='_blank'} y almacenamos en una variable llamada **contenido** lo que retorna el método`read()` (descriptor del archivo especificado). Si imprimimos la variable **contenido** observaremos una cadena grandote con todas las palabras que contiene el archivo: 

{% tabs reading_file %}
{% tab reading_file python %}
{% include codeHeader.html icon="python" %}
```python
with open("lorem_ipsum.txt", "r") as file:
	contenido = file.read()
	print(contenido)
```
{: .nolineno }
{% endtab %}
{% tab reading_file resultado %}
```plaintext
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum sit amet felis vel feugiat. Integer vehicula, arcu sed rhoncus sollicitudin, elit lectus vestibulum nulla, vel eleifend arcu nunc at diam. Etiam scelerisque malesuada est, non cursus tellus finibus eget. Nam et ante ac lorem feugiat vehicula fermentum sit amet massa. In dignissim elementum enim. Sed aliquam cursus urna et bibendum. Sed aliquam felis sed augue lacinia, a condimentum leo tempus. Nam eget dui quis sapien dignissim lobortis.
Nam elementum justo tortor, pharetra finibus enim facilisis quis. In egestas, nibh eu rhoncus laoreet, diam dui vehicula eros, non iaculis metus dui maximus dolor. Aenean sed nunc scelerisque, egestas enim in, congue nisi. Curabitur vestibulum tellus id rhoncus ornare. Pellentesque egestas id odio id lobortis. Etiam commodo auctor molestie. Sed dignissim interdum magna. Suspendisse volutpat lacus nisi, a tempor metus maximus nec. Morbi egestas orci vitae arcu suscipit, sit amet commodo arcu facilisis.
Morbi gravida tincidunt lobortis. Vestibulum vel dignissim dui. Vestibulum consequat nisl id hendrerit sagittis. Phasellus pellentesque augue quis turpis bibendum volutpat. Nam cursus nunc sit amet felis eleifend fringilla. Nam id elementum mi, varius sollicitudin sapien. Aenean sem nisl, elementum sit amet lacus vitae, venenatis laoreet turpis. Sed finibus, elit tempus sodales sodales, sapien erat consectetur lectus, vitae congue magna tortor id quam. Duis tempor augue eu sapien ultricies, et volutpat nisl fringilla. Nulla in nulla et enim gravida congue. Maecenas vitae nunc non felis pharetra sollicitudin eget a risus. Ut aliquet volutpat dignissim. Sed egestas, ipsum at condimentum ultricies, lectus leo scelerisque eros, fringilla consectetur tellus lectus nec urna.
Vivamus urna magna, vulputate sit amet lacus sit amet, faucibus vehicula lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique urna vitae nisi volutpat sagittis. Aliquam ornare, sem vitae pulvinar euismod, sem dolor dignissim nulla, ac ornare lacus nunc et mauris. Ut bibendum, mi non placerat ultricies, urna leo rhoncus quam, nec tincidunt sapien enim vitae nibh. Duis ullamcorper augue ac justo volutpat, in rhoncus enim feugiat. Donec auctor, magna luctus accumsan tristique, lacus nibh scelerisque ante, bibendum laoreet felis ex a magna. Morbi nec mi iaculis, ornare nisl et, aliquet purus. Ut semper, arcu a eleifend tristique, sem orci scelerisque purus, ut elementum enim nulla nec dolor. Pellentesque sapien orci, tempus a dignissim id, tempor ac metus. Quisque id velit ante. Morbi scelerisque lorem nec est scelerisque ullamcorper. Vivamus et turpis feugiat, facilisis quam ac, eleifend diam. Maecenas in diam ac justo fermentum lacinia eu quis lorem. Maecenas sit amet felis aliquam nunc pretium porttitor nec eu nunc. Praesent lobortis mi orci, eu ultricies magna eleifend vel.
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Sin embargo nuestro programa debe contar la cantidad de caracteres y palabras que sean distintas. Para ello el siguiente paso es separar las palabras a través del método `.split()`:


{% tabs separar_palabras %}
{% tab separar_palabras python %}
{% include codeHeader.html icon="python" %}
```python
with open("lorem_ipsum.txt", "r") as file:
	contenido = file.read()
	separado = contenido.split()
	print(separado)
```
{: .nolineno }
{% endtab %}
{% tab separar_palabras resultado %}
```plaintext
['Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipiscing', 'elit.', 'Fusce', 'elementum', 'sit', 'amet', 'felis', 'vel', 'feugiat.', 'Integer', 'vehicula,', 'arcu', 'sed', 'rhoncus', 'sollicitudin,', 'elit', 'lectus', 'vestibulum', 'nulla,', 'vel', 'eleifend', 'arcu', 'nunc', 'at', 'diam.', 'Etiam', 'scelerisque', 'malesuada', 'est,', 'non', 'cursus', 'tellus', 'finibus', 'eget.', 'Nam', 'et', 'ante', 'ac', 'lorem', 'feugiat', 'vehicula', 'fermentum', 'sit', 'amet', 'massa.', 'In', 'dignissim', 'elementum', 'enim.', 'Sed', 'aliquam', 'cursus', 'urna', 'et', 'bibendum.', 'Sed', 'aliquam', 'felis', 'sed', 'augue', 'lacinia,', 'a', 'condimentum', 'leo', 'tempus.', 'Nam', 'eget', 'dui', 'quis', 'sapien', 'dignissim', 'lobortis.', 'Nam', 'elementum', 'justo', 'tortor,', 'pharetra', 'finibus', 'enim', 'facilisis', 'quis.', 'In', 'egestas,', 'nibh', 'eu', 'rhoncus', 'laoreet,', 'diam', 'dui', 'vehicula', 'eros,', 'non', 'iaculis', 'metus', 'dui', 'maximus', 'dolor.', 'Aenean', 'sed', 'nunc', 'scelerisque,', 'egestas', 'enim', 'in,', 'congue', 'nisi.', 'Curabitur', 'vestibulum', 'tellus', 'id', 'rhoncus', 'ornare.', 'Pellentesque', 'egestas', 'id', 'odio', 'id', 'lobortis.', 'Etiam', 'commodo', 'auctor', 'molestie.', 'Sed', 'dignissim', 'interdum', 'magna.', 'Suspendisse', 'volutpat', 'lacus', 'nisi,', 'a', 'tempor', 'metus', 'maximus', 'nec.', 'Morbi', 'egestas', 'orci', 'vitae', 'arcu', 'suscipit,', 'sit', 'amet', 'commodo', 'arcu', 'facilisis.', 'Morbi', 'gravida', 'tincidunt', 'lobortis.', 'Vestibulum', 'vel', 'dignissim', 'dui.', 'Vestibulum', 'consequat', 'nisl', 'id', 'hendrerit', 'sagittis.', 'Phasellus', 'pellentesque', 'augue', 'quis', 'turpis', 'bibendum', 'volutpat.', 'Nam', 'cursus', 'nunc', 'sit', 'amet', 'felis', 'eleifend', 'fringilla.', 'Nam', 'id', 'elementum', 'mi,', 'varius', 'sollicitudin', 'sapien.', 'Aenean', 'sem', 'nisl,', 'elementum', 'sit', 'amet', 'lacus', 'vitae,', 'venenatis', 'laoreet', 'turpis.', 'Sed', 'finibus,', 'elit', 'tempus', 'sodales', 'sodales,', 'sapien', 'erat', 'consectetur', 'lectus,', 'vitae', 'congue', 'magna', 'tortor', 'id', 'quam.', 'Duis', 'tempor', 'augue', 'eu', 'sapien', 'ultricies,', 'et', 'volutpat', 'nisl', 'fringilla.', 'Nulla', 'in', 'nulla', 'et', 'enim', 'gravida', 'congue.', 'Maecenas', 'vitae', 'nunc', 'non', 'felis', 'pharetra', 'sollicitudin', 'eget', 'a', 'risus.', 'Ut', 'aliquet', 'volutpat', 'dignissim.', 'Sed', 'egestas,', 'ipsum', 'at', 'condimentum', 'ultricies,', 'lectus', 'leo', 'scelerisque', 'eros,', 'fringilla', 'consectetur', 'tellus', 'lectus', 'nec', 'urna.', 'Vivamus', 'urna', 'magna,', 'vulputate', 'sit', 'amet', 'lacus', 'sit', 'amet,', 'faucibus', 'vehicula', 'lacus.', 'Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipiscing', 'elit.', 'Curabitur', 'tristique', 'urna', 'vitae', 'nisi', 'volutpat', 'sagittis.', 'Aliquam', 'ornare,', 'sem', 'vitae', 'pulvinar', 'euismod,', 'sem', 'dolor', 'dignissim', 'nulla,', 'ac', 'ornare', 'lacus', 'nunc', 'et', 'mauris.', 'Ut', 'bibendum,', 'mi', 'non', 'placerat', 'ultricies,', 'urna', 'leo', 'rhoncus', 'quam,', 'nec', 'tincidunt', 'sapien', 'enim', 'vitae', 'nibh.', 'Duis', 'ullamcorper', 'augue', 'ac', 'justo', 'volutpat,', 'in', 'rhoncus', 'enim', 'feugiat.', 'Donec', 'auctor,', 'magna', 'luctus', 'accumsan', 'tristique,', 'lacus', 'nibh', 'scelerisque', 'ante,', 'bibendum', 'laoreet', 'felis', 'ex', 'a', 'magna.', 'Morbi', 'nec', 'mi', 'iaculis,', 'ornare', 'nisl', 'et,', 'aliquet', 'purus.', 'Ut', 'semper,', 'arcu', 'a', 'eleifend', 'tristique,', 'sem', 'orci', 'scelerisque', 'purus,', 'ut', 'elementum', 'enim', 'nulla', 'nec', 'dolor.', 'Pellentesque', 'sapien', 'orci,', 'tempus', 'a', 'dignissim', 'id,', 'tempor', 'ac', 'metus.', 'Quisque', 'id', 'velit', 'ante.', 'Morbi', 'scelerisque', 'lorem', 'nec', 'est', 'scelerisque', 'ullamcorper.', 'Vivamus', 'et', 'turpis', 'feugiat,', 'facilisis', 'quam', 'ac,', 'eleifend', 'diam.', 'Maecenas', 'in', 'diam', 'ac', 'justo', 'fermentum', 'lacinia', 'eu', 'quis', 'lorem.', 'Maecenas', 'sit', 'amet', 'felis', 'aliquam', 'nunc', 'pretium', 'porttitor', 'nec', 'eu', 'nunc.', 'Praesent', 'lobortis', 'mi', 'orci,', 'eu', 'ultricies', 'magna', 'eleifend', 'vel.', 'Sed', 'nec', 'erat', 'quis', 'nisi', 'finibus']
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Como podemos observar ahora tenemos una lista con cada palabra en su interior, eso quiere decir que la podemos recorrer a través de un **bucle** y efectuar las acciones correspondiente. Primero vamos a descartar las palabras repetidas, esto se puede lograr de varias formas, comencemos con la más básica que :

{% tabs filtrando_palabras %}
{% tab filtrando_palabras python %}
{% include codeHeader.html icon='python' %}
```python
with open("lorem_ipsum.txt", "r") as file:
	contenido = file.read()
	palabras_separadas = contenido.split(" ")
      
palabras_distintas = []

for palabra in palabras_separadas:
    if palabra not in palabras_distintas:
        palabras_distintas.append(palabra)

print(len(palabras_separadas))
print(len(palabras_distintas))
```
{: .nolineno }
{% endtab %}
{% tab filtrando_palabras explicación %}
{:  .p-3 .rounded style='background: #191919' }
Lo que hacemos es crearnos una lista que almacenará el resultado, en este caso la nombramos como **palabras_distintas** y luego recorremos la lista original con un bucle `for` esta lista son todas las palabras que obtuvimos del archivo **lorem_ipsum.txt** que logramos dividirlas gracias al método `split()`. En el bucle declaramos la condición `if palabra not in valores_unicos`, siendo `palabra` el elemento que estamos iterando actualmente, si este ya está en la lista **palabras_distintas** no la agrega y sigue con la siguiente, si no está lo que hará es añadirla a la lista **palabras_distintas** a través del método `append()`.
{% endtab %}
{% tab filtrando_palabras resultado %}
```plaintext
525
243
```
{: .nolineno }
{% endtab %}
{% endtabs %}


Otra forma es crear un [set](https://docs.python.org/es/3/tutorial/datastructures.html#sets){: target='_blank' } y convertilo en una lista de nuevo. Un set es una estructura de datos que solo almacena elementos únicos (sin duplicados).

> **Condideración**: Este método no respetará el orden de los datos de la lista, esto sobretodo cuando se trabaja con elementos que son números.

{% include codeHeader.html icon="python" %}
```python
with open("lorem_ipsum.txt", "r") as file:
	contenido = file.read()
	palabras_separadas = contenido.split()
      
palabras_unicas = set(palabras_separadas)

print(len(palabras_separadas))
print(len(palabras_unicas))
```
{: .nolineno }

Dejare sólo estos dos métodos ya que son de fácil comprensión y no necesitan importar módulos externos para funcionar, por lo que no tiene sentido nombrar las otras maneras de crear valores únicos.

Para el caso de los caracteres es más sencillo, ya que solo nos basta analizar la cadena completa y crear una lista que almacena sólo los caracteres que no se repitan. Para ello veremos otro método particular de los string `.join()` que nos va a permitir unir el contenido dividido anteriormente:

{% include codeHeader.html icon="python" %}
```python
with open("lorem_ipsum.txt", "r") as file:
	contenido = file.read()
	palabras_separadas = contenido.split(" ")
      
palabras_unicas = set(palabras_separadas)
caracteres_unicos = set(" ".join(palabras_separadas))

print(len(palabras_separadas))
print(len(palabras_unicas))
print(len(caracteres_unicos))
```
{: .nolineno }

### Desarrollo

El script final nos quedaría de la siguiente manera:


{% include codeHeader.html file="word_count.py" %}
```python
import os

CUR_DIR = os.path.dirname(__file__)

with open(os.path.join(CUR_DIR, "lorem_ipsum.txt"), "r") as file:
	contenido = file.read()
	palabras_separadas = contenido.split(" ")
      
palabras_unicas = set(palabras_separadas)
caracteres_unicos = set(" ".join(palabras_separadas))

print("El número de caracteres distintos es:", len(caracteres_unicos))
print("El número de palabras distintas es:", len(palabras_unicas))
```
{: .nolineno }

{% include codeHeader.html icon="terminal" %}
```bash
python word_count.py
```

```
El número de caracteres distintos es: 40
El número de palabras distintas es: 243
```
{: .nolineno }

---

## Actividad 3

### Enunciado

Se provee el archivo `recordatorios.py` que incluye una serie de eventos que quieren ser recordados por usted. El formato de estos recordatorios son una fecha (año-mes-día), una hora y una descripción del evento.

Aplicando métodos apropiados para la estructura de datos entregada edite la lista recordatorios de la siguiente manera:

1. Agregue un evento el `2 de Enero de 2021` a las `6 de la mañana` para `"Empezar el Año"`.
2. Al revisar los eventos, nota un error, ya que el `15 de Julio` no es feriado. Editar de tal manera que sea el `16 de Julio`.
3. Lamentablemente le tocará trabajar el día del trabajo (`1 de Mayo`). Elimine el evento del día de trabajo.
4. Agregue una cena de Navidad (`24 de diciembre`) y de Año Nuevo (`31 de diciembre`) cuando corresponda. Ambas a las `22 hrs`.

> **Apoyo**: para descargar el archivos de apoyo presiona [aquí](apoyo_estructuras_de_datos_y_funciones_I.zip) 👈

### Desarrollo

{% include codeHeader.html file="recordatorios.py" compiler="y" %}
```python
recordatorios = [['2021-01-01', "11:00", "Levantarse y ejercitar"],
 ['2021-05-01', "15:00", "No trabajar"],
 ['2021-07-15', "13:00", "No hacer nada es feriado"],
 ['2021-09-18', "16:00", "Ramadas"],
 ['2021-12-25', "00:00", "Navidad"]]

# Formato: (YEAR-MONTH-DAY)

# 1. Agregue un evento el 2 de febrero del 2021 a las 6 de la mañana
# para 'Empezar el Año'
recordatorios.insert(1, ["2021-01-02", "06:00", "Empezar el Año"])

# 2. Al revisar los eventos, nota un error, ya que el 15 de Julio no es feriado.
# Editar de tal manera que sea el 16 de Julio.
pos = recordatorios.index(['2021-07-15', "13:00", "No hacer nada es feriado"])
recordatorios[pos][0] = '2021-07-16'

# 3. Lamentablemente le tocará trabajar el día del trabajo (2021-05-01).
# Elimine el evento del día del trabajo.
recordatorios.remove(['2021-05-01', "15:00", "No trabajar"])

# 4. Agregue una cena de Navidad y de Año Nuevo cuando corresponda
# Ambas a las 22:00 hrs
pos = recordatorios.index(['2021-12-25', "00:00", "Navidad"])
recordatorios.insert(pos, ['2021-12-24', "22:00", "Cena de Navidad"])
recordatorios.append(['2021-12-31', "22:00", "Cena de Año Nuevo"])

# Output
print(*recordatorios, sep="\n")
```

---

## Repositorio

{% include repository.html repo=page.github %}