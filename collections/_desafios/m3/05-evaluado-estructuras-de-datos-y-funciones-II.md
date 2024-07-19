---
layout: post
title: Estructuras de datos y funciones II
subtitle: M3 - Desafío Evaluado
modulo: m3
type: evaluado
show: true
show_next: true
github:
  name: enidev911/m3-evaluado-estructuras-de-datos-y-funciones-II
---

## Descripción

La empresa de desarrollo de software **DESARROLLA** se encuentra actualmente trabajando en muchos proyectos distintos. Es tanta la demanda que te solicita trabajar en 3 soluciones que tienen pendientes. Para ello, te entregarán los requerimientos de cada tarea y deberás implementar una función que entregue la solución a cada problema.

## Actividad 1

### Enunciado

La empresa tiene un contrato con una tienda de tecnología en la cual quieren implementar un filtrado por precio. Para ello se solicita generar un archivo `filtro.py` con la solución al problema. Dada una muestra de los productos que actualmente se encuentran disponibles en la tienda (`diccionario`), se solicita implementar una función que permita entregar lo siguiente:

- Un **diccionario** con los productos **que cumplen una cierta condición** dado un **umbral**.
- La **función** debe permitir mostrar **los valores mayor que o menor que un umbral** (siempre estricto).
- **Por defecto la función** debe **siempre mostrar los valores mayor que el umbral** a menos **que se indique lo contrario**.

Para desarrollar la funcionalidad se le entrega a usted un diccionario de prueba para verificar sus resultados:

{% include codeHeader.html icon="python" %}
```python
precios = {
	'Notebook': 70000,
	'Teclado': 25000,
	'Mouse': 12000,
	'Monitor': 250000,
	'Escritorio': 135000,
	'Tarjeta de Video': 1500000
}
```
{: .nolineno }


Se espera ejecutar el programa de la siguiente manera.

Si **se especifica un argumento**, este debe ser el **umbral** y **por defecto debe calcular los que son estrictamente mayores** al **umbral**:

{% include codeHeader.html icon="terminal" %}
```bash
python filtro.py 30000
```

```plaintext
Los productos mayores al umbral son: Notebook, Monitor, Escritorio, Tarjeta de Video
```
{: .nolineno }

> **Ojo**: Si estamos proporcionando el argumento desde la línea de comandos, debemos capturar ese valor a través de `sys.argv`.


En caso de que **se ingresen dos valores**, el **primero seguirá siendo el umbral**, mientras **el segundo podrá tomar los valores `mayor` o `menor`**. Por ejemplo, la siguiente forma **calculará** los que son estrictamente **menores**:


{% include codeHeader.html icon="terminal" %}
```bash
python filtro.py 30000 menor
```

```plaintext
Los productos menores al umbral son: Teclado, Mouse
```
{: .nolineno }


En caso que otro elemento se utilice se debe devolver lo siguiente:

```bash
python filtro.py 30000 otro
```

```plaintext
Lo sentimos, no es una operación válida
```
{: .nolineno }

### Desarrollo

Para comenzar a desarrollar, creamos el script:

{% tabs filtropy %}
{% tab filtropy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch filtro.py
```
{% endtab %}
{% tab filtropy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > filtro.py
```
{% endtab %}
{% endtabs %}

Para esta actividad, lo primero será **definir una función que se encargará de filtrar los productos**, por ende definamos la siguiente función que se llamará `filtrar_productos`:


{% include codeHeader.html icon="python" %}
```python
def filtrar_productos(umbral, operacion='mayor'):
    resultado = list()
    if operacion == 'mayor':
        for k,v in precios.items():
            if v > umbral:
                resultado.append(k)
        print("Los productos mayores al umbral son:", ", ".join(resultado))

    elif operacion == 'menor':
        for k,v in precios.items():
            if v < umbral:
                resultado.append(k)
        print("Los productos menores al umbral son:", ", ".join(resultado))
    else:
        print("Lo sentimos, no es una operación válida")
```
{: .nolineno }

Claro que podemos simplificar lo anterior usando la **compresión de diccionario** para crear el diccionario filtrado a partir de un iterable, es decir, una lista o tupla en este caso por medio del método `items()` para acceder a una lista de tuplas compuesta por pares **clave-valor**:

{% include codeHeader.html icon="python" %}
```python
def filtrar_productos(umbral, operacion="mayor"):
    if operacion == "mayor":
        filtro = { k:v for k,v in precios.items() if v > umbral }
        print("Los productos mayores al umbral son:", ", ".join(filtro.keys()))
    elif operacion == "menor":
        filtro = { k:v for k,v in precios.items() if v < umbral }
        print("Los productos menores al umbral son:", ", ".join(filtro.keys()))
    else:
        print("Lo sentimos, no es una operación válida")
```
{: .nolineno }


Finalmente vamos hacer una comprobación sencilla, para ver si el usuario está pasando los argumentos requeridos y así invocar la función, de lo contrario le informaremos que debe hacer:

{% include codeHeader.html icon="python" %}
```python
if __name__ == "__main__":

    if len(sys.argv) == 2:
        filtrar_productos(int(sys.argv[1]))
    elif len(sys.argv) >= 3:
        filtrar_productos(int(sys.argv[1]), sys.argv[2])
    else:
        print("Debes pasar los argumentos por línea de comando")
```
{: .nolineno }

El script completo nos quedaría de la siguiente manera:

{% include codeHeader.html file="filtro.py" compiler="y" %}
```python
import sys

precios = {
    'Notebook': 700000,
    'Teclado': 25000,
    'Mouse': 12000,
    'Monitor': 250000,
    'Escritorio': 135000,
    'Tarjeta de Video': 1500000
}

def filtrar_productos(umbral, operacion="mayor"):
    if operacion == "mayor":
        filtro = { k:v for k,v in precios.items() if v > umbral }
        print("Los productos mayores al umbral son:", ", ".join(filtro.keys()))
    elif operacion == "menor":
        filtro = { k:v for k,v in precios.items() if v < umbral }
        print("Los productos menores al umbral son:", ", ".join(filtro.keys()))
    else:
        print("Lo sentimos, no es una operación válida")

if __name__ == "__main__":

    if len(sys.argv) == 2:
        filtrar_productos(int(sys.argv[1]))
    elif len(sys.argv) >= 3:
        filtrar_productos(int(sys.argv[1]), sys.argv[2])
    else:
        print("Debes pasar los argumentos por línea de comando. Ej: python filtro.py 60000 menor")
```

---

## Actividad 2

### Enunciado

Otra solución que se encuentra pendiente es la encargada por una empresa de flotas que debe medir mediante telemetría las velocidades de cada una de sus correas transportadoras. Una de sus políticas es distribuir su energía de manera eficiente, por lo que, para poder entregar energía a las correas más lentas, es necesario ralentizar las más rápidas, para asegurar una correcta distribución de la energía disponible. Para ello, se requiere levantar una **alerta de la posición** de las correas transportadoras **que están sobre el promedio**.

- Para ello se pide **determinar una funcionalidad** (*crear una función*) que **calcucle el promedio** de una **lista de velocidades**. El servidor donde se pretende instalar esta funcionalidad no cuenta con mucha capacidad por lo que se pide no depender de librerías externas.
- Listar las posiciones de todas las correas transportadoras que están sobre el promedio.
- Implementar la solución mediante una función en un archivo llamado `velocidad.py`.

Se entrega la siguiente lista con la muestra de velocidades para probar las funcionalidades:

{% include codeHeader.html icon="python" %}
```python
velocidad = [
	25, 12, 19, 16, 11, 11, 24, 1,14, 14, 16, 10, 6, 
	23, 13, 25, 4, 19,14, 20, 18, 9, 18, 4, 18, 1, 3,
	4, 2,14, 23, 19, 23, 9, 18, 20, 22, 14, 1,10, 5,
	23, 3, 5, 9, 5, 3, 12, 20, 5,11, 10, 18, 10, 14,
	5, 23, 20, 23, 21
]
```
{: .nolineno }


La salida que se espera en este caso es la siguiente:

```bash
python velocidad.py
```

```plaintext
[0, 2, 3, 6, 8, 9, 10, 13, 15, 17, 18, 19, 20, 22,
24, 29, 30, 31, 32,34, 35, 36, 37, 41, 48, 52, 54,
56, 57, 58, 59]
```
{: .nolineno }


### Desarrollo

Para comenzar a desarrollar, creamos el script:

{% tabs velocidadpy %}
{% tab velocidadpy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch velocidad.py
```
{% endtab %}
{% tab velocidadpy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > velocidad.py
```
{% endtab %}
{% endtabs %}

Ahora vamos a comenzar por definir una **función** que se encargue **de retornar el promedio** de la muestra de velocidad proporcionada:

{% include codeHeader.html icon="python" %}
```python
def calcular_promedio(velocidades):
	return sum(velocidades) / len(velocidades)
```
{: .nolineno }

Como podemos observar en el código, definimos la función que **recibirá un argumento** que en este caso se espera que sea **la muestra de velocidad** (*la lista*), y apoyandonos de la función integrada `sum()` vamos a poder tener el total de la suma de la velocidad y lo dividimos por la cantidad de elementos en este caso de las velocidades en la muestra usando la función `len()`.

Finalmente podemos usar una **comprensión de lista** para obtener una nueva lista con las posiciones. El script quedaría de la siguiente manera:

{% include codeHeader.html file="velocidad.py" compiler="y" %}
```python
velocidad = [
    25, 12, 19, 16, 11, 11, 24, 1,14, 14, 16, 10, 6, 
    23, 13, 25, 4, 19,14, 20, 18, 9, 18, 4, 18, 1, 3,
    4, 2,14, 23, 19, 23, 9, 18, 20, 22, 14, 1,10, 5,
    23, 3, 5, 9, 5, 3, 12, 20, 5,11, 10, 18, 10, 14,
    5, 23, 20, 23, 21
]

def calcular_promedio(velocidades):
    return sum(velocidades) / len(velocidades)


if __name__ == "__main__":
    promedio = calcular_promedio(velocidad)
    posiciones = [p for p, e in enumerate(velocidad) if e > promedio]
    print(posiciones)
```

---

## Actividad 3

### enunciado

Otra área en la que la empresa presta soporte es a las ONG. En un programa de ayuda escolar que tiene esta ONG se está enseñando a programar algunas operaciones avanzadas a niños con alto potencial pero de escasos recursos. Se quiere enseñar dos operaciones conocidas como el **factorial** y la **productoria** y se requiere que usted prepare un script que implemente esto.

El factorial se define de la siguiente forma:

{: align='center' .fs-1 .text-warning }
$n!$ = $n\times n-1\times n-2 ...$

<small class="d-block text-info text-center">(Hasta terminar la múltiplicación por el número dado por 1. Ej [n * 1])</small>

En un ejemplo práctico, el factorial $5!$ se calculará como:

{: align='center' .fs-1 .text-warning }
$5!$ = $5\times 4\times 3\times 2\times 1 = 120$

Por otro lado la productoria se define como la multiplicación de elementos.

{: align='center' .fs-1 .text-warning }
$A$ = $$\begin{bmatrix} 3,6,4,2,8 \end{bmatrix}$$


Para resolver este programa se solicita lo siguiente:

- Una **función** que calcule el **factorial**.
- Una **función** que calcule la **productoria**.
- Una **función** que permita **controlar los calculos**. Esta función se debe invocar de la siguiente manera:

```python
calcular(fact_1 = 5, prod_1 = [3,6,4,2,8], fact_2 = 6)
```
{: .nolineno }

### Desarrollo

Para la primera función que es **el factorial** voy dejarte diferentes soluciones:

> **Recomendación**: es importante manejar los conceptos de **ciclos**, **funciones** y opcionalmente **funciones recursivas** en Python, si deseas profundizar en la materia de funciones recursivas te dejo el siguiente artículo: [Funciones Recursivas](https://enidev911.github.io/python-book/python/funciones/funciones-recursivas/){: target='_blank'}

{% tabs fact %}
{% tab fact con bucle for %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
def factorial(numero):
    resultado = 1

    for i in range(1, numero+1):
        resultado = resultado * i

    return resultado

print(factorial(5)) # 120
```
{: .nolineno }
{% endtab %}
{% tab fact con bucle while %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
def factorial(numero):
    resultado = 1

    while numero > 1:
        resultado = resultado * numero
        numero -= 1

    return resultado

print(factorial(5)) # 120
```
{: .nolineno }
{% endtab %}
{% tab fact con recursividad %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
def factorial(numero):
    if numero <= 1:
        return 1

    return numero * factorial(numero - 1)

print(factorial(5)) # 120
```
{: .nolineno }
{% endtab %}
{% endtabs %}


Para la siguiente función de **la productoria** también tenemos diferentes soluciones:

{% tabs productoria %}
{% tab productoria con bucle for %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
def productoria(numeros=[]):
    resultado = 1

    for num in numeros:
        resultado *= num

    return resultado

print(productoria([4, 6, 7, 4, 3])) # 2016
```
{: .nolineno }
{% endtab %}
{% tab productoria bucle while %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
def productoria(numeros=[]):
    resultado, aux = (1, 0)
    
    while len(numeros) > aux:
      
      resultado *= numeros[aux]
      aux += 1
    
    return resultado
    
print(productoria([4, 6, 7, 4, 3])) # 2016
```
{: .nolineno }
{% endtab %}
{% tab productoria recursividad %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
def productoria(numeros=[]):
    if len(numeros) == 0:
       return 1
    
    return numeros.pop() * productoria(numeros)
    
print(productoria([4, 6, 7, 4, 3])) # 2016
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Y por último tenemos la función que se encargará de **controlar los cálculos** según se requiera:

- `fact_`: cuando se requiera calcular el factorial.
- `prod_`: cuando se requier calcular la productoria.

Para lograr este objetivo debemos usar los `**kwargs`. En Python los `**kargs`son un mecanismo que permite a una función recibir un **número variable de argumentos nombrados** y **acceder a ellos como un diccionario**. 

{% tabs calcular_f %}
{% tab calcular_f usando startswith %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
def calcular(**kargs):

    for k, v in kargs.items():
        if k.startswith("fact_"):
            print("Calcular el factorial de:", v)
        elif k.startswith("prod_"):
            print("Calcular la productoria de:", v)
        else:
            print("Debes enviar argumentos con nombres como fact_ o prod_")

calcular(fact_1 = 5, prod_1=[4, 6, 7, 4, 3], fact_2=6)
```
{: .nolineno }
{% endtab %}
{% tab calcular_f con el operador in %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
def calcular(**kargs):

    for k, v in kargs.items():
        if "fact_" in k:
            print("Calcular el factorial de:", v)
        elif "prod_" in k:
            print("Calcular la productoria de:", v)
        else:
            print("Debes enviar argumentos con nombres como fact_ o prod_")

calcular(fact_1 = 5, prod_1=[4, 6, 7, 4, 3], fact_2=6)
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Para continuar con el requerimiento, creamos el script:

{% tabs ongpy %}
{% tab ongpy BASH %}
{% include codeHeader.html icon="terminal" %}
```bash
touch ong.py
```
{% endtab %}
{% tab ongpy CMD %}
{% include codeHeader.html icon="terminal" %}
```bash
type null > ong.py
```
{% endtab %}
{% endtabs %}

El script nos quedaría de la siguiente manera:

{% include codeHeader.html file="ong.py" compiler="y" %}
```python
def factorial(numero):
    if numero <= 1:
        return 1
    
    return numero * factorial(numero - 1)
    
    
def productoria(numeros=[]):
    resultado = 1

    for num in numeros:
        resultado *= num
    
    return resultado

def calcular(**kargs):

    for k, v in kargs.items():
        if k.startswith("fact"):
            print(f"El factorial de {v} es {factorial(v)}")
        elif 'prod_' in k:
            print(f"La productoria de {v} es {productoria(v)}")
        else:
            print("Acción no disponible")
            
if __name__ == "__main__":

    calcular(fact_1 = 5, prod_1 = [4, 6, 7, 4, 3], fact_2 = 6)
```
{: .nolineno }

---

## Repositorio

{% include repository.html repo=page.github %}
