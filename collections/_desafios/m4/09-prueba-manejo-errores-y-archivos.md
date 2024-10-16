---
layout: post
title: "Manejo de errores y archivos"
subtitle: "M4 - Prueba"
show: true
show_next: true
type: evaluado
modulo: m4
github:
  name: enidev911/m4-prueba-manejo-de-errores-y-archivos
---

## Descripción

Usted trabaja para una empresa de marketing digital que se dedica a implementar campañas publicitarias en distintas plataformas de anuncios digitales. Para ello, tiene una plataforma web para sus clientes, donde ellos ingresan los datos necesarios para la campaña que desean que sea implementada. Actualmente, esta plataforma funciona como una aplicación web MVC, construida en el lenguaje PHP.

Para el año en curso, se le ha solicitado al equipo de desarrollo que construya una API que implemente la lógica **BackEnd** de su plataforma actual, de forma que ésta pueda ser consumida tanto por un **FrontEnd** web de escritorio, como por su aplicación móvil así también por los clientes que quieran hacer uso de ella en sus propias aplicaciones. Este desarrollo se realizará de forma incremental, con entregas parciales cada dos semanas.

El equipo de desarrollo ha decidido crear una API utilizando Python, aunque aún se está evaluando qué framework se aplicará. Para la primera etapa, se le ha asignado como primera tarea **crear la arquitectura de clases básica que permite instancias una campaña**, conteniendo como posibles tipos de anuncios los más solicitados por los clientes. Para ello, **se le ha facilitado el diagrama de clases que permite codificar lo solicitado**.

Además de la información entregada por el diagrama de clases, debe considerar las siguientes reglas de negocio para implementar las operaciones y los encapsulamientos descritos en él:

### Sobre la clase Anuncio

- Al crear, o al querer modificar el `alto` o el `ancho` de un anuncio ya creado, debe consultar si el valor que se quiere asignar es **mayor a cero**. De ser así, se asigna el valor ingresado. De no ser así, se asigna 1.
- Para esta etapa no se le solicita implementar las reglas de los atributos `url_archivo` ni `url_clic`, pero sí debe definir sus `getter` y `setter` con la lógica básica de asignación de un nuevo valor al atributo correspondiente.
- Al querer modificar el `sub_tipo` de algún anuncio ya creado, se debe validar que se esté ingresando un subtipo dentro de los permitidos en el tipo de instancia actual. Los subtipos permitidos para las instancias de cada clase corresponden a los elementos de la tupla definida en el atributo de clase `SUB_TIPOS` respectivo. En caso de no cumplirse esta condición al momento de querer cambiar el valor del atributo `sub_tipo`, de debe lanzar una excepción `SubTipoInvalidoException`.
- El método `mostrar_formatos` es un método estático que muestra en pantalla los formatos y sus subtipos asociados disponibles para crear anuncios. Ejemplo:<br>
	FORMATO 1:<br>
	========<br>
	\- Subtipo 1<br>
	\- Subtipo 2<br><br>Para ello debe referenciar los atributos de clase respectivo que contienen la información requerida (relación de colaboración señalada en el diagrama).

### Sobre la clase Video

- Cada instancia de `Video` creada solo puede tener `ancho` igual a 1 y `alto` igual a 1. Estos valores no se pueden modificar.
- Al crear, o al querer modificar el atributo `duracion` de una instancia de `Video` ya creada, debe consultar si el valor que se quiere asignar es **mayor a cero**. De ser así, se asigna el valor ingresado. De no ser así, se asigna 5.
- El método `comprimir_anuncio` implementado debe mostrar por pantalla el mensaje: `"COMPRESIÓN DE VIDEO NO IMPLEMENTADA AÚN"`.
- El método `redimensionar_anuncio` implementado debe mostrar por pantalla el mensaje: `"RECORTE DE VIDEO NO IMPLEMENTADO AÚN"`.

### Sobre la clase Display

- El método `comprimir_anuncio` implementado debe mostrar por pantalla el mensaje: `"COMPRESIÓN DE ANUNCIOS DISPLAY NO IMPLEMENTADA AÚN"`.
- El método `redimensionar_anuncio` implementado debe mostrar por pantalla el mensaje: `"REDIMENSIONAMIENTO DE ANUNCIOS DISPLAY NO IMPLEMENTADO AÚN"`.

### Sobre la clase Social

- El método `comprimir_anuncio` implementado debe mostrar por pantalla el mensaje: `"COMPRESIÓN DE ANUNCIOS DE REDES SOCIALES NO IMPLEMENTADA AÚN"`.
- El método `redimensionar_anuncio` implementado debe mostrar por pantalla el mensaje: `"REDIMENSIONAMIENTO DE ANUNCIOS DE REDES SOCIALES NO
IMPLEMENTADO AÚN"`.


### Sobre la clase Campania

- Se debe incluir en el constructor de la clase `Campania` los parámetros y la lógica necesaria para instanciar **dentro de él** los anuncios a incorporar en el atributo que almacena **el listado de anuncios**. Como sugerencia, puede usar el constructor un parámetro que sea una estructura de datos que contenga la información necesaria para crear cada instancia de `Anuncio` (por ejemplo, una tupla con diccionarios). Opcionalmente, puede refactorizar esta lógica específica en un método privado.
- Al querer modificar el nombre de una campaña ya creada, se debe validar que el nuevo nombre no supere los **250 caracteres**. De ser así, se debe lanzar una excepción `LargoExcedidoException`.
- Para esta etapa no se solicita implementar las reglas de los atributos `fecha_inicio`

---

## Desarrollo

### Requerimiento 1

- En un archivo llamado `campania.py`, definir la clase que permita crear instancias de tipo **Campania**.
- En otro archivo `anuncio.py`, definir la clase `Anuncio` y las clases que permitan crear instancias de tipo **Video**, **Display** y **Social**, cada una de ellas con sus **atributos de clase** y valores correspondientes respectivos.


Comenzamos creando el archivo `campania.py` y el archivo `anuncio.py`:

{% include newfile.html file="campania.py" %}
{% include newfile.html file="anuncio.py" %}

En el archivo `campania.py`, definimos la clase **Campania**:

{% include codeHeader.html file="campania.py" %}
```py
class Campania():
    def __init__(self, anuncios=()):
        self.anuncios = anuncios

    def __str__(self):
        return f"""
        Nombre de la campaña
        """
```
{: .nolineno }

Y en el archivo `anuncio.py`, definimos la clase **Anuncio** y las clases **Video**, **Display** y **Social** con todo lo requerido:

{% include codeHeader.html file="anuncio.py" %}
```py
from error import SubTipoInvalidoError


class Anuncio:
    FORMATO = ""
    SUB_TIPOS = ()

    @staticmethod
    def validar_dimension(dimension):
        return dimension if dimension > 0 else 1

    @staticmethod
    def mostrar_formatos(formato: str, subtipos: tuple):
        print("{}:".format(formato))
        print("=======")
        for subtipo in subtipos:
            print("-", subtipo)

    def __init__(self, alto, ancho, url_archivo, url_clic, subtipo):
        self.__alto = self.validar_dimension(alto)
        self.__ancho = self.validar_dimension(ancho)
        self.__url_archivo = url_archivo
        self.__url_clic = url_clic
        if subtipo in self.SUB_TIPOS:
            self.__sub_tipo = subtipo
        else:
            raise SubTipoInvalidoError(self.SUB_TIPOS)

    @property
    def alto(self):
        return self.__alto

    @alto.setter
    def alto(self, dimension: int):
        self.__alto = self.validar_dimension(dimension)

    @property
    def ancho(self):
        return self.__ancho

    @ancho.setter
    def ancho(self, dimension):
        self.__ancho = self.validar_dimension(dimension)

    @property
    def sub_tipo(self):
        return self.__sub_tipo

    @sub_tipo.setter
    def sub_tipo(self, subtipo):
        if subtipo in self.SUB_TIPOS:
            self.__sub_tipo = subtipo
        else:
            print("Excepcion")

    @property
    def url_archivo(self) -> str:
        return self.__url_archivo

    @url_archivo.setter
    def url_archivo(self, url_archivo):
        self.__url_archivo = url_archivo

    @property
    def url_clic(self) -> str:
        return self.__url_clic

    @url_clic.setter
    def url_archivo(self, url_clic):
        self.__url_clic = url_clic

    def comprimir_anuncio(self):
        pass

    def redimensionar_anuncio(self):
        pass

class Video(Anuncio):
    FORMATO = "Video"
    SUB_TIPOS = ("instream", "outstream")

    @staticmethod
    def validar_duracion(duracion):
        return duracion if duracion > 0 else 5

    def __init__(self, url_archivo, url_clic, subtipo, duracion):
        super().__init__(1, 1, url_archivo, url_clic, subtipo)
        self.__duracion = Video.validar_duracion(duracion)

    @property
    def duracion(self):
        return self.__duracion

    # Setters
    @duracion.setter
    def duracion(self, duracion):
        self.__duracion = Video.validar_duracion(duracion)

    def comprimir_anuncio(self):
        print("COMPRESIÓN DE VIDEO NO IMPLEMENTADA AÚN")

    def redimensionar_anuncio(self):
        print("RECORTE DE VIDEO NO IMPLEMENTADO AÚN")

class Display(Anuncio):
    FORMATO = "Display"
    SUB_TIPOS = ("tradicional", "nativa")

    def comprimir_anuncio(self):
        print("COMPRESIÓN DE ANUNCIOS DISPLAY NO IMPLEMENTADA AÚN")

    def redimensionar_anuncio(self):
        print("REDIMENSIONAMIENTO DE ANUNCIOS DISPLAY NO IMPLEMENTADO AÚN")

class Social(Anuncio):
    FORMATO = "Social"
    SUB_TIPOS = ("facebook", "linkedin")

    def comprimir_anuncio(self):
        print("COMPRESIÓN DE ANUNCIOS DE REDES SOCIALES NO IMPLEMENTADA AÚ")

    def redimensionar_anuncio(self):
        print("REDIMENSIONAMIENTO DE ANUNCIOS DE REDES SOCIALES NO IMPLEMENTADO AÚN")
```
{: .nolineno }

### Requerimiento 2

- Sobrecargar la función especial `__init__()` en las clases requeridas, **considerando toda la información entregada** en la descripción y el diagrama de clases, de forma de poder asignar los valores recibidos por parámetro (si corresponde) en los atributos de instancia correspondientes.
- Sobrecargar además la función especial `__str__` en la clase **Campania**, considerando lo solicitado en la descripción.

### Requerimiento 3

- Aplicar **herencia** en las clases correspondientes, incluyendo llamado a clase padre en constructor (en caso que haya sido necesario sobrescribir el constructor heredado).
- Definir **métodos abstractos** correspondientes en la clase indicada, e implementar sus sobreescrituras correspondientes en las clases indicadas en el diagrama de clases (según información entregada en la descripción).
- Definir **propiedades** con `getter` y `setter` para los atributos de instancia privados indicados en el diagrama de clases, implementando además las reglas solicitadas en la descripción.


---

## Repositorio

{% include repository.html repo=page.github %}

