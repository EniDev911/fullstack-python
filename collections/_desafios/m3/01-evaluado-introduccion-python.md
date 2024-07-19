---
layout: post
title: Introducción a Python
subtitle: M3 - Desafío Evaluado
modulo: m3
type: evaluado
show: true
show_next: true
---

## Descripción

En este desafío nos piden desarrollar 2 actividades para validar los conocimientos realizando cálculos simples en Python usando operaciones básicas.


## Actividad 1 - Velocidad de escape

La velocidad de escape de un planeta se define como la mínima velocidad necesaria para salir de un planeta venciendo la gravedad. La velocidad de escape se calcula mediante la siguiente fórmula:

{: align='center' .fs-1 .text-warning }
$V_e=\sqrt{2gr}$

- `Ve`: corresponde a la Velocidad de Escape en `[m/s]`.
- `g`: corresponde a la constante gravitacional en `[m/s2]`.
- `r`: Corresponde al radio del planeta en `[m]`.


1. Se solicita crear un script `escape.py` que permita calcular la velocidad de escape ingresando como datos de entradas el radio `r` y la constante `g`. Los datos de entrada deben ingresarse de manera interactiva utilizando la función `input()`.

2. El programa debe especificar claramente el formato en el que se deben entregar los
datos de entrada con instrucciones apropiadas.

**Ejemplo**:

- `"Ingrese el radio en Kilómetros:"`
- `"Ingrese la constante g:"`

{: start="3" }
3. La respuesta del programa también debe mostrarse con un texto apropiado:

**Ejemplo**:

- `"La velocidad de Escape es 11174.6 [m/s]"`


Creamos el script `escape.py`:

{% tabs crear_script_escapepy %}
{% tab crear_script_escapepy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch escape.py
```
{% endtab %}
{% tab crear_script_escapepy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > escape.py
```
{% endtab %}
{% endtabs %}

Para este ejercicio, tenemos que importar el módulo `math` para acceder a las funciones matemáticas como `.sqrt()` que nos permite obtener la raíz cuadrada del argumento dado. Ejemplo:

{% include codeHeader.html icon="python" compiler="y" %}
```python
import math

print(math.sqrt(64))
```
{: .nolineno }

Luego en nuestro archivo `escape.py` aplicamos la formula dada y solicitamos los datos al usuario:

{% include codeHeader.html file='escape.py' %}
```python
import math

constante_g = float(input("Ingrese la constante g: "))
radio = int(input("Ingrese el radio en Kilómetros: "))

velocidad_escape = round(math.sqrt(2 * (radio * 1000) * constante_g), 1 )

print("Velocidad de Escape =", str(velocidad_escape)+ " [m/s]")
```

Para verificar el correcto funcionamiento del programa, se puede verificar con
los siguientes datos:

- `g = 9.8 [m/s2]`
- `r = 6371 [Km]`

Se obtiene como resultado:

`Velocidad de Escape = 11174.6 [m/s]`


Para reproducir la prueba anterior, es necesario ejecutar el script de la siguiente forma:

{% tabs run_escapepy %}
{% tab run_escapepy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
python3 escape.py
```
{% endtab %}
{% tab run_escapepy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
python escape.py
```
{% endtab %}
{% endtabs %}

Resultado esperado:

{: .shadow .p-3 .fs-6 style='background: #000; border: 1px solid #333'}
```txt
Ingrese la constante g en : 9.8
Ingrese el radio en Kilómetros: 6371
Velocidad de Escape = 11174.6 [m/s]
```

---

## Actividad 2 - Rentabilidad

Un emprededor quiere crear una app que provea un servicio para entregar comida de mascotas. Este proyecto tiene buenos pronósticos, pero su éxito dependerá de cuántos usuarios puedan alcanzar. La manera en la que se medirá esto es calculando las utilidades del proyecto. Estas utilidades se pueden calcular mediante la siguiente formula:

{: align='center' .fs-2 }
*utilidades = P \* U - GT*

Donde:
- **P**: Precio de Suscripción
- **U**: Número de Usuarios
- **GT**: Gastos Totales


### Rentabilidad - Requerimiento 1

Crear el programa `emprendedor1.py` que utilice la fórmula descrita anteriormente para calcular las utilidades de un proyecto. Para ello utiliza `input()` para solicitar como dato el precio de suscripción P, el número de usuarios U y el gasto total GT.

Creamos el script `emprendedor1.py`:

{% tabs crear_script_emprendedor1 %}
{% tab crear_script_emprendedor1 BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch emprendedor1.py
```
{% endtab %}
{% tab crear_script_emprendedor1 CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > emprendedor1.py
```
{% endtab %}
{% endtabs %}

- Definimos la formula descrita anteriormente y pedimos los datos a través de la función `input()`:

{% include codeHeader.html file='emprendedor1.py' %}
```py
precio_suscripcion = int(input("Ingresar el precio de suscripción: "))
numero_usuarios = int(input("Ingresar el número de usuarios: "))
gasto_total = int(input("Ingresar el gasto total: "))

utilidades = (precio_suscripcion * numero_usuarios) - gasto_total
print("Total utilidades generadas:", utilidades)
```

Para realizar una prueba, es necesario ejecutar el script de la siguiente forma:

{% tabs run_emprendedor1 %}
{% tab run_emprendedor1 BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
python3 emprendedor1.py
```
{% endtab %}
{% tab run_emprendedor1 CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
python emprendedor1.py
```
{% endtab %}
{% endtabs %}

Resultado esperado:

{: .shadow .p-3 .fs-6 style='background: #000; border: 1px solid #333'}
```txt
Ingresar el precio de suscripción: 5000
Ingresar el número de usuarios: 50
Ingresar el gasto total: 120000
Total utilidades generadas: 130000
```

### Rentabilidad - Requerimiento 2

Ahora nos dicen que el emprendedor considera 2 tipos de usuarios los **usuarios normales** y los **usuarios premium** a los cuales se le cobrará una suscripción un 50% mayor. Crea una segunda versión llamada `emprendedor2.py` que permita considerar el caso recién expuesto. Para ello debemos modificar lá función para que solicite mediante `input()` los siguientes parámetros de entrada:

- precio de suscripción `P`
- número de usuarios normales `U`
- número de usuarios premium `UP`
- gastos totales `GT`

Creamos el script `emprendedor2.py`:

{% tabs emprendedor2 %}
{% tab emprendedor2 BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch emprendedor2.py
```
{% endtab %}
{% tab emprendedor2 CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > emprendedor2.py
```
{% endtab %}
{% endtabs %}

Pedimos los datos de entrada y vamos a sumar la cantidad de suscripciones de usuarios normales y premium (añadiendole el 50% a este último), para calcular las utilidades totales restando el gasto total:

{% include codeHeader.html file='emprendedor2.py' %}
```py
precio_suscripcion = int(input("Ingresar el precio de suscripción: "))
numero_usuarios_normal = int(input("Ingresar el número de usuarios (normal): "))
numero_usuarios_premiun = int(input("Ingresar el número de usuarios (premium): "))
gasto_total = int(input("Ingresar el gasto total: "))

total_suscripcion_normal = precio_suscripcion * numero_usuarios_normal
total_suscripcion_premium = (precio_suscripcion * .5) * numero_usuarios_premiun

utilidades = (total_suscripcion_normal + total_suscripcion_premium) - gasto_total

print("Total utilidades generadas:", round(utilidades))
```

Para realizar una prueba, es necesario ejecutar el script de la siguiente forma:

{% tabs run_emprendedor2 %}
{% tab run_emprendedor2 BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
python3 emprendedor2.py
```
{% endtab %}
{% tab run_emprendedor2 CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
python emprendedor2.py
```
{% endtab %}
{% endtabs %}

Resultado esperado:

{: .shadow .p-3 .fs-6 style='background: #000; border: 1px solid #333'}
```txt
Ingresar el precio de suscripción: 8000
Ingresar el número de usuarios (normal): 25
Ingresar el número de usuarios (premium): 10
Ingresar el gasto total: 100000
Total utilidades generadas: 140000
```

### Rentabilidad - Requerimiento 3

Considera ahora una tercera versión llamada `emprendedor3.py` utilizando la formula original de utilidades donde el usuario ingrese los siguientes datos:

- precio de suscripción `P`
- número de usuarios normales `U`
- gastos totales `GT`
- utilidades periodo anterior `UA`

El programa debe calcular las utilidades actuales y mostrar la razón entre las utilidades actuales y las del año anterior con dos decimales.

Creamos el script `emprendedor3.py`:

{% tabs emprendedor3 %}
{% tab emprendedor3 BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch emprendedor3.py
```
{% endtab %}
{% tab emprendedor3 CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > emprendedor3.py
```
{% endtab %}
{% endtabs %}


Calculamos las utilidades actuales y las del año anterior, mostramos la razón entre ambas redondeado con dos decimales:

{% include codeHeader.html file='emprendedor3.py' %}
```python
precio_suscripcion = int(input("Ingresar el precio de suscripción: "))
numero_usuarios = int(input("Ingresar el número de usuarios: "))
gasto_total = int(input("Ingresar el gasto total: "))
periodo_anterior = int(input("Ingresa las utilidades del año pasado: "))

utilidades_actuales = (precio_suscripcion * numero_usuarios) - gasto_total

la_razon = round(utilidades_actuales / periodo_anterior, 2)

print("La razón entre las utilidades actuales y las del año anterior es:", la_razon)
```

Para realizar una prueba, es necesario ejecutar el script de la siguiente forma:

{% tabs run_emprendedor3 %}
{% tab run_emprendedor3 BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
python3 emprendedor3.py
```
{% endtab %}
{% tab run_emprendedor3 CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
python emprendedor3.py
```
{% endtab %}
{% endtabs %}

Resultado esperado:

{: .shadow .p-3 .fs-6 style='background: #000; border: 1px solid #333'}
```txt
Ingresar el precio de suscripción: 5000
Ingresar el número de usuarios: 30
Ingresar el gasto total: 120000
Ingresa las utilidades del año pasado: 140000
La razón entre las utilidades actuales y las del año anterior es: 0.21
```

---

## Repositorio

{% tabs repo %}
{% tab repo github %}
[![github](https://socialify.git.ci/enidev911/m3-evaluado-introduccion-python/image?description=1&descriptionEditable=M3%20%3A%20Introducci%C3%B3n%20a%20Python%20-%20Desaf%C3%ADo%20evaluado&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark){: .card }](//github.com/enidev911/m3-evaluado-introduccion-python)
{% endtab %}
{% tab repo github cli %}
{% include codeHeader.html icon="terminal" %}
```bash
gh repo clone EniDev911/m3-evaluado-introduccion-python
```
{% endtab %}
{% tab repo ssh %}
{% include codeHeader.html icon="terminal" %}
```bash
git clone git@github.com:EniDev911/m3-evaluado-introduccion-python.git
```
{% endtab %}
{% endtabs %}