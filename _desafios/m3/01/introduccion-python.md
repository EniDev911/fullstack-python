---
layout: post
title: Introducción a Python
modulo: m3
challenge: 11
type: evaluado
---

## Descripción

En este desafío nos piden desarrollar 2 actividades para validar los conocimientos realizando cálculos simples en Python usando operaciones básicas.


## Actividad 1 - Velocidad de escape

1. Se solicita crear un script `escape.py` que permita calcular la velocidad de escape ingresando como datos de entradas el radio `r` y la constante `g`. Los datos de entrada deben ingresarse de manera interactiva utilizando la función `input()`.


## Actividad 2 - Rentabilidad

Un emprededor quiere crear una app que provea un servicio para entregar comida de mascotas. Este proyecto tiene buenos pronósticos, pero su éxito dependerá de cuántos usuarios puedan alcanzar. La manera en la que se medirá esto es calculando las utilidades del proyecto. Estas utilidades se pueden calcular mediante la siguiente formula:

{: align='center' .fs-2 }
*utilidades = P \* U - GT*

Donde:
- **P**: Precio de Suscripción
- **U**: Número de Usuarios
- **GT**: Gastos Totales


### Desarrollo

1. Crear el programa emprendedor1.py que utilice la fórmula descrita anteriormente para calcular las utilidades de un proyecto. Para ello utiliza `input()` para solicitar como dato el precio de suscripción P, el número de usuarios U y el gasto total GT.

- Creamos el script emprendedor.py:

{% tabs crear_script %}
{% tab crear_script BASH %}
{% include codeHeader.html %}
```bash
touch emprendedor.py
```
{% endtab %}
{% tab crear_script CMD %}
{% include codeHeader.html %}
```bat
type null > emprendedor.py
```
{% endtab %}
{% endtabs %}

- Definimos la función descrita anteriormente y pedimos los datos a través de `inputs`:

{% include codeHeader.html file='emprendedor.py' %}
```py
def obtenerUtilidades(p, u, gt):
    return (p * u) - gt

if __name__ == "__main__":
    resultado = obtenerUtilidades(
        int(input("Ingresar el precio de suscripción: ")),
        int(input("Ingresar el número de usuarios: ")),
        int(input("Ingresar el gasto total: "))
    )
    print("Utilidades:", resultado)
```

{:start="2"}
2. Ahora nos dicen que el emprendedor considera 2 tipos de usuarios los **usuarios normales** y los **usuarios premium** a los cuales se le cobrará una suscripción un 50% mayor. Crea una segunda versión llamada `emprendedor2.py` que permita considerar el caso recién expuesto. Para ello debemos modificar lá función para que solicite mediante `input()` los parámetros de entrada.

- Creamos el script emprendedor2.py:

{% tabs emprendedor2 %}
{% tab emprendedor2 BASH %}
{% include codeHeader.html %}
```bash
touch emprendedor2.py
```
{% endtab %}
{% tab emprendedor2 CMD %}
{% include codeHeader.html %}
```bat
type null > emprendedor2.py
```
{% endtab %}
{% endtabs %}

- Moficamos la función anterior por lo siguiente:

{% include codeHeader.html file='emprendedor2.py' %}
```py
def obtenerUtilidades(p, u, gt, tipo_usuario):
	if tipo_usuario == 'premiun':
		precio_suscripcion =  p * .5
		return ((precio_suscripcion * u) - gt) 
	return ((p * u) - gt)
```