---
layout: post
title: Tipos de métodos
modulo: m4
type: apunte
show: true
show_next: true
---

## Métodos no estáticos

### ¿Qué es un método no estático?

- Puede ser llamado sólo desde una instancia de una clase.
- También se les llama métodos de instancia.
- Son capaces de modificar el valor de los atributos de una instancia de la clase.
- Son capaces de acceder a los valores de estos atributos en cada instancia específica.
- Sus retornos pueden variar entre distintas instancias de la clase, ya que cada instancia puede tener distintos estados (valores en sus atributos).

### ¿Cómo definir un método no estático en Python?

- Se debe definir el método al igual que se define cualquier función, pero dentro de una clase.
- Puede o no tener retorno, sin embargo, en cuanto a los parámetros se requiere que como mínimo tenga el parámetro `self`.
- Hace referencia a una instancia específica de la clase y permite acceder a otros métodos de la clase o a los atributos, de esta forma, se puede también distinguir cuando se hace referencia a un atributo, en lugar de una variable dentro del alcance local de un método.

{% include codeHeader.html icon="python" %}
```py
class Pelota(object):
	# Método de instancia que asigna color
	def asigna_color(self, nuevo_color: str):
		self.color = nuevo_color

	# Método de instancia que lee el atributo de instancia color
	def lee_color(self):
		self.color = nuevo_color
		print("El color de esta pelota es {}".format(self.color))
```
{: .nolineno }

