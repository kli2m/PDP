// WeakMap и WeakSet

// WeakMap – не предотвращает удаление объектов сборщиком мусора, когда эти объекты выступают в качестве ключей.

// ключи в WeakMap должны быть объектами, а не примитивными значениями
// если мы используем объект в качестве ключа и если больше нет ссылок на этот объект, то он будет удалён из памяти (и из объекта WeakMap) автоматически.

let john = { name: "John" };

let johnWeakMap = new WeakMap();
johnWeakMap.set(john, "...");

john = null; // перезаписываем ссылку на объект

// объект john удалён из памяти!

// WeakMap не поддерживает перебор и методы keys(), values(), entries(), так что нет способа взять все ключи или значения из неё.
// В WeakMap присутствуют только следующие методы:

let weakMap = new WeakMap()
console.log(weakMap) // WeakMap(0)

//     weakMap.set(key, value)
let obj1 = { name: "Ivan" }
let obj2 = { name: "Vasya" }

weakMap.set(obj1, "obj1 value").set(obj2, "obj2 value");
console.log(weakMap) // { {name : "Ivan"} → "obj1 value", {name : "Vasya"} → "obj2 value" }

//     weakMap.get(key)
console.log(weakMap.get(obj1)) //  "obj1 value"

//     weakMap.delete(key)
console.log(weakMap.delete(obj1)) //  true

//     weakMap.has(key)
console.log(weakMap.delete(obj1)) //  false


// WeakSet

// Коллекция WeakSet ведёт себя похоже на Set:
//     Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
//     Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
//     Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.


// WeakMap и WeakSet используются как вспомогательные структуры данных в дополнение к «основному» месту 
// хранения объекта. Если объект удаляется из основного хранилища и нигде не используется, кроме как в 
// качестве ключа в WeakMap или в WeakSet, то он будет удалён автоматически.
