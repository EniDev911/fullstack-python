---
layout: default
title: "🐍 Python"
subtitle: "Instalación de Python"
---

1. Descargar el archivo ejecutable de instalación de la versión más reciente de Python que sea compatible con tu sistema operativo desde ["página de descargas"](https://www.python.org/downloads/){:target='_blank' class='link'}
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

## Instalación silenciosa

{% include codeHeader.html %}
```bash
python-3.9.0.exe /quiet InstallAllUsers=1 PrependPath=1 Include_test=0
```

{% include codeHeader.html %}
```xml
<Options>
    <Option Name="InstallAllUsers" Value="no" />
    <Option Name="Include_launcher" Value="0" />
    <Option Name="Include_test" Value="no" />
    <Option Name="SimpleInstall" Value="yes" />
    <Option Name="SimpleInstallDescription">Just for me, no test suite</Option>
</Options>
```