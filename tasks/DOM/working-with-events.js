//---------------------------------------------------------------------------------------
// Событие – это сигнал от браузера о том, что что-то произошло.
//---------------------------------------------------------------------------------------

// Обработчики событий
// Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие произошло.
// Есть несколько способов назначить событию обработчик:
// - Атрибут HTML: onclick="...".
// - DOM-свойство: elem.onclick = function.
// - Специальные методы: elem.addEventListener(event, handler[, phase]) для добавления, removeEventListener для удаления.

//---------------------------------------------------------------------------------------
// addEventListener
//---------------------------------------------------------------------------------------

//element.addEventListener(event, handler[, options]), где
//  event -  Имя события, например "click",
//  handler - Ссылка на функцию-обработчик,
//  options - Дополнительный объект со свойствами:
//   = once: если true, тогда обработчик будет автоматически удалён после выполнения.
//   = capture: фаза, на которой должен сработать обработчик (Всплытие и погружение). 
//     Так исторически сложилось, что options может быть false/true, это то же самое, что {capture: false/true}.
//   = passive: если true, то указывает, что обработчик никогда не вызовет preventDefault() (Действия браузера по умолчанию).

// Объект события
// Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве
// аргумента функции-обработчику.

const wrapper = document.querySelector(".wrapper");

const clickHandler = function (event) {
  console.log("event.target:", event.target); // это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен
  console.log("event.currentTarget:", event.currentTarget); //  это «текущий» элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.
  console.log("this:", this);  // = event.currentTarget
}

wrapper.addEventListener("click", clickHandler); // добавляем слушателя события onClick для .wrapper

wrapper.removeEventListener("click", clickHandler); // удаляем слушателя события onClick для .wrapper

//---------------------------------------------------------------------------------------
// Стандарт DOM Events описывает 3 фазы прохода события:
//---------------------------------------------------------------------------------------
//  - Фаза погружения (capturing phase) – событие сначала идёт сверху вниз.
//  - Фаза цели (target phase) – событие достигло целевого(исходного) элемента.
//  - Фаза всплытия (bubbling stage) – событие начинает всплывать.

const clickHandlerCurrentTarget = (event) => {   // создаем функцию обработчик 
  console.log(event.currentTarget);
}

// Погружение
for (const element of document.getElementsByTagName("*")) {
  element.addEventListener('click', clickHandlerCurrentTarget, true); // навешиваем обработчик событий на все элементы в документе
}

// Всплытие
//Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.
for (const element of document.querySelectorAll("*")) {
  element.addEventListener('click', clickHandlerCurrentTarget); // навешиваем обработчик событий на все элементы в документе
}


//---------------------------------------------------------------------------------------
// Прекращение всплытия
//---------------------------------------------------------------------------------------

const buttonElementOne = document.querySelector(".btn-element-one");

buttonElementOne.addEventListener("click", function (event) {
  event.stopPropagation();  // текущее событие полностью обрабатывается и останавливает всплытие.
  alert("Button 1 click");
})

const buttonElementTwo = document.querySelector(".btn-element-two");

buttonElementTwo.addEventListener("click", function (event) {
  event.stopImmediatePropagation();  // предотвращает всплытие и останавливает обработку событий на текущем элементе.
  alert("Button 2 click");
})


//---------------------------------------------------------------------------------------
// Делегирование событий
//---------------------------------------------------------------------------------------

// Если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, 
// то вместо того, чтобы назначать обработчик каждому, мы ставим один обработчик на их общего предка.

wrapper.addEventListener("click", (event) => {
  event.target.style.background = "gray"; // меняем цвет background на нажатом элементе
})


//---------------------------------------------------------------------------------------
// Действия браузера по умолчанию
//---------------------------------------------------------------------------------------

// Есть два способа отменить действие браузера:
//   - Основной способ – это воспользоваться объектом event. Для отмены действия браузера существует стандартный метод event.preventDefault().
//   - Если же обработчик назначен через on<событие> (не через addEventListener), то также можно вернуть false из обработчика.

// Свойство event.defaultPrevented установлено в true, если действие по умолчанию было предотвращено, и false, если нет.

const classLinkTo = document.querySelector(".class-link-to");

classLinkTo.addEventListener("click", (event) => {
  console.log("Link without preventDefault, defaultPrevented:", event.defaultPrevented); // event.defaultPrevented
})

classLinkTo.addEventListener("click", (event) => {
  event.preventDefault();   // event.preventDefault
  console.log("Link with preventDefault, defaultPrevented:", event.defaultPrevented); // event.defaultPrevented
});

classLinkTo.addEventListener("click", () => { return false });


//---------------------------------------------------------------------------------------
// Генерация пользовательских событий
//---------------------------------------------------------------------------------------

// Конструктор Event

// let event = new Event(type[, options]), где
//   - type – тип события, строка, например "click" или же любой придуманный нами – "my-event".
//   - options – объект с тремя необязательными свойствами:
//       = bubbles: true/false – если true, тогда событие всплывает.
//       = cancelable: true/false – если true, тогда можно отменить действие по умолчанию. Позже мы разберём, что это значит для пользовательских событий.
//       = composed: true/false – если true, тогда событие будет всплывать наружу за пределы Shadow DOM. Позже мы разберём это в разделе Веб-компоненты.

// После того, как объект события создан, мы должны запустить его на элементе, вызвав метод elem.dispatchEvent(event).

const checkboxElementByClass = document.querySelector(".class-checkbox");

checkboxElementByClass.addEventListener("click", (event) => {
  console.log("Сгенерированное событие click на checkboxElementByClass, isTrusted:", event.isTrusted); // ловим на checkboxElementByClass
})

const newEventCheckbox = new Event("click", { bubbles: true });  // создаем
checkboxElementByClass.dispatchEvent(newEventCheckbox);   // ...запуск события на элементе!

// Для генерации событий совершенно новых типов, следует использовать конструктор new CustomEvent. 
// У второго аргумента-объекта есть дополнительное свойство detail

checkboxElementByClass.addEventListener("myClick", (event) => {
  console.log(event.detail.name)
})

const newCustomEventCheckbox = new CustomEvent("myClick", { detail: { name: "Сгенерированное событие myClick" } });  // создаем
checkboxElementByClass.dispatchEvent(newCustomEventCheckbox);   // ...запуск события на элементе!


//---------------------------------------------------------------------------------------
// Загрузка документа и ресурсов
//---------------------------------------------------------------------------------------

// Событие DOMContentLoaded – DOM готов, так что обработчик может искать DOM-узлы и инициализировать интерфейс.
// Событие load – внешние ресурсы были загружены, стили применены, размеры картинок известны и т.д.
// Событие beforeunload – пользователь покидает страницу. Мы можем проверить, сохранил ли он изменения и спросить, на самом ли деле он хочет уйти.
// unload – пользователь почти ушёл, но мы всё ещё можем запустить некоторые операции, например, отправить статистику.

const DOMContentLoadedHandler = () => {
  console.log("DOMContentLoaded:", 'DOM готов');
}

document.addEventListener("DOMContentLoaded", DOMContentLoadedHandler);

window.onload = function () { console.log("window.onload:", 'Страница загружена') };
window.onbeforeunload = function () { return false };
window.unload = function () { console.log("Сохраняем данные") };

//---------------------------------------------------------------------------------------
// Типы событий мыши
//---------------------------------------------------------------------------------------

// Простые события:
// mousedown/mouseup -   Кнопка мыши нажата/отпущена над элементом.
// mouseover/mouseout -   Курсор мыши появляется над элементом и уходит с него.
// mousemove -    Каждое движение мыши над элементом генерирует это событие.
// contextmenu -   Вызывается при попытке открытия контекстного меню, как правило, нажатием правой кнопки мыши.
// Но, заметим, это не совсем событие мыши, оно может вызываться и специальной клавишей клавиатуры.

// Комплексные события:
// click -   Вызывается при mousedown , а затем mouseup над одним и тем же элементом, если использовалась левая кнопка мыши.
// dblclick -   Вызывается двойным кликом на элементе. 

const elementMouseBoxOne = document.querySelector(".mouse-events__box-one");

elementMouseBoxOne.addEventListener('mouseup', () => { console.log("mouseup event box-one") });
elementMouseBoxOne.addEventListener('mousedown', () => { console.log("mousedown event box-one") });
elementMouseBoxOne.addEventListener('mouseover', () => { console.log("mouseover event box-one") });
elementMouseBoxOne.addEventListener('mouseout', () => { console.log("mouseout event box-one") });
elementMouseBoxOne.addEventListener('contextmenu', () => { console.log("contextmenu event box-one") });

const elementMouseBoxTwo = document.querySelector(".mouse-events__box-two");

elementMouseBoxTwo.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log("click event box-one")
});

elementMouseBoxTwo.addEventListener('dblclick', (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log("dblclick event box-one")
});

// События, связанные с кликом, всегда имеют свойство which, которое позволяет определить нажатую кнопку мыши.

const elementMouseBoxThree = document.querySelector(".mouse-events__box-three");

elementMouseBoxThree.addEventListener('mouseup', (event) => {
  switch (event.which) {
    case 1: { console.log("1 – левая кнопка мыши"); break; };
    case 2: { console.log("2 – средняя кнопка мыши"); break; };
    case 3: { console.log("3 – правая кнопка мыши"); break; };
  }
});


//---------------------------------------------------------------------------------------
// События клавиатуры
//---------------------------------------------------------------------------------------

// Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
// Свойство key объекта события позволяет получить символ, а свойство code – «физический код клавиши».

const elementByClassKeyboardEvents = document.querySelector(".keyboard-events__textarea");

elementByClassKeyboardEvents.value = "KeyBoard"

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  elementByClassKeyboardEvents.value += " | " + event.key + "=" + event.code + " | ";
})


//---------------------------------------------------------------------------------------
// События прокрутки
//---------------------------------------------------------------------------------------

// Событие прокрутки scroll позволяет реагировать на прокрутку страницы или элемента. Есть много хороших вещей, которые при этом можно сделать.

const elementByClassScrollEvents = document.querySelector(".scroll-events__textarea");

window.addEventListener('scroll', () => {
  document.querySelector('.scroll-events__textarea').innerHTML = `Scroll pageYOffset= ${pageYOffset}px  Scroll pageXOffset= ${pageXOffset}px`;
});


//---------------------------------------------------------------------------------------
// Фокусировка: focus/blur
//---------------------------------------------------------------------------------------

// События focus и blur срабатывают на фокусировке/потере фокуса элемента.
// Второе решение: события focusin и focusout – такие же, как и focus/blur, но они всплывают.
// Их особенности:
//  - Они не всплывают. Но можно использовать фазу перехвата или focusin/focusout.
//  - Большинство элементов не поддерживают фокусировку по умолчанию. Используйте tabindex, чтобы сделать фокусируемым любой элемент.


elementByClassKeyboardEvents.focus();
elementByClassKeyboardEvents.blur()

elementByClassKeyboardEvents.setAttribute("tabindex", 1);
elementByClassScrollEvents.setAttribute("tabindex", 2);

//---------------------------------------------------------------------------------------
// Событие: change
//---------------------------------------------------------------------------------------

// Событие change срабатывает по окончании изменения элемента.

elementByClassKeyboardEvents.addEventListener("change", function () {
  console.log("Изменение элемента text-area с классом .keyboard-events__textarea")
})


//---------------------------------------------------------------------------------------
// MutationObserver: наблюдатель за изменениями
//---------------------------------------------------------------------------------------

// MutationObserver – это встроенный объект, наблюдающий за DOM-элементом и запускающий колбэк в случае изменений.

// let observer = new MutationObserver(callback);
//
// observer.observe(node, config);
// 
// config – это объект с булевыми параметрами «на какие изменения реагировать»:
//  - childList – изменения в непосредственных детях node,
//  - subtree – во всех потомках node,
//  - attributes – в атрибутах node,
//  - attributeFilter – массив имён атрибутов, чтобы наблюдать только за выбранными.
//  - characterData – наблюдать ли за node.data (текстовое содержимое),
// 
// И ещё пара опций:
//  - characterDataOldValue – если true, будет передавать и старое и новое значение node.data в колбэк (см далее), иначе только новое (также требуется опция characterData),
//  - attributeOldValue – если true, будет передавать и старое и новое старое значение атрибута в колбэк (см далее), иначе только новое (также требуется опция attributes).

// Затем, после изменений, выполняется callback, в который изменения передаются первым аргументом как список объектов MutationRecord, а сам наблюдатель идёт вторым аргументом.
// 
// Объекты MutationRecord имеют следующие свойства:
// - type – тип изменения, один из:
//         "attributes" изменён атрибут,
//         "characterData" изменены данные elem.data, это для текстовых узлов
//         "childList" добавлены/удалены дочерние элементы,
// - target – где произошло изменение: элемент для "attributes", текстовый узел для "characterData" или элемент для "childList",
// - addedNodes/removedNodes – добавленные/удалённые узлы,
// - previousSibling/nextSibling – предыдущий или следующий одноуровневый элемент для добавленных/удалённых элементов,
// - attributeName/attributeNamespace – имя/пространство имён (для XML) изменённого атрибута,
// - oldValue – предыдущее значение, только для изменений атрибута или текста, если включена соответствующая опция attributeOldValue/characterDataOldValue.

const observer = new MutationObserver((mutationRecords) => {
  console.log("MutationObserver : ", mutationRecords);
});

observer.observe(elementByClassKeyboardEvents, {
  characterData: true,
  characterDataOldValue: true
});
