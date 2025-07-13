// Домашнє завдання
// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const text = document.getElementById('text');
// const button = document.getElementById('button');

// button.addEventListener('click', () => {
//   text.hidden = true;
// });

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const button = document.getElementById('hideMyself');

// button.addEventListener('click', () => {
//   button.hidden = true;
// });

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const tree = document.querySelector('.tree');

// tree.addEventListener('click', event => {
//   const li = event.target.closest('.tree-item');
//   if (li && tree.contains(li)) {
//     li.classList.toggle('open');
//   }
// });
