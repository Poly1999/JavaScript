//---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }

// console.log(checkAge(20)); // true
// console.log(checkAge(16)); //ask user

// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }

// console.log(checkAge(20)); // true
// console.log(checkAge(16)); //ask user

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const min = (a, b) => {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// };
// console.log(min(5, 9));
// console.log(min(7, 3));

// const min = (a, b) => (a < b ? a : b);
// console.log(min(5, 9));
// console.log(min(7, 3));

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask('Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// ask(
//   'Ви згодні?',
//   () => alert('Ви погодились.'),
//   () => alert('Ви скасували виконання.')
// );

const subscribe = (userName, onSuccess, onCancel) => {
  if (confirm('Do you want to subscribe?')) {
    onSuccess(userName);
  } else {
    onCancel(userName);
  }
};

subscribe(
  'Polina',
  name => {
    alert('Thank you, ' + name + ', for subscribing!');
  },
  name => {
    alert("It's sad, " + name + '. Maybe next time!');
  }
);
