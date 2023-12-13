// Si estás usando Rouge utiliza .code-header + .highlighter-rouge como selector
// Si no, actualiza el  selector
const codeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  let code = codeBlocks[index].textContent;
  copyCodeButton.addEventListener('click', () => {
    const codeSplit = code.split("\n").filter((ele) => !ele.match(/^[1-9]/))
    // console.log(code.split("\n").filter((ele) => !ele.match(/^[1-9]/)))
    window.navigator.clipboard.writeText(codeSplit.join("\n"));
    // Update the button text visually
    const { innerText: originalText } = copyCodeButton;
    copyCodeButton.innerText = 'Copiado!';

    // (Optional) Toggle a class for styling the button
    copyCodeButton.classList.add('copied');

    // After 2 seconds, reset the button to its initial UI
    setTimeout(() => {
      copyCodeButton.innerText = originalText;
      copyCodeButton.classList.remove('copied');
    }, 2000);
  });
});
