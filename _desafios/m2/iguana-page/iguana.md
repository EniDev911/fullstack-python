---
layout: post
title: Desafío Iguana
modulo: m2
challenge: 2
type: evaluado
---

## Estructura del proyecto

```bash
📂 root
├── 📂 assets
│   ├── 📂 css # 👈 para las hojas de estilos
│   ├── 📂 img # 👈 para las imágenes
│   └── 📂 favicon # 👈 para los favicon
└── iguana.html # página principal
```
{: .nolineno }

---

## Implementación de Iconos de Font Awesome

Debemos añadir la librería, lo podemos hacer a través **CDN**:

{% include codeHeader.html %}
```html
<script src="https://kit.fontawesome.com/6b8f0c7049.js" crossorigin="anonymous"></script>
```
{: .nolineno }

Los iconos que se utilizan son los siguientes:

{% include codeHeader.html %}
```html
<!-- far fa-eye -->
<i class="far fa-eye"></i>
<!-- far fa-hand-peace -->
<i class="far fa-hand-peace"></i>
<!-- fas fa-paint-brush -->
<i class="fas fa-paint-brush"></i>
```
{: .nolineno }