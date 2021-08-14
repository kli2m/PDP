// Primitive methods:


// Есть 7 примитивных типов: string, number, boolean, symbol, null, undefined и bigint

// Примитив как объект:

// 1)Примитивы остаются примитивами. Одно значение, как и хотелось.
// 2)Язык позволяет осуществлять доступ к методам и свойствам строк, чисел, булевых значений и символов.
// 2)Чтобы это работало, при таком доступе создаётся специальный «объект-обёртка», которые называются: 
// -String, 
// -Number, 
// -Boolean,  
// -Symbol,
// который предоставляет разный набор методов, а после удаляется.

console.log('abc'.toUpperCase()); // 'ABC'
console.log(1.234.toFixed(1)); // '1.2'

// !!!Конструкторы String/Number/Boolean предназначены только для внутреннего пользования
console.log(typeof 'abc') // string
console.log(typeof new String('abc')) // object
console.log(typeof String('abc')) // БЕЗ NEW  ===  string


// Объекты в if всегда дают true

let zero = new Number(0);

if (zero) {
  console.log("zero имеет «истинное» значение?!?");  // zero возвращает "true", так как является объектом
} else console.log("!!!это сообщение никогда не выведется!!!")


// null и undefined не имеют методов
// Попытка доступа к свойствам такого значения возвратит ошибку:
console.log(null.test); // ошибка
