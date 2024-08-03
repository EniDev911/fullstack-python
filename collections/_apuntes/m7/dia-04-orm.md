---
layout: post
title: El ORM de Django, Día 4
modulo: m7
type: apunte
show: true
show_next: true
---


### Parámetros transversales

También existen una serie de parámetros transversales a los campos, los cuales definiremos a continuación:

{: .table .table-dark }
|parámetro|descripcipción|Por defecto|
|:--------|:-------------|:----------|
|`null`|Si `null=True`, django permitirá valores nulos|`False`|
|`blank`|Si `blank=True`, django permite grabar valores en blanco (a nivel de django)|`False`|
|`choices`|Realiza una validación en el modelo sobre los valores posibles en un campo dado.|Opcional|
|`db_column`|Este parámetro nos permite setear un nombre para la columna en la base de datos.|Opcional|

---

### Relaciones One to One

Mirando las relaciones desde el punto de vista de la bases de datos relacionales, podemos decir que una relación **One to One** existe cuando cada fila (registro) en una tabla, tiene solo una fila relacionada en una segunda tabla.

Por ejemplo, una empresa podría decidir asignar una oficina a solamente un empleado. Entonces, un empleado puede tener solo una oficina. La misma empresa podría también decidir que un departamento puede tener solo un gerente, entonces un gerente puede dirigir solamente un departamento.

[![](https://mermaid.ink/img/pako:eNqFkV9PwjAUxb9Kc580GWRlYyt9RhMjYIzyIjOkWa_QSNul6xKR7btbGP550PjStLfn3N_JvQcorUTggG6qxMYJXZjC69VcGLFB90wOx3fhjdBIyq1wF-P4khSwuHski-VsVkD_vxO1X_8nqmytvLLmb013PORqipVwXqPxXwEk1qVT1bedxr8ydB98rSRRxgfB9S351JDl4uZ-efUDpUnbDgZtSyThxCs0CBFodFooGYYS2CS08FvUWAAPVync69HfBZ1ovH3YmxK4dw1G0FRSeDyPEfiL2NWhWgkD_ABvwEd0NMzGjMXJZDyJaZ4lEeyBJ-mQhkKWMpaynFLaRfBubegQD_M8T5M8yVgeM5pNRhGgVN66eb-00-5OiKeToc_hbLPZnvndB-Mxmfg?type=png){:width="300"}](https://mermaid.live/edit#pako:eNqFkV9PwjAUxb9Kc580GWRlYyt9RhMjYIzyIjOkWa_QSNul6xKR7btbGP550PjStLfn3N_JvQcorUTggG6qxMYJXZjC69VcGLFB90wOx3fhjdBIyq1wF-P4khSwuHski-VsVkD_vxO1X_8nqmytvLLmb013PORqipVwXqPxXwEk1qVT1bedxr8ydB98rSRRxgfB9S351JDl4uZ-efUDpUnbDgZtSyThxCs0CBFodFooGYYS2CS08FvUWAAPVync69HfBZ1ovH3YmxK4dw1G0FRSeDyPEfiL2NWhWgkD_ABvwEd0NMzGjMXJZDyJaZ4lEeyBJ-mQhkKWMpaynFLaRfBubegQD_M8T5M8yVgeM5pNRhGgVN66eb-00-5OiKeToc_hbLPZnvndB-Mxmfg)