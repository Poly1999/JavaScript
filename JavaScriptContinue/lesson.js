const message = 'JavaScript is awesome!';

//Виведення

// alert(message);
// console.log(message);

//Отримання

// confirm;

// const isConfirm = confirm('Please confirm reservation');
// console.log(isConfirm);

// const test = confirm('Yes or no?');
// console.log(test);

// prompt

// const userName = prompt('Please enter your name:');
// console.log(userName);

// const number = prompt('Please enter your phone number');
// console.log(number);

//Перетворення типу

// const value = prompt('Please enter a number!');
// console.log(typeof value); //'string'
// console.log(value); //'5'

// let value;

//--String--//

// value = false; //це boolean
// console.log(typeof value);
// const newValue = String(value); //це ми переробили boolean у string
// console.log(typeof newValue);

//--Number--//

// value = '123'; //це string
// console.log(typeof value);

// const newValue = Number(value); //це ми переробили string у number
// console.log(typeof newValue);

//--Boolean--//

//Правила перетворення:

//Значення ,які інтуїтивно "порожні", такі як: 0, порожній рядок, null, undefined та NaN, стають false
//Інші значення стають true

// console.log(Boolean(1)); //true
// console.log(Boolean(0)); //false

// console.log(Boolean('вітаю')); //true
// console.log(Boolean('')); //false

// console.log(Boolean(NaN)); //false
// console.log(Boolean(null)); //false

// --Оператори--//

// Термінали: "унарний", "бінарний", "операнд"

// Операнд-це те, до чого застосовується оператори.
// Наприклад, у множені 5 * 2 є для операнди: лівий операнд 5 і правий операнд 2.
// Іноді їх називають "аргументами"

// Оператор є унарним, якщо він має один операнд
// let x = 1;

// x = -x;

// Оператор є бінарний, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

// JavaScript підтримує такі математичні операції:

// Додавання + ,
// Віднімання - ,
// Множення * ,
// Ділення / ,
// Остача від ділення % ,
// Піднесення до степення ** .

// Додавання
// console.log(2 + 2);

// // Віднімання
// console.log(4 - 2);

// // Множення
// console.log(4 * 5);

// // Ділення
// console.log(30 / 6);

// Остача від ділення
// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

// // Піднесення до степення
// console.log(5 ** 2);
// console.log(4 ** 4);

// --Оператори порівняння--//

// a > b or a < b // більше/менше
// a >= b or a <= b // більше/менше або дорівнює
// a == b // дорівнює
// a != b // не дорівнює
// a !=== b // строго дорівнює
// a !== b // строго не дорівнює

// console.log(5 > 3); //true
// console.log(5 < 3); //false
// console.log(5 >= 5); //true
// console.log(7 <= 3); //false

// let value = 0;
// console.log(value == 0);

// == приведення до типу

// console.log(5 === 5); //true 5 дорівнює 5
// console.log(5 !== 5); //false 5 не дорівнює 5
// // тобто "!" це "не"

// // and or not //

// // and - повинні бути виконані 2 умови
// console.log(5 === 5 && 6 > 3); //true
// console.log(6 + 3 >= 9 && 8 + 1 === 9); //true
// console.log(5 === 3 && 6 > 3); //false

// // or - може бути віконана тільки 1 умова

// console.log(5 + 5 === 25 || 2 * 2 === 6); //false
// console.log(5 * 5 === 25 || 2 * 2 === 6); //true

// not
// console.log(5 !== 5); //false 5 не дорівнює 5 ,тобто "!" це "не"

// Умови if/else

// одинарні
// if (5 + 5 === 10) {
//   console.log('Hello');
// } //якщо дія правильна,виведи мені в console "Hello"

// if (5 + 5 === 25) {
//   console.log('1');
// } else {
//   console.log('2');
// } //якщо дія правильна,виведи мені в console "1" ,якщо не правильна ,то "2"

// --Тернарний оператор--//

// 2 + 2 === 4 ? console.log('1') : console.log('2'); // якщо дія правильна,виведи мені в console "1" ,якщо не правильна ,то "2" //скороченый варіант

// // якщо багато умов
// if (5 + 5 === 7) {
//   console.log('5+5===7');
// } else if (2 + 2 === 4) {
//   console.log('2 + 2 === 4');
// } else {
//   console.log('no');
// }

// let leng = 'ua';

// if (leng === 'ua') {
//   console.log('Понеділок');
// } else if (leng === 'en') {
//   console.log('Monday');
// } else {
//   console.log('Reset');
// }

// switch/case - теж саме що і if/else ,але швидше працює та акуратніше

// let num = 10;
// switch (num) {
//   case 0:
//     console.log(0);
//     break;

//   case 5:
//     console.log(5);
//     break;

//   case 10:
//     console.log(10);
//     break;
// }

// let cost;
// const sub = 'premium';

// switch (sub) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
// }

// console.log(cost);

// --Вирішення задач (практика)-- //

// const min = prompt('Введіть хвилину');

// if (min >= 0 && min <= 14) {
//   console.log('Перша чверть');
// } else if (min >= 15 && min <= 29) {
//   console.log('Друга чверть');
// } else if (min >= 30 && min <= 44) {
//   console.log('Третя чверть');
// } else if (min >= 45 && min <= 59) {
//   console.log('Четверта чверть');
// }

// Приклад: в нас є магазин в якому користувач буде запитувати про товар і ми будемо говорити про вартість цього товару

// const value = prompt('Введіть назву товару').toLowerCase();
// let cost;

// switch (value) {
//   case 'apple':
//     cost = 10;
//     alert(`${value} коштує ${cost} dollars`);
//     break;

//   case 'cherry':
//     cost = 50;
//     alert(`${value} коштує ${cost} dollars`);
//     break;

//   case 'mango':
//     cost = 30;
//     alert(`${value} коштує ${cost} dollars`);
//     break;

//   case 'watermalon':
//     cost = 20;
//     alert(`${value} коштує ${cost} dollars`);
//     break;

//   case 'blueberry':
//     cost = 15;
//     alert(`${value} коштує ${cost} dollars`);
//     break;

//   case 'melon':
//     cost = 80;
//     alert(`${value} коштує ${cost} dollars`);
//     break;

//   default:
//     alert('product ${value} unavailable');
// }
