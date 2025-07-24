// Домашнє завдання
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//   name: 'Mark',
//   specialty: 'Computer Science',
//   averageGrade: 4.5,
//   missedClasses: 2,
//   logInfo: function () {
//     console.group(`${this.name} info:`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Specialty: ${this.specialty}`);
//     console.log(`Average Grade: ${this.averageGrade}`);
//     console.log(`Missed Classes: ${this.missedClasses}`);
//     console.groupEnd();
//   },
// };

// studentInfo2 = {
//   name: 'German',
//   specialty: 'Mathematics',
//   averageGrade: 4.8,
//   missedClasses: 1,
// };

// studentInfo3 = {
//   name: 'Anna',
//   specialty: 'Physics',
//   averageGrade: 4.2,
//   missedClasses: 3,
// };

// studentInfo.logInfo.bind(studentInfo)();
// studentInfo.logInfo.call(studentInfo2);
// studentInfo.logInfo.apply(studentInfo3);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const htmlBtn = document.querySelector('.html-btn');
// const cssBtn = document.querySelector('.css-btn');

// const output = document.querySelector('.output');

// htmlBtn.addEventListener('click', function () {
//   output.textContent =
//     'HTML — це мова розмітки для створення структури веб-сторінок.';
// });

// cssBtn.addEventListener('click', function () {
//   output.textContent =
//     'CSS — це мова стилів для оформлення вигляду веб-сторінок.';
// });

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// function shop(productName, pricePerKg, quantity) {
//   const totalCost = pricePerKg * quantity;
//   return 'Product: ' + productName + ' Total Cost: ' + totalCost + ' UAH';
// }

// console.log(shop('Banana', 30, 4.5));
// console.log(shop('Cherry', 58, 1.3));
// console.log(shop('Orange', 89, 3.4));
