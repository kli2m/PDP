//---------------------------------------------------------------------------------------
// HTML Attributes & DOM Object's
//---------------------------------------------------------------------------------------

// ## В HTML у тегов могут быть атрибуты. Когда браузер парсит HTML, чтобы создать DOM-объекты для 
//    тегов, он распознаёт стандартные атрибуты и создаёт DOM-свойства для них.
//    - Нестандартные аттрибуты не получают соответствующее свойство
//    - Cтандартный атрибут для одного тега может быть нестандартным для другого.

// DOM-свойства и методы ведут себя так же, как и обычные объекты JavaScript:
// - Им можно присвоить любое значение.
// - Они регистрозависимы (нужно писать elem.nodeType, не elem.NoDeTyPe).

// Все атрибуты доступны с помощью следующих методов:

//    elem.hasAttribute(name) – проверяет наличие атрибута.
//    elem.getAttribute(name) – получает значение атрибута.
//    elem.setAttribute(name, value) – устанавливает значение атрибута.
//    elem.removeAttribute(name) – удаляет атрибут.


const newElementDiv = document.createElement("div"); // создаем элемент

newElementDiv.innerText = "div element context"; // добавляем контекст

document.body.prepend(newElementDiv); // вставляем в body


newElementDiv.setAttribute("class", "classDivElement");
newElementDiv.setAttribute("style", "font-size:2rem;color:red;");

const styleDiv = newElementDiv.getAttribute("style");
console.log(styleDiv)

let isClass = newElementDiv.hasAttribute("class");
console.log(isClass)

newElementDiv.removeAttribute("class");

isClass = newElementDiv.hasAttribute("class");
console.log(isClass)