//Домашня робота 2:

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0,-3.

// console.log(1 > 0); //true
// console.log(0 === 0); //true
// console.log(-3 > 0); //false

// Якщо змінна ="test"- виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

// let value = 'test';
// if (value === 'test') {
//   console.log('true');
// }

// let value = 'qwerty';
// if (value === 'qwerty') {
//   console.log('true');
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let value = 1;
// if (value > 10) {
//   console.log(`${value} > 10, результат: ${value - 5}`);
// } else {
//   console.log(`${value} <= 10, результат: ${value + 5}`);
// }

// value = 10;
// if (value > 10) {
//   console.log(`${value} > 10, результат: ${value - 5}`);
// } else {
//   console.log(`${value} <= 10, результат: ${value + 5}`);
// }

// value = 13;
// if (value > 10) {
//   console.log(`${value} > 10, результат: ${value - 5}`);
// } else {
//   console.log(`${value} <= 10, результат: ${value + 5}`);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const monthNumber = prompt('Введіть число від 1 до 12:').toLowerCase();
// const number = Number(monthNumber);

// switch (number) {
//   case 1:
//     console.log('January');
//     break;
//   case 2:
//     console.log('February');
//     break;
//   case 3:
//     console.log('March');
//     break;
//   case 4:
//     console.log('April');
//     break;
//   case 5:
//     console.log('May');
//     break;
//   case 6:
//     console.log('June');
//     break;
//   case 7:
//     console.log('July');
//     break;
//   case 8:
//     console.log('August');
//     break;
//   case 9:
//     console.log('September');
//     break;
//   case 10:
//     console.log('October');
//     break;
//   case 11:
//     console.log('November');
//     break;
//   case 12:
//     console.log('December');
//     break;
//   default:
//     console.log('Invalid number');
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const threeDigitNumber = prompt('Введіть тризначне число (100-999):');
// const number = Number(threeDigitNumber);

// // Перевіряємо чи це тризначне число
// if (number >= 100 && number <= 999) {
//   // Розбиваємо число на цифри
//   const hundreds = Math.floor(number / 100); // перша цифра
//   const tens = Math.floor((number % 100) / 10); // друга цифра
//   const units = number % 10; // третя цифра

//   // Рахуємо суму цифр
//   const sum = hundreds + tens + units;

//   // Виводимо результат
//   console.log(`Число: ${number}`);
//   console.log(`Цифри: ${hundreds}, ${tens}, ${units}`);
//   console.log(`Сума цифр: ${hundreds} + ${tens} + ${units} = ${sum}`);

//   alert(`Сума цифр числа ${number} дорівнює ${sum}`);
// } else {
//   console.log('Це не тризначне число!');
//   alert('Будь ласка, введіть тризначне число від 100 до 999');
// }
