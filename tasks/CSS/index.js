const getElementsInputDisabled = document.querySelectorAll('.disable-btn-group_input');

getElementsInputDisabled.forEach(element => {

  element.checked = false;

  element.addEventListener("change", (event) => {

    const getElementsBlackGroupInput = document.querySelectorAll('.input-black-group');
    const getElementsGreenGroupInput = document.querySelectorAll('.input-green-group');
    const getElementsRedGroupInput = document.querySelectorAll('.input-red-group');

    if (event.target.checked) {
      if (element.classList.contains('disabled-btn-group_black')) {
        getElementsBlackGroupInput.forEach(element => element.setAttribute("disabled", true));
      } else if (element.classList.contains('disabled-btn-group_green')) {
        getElementsGreenGroupInput.forEach(element => element.setAttribute("disabled", true));
      } else if (element.classList.contains('disabled-btn-group_red')) {
        getElementsRedGroupInput.forEach(element => element.setAttribute("disabled", true));
      }
    } else {
      if (element.classList.contains('disabled-btn-group_black')) {
        getElementsBlackGroupInput.forEach(element => element.removeAttribute("disabled"));
      } else if (element.classList.contains('disabled-btn-group_green')) {
        getElementsGreenGroupInput.forEach(element => element.removeAttribute("disabled"));
      } else if (element.classList.contains('disabled-btn-group_red')) {
        getElementsRedGroupInput.forEach(element => element.removeAttribute("disabled"));
      }
    }
  })

})
