---
layout: post
title: Mini Encuesta
type: guiado
show: true
modulo: m3
---

Una empresa de encuesta se contacta con nosotros para generar una pequeña encuesta de 3 preguntas.

Las respuestas dadas deben ser:

- almacenadas en una lista
- mostradas al final del programa para conocimiento del usuario

En el script `mini_encuesta.py`, se encuentra almacenadas en una lista las siguientes preguntas:

{% include codeHeader.html icon="python" %}
```python
preguntas = ['Enunciando pregunta 1', 'Enunciado pregunta 2', 'Enunciado pregunta 3']
```
{: .nolineno }


Luego se crea un mecanismo que permite mostrar cada pregunta con un menú de opciones. Las opciones para cada pregunta deben ser:

{% include codeHeader.html icon="python" %}
```python
def imprimir_menu():
	print('Opciones')
	print('1) De acuerdo')
	print('2) En desacuerdo')
	print('3) No me interesa')
```
{: .nolineno }