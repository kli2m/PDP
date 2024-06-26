// // В JavaScript есть три вида циклов (или 4, если быть точным):

// // Классический цикл for
// // Пара for…of и for…in
// // И модный, функциональный .forEach

// // --------- Классический цикл for

// for ([counter definition];
//     [breaking condition definition];
//     [step definition]) {
//     //... ваш повторяющийся код
// }

// // --------- Пара for…of и for…in

// // Цикл for..in перебирает как свои, так и унаследованные свойства. Остальные методы 
// //получения ключей/значений работают только с собственными свойствами объекта.

// // Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного 
// // метода obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.

// // Цикл for...of в JavaScript позволяет перебирать итерируемые объекты: массивы, множества, Map, строки и т.д.


// ------------ Отличия for...of от for...in

// for...of	                                     ||    for...in
// Для перебора значений итерируемого объекта.   ||    Для перебора ключей объекта.
// Нельзя использовать для перебора объекта.	   ||    Можно использовать для перебора объекта, но не стоит использовать для перебора итерируемых объектов.