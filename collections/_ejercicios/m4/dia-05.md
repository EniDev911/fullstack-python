---
layout: post
title: Abstracción y Encapsulamiento
subtitle: Ejercicios Guiados - Día 5
modulo: m4
type: ejercicio
show: true
show_next: true
---

### Solicitudes de Crédito

Desde una institución bancaria, te han solicitado realizar un prototipo de programa que permita a un usuario ingresar una solicitud de crédito. En esta primera etapa, solo se quiere crear las solicitudes de los distintos tipos de crédito, sin considerar las características del usuario solicitante.

El prototipo debe consistir en una aplicación de consola en Python, la cual al ser ejecutada debe solicitar al usuario ingresar la siguiente información mediante línea de comandos:

- El tipo de crédito: las opciones son **crédito de consumo**, **crédito comercial** y **crédito hipotecario**.
- Monto del crédito.
- Correo de contacto del usuario solicitante.


Con los datos ingresados, se debe crear una instancia de solicitud de crédito adecuada. Para ello, se debe considerar la siguiente información entregada por la entidad bancaria:

- Los créditos de consumo y los créditos comerciales solo pueden tener montos entre 1.000.000 y 5.000.000 inclusive. Los créditos hipotecarios solo pueden tener montos entre 20.000.000 y 100.000.000.
- Si se solicita un crédito fuera del rango permitido, se debe forzar el monto solicitado al valor posible más cercano. Si se solicita un crédito de consumo 400.000, se forzará esta cantidad a ser 1.000.000.
- Los correos de contacto para las solicitudes de créditos de consumo e hipotecarios solo pueden tener terminaciones "**.cl**" o "**.com**". Para el caso de las solicitudes de créditos comerciales, también pueden terminar en "**.org**", pero no pueden contener los textos "**gmail**", "**outlook**" ni "**hotmail**". En todo los casos, los correos deben tener 1 símbolo arroba (`@`).
- Si se ingresa un correo no válido para el tipo de crédito solicitado, se debe forzar a ser un texto vacío.


**Paso 1**.

En un archivo `solicitud_credito.py`, importar `ABC` y `abstractmethod` desde `abc`, y definir la clase `SolicitudCredito`:

{% include codeHeader.html file="solicitud_credito.py" %}
```py
from abc import ABC, abstractmethod

class SolicitudCredito(ABC):
```
{: .nolineno }

**Paso 2**.

Dentro de la clase `Solicitudcredito`, definir el método abstracto `validar_monto`, el cual recibe el parámetro `monto` además de la instancia:

{% include codeHeader.html file="solicitud_credito.py" %}
```py
	@abstractmethod
	def validar_monto(self, monto: str):
		pass
```
{: .nolineno }

**Paso 3**.

También dentro de la clase `SolicitudCredito`, definir el método abstracto `validar_correo`, el cual recibe el parámetro `correo` además de la instancia:

{% include codeHeader.html file="solicitud_credito.py" %}
```py
	@abstractmethod
	def validar_correo(self, correo: str):
		pass
```
{: .nolineno }

**Paso 4**.

En el mismo archivo `solicitud_credito.py`, a continuación de la clase `SolicitudCredito`, definir la clase `SolicitudCreditoDeConsumo`, como subclase de la clase `SolicitudCredito`, y dentro de ella, definir el atributo de clase privado `__terminaciones`:

{% include codeHeader.html file="solicitud_credito.py" %}
```py
class SolicitudCreditoDeConsumo(SolicitudCredito):
	__terminaciones = (".cl", ".com")
```
{: .nolineno }

**Paso 5**.

Definir e implementar el método `validar_monto`, siguiendo las reglas entregadas en la descripción:

{% include codeHeader.html file="solicitud_credito.py" %}
```py
	def validar_monto(self, monto: int):
		if monto < 1000000:
			monto = 1000000
		elif monto > 5000000:
			monto = 5000000
		return monto
```
{: .nolineno }

**Paso 6**.

Definir e implementar el método `validar_correo`, siguiendo las reglas entregadas en la descripción:

{% include codeHeader.html file="solicitud_credito.py" %}
```py
	def validar_correo(self, correo: str):
		return (correo correo.count("@") == 1
			and correo.endswith(SolicitudCreditoDeConsumo.__terminaciones)
			else "")
```
{: .nolineno }

**Paso 7**.

Al comienzo de la clase `SolicitudCreditoDeConsumo`, definir el constructor de la clase, el cual recibe por parámetro el monto y el correo, los que se deben asignar a los atributos de la instancia, haciendo uso de los métodos de validación. Los atributos de la instancia se definen como privados:

{% include codeHeader.html file="solicitud_credito.py" %}
```py
	def __init__(self, monto: int, correo: str):
		self.__monto = self.validar_monto(monto)
		self.__correo = self.validar_correo(correo)
```
{: .nolineno }

**Paso 8**.

Agregar las propiedades con `getter` y `setter` para `monto` y `correo`. En los `setter`, se debe llamar a los métodos de validación para asignar el valor al atributo:

{% include codeHeader.html file="solicitud_credito.py" %}
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

**Paso 9**.

A continuación de la clase `SolicitudCreditoDeConsumo`, definir la clase `SolicitudCreditoComercial`, siguiendo los mismos pasos que para la clase `SolicitudCreditoDeConsumo`, pero aplicando en las implementaciones de los métodos la lógica correspondiente a este caso, según la descripción:

{% include codeHeader.html file="solicitud_credito.py" %}
```py
class SolicitudCreditoComercial(SolicitudCredito):
	__prohibidos = ("gmail", "outlook", "hotmail")
	__terminaciones = (".cl", ".com", ".org")

	def __init__(self, monto: int, correo: str):
		self.__monto = self.validar_monto(monto)
		self.__correo = self.validar_correo(correo)

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
		self.__correo = correo

	def validar_monto(self, monto: int):
		if monto < 1000000:
			monto = 1000000
		elif monto > 5000000:
			monto 5000000
		return monto

	def validar_correo(self, correo: str):
		return correo (if not any(p in correo.lower() for p in SolicitudCreditoComercial.__prohibidos)
			and correo.count("@") == 1
			and correo.endswith(SolicitudCreditoComercial.__terminaciones)
			else "")
```
{: .nolineno }

**Paso 10**.

Finalmente, a continuación de la clase `SolicitudCreditoComercial`, definir la clase `SolicitudCreditoHipotecario`, según corresponde para su caso.

{% include codeHeader.html file="solicitud_credito.py" %}
```py
class SolicitudCreditoHipotecario(SolicitudCredito):
	__terminaciones = (".cl", ".com")

	def __init__(self, monto: int, correo: str):
		self.__monto = self.validar_monto(monto)
		self.__correo = self.validar_correo(correo)

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

	def validar_monto(self, monto: int):
		if monto < 20000000:
			monto = 20000000
		elif monto > 100000000:
			monto = 100000000
		return monto

	def validar_correo(self, correo: str):
		return (correo if correo.count("@") == 1
			and correo.endswith(SolicitudCreditoHipotecario.__terminaciones)
			else "")
```
{: .nolineno }

**Paso 11**.

En un archivo `programa.py`, importar las clases `SolicitudCreditoDeConsumo`, `SolicitudCreditoComercial` y `SolicitudCreditoHipitecario` desde `solicitud_credito.py`:

{% include codeHeader.html file="programa.py" %}
```py
from credito import 
	SolicitudCreditoDeConsumo,
	SolicitudCreditoComercial, 
	SolicitudCreditoHipotecario
```
{: .nolineno }

**Paso 12**.

A continuación, solicitar al usuario los datos requeridos, y almacenar en variables:

{% include codeHeader.html file="programa.py" %}
```py
print("¡Gracias por solicitar un crédito con nuestro Banco!")

tipo = int(input("\nIngrese el Tipo de Crédito a solicitar:\n"
"1. Crédito de Consumo\n"
"2. Crédito de Comercial\n"
"3. Crédito de Hipotecario\n"))

monto = int(input("\nIngrese el monto que desea solicitar :\n"))
correo = input("\nIngrese su correo de contacto:\n")
```
{: .nolineno }

**Paso 13**.

A continuación del código anterior, crear la instancia correspondiente, según el tipo de crédito ingresado:

{% include codeHeader.html file="programa.py" %}
```py
credito = None

if tipo == 1:
	credito = SolicitudCreditoDeConsumo(monto, correo)
elif tipo == 2:
	credito = SolicitudCreditoComercial(monto, correo)
elif tipo == 3:
	credito = SolicitudCreditoHipotecario(monto, correo)
```
{: .nolineno }