---
layout: post
title: Sentencias Condicionales e iterativas I
subtitle: M3 - Desafío Evaluado
modulo: m3
type: evaluado
show: true
show_next: true
---

## Actividad 1

El **IMC**, conocido como el índice de masa corporal, es una medida que asocia el peso de una persona. Este valor es utilizado como un indicador nutricional y constituye un índice fácil y sencillo de calcular para determinar el estado de obesidad y sobrepeso de una persona. El **IMC** se calcula de la siguiente manera:

{: align='center' .fs-2 .text-warning }
$IMC=\frac{W}{H^2}$


Donde:
- **W**: corresponde al peso de la persona en Kg.
- **H**: corresponde a la altura en metros.
- **IMC**: El valor del IMC, en [Kg/m2]

Para ello, la Organización Mundial de la Salud (OMS) ha determinado una clasificación así para distintos rangos de valores:


{: .table .table-bordered }
|IMC|Clasificación OMS|
|:--|:----------------|
|`< 18.5`|Bajo Peso|
|`18.5 - 25`|Adecuado|
|`25 - 30`|Sobrepeso|
|`30 - 35`|Obesidad Grado I|
|`35 - 40`|Obesidad Grado II|
|`> 40`|Obesidad Grado III|


### Desarrollo

Se solicita crear el programa `imc.py` que permita calcular el IMC de una persona.

1. Al programa se debe ingresar el peso en Kg y la altura en **centimetros**
2. Calcular el IMC ajustando los valores de entrada a las unidades requeridas por la fórmula. El resultado se debe informar con 2 decimales.
3. Entregar al usuario una salida acorde que permita conocer el valor de su IMC además de la clasificación dada por la OMS.


```bash
python imc.py 81 178
```

Salida:

```plaintext
Su IMC es 25.56
La clasificación OMS es Sobrepeso
```
{: .nolineno }


Partamos desde la base que si los argumentos **peso** y **altura** se leen desde la línea de comandos tenemos que importar el módulo `sys` para acceder a la variable `sys.argv` que contiene una lista con todos los argumentos que pasemos desde la línea de comandos.

Veamos como se hace en el código:

{% include codeHeader.html file="script.py" %}
```python
import sys

print(sys.argv)
```
{: .nolineno }

Si ejecutamos lo anterior desde la línea de comandos:

{% include codeHeader.html icon="terminal" %}
```bash
python script.py uno 2 tercero 4
```

El resultado por consola sería lo siguiente:

```plaintext
['script.py', 'uno', '2', 'tercero', '4']
```
{: .nolineno }

> **Ojo**: es importante manejar listas. Las listas son una parte fundamental de Python, si deseas profundizar en la materia, te recomiendo estos artículos: [Listas en Python](https://enidev911.github.io/python-book/python/tipos%20de%20datos/listas/){: target='_blank'}, [Métodos de Listas]({{ '/python/metodos-de-listas' | relative_url }}){: target='_blank' }, [Módulo Sys](https://enidev911.github.io/python-book/python/m%C3%B3dulos/sys/){: target='_blank'}


Luego declaramos dos variables para el **peso** y **altura** basados en los argumentos de `sys.argv`:

{% include codeHeader.html icon="python" %}
```python
peso = float(sys.argv[1])
altura = float(sys.argv[2]) / 100 
```
{: .nolineno }

Como podemos observar en la **altura** estamos realizando la conversión de **centímetros** a **metros** al dividir por **100** el argumento que pasemos. Ej: 178 cm = 1.78 mt.  

En este punto quizás podamos preguntarnos, ¿y **si no le paso los argumentos** a los que estoy intentando acceder?. Hagamos esa prueba e intentemos ejecutar el script sin argumentos:

{% include codeHeader.html icon="terminal" %}
```bash
python script.py
```

```python
Traceback (most recent call last):
  File "/Users/owner/desafío/script.py", line 3, in <module>
    peso = float(sys.argv[1])
                 ~~~~~~~~^^^
IndexError: list index out of range
```
{: .nolineno }

Para evitar que nuestro programa no se interrumpa por un posible error del usuario, podemos prevenir ese comportamiento añadiendo un condicional simple como el siguiente:

{% tabs validate_args %}
{% tab validate_args código %}
{% include codeHeader.html icon="python" %}
```python
import sys

if len(sys.argv) == 3:
    
    peso = float(sys.argv[1])
    altura = float(sys.argv[2]) / 100

    print("Se ejecuta el programa")
else:
    print("Debes pasarme los argumentos peso y altura por consola")
```
{: .nolineno }
{% endtab %}
{% tab validate_args explicación %}
{: .rounded .p-3 style='background: #191919' }
Sabemos que `sys.argv` es una lista, entonces usando la función integrada `len()` podemos verificar si existen los 3 elementos necesario para operar, recordemos que **el primer elemento** de la lista **es el nombre del archivo**.
{% endtab %}
{% endtabs %}

Teniendo claro lo anterior, podemos ahora proceder a desarrollar el código. Sin embargo antes de llegar a escribir el código pasemos a crear el diagrama de flujo:

{% capture graph_imc %}
---
title: "DIAGRAMA DE FLUJO: IMC"
---
graph TD
  inicio([Inicio])
  inicio-->leer_pya[/Leer Peso y Altura/]
  leer_pya-->cm_a_mt[Convertir\ncentimetros a metros\naltura = altura ÷ 100]
  cm_a_mt-->leer_ndp[/"Leer Nivel de Peso (ndp)"/]
  leer_ndp-->formula["Almacenemos el resultado\nde la formula para obtener\nel nivel de peso\nndp = peso / (altura * altura)"]
  formula-->condicion1{"ndp < 18.5"}
  condicion1-->|Si| bajopeso[/"Escribir:\nLa clasificación OMS es Bajo Peso"/]
  condicion1-->|No| condicion2{"ndp <= 25 "}
  condicion2-->|Si| adecuado[/"Escribir:\nLa clasificación OMS es Adecuado"/]
  condicion2-->|No| condicion3{"ndp <= 35"}
  condicion3-->|Si| grado1[/"Escribir:\nLa clasificación OMS es Obesidad grado I"/]
  condicion3-->|No| condicion4{"ndp <= 40"}
  condicion4-->|Si| grado2[/"Escribir:\nLa clasificación OMS es Obesidad grado II"/]
  condicion4-->|No| grado3[/"Escribir:\nLa clasificación OMS es Obesidad grado III"/]
  bajopeso-------->fin([Fin])
  grado1------>fin
  grado2---->fin
  grado3-->fin
{% endcapture %}

{% include mermaid.html content=graph_imc %}

Ahora, para continuar con el objetivo creamos el script `imc.py`:

{% tabs imcpy %}
{% tab imcpy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch imc.py
```
{% endtab %}
{% tab imcpy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > imc.py
```
{% endtab %}
{% endtabs %}


{% include codeHeader.html file='imc.py' %}
```py
import sys

"""
   - Bajo Peso: < 18.5
   - Adecuado: 18.5 - 25
   - Sobrepeso: 25 - 30
   - Obesidad grado I: 30 - 35
   - Obesidad grado II: 35 - 40
   - Obesidad grado III: Más de 40
"""

if len(sys.argv) == 3:

    peso = float(sys.argv[1])
    altura = float(sys.argv[2]) / 100

    nivel_de_peso = round(peso / (altura * altura), 2)
    clasificacion = "Su IMC es %s\nLa clasificación OMS es %s"

    if nivel_de_peso <= 18.5:
        print(clasificacion % (nivel_de_peso, "Bajo Peso"))
    elif nivel_de_peso <= 25:
        print(clasificacion % (nivel_de_peso, "Adecuado"))
    elif nivel_de_peso <= 30:
        print(clasificacion % (nivel_de_peso, "Sobrepeso"))
    elif nivel_de_peso <= 35:
        print(clasificacion % (nivel_de_peso, "Obesidad Grado I"))
    elif nivel_de_peso <= 40:
        print(clasificacion % (nivel_de_peso, "Obesidad Grado II"))
    else:
        print(clasificacion % (nivel_de_peso, "Obesidad Grado III"))

else:
    msg = "Debes pasarme los argumentos peso y altura por línea de comandos"
    print(msg + "\nEj: python imc.py 81 178")
```

---

## Actividad 2 - Cachipún

El **cachipún**, conocido también como **yan ken po**, **how-are-you-speak**, es un juego de manos en el que existen tres elementos:

- **la piedra que vence a la tijera** rompiéndola.
- **la tijera que vence al papel** cortándolo.
- **el papel que vence a la piedra** envolviéndola.

Se utiliza con mucha frecuencia para decidir quién de dos personas hará algo, tal y como se hace a veces usando una moneda.


1. Se pide crear el programa `cachipun.py`, donde el usuario entregará como argumento: `piedra`, `papel` o `tijera`. Para que el computador pueda jugar escogerá un valor al azar.

```bash
python juego.py piedra
```

Salida:

```plaintext
Tu jugaste Piedra
Computador jugó tijera
Ganaste!!
```
{: .nolineno }

Teniendo claro cuales son los casos en que podemos ganar el juego, podemos ahora proceder a desarrollar el código. Al igual que en el ejercicio anterior antes de llegar a escribir el código pasemos a ver el diagrama de flujo:

{% capture graph_cachipun %}
---
title: "DIAGRAMA DE FLUJO: CACHIPÚN"
---
graph TD
  inicio([inicio])
  inicio-->leer_usuario[/"Leer opción del usuario\nopcion_usuario = input"/]
  leer_usuario-->aleatorio[Gestionar un número aleatorio\nentre 1 y 3]
  aleatorio-->opcion_rival[/"Leer opción del rival\nopcion_rival = aleatorio(1, 3)"/]
  opcion_rival-->asignar[El número aleatorio\nserá asignado a un valor\nde acuerdo al siguiente criterio:\n1=Piedra, 2=Papel y 3=Tijera]
  asignar-->condicion1{"opcion_usuario = opcion_rival"}
  condicion1-->|Si| empate[/Escribimos:\nJuego empatado/]
  condicion1-->|No| condicion2{"opcion_usuario = piedra AND opcion_rival = tijera\nOR\nopcion_usuario = papel AND opcion_rival = piedra\nOR\nopcion_usuario = tijera AND opcion_rival = papel"}
  condicion2-->|Si| ganaste[/Escribimos:\nJuego Ganado/]
  condicion2-->|No| perdiste[/Escribimos:\nJuego Perdido/]
  empate---->fin([Fin])
  ganaste-->fin
  perdiste-->fin
{% endcapture %}

{% include mermaid.html content=graph_cachipun %}

Ahora, para continuar con el objetivo creamos el script `cachipun.py`:

{% tabs cachipunpy %}
{% tab cachipunpy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch cachipun.py
```
{% endtab %}
{% tab cachipunpy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > cachipun.py
```
{% endtab %}
{% endtabs %}

{% include codeHeader.html file='cachipun.py' %}
```py
import sys
import random

if len(sys.argv) == 2:

    opcion_usuario = sys.argv[1].lower()

    if (opcion_usuario == "piedra" or
            opcion_usuario == "papel" or
            opcion_usuario == "tijera"):

        aleatorio = random.randint(1, 3)

        if aleatorio == 1:
            opcion_computador = "piedra"
        elif aleatorio == 2:
            opcion_computador = "papel"
        elif aleatorio == 3:
            opcion_computador = "tijera"

        if opcion_usuario == opcion_computador:
           print(f"Tú haz elegido {opcion_usuario} y el computador {opcion_computador}. Empate")

        elif ((opcion_usuario == "piedra" and opcion_computador == "tijera") or
                (opcion_usuario == "papel" and opcion_computador == "piedra") or
                (opcion_usuario == "tijera" and opcion_computador == "papel")):
            print(f"Tú haz elegido {opcion_usuario} y el computador {opcion_computador}. Ganaste")

        else:
            print(f"Tú haz elegido {opcion_usuario} y el computador {opcion_computador}. Perdiste")

    else:
        print("Debes jugar una opción válida.")
        print("Opciones válidas: Piedra, Papel, Tijera.")
        print("Ejemplo: $ python cachipun.py", "tijera")
        exit()

else:
    print("Debes pasarme el argumento por línea de comando")
```

---

## Repositorio

{% tabs sentencias_condicionales_iterativas %}
{% tab sentencias_condicionales_iterativas github %}
[![github](https://socialify.git.ci/enidev911/m3-evaluado-setencias-condicionales-iterativas-I/image?description=1&descriptionEditable=M3%20%3A%20Sentencia%20condicionales%20e%20iterativas%20-%20desaf%C3%ADo%20evaluado&font=KoHo&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark){: .card }](//github.com/enidev911/m3-evaluado-setencias-condicionales-iterativas-I)
{% endtab %}
{% tab sentencias_condicionales_iterativas Github CLI %}
{% include codeHeader.html icon="terminal" %}
```bash
gh repo clone EniDev911/m3-evaluado-setencias-condicionales-iterativas-I
```
{% endtab %}
{% tab sentencias_condicionales_iterativas SSH %}
{% include codeHeader.html icon="terminal" %}
```bash
git clone git@github.com:EniDev911/m3-evaluado-setencias-condicionales-iterativas-I.git
```
{% endtab %}
{% endtabs %}
