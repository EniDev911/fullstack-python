---
layout: post
title: Sentencias Condicionales e iterativas
modulo: m3
type: evaluado
challenge: 11
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

### Resultado

{% include codeHeader.html file='imc.py' %}
```py
import sys

def calcular_imc(p, a):
    a = a / 100
    return round(p / (a * a), 2)

def nivel_de_peso(imc):
    """
    - Bajo Peso: < 18.5
    - Adecuado: 18.5 - 25
    - Sobrepeso: 25 - 30
    - Obesidad grado I: 30 - 35
    - Obesidad grado II: 35 - 40
    - Obesidad grado III: Más de 40
    """
    clasificacion = "Su IMC es %s\nLa clasificación OMS es %s"

    if imc <= 18.5:
        return clasificacion % (imc, "Bajo Peso")
    elif imc <= 25:
        return clasificacion % (imc, "Adecuado")
    elif imc <= 30:
        return clasificacion % (imc, "Sobrepeso")
    elif imc <= 35:
        return clasificacion % (imc, "Obesidad Grado I")
    elif imc <= 40:
        return clasificacion % (imc, "Obesidad Grado II")
    else: 
        return clasificacion % (imc, "Obesidad Grado III")

peso = float(sys.argv[1])
altura = float(sys.argv[2])

resultado = nivel_de_peso(calcular_imc(peso, altura))
print(resultado)
```

---

## Actividad 2 - Cachipún

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