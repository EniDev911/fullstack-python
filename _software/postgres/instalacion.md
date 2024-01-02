---
layout: default
title: "🐘 Postgres"
subtitle: "Instalación de Postgres"
---

<div class="row g-3 justify-content-center">
  {% for post in site.data.postgres.install %}
  <div class="col-10 col-md-6 col-lg-4">
    {% include card_post.html
    id=forloop.index0
    title=post.title
    href=post.link
    img=post.thumbnail
    %}
  </div>
  {% endfor %}
</div>