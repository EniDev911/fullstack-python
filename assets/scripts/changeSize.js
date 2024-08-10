// Tamaño de fuente por defecto
const defaultFontSize = 16;

// Aumentar el tamaño de la fuente
function increaseFontSize(e) {
	const element = e.parentElement.nextSibling.nextSibling.querySelector('code');
	let currentSize = window.getComputedStyle(element).fontSize;
	currentSize = parseFloat(currentSize);
    element.style.fontSize = 22 + 'px'; // Aumenta en 2px
}

// Disminuir el tamaño de la fuente
function decreaseFontSize(e) {
	const element = e.parentElement.nextSibling.nextSibling.querySelector('code');
	let currentSize = window.getComputedStyle(element).fontSize;
	currentSize = parseFloat(currentSize);
    element.style.fontSize = 16 + 'px'; // Disminuye en 2px
}
