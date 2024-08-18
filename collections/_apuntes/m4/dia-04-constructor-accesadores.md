---
layout: post
title: "Día 4"
subtitle: "Tipos de métodos e interacciones entre objetos"
modulo: m4
type: apunte
show: true
show_next: true
---

### Método constructor

Es un método que se **ejecuta automáticamente** al momento de crear una instancia de la clase, sin necesidad de ser llamado explícitamente.

- Su función es dar valores a los atributos de la instancia recién creada. Los valores que se dan a los atributos pueden ser simplemente un valor por defecto (definido en el constructor) o valores que se deben especificar explícitamente al momento de crear la instancia.
- Dependiendo del problema a resolver, existen dos opciones a utilizar:
	- valores por defecto
	- valores entregados explícitamente
	- además, se puede utilizar una combinación de ambas, es decir, valores por defecto que pueden ser sobreescrito por valores entregados.


{: align="center" }
```mermaid
---
title: "Ejemplo constructor"
config:
  theme: dark
---
classDiagram
    class Pelota["Clase Pelota fa:fa-circle"] {
      constructor(tamaño: "15 cm", color: "blanco", material: "plástico")
      tamaño 
      color
      material
    }
    class p1["Pelota: pelota de basketball fa:fa-basketball"] {
        color: naranja
        tamaño: 20 cm
        material: goma
    }
    class p2["Pelota: pelota de volleyball fa:fa-volleyball"] {
        color: amarillo
        tamaño: 15 cm
        material: cuero
    }
    class p3["Pelota: pelota por defecto fa:fa-circle"] {
        color: blanco
        tamaño: 15 cm
        material: plástico
    }
    p1 --|> Pelota : instancia de
    p2 --|> Pelota : instancia de
    p3 --|> Pelota : instancia de
```

### ¿Cómo se define un método constructor en Python?

- Se define exclusivamente con el nombre `__init__`.
- Debe tener como primer parámetro la instancia de la clase, usando `self`.
- No puede tener retorno (a menos que sea `None`).
- Por lo general, es el primer método definido dentro de la clase.

{% include codeHeader.html icon="python" compiler="y" %}
```py
class Pelota():
	def __init__(self):
		print("¡Se ha creado una pelota!")

p = Pelota()  # Salida: ¡Se ha creado una pelota!
```
{: .nolineno }

### Atributos de la clase

- En el constructor normalmente se asigna valores a los atributos de la clase:

{% include codeHeader.html icon="python" compiler="y" %}
```py
class Pelota():
	def __init__(self):
		self.color = "blanco"
		self.tamanio = 20
		self.material = "plástico"

p = Pelota()
print(p.color, p.tamanio, p.material) # Salida: blanco 20 plástico
```
{: .nolineno }

- Asignar valores desde parámetros del método:

{% include codeHeader.html icon="python" compiler="y" %}
```py
class Pelota():
	def __init__(self, color: str, tamanio: int, material: str):
		self.color = color
		self.tamanio = tamanio
		self.material = material

p = Pelota("Amarillo", 16, "plástico")
print(p.color, p.tamanio, p.material) # Salida: Amarillo 16 plástico
```
{: .nolineno }

- Asignar valores desde parámetros del método, con valores por defecto:

{% include codeHeader.html icon="python" compiler="y" %}
```py
class Pelota():
	def __init__(self, color: str, tamanio = 20, material = "plástico"):
		self.color = color
		self.tamanio = tamanio
		self.material = material

p = Pelota("Amarillo", 16)
print(p.color, p.tamanio, p.material) # Salida: Amarillo 16 plástico
```
{: .nolineno }
