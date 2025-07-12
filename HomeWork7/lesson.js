//-----------------------------  VERSION ES6 (ES2015)  ------------------------------//

//arrow function
// const ob1 = {
//   p1: 'test',
//   p2: function () {
//     console.log(this.p1);
//   },
// };

// const ob2 = {
//   p1: 'test',
//   p2: () => {
//     console.log(this.p1);
//   },
// };

// ob1.p2();
// ob2.p2();

//enchanced object literals

// const a = 1,
//   b = 2;
// const obj = {
//   a,
//   b,
//   myMethod() {
//     return this.a + this.b;
//   },
//   ['1' + 2]: a,
//   [username]: b,
// };
// console.log('Enchanced Object Literals', obj.myMethod());

//destructuring

// const person = {
//   a: 'John',
//   b: 'Wick',
// };
// const { a: name, b: lastName } = person;
// console.log('Destructuring', name, lastName);

// const func11 = ({ a: name, b: lastName }) => {
//   console.log('Destructuring', name, lastName);
// };
// func11(person);

//default parameters

// const funcNew = ({ a: name, b: lastName, age = 20 }) => {
//   console.log('Destructuring', name, lastName, age);
// };
// funcNew(person);

//rest parameters

//spread operator

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5];
// console.log(' Spread Operator Array', arr2);

// console.log(' Spread Operator Array', ...arr2);

//for...of Loop

// for (const num of arr) {
//   console.log('for...of loop element: ', num);
// }

//symbols
// const sym = Symbol('mySymbol');
// const obj3 = { [sym]: 'Symbol Value' };
// console.log('Symbol Example', obj3[sym]);

//Iterators and Generators

// function* myGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = myGenerator();
// console.log('Generator:', gen.next().value);

//Map and Set

// const myMap = new Map();
// myMap.set('key', 'value');
// console.log('Map: ', myMap.get('key'));

// const mySet = new Set([1, 2, 2, 3]);
// console.log('Set:', mySet.size);

//Promises
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise Resolved!'), 500);
// });

// myPromise.then(result => console.log('Promise then: ', result));

//Modules

//Proxies
// const target = {};
// const handler = {
//   get: function (obj, prop) {
//     return prop in obj ? obj[prop] : 'Property does not exist';
//   },
// };
// const proxy = new Proxy(target, handler);
// console.log('Proxy Example:', proxy.nonExistentProperty);

// //Typed Arrays
// const typedArray = new Int32Array([1, 2, 3]);
// console.log('Typed Array', typedArray[0]);

//-------------------------NEW VERSION ES7 (ES2016) Features ------------------------------//

//Array.prototype.includes()
// console.log('Includes', arr.includes(2));

//Exponentiation Operator
// console.log('Exponentiation Operator', 2 ** 3);

//-------------------------NEW VERSION ES8 (ES2017) Features ------------------------------//

//async and await

// async function myAsyncFunction() {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Server response'), 1000);
//   });
//   const result = await myPromise;
//   console.log('Async/Await: ', result);
// }
// myAsyncFunction();

//Object.entries(), Object.values(), Object.keys()

// console.log('Object.entries', Object.entries(person));
// console.log('Object.values', Object.values(person));
// console.log('Object.keys', Object.keys(person));

//String.phototype.padStart(), String.prototype.padEnd()
// console.log('padStart', '5'.padStart(3, '0'));
// console.log('padEnd', '5'.padEnd(3, '0'));

//-------------------------NEW VERSION ES9 (ES2018) Features ------------------------------//

//Rest/Spread Properties for Objects

// const obj2 = {
//   a: '123',
//   b: '1',
//   c: '2',
//   d: '3',
// };
// const { a: first2, ...rest2 } = obj2;
// console.log('Rest Properties', rest2);

// const obj4 = { ...obj2, d: 4 };
// const obj42 = { d: 4, ...obj2 };
// console.log('Spread Properties Object 2', obj4);
// console.log('Spread Properties Object 2', obj42);

//Promise.prototype.finally()
// myPromise
//   .then(() => console.log('Promise finished'))
//   .finally(() => console.log('Promise cleanup'));

// //Asynchronous Iteration
// async function asyncIteration() {
//   async function* asynGenerator() {
//     console.log('Async Iteration', num);
//   }
// }
// asyncIteration();

//-------------------------NEW VERSION ES10 (ES2019) Features ------------------------------//

//Array.prototype.flat(), Array.prototype.flatMap()
// const nestedArray = [1, [2, [3, 4]]];
// console.log('Flat Array', nestedArray(2));

// const number = [1, 2, 3];
// const flatMapResult = number.flatMap(x => [x * 2]);
// console.log('Flat Map Array', flatMapResult);

//string.prototype.trimStart(), String.prototype.trimEnd()
// const stringWithWhitespace = ' Hello ';
// console.log('Trim Start', stringWithWhitespace.trimStart());

//Object.fromEntries

// const entries = [
//   ['name', 'Charlie'],
//   ['age', 30],
// ];
// const newObject = Objectfrom.Entries(entries);
// console.log('Objectfrom.Entries', newObject);

//Optional catch binding

//-------------------------NEW VERSION ES11 (ES2020) Features ------------------------------//

//BigInt
// const bigInt = 1284753560374510837456187345018346507465834658173645871n;
// console.log('BigInt', bigInt);

//Nullish Coalescing Operator (??)

//Optinal Chaining Operator (?.)

// Promise.allSettled()
// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject(2);

// Promise.allSettled([promise1, promise2]).then(results => {
//   console.log('Promise.allSettled', results);
// });

//import() Function (Dynamic Import)

//globalThis
// console.log('globalThis', globalThis);

//String.prototype.replaceAll()
// const text = 'This is a test';
// console.log('String ReplaceAll', text.replaceAll('test', 'success'));

//-------------------------NEW VERSION ES12 (ES2021) Features ------------------------------//

//Numeric Separators

//Promise.any()

//Logical Assignment Operators

//-------------------------NEW VERSION ES13 (ES2022) Features ------------------------------//

//Top-Level Await (Requires module context)

//Class Static Blocks (See Class Example)

// .at() Method

//Error Cause

// Object.hasOwn()
