document.querySelectorAll("img[alt*='img']").forEach(element => {
  element.style.cursor = "zoom-in";
  element.addEventListener("click", () => {
    let params = 'width='+screen.width;
      params += ', height='+screen.height;
      params += ', top=0, left=0';
      params += ', scrollbars=no';
     window.open(element.src, '_blank', params);
  })
})