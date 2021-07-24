//---------------------------------------------------------------------------------------
// Cookie
//---------------------------------------------------------------------------------------

// Куки – это небольшие строки данных, которые хранятся непосредственно в браузере.
// Они являются частью HTTP-протокола, определённого в спецификации RFC 6265.

const getTextAreaElementByClass = document.querySelector(".textarea-class");

getTextAreaElementByClass.value = ""; // Очищаем TextArea

// Чтение из document.cookie
// Значение document.cookie состоит из пар ключ=значение, разделённых ;. Каждая пара представляет собой отдельное куки.
getTextAreaElementByClass.value += `document.cookie = ${document.cookie} \n`

// Запись в document.cookie
// Запись в document.cookie обновит только упомянутые в ней куки, но при этом не затронет все остальные.
document.cookie = "user=John";
getTextAreaElementByClass.value += `Write to cookie = ${document.cookie} \n`

// специальные символы (пробелы), требуется кодирование
let myName = "my name";
let value = "John Smith"

// кодирует в my%20name=John%20Smith
document.cookie = encodeURIComponent(myName) + '=' + encodeURIComponent(value);
getTextAreaElementByClass.value += `encodeURIComponent cookie = ${document.cookie} \n`

// path=/mypath
// URL-префикс пути, куки будут доступны для страниц под этим путём. Должен быть абсолютным. По умолчанию используется текущий путь.

// domain=site.com
// Домен, на котором доступны наши куки. На практике, однако, есть ограничения – мы не можем указать здесь какой угодно домен.

// expires, max-age
// По умолчанию, если куки не имеют ни одного из этих параметров, то они удалятся при закрытии браузера. 
// Такие куки называются сессионными («session cookies»).

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;
getTextAreaElementByClass.value += `Expires to cookie = ${document.cookie} \n`

// куки будет удалено через 1 час
document.cookie = "user=John; max-age=3600";
getTextAreaElementByClass.value += `max-age=3600 : ${document.cookie} \n`

// удалим куки (срок действия истекает прямо сейчас)
document.cookie = "user=John; max-age=0";
getTextAreaElementByClass.value += `max-age=0 : ${document.cookie} \n`

// secure 
// Куки следует передавать только по HTTPS-протоколу.
document.cookie = "user=John; secure";

// samesite
// Это ещё одна настройка безопасности, применяется для защиты от так называемой XSRF-атаки (межсайтовая подделка запроса).
// Куки с samesite=strict никогда не отправятся, если пользователь пришёл не с этого же сайта.
document.cookie = "user=John; samesite=strict";

// Куки с samesite=lax защищают от XSRF и при этом не портит впечатление от использования сайта.
document.cookie = "user=John; samesite=lax";

// httpOnly
// Эта настройка запрещает любой доступ к куки из JavaScript.
document.cookie = "user=John; httpOnly";
