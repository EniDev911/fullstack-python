---
layout: post
title: Entornos virtuales con Pipenv
thumbnail: /assets/img/python-entornos-virtuales.png
---


## ¿Qué es Pipenv?

**Pipenv** es una herramienta que a punta a traer lo mejor del mundo de empaquetado.

Automáticamente crea y maneja un entorno virtual para tus proyectos, también como *agregar/remover* paquetes desde tu archivo **Pipfile.lock**, que es usado para producir un determinado build.

Pipenv está destinado principalmente a proporcionar a usuarios y desarrolladores de aplicaciones un método sencillo para configurar un entorno de trabajo.

Por defecto, **Pipenv** guarda todos sus entornos virtuales en un solo lugar. Usualmente esto no es un problema, pero si te gustaría cambiarlo para comodidad de desarrollo, o si esta causando *issues* en servidores de construcción puedes setear la variable de entorno **`PIPENV_VENV_IN_PROJECT`** para crear un entorno virtual dentro de la raíz de tu proyecto.

Por defecto, Pipenv inicializará un proyecto usando cualquier versión de python que tenga python3. Además de iniciar un proyecto con las banderas `--three` o `--two`, también puedes setear la variable `PIPENV_DEFAULT_PYTHON_VERSION` para especificar cual versión usa cuando se inicie un proyecto.

--- 

## Instalación


**Versión requerida de Python:** 
- [![PyPI - Python Version](https://img.shields.io/pypi/pyversions/pipenv)](https://www.python.org/){:target='_blank'}

**Página en pipy:** 
- [![PyPi](https://badgen.net/badge/icon/pypi?icon=pypi&label)](https://pypi.org/project/pipenv/){:target='_blank'}

En la terminal con el siguiente comando, procedemos a la instalación:

{% include codeHeader.html %}
```bash
pip install --user pipenv
```

>**NOTA**<br>Esto se hace para prevenir romper cualquier paquete de sistema. Si **pipenv** no esta disponible en tu shell después de la instalación, vas a necesitar agregar la carpeta raiz de binarios del usuario a tu **PATH** en mi caso (*windows*) `C:\Users\home\AppData\Roaming\Python\Python38\Scripts`

---

## Administrar entornos virtuales con Pipenv

Crea un entorno virtual con la versión 3 de Python:

{% include codeHeader.html %}
```bash
pipenv install --three
```

Crea un entorno virtual con la versión 2 de Python (debe tener instalado en su sistema python 2.x)

{% include codeHeader.html %}
```bash
pipenv install --two
```

Activar un entorno virtual (si no existe, lo crea en el directorio actual) 

{% include codeHeader.html %}
```bash
pipenv shell
```

Salir del entorno virtual previamente activado:

{% include codeHeader.html %}
```bash
exit
```

Instalar paquetes:

{% include codeHeader.html %}
```bash
pipenv install requests
```

Eliminar un paquete o eliminar todos los paquetes:

{% include codeHeader.html %}
```bash
pipenv uninstall django
pipenv uninstall --all
```

Ejecutando un script usando pipenv run:

{% include codeHeader.html %}
```bash
pipenv run python main.py
```

Para evitar escribir el comando tan largo podemos activar el entorno virtual simplemente y luego ejecutar el script: 

```bash
pipenv shell
python main.py
```

Instalar las dependencias de un archivo **Pipfile**:

{% include codeHeader.html %}
```bash
pipenv install
```


---

## Ejemplo de Pipfile & Pipfile.lock

### Ejemplo de Pipfile

```
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[dev-packages]

[packages]
django = "*"

[requires]
python_version = "3.7"
```

- `[source]`: nos muestra el enlace de donde se descargan los paquetes.
- `[dev-packages]`: aquí se registran las librerías solo para desarrollo.
- `[packages]`: aquí se registran todos los paquetes requeridos para el proyecto, cuando instalemos los paquetes con el comando *pipenv install* .

### Ejemplo de Pipfile.lock

```json
{
    "_meta": {
        "hash": {
            "sha256": "7e7ef69da7248742e869378f8421880cf8f0017f96d94d086813baa518a65489"
        },
        "pipfile-spec": 6,
        "requires": {
            "python_version": "3.7"
        },
        "sources": [
            {
                "name": "pypi",
                "url": "https://pypi.org/simple",
                "verify_ssl": true
            }
        ]
    },
    "default": {},
    "develop": {}
}
```

---

## Recomendaciones generales & control de versiones

- Generalmente, mantén a ambos **Pipfile** y **Pipfile.lock** en tu control de versión.
- No mantengas **Pipfile.lock** en tu control de version si estas usando multiples versiones de Python
- Especifica tu versión de Python en la sección `[requires]` de tu **Pipfile**. En resumen, deberias tener solo una versión de Python, como herramienta de desarrollo.
- Siempre utiliza *pipenv install* para que se agregue a la lista de `[packages]` en el **Pipfile**.