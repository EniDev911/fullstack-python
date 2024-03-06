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

