// Формат JSON, метод toJSON

// JSON (JavaScript Object Notation) – это общий формат для представления значений и объектов. 
// Его описание задокументировано в стандарте RFC 4627. Первоначально он был создан для JavaScript,
// но многие другие языки также имеют библиотеки, которые могут работать с ним. Таким образом, JSON легко
// использовать для обмена данными, когда клиент использует JavaScript, а сервер написан на Ruby/PHP/Java 
// или любом другом языке.

// Oбъект в формате JSON имеет несколько важных отличий от объектного литерала:
// - Строки используют двойные кавычки. Никаких одинарных кавычек или обратных кавычек в JSON. Так 'John' становится "John".
// - Имена свойств объекта также заключаются в двойные кавычки. Это обязательно. Так age:30 становится "age":30.

// JSON поддерживает следующие типы данных: 
//     Объекты { ... }
//     Массивы [ ... ]
//     Примитивы:
//         строки,
//         числа,
//         логические значения true/false,
//         null.


// JSON.stringify для преобразования объектов в JSON.
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // string

console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

// Полученная строка json называется JSON-форматированным или сериализованным объектом. 

// !!! JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.
// - Свойства-функции (методы).
// - Символьные свойства.
// - Свойства, содержащие undefined.
let user = {
  sayHi() {            // будет пропущено
    alert("Hello");
  },
  [Symbol("id")]: 123, // также будет пропущено
  something: undefined // как и это - пропущено
};
console.log(JSON.stringify(user)); // {} (пустой объект)

// !!! Важное ограничение: не должно быть циклических ссылок.
let room = {
  number: 23
};
let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};
meetup.place = room;       // meetup ссылается на room
room.occupiedBy = meetup; // room ссылается на meetup
// JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON
// Здесь преобразование завершается неудачно из-за циклической ссылки: room.occupiedBy ссылается на meetup, и meetup.place ссылается на room

// Исключаем и преобразуем: replacer

// Полный синтаксис JSON.stringify:
// let json = JSON.stringify(value[, replacer, space])
// value  -  Значение для кодирования.
// replacer  -  Массив свойств для кодирования или функция соответствия function(key, value).
// space  -  Дополнительное пространство (отступы), используемое для форматирования. 


// JSON.parse для преобразования JSON обратно в объект.

// let value = JSON.parse(str, [reviver]);
// str - JSON для преобразования в объект.
// reviver -  Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение. 

let userStr = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
console.log(JSON.parse(userStr)) // Object { name: "John", age: 35, isAdmin: false, friends: (4) […] }


// Использование reviver

// передадим JSON.parse функцию восстановления вторым аргументом, которая возвращает все значения «как есть», но date станет Date:

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup2 = JSON.parse(str, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
console.log(meetup2.date.getDate()); // 30 


// Tasks

// 1) Преобразуйте объект в JSON, а затем обратно в обычный объект
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user2 = {
  name: "Василий Иванович",
  age: 35
};

console.log(JSON.parse(JSON.stringify(user2))) // Object { name: "Василий Иванович", age: 35 }
