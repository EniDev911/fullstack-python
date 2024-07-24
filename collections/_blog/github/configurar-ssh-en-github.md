---
layout: post
title: "Configurar SSH para github"
category: "github"
thumbnail: https://images.prismic.io/hatica/66956a73-1059-4702-aec5-573f6188b76b_Github-key.png?auto=compress,format&rect=0,0,1800,1151&w=1200&h=767
---


## Generar par de clave pública y privada

Para generar los pares de claves haremos uso de la herramienta **ssh-keyhen**. Este programa está disponible por medio de la línea de comandos para Linux, MacOSX y en [Git Bash](https://gitforwindows.org/){: target='_blank' } en Windows.

En la mayoría de los casos cuando hemos instalado **Git Bash**, se nos habilitará la opción en el menú contextual del clic derecho para abrirlo:

![img - open git-bash](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/open-git-bash.png){: .card }

### 1. Crear nueva clave

Comience creando una nueva clave, usando su correo electrónico como etiqueta en la terminal:

{% include codeHeader.html %}
```bash
ssh-keygen -t rsa -b 4096 -C "user@email.com"
```

**Explicación**:

- `-t rsa`: Especifica el algoritmo de encriptación en este caso el más común es rsa.
- `-b 4096`: Especifica que tan compleja es la llave (eL tamaño 4096 se considera seguro).
- `-C "user@email.com"`: Especifica el email con el que se va a configurar la llave.

Se le pedirá donde almacenar la nueva llave generada (Si solo presiona <kbd>Enter</kbd> por lo general se almacena en el directorio del usuario en una subcarpeta oculta):

```plaintext
Enter file in which to save the key (/c/Users/<user>/.ssh/id_rsa):
```
{: .nolineno }

Seleccione una ubicación de archivo o solo presione <kbd>Enter</kbd> se creara en la ubicación por defecto.

Luego nos va pedir ingresar una **frase de contraseña segura** la cual creará una capa adicional de seguridad. Evitará que cualquier persona que obtenga acceso a su computadora use esa clave sin la frase de contraseña. Sin embargo, será necesario que proporcione la frase de contraseña cada vez que se utilice la llave.

> A modo personal prefiero no utilizar una frase de confirmación ya que una **llave SHH** la suelo configurar en mi equipo personal y para efecto de productividad sin la frase ahorramos tiempo.

```plaintext
Enter passphrase (empty for no passphrase): Enter same passphrase again:
```
{: .nolineno }

Luego nos va pedir confirmar:

```plaintext
Enter same passphrase again:
```
{: .nolineno }

Por último nos devuelve el hash generado para la nueva llave creada:

{: align="center" }
![img - crear-llave-ssh](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/ssh-keygen-generated.png){: .card }
***Captura**: Crear una nueva clave en GitBash*


---

### 2. Agregar llave al SSH-Agent

El agente ssh ([ssh-agent](https://es.wikipedia.org/wiki/SSH-Agent){:target='_blank'}) es un programa auxiliar que realiza un seguimiento de las claves de identidad del usuario y sus frases de contraseñas. El agente puede usar las claves para iniciar sesión en otros servidores sin que el usuario escriba nuevamente una contraseña o frase de contraseña. En palabras simples podemos decir que se trata de un programa para contener llaves privadas, utilizadas para la autenticación de claves públicas.

Antes de agregar una nueva clave SSH al servicio de **ssh-agent** para gestionar tus claves, debes haber comprobado las claves SSH existente y 
[generado una nueva clave SSH](#1-crear-nueva-clave) y verificar que se esté ejecutando el servicio.

1. Verificar que el ssh-agent se esté ejecutando:

{% include codeHeader.html %}
```bash
eval $(ssh-agent -s)
```

- `eval`: Ejecuta un comando de shell y efectua una doble evaluación en la línea de comandos.

{: start="2" }
2. Agrega tu llave **ssh privada** al **ssh-agent**. Si creaste tu llave con un nombre distinto debes apuntar hacia donde se encuentre la llave que creaste. Si dejaste los valores predeterminado basta con copiar el siguiente comando:

{% include codeHeader.html %}
```bash
ssh-add ~/.ssh/id_rsa 
```

{: align="center" }
![img - ssh-add](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/ssh-add-linux.png){: .card }
***Captura**: añadir la llave ssh creada al ssh agent en Linux (con el nombre de **gh_rsa**).*

{: align="center" }
![img - ssh-add gitbash](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/ssh-agent-add.png){: .card }
***Captura**: añadir la llave ssh creada al ssh agent en **gitbash** (con el nombre de **id_rsa**).*

Ahora tenemos el par de claves ssh listo para usarse.

---

## Registrar la llave pública a GitHub

En **Git Bash** podemos usar la herramienta `clip` de Windows para copiar tu clave de una manera sencilla y rápida.

Copiar la clave pública al portapapeles 📋:

{% include codeHeader.html %}
```bash
clip < ~/.ssh/id_rsa.pub
```

**Explicación**:

- `~`: es un símbolo llamado virgulilla que en los sistemas operativos UNIX se refiere al valor de la variable $HOME, esto es, el directorio del usuario que está logueado.

- `id_rsa.pub`: Este archivo es el que almacena el contenido de la llave pública, por ende, debemos tener mucho cuidado en verificar que estemos copiando el contenido de este archivo y no de otro.


Ahora vamos a nuestra cuenta de [GitHub <img align="absmiddle" alt=":octocat:" class="gemoji" height="20px" src="https://github.githubassets.com/images/icons/emoji/octocat.png" title=":octocat:" width="20px" style="background: transparent; box-shadow: none; vertical-align: baseline;">](//github.com){:target='_blank'} e iniciamos sesión.

En la esquina superior derecha de nuestra página, das clic en tu foto de perfil y despues da clic en configuración. En la barra lateral de configuración de usuario, da clic en **llaves SSH y GPG**:

- Haz clic en **New SSH key o Add SSH key**:
![img - add ssh key](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/new-ssh-key.png){: .card .mt-3}

-  En el campo `Title`, agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás usando tu equipo personal, es posible que llames a esta llave (`Personal laptop <MARCA>-<MODELO>`)ja.
- Copia la clave que está contenida en el portapapeles en el campo `Key` <kbd>Ctrl</kbd> + <kbd>V</kbd>:
![img - add ssh key](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/new-ssh-key-add.png){: .card .mt-3}

- Si se te solicita, confirma tu contraseña GitHub:
![img - confirm password](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/confirm-password.png){: .card .mt-3}

Está lista nuestra llave para poder utilizarla con **GitHub**:

![img - new ssh added](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/new-ssh-key-added.png){: .card }

---

## Probar la conexión SSH a GitHub

Ahora podemos probar nuestra conexión a través de SSH a GitHub:

{% include codeHeader.html %}
```bash
ssh -T git@github.com
```

{: align="center" }
![img - probando-conexion-ssh](https://enidev911.github.io/fullstackjsg33/src/guides/github/configurar-ssh-github/assets/test-connection.png){: .card }
***Captura**: Validar la conexión con github vía ssh.*


Si la última línea contiene su nombre de usuario en GitHub, quiere decir que estamos autenticado correctamente.
