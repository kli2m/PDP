// Методы массивов


const noarray = "this is string type";
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Добавление/удаление элементов


// arr.push(...items) – Добавляет элемент в конец массива и возвращает индекс этого элемента,
console.log("array.push(push)", array.push("push"))  // 11

// arr.pop() – Удаляет последний элемент из массива и возвращает его,
console.log("array.pop()", array.pop())  // "push"
console.log("array.pop(noarray)", array.pop(noarray))  // 9

// arr.shift() – Удаляет из массива первый элемент и возвращает его,
console.log("array.shift()", array.shift())  // 0
console.log("array.shift(noarray)", array.shift("noarray"))  // 1

// arr.unshift(...items) – Добавляет элемент в начало массива и возвращает индекс этого элемента.
console.log("array.unshift()", array.unshift())  // 7
console.log("array.unshift(noarray)", array.unshift("noarray"))  // 8


// splice

// arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.
// arr.splice(index[, deleteCount, elem1, ..., elemN])
// Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., elemN на их место.
// Возвращает массив из удалённых элементов.

let arr = ["1", "2", "3", "4"];

// начиная с позиции 1, удалить 1 элемент
console.log(arr.splice(1, 1))  // [ "2" ]  (splice возвращает массив из удалённых элементов)
console.log(arr) // [ "1", "3", "4" ]

// начиная с позиции 1, удалить 0 элементов и добавить заданные
let arr2 = ["7", "8", "9"]

console.log(arr.splice(1, 0, arr2))  // [ ]  (splice возвращает массив из удалённых элементов)
console.log(arr)  // [ "1", [ "7", "8", "9" ] , "3", "4" ]

// Отрицательные индексы разрешены
console.log(arr.splice(-1, 0, arr2))  // [ ]
console.log(arr)  // [ "1", [ "7", "8", "9" ] , "3", [ "7", "8", "9" ] , "4" ]

console.log("splice(noarray,2)", arr.splice(noarray, 2))  // ["1", [ "7", "8", "9" ]]


// slice

// arr.slice - возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end).
// Оба индекса start и end могут быть отрицательными. 
// Это похоже на строковый метод str.slice, но вместо подстрок возвращает подмассивы.
let arrSlice = ['h', 'e', 'l', 'l', 'o'];

console.log(arrSlice.slice(1, 3)); // e,l (копирует с 1 до 3)
console.log(arrSlice.slice(-2)); // l,o (копирует с -2 до конца)
console.log(arrSlice.slice()); // ['h', 'e', 'l', 'l', 'o'] ( создаёт копию массива )

console.log("slice(noarray,3)", arrSlice.slice(noarray, 3))  // [ "h", "e", "l" ]


// concat

// arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
// arr.concat(arg1, arg2...)
// Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.
// В результате мы получаем новый массив, включающий в себя элементы из arr, а также arg1, arg2 и так далее…

let arrConcatOne = [1, 2, 3, 4, 5]
let arrConcatTwo = [6, 7, 8, 9, 0]

console.log(arrConcatOne.concat(arrConcatTwo)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

console.log("concat(noarray)", arrConcatOne.concat(noarray)) // [ 1, 2, 3, 4, 5, "this is string type" ]


// Перебор: forEach

// arr.forEach позволяет запускать функцию для каждого элемента массива.
// Результат функции (если она вообще что-то возвращает) отбрасывается и игнорируется.
//  arr.forEach(function(item, index, array) {
//     ... делать что-то с item
//  });
let arrForEach = ["a", "b", "c"]

arrForEach.forEach((item, index, array) => console.log(`${item} имеет позицию ${index} в ${array}`));


// Поиск в массиве

let arrFindInArray = ["Minsk", "Vitebsk", "Brest", "Gomel"]

// indexOf

//arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
console.log(arrFindInArray.indexOf("Brest", 1)) // 2

// lastIndexOf

//arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
console.log(arrFindInArray.lastIndexOf("Brest", 1)) // -1

// includes

//arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
console.log(arrFindInArray.includes("Brest", 1)) // true

// find

// arr.find(function(item, index, array) {}) - Если функция возвращает true, поиск прерывается и возвращается item и -1, если ничего не найдено.
console.log(arrFindInArray.find(item => item === "Brest")) //  Brest

// findIndex

// arr.findIndex(function(item, index, array) {}) – по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.
console.log(arrFindInArray.findIndex(item => item === "Brest")) //  2

// filter

// arr.filter(function(item, index, array) {}) – ищет все элементы, на которых функция-колбэк вернёт true. возвращает массив из всех подходящих элементов
console.log(arrFindInArray.filter(item => item === "Brest" || item === "Minsk")) //  [ "Minsk", "Brest" ]


// Преобразование массива

let arrTransformationInArray = ["Minsk", "Vitebsk", "Brest", "Gomel"];

// map

// arr.map(function(item, index, array) {}) – вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
console.log(arrTransformationInArray.map(item => item.length)) //  [ 5, 7, 5, 5 ]

// sort(fn)

// sort(fn) - сортирует массив на месте, меняя в нём порядок элементов. Возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr.
console.log(arrTransformationInArray.sort()) //  [ "Brest", "Gomel", "Minsk", "Vitebsk" ]
// Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента arr.sort().
// function compare(a, b) {
//   if (a > b) return 1; // если первое значение больше второго
//   if (a == b) return 0; // если равны
//   if (a < b) return -1; // если первое значение меньше второго
// }

// reverse
// arr.reverse меняет порядок элементов в arr на обратный. Возвращает массив arr с изменённым порядком элементов.
console.log(arrTransformationInArray.reverse()) //  [ "Vitebsk", "Minsk", "Gomel", "Brest" ]


// split и join

// arr.join(glue) - создаёт строку из элементов arr, вставляя glue между ними.
// У метода split есть необязательный второй числовой аргумент – ограничение на количество элементов в массиве. Если их больше, чем указано, то остаток массива будет отброшен
let arrUnderJoin = arrTransformationInArray.join(",")
console.log(arrUnderJoin) //  Vitebsk,Minsk,Gomel,Brest

// str.split(delim) - разбивает строку на массив по заданному разделителю delim
console.log(arrUnderJoin.split(",")) //  [ "Vitebsk", "Minsk", "Gomel", "Brest" ]


// reduce

// arr.reduce(function(previousValue, item, index, array) {},[initial]) - используется для вычисления какого-нибудь единого значения на основе всего массива.
//    previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
//    item – очередной элемент массива,
//    index – его индекс,
//    array – сам массив.
console.log(arrTransformationInArray.reduce((previousValue, item) => previousValue + item.length, 0)) //  22

// arr.reduceRight работает аналогично, но проходит по массиву справа налево.


// Array.isArray 
// Array.isArray(value) - возвращает true, если value массив, и false, если нет.

console.log(Array.isArray('abc')) // false
console.log(Array.isArray(["a", "b", "c"])) // true


// Tasks

// 1) Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
  return str.split("-").map((item, i) => i > 0 ? item[0].toUpperCase() + item.slice(1) : item).join("")
}
console.log(camelize("border-left-width")) //  borderLeftWidth


// 2) Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
  return arr.filter((item) => (a <= item && item <= b))
}
console.log(filterRange([5, 3, 8, 1], 1, 4)) // [ 3, 1 ]


// 3) Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

let arrTask3 = [5, 3, 8, 1]
function filterRangeInPlace(arr, a, b) {
  arr.forEach((item, i) => {
    if (a <= item && item >= b) arr.splice(i, 1)
  })
}
filterRangeInPlace(arrTask3, 1, 4)
console.log(arrTask3) // Array [ 3, 1 ]
