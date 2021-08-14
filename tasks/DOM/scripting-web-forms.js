//---------------------------------------------------------------------------------------
// Свойства и методы формы
//---------------------------------------------------------------------------------------

/**
* Формы в документе входят в специальную коллекцию document.forms.
* @returns HTMLCollection
*/
const elementsForms = document.forms;
console.log("document.forms. : ", elementsForms);

const elementForm = document.forms.myForm; // обратиться по имени
console.log("element Form : ", elementForm);

/**
* Любой элемент доступен в именованной коллекции form.elements
* @returns HTMLFormControlsCollection
*/
const collectionElementsForm = elementForm.elements;
console.log("form.elements : ", collectionElementsForm);

const getInputTypeText = elementForm.elements.inputTypeText;  // обратиться по имени элемента
console.log("getInputTypeText : ", getInputTypeText);

// Форма может содержать один или несколько элементов <fieldset> внутри себя.
// Они также поддерживают свойство elements, в котором находятся элементы управления внутри них.

const fieldsetElement = elementForm.elements.fieldsetElement;

console.log("fieldset.elements.element === form.elements.element: ", fieldsetElement.elements.fieldsetInputTypeText === elementForm.elements.fieldsetInputTypeText);

// Обратная ссылка: element.form
// Форма ссылается на все элементы, а эти элементы ссылаются на форму.

console.log("element.form === form.element : ", getInputTypeText.form === elementForm);


//---------------------------------------------------------------------------------------
// Элементы формы
//---------------------------------------------------------------------------------------

// input и textarea
// К их значению можно получить доступ через свойство input.value (строка)

getInputTypeText.value = "typeText"; // устанавливаем значение
console.log("getInputTypeText.value : ", getInputTypeText.value); // выводим текущее значение

const getTextAreaElement = myForm.elements.textArea; // получаем элемент textarea

getTextAreaElement.value = "textArea"; // устанавливаем значение
console.log("getTextAreaElement.value : ", getTextAreaElement.value); // выводим текущее значение

// checkbox
// К его значению можно получить доступ через свойство input.checked (булево значение)

const inputTypeCheckbox = myForm.elements.inputTypeCheckbox; // получаем элемент textarea

inputTypeCheckbox.value = true;       // устанавливаем значение
console.log("inputTypeCheckbox.value : ", inputTypeCheckbox.value); // выводим текущее значение

// select и option
// Элемент <select> имеет 3 важных свойства:
//     select.options – коллекция из подэлементов <option>,
//     select.value – значение выбранного в данный момент <option>,
//     select.selectedIndex – номер выбранного <option>. 
// <select> позволяет нам выбрать несколько вариантов одновременно, если у него стоит атрибут multiple

const getSelectElement = myForm.elements.selectElement;

/**
* select.options – коллекция из подэлементов <option>
* @returns HTMLOptionsCollection
*/
const collectionOptionsSelect = getSelectElement.options;
console.log("collectionOptionsSelect : ", collectionOptionsSelect);

// три разных способа установить значение в <select>
getSelectElement.value = 'banana';
getSelectElement.options[2].selected = true;
getSelectElement.selectedIndex = 2;


//---------------------------------------------------------------------------------------
// События формы
//---------------------------------------------------------------------------------------

// change
// Событие change срабатывает по окончании изменения элемента.

// Для текстовых <input> это означает, что событие происходит при потере фокуса.
getInputTypeText.addEventListener('change', (event) => {
  console.log("Event change TypeText : ", event.target.value);
})

// Для других элементов: select, input type=checkbox/radio событие запускается сразу после изменения значения:
getSelectElement.addEventListener('change', (event) => {
  console.log("Event change SelectElement : ", event.target.value);
})

// input 
// Событие input срабатывает каждый раз при изменении значения.
getTextAreaElement.addEventListener('input', (event) => {
  console.log("Event change TextAreaElement : ", event.target.value);
})


//---------------------------------------------------------------------------------------
// Отправка формы: событие и метод submit
//---------------------------------------------------------------------------------------

// Событие: submit
// Есть два основных способа отправить форму:
//  - Первый – нажать кнопку <input type="submit"> или <input type="image">.
//  - Второй – нажать Enter, находясь на каком-нибудь поле.

const getInputTypeSubmit = myForm.elements.inputTypeSubmit;

myForm.addEventListener('submit', (event) => {
  console.log(`Отправка формы`);
  event.preventDefault();               // отменяет отправку данных формы
  return false;                         // отменяет отправку данных формы
})

// При отправке формы по нажатию Enter в текстовом поле, генерируется событие click на кнопке <input type="submit">.
getInputTypeSubmit.addEventListener('click', () => {
  console.log(`Нажали на кнопку Submit`);
})

// Метод: submit
// Чтобы отправить форму на сервер вручную, мы можем вызвать метод form.submit().
// Необходимо так же выполнил всю соответствующую обработку
// myForm.submit(); 
