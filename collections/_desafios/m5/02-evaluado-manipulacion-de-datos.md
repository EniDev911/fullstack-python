---
layout: post
title: "Manipulación de datos"
subtitle: "M5 - Desafío Evaluado"
show: true
type: evaluado
modulo: m5
img_path: /assets/img/desafios/m5-evaluado-manipulacion-de-datos/
show_next: true
# permalink: /:collection/:path
---


#### Crear La base de datos

Para este desafío se debe crear una base de datos llamada con el siguiente patrón; `"desafio2-tuNombre-tuApellido-3digitos"`:

{% include codeHeader.html icon="sql" %}
```sql
CREATE DATABASE "desafio2-marco-contreras-911";
```
{: .nolineno }

#### Nos conectamos a la base de datos

{% include codeHeader.html icon="terminal" %}
```plaintext
\c "desafio2-marco-contreras-911"
```
{: .nolineno }

#### Datos

Utilizar el siguiente set de datos:

{% include codeHeader.html icon="sql" %}
```sql
CREATE TABLE IF NOT EXISTS inscritos(cantidad INT, fecha DATE, fuente VARCHAR);
INSERT INTO inscritos(cantidad, fecha, fuente) VALUES
(44, '01/01/2021', 'Blog'),
(56, '01/01/2021', 'Página'),
(39, '01/02/2021', 'Blog'),
(81, '01/02/2021', 'Página'),
(12, '01/03/2021', 'Blog'),
(91, '01/03/2021', 'Página'),
(48, '01/04/2021', 'Blog' ),
(45, '01/04/2021', 'Página'),
(55, '01/05/2021', 'Blog'),
(33, '01/05/2021', 'Página'),
(18, '01/06/2021', 'Blog'),
(12, '01/06/2021', 'Página'),
(34, '01/07/2021', 'Blog'),
(24, '01/07/2021', 'Página'),
(83, '01/08/2021', 'Blog'),
(99, '01/08/2021', 'Página');
```
{: .nolineno }

#### Insertando los datos

![img - 01]({{ page.img_path | relative_url | append: '01.png' }}){: .card }


#### ¿Cuántos registros hay?

![img - 02]({{ page.img_path | relative_url | append: '02.png' }}){: .card }

---

#### ¿Cuántos inscritos hay en total?

![img - 03]({{ page.img_path | relative_url | append: '03.png' }}){: .card }

---

#### ¿Cuál o cuáles son los registros de mayor antigüedad?

![img - 04]({{ page.img_path | relative_url | append: '04.png' }}){: .card }

---

#### ¿Cuántos inscritos hay por día?

> **Ojo**: entendiendo un día como una fecha distinta de ahora en adelante

![img - 05]({{ page.img_path | relative_url | append: '05.png' }}){: .card }

---

#### ¿Qué día se inscribieron la mayor cantidad de personas y cuántas personas se inscribieron en ese día?

![img - 06]({{ page.img_path | relative_url | append: '06.png' }}){: .card }