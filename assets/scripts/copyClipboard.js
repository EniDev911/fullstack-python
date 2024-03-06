// Si estás usando Rouge utiliza .code-header + .highlighter-rouge como selector
// Si no, actualiza el selector
const codeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');
const codeFullscreenButtons = document.querySelectorAll('.code-fullscreen-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  let code = codeBlocks[index].textContent;
  copyCodeButton.addEventListener('click', () => {
    const codeSplit = code.split("\n").filter((ele) => !ele.match(/^[1-9]/))
    window.navigator.clipboard.writeText(codeSplit.join("\n"));
    // Update the button text visually
    const tooltipInstance = bootstrap.Tooltip.getInstance(copyCodeButton);
    tooltipInstance.setContent({ '.tooltip-inner': 'Copiado!'});
    tooltipInstance.show();
    // After 2 seconds, reset the button to its initial UI
    setTimeout(() => {
      tooltipInstance.setContent({ '.tooltip-inner': 'Copiar'});
      tooltipInstance.hide();
    }, 2000);
  });
});

codeFullscreenButtons.forEach((codeFullscreenButton, index) => {
  let code = codeBlocks[index];
  let header = document.querySelectorAll('.code-header')[index];
  codeFullscreenButton.addEventListener('click', () => {
    code.insertAdjacentElement('afterbegin', header);
    if (!document.fullscreenElement) {
      header.children[0].children[0].classList.add('fa-compress');
      header.children[0].children[0].classList.remove('fa-expand');
      code.requestFullscreen();
    } else if (document.exitFullscreen) {
      code.insertAdjacentElement('beforebegin', header);
      header.children[0].children[0].classList.remove('fa-compress');
      header.children[0].children[0].classList.add('fa-expand');
      document.exitFullscreen();
    }
  });
});

// function fullscreenHanler(e) {
  // console.log(e.target.previousSibling.nodeType)
// }

// document.addEventListener('fullscreenchange', fullscreenHanler);
