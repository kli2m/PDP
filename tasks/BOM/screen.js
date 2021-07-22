//---------------------------------------------------------------------------------------
// Screen
//---------------------------------------------------------------------------------------

// Интерфейс screen представляет экран, как правило, тот, на котором текущее окно визуализируется.

// Свойства window.screen. (screen.)

const getTextAreaElementByClass = document.querySelector(".textarea-class");

getTextAreaElementByClass.value = ""; // Очищаем TextArea

// Screen.availTop (en-US) -  Возвращает координату по оси y первого пикселя по оси y, но не относящегося к пользовательским элементам интерфейса.
getTextAreaElementByClass.value += `screen.availTop = ${screen.availTop} \n`

// Screen.availLeft (en-US) -  Возвращает первый доступный пиксель от левой стороны экрана.
getTextAreaElementByClass.value += `screen.availLeft = ${screen.availLeft} \n`

// Screen.availHeight (en-US) -  Возвращает высоту экрана в пикселях минус высота пользовательских элементов интерфейса, таких как панель задач в Windows.
getTextAreaElementByClass.value += `screen.availHeight = ${screen.availHeight} \n`

// Screen.availWidth (en-US) -  Возвращает ширину экрана в пикселях.
getTextAreaElementByClass.value += `screen.availWidth = ${screen.availWidth} \n`

// Screen.colorDepth (en-US) -  Возвращает глубину цвета экрана.
getTextAreaElementByClass.value += `screen.colorDepth = ${screen.colorDepth} \n`

// Screen.height (en-US) -  Возвращает высоту экрана в пикселях.
getTextAreaElementByClass.value += `screen.height = ${screen.height} \n`

// Screen.left (en-US) -  Возвращает расстояние в пикселях от левой стороны основного экрана до левой стороны текущего экрана.
getTextAreaElementByClass.value += `screen.left = ${screen.left} \n`

// Screen.orientation (en-US) -  Возвращает текущую ориентацию экрана.
getTextAreaElementByClass.value += `screen.orientation = ${screen.orientation} \n`

// Screen.pixelDepth (en-US) -  Возвращает количество битов на пиксель экрана.
getTextAreaElementByClass.value += `screen.pixelDepth = ${screen.pixelDepth} \n`

// Screen.top (en-US) -  Возвращает расстояние в пикселях от верхней стороны экрана до текущего экрана.
getTextAreaElementByClass.value += `screen.top = ${screen.top} \n`

// Screen.width (en-US) -  Возвращает ширину экрана в пикселях.
getTextAreaElementByClass.value += `screen.width = ${screen.width} \n`
