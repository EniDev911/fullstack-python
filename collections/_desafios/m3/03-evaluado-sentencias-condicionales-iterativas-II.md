---
layout: post
title: Sentencias Condicionales e iterativas II
subtitle: M3 - Desafío Evaluado
modulo: m3
type: evaluado
show: true
show_next: true
github:
  name: enidev911/m3-evaluado-sentencias-condicionales-iterativas-II
---

En este desafío nos piden desarrollar 3 actividades empleando ciclos para la resolución. Cada actividad presentará requerimientos independientes de modo de obtener un programa con su desarrollo.

## Actividad 1 - Filtrado Compacto

Una empresa provee de los balances del año anterior un diccionario como se muestra a continuación:


{% include codeHeader.html icon='python' %}
```py
ventas = {
	"Enero": 15000,
	"Febrero": 22000,
	"Marzo": 12000,
	"Abril": 17000,
	"Mayo": 81000,
	"Junio": 13000,
	"Julio": 21000,
	"Agosto": 41200,
	"Septiembre": 25000,
	"Octubre": 21500,
	"Noviembre": 91000,
	"Diciembre": 21000,
}
```
{: .nolineno }

Se solicita devolver un informe resumido que exponga los meses que superan un cierto umbral. El programa `mayor_a.py` debe retornar un diccionario con el mes y el valor asociado siempre y cuando superen el umbral especificado.

Ejemplo:

```bash
python mayor_a.py 40000
```
Salida

```plaintext
{'Mayo': 81000, 'Agosto': 41200, 'Noviembre': 91000}
```
{: .nolineno }

### Desarrollo

Para comenzar a desarrollar, creamos el script:

{% tabs mayorapy %}
{% tab mayorapy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch mayor_a.py
```
{% endtab %}
{% tab mayorapy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > mayor_a.py
```
{% endtab %}
{% endtabs %}

Como ya hemos visto en [{{ page.previous.title }}]({{ page.previous.url | relative_url }}) donde si el valor que vamos a evaluar es proporcionado desde la línea de comandos, debemos hacer un pequeño condicional para evitar la confusión del usuario y de paso informarle que debe proporcionarnos el argumento desde la línea de comandos:

{% include codeHeader.html icon="python" %}
```python
import sys

if len(sys.argv) == 2:
  print("Ejecutamos el programa")

else:
  print("Debes pasarme un argumento por línea de comando")
```
{: .nolineno }

Una vez tenemos lo necesario, debemos crear un mecanismo que nos permita recorrer el diccionario, por suerte Python lo hace bastante senciilo al proporcionarnos el método `.items()` de los diccionarios que nos retorna una vista que en el fondo es un **objeto iterable** en su interior contiene una **lista** de **tuplas** donde cada tupla está conformada por la clave como primer elemento y su valor como segundo elemento. Podemos ver un ejemplo de aquello en el siguiente código:

{% include codeHeader.html icon="python" compiler="y" %}
```python
ventas = {
  "Enero": 15000,
  "Febrero": 22000,
  "Marzo": 12000,
  "Abril": 17000,
  "Mayo": 81000,
  "Junio": 13000,
  "Julio": 21000,
  "Agosto": 41200,
  "Septiembre": 25000,
  "Octubre": 21500,
  "Noviembre": 91000,
  "Diciembre": 21000,
}

for k,v in ventas.items():
  print("Clave:", k, "=>", "Valor:", v)
```
{: .nolineno }

Entendiendo lo anterior, lo que nos resta es muy sencillo ya que necesitamos **comparar el valor** que estemos iterando con el **umbral**, si el valor es **mayor** al umbral lo almacenaremos en un nuevo diccionario y pondremos su respectiva clave:

> **Extra**: te comparto una forma de validar que la entrada, en este caso el `umbral` contenga solo dígitos.

{% tabs filtrado_compacto %}
{% tab filtrado_compacto solución %}
```python
umbral = sys.argv[1]

if umbral.isdigit():
    filtrado = {}

    for k, v in ventas.items():
        if v > umbral:
            filtrado[k] = v
    print(filtrado)
else:
    print("Debes ingresar solo valores númericos")
```
{: .nolineno }
{% endtab %}
{% tab filtrado_compacto script completo %}
{% include codeHeader.html file='mayor_a.py' %}
```py
import sys

ventas = {
    "Enero": 15000,
    "Febrero": 22000,
    "Marzo": 12000,
    "Abril": 17000,
    "Mayo": 81000,
    "Junio": 13000,
    "Julio": 21000,
    "Agosto": 41200,
    "Septiembre": 25000,
    "Octubre": 21500,
    "Noviembre": 91000,
    "Diciembre": 21000,
}


if len(sys.argv) == 2:
    
    umbral = sys.argv[1]

    if umbral.isdigit():
        filtrado = {}

        for k, v in ventas.items():
            if v > int(umbral):
                filtrado[k] = v
        print(filtrado)
    else:
        print("Debes ingresar solo valores númericos")
else:
  print("Debes pasarme un argumento por línea de comando")
```
{% endtab %}
{% tab filtrado_compacto resultado %}
```plaintext
$ python mayor_a.py 60000

{'Mayo': 81000, 'Noviembre': 91000
```
{: .nolineno }
{% endtab %}
{% endtabs %}


---

## Actividad 2 - Primeros auxilios

### Anunciado

En cualquier momento puede haber una emergencia y hay que estar preparados ¿sabrías como reaccionar en caso de que alguien necesite de primeros auxilios?.

Es muy probable que mucha gente no conozca cuáles son los pasos a seguir en caso de emergencia. Es por eso que se solicita construir una aplicación que permita indicar los pasos a seguir ante una emergencia. Debido a que no se espera a que usted sea un experto en el tema se provee un diagrama que explica las distintas instancias a la que está sometido durante una emergencia.

Tal como lo muestra el siguiente diagrama de flujo:

{% capture first_aid_graph %}
---
title: "DIAGRAMA DE FLUJO: PRIMEROS AUXILIOS"
---
graph TD
  inicio([Inicio])
  inicio--&gt;condicion{"¿Responde a Estímulos?"}
  condicion--&gt;|Si| bloqueA[Valorar la necesidad<br>de llevarlo al hospital más cercano]
  condicion--&gt;|No| bloqueB[Abrir la vía Aérea]
  bloqueB-->respira{"¿Respira?"}
  respira-->|Si| ventilacion[Permitirle posición de<br>suficiente ventilación]
  respira-->|No| administrar[Administrar 5<br>ventilaciones y llamar<br>a Ambulancia]
  administrar--> signosvitales{"¿Signos de Vida?"}
  signosvitales-->|Si| reevaluar[Reevaluar a la espera<br>de la Ambulancia]
  signosvitales-->|No| compresiones[Administrar Compresiones<br>Torácicas hasta que llegue<br>la Ambulancia]
  reevaluar-->ambulancia{"¿llegó la Ambulancia?"}
  compresiones--> ambulancia
  ambulancia-->|No| signosvitales
  ambulancia-->|Si| fin([fin])
  ventilacion------>fin([fin])
  bloqueA------>fin([fin])
{% endcapture %}

{% include mermaid.html content=first_aid_graph %}

### Desarrollo

Se requiere la construcción de una aplicación interactiva `primeros_auxilios.py` que entregue los distintos pasos a seguir dependiendo de las respuestas que el usuario entrega en tiempo real.

Para comenzar a desarrollar, creamos el script:

{% tabs primerosaux %}
{% tab primerosaux BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch primeros_auxilios.py
```
{% endtab %}
{% tab primerosaux CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > primeros_auxilios.py
```
{% endtab %}
{% endtabs %}

Ya teniendo el diagrama de flujo, podemos poner en marcha todos los pasos, en el siguiente código tenemos la solución:

{% tabs primeros_auxilios %}
{% tab primeros_auxilios script %}
{% include codeHeader.html file='primeros_auxilio.py' %}
```py
estimulos = input("¿Responde a Estímulos?: ").lower()

if estimulos == "si":
    print("Valorar la necesidad de llevarlo al hospital más cercano")

elif estimulos == "no":
    print("Abrir la vía Aérea")
    respira = input("¿Respira?: ").lower()

    if respira == "si":
        print("Permitirle posición de suficiente vetilación")
        
    elif respira == "no":
        print("Administrar 5 ventilaciones y llamar a la ambulancia")

        llegada = False
        while not llegada:
            signos_vitales = input("¿Signos de Vida?: ").lower()
        
            if signos_vitales == "si":
                print("Reevaluar a la espera de la Ambulancia")
        
            elif signos_vitales == "no":
                print("Administrar Compresiones Torácicas hasta que llegue la Ambulancia")
            ambulancia = input("¿Llegó la ambulancia?: ")
            
            if ambulancia == "si":
                llegada = True

print("Fin")
```
{% endtab %}
{% tab primeros_auxilios resultado %}
```plaintext
$ python primeros_auxilios.py
¿Responde a Estímulos?: no
Abrir la vía Aérea
¿Respira?: no
Administrar 5 ventilaciones y llamar a la ambulancia
¿Signos de Vida?: si
Reevaluar a la espera de la Ambulancia
¿Llegó la ambulancia?: no
¿Signos de Vida?: no
Administrar Compresiones Torácicas hasta que llegue la Ambulancia
¿Llegó la ambulancia?: si
Fin
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Actividad 3 - Fuerza Bruta

### Enunciado

¿Que tan seguro es tu password? ¿Intentamos hackear un password?. Mediante el siguiente desafío se busca utilizar un algoritmo muy sencillo, llamado fuerza bruta para determinar cuántos intentos son necesarios para encontrar combinaciones numéricas en minúscula.

Determinar cuántos intentos son necesarios para encontrar combinaciones numéricas en minúscula. El programa `fuerza_bruta.py` debe intentar todas las combinaciones de letras posibles, en orden alfabético, hasta que la combinación de letras sea igual a la de la contraseña indicada. Deberá hacer este proceso letra por letra, de izquierda a derecha.

### Desarrollo

El bucle `for` a diferencia del bucle `while` es una iteración que recorre los elementos de una secuencia ordenada como en el caso de una `lista`, `tupla`, `string` o cualquier objeto que sea `iterable`.

Otro aspecto que nos solicitan es que la contraseña se pueda ingresar de forma segura. Python proporciona la función `getpass()` del módulo con el mismo nombre, esta función solicita al usuario una contraseña sin hacer *eco*. En nuestro caso estaremos tratando de hacer comprobaciones sobre una entrada de tipo `string` por lo que podemos utilizar un bucle `for` para recorrer la entrada *el password ingresado* y otro bucle `for` anidado sobre el *abcedario* que lo traeremos desde la constante `ascii_lowercase` desde el módulo `string`.

> **Recomendación**: si quieres profundizar en el la materia de bucles (*loops*) te recomiendo el siguiente [artículo](#) 👈

Para comenzar a desarrollar el código, creamos el script:

{% tabs fuerzabrutapy %}
{% tab fuerzabrutapy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch fuerza_bruta.py
```
{% endtab %}
{% tab fuerzabrutapy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > fuerza_bruta.py
```
{% endtab %}
{% endtabs %}

{% tabs fuerza_bruta %}
{% tab fuerza_bruta script %}
{% include codeHeader.html file='fuerza_bruta.py' %}
```py
from string import ascii_lowercase
import getpass

intentos = 0
password = getpass.getpass("Ingrese la contraseña a forzar: ")

for i in password:
	for j in ascii_lowercase:
		intentos += 1
		if j == i:
			break

print("La contraseña fue forzada en", intentos, "intentos")
```
{% endtab %}
{% tab fuerza_bruta resultado %}
```plaintext
$ python fuerza_bruta.py
Ingrese la contraseña: foobar
La contraseña fue forzada en 57 intentos
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

## Repositorio

{% include repository.html repo=page.github %}