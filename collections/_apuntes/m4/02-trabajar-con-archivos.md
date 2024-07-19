---
layout: post
title: Trabajar con archivos
modulo: m4
type: apunte
show: true
show_next: true
---

### ¿Qué es un FileDescriptor?

Un recurso que permite manipular archivos, resolviendo operaciones de bajo nivel en el sistema operativo que permiten acciones de **entrada** y **salida**.

Se representa por un número entero positivo. En Python normalmente se instancia como una variable de nombre `fd`. Para ello, se requiere hacer uso del método `open` del módulo `os` que permiten la manipulación del archivo (lectura, escritura y cierre).

El uso de un descriptor de archivo está sugerido por acciones de bajo nivel de entrada y salida. Para uso normal, se sugiere utilizar la función nativa de Python `open`, que retorna un objeto de tipo **file**, el cual posee (entre otros) los métodos `read` y `write`, que permiten la lectura y escritura respectivamente.


### Modos de apertura

{: .table }
|Carácter|Significado|
|:-------|:----------|
|`r`|Abierto para lectura (por defeecto)|
|`w`|Abierto para escritura, truncando primero el fichero (elimina su contenido)|
|`x`|Abierto para creación en exclusiva, falla si el fichero ya existe|
|`a`|Abierto para escritura, añadiendo al final del fichero si este existe|
|`b`|Modo binario|
|`t`|Modo texto (por defecto)|
|`+`|Abierto para actualizar (lectura y escritura)|

### Solo lectura

- Solo se puede acceder al contenido de un archivo existente, sin posibilidad de modificarlo.
- Si la ruta especificada en `open` no existe, se lanzará una excepción de tipo `FileNotFoundError`.
- Si el archivo se abre correctamente, y se intenta hacer uso del método que permite escribir contenido en éste, se producirá una excepción de tipo `UnsupportedOperation`.


### ¿Cómo abrir los archivos en modo lectura?

{% include codeHeader.html icon="python" %}
```py
archivo = open("ejemplo.txt")

# modo lectura,  especificado por el segundo argumento 'r'
historial = open("log.txt", 'r')
```
{: .nolineno }

### ¿Cómo leer un archivo completo versus leerlo línea a línea?

Opción 1 - Leer archivo completo

{% include codeHeader.html icon="python" %}
```py
pagina = open("index.html")

pagina.read()
```
{: .nolineno }

Opción 2 - Leer archivo línea a línea

{% include codeHeader.html icon="python" %}
```py
pagina = open("index.html")

lineas = pagina.readlines()
print(lineas)
```
{: .nolineno }

Opción 3 - Leer archivo línea a línea

{% include codeHeader.html icon="python" %}
```py
with open("index.html", "r") as archivo:
	for linea in archivo:
		print(linea.strip())
```
{: .nolineno }


### ¿Cómo cerrar un archivo?

{% include codeHeader.html icon="python" %}
```py
archivo = open("index.html")
archivo.close()
```
{: .nolineno }

### ¿Cómo abrir un archivo en modo de solo escritura?

{% include codeHeader.html icon="python" %}
```py
archivo = open("nuevo_log.log", "w")
```
{: .nolineno }


### ¿Cómo escribir datos en un archivo?

{% include codeHeader.html icon="python" %}
```py
import time

try:
	edad = int(input("Ingrese su edad:\n> "))
except Exception as e:
	with open(f"{round(time.time())}.log", "w") as log:
		log.write(f"ERROR: {e}")
```
{: .nolineno }


### ¿Cómo modificar el nombre de un archivo?

{% include codeHeader.html icon="python" %}
```py
import os

antiguo = os.path.join("logs", "error.txt")
nuevo = os.path.join("logs", "error.log")

os.rename(antiguo, nuevo)
```
{: .nolineno }

### Escritura y lectura

Para abrir un archivo que permita tanto su lectura como escritura (eliminando primero el contenido del archivo abierto), **se debe entregar como segundo argumento** de la función `open` (para el parámetro mode) **el valor** `"r+"`.

Este modo indica que el archivo se ha abierto para actualizar (permite lectura y escritura).

{% include codeHeader.html icon="python" %}
```py
try:
	edad = int(input("Ingrese su edad:\n> "))
except Exception as e:
	with open("ultimo_error.log", "r+") as log:
		log.write(f"ERROR: {e}")
```
{: .nolineno }

### Modo append

Permite abrir un archivo en **modo escritura** en el cual, al hacer uso de `write` (o `writelines`), el nuevo contenido será agregado al final del archivo abierto. En caso de que el archivo entregado como primer argumento no exista, éste será creado.

Puede usarse en combinación con el modo `+`, resultando el valor `"a+"` como segundo argumento de `open`. De esta forma, el archivo abierto también se puede leer.

Al abrir un archivo ya sea en modo `"a"` o `"a+"`, éste se abre apuntando al final del documento. Esto se logra por medio del método `seek`, el cual recibe como argumento la posición (en bytes, un número entero) donde se desea posicionar dentro del archivo. Al ingresar como argumento el valor 0, se posicionaría al comienzo del contenido.

{% include codeHeader.html icon="python" %}
```py
from datetime import datetime

try:
	edad = int(input("Ingrese su edad:\n> "))
except Exception as e:
	with open("error.log", "a+") as log:
		log.seek(0)
		print(log.read())
		now = datetime.now()
		log.write(f"[{now.strftime('%Y-%m-%d %H:%M:%S')}] ERROR: {e}\n")
		log.seek(0)
		print(log.read())
```
{: .nolineno }

### Lectura de bytes

Por medio del método `read` también es posible leer una cantidad en bytes del archivo abierto.

Para ello se debe pasar como argumento de `read` la cantidad de bytes (como número entero) que se desea leer.

El comienzo de **la lectura de los bytes** indicados dependerá de la posición donde se encuentra abierto el archivo; si el archivo es abierto en modo de lectura, se lee (y cuenta la cantidad de bytes) desde el comienzo de su contenido:

{% include codeHeader.html icon="python" %}
```python
with open("error.log") as log:
	log.seek(10)
	print(log.read(10))
# Salida: 3 20:17:05
```
{: .nolineno }

Al **terminar la lectura** de bytes indicadas, la posición de lectura del contenido se mueve al final de la cantidad de bytes indicada:

{% include codeHeader.html icon="python" %}
```python
with open("error.log") as log:
	log.seek(10)
	print(log.read(10))
	print(log.read(10))
# Salida: 
# 3 20:17:05
# ] ERROR: i
```
{: .nolineno }

### ¿Cómo leer un archivo completo por chucks de bytes?

Existen ocasiones en que un archivo requiere ser manejado por bloques de lectura, a menudo debido a recursos limitados del computador frente a archivos de gran tamaño.

A su vez, muchas veces este tipo de manejo coincide con la lectura de datos en modo binario, el cual se obtiene al agregar `"b"` en el modo de apertura.

{% include codeHeader.html icon="python" %}
```python
chunk_size = 70
with open("comprobante_de_pago.pdf", "rb") as archivo:
	chunk = archivo.read(chunk_size)
	while chunk:
		print(chunk)
		chunk = archivo.read(chunk_size)
```
{: .nolineno }

### Resumen modo de aperturas

{: .table }
|Modo|Lee|Escribe|Crea el archivo|Elimina contenido|
|:---|:--:|:-----:|:-------------:|:---------------:|
|`r`|:heavy_check_mark:|:x:|:x:|:x:|
|`r+`|:heavy_check_mark:|:heavy_check_mark:|:x:|:x:|
|`x`|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
|`w+`|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
|`a`|:x:|:heavy_check_mark:|:heavy_check_mark:|:x:|
|`a+`|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:x:|

### Buenas prácticas en el manejo de archivos

En general, al trabajar con archivos, lo más importante es manejar correctamente su apertura y cierre. Es por eso que se recomienda:

- Siempre abrir archivos utilizando el *context manager* `with`, ya que de esta forma el archivo se cerrará en caso de ocurrir alguna excepción, o al llegar al final de su contenido.
- En lugar de usar `with`, envolver la apertura del archivo en un bloque `try/finally`, de forma que siempre se cierre el archivo con `close` dentro de `finally`.