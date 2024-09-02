---
layout: post
title: "Proyecto Django ArriendosYA - Hito I"
subtitle: "M7 - Hito I"
show: true
show_next: true
type: evaluado
modulo: m7
---

{% include ifr_results.html src="https://docs.google.com/presentation/d/e/2PACX-1vR_XIV_ynxmrlaU4IMMCUslJG1plAWECUt1SXDefqyqhrspw4IOeFvMUdXzA0TvKM8t2gEhYSFudvEB/embed?start=false&loop=false&delayms=3000" target="true" %}


## Conexión a la base de datos

### 1. Creamos la base de datos

Utilizando PgAdmin o la terminal procedemos a crear la base de datos:

{% include codeHeader.html icon="terminal" %}
```sql
CREATE DATABASE arriendaya;
```
{: .nolineno }

### 2. Instalamos el conector para Postgres

{% include codeHeader.html icon="terminal" %}
```bash
pipenv install psycopg2-binary
```
{: .nolineno }

### 3. Cambiamos la configuración de la base de datos

{% include codeHeader.html file="_site/settings.py" %}
```py
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "arriendaya", # 👈 base de datos postgres
        "USER": "postgres", # 👈 usuario para postgres
        "PASSWORD": "postgres", # 👈 password para postgres
        "HOST": "localhost",
        "PORT": 5432
    }
}
```
{: .nolineno }


### 4. Generar una nueva migración y ejecutar las migraciones

{% include codeHeader.html icon="terminal" %}
```bash
python manage.py makemigrations
python manage.py migrate
```

