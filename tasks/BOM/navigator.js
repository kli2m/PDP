//---------------------------------------------------------------------------------------
// Navigator
//---------------------------------------------------------------------------------------

// Интерфейс Navigator представляет собой состояние и особенности(свойства) пользовательского агента.
// Это позволяет скриптам узнавать их и самостоятельно регистрироваться для выполнения некоторых действий.

const getTextAreaElementByClass = document.querySelector(".textarea-class");

getTextAreaElementByClass.value = ""; // Очищаем TextArea

getTextAreaElementByClass.value += `window.navigator = ${window.navigator} \n`


// Свойства
getTextAreaElementByClass.value += `\nСвойства: \n`

// NavigatorID.appCodeName -  Возвращает внутренний "код" текущего браузера. Не полагайтесь на это свойство для получения правильного значения.
getTextAreaElementByClass.value += `navigator.appCodeName = ${navigator.appCodeName} \n`

// NavigatorID.appName -  Возвращает DOMString с официальным названием браузера. Не полагайтесь на это свойство для получения правильного значения.
getTextAreaElementByClass.value += `navigator.appName = ${navigator.appName} \n`

// NavigatorID.appVersion -  Возвращает версию браузера как DOMString. Не полагайтесь на это свойство для получения правильного значения.
getTextAreaElementByClass.value += `navigator.appVersion = ${navigator.appVersion} \n`

// Navigator.battery -  Возвращает BatteryManager объект, который вы можете использовать для получения информации о статусе заряда аккумулятора.
getTextAreaElementByClass.value += `navigator.battery = ${navigator.battery} \n`

// NetworkInformation.connection -  Предоставляет Connection  с информацией о сетевом подключении устройства.
getTextAreaElementByClass.value += `navigator.connection = ${navigator.connection} \n`

// NavigatorGeolocation.geolocation -  Возвращает Geolocation объект, позволяющий получить доступ к местоположению устройства.
getTextAreaElementByClass.value += `navigator.geolocation = ${navigator.geolocation} \n`

// NavigatorLanguage.language -  Возвращает DOMString, представляющий предпочитаемый пользователем язык, как правило это язык пользовательского интерфейса браузера. Значение null возвращается, когда язык неизвестен.
getTextAreaElementByClass.value += `navigator.language = ${navigator.language} \n`

// NavigatorLanguage.languages -  Возвращает массив DOMString, представляющий собой языки, известные пользователю, в порядке предпочтения.
getTextAreaElementByClass.value += `navigator.languages = ${navigator.languages} \n`

// NavigatorPlugins.mimeTypes -  Возвращает MimeTypeArray  листинг MIME типов, поддерживаемых браузером.
getTextAreaElementByClass.value += `navigator.mimeTypes = ${navigator.mimeTypes} \n`

// NavigatorOnLine.onLine -  Возвращает Boolean , показывающий работает ли браузер в сети.
getTextAreaElementByClass.value += `navigator.onLine = ${navigator.onLine} \n`

// Navigator.oscpu - Возвращает строку, показывающую имеющуюся операционную систему.
getTextAreaElementByClass.value += `navigator.oscpu = ${navigator.oscpu} \n`

// NavigatorID.platform -  Возвращает строку, показывающую платформу браузера. Не полагайтесь на эту функцию, чтобы получить нужное значение.
getTextAreaElementByClass.value += `navigator.platform = ${navigator.platform} \n`

// NavigatorPlugins.plugins -  Возвращает PluginArray  листинг плагинов, установленных в браузере.
getTextAreaElementByClass.value += `navigator.plugins = ${navigator.plugins} \n`

// NavigatorID.product -  Всегда возвращает 'Gecko', в любом браузере. Это свойство сохраняется только для целей совместимости.
getTextAreaElementByClass.value += `navigator.product = ${navigator.product} \n`

// NavigatorID.userAgent -  Возвращает строку агента пользователя для данного браузера.
getTextAreaElementByClass.value += `navigator.userAgent = ${navigator.userAgent} \n`


// Navigator.serviceWorker -  Возвращает ServiceWorkerContainer объект, который обеспечивает доступ к регистрации, удалению, обновлению и связи с ServiceWorker объектами для соответствующего документа. 
getTextAreaElementByClass.value += `navigator.serviceWorker = ${navigator.serviceWorker} \n`


// Методы
getTextAreaElementByClass.value += `\nМетоды \n`

// NavigatorPlugins.javaEnabled -  Возвращает Boolean  флаг, показывающий включён ли в браузере java или нет.
getTextAreaElementByClass.value += `navigator.javaEnabled() - Возвращает Boolean  флаг, показывающий включён ли в браузере java или нет. \n`

// navigator.registerProtocolHandler -  Разрешает веб-сайту зарегистрировать себя в качестве возможного обработчика для данного протокола.
getTextAreaElementByClass.value += `navigator.registerProtocolHandler() - Разрешает веб-сайту зарегистрировать себя в качестве возможного обработчика для данного протокола. \n`

// navigator.vibrate() -  Причина вибрации устройства с поддержкой её. Не делает ничего, если нет поддержки вибрации.
getTextAreaElementByClass.value += `navigator.vibrate() - Причина вибрации устройства с поддержкой её. \n`

// Проверка на устройство
const detectDevice = () => {
  let result = 'ПК';
  if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
    result = 'mobile'
  } else if (navigator.userAgent.toLowerCase().match(/android/i)) {
    result = 'android'
  } else if (navigator.userAgent.toLowerCase().match(/iphone/i)) {
    result = 'iphone'
  } else if (navigator.userAgent.toLowerCase().match(/ipad/i)) {
    result = 'ipad'
  } else if (navigator.userAgent.toLowerCase().match(/webOS/i)) {
    result = 'webOS'
  } else if (navigator.userAgent.toLowerCase().match(/iPod/i)) {
    result = 'iPod'
  } else if (navigator.userAgent.toLowerCase().match(/BlackBerry/i)) {
    result = 'BlackBerry'
  } else if (navigator.userAgent.toLowerCase().match(/BB/i)) {
    result = 'BB'
  } else if (navigator.userAgent.toLowerCase().match(/PlayBook/i)) {
    result = 'PlayBook'
  } else if (navigator.userAgent.toLowerCase().match(/IEMobile/i)) {
    result = 'IEMobile'
  } else if (navigator.userAgent.toLowerCase().match(/Windows Phone/i)) {
    result = 'Windows Phone'
  } else if (navigator.userAgent.toLowerCase().match(/Kindle/i)) {
    result = 'Kindle'
  } else if (navigator.userAgent.toLowerCase().match(/Silk/i)) {
    result = 'Silk'
  } else if (navigator.userAgent.toLowerCase().match(/Opera Mini/i)) {
    result = 'Opera Mini'
  }
  return result
}

getTextAreaElementByClass.value += `Вы используете ${detectDevice()} \n`;

// Определяем текущий браузер
const detectBrowser = () => {
  let result = 'Other';
  if (navigator.userAgent.indexOf('YaBrowser') !== -1) {
    result = 'Yandex Browser';
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    result = 'Mozilla Firefox';
  } else if (navigator.userAgent.indexOf('MSIE') !== -1) {
    result = 'Internet Exploder';
  } else if (navigator.userAgent.indexOf('Edge') !== -1) {
    result = 'Microsoft Edge';
  } else if (navigator.userAgent.indexOf('Safari') !== -1) {
    result = 'Safari';
  } else if (navigator.userAgent.indexOf('Opera') !== -1) {
    result = 'Opera';
  } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
    result = 'Google Chrome';
  }
  return result;
}

getTextAreaElementByClass.value += `Вы используете браузер = ${detectBrowser()} \n`
