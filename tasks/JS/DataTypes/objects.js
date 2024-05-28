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


// ------------- Трансформации объекта

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


// ------------- Геттеры и сеттеры

// Есть два типа свойств объекта. 
// Первый тип это свойства-данные (data properties). 
// Второй тип это свойства-аксессоры (accessor properties).
obj = {
    get propName() {
        // геттер, срабатывает при чтении obj.propName
    },

    set propName(value) {
        // сеттер, срабатывает при записи obj.propName = value
    }
};
// Дескрипторы свойств-аксессоров отличаются от «обычных» свойств-данных.
// Свойства-аксессоры не имеют value и writable, но взамен предлагают функции get и set.



// ------------- Флаги и дескрипторы свойств

// Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.

let descriptor = Object.getOwnPropertyDescriptor(prices, propertyName);
// Возвращаемое значение – это объект, так называемый «дескриптор свойства»: он содержит значение свойства и все его флаги.
/* дескриптор свойства:
 {
   "value": "John",
   "writable": true,
   "enumerable": true,
   "configurable": true
 }
 */
// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.
Object.defineProperty(obj, propertyName, descriptor)

// Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).

//Вместе с Object.defineProperties этот метод можно использовать для клонирования объекта вместе с его флагами:
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

// ------------- Глобальное запечатывание объекта
// Дескрипторы свойств работают на уровне конкретных свойств.

// Но ещё есть методы, которые ограничивают доступ ко всему объекту:

Object.preventExtensions(obj)
    // Запрещает добавлять новые свойства в объект.
Object.seal(obj)
    // Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
Object.freeze(obj)
    // Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.

// А также есть методы для их проверки:
Object.isExtensible(obj)
    // Возвращает false, если добавление свойств запрещено, иначе true.
Object.isSealed(obj)
    // Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
Object.isFrozen(obj)
    // Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.


// ------------- Tasks

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