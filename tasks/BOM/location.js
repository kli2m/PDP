//---------------------------------------------------------------------------------------
// Window.location
//---------------------------------------------------------------------------------------

// Свойство только для чтения Window.location возвращает объект Location с информацией о текущем расположении документа.

const getTextAreaElementByClass = document.querySelector(".textarea-class");

getTextAreaElementByClass.value = ""; // Очищаем TextArea

// Интерфейс Location представляет собой адрес (URL) объекта, с которым он связан
getTextAreaElementByClass.value += `window.location = ${window.location} \n`

// Свойства
getTextAreaElementByClass.value += `\nСвойства: \n`

// Location.href (en-US) -  DOMString, содержащий URL целиком. При изменении, соответствующий документ переходит на новую страницу.
getTextAreaElementByClass.value += `location.href = ${location.href} \n`

// Location.protocol (en-US) -  DOMString, содержащий протокол текущего URL, включая ':'.
getTextAreaElementByClass.value += `location.protocol = ${location.protocol} \n`

// Location.host (en-US) -  DOMString, содержащий хост, а именно имя хоста, ':' и порт.
getTextAreaElementByClass.value += `location.host = ${location.host} \n`

// Location.hostname (en-US) -  DOMString, содержащий домен текущего URL.
getTextAreaElementByClass.value += `location.hostname = ${location.hostname} \n`

// Location.port (en-US) -  DOMString, содержащий номер порта текущего URL.
getTextAreaElementByClass.value += `location.port = ${location.port} \n`

// Location.pathname (en-US) -  DOMString, содержащий первый '/' после хоста с последующим текстом URL.
getTextAreaElementByClass.value += `location.pathname = ${location.pathname} \n`

// Location.search (en-US) -  DOMString, содержащий '?' с последующими параметрами URL.
getTextAreaElementByClass.value += `location.search = ${location.search} \n`

// Location.hash (en-US) -  DOMString, содержащий '#' с последующим идентификатором.
getTextAreaElementByClass.value += `location.hash = ${location.hash} \n`

// Location.username (en-US) -  DOMString, содержащий имя пользователя, указанное перед именем домена.
getTextAreaElementByClass.value += `location.username = ${location.username} \n`

// Location.password (en-US) -  DOMString, содержащий пароль, указанный перед именем домена.
getTextAreaElementByClass.value += `location.password = ${location.password} \n`

// Location.origin (en-US) -  Возвращает DOMString, содержащий протокол, хост и порт текущего URL. 
getTextAreaElementByClass.value += `location.origin = ${location.origin} \n`

// Методы
getTextAreaElementByClass.value += `\nМетоды \n`

// Location.assign() -  Загружает ресурс по URL, указанному в качестве параметра.
getTextAreaElementByClass.value += `location.assign() - Загружает ресурс по URL, указанному в качестве параметра. \n`

// Location.reload() -  Перезагружает ресурс по текущему URL. Единственный опциональный параметр Boolean (en-US) при значении true указывает, что страница должна быть заново загружена с сервера, при значении false страница может быть загружена из кеша.
getTextAreaElementByClass.value += `location.reload() - Перезагружает ресурс по текущему URL. \n`

// Location.replace() -  Заменяет текущий ресурс на новый по URL, указанному в качестве параметра. Отличие от assign() в том, что при использовании replace() текущая страница не будет сохранена в History, и пользователь не сможет использовать кнопку назад, чтобы вернуться к ней.
getTextAreaElementByClass.value += `location.replace() - Заменяет текущий ресурс на новый по URL, указанному в качестве параметра. \n`

// Location.toString() (en-US) -  Возвращает DOMString, содержащий URL целиком. Это синоним URLUtils.href, однако он не может использоваться для изменения значения. 
getTextAreaElementByClass.value += `location.toString() = ${location.toString()} \n`
