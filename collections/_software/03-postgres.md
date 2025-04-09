---
layout: post
title: "🐘 Postgres"
subtitle: "Instalación de Postgres"
text: "ORDBMS Open Source"
thumbnail: /assets/svg/postgres.svg
video_path: /assets/videos/postgres/
show_next: true
---

## 🐘 Postgres en Windows

### Usando el instalador

1. Descarga el archivo ejecutable de instalación de la versión más reciente y compatible con tu sistema operativo desde la [página de descarga](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads){:target='_blank'}.
2. Ejecuta el archivo ejecutable descargado y sigue el asistente de instalación.
3. Comprobamos que tanto Postgres y Pgadmin estén instalados correctamente.

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/b6bb4e64292b471f8972039297a2bd05" title="postgres-instalacion-windows.pdf" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>

---

## 🐘 Postgres en Ubuntu

### Instalar paquetes

Instalar los paquetes de PostgreSQL desde los repositorios predeterminados de Ubuntu. Para ello es necesario actualizar el índice de paquete:  

{% include codeHeader.html icon="terminal" %}
```bash
sudo apt update
```

Luego, podemos instalar el paquete de Postgres junto al paquete **postgresql-contrib**, que agrega algunas utilidades y funcionalidades adicionales:

{% include codeHeader.html icon="terminal" %}
```bash
sudo apt install postgresql postgresql-contrib
```

Ahora que tenemos el software instalado, podemos analizar su funcionamiento. Por defecto, Postgres utiliza el concepto de **roles** para gestionar la autenticación y la autorización. Este aspecto es similar a las cuentas normales de estilo Unix, pero Postgres no distingue entre los usuarios y los grupos, y es por ello que prefiere usar el término más flexible como lo es **rol**.

Postgres se configura por defecto para usar la **autenticación ident**. Esto significa que asocia los roles de Postgres con una cuenta de sistema Unix o Linux correspondiente. 

En el proceso de instalación Postgres creó una cuenta de usuario llamada **postgres, que se asocia con el rol predeterminado de Postgres**. Para comenzar a usar Postgres, podemos iniciar sesión en esa cuenta. Existen varias maneras de usar esta cuenta para acceder a Postgres.

### Cambiar a la cuenta de postgres

Primero podemos invocar un shell con con inicio de sesión usando simplemente `sudo -i -u` especificando el usuario en este caso tenemos al usuario **postgres** que se crea automáticamente concluida la instalación del paquete anterior:

{% include codeHeader.html icon="terminal" %}
```bash
sudo -i -u postgres
```

Ahora, podemos acceder al servidor de Postgres invocando al cliente de línea de comandos **psql**: 

{% include codeHeader.html icon="terminal" %}
```bash
psql
```

También se puede ejecutar el comando con la cuenta de **postgres** de forma directa a través de **sudo**:  

{% include codeHeader.html icon="terminal" %}
```bash
sudo -u postgres psql
```

Esto nos permitirá iniciar sesión de forma directa en Postgres sin el shell **bash** intermediario entre ellos.

Para salir de la sesión interactiva de Postgres, ejecutamos el meta comando `\q`.

### Demostración

{% assign postgres_ubuntu = page.video_path | append: 'postgres_install_ubuntu.mp4' %}

{% include video.html src=postgres_ubuntu %}

### Crear un rol

En este momento, solo tenemos el rol de **postgres** configurado dentro de la base de datos. Podemos crear nuevos roles a partir desde la línea de comandos usando la herramienta de línea de comando incluido en la instalación de postgres como por ejemplo `createuser` y le indicamos la opción `--interactive` para que nos solicite el nombre del nuevo rol y también nos preguntará si debería tener **permisos de superusuario**.

{% include codeHeader.html icon="terminal" %}
```bash
createuser --interactive
```

Si, como alternativa podemos usar **sudo** para cada comando sin dejar de usar nuestra cuenta normal:  

{% include codeHeader.html icon="terminal" %}
```bash
sudo -u postgres createuser --interactive
```

Podemos ver más opciones adicionales de esta herramienta **`createuser`**:

{% include codeHeader.html icon="terminal" %}
```bash
man createuser
```

### Crear nueva base de datos

Otra susposición que el sistema de autenticación de Postgres realiza por defecto es que para cualquier rol creado para que pueda iniciar sesión deberá existir una base de datos con el mismo nombre del rol.

Esto significa que, si el usuario que desea acceder a Postgres con un rol llamado **boba-fett**, ese rol intentará conectarse con una base de datos, que por defecto, también se debe llamarse **boba-fett**. De lo contrario obtendremos un error por intentar acceder a una base de datos que no existe.

Podemos crear la base de datos apropiada usando la herramienta **`createdb`**.

{% include codeHeader.html icon="terminal" %}
```bash
createdb boba-feet
```

Para iniciar sesión con la **autenticación** basada en **ident**, necesitaremos un usuario de Linux con el mismo nombre del rol y su base de datos de Postgres.

Podemos crear un usuario en Linux con el comando `adduser`,  Debe tener privilegios **sudo** para ejecutar el comando: 

{% include codeHeader.html icon="terminal" %}
```bash
sudo adduser boba-fett
```

Ahora nos deberá solicitar crear un password para el nuevo usuario, una vez se establece podemos iniciar sesión usando el siguiente comando:

{% include codeHeader.html icon="terminal" %}
```bash
su boba-fett
```

Nos pedirá la constraseña que establecimos anteriormente, iniciada la sesión ahora simplemente podemos invocar a **psql**:

{% include codeHeader.html icon="terminal" %}
```bash
psql
```

### Cambiar el método de autenticación

PostgreSQL admite múltiples métodos de autenticación de clientes. En ubuntu, `peer` es el método de autenticación por defecto que se usa para conexiones locales (*local*), mientras que `scram-sha-256` (esto solía ser `md5` hasta Ubuntu 21.10) es el predeterminado para las conexiones **host** (conexiones realizadas mediante **TCP/IP**).

Como mencianamos anteriormente de forma predeterminada, solo se permiten conexiones desde el sistema local. Para permitir que todas las demás computadoras se conecten al servidor de PostgreSQL, editamos el archivo `/etc/postgresql/*/main/postgresql.conf`. Localizamos la siguiente línea `#listen_addresses='localhost'` y la cambiamos por `'*'`:

{% include codeHeader.html file='postgresql.conf' %}
```bash
listen_addresses = '*'
```

> **Nota:**  
> `*` permitirá que todas las interfaces IP disponibles (IPv4 e IPv6) solo escuchen el conjunto IPv4 '0.0.0.0' mientras que `::` permite escuchar todas las direcciones IPv6. Si estos terminos te generan confusión te recomiendo este 👉 [artículo de AWS](https://aws.amazon.com/es/compare/the-difference-between-ipv4-and-ipv6/){: target='_blank' }

Ahora que podemos conectarnos a nuestro servidor PostgreSQL, el siguiente paso es establecer una contraseña para el **usuario de Postgres**. Ejecute el siguiente comando en la terminal para conectarse a la base de datos predeterminada:

{% include codeHeader.html icon="terminal" %}
```bash
sudo -u postgres psql template1
```

El comando anterior se conecta a la base de datos `template1` con el usuario `postgres`. Una vez se conecta al servidor PostgreSQL, aparecerá un mensaje en el prompt que nos solicita cambiar el password. Podemos ejecutar el siguiente comando SQL para establecer la contraseña para el usuario `postgres`:

{% include codeHeader.html icon="sql" %}
```sql
ALTER USER postgres with encrypted password 'my_password';
```
{: .nolineno }

![img - pg_hba.conf](https://enidev911.github.io/guias/assets/images/postgres/instalacion-ubuntu/pg_hba.png){: .card }

---

## 🐘 Postgres en macOS

### Instalador interactivo EDB

Este instalador incluye los siguientes programas:

- `el servidor PostgreSQL`.
- `pgAdmin`: herramienta gráfica para gestionar y desarrollar bases de datos.
- `StackBuilder`: herramienta gráfica para administrar paquetes que se puede utilizar para descargar e instalar herramientas adicionales.

Este instalador puede ejecutarse en modo gráfico, por la línea de comandos o de instalación silenciosa.

### Consideraciones

Este **instalador EDB** está diseñado para ser una forma sencilla y rápida de comenzar a utilizar PostgreSQL en macOS.

Para comenzar con la descarga tenemos que ir la [página de descarga del instalador](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads){: target='_blank' }
