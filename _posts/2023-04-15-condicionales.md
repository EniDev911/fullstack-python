---
layout: post
title: "Condicionales"
thumbnail: /assets/img/python-condicionales.png
---

<script>
  function callback(nodo) {
  	if (nodo === 'condicion') {
  		const message = `En primer lugar se evalúa la condición ¿Cuándo es par un número? La respuesta es simple: cuando es divisible por 2 y el resto (módulo) es cero.`
	    Swal.fire({
	    	title: 'Explicación',
	    	text: message,
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

## Condicionales en Python

De no ser por las **estructuras de control**, el código en cualquier lenguaje de programación sería ejecutado línea a línea de forma secuencial hasta el fin del programa. Un programa que está escrito basado en un código fuente en algún lenguaje de programación no deja de ser un conjunto de instrucciones que son ejecutadas una tras otras.


{% capture condicional_graph %}
graph LR
  inicio([Inicio])
  inicio--&gt;condicion{"CONDICIÓN"}
  condicion--&gt;|Si| bloqueA[BLOQUE A]
  condicion--&gt;|No| bloqueB[BLOQUE B]
  bloqueA--&gt;fin([fin])
  bloqueB--&gt;fin([fin])
{% endcapture %}

{% include mermaid.html content=condicional_graph %}

Como se puede visualizar en el diagrama de flujo, gracias a las estructuras de control, podemos **cambiar el flujo de ejecución de un programa**

{% capture es_par_graph %}
graph LR
  inicio([Inicio])
  inicio--&gt;id2[/numero = 'Indique un número: '/]
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


Como podemos observar en el diagrama de flujo. El programa pide un número positivos al usuario y almacena la respuesta en la variable `numero`. Después comprueba si el número es par o impar evaluando la condición. Si lo es, el programa mostrará el número ingresado por el usuario acompañado de la frase '**es par**'. Sino, el programa imprime mostrará el valor introducido por el usuario acompañado de la frase **'es impar**' luego de eso el programa finaliza. 

### Escribamos el ejemplo en Python


{% include codeHeader.html %}
```py
numero = int(input("Escriba un número positivo: "))
if numero % 2 == 0:
	print(numero,'es par')
else:
	print(numero,'es impar')
```