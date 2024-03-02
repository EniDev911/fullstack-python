// let css = document.querySelector("[rel='stylesheet']");
// let parent = css.parentNode;
// const toggleCss = () => {
// 	if (document.head.contains(css)) {
// 		parent.removeChild(css);
// 		document.getElementById("btn").innerHTML = "CENTRAR"
// 		document.body.style.fontFamily = "monospace";
// 		document.body.style.fontSize = "18px";
// 	} else {
// 		parent.appendChild(css);
// 		document.getElementById("btn").innerHTML = "REMOVER"
// 	}
// }

let printStyle = document.querySelector("link[media='print']");
window.onbeforeprint = (event) => {
	if (!document.head.contains(printStyle)) {
		printStyle.parentNode.appendChild(printStyle);
	}
}

window.onafterprint = (event) => {
	if (document.head.contains(printStyle)) {
		printStyle.parentNode.removeChild(printStyle);
	}
}

