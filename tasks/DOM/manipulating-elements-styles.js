//---------------------------------------------------------------------------------------
// Стили и классы
//---------------------------------------------------------------------------------------

// Cуществует два способа задания стилей для элемента:
// - Создать класс в CSS и использовать его: <div class="...">
// - Писать стили непосредственно в атрибуте style: <div style="...">


const newElementDiv = document.createElement("div"); // создаем элемент

newElementDiv.innerText = "span element context /n span element context /n span element context /n span element context /n span element context"; // добавляем контекст

document.body.prepend(newElementDiv); // вставляем в body


//---------------------------------------------------------------------------------------
// className
//---------------------------------------------------------------------------------------

newElementDiv.className = "classOne classTwo"; // заменяет всю строку с классами
console.log(newElementDiv.className); // выводит значение аттрибута class


//---------------------------------------------------------------------------------------
// classList
//---------------------------------------------------------------------------------------

// elem.classList – это специальный объект с методами для добавления/удаления одного класса.
// Методы classList:
//  - elem.classList.add/remove("class") – добавить/удалить класс.
//  - elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
//  - elem.classList.contains("class") – проверка наличия класса, возвращает true/false.

newElementDiv.classList.add("byClassListOne");

newElementDiv.classList.toggle("byClassListOne");

newElementDiv.classList.toggle("byClassListOne");
console.log(newElementDiv.classList.contains("byClassListOne"));

newElementDiv.classList.remove("byClassListOne");
console.log(newElementDiv.classList.contains("byClassListOne"));


//---------------------------------------------------------------------------------------
// getComputedStyle
//---------------------------------------------------------------------------------------

// getComputedStyle(element, [pseudo]), где
// element - Элемент, значения для которого нужно получить
// pseudo - Указывается, если нужен стиль псевдоэлемента, например ::before. Пустая строка или отсутствие аргумента означают сам элемент. 
const stylesElement = getComputedStyle(newElementDiv);
console.log(stylesElement); // объект со стилями текущего элемента. Только для чтения.


//---------------------------------------------------------------------------------------
// height & width element
//---------------------------------------------------------------------------------------

//Почему мы должны использовать свойства-метрики вместо этого? На то есть две причины:
// - Во-первых, CSS-свойства width/height зависят от другого свойства – box-sizing, которое определяет,
// «что такое», собственно, эти CSS-ширина и высота. Получается, что изменение box-sizing, к примеру, 
// для более удобной вёрстки, сломает такой JavaScript.
// - Во-вторых, в CSS свойства width/height могут быть равны auto,
console.log("elem.style.width:", newElementDiv.style.width); // Не стоит использовать
console.log("elem.style.height:", newElementDiv.style.height); // Не стоит использовать
console.log("getComputedStyle(elem).width:", stylesElement.width); // Не стоит использовать
console.log("getComputedStyle(elem).height:", stylesElement.height); // Не стоит использовать

// В свойстве offsetParent находится предок элемента, который используется внутри браузера для вычисления координат при рендеринге.
// То есть, ближайший предок, который удовлетворяет следующим условиям:
//  - Является CSS-позиционированным (CSS-свойство position равно absolute, relative, fixed или sticky),
//  - или <td>, <th>, <table>,
//  - или <body>.
console.log("offsetParent:", newElementDiv.offsetParent);

// offsetLeft/offsetTop - содержат координаты x/y относительно верхнего левого угла offsetParent.
console.log("offsetLeft:", newElementDiv.offsetLeft);
console.log("offsetTop:", newElementDiv.offsetTop);

// offsetWidth, offsetHeight - cодержат «внешнюю» ширину/высоту элемента, то есть его полный размер, включая рамки.
console.log("offsetWidth:", newElementDiv.offsetWidth);
console.log("offsetHeight:", newElementDiv.offsetHeight);

// clientTop/Left -  ширина верхней рамки/ширина левой рамки
// …Но на самом деле эти свойства – вовсе не ширины рамок, а отступы внутренней части элемента от внешней.
newElementDiv.style.border = "5px solid red";
console.log("clientTop:", newElementDiv.clientTop);
console.log("clientLeft:", newElementDiv.clientLeft);

// clientWidth/Height - Эти свойства – размер области внутри рамок элемента.
// Они включают в себя ширину области содержимого вместе с внутренними отступами padding, но без прокрутки.
newElementDiv.style.padding = "5px 10px 15px 20px";
console.log("clientWidth:", newElementDiv.clientWidth);
console.log("clientHeight:", newElementDiv.clientHeight);
// Если нет внутренних отступов padding, то clientWidth/Height в точности равны размеру области 
// содержимого внутри рамок и полосы прокрутки (если она есть).

// scrollWidth/Height - Эти свойства – как clientWidth/clientHeight, но также включают в себя прокрученную (которую не видно) часть элемента.
newElementDiv.style.width = "150px";
newElementDiv.style.height = "100px";
newElementDiv.style.overflow = "scroll";
console.log("scrollWidth:", newElementDiv.scrollWidth);
console.log("scrollHeight:", newElementDiv.scrollHeight);

// scrollLeft/scrollTop  – ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.
console.log("scrollLeft:", newElementDiv.scrollLeft);
console.log("scrollTop:", newElementDiv.scrollTop);
