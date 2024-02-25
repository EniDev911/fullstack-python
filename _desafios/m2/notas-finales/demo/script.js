// variables globales
var validado;
var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
let get = (id) => document.getElementById(id);

function validarEntradas(valores) {
    const regexp = /^([.,0-9])*$/
    return valores.every(valor => regexp.test(valor));
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

function sacarPromedio(valores) {
    const total = valores.reduce((acc, currentValue) => acc + currentValue, 0);
    return (total / valores.length).toFixed(2);
}

function mostrarResultado(modulo, notas) {
    get(`${modulo}-nota1`).textContent = notas[0];
    get(`${modulo}-nota2`).textContent = notas[1];
    get(`${modulo}-nota3`).textContent = notas[2];
    get(`${modulo}-promedio`).textContent = sacarPromedio(notas);
}

get("btn_html").addEventListener('click', pedirNotas)
get("btn_css").addEventListener('click', pedirNotas)
get("btn_js").addEventListener('click', pedirNotas)