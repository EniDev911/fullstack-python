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
      header.querySelector('.fsc').classList.add('fa-compress');
      header.querySelector('.fsc').classList.remove('fa-expand');
      code.requestFullscreen();
    } else if (document.exitFullscreen) {
      code.insertAdjacentElement('beforebegin', header);
      header.querySelector('.fsc').classList.remove('fa-compress');
      header.querySelector('.fsc').classList.add('fa-expand');
      document.exitFullscreen();
    }
  });
});

document.querySelectorAll("[data-color*='#']").forEach(ele => {
  ele.addEventListener('click', () => {
    color = getComputedStyle(ele).getPropertyValue('--color');
    window.navigator.clipboard.writeText(color);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      title: "<h5>Copiado!</h5>",
      background: '#020304',
      width: '220px',
      showClass: {
        popup: `
        animate__animated
        animate__fadeInDown
        animate__faster
        p-0
        `
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutUp
        animate__faster
        p-0
        `
      }
    });
  })
})

function copyClipboard(content) {
  const codeSplit = content.split("\n").filter((ele) => !ele.match(/^[1-9]/))
  window.navigator.clipboard.writeText(codeSplit.join("\n"));
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    title: "<h5>Copiado!</h5>",
    background: '#020304',
    width: '220px',
    showClass: {
      popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
      p-0
      `
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
      p-0
      `
    }
  });
}

const playCodeButtons = document.querySelectorAll('.code-play-button');

playCodeButtons.forEach((playCodeButton, index) => {
  let code = playCodeButton.parentElement.nextSibling.nextSibling.textContent;
  playCodeButton.addEventListener('click', () => {
    const codeSplit = code.split("\n").filter((ele) => !ele.match(/^[1-9]/))
    openCompiler(codeSplit.join("\n"));
  })
});

function openCompiler(content, lang = "python", ext = "py") {
  const ifr = document.createElement("iframe");
  ifr.src = 'https://onecompiler.com/embed/?hideNewFileOption=true&hideNew=true&hideLanguageSelection=true&theme=dark&hideStdin=true&hideTitle=true&listenToEvents=true&codeChangeEvent=true';
  ifr.width = "100%";
  ifr.frameBorder = "0"
  ifr.style.height = "100vh";
  ifr.allowFullscreen = "true";
  const childWindow = window.open("", "_blank");
  childWindow.document.body.style.boxSizing = "border-box"
  childWindow.document.body.style.padding = "0"
  childWindow.document.body.style.margin = "0"
  childWindow.document.body.appendChild(ifr);
  const eliminarCookies = () => {
    childWindow.document.cookie.split(";").forEach(function (c) {
      childWindow.document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  }
  ifr.onload = () => {
    ifr.contentWindow.postMessage({
      eventType: 'populateCode',
      language: lang,
      files: [
      {
        "name": "911." + ext,
        "content": content.trim()
      }
      ]
    }, "*");

    ifr.contentWindow.postMessage({
      eventType: 'triggerRun'
    }, '*')
  }
  childWindow.document.onreadystatechange = () => {
    if (childWindow.document.readyState === "interactive") {
      eliminarCookies()
    }
    if (childWindow.document.readyState === "complete") {
      childWindow.console.log(childWindow.document.cookie)
    }
  }
}
