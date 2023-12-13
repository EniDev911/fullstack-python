// This assumes that you're using Rouge; if not, update the selector
const codeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  let code = codeBlocks[index].innerHTML;
  copyCodeButton.addEventListener('click', () => {
    const regexp = /[1-9]/i;
    console.log(regexp.test(code)); // true
    if (code.includes('lineno')){
      code = code.split('class="code">')[1];
    }
    window.navigator.clipboard.writeText(code.replaceAll(/<\/?[^>]+(>|$)/gi, ""));
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
