"use strict";

// this

// Значение this – это объект «перед точкой», который использовался для вызова метода.
// Значение this вычисляется во время выполнения кода и зависит от контекста.
// Если мы используем this внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.

console.log(this)  // Window 

function fn() {
  console.log(this)  // undefined  - в строгом режиме, иначе Window 
}

fn();

let obj = {
  name: "Ivan",
  age: 33,
  getName: function () {
    console.log(this)  // obj
    console.log(this.name)  // Ivan
    let arrowFn = () => {
      console.log(this)   // obj
    }
    arrowFn()                // obj
  },
  getAge: () => {
    console.log(this)  // Window
    console.log(this.age)  // undefined
    console.log(obj.age)  // 33
    let arrowFn = () => {
      console.log(this)  // Window
    }
    arrowFn()                // Window
  }
}

obj.getName()
obj.getAge()


// Декораторы и переадресация вызова, call/apply

// Декоратор – это обёртка вокруг функции, которая изменяет поведение последней. Основная работа по-прежнему выполняется функцией.

// func.call(context, arg1, arg2…) – вызывает func с данным контекстом и аргументами.
// func.apply(context, args) – вызывает func, передавая context как this и псевдомассив args как список аргументов.

function sayHi() {
  console.log("Hello " + this.name + " " + this.surname + "!");
}

let user = { name: "John", surname: "Admovich" };

// используем 'call' для передачи различных объектов в качестве 'this'
sayHi.call(user, "Anna"); // Hello John Admovich!

function sayHi2(arg1, arg2) {
  console.log("Hello " + arg1 + " " + arg2 + "!");
}

sayHi2.apply(user, ["Anna", "Nikolaevna"]); //  Hello Anna Nikolaevna!


// Потеря «this»

// Как только метод передаётся отдельно от объекта – this теряется.
let user2 = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
};

setTimeout(user2.sayHi, 1000); // Привет, undefined!

// Решение 1: сделать функцию-обёртку
setTimeout(() => user2.sayHi(), 1000); // Привет, Вася!

// Решение 2: привязать контекст с помощью bind

// Результатом вызова func.bind(context) является особый «экзотический объект» (термин взят из спецификации),
// который вызывается как функция и прозрачно передаёт вызов в func, при этом устанавливая this=context.

let sayFn = user2.sayHi.bind(user2);

sayFn(); // Привет, Вася!

setTimeout(sayFn, 2000); // Привет, Вася!
