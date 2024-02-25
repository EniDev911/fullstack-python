// variables globales
var validado = false;
var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var get = (id) => document.getElementById(id); //  Abreviamos su uso :D

function validarEntradas(valores) {
	const regexp = /^([.,0-9])*$/
	return valores.every(valor => regexp.test(valor));
}

function obtenerSuma(acumulador, numeroActual) {
	return acumulador + Math.round(numeroActual);
}

function sacarPromedio(notas) {
	const total = notas.reduce(obtenerSuma , 0);
	return (total / notas.length).toFixed(2);
}


function pedirNotas(evento) {
	const modulo = evento.target.id.split("_");
	nota1 = +prompt("Escriba la nota 1 [" + modulo[1].toUpperCase() + "]:");
	nota2 = +prompt("Escriba la nota 2 [" + modulo[1].toUpperCase() + "]:");
	nota3 = +prompt("Escriba la nota 3 [" + modulo[1].toUpperCase() + "]:");
	const notas = [nota1, nota2, nota3];
	validado = validarEntradas(notas);
	if (!validado) {
		confirm('Números inválidos, ¿Quieres volver a intentar?')
		? pedirNotas(evento)
		: 0
	} else {
		mostrarResultado(modulo[1], notas)
	}
}


function obtenerSuma(acumulador, numeroActual) {
	return acumulador + Math.round(numeroActual);
}

function sacarPromedio(notas) {
	const total = notas.reduce(obtenerSuma, 0);
	return (total / notas.length).toFixed(2);
}

function mostrarResultado(modulo, notas) {
	get(`${modulo}-nota1`).textContent = nota1;
	get(`${modulo}-nota2`).textContent = nota2;
	get(`${modulo}-nota3`).textContent = nota3;
	get(`${modulo}-promedio`).textContent = sacarPromedio(notas);
}

function pedirNotas(evento) {
	const modulo = evento.target.id.split("_");
	nota1 = +prompt("Escriba la nota 1 [" + modulo[1].toUpperCase() + "]:");
	nota2 = +prompt("Escriba la nota 2 [" + modulo[1].toUpperCase() + "]:");
	nota3 = +prompt("Escriba la nota 3 [" + modulo[1].toUpperCase() + "]:");
	const notas = [nota1, nota2, nota3];
	validado = validarEntradas(notas);
	if (!validado) {
		confirm('Números inválidos, ¿Quieres volver a intentar?')
		? pedirNotas(evento)
		: 0
	} else {
		mostrarResultado(modulo[1], notas)
	}
}

let botones = document.querySelectorAll("button[id^='btn']")
botones.forEach((boton) => {
	boton.addEventListener('click', pedirNotas)
});