///--- Замикання ----///

// Замикання (closure) - це зв'язок між функцією та її ланцюжком областей
// видимості.

// Цей механізм можливий завдяки лексичному оточенню. При виклику функції, її
// лексичне оточення отримує посилання ту область видимості, де функція було
// оголошено (зовнішнє лексичне оточення), цим отримуючи доступом до змінним
// із неї, буквально утримуючи у пам'яті таблицю доступних змінних.

// Разом, замикання це термін який описує здатність функції запам'ятовувати
// лексичне оточення в якому вона була оголошена, і продовжувати отримувати
// доступ до змінних з цього лексичного оточення незалежно від того, де вона була
// викликана.

// Тобто: функції автоматично запам’ятовують, де вони були створені,
// використовуючи приховану властивість [[Environment]], а потім їхній код може
// отримати доступ до зовнішніх змінних.

// Коли під час співбесіди розробник отримує запитання “що таке замикання?”,
// правильною відповіддю буде визначення замикання та пояснення, що всі функції
// в JavaScript є замиканнями, і, можливо, ще кілька слів про технічні деталі:
// властивість [[Environment]], і як взагалі працюють лексичні середовища.

// Приклад замикання 1:

// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }

// const calc = createNewSum(5);
// calc();

// Приклад замикання 2:

// function createNewNumber(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addFive = createNewNumber(5);

// console.log(addFive(10));

// Приклад замикання 3:

// function createUrl(domain) {
//   return function (url) {
//     return `http://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl('com');
// const comUa = createUrl('ua');

// console.log(comUrl('google')); // http://google.com
// console.log(comUrl('fb')); // http://fb.com

// console.log(comUa('google')); // http://google.ua
// console.log(comUa('fb')); // http://fb.ua

///----this----///

// Ключове слово this в JavaScript вказує на об'єкт, який викликав функцію.

// Приклад використання this 1:

// function hello() {
//   console.log('hello', this);
// }

// hello();

// const user = {
//   name: 'Tony',
//   city: 'Sumy',
//   sayHello: hello,
// };

// user.sayHello();

// Приклад використання this 2:

// function abc() {
//   console.log('В функції');
//   console.log(this);
// }

// abc();

// document.querySelector('p').onclick = abc;

// Приклад використання this 3:

// function changeColor() {
//   console.log(this);
//   this.style.background = 'green';
// }

// document.querySelector('div').onclick = changeColor;

// Приклад використання this 4:

// function changeColor() {
//   this.style.background = 'green';
// }

// let user = document.querySelectorAll('div');

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

// Приклад використання this 5:

// const showList = () => {
//   console.log(this);
// };

// showList();

// const list = {
//   names: ['Tony', 'Poly', 'Nata'],
//   showList: showList,
// };

// list.showList();

//!!!!!Використання this в стрілочній функції не працює, тому що стрілочні функції не мають свого контексту this!!!! *див. Приклад використання this 5

//---Вбудовані методи---///

//---bind---///

// Метод bind створює копію функції fn з прив'язаним контекстом obj та
// аргументами arg1, arg2 тощо, після чого повертає її як результат своєї роботи. В
// результаті ми отримуємо копію функції з прив'язаним контекстом, яку можна
// передати куди завгодно і викликати будь-коли.

// Найчастіше метод bind використовується для прив'язки контексту передачі
// методів об'єкта як функцій зворотного виклику. Візьмемо проблемний приклад із
// попередньої секції. Завдання прив'язки контесту ми можемо вирішити
// використовуючи метод bind, передавши функцією зворотного виклику копію
// методу з прив'язаним контекстом.

// Приклад використання bind:

// function hello() {
//   console.log(this);
// }
// const user = {
//   name: 'Tony',
//   age: 36,
//   hello: hello,
//   sayHelloWindow: hello.bind(window), // Використання bind для прив'язки контексту до window
//   info: function () {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//   },
// };
// user.info();
// user.sayHelloWindow(); // Виклик функції з прив'язаним контекстом до window

// Приклад використання bind:

// function hello() {
//   console.log(this);
// }
// const user = {
//   name: 'Tony',
//   age: 36,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function () {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//   },
// };
// user.info();

// const Poly = {
//   name: 'Poly',
//   age: 26,
// };

// const Nata = {
//   name: 'Nata',
//   age: 30,
// };

// user.info.bind(Poly)(); // Виклик функції з прив'язаним контекстом до Ann
// user.info.bind(Nata)(); // Виклик функції з прив'язаним контекстом до Nata

// Приклад використання bind:

// function hello() {
//   console.log(this);
// }
// const user = {
//   name: 'Tony',
//   age: 36,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };

// const Poly = {
//   name: 'Poly',
//   age: 26,
// };

// const Nata = {
//   name: 'Natalia',
//   age: 30,
// };

// user.info.bind(Poly)('Nikopol'); // Виклик функції з прив'язаним контекстом до Ann

// const nataInfo = user.info.bind(Nata, 'Sumy')(); // Виклик функції інший спосіб
// nataInfo();

//---call---///

// Запам'ятати правило використання call досить легко: метод call викличе функцію
// fnпередавши її це посилання на об'єкт obj, а також аргументи arg1, arg2 і т.д.

// Приклад використання call:

// const userInfo = {
//   name: 'name',
//   age: 98,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const Inga = {
//   name: 'Inga',
//   age: 33,
// };

// userInfo.logInfo.call(Inga, 'teacher'); // Виклик функції з прив'язаним контекстом до Inga

///---apply---///

// Метод apply повний аналог методу call крім того, що синтаксис виклику
// аргументів вимагає не перерахування, а масив.

// const showUserInfo = {
//   name: name,
//   age: 87,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const Inga = {
//   name: 'Inga',
//   age: 33,
// };

// showUserInfo.logInfo.call(Inga, ['teacher', 'Nikopol']);

// В методі call ми можемо додавати безкінечну кількість аргументів (наприклад:userInfo.logInfo.call(Inga, 'teacher', '...' , '...' , ...); )
// Але в методі apply ми повинні аргументи передавати у вигляді масиву , тобто в […] (наприклад: showUserInfo.logInfo.call(Inga, ['teacher', 'Nikopol']); )

///---Практичне завдання---///

//1

// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: 'Bukovel' };
// const Turist = { hotel: 'Turist' };

// message.call(Bukovel, 'Kostya', 5);
// message.call(Turist, 'Kolya', 5);

// message.apply(Bukovel, ['Kostya', '5']);
// message.apply(Turist, ['Kolya', '5']);

// message.bind(Bukovel, 'Kostya', '5')();
// message.bind(Turist, 'Kolya', '5')();

//2

// const cart = {
//   showItems() {
//     console.log('In cart: ', this.items);
//   },
// };
// const women = {
//   items: ['dress', 'skirt', 'blouse'],
// };

// const man = {
//   items: ['shirt', 'jeans', 'jacket'],
// };

// const kids = {
//   items: ['shorts', 't-shirt', 'sneakers'],
// };

// cart.showItems.bind(man)();

// document
//   .querySelector('#wom')
//   .addEventListener('click', cart.showItems.bind(women));

// document
//   .querySelector('#man')
//   .addEventListener('click', cart.showItems.bind(man));

// document
//   .querySelector('#kid')
//   .addEventListener('click', cart.showItems.bind(kids));

//3

// const infoCar = {
//   name: 'BMW',
//   model: 'M7',
//   color: 'white',
//   showInfo: function () {
//     console.log(
//       'Car ' + this.name + ' model: ' + this.model + ' color: ' + this.color
//     );
//   },
// };

// car2 = {
//   name: 'Opel',
//   model: 'XXX',
//   color: 'red',
// };

// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);
