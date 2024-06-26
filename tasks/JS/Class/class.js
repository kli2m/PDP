// В JavaScript класс – это разновидность функции.
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// доказательство: User - это функция
alert(typeof User); // function

// Вот что на самом деле делает конструкция class User {...}:
// - Создаёт функцию с именем User, которая становится результатом объявления класса. Код функции берётся 
// из метода constructor (она будет пустой, если такого метода нет).
// - Сохраняет все методы, такие как sayHi, в User.prototype.

//!! 1.Функция, созданная с помощью class, помечена специальным внутренним свойством [[IsClassConstructor]]: true. 
//!! 2.Методы класса являются неперечислимыми. Определение класса устанавливает флаг enumerable в false для всех методов в "prototype".
//!! 3.Классы всегда используют use strict. Весь код внутри класса автоматически находится в строгом режиме.


// ---------- Class Expression

// Как и функции, классы можно определять внутри другого выражения, передавать, возвращать, присваивать и т.д.
let User = class {
    sayHi() {
        alert("Привет");
    }
};

// --------- Наследование классов

// Наследование классов – это способ расширения одного класса другим классом.
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`);
    }
}

let rabbit = new Rabbit("Белый кролик");

// ------- ключевое слово "super" .

// super.method(...) вызывает родительский метод.
// super(...) для вызова родительского конструктора (работает только внутри нашего конструктора).
// У стрелочных функций нет super
// При обращении к super стрелочной функции он берётся из внешней функции

//!! Конструкторы в наследуемых классах должны обязательно вызывать super(...), и (!) делать это перед использованием this..

// ------------ Проверка класса: "instanceof"
// Оператор instanceof позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.