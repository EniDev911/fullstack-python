---
layout: post
title: Día 13 - Manejo de errores y archivos
subtitle: Guía de ejercicios - Día 13
modulo: m4
type: ejercicio
show: true
toc: false
show_next: true
---


### Herencia


Desde el área de electrónica de una tienda retail, se te ha solicitado diseñar la estructura de clases de sus monitores, donde cada monitor tendrá su propia resolución. Por ahora, se solicita considerar que, dentro de los monitores, existen los de tipo **LED**, y también existen los monitores multifunción. En este caso, considere crear una clase que permita crear monitores / televisor 2 en 1 (debes considerar una clase `Televisor`).

#### Solución

Creamos un nuevo archivo `televisor.py`:

{% include newfile.html file="televisor.py"  %}

1. En el archivo definimos la clase `Televisor`:

{% include codeHeader.html file="televisor.py" %}
```py
class Televisor():
	pass
```
{: .nolineno }


{: start='2' }
2. En un archivo `monitor.py`, importar la clase `Televisor`, y crear la clase `Monitor`, con el atributo de instancia resolución:


{% include codeHeader.html file="monitor.py" %}
```py
from televisor import Televisor

class Monitor():
	def __init__(self, resolucion) -> None:
		self.resolucion = resolucion
```
{: .nolineno }

