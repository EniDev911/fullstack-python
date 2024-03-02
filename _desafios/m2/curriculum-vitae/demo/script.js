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

window.onbeforeprint = (event) => {
	let printStyle = document.querySelector("[rel='stylesheet']");

	if (document.head.contains(printStyle)) {
		alert("Si");
		printStyle.parentNode.removeChild(printStyle);
	}
}

