---
layout: post
title: "Diagrama de clases"
subtitle: "M4 - Día 9 Desafío Evaluado"
show: true
show_next: true
type: evaluado
modulo: m4
---

## Descripción

Te encuentras trabajando en una consultora, a la cual se le ha encargado desarrollar un software que permita crear y contestar encuestas. A ti te han solicitado diagramar, y programar en base a ello, las relaciones existentes entre usuarios, encuestas, preguntas, alternativas y respuestas. Para ello, debes considerar lo siguiente.

### Sobre las alternativas

- Una alternativa tiene:
	- Un contenido (texto)
	- Una ayuda (texto, opcional)<br>Ambos se pueden consultar y modificar libremente.
- Una alternativa solo puede existir como parte de una pregunta.
- Debe haber un mecanismo para **mostrar una alternativa**, donde se muestra su contenido y ayuda, si es que la posee.

### Sobre las preguntas

- Una pregunta tiene:
	- Un **enunciado** (texto)
	- Una **ayuda** (texto, opcional)
	- Una **indicación de si es requerida** (puede ser requerida o no serlo)
	- Y una **lista de alternativas**

- Todas estas características se pueden consultar y modificar libremente, excepto las alternativas (aún no se establecen las reglas para modificar las alternativas, pero por el momento considera que solo se pueden consultar).
- Una pregunta solo puede existir como parte de una encuesta.
- Debe haber un mecanismo para mostrar una pregunta donde se muestra su enunciado, ayuda (si es que la posee), y sus alternativas (cada una con su ayudan si la posee).

### Sobre las encuestas

- Una encuesta tiene un:
	- **Nombre** (texto)
	- Un **listado de preguntas**
	- Y un **listado de listados de respuestas** (inicialmente vacío, al crease la encuesta).
- Solo el nombre puede consultarse y modificarse libremente.
- Debe contar con un mecanismo que permita mostrar la encuesta, donde se muestra tanto el nombre de la encuesta como sus preguntas (por cada pregunta, se muestra además su posible ayuda, y sus alternativas con su posible ayuda).
- Debe contar con un mecanismo para agregar un listado de respuestas a su lista de listados de respuestas (aún no se establecen las reglas específicas).
- Existen además dos tipos específicos de encuestas:
	- **Encuestas limitadas por edad**: Además de la información contenida en cualquier encuesta, contienen una **edad mínima** (número entero).<br>Considera que estas edades requieren de reglas para modificar sus valores. En estas encuestas, el mecanismo para agregar un listado de respuestas a la lista de respuestas debe considerar que el usuario asociado al listado de respuestas tenga una edad entre la edad mínima y la edad máxima de la encuesta.
	- **Encuestas limitadas por región**: Además de la información contenida en cualquier encuesta, contienen una **lista de regiones** (lista de números enteros).<br>Considera que el listado de regiones requiere de reglas para modificar sus valores. En estas encuestas, el mecanismo para agregar un listado de respuestas a la lista de respuestas debe considerar que el usuario asociado al listado de respuestas tenga una región que se encuentre dentro del listado de regiones de la encuesta.

### Sobre el listado de respuestas

- Un listado de respuestas está asociado a un **usuario** que lo generó.
- Un listado de respuestas tiene **una lista de respuestas** (lista con números enteros).
- Tanto el usuario como las respuestas no se pueden modificar libremente, pero aún no se han establecido las reglas para ello. Por ahora considere solamente se puede leer esta información.
- Un listado de respuestas sólo puede existir como parte de una encuesta.

### Sobre los usuarios

- Un usuario tiene un correo (texto), edad (número entero) y región (número entero).<br>Todos estos datos requieren de reglas para ser modificados, pero aún no se han establecido. Por ahora considera que se pueden leer y modificar, sin agregar condiciones especiales, pero mediante mecanismos específicos.
- Debes contar con un mecanismo para contestar una encuesta, para lo cual hace uso de una encuesta y de su mecanismo para agregar un listado de respuestas a su lista de listados de respuestas.

---

## Requerimiento 1

Entregar un archivo `.png` o `.pdf` con el diagrama de clases que permita representar lo descrito en el contexto del problema.

Considerar incluir:

- Clases involucradas
- Atributos (especificando toda la información pertinente)
- Operaciones
- Relaciones entre clases



