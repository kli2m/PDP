// Selecting elements

// если у элемента есть атрибут id, то мы можем получить его вызовом document.getElementById(id), где бы он ни находился.
// @return Element
const elementById = document.getElementById("navigate-id");

// возвращает элементы с заданным атрибутом name.
// @return NodeList
const elementsByName = document.getElementsByName("item");

// ищет элементы с данным тегом и возвращает их коллекцию. Передав "*" вместо тега, можно получить всех потомков.
// @return HTMLCollection
const elementsByTagName = document.getElementsByTagName("li");

// возвращает элементы, которые имеют данный CSS-класс.
// @return HTMLCollection
const elementsByClassName = document.getElementsByClassName("navigate__list");

// возвращает первый элемент, соответствующий данному CSS-селектору.
// @return Element
const elementBySelector = document.querySelector(".navigate__list_item");

// он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.
// @return NodeList
const elementsBySelectorAll = document.querySelectorAll(".navigate__list_item");

console.log("Selecting elements", {
  elementById,
  elementsByName,
  elementsByTagName,
  elementsByClassName,
  elementBySelector,
  elementsBySelectorAll
});


// Дочерние узлы (или дети) – элементы, которые являются непосредственными детьми узла. Другими словами, элементы, которые лежат непосредственно внутри данного. Например, <head> и <body> являются детьми элемента <html>.
// Потомки – все элементы, которые лежат внутри данного, включая детей, их детей и т.д.
// Соседи – это узлы, у которых один и тот же родитель.

//Traversing nodes

// Родитель доступен через parentNode
// @return Node
const nodeParentNode = elementBySelector.parentNode;

// Следующий узел того же родителя (следующий сосед) – в свойстве nextSibling, а предыдущий – в previousSibling
// @return Node
const nodeNextSibling = elementBySelector.nextSibling;
const nodePreviousSibling = elementBySelector.previousSibling;

console.log("Traversing nodes", { nodeParentNode, nodeNextSibling, nodePreviousSibling });


//Traversing elements

// parentElement – родитель-элемент.
// @return Element
const parentElement = elementBySelector.parentElement;

// previousElementSibling, nextElementSibling – соседи-элементы.
// @return Element
const nextElementSibling = elementBySelector.nextElementSibling;
const previousElementSibling = elementBySelector.previousElementSibling;

// firstElementChild, lastElementChild – первый и последний дочерний элемент.
// @return Element
const firstElementChild = parentElement.firstElementChild;
const lastElementChild = parentElement.lastElementChild;

// children – коллекция детей, которые являются элементами.
// @return HTMLCollection
const children = parentElement.children;

console.log("Traversing elements", { parentElement, nextElementSibling, previousElementSibling, firstElementChild, lastElementChild, children });
