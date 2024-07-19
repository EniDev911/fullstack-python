---
layout: post
title: "Desafío guiado - Solicitud de Créditos"
type: "guiado"
modulo: m4
show: true
---

## Enunciado

Desde una institución bancaria, te han solicitado realizar un prototipo de programa que permita a un usuario ingresar una solicitud de crédito. En esta primera etapa, solo se quiere crear las solicitudes de los distintos tipos de crédito, sin considerar las características del usuario solicitante.

El prototipo debe consistir en **una aplicación de consola en Python**, la cual al ser ejecutada debe solicitar al usuario ingresar la siguiente información **mediante línea de comandos**:

- **El tipo de crédito** las opciones son **crédito de consumo**, **crédito comercial** y **crédito hipotecario**.
- **Monto del crédito**.
- **Correo electrónico** del usuario solicitante.

Con los datos ingresados, se debe ingresar una instancia de solicitud de crédito adecuada. Para ello, se debe considerar la siguiente información entregada por la entidad bancaria:

- Los **crédito de consumo** y los **crédito comerciales** solo pueden tener montos entre **\$1.000.000** y **\$5.000.000** inclusive. Los **créditos hipotecarios** solo pueden tener montos entre **\$20.000.000** y **\$100.000.000**.
- Si se **solicita un crédito fuera del rango** permitido, se debe **forzar el monto solicitado al valor posible más cercano**. Ejemplo: Si se solicita un **crédito de consumo** de **\$400.000**, se forzará esta cantidad a ser de **\$1.000.000**.
- Los correos de contacto para las solcitudes de créditos de consumo e hipotecarios solo pueden tener terminaciones **.cl** o **.com**. Para el caso de las solicitudes de créditos comerciales, también pueden terminar en **.org**, pero no pueden contener los textos "**gmail**", "**outlook**" ni "**hotmail**". En todos los casos, los correos deben tener 1 símbolo arroba (**@**).
- Si se ingresa un correo no válido para el tipo de crédito solicitado, se debe forzar a ser un texto vacío.

---

## Desarrollo

En un archivo llamado `solicitud_credito.py`, importar **ABC** y **abstractmethod** desde el módulo abc, y definir la clase **SolicitudCredito**:

{% include codeHeader.html icon="python" %}
```python
from abc import ABC, abstractmethod

class SolicitudCredito(ABC):
```
{: .nolineno }

Luego, definimos el método abstracto **validar_monto**, el cual recibe el parámetro **monto** además de la instancia:

{% include codeHeader.html icon="python" %}
```py
	@abstractmethod
	def validar_monto(self, monto: str):
		pass
```
{: .nolineno }

También dentro de la clase **SolicitudCredito**, definir el método **validar_correo**, el cual recibe el parámetro **correo** además de la instancia:

{% include codeHeader.html icon="python" %}
```py
	@abstractmethod
	def validar_correo(self, correo: str):
		pass
```
{: .nolineno }

En el mismo archivo `solicitud_credito.py`, a continuación de la clase **SolicitudCredito**, definir la clase **SolicitudCreditoDeConsumo**, como subclase de la clase **SolicitudCredito**, y dentro de ella, definir el atributo privado `__terminaciones`:

{% include codeHeader.html icon="python" %}
```py
class SolicitudCreditoDeConsumo(SolicitudCredito):

	__terminaciones = (".cl", ".com")
```
{: .nolineno }

Definir e implementar el método **validar_monto**, siguiendo las reglas entregadas en el enunciado:

{% include codeHeader.html icon="python" %}
```python
def validar_monto(self, monto: int):

	if monto < 1000000:
		monto = 1000000
	elif monto > 5000000:
		monto = 5000000
```
{: .nolineno }

Definir e implementar el método **validar_correo**, siguiendo las reglas entregadas en el enunciado:

{% include codeHeader.html icon="python" %}
```python
	def validar_correo(self, correo: str):

		return (correo correo.count("@") == 1 and correo.endswith(SolicitudCredito.__terminaciones) else "")
```
{: .nolineno }

Al comienzo de la clase **SolicitudCreditoDeConsumo**, definir el constructor de la clase, el cual recibe por parámetro el monto y el correo, los que se deben asignar a los atributos de instancia, haciendo uso de los métodos de validación. Los atributos de la instancia se definen como privados:

{% include codeHeader.html icon="python" %}
```py
	def __init__(self, monto: int, correo: str):
		self.__monto = self.validar_monto(monto)
		self.__correo = self.validar_correo(correo)
```
{: .nolineno }

Agregar las propiedades con *getter* y *setter* para **monto** y **correo**. En los setter, se debe llamar a los métodos de validación para asignar el valor al atributo:

{% include codeHeader.html icon="python" %}
```py
	@property
	def monto(self):
		return self.__monto

	@monto.setter
	def monto(self, monto: int):
		self.__monto = self.validar_monto(monto)

	@property
	def correo(self):
		return self.__correo

	@correo.setter
	def correo(self, correo: str):
		self.__correo = self.validar_correo(correo)
```
{: .nolineno }

A continuación de la clase **SolicitudCreditoDeConsumo**, definir la clase **SolicitudCrediroComercial**, siguiendo los mismos pasos que para la clase anterior **SolicitudCreditoConsumo**, pero aplicando en las implementaciones de los métodos la lógica correspondiente a este caso, según el enunciado:

{% include codeHeader.html icon="python" %}
```py
class SolicitudCreditoComercial(SolicitudCredito):

	__proibidos = ("gmail", "outlook", "hotmail")
	__terminaciones = (".cl", ".com", ".org")

	def __init__(self, monto: int, correo: str):
		self.__monto = monto
		self.__correo = correo

	@property
	def monto(self):
		return self.__monto
	
	@monto.setter
	def monto(self, monto:int):
		self.__monto = monto

	@property
	def correo(self):
		return self.__correo

	@correo.setter
	def correo(self, correo:str):
		self.__correo = correo


	def validar_monto(self, monto:int):
		if monto < 1000000:
			monto = 1000000
		elif monto > 5000000:
			monto = 5000000
		return monto

	def validar_correo(self, correo:str):
		return (correo if not any(p in correo.lower() for p in SolicitudCreditoComercial.__prohibidos) and correo.count("@") == 1 and correo.endswith(SolicitudCreditoComercial.__terminaciones))

class SolicitudCreditoHipotecario(SolicitudCredito):

	__terminaciones = (".cl", ".com")

	def __init__(self, monto:int, correo:str):
		self.__monto = monto
		self.__correo = correo

	@property
	def monto(self):
		return self.__monto
	
	@monto.setter
	def monto(self, monto:int):
		self.__monto = monto

	@property
	def correo(self):
		return self.__correo
	
	@correo.setter
	def correo(self, correo:str):
		self.__correo = correo

	def validar_monto(self, monto:int):
		if monto < 20000000:
			monto = 20000000
		elif monto > 100000000:
			monto = 100000000
		return monto

	def validar_correo(self, correo:str):
		return (correo if correo.count("@") == 1 and correo.endswith(SolicitudCreditoHipotecario.__terminaciones) else "")
```
{: .nolineno }

En un archivo `programa.py`, importar la clase **SolicitudCreditoDeConsumo**, **SolicitudCreditoComercial** y **SolicitudCreditoHipotecario** desde `solicitud_credito.py`:

{% include codeHeader.html icon="python" %}
```python
from solicitud_credito import
SolicitudCreditoDeConsumo,
SolicitudCreditoComercial,
SolicitudCreditoHipotecario
```
{: .nolineno }

A continuación, solicitar al usuario los datos requeridos, y almacenar en variables:

{% include codeHeader.html icon="python" %}
```py
print("¡Gracias por solicitar un crédito en nuestro Banco!")

tipo = int(input("\nIngrese el Tipo de Crédito a solicitar:\n1. Crédito de consumo\n2. Crédito comercial\n3. Crédito hipotecario\n"))

monto = int(input("\nIngrese el monto que desea solicitar:\n"))
correo = input("\nIngrese su correo de contacto:\n")
```
{: .nolineno }

A continuación del código anterior, crear la instancia correspondiente, según el tipo de crédito ingresado:

{% include codeHeader.html icon="python" %}
```py
credito = None

if tipo == 1:
	credito = SolicitudCreditoConsumo(monto, correo)
elif tipo == 2:
	credito = SolicitudCreditoComercial(monto, correo)
elif tipo == 3:
	credito = SolicitudCreditoHipotecario(monto, correo)
```
{: .nolineno }

Ejemplo de ejecución:

{: .shadow .p-2 style="background: #000"}
```txt
¡Gracias por solicitar un crédito con nuestro Banco!
Ingrese el Tipo de Crédito a solicitar:
1. Crédito de consumo
2. Crédito Comercial
3. Crédito Hipotecario
3
Ingrese el monto que desea solicitar:
50000000
Ingrese su correo de contacto:
miau@gmail.com
```
