---
layout: post
title: Sentencias Condicionales e iterativas II
modulo: m3
type: evaluado
challenge: 12
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