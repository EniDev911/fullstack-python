---
layout: post
title: "Condicionales"
category: "python"
toc: false
thumbnail: /assets/img/python-condicionales.png
---

<script>
  function callback(nodo) {
  	if (nodo === 'condicion') {
  		const message = `En primer lugar se evalúa la condición ¿Cuándo es par un número? La respuesta es simple: cuando es divisible por 2 y el resto (módulo) es cero.`
	    Swal.fire({
	    	title: 'Explicación',
	    	text: message,
        animation: false,
	    	customClass: {
	    		popup: 'border border-secondary',
	    		htmlContainer: 'text-secondary'
	    	}
	    });
  	} else if (nodo === 'inicio') {
  		const message = `Inicia el programa y en el siguiente paso solicitará al usuario que ingrese un número.`
	    Swal.fire({
	    	title: 'Explicación',
	    	text: message,
	    	customClass: {
	    		popup: 'border border-secondary',
	    		htmlContainer: 'text-secondary'
	    	}
	    });
  	} else if (nodo === 'true' || nodo === 'false'){
  		const isEven = nodo === 'true' ? 'Es par' : 'Es impar'
  		const message = `Si la condición es ${nodo}, mostrará el valor ingresado junto a la frase '${isEven}' y luego finaliza el programa.`
	    Swal.fire({
	    	title: 'Explicación',
	    	text: message,
	    	customClass: {
	    		popup: 'border border-secondary',
	    		htmlContainer: 'text-secondary'
	    	}
	    });
  	}
  };
</script>


De no ser por las **estructuras de control**, el código en cualquier lenguaje de programación sería ejecutado línea a línea de forma secuencial hasta el fin del programa. Un programa que está escrito basado en un código fuente en algún lenguaje de programación no deja de ser un conjunto de instrucciones que son ejecutadas una tras otras.


## uso del if en Python

La estructura de control `if` que en inglés ***if*** significa ***si*** le permite a un programa ejecutar determinadas instrucciones cuando se cumpla una o más condiciones.

El siguiente diagrama de flujo  muestra la ejecución de una sentencia if :

{% capture condicional_graph %}
---
title: "DIAGRAMA DE FLUJO: SENTENCIA IF"
---
graph LR
  inicio([Inicio])
  inicio--&gt;condicion{"CONDICIÓN"}
  condicion--&gt;|Si| bloqueA[BLOQUE]
  condicion--&gt;fin([fin])
  bloqueA--&gt;fin([fin])
{% endcapture %}

{% include mermaid.html content=condicional_graph %}

Como se puede visualizar en el diagrama de flujo, gracias a las estructuras de control, podemos **cambiar el flujo de ejecución de un programa**.

### Comprobar si un número es positivo

Veamos un caso muy sencillo. Por lo tanto, si quisieramos crear un programa para que el usuario introduzca un número y luego evaluar si cuyo número introducido es un número positivo y simplemente el programa nos muestre un mensaje 'Escribió un número positivo, muy bien'.

El diagrama de flujo siguiente muestra los pasos para lograr el objetivo:

{% capture es_positivo_graph %}
---
title: "DIAGRAMA DE FLUJO: ES POSITIVO?"
---
graph LR
  inicio([Inicio])
  inicio--&gt;id2[/numero/]
  id2--&gt;condicion{"numero > 0"}
  condicion--&gt;|Si| true[/numero, 'es par'/]
  condicion--&gt;fin([fin])
  true--&gt;fin
{% endcapture %}
{% include mermaid.html content=es_positivo_graph %}

### Escribamos el ejemplo en Python

Así que el código queda así:

{% include codeHeader.html icon="python" %}
```py
numero = int(input("Escriba un número positivo: "))
if numero >= 0:
	print('Escribió un número positivo, muy bien')
print('fin del programa')
```
{: .nolineno }

---

## Uso del if y else en Python

Es posible que no solo queramos hacer algo si una determinada condición se cumple, sino además queramos hacer algo en caso contrario. Es aquí donde entre en juego la cláusula `else` en Python que se comporta como lo que sucedería si la condición no se cumple, se ejecutará el código presente dentro del `else`.

El diagrama de flujo siguiente muestra la ejecución de una sentencia `if` ... `else`:

{% capture condicional_if_else_graph %}
---
title: "DIAGRAMA DE FLUJO: SENTENCIA IF...ELSE"
---
graph LR
  inicio([Inicio])
  inicio--&gt;condicion{"CONDICIÓN"}
  condicion--&gt;|Si| bloqueA[BLOQUE A]
  condicion--&gt;|No| bloqueB[BLOQUE B]
  bloqueA--&gt;fin([fin])
  bloqueB--&gt;fin([fin])
{% endcapture %}

{% include mermaid.html content=condicional_if_else_graph %}

> **OJO**<br>Nótese que ambos bloque de código son excluyentes, se entra o en uno o en otro, pero nunca se ejecutarán los dos.

Veamos un caso muy sencillo. El módulo o residuo de una en una operación de división te da el sobrante de la división entera de un número entre otro y se representa con el símbolo de porcentaje `%` en Python.

Por lo tanto, si quisieramos crear un programa para que el usuario introduzca un número y luego evaluar cuyo número y nos muestre un mensaje si el número introducido es par o impar.

El siguiente diagrama de flujo muestra los pasos para lograr el objetivo:

{% capture es_par_graph %}
---
title: "DIAGRAMA DE FLUJO: ES PAR?"
---
graph LR
  inicio([Inicio])
  inicio--&gt;id2[/numero/]
  id2--&gt;condicion{"numero MOD 2=0"}
  condicion--&gt;|Si| true[/numero, 'es par'/]
  condicion--&gt;|No| false[/numero, 'es impar'/]
  true--&gt;fin([fin])
  false--&gt;fin([fin])
  click inicio call callback() "Clic para ver más detalles"
  click condicion call callback() "Clic para ver más detalles"
  click true call callback() "Clic para ver más detalles"
  click false call callback() "Clic para ver más detalles"
  click c call callback() "Tooltip for a callback"
{% endcapture %}

{% include mermaid.html content=es_par_graph %}

Como podemos observar en el diagrama de flujo. El programa pide un número al usuario y almacena la respuesta en la variable `numero`. Después comprueba si el número es par o impar evaluando la condición. Si lo es, el programa mostrará el número ingresado por el usuario acompañado de la frase **es par**. Sino, el programa mostrará el valor introducido por el usuario acompañado de la frase **es impar** luego de eso el programa finaliza. 


Entonces nuestro código en Python queda así:

{% include codeHeader.html icon="python" %}
```py
numero = int(input("Introduce un número para evaluar si es par o impar: "))
if numero % 2 == 0:
	print(numero,'es par')
else:
	print(numero,'es impar')
```
{: .nolineno }
