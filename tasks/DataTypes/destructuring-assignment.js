// destructuring assignment

// Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в кучу переменных, так как иногда они более удобны. 


// Деструктуризация массива

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"]

// деструктурирующее присваивание
let [firstName, surname] = arr; // записывает firstName=arr[0], surname=arr[1]

console.log(firstName); // Ilya
console.log(surname);  // Kantor
// Теперь мы можем использовать переменные вместо элементов массива.

let [firstName2, surname2] = "Ilya Kantor".split(' ');  // Ilya Kantor

// !!! «Деструктурирующее присваивание» не уничтожает массив. 
// Оно вообще ничего не делает с правой частью присваивания, его задача – только скопировать нужные значения в переменные.


// Ненужные элементы массива также могут быть отброшены через запятую:
let [firstName3, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title) // Consul

// Работает с любым перебираемым объектом с правой стороны
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

// Присваивайте чему угодно с левой стороны
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

console.log(user.name); // Ilya

// Цикл с .entries()
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); //  name:Ilya, затем surname:Kantor
}


// Остаточные параметры «…»

// Если мы хотим не просто получить первые значения, но и собрать все остальные, то мы можем 
// добавить ещё один параметр, который получает остальные значения, используя оператор «остаточные параметры» – троеточие ("..."):

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// `rest` является массивом.
console.log(rest) // Array [ "Consul", "of the Roman Republic" ]


// Значения по умолчанию

// Отсутствующие значения считаются неопределёнными:
let [aa, bb] = [];
console.log(aa) // undefined
console.log(bb) // undefined

// Если нам необходимо указать значения по умолчанию, то мы можем использовать =:

let [aaa = "Guest", bbb = "Anonymous"] = ["Julius"];
console.log(aaa);    // Julius (из массива)
console.log(bbb); // Anonymous (значение по умолчанию)


// Деструктуризация объекта

let options = {
  article: "Menu",
  width: 100,
  height: 200
};

let { article, width, height } = options;

console.log(article);  // Menu
console.log(width);  // 100
console.log(height); // 200

// Если мы хотим присвоить свойство объекта переменной с другим названием, то мы можем использовать двоеточие:

let { width: w, height: h } = options;

console.log(w);      // 100
console.log(h);      // 200

// Для потенциально отсутствующих свойств мы можем установить значения по умолчанию, используя "="

let { abc = 700 } = options;
console.log(abc) // 700


// Остаток объекта «…»

let { article: art, ...rest2 } = options;
console.log(rest2)  // Object { width: 100, height: 200 }


// Вложенная деструктуризация

// Если объект или массив содержит другие вложенные объекты или массивы, то мы можем использовать 
// более сложные шаблоны с левой стороны, чтобы извлечь более глубокие свойства.

let options2 = {
  size: {
    width2: 100,
    height2: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};
let { size: { width2, height2 }, items: [item1, item2], title2 = "Menu" } = options2;
console.log({ title2, width2, height2, item1, item2 });  // Object { title2: "Menu", width2: 100, height2: 200, item1: "Cake", item2: "Donut" }


// Умные параметры функций

// Мы можем передать параметры как объект, и функция немедленно деструктурирует его в переменные:
let options3 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
  console.log(`${title} ${width} ${height}`); // My Menu 200 100
  console.log(items); // Item1, Item2
}

showMenu(options3);

// Если нам нужны все значения по умолчанию, то нам следует передать пустой объект:

showMenu({})  //  Untitled 200 100  &&  []


// Tasks

// 1) Деструктурирующее присваивание
// У нас есть объект:
let user2 = {
  name3: "John",
  years: 30
};
// Напишите деструктурирующее присваивание, которое:
//- свойство name присвоит в переменную name.
//- свойство years присвоит в переменную age.
//- свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let { name3, years: age, isAdmin = false } = user2

console.log(name3); // John
console.log(age); // 30
console.log(isAdmin); // false

// 2) Максимальная зарплата
// У нас есть объект salaries с зарплатами:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

console.log(topSalary(salaries)) // Pete
