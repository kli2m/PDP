//---------------------------------------------------------------------------------------
// History
//---------------------------------------------------------------------------------------

// History интерфейс позволяет манипулировать историей браузера в пределах сессии, а именно историей
// о посещённых страницах в пределах вкладки или фрейма загруженного внутри страницы. 

const getTextAreaElementByClass = document.querySelector(".textarea-class");

getTextAreaElementByClass.value = ""; // Очищаем TextArea

getTextAreaElementByClass.value += `window.history= ${window.history} \n`

// Свойства
getTextAreaElementByClass.value += `\nСвойства: \n`

// History.length -  Возвращает целочисленное значение типа Integer, которое характеризует собой количество записей в истории сессии, включая текущую загруженную страницу. 
getTextAreaElementByClass.value += `history.length= ${history.length} \n`

// History.state -  Возвращает какое-либо значение, представляющее собой состояние в вершине истории стека.
getTextAreaElementByClass.value += `history.state= ${history.state} \n`

// Методы
getTextAreaElementByClass.value += `\nМетоды \n`

// History.back() -  Делает вызов предыдущей страницы из истории, если она существует. 
getTextAreaElementByClass.value += `history.back() - Делает вызов предыдущей страницы из истории, если она существует. \n`

// History.forward() -  Переход к следующей странице в истории сессии, то же самое действие, как и при нажатии пользователем кнопки Forward в браузере.
getTextAreaElementByClass.value += `history.forward() - Переход к следующей странице в истории сессии. \n`

// History.go() -  Загружает страницу из истории сессии, определяя её положение относительно текущей страницы
getTextAreaElementByClass.value += `history.go() - Загружает страницу из истории сессии \n`

// History.pushState() -  Помещает полученные данные в стек истории сессии с определённым заголовком и, при наличии , URL. 
getTextAreaElementByClass.value += `history.pushState() - Помещает полученные данные в стек истории сессии с определённым заголовком. \n`

// History.replaceState() -  Обновляет последнюю запись в стеке истории содержащий определённые данные, заголовок и, при наличии, URL. 
getTextAreaElementByClass.value += `history.replaceState() - Обновляет последнюю запись в стеке истории содержащий определённые данные. \n`
