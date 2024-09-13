---
layout: post
title: "Manejo de errores y archivos"
subtitle: "M4 - Prueba"
show: true
show_next: true
type: evaluado
modulo: m4
---

## Descripción

Usted trabaja para una empresa de marketing digital que se dedica a implementar campañas publicitarias en distintas plataformas de anuncios digitales. Para ello, tiene una plataforma web para sus clientes, donde ellos ingresan los datos necesarios para la campaña que desean que sea implementada. Actualmente, esta plataforma funciona como una aplicación web MVC, construida en el lenguaje PHP.

Para el año en curso, se le ha solicitado al equipo de desarrollo que construya una API que implemente la lógica **BackEnd** de su plataforma actual, de forma que ésta pueda ser consumida tanto por un **FrontEnd** web de escritorio, como por su aplicación móvil así también por los clientes que quieran hacer uso de ella en sus propias aplicaciones. Este desarrollo se realizará de forma incremental, con entregas parciales cada dos semanas.

El equipo de desarrollo ha decidido crear una API utilizando Python, aunque aún se está evaluando qué framework se aplicará. Para la primera etapa, se le ha asignado como primera tarea **crear la arquitectura de clases básica que permite instancias una campaña**, conteniendo como posibles tipos de anuncios los más solicitados por los clientes. Para ello, **se le ha facilitado el diagrama de clases que permite codificar lo solicitado**.

Además de la información entregada por el diagrama de clases, debe considerar las siguientes reglas de negocio para implementar las operaciones y los encapsulamientos descritos en él:

**De la clase Anuncio:**

- Al crear, o al querer modificar el `alto` o el `ancho` de un anuncio ya creado, debe consultar si el valor que se quiere asignar es **mayor a cero**. De ser así, se asigna el valor ingresado. De no ser así, se asigna 1.
- Para esta etapa no se le solicita implementar las reglas de los atributos `url_archivo` ni `url_clic`, pero sí debe definir sus `getter` y `setter` con la lógica básica de asignación de un nuevo valor al atributo correspondiente.
- Al querer modificar el `sub_tipo` de algún anuncio ya creado, se debe validar que se esté ingresando un subtipo dentro de los permitidos en el tipo de instancia actual. Los subtipos permitidos para las instancias de cada clase corresponden a los elementos de la tupla definida en el atributo de clase `SUB_TIPOS` respectivo. En caso de no cumplirse esta condición al momento de querer cambiar el valor del atributo `sub_tipo`, de debe lanzar una excepción `SubTipoInvalidoException`.
- El método `mostrar_formatos` es un método estático que muestra en pantalla los formatos y sus subtipos asociados disponibles para crear anuncios. Ejemplo:<br>
	FORMATO 1:<br>
	========<br>
	\- Subtipo 1<br>
	\- Subtipo 2<br><br>Para ello debe referenciar los atributos de clase respectivo que contienen la información requerida (relación de colaboración señalada en el diagrama).

**De la clase Video**:

- Cada instancia de `Video` creada solo puede tener `ancho` igual a 1 y `alto` igual a 1. Estos valores no se pueden modificar.
- Al crear, o al querer modificar el atributo `duracion` de una instancia de `Video` ya creada, debe consultar si el valor que se quiere asignar es **mayor a cero**. De ser así, se asigna el valor ingresado. De no ser así, se asigna 5.
- El método `comprimir_anuncio` implementado debe mostrar por pantalla el mensaje: `"COMPRESIÓN DE VIDEO NO IMPLEMENTADA AÚN"`.
- El método `redimensionar_anuncio` implementado debe mostrar por pantalla el mensaje: `"RECORTE DE VIDEO NO IMPLEMENTADO AÚN"`.

**De la clase Display**:

- El método `comprimir_anuncio` implementado debe mostrar por pantalla el mensaje: `"COMPRESIÓN DE ANUNCIOS DISPLAY NO IMPLEMENTADA AÚN"`.
- El método `redimensionar_anuncio` implementado debe mostrar por pantalla el mensaje: `"REDIMENSIONAMIENTO DE ANUNCIOS DISPLAY NO IMPLEMENTADO AÚN"`.

**De la clase Social**:

- El método `comprimir_anuncio` implementado debe mostrar por pantalla el mensaje: `"COMPRESIÓN DE ANUNCIOS DE REDES SOCIALES NO IMPLEMENTADA AÚN"`.
- El método `redimensionar_anuncio` implementado debe mostrar por pantalla el mensaje: `"REDIMENSIONAMIENTO DE ANUNCIOS DE REDES SOCIALES NO
IMPLEMENTADO AÚN"`.


**De la clase Campaña**:

- Se debe incluir en el constructor de la clase `Campaña` los parámetros y la lógica necesaria para instanciar **dentro de él** los anuncios a incorporar en el atributo que almacena **el listado de anuncios**. Como sugerencia, puede usar el constructor un parámetro que sea una estructura de datos que contenga la información necesaria para crear cada instancia de `Anuncio` (por ejemplo, una tupla con diccionarios). Opcionalmente, puede refactorizar esta lógica específica en un método privado.
- Al querer modificar el nombre de una campaña ya creada, se debe validar que el nuevo nombre no supere los **250 caracteres**. De ser así, se debe lanzar una excepción `LargoExcedidoException`.
- Para esta etapa no se solicita implementar las reglas de los atributos `fecha_inicio`

---

## Desarrollo

