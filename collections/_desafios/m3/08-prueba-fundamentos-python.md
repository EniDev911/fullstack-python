---
layout: post
title: Puebra Fundamentos Python
modulo: m3
type: examen
show: true
github:
  name: enidev911/m3-prueba-fundamentos-python
---

## Descripción

La asociación de Amantes de los pájaros de Chile ha notado que actualmente no se tiene información de los distintos pájaros que pueden ser observados en Chile. Es por eso que les gustaría poder entender a manera de prototipo como poder listar muchos de estos especímenes. Para ello se le solicita generar un prototipo muy sencillo en la cual se puedan observar algunas imágenes de pájaros típicos de Chile junto con su nombre en español e inglés. La idea es que esta información pueda ser eventualmente transformada en señaliticas bilingües que permitan fomentar el turismo en Chile. Para ello se le da acceso a la API <https://aves.ninjas.cl/api/birds>, la cual da acceso a una base de datos con la información requerida. Se solicita entonces que usted pueda crear un script en Python que permita crear este sitio web con los requerimientos solicitados, es decir, un listado con el título Aves de Chile, y cada especie registrada con su nombre en inglés junto con sus imágenes. No olvide que a pesar que el requerimiento es sencillo, debemos respetar las buenas prácticas de modularización.

---

## Desarrollo

Para cumplir con éxito la prueba, vamos a ir paso a paso para ir clarificando cada tema y dejando algunas sugerencias o recomendacion.

Comenzamos creando el script:

{% include newfile.html file='script.py' %}

### Crear templates del HTML a utilizar

Para este requerimientos vamos a definir una función que se llamará `build_web_page` y se encargará de crear la página, quiere decir que va a crear un archivo `.html` con el contenido solicitado:

{% include codeHeader.html icon="python" %}
```python
def build_web_page(birds):

    html = "<html>\n<head>\n\t<title>Pájatos</title>\n</head>\n<body style='text-align: center'>\n\t<ul>\n"
    for bird in birds:
        spanish_name = f'<span>{bird["name"]["spanish"]}</span>'
        english_name = f'<span>{bird["name"]["english"]}</span>'
        html += f"\t\t<li style='display: inline-block; text-align: start'>\n\t\t\t<img src={bird["images"]["thumb"]} alt={bird["uid"]}><br>Nombre en español: {spanish_name}<br>Nombre en inglés: {english_name}\n\t\t</li>\n"

    html += "\t</ul>\n</body>\n</html>"
    with open("index.html", "w") as file:
        file.write(html)
```
{: .nolineno }

Podemos observar que nuestra variable `html` se encarga de capturar el formato adecuado y los valores recibidos dinámicamente de la API, también se puede apreciar una serie de secuencias de escape pero es simplemente para darle un formato como saltos de líneas y tabulaciones.

### Generar un llamado a la API

Para este requerimiento también vamos a cubrirlo definiendo otra función que llamaremos `request_birds` y se encagará de hacer la solicitud a la API y también retornara su resultado ya convertido en un diccionario o lista según sea el caso:

{% include codeHeader.html icon="python" %}
```python
def request_birds(url_requested):
    response = requests.get(url_requested)
    return response.json()
```
{: .nolineno }

### Exportar el sitio en HTML

Aquí ya no vamos a definir más funciones sino que vamos arrancar con el punto de partida del script y utilizaremos las funciones definidas anteriormente y finalmente generar el archivo y lo abriremos con el navegador usando el módulo `webbrowser`:

{% include codeHeader.html icon="python" %}
```python
if __name__ == "__main__":
	endpoint = "https://aves.ninjas.cl/api/birds"
		 
	birds = request_birds(endpoint)
			
	with open("index.html", "w") as file:
				file.write(build_web_page(birds))
				
	macos_chrome_path = 'open -a /Applications/Google\ Chrome.app %s'
	webbrowser.get(macos_chrome_path).open('index.html')
```
{: .nolineno }

---

## Repositorio

{% include repository.html repo=page.github %}