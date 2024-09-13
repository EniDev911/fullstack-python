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

Sobre las **alternativas**:

- Una alternativa tiene:
	- Un contenido (texto)
	- Una ayuda (texto, opcional)<br>Ambos se pueden consultar y modificar libremente.
- Una alternativa solo puede existir como parte de una pregunta.
- Debe haber un mecanismo para **mostrar una alternativa**, donde se muestra su contenido y ayuda, si es que la posee.

Sobre las **preguntas**:

- Una pregunta tiene:
	- Un **enunciado** (texto)
	- Una **ayuda** (texto, opcional)
	- Una **indicación de si es requerida** (puede ser requerida o no serlo)
	- Y una **lista de alternativas**

- Todas estas características se pueden consultar y modificar libremente, excepto las alternativas (aún no se establecen las reglas para modificar las alternativas, pero por el momento considera que solo se pueden consultar).
- Una pregunta solo puede existir como parte de una encuesta.
- Debe haber un mecanismo para mostrar una pregunta donde se muestra su enunciado, ayuda (si es que la posee), y sus alternativas (cada una con su ayudan si la posee).

Sobre las **encuestas**:

- Una encuesta tiene un:
	- **Nombre** (texto)
	- Un **listado de preguntas**
	- Y un **listado de listados de respuestas** (inicialmente vacío, al crease la encuesta).
- Solo el nombre puede consultarse y modificarse libremente.
- Debe contar con un mecanismo que permita mostrar la encuesta, donde se muestra tanto el nombre de la encuesta como sus preguntas (por cada pregunta, se muestra además su posible ayuda, y sus alternativas con su posible ayuda).
- Debe contar con un mecanismo para agregar un listado de respuestas a su lista de listados de respuestas (aún no se estaboecen las reglas específicas).
- Existen además dos tipos específicos de encuestas:
	- **Encuestas limitadas por edad**: Además de la información contenida en cualquier encuesta, contienen una **edad mínima** (número entero). Considera que estas edades requieren de reglas para modificar sus valores. En estas encuestas, el mecanismo para agregar un listado de respuestas a la lista de respuestas