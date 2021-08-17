// Map и Set

// Map

// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет
// использовать ключи любого типа.

// Методы и свойства:

//     new Map() – создаёт коллекцию.
let map = new Map();
console.log(map) // Map(0)

//     map.set(key, value) – записывает по ключу key значение value.
console.log(map.set(1, "a").set({ 2: "2" }, 2)) // Map { 1 → "a", {2:"2"} → 2 }

//     map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
console.log(map.get(1))  // a

//     map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
console.log(map.has(1))  // true

//     map.delete(key) – удаляет элемент по ключу key.
console.log(map.delete(1))  // true

//     map.clear() – очищает коллекцию от всех элементов.
console.log(map.clear())  // undefined

//     map.size – возвращает текущее количество элементов.
console.log(map.size)  // 0


// Перебор Map

map.set(1, "a").set({ 2: "2" }, 2).set("3", "c")

// Для перебора коллекции Map есть 3 метода:

//     map.keys() – возвращает итерируемый объект по ключам,
for (let element of map.keys()) {
  console.log(element); // 1 , { 2: "2" } , 3
}

//     map.values() – возвращает итерируемый объект по значениям,
for (let element of map.values()) {
  console.log(element); // a , 2 , c
}

//     map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
for (let element of map.entries()) {
  console.log(element); // [ 1, "a" ] , [ {2: "2"}, 2 ] , [ "3", "c" ]
}

// Map имеет встроенный метод forEach, схожий со встроенным методом массивов Array:
// выполняем функцию для каждой пары (ключ, значение)
map.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // 1: a , [object Object]: 2 , 3: c
});


// Object.entries: Map из Object

// Object.entries(obj) получает объект и возвращает массив пар ключ-значение для него
// мы можем создать Map из обычного объекта следующим образом:
let obj = {
  name: "John",
  age: 30
};

let map2 = new Map(Object.entries(obj));
console.log(map2) // Map { name → "John", age → 30 }


// Object.fromEntries: Object из Map

// Object.fromEntries, делает противоположное: получив массив пар вида [ключ, значение], он создаёт из них объект:
let map3 = new Map();
map3.set('banana', 1);
map3.set('orange', 2);
map3.set('meat', 4);

let obj2 = Object.fromEntries(map3.entries()); // make a plain object (*)

console.log(obj2) // { banana: 1, orange: 2, meat: 4 }

console.log(obj2.orange); // 2


// Set

// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
let set = new Set()
console.log(set) // Set []

// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
console.log(set.add("1").add("2").add("3").add("2")) // Set(3) [ "1", "2", "3" ]

// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
console.log(set.delete("2")) // true

// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
console.log(set.has("2")) // false

// set.clear() – удаляет все имеющиеся значения.
console.log(set.clear()) // undefined

// set.size – возвращает количество элементов в множестве.
console.log(set.size) // 0


// Перебор объекта Set

// Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach:

let set2 = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set2) console.log(value); // "апельсин", "яблоко", "банан"

// то же самое с forEach:
set2.forEach((value, valueAgain, set) => {
  console.log(value); // "апельсин", "яблоко", "банан"
});

// Set имеет те же встроенные методы, что и Map:
// 
//     set.values() – возвращает перебираемый объект для значений,
//     set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
//     set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.


// Tasks

// 1) Фильтрация уникальных элементов массива
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
  return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O


// 2) Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
function aclean(arr) {
  let map = new Map()
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join(""); // разбиваем слово на буквы, сортируем и объединяем снова в строку
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

let arrAnnogram = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arrAnnogram)) // [ "PAN", "hectares", "era" ]


// 3) Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

let mapIterable = new Map();

mapIterable.set("name", "John");

let keys = Array.from(mapIterable.keys());

keys.push("more");

console.log(keys); // [ "name", "more" ]
