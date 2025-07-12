// Домашнє завдання
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

// class Abonent {
//   constructor(name, phone) {
//     this.name = name;
//     this._phone = phone;
//   }
//   set phone(number) {
//     if (typeof number === 'string' && number.length >= 7) {
//       this._phone = number;
//     } else {
//       console.log('Невірний номер телефону');
//     }
//   }

//   get info() {
//     return `Абонент: ${this.name}, номер: ${this._phone}`;
//   }
// }

// const user1 = new Abonent('Anton', '0671231233');
// const user2 = new Abonent('Polina', '0503304589');
// const user3 = new Abonent('Mark', '0663459876');

// console.log(user1.info);
// console.log(user2.info);
// console.log(user3.info);

// user1.phone = '067000';
// console.log(user1.info);

// user2.phone = '0985670978';
// console.log(user2.info);
