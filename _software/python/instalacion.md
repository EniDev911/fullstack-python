---
layout: default
title: "🐍 Python"
subtitle: "Instalación de Python"
---

## Instalación usando el instalador completo

1. Descargar el archivo ejecutable de instalación de la versión más reciente de Python que sea compatible con tu sistema operativo desde [página de descargas](https://www.python.org/downloads/){:target='_blank' class='link'}
2. Ejecuta el archivo ejecutable de instalación de Python que se descargó anterioremente.<br>
    Selecciona las siguientes opciones en la ventana del instalador de Python para configurar los pasos de instalación.
    1. Elija agregar el archivo ejecutable de Python a la ruta.
    1. Seleccione **install Now**.
3. En el menú inicio, abra una ventana del símbolo de sistema.
4. Comprobamos que tanto **Python** como **pip** estén instalados correctamente con los siguientes comandos:

{% include codeHeader.html %}
```bash
python --version
pip --version
```

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/bc729009adbc4ca78c81dfade6b9133b" title="instalación Python" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>

---

## Instalación silenciosa

Todas las opciones disponibles desde la interfaz de usuario del instalador (como en el caso anterior) también pueden especificarse desde la línea de comandos.

Las siguientes opciones (encontradas al ejecutar el instalador con /?) pueden ser pasadas al instalador:

{: .table }
|Nombre|Descripción|
|------|-----------|
|`/pasive`|para mostrar el progreso sin requerir interacción del usuario|
|`/quiet`|para instalar/desinstalar sin mostrar ninguna interfaz|
|`simple`|para prevenir la personalización del usuario|
|`/uninstall`|para eliminar Python (sin confirmación)|


**Ejemplo**: instalar python con las opciones predeterminadas y mostrar el progreso:

{% include codeHeader.html %}
```bash
python-3.12.1.exe /passive InstallAllUsers=1
```
![img - instalacion silenciosa]({{ '/assets/img/instalacion-silenciosa-01.png' | relative_url}})