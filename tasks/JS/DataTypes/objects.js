// Object.keys, values, entries


let obj = {
  name: "Ivan",
  age: 30,
  weight: 80
}
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
console.log(Object.keys(obj)) // [ "name", "age", "weight" ]

// Object.values(obj) – возвращает массив значений.
console.log(Object.values(obj)) // [ "Ivan", 30, 80 ]

// Object.entries(obj) – возвращает массив пар [ключ, значение].
console.log(Object.entries(obj)) // [ [ "name", "Ivan" ], [ "age", 30 ], [ "weight", 80 ] ]

// !!! Object.keys/values/entries игнорируют символьные свойства
// Но если требуется учитывать и символьные ключи, то для этого существует отдельный 
// метод Object.getOwnPropertySymbols, возвращающий массив только символьных ключей. Также,
// существует метод Reflect.ownKeys(obj), который возвращает все ключи.


// Трансформации объекта

// Если мы хотели бы применить методы массивов, то можно использовать Object.entries с последующим вызовом Object.fromEntries:

// 1) Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// 2) На нём вызываем методы массива, например, map.
// 3) Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat); // 8


// Tasks

// 1) Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0. 

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((pre, item) => pre + item, 0)
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries)); // 650


// 2) Подсчёт количества свойств объекта

// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

function count(obj) {
  return Object.keys(obj).length
}
let user = {
  name: 'John',
  age: 30
};
console.log(count(user)); // 2
