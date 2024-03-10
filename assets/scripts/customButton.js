const template = document.createElement('template');

template.innerHTML = /*HTML*/`
<style>
button {
	position: absolute;
}
</style>
`

export class CustomButton extends HTMLElement {

	constructor(){
		super();
		this.attachShadow({mode: 'open'});
	}

	btn = this.getAttribute("data-btn");

	connectedCallback(){
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}