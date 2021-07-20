//---------------------------------------------------------------------------------------
// Manipulating elements
//---------------------------------------------------------------------------------------

const elementById = document.getElementById("navigate-id");

/**
* Создаём новые элементы с заданным тегом:
* @param Tag
* @returns Element
*/
const newElementUl = document.createElement('ul');
newElementUl.className = "navigate__list"; // добавляем атрибут названия класса

/**
*  Функция создания элемента с тегом, классом и текстом в аргументах
* @param TagName
* @param className
* @param innerHTML
* @returns Element
*/
const createTagElement = (tag = "div", className = "noName", text = "noText") => {
    // создание елемента
    const newElement = document.createElement(tag);
    // возможность добавления нескольких классов    
    className.split(" ").forEach(className => newElement.classList.add(className));
    // добавление контента
    newElement.innerHTML = text;

    return newElement;
}


//---------------------------------------------------------------------------------------
// Методы разных вариантов вставки:
//---------------------------------------------------------------------------------------

/**
* node.append(...nodes or strings) – добавляет узлы или строки в конец node
* @param Element
* @returns undefined
*/
elementById.append(newElementUl);
elementById.appendChild(newElementUl); // Устаревший метод

// Находим элемент с классом .navigate__list
const elementNavList = document.querySelector(".navigate__list");

/**
* node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
* node.before(...nodes or strings) –- вставляет узлы или строки до node,
* node.after(...nodes or strings) –- вставляет узлы или строки после node,
* node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
* @param Element
* @returns undefined
*/
elementNavList.prepend(createTagElement("li", "navigate__list_item prepend", "prepend"));

// Находим элемент с классом .prepend (первый элемент c тегом Li)
const elementListItemPrepend = document.querySelector(".prepend");

elementListItemPrepend.before(createTagElement("li", "navigate__list_item before", "before"));

// Находим элемент с классом .before 
const elementListItemBefore = document.querySelector(".before");

elementListItemPrepend.after(createTagElement("li", "navigate__list_item after", "after"));

// Находим элемент с классом .after 
const elementListItemAfter = document.querySelector(".after");

elementListItemBefore.replaceWith(elementListItemAfter);


//---------------------------------------------------------------------------------------
// innerText vs innerHTML vs textContent
//---------------------------------------------------------------------------------------

const elementTestClassDiv = document.querySelector(".testClassDiv");

// innerText
console.log("innerText:", elementTestClassDiv.innerText); // Выводит видимый контент
// innerHTML
console.log("innerHTML:", elementTestClassDiv.innerHTML); // Выводит все содержимое в виде строки, включая теги элементов
// textContent
console.log("textContent:", elementTestClassDiv.textContent); // Выводит видимый и невидимый контент


//---------------------------------------------------------------------------------------
// Универсальный метод: elem.insertAdjacentHTML(where, html)
//---------------------------------------------------------------------------------------

// Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Значение должно 
// быть одним из следующих:"beforebegin,"afterbegin","beforeend","afterend".
// Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».

/**
* Универсальный метод: elem.insertAdjacentHTML(where, html)
* @param ("beforebegin"|"afterbegin"|"beforeend"|"afterend")
* @param HTML 
* @returns undefined
*/
//     "beforebegin" – вставить html непосредственно перед elem,
elementListItemAfter.insertAdjacentHTML("beforebegin", "<li class=\"navigate__list_item beforebegin\">beforebegin</li>")

//     "afterbegin" – вставить html в начало elem,
elementNavList.insertAdjacentHTML("afterbegin", "<li class=\"navigate__list_item afterbegin\">afterbegin</li>")

//     "beforeend" – вставить html в конец elem,
elementNavList.insertAdjacentHTML("beforeend", "<li class=\"navigate__list_item beforeend\">beforeend</li>")

//     "afterend" – вставить html непосредственно после elem.
elementListItemAfter.insertAdjacentHTML("afterend", "<li class=\"navigate__list_item afterend\">afterend</li>")

// У метода есть два брата:

//     elem.insertAdjacentText(where, text) – такой же синтаксис, но строка text вставляется «как текст», вместо HTML,
//     elem.insertAdjacentElement(where, elem) – такой же синтаксис, но вставляет элемент elem.

// Они существуют, в основном, чтобы унифицировать синтаксис. На практике часто используется только insertAdjacentHTML. 
// Потому что для элементов и текста у нас есть методы append/prepend/before/after – их быстрее написать, и они могут
// вставлять как узлы, так и текст.


//---------------------------------------------------------------------------------------
// Удаление узлов
//---------------------------------------------------------------------------------------

/**
* Удаление узла remove()
* @returns undefined
*/
elementListItemPrepend.remove()

/**
* Удаление узла removeChild()
* @param Node
* @returns Element
*/
elementNavList.removeChild(elementListItemAfter) // Устаревший метод


//---------------------------------------------------------------------------------------
// Клонирование узлов
//---------------------------------------------------------------------------------------

// Вызов elem.cloneNode(true) создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами. 
// Если мы вызовем elem.cloneNode(false), тогда клон будет без дочерних элементов.

const elementListItemBeforeBegin = document.querySelector(".beforebegin");

/**
* Клонирование узла cloneNode()
* @param Boolean
* @returns Element
*/
elementNavList.append(elementListItemBeforeBegin.cloneNode(true));
elementNavList.append(elementListItemBeforeBegin.cloneNode(false)); // отсутствует контекст "beforebegin" 


//---------------------------------------------------------------------------------------
// DocumentFragment
//---------------------------------------------------------------------------------------

// DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов.
// Мы можем добавить к нему другие узлы, но когда мы вставляем его куда-то, он «исчезает», вместо него
// вставляется его содержимое.

const fragment = new DocumentFragment(); // создаем объект DocumentFragment

/**
* fragment.append()
* @param Element | Node
* @returns undefined
*/
fragment.append(createTagElement("li", "navigate__list_item fragmentOne", "fragmentOne"));
fragment.append(createTagElement("li", "navigate__list_item fragmentTwo", "fragmentTwo"));
fragment.append(createTagElement("li", "navigate__list_item fragmentThree", "fragmentThree"));

elementNavList.append(fragment);
