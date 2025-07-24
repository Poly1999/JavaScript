//------------------------- Local Storage -----------------------------//
// Об’єкти веб-сховища localStorage та sessionStorage дозволяють зберігати дані в
// браузері у вигляди пар ключ/значення.

// Що цікаво, дані зберігаються навіть після оновлення сторінки (для sessionStorage)
// і після повного закриття і нового відкриття вікна браузера (для localStorage). Ми
// скоро перевіримо це на практиці.

// Обидва об’єкти сховища забезпечують однакові методи та властивості:

// setItem(key, value) – зберегти пару ключ/значення.
// getItem(key) – отримати значення за ключем.
// removeItem(key) – видалити дані за ключем.
// clear() – видалити все.
// key(index) – отримати ключ на заданій позиції.
// length – кількість збережених елементів.

// Як ви можете бачити, це схоже на колекцію Map (setItem/getItem/removeItem),
// але також дозволяє отримати доступ за індексом за допомогою key(index).

//-------------- EXAMPLE -----------//

// function check() {
//   let val = document.getElementsByName('radio');
//   if (val[0].checked) {
//     console.log('Male');
//   } else {
//     console.log('Female');
//   }
// }

// let form = document.querySelector('.form');
// let nameInput = document.querySelector('.inputName');
// let LastNameInput = document.querySelector('.inputLastName');
// let age = document.querySelector('#age');
// let sex = document.getElementsByName('radio');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const info = {
//     name: nameInput.value,
//     LastName: LastNameInput.value,
//     age: age.value,
//     sex: sex[0].checked,
//   };
//   console.log(info);
//   localStorage.setItem('info', JSON.stringify(info));
// }

// if (localStorage.getItem('info')) {
//   const ls = JSON.parse(localStorage.getItem('info'));
//   console.log(ls);
//   nameInput.value = ls.name;
//   LastNameInput.value = ls.lastName;
// }

//-------------- EXAMPLE -----------//

// let form = document.querySelector('#form');
// let formData = {};

// form.addEventListener('input', function (event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem('formData', JSON.stringify(formData));
// });

// if (localStorage.getItem('formData')) {
//   formData = JSON.parse(localStorage.getItem('formData'));

//   for (let key in formData) {
//     form.elements[key].value = formData[key];
//   }
// }

//------------------------- Node.js -----------------------------//

// Node.js — легке та ефективне середовище виконання JavaScript. Дозволяє писати
// високопродуктивні серверні програми та інструменти.

// Команди NPM

// npm init — ініціалізує npm та створює файл package.json
// npm install — встановлює всі залежності, перелічені в package.json
// npm list --depth=0 - виведе у терміналі список локально встановлених пакетів із
// номерами їх версій, без залежностей
// npm install [package-name] — установить пакет локально у папку node_modules
// npm uninstall [package-name] — видалити пакет встановлений локально та
// оновитьpackage.json
// npm start і npm test - запустить скрипт start або test, розташований в package.json
// npm run [custom-script] - запустить кастомний скрипт, розташований у
// package.json
// npm outdated — використовується для пошуку оновлень, виявить сумісні версії
// програмно та виведе список доступних оновлень
// npm update — оновить усі пакети до максимально дозволеної версії

//-------------- EXAMPLE -----------//

// Java Script
