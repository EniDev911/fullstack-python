---
layout: default
title: Módulos
---


<table class="table table-hover table-dark">
	<thead class="fs-5">
		<th>Tipo</th>
		<th>Desafío</th>
	</thead>
{% for item in site.desafios %}
{% if item.modulo == "m2" %}
	<tr onclick="location.href='{{ item.url | relative_url }}'" style="cursor: pointer;">
		<th style="width: 10px;">
			<span class="badge {% if item.type == 'guiado' %}text-bg-light{% else %}text-bg-warning{% endif %}">
			{{ item.type }}
			</span>
		</th>
		<td>
			{{ item.title }}
		</td>
	</tr>
{% endif %}
{% endfor %}
</table>
