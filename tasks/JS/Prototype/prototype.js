// Прототипы, наследование

// [[Prototype]]

// В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо null.

// Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
// В современном языке его заменяют функции Object.getPrototypeOf/Object.setPrototypeOf

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // устанавливаем animal как прототип для rabbit

// теперь мы можем найти оба свойства в rabbit:
console.log(`rabbit.eats`, rabbit.eats); // true 
console.log(`rabbit.jumps`, rabbit.jumps); // true


console.log(animal.prototype) // undefined  - нет такого метода или свойства
console.log(animal.__proto__) // Object.prototype
console.log(animal.__proto__.__proto__) // null

console.log(rabbit.prototype) // undefined  - нет такого метода или свойства
console.log(rabbit.__proto__) // animal
console.log(rabbit.__proto__.__proto__) // Object.prototype
console.log(rabbit.__proto__.__proto__.__proto__) // null

console.log({}.__proto__) // Object.prototype
console.log([].__proto__) // Array.prototype

// !!! Значение __proto__ может быть объектом или null. Другие типы игнорируются.
// !!! Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу.


// THIS
// !!! Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.


// Цикл for…in

// Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта
// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key).
// obj.hasOwnProperty(key) - возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.

for (const key in rabbit) {
    if (rabbit.hasOwnProperty(key)) {
        console.log(`OwnProperty`, key) // jumps 
    } else console.log(`not OwnProperty`, key) // eats
}

// Почему hasOwnProperty не появляется в цикле for..in в отличие от eats и jumps? 
// У него внутренний флаг enumerable стоит false, как и у других свойств Object.prototype


// F.prototype

// Если в F.prototype содержится объект, оператор new устанавливает его в качестве [[Prototype]] для нового объекта.

let animal2 = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal; // Устанавливаем значение свойству prototype объект animal

let rabbit2 = new Rabbit("White Rabbit"); //  rabbit2.__proto__ == animal

console.log(`rabbit2.eats`, rabbit2.eats); // true

// !!! F.prototype используется только в момент вызова new F()


// F.prototype по умолчанию, свойство constructor

// !! У каждой функции по умолчанию уже есть свойство "prototype"
// По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

function fn() {}

console.log(`fn.prototype`, fn.prototype) //  { constructor: function fn() }
console.log(`fn.prototype.constructor`, fn.prototype.constructor) //  function fn()

let objFn = new fn()

console.log(objFn.constructor == fn); // true (свойство получено из прототипа)
console.log(objFn.prototype); //  undefined
console.log(objFn.__proto__); //  { constructor: function fn() }


// Примитивы

// Если мы попытаемся получить доступ к их свойствам, то тогда будет создан временный объект-обёртка с 
// использованием встроенных конструкторов String, Number и Boolean, который предоставит методы и после этого исчезнет.
// Эти объекты создаются невидимо для нас, и большая часть движков оптимизирует этот процесс, но спецификация описывает
// это именно таким образом. Методы этих объектов также находятся в прототипах, доступных как String.prototype,
// Number.prototype и Boolean.prototype.
// !!! Значения null и undefined не имеют объектов-обёрток


// Свойство __proto__ считается устаревшим, и по стандарту оно должно поддерживаться только браузерами.
// Современные же методы это:
// - Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto,
// и необязательными дескрипторами свойств descriptors.
// - Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// - Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.
// Эти методы нужно использовать вместо __proto__.