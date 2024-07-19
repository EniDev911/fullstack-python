---
layout: post
title: Estructuras de datos y funciones III
subtitle: M3 - Desafío Evaluado
modulo: m3
type: evaluado
show: true
show_next: true
github:
  name: enidev911/m3-evaluado-estructuras-de-datos-y-funciones-III
---

## Descripción

¡LLegó el gran momento! te has unido a **ADL Desarrolladores**, una entidad dedicada a desarrollar apps entretenidas, con un equipo de desarrollo muy organizado que sigue las buenas prácticas de desarrollo de software.

Este equipo te ha asignado para desarrollar una App en Python que permite jugar una trivia interactiva.

Esta App tendrá preguntas con 3 niveles de dificultad:

- Básica
- Intermedia
- Avanzada

El mismo **jugador define el número de preguntas** a responder correspodiente a cada nivel de dificultad.

El jugador gana al responder todas las preguntas correctamente.

Las preguntas deben aparecer en un orden aleatorio, y además cada vez que alguien ejecute la app, las **alternativas deben ser cambiadas de orden** para evitar que alguien encuentre algún patrón de resolución.

Dado que el programa se hace bastante complejo, en una primera reunión, el *project manager* ha generado un *backlog* con tareas muy específicas, las cuales tendrán que ser desarrolladas paso a paso antes de ensamblar la app final.

Todas las subtareas consistirán en la creación de un script en Python la cual contendrá las especificaciones de una funcionalidad, y deberá ser testeada dentro del mismo archivo.

Para testear la funcionalidad, cada script tendrá la siguiente estructura:

```python
# Definición de la funcionalidad
def func():
    pass

if __name__ == '__main__':
# Test entregado en cada requerimiento (dado por el Tech Lead)
```
{: .nolineno }

En el archivo `preguntas.py` se definen 3 diccionario:

- `preguntas_basicas`
- `preguntas_intermedias`
- `preguntas_avanzadas`

- Cada **diccionario** contiene 3 preguntas y sus correspondientes alternativas.
- Cada **pregunta** es otro **diccionario** que posee un enunciado (*string*) y alternativas en forma de una lista anidada.
- Cada **alternativa** es una lista de dos elementos, siendo el primero el equivalente al texto de la alternativa y el segundo un indicador **0** o **1**, donde **1** indica que es la alternativa correcta.

A modo de ejemplo, todas las preguntas tienen `alt_2` como la respuesta correcta.

> **Recomendación**: Se recomienda modificar las preguntas y alternativas para simular una trivia real.

Finalmente, existe un **diccionario** llamado `pool_preguntas` que contiene **cada diccionario categorizado por nivel de dificultad**: básicas, intermedias, avanzadas.

La estructura de cada pregunta será:

```py
pool_preguntas[nivel][pregunta_n]
```
{: .nolineno }

Donde cada pregunta tendrá los componentes de enunciado y alternativas.

Por otra parte, el líder técnico del equipo ya desarrolló un esqueleto del funcionamiento de la App que se puede encontrar [aquí](apoyo_estructuras_de_datos_y_funciones_III.zip){: download='apoyo-desafío.zip'} 👈

Este esqueleto tendrá que ir siendo rellenado dependiendo de las tareas específicas del *backlog* en los sectores exclusivamente detallados para ello.

> **Nota**: Los test entregados no deben ser modificados y deben utilizarse sólo para comprobar el correcto comportamiento del programa.


---

## Requerimientos

### Preguntas

Primero, tenemos un archivo `preguntas.py` (que ya viene en el apoyo) que contiene el set de preguntas:

{% include codeHeader.html file="preguntas.py" %}
```python
preguntas_basicas = {
    'pregunta_1': {'enunciado':['Enunciado básico 1'],
    'alternativas': [['alt_1', 0], 
                     ['alt_2', 1], 
                     ['alt_3', 0], 
                     ['alt_4', 0]]},
    'pregunta_2': {'enunciado':['Enunciado básico 2'],
    'alternativas': [['alt_1', 0], 
                     ['alt_2', 1], 
                     ['alt_3', 0], 
                     ['alt_4', 0]]},
    'pregunta_3': {'enunciado':['Enunciado básico 3'],
        'alternativas': [['alt_1', 0], 
                        ['alt_2', 1], 
                        ['alt_3', 0], 
                        ['alt_4', 0]]}
}

preguntas_intermedias = {
    'pregunta_1': {'enunciado':['Enunciado intermedio 1'],
    'alternativas': [['alt_1', 0], 
                     ['alt_2', 1], 
                     ['alt_3', 0], 
                     ['alt_4', 0]]},
    'pregunta_2': {'enunciado':['Enunciado intermedio 2'],
    'alternativas': [['alt_1', 0], 
                     ['alt_2', 1], 
                     ['alt_3', 0], 
                     ['alt_4', 0]]},
    'pregunta_3': {'enunciado':['Enunciado intermedio 3'],
        'alternativas': [['alt_1', 0], 
                        ['alt_2', 1], 
                        ['alt_3', 0], 
                        ['alt_4', 0]]}
}

preguntas_avanzadas = {
    'pregunta_1': {'enunciado':['Enunciado avanzado 1'],
    'alternativas': [['alt_1', 0], 
                     ['alt_2', 1], 
                     ['alt_3', 0], 
                     ['alt_4', 0]]},
    'pregunta_2': {'enunciado':['Enunciado avanzado 2'],
    'alternativas': [['alt_1', 0], 
                     ['alt_2', 1], 
                     ['alt_3', 0], 
                     ['alt_4', 0]]},
    'pregunta_3': {'enunciado':['Enunciado avanzado 3'],
        'alternativas': [['alt_1', 0], 
                        ['alt_2', 1], 
                        ['alt_3', 0], 
                        ['alt_4', 0]]}
}

pool_preguntas = {'basicas': preguntas_basicas,
                  'intermedias': preguntas_intermedias,
                  'avanzadas': preguntas_avanzadas}
```
{: .nolineno }

### Validador

Se solicita crear un programa llamado `validador.py` (que ya viene en el apoyo) el cual permite validar si un valor se encuentra incluido en un conjunto de opciones.

- Se pide crear la función `validate()`, la cual debe aceptar como argumentos una **lista de opciones** y una **elección**.
- En caso que no se ingrese una opción dentro del conjunto, la aplicación debe mostrar `'Opción no válida, ingrese una de las opciones válidas: ` y solicitar el valor hasta que se ingrese uno válido.


> **Tip**: Se puede usar el operador `not in` para determinar si un elemento no es parte de una lista.

#### Solución

La solución al requerimiento se veía bastante sencilla, pero si nos fijamos en los casos de prueba, veremos que sólo se utilizan listas de cadenas (*strings*) y si a nuestro validador le pasamos una lista de números como opciones se quedaría dentro del bucle a pesar de que ingresemos la opción correcta. Vamos a solucionar eso usando la función integrada de Python `isinstance(object, type)` para comprobar el tipo de argumento:

{% include codeHeader.html file="validador.py" compiler="y" %}
```python
def validate(opciones, eleccion):
    # Definir validación de eleccion
    ##########################################################################
    while True:

        if isinstance(eleccion, int) and eleccion not in opciones:
            print('Opción no válida, ingrese una de las opciones válidas:', opciones)
            eleccion = int(input('Ingresa una Opción: '))

        elif isinstance(eleccion, str) and eleccion not in opciones:
            print('Opción no válida, ingrese una de las opciones válidas:', opciones)
            eleccion = input('Ingresa una Opción: ').lower()
            
        else:
            break
    ##########################################################################
    return eleccion


if __name__ == '__main__':
    
    eleccion = input('Ingresa una Opción: ').lower()
    # letras = ['a','b','c','d'] # pueden probar con letras también para verificar su funcionamiento.
    numeros = ['0','1']
    # Si se ingresan valores no validos a eleccion debe seguir preguntando
    print(validate(numeros, eleccion))
```
{: .nolineno }

### Escoger nivel

Cree un programa llamado `level.py` (que ya viene en el apoyo) que incluya la función `choose_level()` que permite **escoger el nivel de dificultad** de la pregunta a realizar.

Esta función debe aceptar como argumentos el **número de la pregunta**, y la **cantidad de preguntas por nivel**. 

El funcionamiento debe ser el siguiente:

- Si se eligen 2 preguntas por nivel
    - Las preguntas **nº1** y **nº2** deben ser de nivel de dificultad básicas.
    - Las preguntas **nº3** y **nº4** de nivel intermedio.
    - Las preguntas **nº5** y **nº6** avanzadas.

- En cambio si se escogen 3 preguntas por nivel
    - Las preguntas **nº1**, **nº2** y **nº3** deben ser de nivel de dificultad básicas.
    - Las preguntas **nº4**, **nº5** y **nº6** deben ser de nivel de dificultad intermedia.
    - Las preguntas **nº7**, **nº8** y **nº9** deben ser de nivel de dificultad avanzadas.

La función debe **retornar el nivel escogido**.

#### Solución

La solución al requerimiento es sencillo, ya que debemos considerar que vamos a recibir el `n_pregunta` (número de pregunta actual) entonces podemos plantear una expresión condicional como en el siguiente diagrama de flujo:

{% capture expr_condicional %}
---
title: "DIAGRAMA DE FLUJO"
---
graph TD
  inicio([Inicio])
  inicio-->leer[/Leer 
  <b style='color: #ff3'>n_pregunta</b> y <b style='color: #ff3'>p_level</b>/]
  leer--&gt;condicion{<b style='color: #ff3'>n_pregunta</b> <= <b style='color: #ff3'>p_level</b>}
  condicion----&gt;|Si| basicas[retornar 'basicas']
  condicion--&gt;|No| condicionB{<b style='color: #ff3'>n_pregunta</b> <= 2 * <b style='color: #ff3'>p_level</b>}
  condicionB-->|Si| intermedias[retornar 'intermedias']
  condicionB-->|No| avanzadas[retornar 'avanzadas']
  basicas-->fin([fin])
  intermedias-->fin
  avanzadas-->fin
{% endcapture %}

{% include mermaid.html content=expr_condicional %}

El código para representar lo anterior y solución al requerimiento, se ve a continuación:

{% include codeHeader.html file="level.py" compiler="y" %}
```python
def choose_level(n_pregunta, p_level):
    
    # Construir lógica para escoger el nivel
    ##################################################
    if n_pregunta <= p_level:
        level = 'basicas'
    elif n_pregunta <= 2*p_level:
        level = 'intermedias'
    else:
        level = 'avanzadas'
    ##################################################
    return level

if __name__ == '__main__':
    # verificar resultados
    print(choose_level(2, 2)) # basicas
    print(choose_level(3, 2)) # intermedias
    print(choose_level(7, 2)) # avanzadas
    print(choose_level(4, 3)) # intermedias
```
{: .nolineno }

### Mezclar alternativas

Crear un programa llamado `suffle.py` (que viene en el apoyo) que contenga la función `shuffle_alt_()`.

- Esta función debe tomar como argumento una pregunta desde el archivo `preguntas.py` (con un nivel y una pregunta definida) y mezclar las alternativas.
- La función debe retornar las alternativas mezcladas.

> **Tip**: considerar la función `random.shuffle()` del módulo **`random`**.


#### Solución

La solución al requerimiento es muy simple, ya que estamos **recibiendo como parámetro la pregunta** (un diccionario) y bien como indica el **tip** usamos la función `shuffle` del módulo **random** para mezclar la lista de alternativas contenidas en `pregunta['alternativas']`:

{% include codeHeader.html file="suffle.py" compiler="y" %}
```python
import preguntas as p
import random

def shuffle_alt(pregunta):
    #mezclar alternativas
    #######################################################################
    random.shuffle(pregunta['alternativas'])
    #######################################################################
    
    return pregunta['alternativas']

if __name__ == '__main__':
    # si se ejecuta el  programa varias veces las alternativas debieran aparecer en distinto orden
    pregunta = {
        'enunciado':['Enunciado básico 1'],
        'alternativas': [['alt_1', 0], 
                     ['alt_2', 1], 
                     ['alt_3', 0], 
                     ['alt_4', 0]]
    }
    # print(shuffle_alt(p.pool_preguntas['basicas']['pregunta_1'])) 
    print(shuffle_alt(pregunta)) 
    # a modo de ejemplo
    # [['alt_1', 0], ['alt_3', 0], ['alt_2', 1], ['alt_4', 0]]
```
{: .nolineno }

### Escoger una pregunta

Crear un programa llamado `question.py` (que viene en el apoyo) que permita escoger una pregunta que no se haya hecho durante la ejecución del programa dependiendo del nivel de dificultad.

- Cree una función llamada `choose_q()` como único argumento que es la dificultad de la pregunta.
- La función debe tomar las preguntas del archivo `preguntas.py` de acuerdo a la difucultad escogida.
- La función debe escoger una pregunta de las opciones disponibles y eliminar dicha opción para no volverla a escoger.
- La función debe retornar dos elementos separados, **el primero debe ser el enunciado** escogido y el segundo **las alternativas mezcladas** de acuerdo a la tarea anterior.

#### Solución

Nos proporcionan un diccionario con las opciones disponibles almacenadas en la variable `opciones`, para cuando se llame a la función y recibamos el argumento dado. Por ejemplo `choose_q("basicas")` escoger una opción al azar de la lista correspondiente.

La solución al requerimiento es la siguiente:

{% include codeHeader.html file="question.py" %}
```python
import preguntas as p
import random
from shuffle import shuffle_alt

# Opciones dadas para escoger.
###############################################
opciones = {'basicas': [1,2,3],
            'intermedias': [1,2,3],
            'avanzadas': [1,2,3]}
###############################################

def choose_q(dificultad):
    #escoger preguntas por dificultad
    preguntas = p.pool_preguntas[dificultad]
    # usar opciones desde ambiente global
    global n_elegido
    # escoger una pregunta
    n_elegido = random.choice(opciones[dificultad])
    # eliminarla del ambiente global para no escogerla de nuevo
    opciones[dificultad].remove(n_elegido)
    # escoger enunciado y alternativas mezcladas
    pregunta = preguntas['pregunta_'+str(n_elegido)]
    alternativas = shuffle_alt(pregunta)
    
    return pregunta['enunciado'], alternativas

if __name__ == '__main__':
    # si ejecuto el programa, las preguntas cambian de orden, pero nunca debieran repetirse
    pregunta, alternativas = choose_q('basicas')
    print(f'El enunciado es: {pregunta}')
    print(f'Las alternativas son: {alternativas}')
    
    pregunta, alternativas = choose_q('basicas')
    print(f'El enunciado es: {pregunta}')
    print(f'Las alternativas son: {alternativas}')
    
    pregunta, alternativas = choose_q('basicas')
    print(f'El enunciado es: {pregunta}')
    print(f'Las alternativas son: {alternativas}')
```
{: .nolineno }

### Mostrar las preguntas en pantalla

Crear un programa llamado `print_preguntas.py` (*que viene en el apoyo*), el cual permitirá mostrar en la app las preguntas de acuerdo a un formato:

- El programa debe contener la función `print_pregunta()` que tome como argumentos un enunciado y sus alternativas, y que le aplique formato.
- Esta función no debe retornar ningún objeto, sólo imprimir en pantalla.
- El formato a utilizar es imprimir el enunciado, seguido de un salto de línea.
- Luego cada alternativa irá acompañada de una letra, una por cada línea de la siguiente manera:
    - A. Alternativa 1
    - B. Alternativa 2
    - C. Alternativa 3
    - D. Alternativa 4

#### Solución

La solución al requermiento es la siguiente:

{% include codeHeader.html file="print_preguntas.py" %}
```python
import preguntas as p

def print_pregunta(enunciado, alternativas):
    
    # Imprimir enunciado y alternativas
    ###############################################################
    print("".join(enunciado))

    
    for i in range(len(alternativas)):
        print(chr(ord('A') + i)+".", alternativas[i][0])
    ###############################################################
        
if __name__ == '__main__':
    # Las preguntas y alternativas deben mostrarse según lo indicado
    pregunta = p.pool_preguntas['basicas']['pregunta_1']
    print_pregunta(pregunta['enunciado'],pregunta['alternativas'])
    
    # Enunciado básico 1

    # A. alt_1
    # B. alt_2
    # C. alt_3
    # D. alt_4
```
{: .nolineno }

### Verificar respuesta

Crear un programa llamado `verify.py` (incluido en el apoyo) el cual debe contener la función verificar que permite comprobar si la respuesta entregada por el usuario es correcta.

- El programa debe contener la función `verificar()` que toma como argumento las alternativas y la elección.
- En el caso que la respuesta sea correcta debe imprimir en pantalla `Respuesta Correcta` y **retornar** sólo el valor `True`, en caso contrario debe imprimir en pantalla `Respuesta Incorrecta` y retornar sólo el valor `False`.

#### Solución

La solución al requerimiento es la siguiente:

{% include codeHeader.html file="verify.py" %}
```python
import preguntas as p

def verificar(alternativas, eleccion):
    #devuelve el índice de elección dada
    eleccion = ['a', 'b', 'c','d'].index(eleccion)
    # generar lógica para determinar respuestas correctas
    ##########################################################################################
    correcto = True if alternativas[eleccion][1] == 1 else False

    if correcto:
        print('Respuesta Correcta')
    else:
        print('Respuesta Incorrecta')
    ##########################################################################################
    return correcto

if __name__ == '__main__':
    from print_preguntas import print_pregunta
    
    # Siempre que se escoja la alternativa con alt_2 estará correcta, e incorrecta en cualquier otro caso
    pregunta = p.pool_preguntas['basicas']['pregunta_2']
    print_pregunta(pregunta['enunciado'],pregunta['alternativas'])
    respuesta = input('Escoja la alternativa correcta:\n> ').lower()
    verificar(pregunta['alternativas'], respuesta)
```
{: .nolineno }

### Ensamblado de la app

Como se mencionó anteriormente, el programa `main.py` incluye un esqueleto que el Tech Lead desarrolló. Este esqueleto ya incluye mensajes en el caso de acertar a una pregunta, de responder correctamente todas las preguntas o en caso de equivocarse, además de la lógica de pasar preguntas una a una.

El objetivo de esta tarea es poder incluir todas las funcionalidades desarrolladas anteriormente y completar las siguientes tareas:

- Agregar un **validador de opción** (el cual determina el inicio del programa o no)
- En caso de escoger la **opción 0**, agregar el mensaje `Nos vemos pronto!` y finalizar el programa.
- Agregar un validador al número de preguntas por nivel.
- Escoger el nivel de la pregunta dependiendo del contador `n_pregunta` y el número de preguntas por nivel.
- Escoger el enunciado y las alternativas dependiendo del nivel según corresponda.
- Imprimir enunciado y sus alternativas pantalla.
- Validar la respuesta entregada.
- Verificar si la respuesta es correcta o no.
- Validar si desea continuar o no.

#### Solución

La solución al requerimiento es la siguiente:

{% include codeHeader.html file="main.py" %}
```python
# No modificar
from verify import verificar
import preguntas as p
from question import choose_q
from print_preguntas import print_pregunta
from level import choose_level
from validador import validate
import time
import os
import sys

# valores iniciales - 
n_pregunta = 0
continuar = 'y'
correcto = True
p_level = 10
op_sys = 'cls' if sys.platform == 'win32' else 'clear'

# ----------------------------------------
os.system(op_sys) # limpiar pantalla

print('Bienvenido a la Trivia')
opcion = input('''Ingrese una opción para Jugar!
        1. Jugar
        0. Salir
        
    > ''')
# 1. validar opcion
opcion = validate(['0', '1'], opcion)

# 2. Definir el comportamiento de Salir
if opcion == '0':
    print("Saliendo del programa")
    time.sleep(2)
    os.system(op_sys)
    exit()
    # finalizar programa

# Funcionamiento de preguntas
while correcto and n_pregunta < 3*p_level:
    
    if n_pregunta == 0:
        p_level = input('¿Cuántas preguntas por nivel? (Máximo 3): ')
        # 3. Validar el número de preguntas por nivel
        p_level = validate([1, 2, 3], int(p_level))
        print("preguntas por nivel:", p_level)
    if continuar == 'y':
        #contador de preguntas
        n_pregunta += 1
        # 4. Escoger el nivel de la pregunta
        nivel = choose_level(n_pregunta, p_level)
        print(f'Pregunta {n_pregunta}:{nivel}')
        # 5. Escoger el enunciado y las alternativas de una pregunta según el nivel escogido
        enunciado, alternativas = choose_q(nivel)
        #6. Imprimir el enunciado y sus alternativas en pantalla
        print_pregunta(enunciado, alternativas)
        
        respuesta = input('Escoja la alternativa correcta:\n> ').lower()
        # 7. Validar la respuesta entregada
        respuesta = validate(['a', 'b', 'c', 'd'], respuesta)
        # 8. Verificar si la respuesta es correcta o no
        correcto = verificar(alternativas, respuesta)
        
        if correcto and n_pregunta < 3*p_level:
            print('Muy bien sigue así!')
            continuar = input('Desea continuar? [y/n]: ').lower()
            #9. Validar si es que se responde y o n
            continuar = validate(['y', 'n'], continuar)
            os.system(op_sys)
        elif correcto and n_pregunta == 3*p_level:
            print(f'Felicitaciones, Has respondido {3*p_level} preguntas correctas. \n Has ganado la Trivia \n Gracias por Jugar, hasta luego!!!')
            time.sleep(3)
            os.system(op_sys)
        else: 
            print(f'Lo siento, conseguiste {n_pregunta - 1} respuestas correctas,\n Sigue participando!!')
            time.sleep(3)
            exit()
    else: 
        print('Nos vemos la proxima vez, sigue practicando')
        time.sleep(3)
        exit()
```
{: .nolineno }

---

## Repositorio

{% include repository.html repo=page.github %}
