// Строки


// Кавычки

// Строку можно создать с помощью одинарных, двойных либо обратных кавычек:
console.log("double-quoted") // double-quoted
console.log('single-quoted') // single 
console.log(`backticks`) // backticks


// Спецсимволы

//  \n 	Перевод строки
//  \r 	Возврат каретки: самостоятельно не используется. В текстовых файлах Windows для перевода строки используется комбинация символов \r\n.
//  \', \" 	Кавычки
//  \\ 	Обратный слеш
//  \t 	Знак табуляции
//  \b, \f, \v 	Backspace, Form Feed и Vertical Tab — оставлены для обратной совместимости, сейчас не используются.
//  \xXX 	Символ с шестнадцатеричным юникодным кодом XX, например, '\x7A' — то же самое, что 'z'.
//  \uXXXX 	Символ в кодировке UTF-16 с шестнадцатеричным кодом XXXX, например, \u00A9 — юникодное представление знака копирайта, ©. Код должен состоять ровно из 4 шестнадцатеричных цифр.
//  \u{X…XXXXXX} (от 1 до 6 шестнадцатеричных цифр) 	Символ в кодировке UTF-32 с шестнадцатеричным кодом от U+0000 до U+10FFFF. Некоторые редкие символы кодируются двумя 16-битными словами и занимают 4 байта. Так можно вставлять символы с длинным кодом.
console.log("\u00A9"); // ©

// Длинные юникодные коды
console.log("\u{20331}"); // 佫, редкий китайский иероглиф
console.log("\u{1F60D}"); // 😍, лицо с улыбкой и глазами в форме сердец


// Длина строки

// Свойство length содержит длину строки:
console.log(`My\n`.length); // \n — это один спецсимвол, поэтому тут всё правильно: длина строки 3.


// Доступ к символам

// Квадратные скобки — современный способ получить символ, в то время как charAt существует в основном по
// историческим причинам.

let str = `Hello`;

// получаем первый символ
console.log(str[0]); // H     
console.log(str.charAt(0)); // H
// Разница только в том, что если символ с такой позицией отсутствует, тогда [] вернёт undefined, а charAt — пустую строку:


// Изменение регистра

// Методы toLowerCase() и toUpperCase() меняют регистр символов:
console.log('Hello'.toUpperCase()); // HELLO
console.log('Hello'.toLowerCase()); // hello


// Поиск подстроки

// str.indexOf(substr, pos) - ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию,
// на которой располагается совпадение, либо -1 при отсутствии совпадений. Необязательный второй аргумент позволяет
// начать поиск с определённой позиции.
console.log('Hello'.indexOf('l')); // 2
console.log('Hello'.indexOf('l', 3)); // 3

// str.lastIndexOf(substr, position) - ищет с конца строки к её началу.
console.log('Hello'.lastIndexOf('l')); // 3
console.log('Hello'.lastIndexOf('l', 2)); // 2

// str.includes(substr, pos) - возвращает true, если в строке str есть подстрока substr, либо false, если нет.
// Необязательный второй аргумент str.includes позволяет начать поиск с определённой позиции:
console.log('Hello'.includes('ll')); // true
console.log('Hello'.includes('ol')); // false
console.log('Hello'.includes('ol', 3)); // false

//  str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
console.log('Hello'.startsWith('He')); // true
console.log('Hello'.endsWith('lo')); // true


// Получение подстроки

// str.slice(start [, end]) - Возвращает часть строки от start до (не включая) end.
// Также для start/end можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов с конца строки
console.log('Hello'.slice(2, 4)); // 'll'
console.log('Hello'.slice(-3)); // 'llo'

// str.substring(start [, end]) - Возвращает часть строки между start и end.
// Это — почти то же, что и slice, но можно задавать start больше end.
// Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0.
console.log('Hello'.substring(2, 4)); // 'll'

// str.substr(start [, length]) - Возвращает часть строки от start длины length.
// Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца:
console.log('Hello'.substr(2, 4)); // 'llo'


// Сравнение строк

// 1) Строчные буквы больше заглавных:
console.log('a' > 'Z'); // true

// 2) Буквы, имеющие диакритические знаки, идут «не по порядку»:
console.log('Österreich' > 'Zealand'); // true

// str.codePointAt(pos) - Возвращает код для символа, находящегося на позиции pos:
console.log("z".codePointAt(0)); // 122
console.log("Z".codePointAt(0)); // 90

// String.fromCodePoint(code) - Создаёт символ по его коду code
console.log(String.fromCodePoint(122)); // z
console.log(String.fromCodePoint(90)); // Z


// Правильное сравнение

// str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:
//  - Отрицательное число, если str меньше str2.
//  - Положительное число, если str больше str2.
//  - 0, если строки равны.
console.log('Österreich'.localeCompare('Zealand')); // -1


// Tasks

// 1) Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("вася"));

// 2) Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// 3) Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит
// maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) //  "Вот, что мне хотело…"
console.log(truncate("Всем привет!", 20)) //  "Всем привет!"

// 4) Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue('$120') === 120); // true
