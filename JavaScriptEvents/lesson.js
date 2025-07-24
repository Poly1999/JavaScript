//------------------------------ Події -----------------------------------//
// Подія – це сигнал від браузера у тому, що щось сталося.
// Події використовуються для реакції на дії відвідувача та виконання коду.
// Події стають у чергу та обробляються у порядку надходження, асинхронно,
// незалежно.

// Існує багато видів подій, розглянемо деякі з них.

// click - відбувається, коли клацнули на елемент лівою кнопкою миші
// submit - відвідувач надіслав форму
// focus - відвідувач фокусується на елементі, наприклад, натискає на input
// contextmenu – відбувається, коли клацнули на елемент правою кнопкою миші.
// mouseover / mouseout – коли миша наводиться на / залишає елемент.
// mousedown / mouseup – коли натиснули / відпустили кнопку миші на елементі.
// mousemove – під час руху миші.

//---------- EXAPLES -----------//

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn5 = document.querySelector('#btn5');
// const btn6 = document.querySelector('#btn6');

// btn1.addEventListener('click', () => console.log('click'));
// btn2.addEventListener('contexmenu', () => console.log('contexmenu'));

// btn3.addEventListener('mouseover', () => console.log('mouseover')); //коли наводим - з'являється
// btn3.addEventListener('mouseout', () => console.log('mouseout')); //коли прибираємо - з'являється

// btn4.addEventListener('mousedowm', () => console.log('mousedowm'));
// btn4.addEventListener('mouseup', () => console.log('mouseup'));

// btn5.addEventListener('mousemove', () => console.log('mousemove'));

// btn6.addEventListener('keyup', () => console.log('keyup'));
// btn6.addEventListener('keydown', () => console.log('keydown'));

//---------- EXAPLES -----------//

// add and remove

// const addBtn = document.querySelector('#add');
// const removeBtn = document.querySelector('#remove');
// const clickBtn = document.querySelector('#click');

// const handleClick = () => {
//   console.log('hello');
// };

// addBtn.addEventListener('click', () => {
//   clickBtn.addEventListener('click', handleClick);
// });

// removeBtn.addEventListener('click', () => {
//   clickBtn.removeEventListener('click', handleClick);
// });

//---------- EXAPLES -----------//

//get information

// const clickBtn = document.querySelector('#click');
// const infoClick = event => {
//   console.log('event', event.target);
// };

// clickBtn.addEventListener('click', infoClick);

//---------- EXAPLES -----------//

//submit

// const form = document.querySelector('.form');
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const login = loginInput.value;
//   const password = passInput.value;

//   console.log(`Login: ${login}, password: ${password}`);
//   form.reset();
// }

//---------- EXAPLES -----------//

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const item = document.querySelector('#item');

//variant 1

// parent.addEventListener('click', () => console.log('Click Parent'));
// child.addEventListener('click', () => console.log('Click child'));
// item.addEventListener('click', () => console.log('Click item'));

//variant 2

// const handleClick = event => {
//   console.log('event: ', event.target);
// };

// parent.addEventListener('click', handleClick);

//variant 3

// const itemClick = event => {
//   console.log('itemClick stop');
//   event.stopPropagation();
// };

// const childClick = event => {
//   console.log('Child stop');
//   event.stopPropagation();
// };

// const parentClick = event => {
//   console.log('Parent stop');
//   event.stopPropagation();
// };

// parent.addEventListener('click', parentClick);
// child.addEventListener('click', childClick);
// item.addEventListener('click', itemClick);

//---------- EXAPLES -----------//

//делагування

// const nav = document.querySelector('.nav');

// nav.addEventListener('click', handleClick);

// function handleClick(event) {
//   const checkClass = nav.querySelector('li.active');

//   if (checkClass) {
//     event.target.classList.remove('active');
//   } else {
//     event.target.classList.add('active');
//   }
// }

//------------------------------ Drag'n'Drop -----------------------------------//

//---------- EXAPLES -----------//

// const ball = document.querySelector('.ball');

// ball.onmousedown = function (event) {
//   function move(pageX, pageY) {
//     ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//     ball.style.top = pageY - ball.offsetWidth / 2 + 'px';
//   }

//   move(event.pageX, event.pageY);

//   function onMouseMove(event) {
//     move(event.pageX, event.pageY);
//   }

//   document.addEventListener('mousemove', onMouseMove);

//   ball.onmouseup = function () {
//     document.removeEventListener('mousemove', onMouseMove);
//   };
// };
