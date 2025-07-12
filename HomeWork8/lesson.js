//------------------------------------ DOM ---------------------------------------//

// DOM - об'єктна модель документа (Document Object Model).

// DOM це зовсім інше представлення веб-сторінки ніж HTML код.

// Браузер по вказаній URL адресі відправляє запит і отримує (завантажує) з
// сервера веб-сторінку у вигляді HTML коду, який часто називається вихідний код
// сторінки. І якщо у коді вказані інші файли такі як стилі css, js - то завантажує і їх.

// І уже з завантаженого з сервера HTML коду браузер формує - DOM.
// Браузер створює DOM для того щоб за допомогою JavaScript можна було швидко
// маніпулювати веб-документом: шукати потрібний елемент, додавати нові
// елементи, отримати наступний дочірний елемент і т.п..

//---------- Examples -----------//

// let elem = document.getElementById('elem');
// elem.style.background = 'green';

//querySelectorAll

// let elements = document.querySelectorAll('ul>li:last-child');

// for (element of elements) {
//   console.log(element);
// }

//querySelector

// let element = document.querySelector('li');
// console.log(element);

// let element = document.getElementsByTagName('div');
// console.log(element);

//------------------------------- Навігація по DOM ---------------------------------------//

// DOM дозволяє нам робити будь-що з елементами та їх вмістом, але спочатку нам
// потрібно знайти відповідний DOM об’єкт.

// Усі операції з DOM починаються з об’єкта document. Це головна “точка входу” в
// DOM. З нього ми можемо отримати доступ до будь-якого вузла.

//---------- Examples -----------//

//----------------------- Методи і властивості для роботи з DOM ------------------------------//

// JavaScript дозволяє на етапі форматування документу додавати до нього дані за
// допомогою методів document.write() і document.writeln().
// Методи для отримання елементу (ів) з документу:
// document.getElementById() - повертає елемент за вказаним id.
// document.getElementsByName() - повертає список елементів з вказаним name.
// document.getElementsByTagName - повертає список елементів за вказаною
// назвою тегу.
// document.getElementsByClassName() - повертає список елементів за вказаним
// ім'ям класу.
// document.querySelector() - повертає перший елемент в документі який співпадає
// з вказаним CSS селектором.
// document.querySelectorAll() - повертає список всіх елементів в документі, які
// відповідають зазначеним CSS селекторам.

//---------- Examples -----------//

//----------------------- Властивості DOM ------------------------------//

//hidden

// let textHidden = document.getElementById('textHidden');
// textHidden.hidden = true; //ховає текст
// textHidden.hidden = false; //показує текст

//

// let message = document.getElementById('message');
// console.log(message.value);

//class

// let text = document.querySelector('.text-message');
// console.log(text);

// let text = document.querySelector('.text-message');
// console.log(text.textContent);

//

// let text = document.querySelector('.text-message');
// // console.log(text.textContent);

// text.textContent = 'hello olga';

//styles

// let btn = document.querySelector('.button');

// btn.style.backgroundColor = 'red';

// let text = document.querySelector('#p_text');
// console.log(text.classList);
// console.log(text.classList.contains('red'));

// text.classList.remove('red');
// console.log(text.classList);
// console.log(text.classList.contains('red'));

// text.classList.add('new');
// console.log(text.classList);

//images Attribute

// let image = document.querySelector('.image');
// console.log(image.hasAttribute('src'));
// console.log(image.getAttribute('src'));

//

// const item = document.createElement('a');
// item.href = '#';
// item.classList.add('btn');
// item.textContent = '3';

// const nav = document.querySelector('.nav');
// nav.appendChild(item);

// const heading = document.createElement('h1');
// heading.textContent = 'Hello';

// const container = document.querySelector('.container');
// container.insertBefore(heading, nav);

//old option to delete item

// nav.removeChild(item);

//new option to delete item

// item.remove();

//clone

// const text = document.querySelector('.text');
// const parent = document.querySelector('.parent');

// const clone = text.cloneNode(true);

// parent.appendChild(clone);

//add line (text) - bad method

// const container = document.querySelector('.container');

// const text = `<p>Sorry</p>`;

// container.innerHTML = text; //deleted first line
// container.innerHTML += text; //left both line

//add line (text) - good method

const list = document.querySelector('#list');
list.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');
list.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>');
list.insertAdjacentHTML('beforeend', '<li>beforeend</li>');
list.insertAdjacentHTML('afterend', '<p>afterend</p>');
