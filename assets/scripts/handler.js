if (document.getElementById('ifr') !== null) {
	document.getElementById("ifr").onload = function() {
		document.querySelector('.lds-spinner').style.display = 'none';
	}
}

const textToSpeech = (text) => {
	let utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "es-CL";
	speechSynthesis.speak(utterance);
}

window.addEventListener('scroll', () => {
	if(window.scrollY > 500){
		// document.body.appendChild(document.createElement("enidev-button"));
	} else {
		// this.button.style.right = "-140px";
		console.log('.')
	}
});