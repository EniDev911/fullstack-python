---
layout: post
title: Sentencias Condicionales e iterativas II
modulo: m3
type: evaluado
challenge: 13
---

En este desafío nos piden desarrollar 3 actividades empleando ciclos para la resolución. Cada actividad presentará requerimientos independientes de modo de obtener un programa con su desarrollo.


## Actividad 1 - Filtrado Compacto

Una empresa provee de los balances del año anterior un diccionario como se muestra a continuación:


{% include codeHeader.html file='ventas.py' %}
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

if __name__ == '__main__':
    umbral = int(sys.argv[1])
    resultado = dict()

    for k,v in ventas.items():
        if v > umbral:
            resultado[k] = v

    print(resultado)
```

---

## Actividad 2 - Primeros auxilios


### Anunciado

En cualquier momento puede haber una emergencia y hay que estar preparados ¿sabrías como reaccionar en caso de que alguien necesite de primeros auxilios?.

Es muy probable que mucha gente no conozca cuáles son los pasos a seguir en caso de emergencia. Es por eso que se solicita construir una aplicación que permita indicar los pasos a seguir ante una emergencia. Debido a que no se espera a que usted sea un experto en el tema se provee un diagrama que explica las distintas instancias a la que está sometido durante una emergencia.


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


