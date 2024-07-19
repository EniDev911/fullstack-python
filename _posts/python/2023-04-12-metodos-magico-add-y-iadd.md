---
layout: post
title: Métodos mágicos para sumas
category: "Python"
thumbnail: /assets/img/
---

### El método mágico \_\_add\_\_

El método `__add__` se llama cuando se utiliza el operador de suma (`+`) con instancias de su clase personalizada. Se deberían tomar dos argumentos `self` y `other`. Este método debería devolver un nuevo objeto que represente el resultado de la suma, dejando los objetos originales sin cambios.

A continuación un ejemplo sencillo de su implementación:


{% tabs ej_add %}
{% tab ej_add python %}
{% include codeHeader.html icon="python" compiler="y" %}
```python
class Numero:
	def __init__(self, valor):
		self.valor = valor


	def __add__(self, other):

		if isinstance(other, Numero):
			return Numero(self.valor + other.valor)
		else:
			raise TypeError("Tipo inválido para operar +")

# Creamos objetos de tipo Numero
obj_num1 = Numero(10)
obj_num2 = Numero(20)
obj_num3 = Numero(30)

# Agregamos multiples objetos usando el operador +
resultado = obj_num1 + obj_num2 + obj_num3

print(resultado.valor)  # Output: 60
```
{: .nolineno }
{% endtab %}
{% tab ej_add explicación %}
{: .p-2 .rounded style="background: #111"}
En este ejemplo, definimos una clase personalizada, `Numero`, que representa un número con un atributo `valor`. Implementamos el método `__add__`, que permite sumar instancias de `Numero`. Luego creamos 3 instancias y usando el operador `+` realizamos la suma de los atributos de cada instancia y en la variable `resultado` almacenamos una nueva instancia (que nos retorna `__add__`) con el valor actualizado.
{% endtab %}
{% endtabs %}
