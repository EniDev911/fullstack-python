if (document.getElementById('ifr') !== null) {
	document.getElementById("ifr").onload = function() {
		document.querySelector('.lds-spinner').style.display = 'none';
	}
}