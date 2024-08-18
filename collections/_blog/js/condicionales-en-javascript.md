---
layout: post
title: "Estructuras condicionales en javascript"
category: "javascript"
thumbnail: '/assets/img/estructuras-de-control.png'
---


Al hacer una página interactiva con javascript necesitaremos establecer **condiciones** o **decisiones**, donde buscamos que el navegador realice una **acción A** si se cumple una condición o una **acción B** si no se cumple. Este es el primer tipo de estructuras de control que contraremos. Pero existen varias estructuras de control:


{: .table .table-dark }
|Estructura de control|Descripción|
|:--------------------|:----------|
|`if`{: .bg-warning .text-dark }|**Condición simple:** si ocurre esto, haz lo siguiente...|
|`if/else`{: .bg-warning .text-dark }|**Condición alternativa:** si ocurre esto, haz esto, sino, haz esto...|
|`?:`{: .bg-warning .text-dark }|**Operador ternario:** equivalente al `if/else`, pero en formato abreviado.|
|`switch`{: .bg-warning .text-dark }|**Estructura para casos específicos** similar a varios `if/else` anidados.|


---

## Uso de (*if*)

Quizás, el mecanismo más conocido es la sentencia `if`, con ella podemos evaluar una condición y decirle a nuestro programa que si se cumple la condición que definamos entre los paréntesis `()` si el resultado sea verdadero (*true*), ejecuta un bloque de código. Por ejemplo observemos el siguiente diagrama de flujo:


{% capture simbolos %}
---
title: "SÍMBOLOS DE DIAGRAMA DE FLUJO"
---
graph LR
  subgraph SIM[ ]
  nodo_inicio_final(["INICIO / FINAL"])
  nodo_entrada_salida[/ENTRADA / SALIDA/]
  nodo_condicion{"DECISIÓN"}
  nodo_accion["PROCESO"]
  end
{% endcapture %}


{% capture condicional_if %}
---
title: "DIAGRAMA DE FLUJO: SENTENCIA IF"
---
graph LR
  direction LR
  inicio([Inicio])
  inicio--&gt;condicion{"CONDICIÓN"}
  condicion--&gt;|Si| bloqueA[BLOQUE]
  bloqueA-->fin([fin])
  condicion--&gt;fin
{% endcapture %}

{% include mermaid.html content=simbolos %}
{% include mermaid.html content=condicional_if %}


### Comprobar si un número es positivo

Como vimos en el diagrama de flujo, gracias a las estructuras de control, podemos cambiar el flujo de ejecución de un programa.

Ahora pasemos a los ejemplos, poniendo en practica lo anterior. Comencemos con un caso sencillo, digamos que queremos crear un programa para que un usuario pueda introducir un número y luego evaluar si respectivo número es positivo, de ser cierto vamos a mostrar un mensaje corroborando que el número es positivo:

{% capture es_positivo_graph %}
---
title: "DIAGRAMA DE FLUJO: ES POSITIVO?"
---
graph LR
  inicio([Inicio])
  inicio--&gt;id2[/numero/]
  id2--&gt;condicion{"numero > 0"}
  condicion--&gt;|Si| true[numero, 'es positivo']
  condicion--&gt;fin([fin])
  true--&gt;fin
{% endcapture %}
{% include mermaid.html content=es_positivo_graph %}

Ahora llevemos el caso anterior al código en javascript, podemos pegar el código directamente en la consola con **clic derecho** > **inspeccionar** o <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd>:

{% include codeHeader.html icon='js' %}
```js
var numero = parseInt(prompt("Introduce un número:"));

if (numero > 0) {
	alert("El número es positivo");
}
```
{: .nolineno }

Ahora hagamos lo mismo pero mostrando el resultado en un documento **HTML**:

{% include codeHeader.html file="index.html"  codepen="y" title="probando if en js y manipular el html" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Probando IF en JS</title>
</head>
<body>
	<h1>El  número es: <span id="resultado">sin resolver</span></h1>
	<script>
		let resultado = document.getElementById("resultado");

		var numero = parseInt(prompt("Introduce un número:"));

		if (numero > 0) {
			resultado.textContent ="Positivo";
		}
	</script>
</body>
</html>
```

---

## Uso de (*if / else*)

Se puede dar el caso que queramos una alternativa a una condición. Para ello utilizaremos el `if` seguido de un `else`. Con esto podemos establecer una **acción A** si se cumple la condición y una **acción B** si no se cumple.

### Comprobar si un número es par

Para comenzar con un ejemplo muy simple como saber si un número es par o impar. Tal como lo muestra el siguiente diagrama:

{% capture es_par_js %}
---
title: "DIAGRAMA DE FLUJO: ES PAR?"
---
graph LR
  inicio([Inicio])
  inicio--&gt;id2[/numero/]
  id2--&gt;condicion{"numero MOD 2 = 0"}
  condicion--&gt;|Si| true[numero, 'es par']
  condicion--&gt;|No| false[numero, 'es impar']
  true--&gt;fin([fin])
  false--&gt;fin([fin])
{% endcapture %}

{% include mermaid.html content=es_par_js %}

{% include codeHeader.html icon='js' %}
```js
var numero = parseInt(prompt("Introduce un número:"));

// Condición
if (numero % 2 === 0) {
  // Acción A (número es es divisible por 2)
  alert(numero + " es par");
} else {
  // Acción B: Cualquier otro caso a A (número no es divisible por 2)
  alert(numero + " es impar");
}
```
{: .nolineno }

---

## Uso de operador ternario

El [operador ternario](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator){:target='_blank'} es una alternativa de un condicional `if/else` de una forma mucho más corta y, en muchos casos más legible. Vamos a reescribir el ejemplo anterior (*comprobar si un número es par*) utilizando este operador:

{% include codeHeader.html icon='js' %}
```js
var numero = parseInt(prompt("Introduce un número:"));

// Condición       Acción A                     Acción B
numero % 2 === 0 ? alert(numero + " es par") : alert(numero + " es impar");
```
{: .nolineno }

---

## Uso de (*switch*)

La estructura de control `switch` permite definir casos específicos a realizar en el caso de que la variable expuesta como condición sea igual a los valores que se indican mediante los `case` *casos*, veamos el diagrama de flujo:

{% capture sentencia_switch %}
---
title: "DIAGRAMA DE FLUJO: SWITCH / CASE"
---
graph TD
  inicio([Inicio])
  inicio-->condicion{"valor expresión"}
  condicion-->caso1{"caso 1"}
  condicion-->caso2{"caso 2"}
  condicion-->caso3{"caso 3"}
  condicion-->otrocaso{"otro caso"}
  caso1-->instruccion1[instrucciones caso 1]-->fin
  caso2-->instruccion2[instrucciones caso 2]-->fin
  caso3-->instruccion3[instrucciones caso 3]-->fin
  otrocaso-->instruccionotro[instrucciones otro caso]-->fin
  fin([Fín])
{% endcapture %}

{% include mermaid.html content=sentencia_switch %}

En el caso de los `if` nos permite utilizar operadores de comparación donde podemos definir rangos con mayor o menor, cosa que con el `switch` no se puede hacer. El `switch` está pensado para indicar sólo con casos con valores concretos y específicos.

### Hacer operaciones aritméticas

Vamos a crear una calculadora básica. Este programa permitirá al usuario realizar operaciones matemáticas simples con dos números. El usuario seleccionará una operación que puede ser:

- suma (`+`)
- resta (`-`)
- multiplicación (`*`)
- división (`/`)

> Si el símbolo de la operación ingresado es diferente a los operadores permitidos `(+, -, x, /)`, el programa indicará "Operación inválida".


Utilizando un bloque `switch`. El programa calculará la operación seleccionada y mostrará el resultado en una ventana emergente (`alert`), el siguiente código lo podemos probar directo en la consola:


{% include codeHeader.html icon='js' %}
```js
var operacion = prompt("¿Que operación desea realizar?:\n(+) = suma\n(-) = resta\n(*) = mutiplicación\n(/) = división");

var num1 = 0;
var num2 = 0;
var resultado = 0;

switch (operacion) {
	case '+':
		// realizar operación de suma
		num1 = +prompt("¿Cuál es el primer número para operar?");
		num2 = +prompt("¿Cuál es el segundo número para operar?");
		resultado = num1 + num2;
		alert("La suma de " + num1 + " y " + num2 + " es: " + resultado);
		break;
	case '-':
		// realizar operación de resta
		num1 = +prompt("¿Cuál es el primer número para operar?");
		num2 = +prompt("¿Cuál es el segundo número para operar?");
		resultado = num1 - num2;
		alert("La resta de " + num1 + " y " + num2 + " es: " + resultado);
		break;
	case '*':
		// realizar operación de multiplicar
		num1 = +prompt("¿Cuál es el primer número para operar?");
		num2 = +prompt("¿Cuál es el segundo número para operar?");
		resultado = num1 * num2;
		alert("La multiplicación de " + num1 + " y " + num2 + " es: " + resultado);
		break;
	case '/':
		// realizar operación de división
		num1 = +prompt("¿Cuál es el primer número para operar?");
		num2 = +prompt("¿Cuál es el segundo número para operar?");
		resultado = num1 / num2;
		alert("La división de " + num1 + " y " + num2 + " es: " + resultado);
		break;
	default:
		alert("Operación inválida");
		break;
}
```
{: .nolineno }