//-------Функції-------//
//Досить часто нам потрібно виконати однакову дію в декількох місцях програми.
//Наприклад, нам треба показати якесь повідомлення, коли користувач входить або виходить з системи і може ще десь.
//Функції — це головні “будівельні блоки” програми. Вони дозволяють робити однакові дії багато разів без повторення коду.
//Функції можна уявити як чорну скриньку, вони отримують щось на вході (дані), і віддають щось на виході (результат виконання коду всередині функції).
//Функції є інструментом для структурування великих програм, зменшення повторень та ізолювання коду.

//function declirion

// function showMessage(name, city) {
//   console.log('Hello, my name is ' + name + " I'm from " + city);
// }

// showMessage('Polina', 'Nikopol'); //визвали функцію
// showMessage('Olya', 'Lviv');
// showMessage('Anton', 'Sumy');

//function expration

// const userName = 'Anton';

// const sayHi = function () {
//   let message = 'Hello, my name is ';
//   console.log(message + userName);
// };

// sayHi();

//повернення значень функцій

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(7, 8);
// console.log(result);

// const testFunk = function (a, b) {
//   console.log('a :', a);
//   console.log('b :', b);
//   c = a + b;

//   return 100;
// };

// testFunk(5, 8);

//порядок виконання коду

// const a = function () {
//   c();
//   console.log('function a');
//   b();
// };

// const b = function () {
//   console.log('function b');
// };
// const c = function () {
//   console.log('function c');
// };

// a();

//аргументи

// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 3, 5);

//rest

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 3, 5);

// addName(1, 3, 5, 85, 69);

//callback

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log('You say ok');
// }

// function showCancel() {
//   console.log('You say no');
// }

// ask('Yes or no? ', showOk, showCancel);

//high order function (hor)

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// const searchName = function (callback) {
//   const name = ' Tony';
//   callback(name);
// };

// searchName(hello);

//стрілочні функції

// const test = arg => {
//   console.log(arg);
// };

// test('hello');

// const showMovie = age => {
//   if (age > 21) {
//     return console.log('Hello');
//   }
//   return console.log('Bye!');
// };

// showMovie(12);

// const a = () => {
//   console.log('a');
// };

// const b = () => {
//   console.log('b');
// };

// const c = () => {
//   console.log('c');
//   a();
//   b();
// };

// c();

//practice

// function checkAge(age) {
//   if (age > 18) {
//     return console.log('Hello');
//   }
//   return console.log('Goodbye');
// }

// checkAge(12);

// function showAge(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log('Go to movie!');
// }

// showAge(21);

// console.log(document);

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', () => {
//   console.log(numberRef.value);
// });

const addNumber = number => {
  let sum = Number(number) + 10;
  return console.log(sum);
};

const numberRef = document.querySelector('input[name="number"]');

const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', () => addNumber(numberRef.value));
