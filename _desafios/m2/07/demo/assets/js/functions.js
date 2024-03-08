const myCarouselElement = document.querySelector('#my-carousel');

// requerimiento 2: habilitar los tooltip de bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// requerimiento 3: Incluir un tooltip "Enviar por correo" al botón de correo
$(document).ready(function () {
  $("#boton-correo").on("click", function (event) {
    event.preventDefault();
    alert("Correo enviado");
  })
  // requerimiento 4: Incluir un tooltip "Enviar por correo" al botón de correo
  $("h4").dblclick(function () {
    $(this).css({
      "color": "red"
    })
  })
  // requerimitneo 5: usar el método toggle desaparcer/aparecer el contenido en todas las tarjetas
  $(".card-title").click(function () {
    $(this).next().toggle("slow")
  })
})

myCarouselElement.addEventListener('slide.bs.carousel', event => {
  // cuando completo la transición de cambio de diapositiva...
  document.querySelectorAll(".indicador").forEach(el => {
    el.classList.toggle("active")
  })
})