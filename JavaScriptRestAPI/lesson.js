//--------------------- REST API -------------------------//

// const { act } = require('react');

// Протокол — набір правил та угод, які використовуються під час передачі даних у мережі.
// Перед тим як користувач побачить вміст сайту на екрані, браузер робить запит на сервер, щоб отримати цей вміст. HTML-файл, зображення, стилі, скрипти - кожен елемент надходить із сервера.

// TCP/IP
// TCP/IP - Основний протокол мережі Internet. Це два протоколи тісно пов'язані між собою.
// TCP (Transmission Control Protocol) - протокол керування передачею. Визначає, яким чином інформація має бути розбита на пакети та надіслана каналами зв'язку. TCP має пакети в потрібному порядку, а також перевіряє кожен пакет на наявність помилок при передачі.
// IP (Internet Protocol) — кожен інформаційний пакет містить IP-адреси комп'ютера- відправника та комп'ютера-отримувача. Спеціальні комп'ютери, які називають маршрутизаторами, використовуючи IP-адреси, направляють інформаційні пакети в потрібну сторону, тобто до зазначеного в них одержувача.

// HTTP/ HTTPS
// HTTP определяет множество методов запроса, которые указывают, какое желаемое действие выполнится для данного ресурса. Несмотря на то, что их названия могут быть существительными, эти методы запроса иногда называются HTTP глаголами. Каждый реализует свою семантику, но каждая группа команд разделяет общие свойства: так, методы могут быть безопасными, идемпотентными или кешируемыми.
// HTTP це дані ,які можно взламати
// HTTPS це зашифровані дані
// GET
// Метод GET запрашивает представление ресурса. Запросы с использованием этого метода могут только извлекать данные.
// POST используется для отправки сущностей к определённому ресурсу. Часто вызывает изменение состояния или какие-то побочные эффекты на сервере.
// PUT заменяет все текущие представления ресурса данными запроса.
// DELETE удаляет указанный ресурс.

// CRUD
// CRUD - створення (create), читання (read), оновлення (update) та видалення (delete), чотири основні методи для взаємодії з ресурсами REST API. У REST-архітектурі CRUD відповідає наступним HTTP-методам.
// POST (create) – створити новий ресурс
// GET (read) - отримати набір ресурсів або певний ресурс за ідентифікатором
// PUT (update) або PATCH (update) – оновити ресурс за ідентифікатором
// DELETE (delete) - видалити ресурс за ідентифікатором

//Як відправляти на сервер запити через JS і отримувати інформацію (типу login pages або якісь форми)
// Метод Fetch

// let promise = fetch(url, options)

// let promise = fetch(url, {
//   method: 'GET', // POST, PUT, DELETE та інші
//   headers: {
//     // значення цього заголовку зазвичай встановлюється автоматично,
//     // // залежно від тіла запиту
//     'Content-Type': 'text/plain; charset=UTF-8',
//   },
//   body: undefined, // string, FormData, Blob, BufferSource aбo URLSearchParams
//   referrer: 'about: client', // або "', щоб не посилати заголовок Referer,
//   //або URL з поточного джерела
//   referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, origin, same-origin...
//   mode: 'cors', // same-origin, no-cors
//   credentials: 'same-origin', // omit, include
//   cache: 'default', // no-store, reload, no-cache, force-cache або only-if-cach
//   redirect: 'follow', // manual, error
//   integrity: '', // контрольна сума, наприклад "sha256-abcdef1234567890"
//   keepalive: false, // true
//   signal: undefined, // AbortController, щоб перервати запит
//   window: window, // null
// });

// async/await
// це асинхронні функції
//async завжди повертає promise
//await мусить чекати наш JS поки promise не виконається

// async function a() {
//   return  true;
// }

// a().then(console.log);

// let value = await promise;

// async function a() {
//   let prom = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   let result = await prom;
//   console.log(result);
// }
// a();

// ---------- PRACTICE FATCH

// return fetch("https://api.monobank.ua/bank/currency");

// const monocurrency = async () => {
//   let response = await fetch('https://api.monobank.ua/bank/currency');

//   if (response.ok) {
//     console.log('OK');
//     console.log('Response: ', response.json()); // response.text
//   } else {
//     console.log('Err: ', response.status);
//   }
// };
// monocurrency();

// Headers HTTP
// Заголовки HTTP позволяют клиенту и серверу отправлять дополнительную информацию с HTTP запросом или ответом. В HTTP-заголовке содержится не чувствительное к регистру название, а затем после (:) непосредственно значение. Пробелы перед значением игнорируются.

// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'X-Custom_Header': 'custom value',
// });

// headers.has('Content-Type'); // і так далі

// const postTest = async () => {
//   let user = {
//     name: 'Ivan',
//     city: 'Kyiv',
//   };

//   let response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// postTest();

// try...catch
// якщо скрипт обвалюється , то ця конструкція опрацьовує помилку

// example without errors
// try {
//   console.log('Start');
//   console.log('Finish');
// } catch (err) {
//   console.log('Errr');
// }

// example with errors
// try {
//   console.log('Start');
//   a;
//   console.log('Finish');
// } catch (err) {
//   console.log('Errr');
// }
// "start" will show , but after "start" script will go to catch

// try..catch працює синхроно

// example without errors

// setTimeout(function () {
//   try {
//     console.log('OK');
//   } catch (err) {
//     console.log('Errr');
//   }
// }, 1000);

// example with errors

// setTimeout(function () {
//   try {
//     da;
//   } catch (err) {
//     console.log('Errr');
//   }
// }, 1000);

// try { } catch (err) {
// err.name //err.message
// }

// try {
//   da;
// } catch (err) {
//   console.log(err.name);
// }

// try {
//   da;
// } catch (err) {
//   console.log(err.message);
// }

// try {
//   da;
// } catch (err) {
//   console.log(err.stack);
// }

//PRACTICE

//1

// let json = ``;

// try {
//   let user = JSON.parse(json);
// } catch (err) {
//   console.log('Errr', err.message);
// }

//2

// let json = `{"name": "Ann"}`;

// try {
//   let user = JSON.parse(json);
//   console.log('user', user);
// } catch (err) {
//   console.log('Errr', err.message);
// }

// let json = `{"name": "Ann"}`;

// try {
//   let user = JSON.parse(json);
//   console.log('start');
//   //   console.log('user', user.city);
//   //   if (!user.city) {
//   //     throw new SyntaxError('Error with city');
//   //   }
// } catch (err) {
//   console.log('Errr', err.message);
// } finally {
//   console.log('finally');
// }

//Веб-сокети (Web Sockets) – це технологія, яка дозволяє створювати та підтримувати неприривне, двонаправлене з'єднання між клієнтом (браузером) та сервером для обміну даними у реальному часі.
// ws - не захищенний , wss - захищенний(треба використовувати цей)

// let socket = new WebSocket('wss://uk.javascript.info/try-catch');

// socket.onopen = function (e) {
//   console.log('Connect');
//   socket.send('Hello');
// };

// socket.onmessage = function (e) {
//   console.log('message', e.data);
// };

// socket.onclose = function (event) {
//   if (event.wasClean) {
//     console.log('Connected stop', event.code);
//   } else {
//     console.log('Error');
//   }
// };

// socket.onerror = function (err) {
//   console.log('err');
// };
