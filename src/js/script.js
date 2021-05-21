let value = true, value2;
let str1 = "23ss";
let ref = null;
//console.log( Boolean("Привет!")); // string
let s = +true;
let apples = "2";
let oranges = "3";
//let num = 12; //alert( +apples + +oranges ); // 5

//alert( num.toString(2) );  // ff
let num = 1.23556;

//alert( +num.toFixed(2) );
// let str = 'Widget Nuts';
// alert( str.slice(0, 4) ); 
// alert( str.substring(4, 0) ); 
// alert( str.substr(-4, 3) );
//  alert( "we".codePointAt(0) ); // 90
//  alert( String.fromCodePoint(114) + String.fromCodePoint(97)); // Z
// alert( 'Nsterreich'.localeCompare('Aealand') ); // -1
//alert( 'S\u0207' ); // Ṡ
//alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
// let str = '';
// let alfa = [];
// for (let i = 65; i <= 120; i++) {
//     str = String.fromCodePoint(i);
//     alfa.push(str)
// }
// console.log( alfa );
// alert(alfa.toString())

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15

// let a = 1;let b = 2;let c = 3 - (a = b + 1);
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
// //alert(a+'-'+b+'-'+c+'-'+d);
// let func = function(arg1, arg2, ...argN) {
//     let expression = arg1 + arg2;
//     return expression;
// };
// console.log(func(23,44));

// Recursion
// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
// function foo(){
//     let num2;
//     if (true) {
//         var num1 = 5;        // существуют в области видимости функции
//         num2 = 10;     // существуют в области видимости блока
//         let num3 = 23;       // существуют в области видимости блока
//     }
//     console.log(num1);
//     console.log(num2);
// }
// function foo1(){
//     var num1 = 5;
//     const num2 = 10;
//     let num3 = 23;
//     function foo2(){
//         console.log(num1);
//         console.log(num2);
//         console.log(num3);
//     }
//     foo2();
// }
//
// function foo(){
//     a = a+2;
//     console.log(a); // 5
// }
// function bar(){
//      var a = 10;
//     foo();
// }
// var a = 7;
//
// function User(name) {
//     // методом объекта становится вложенная функция
//      function sayHi() {
//         alert(name);
//     }
// }
// let userLa = new User("John");
// //user.sayHi();
// function makeCounter() {
//     let count = 0;
//     return function() {
//         console.log(count);
//         return count=count+2; // есть доступ к внешней переменной "count"
//     };
// }
//
// function makeWorker() {
//     let name = 'Vasia';
//     return function() {
//         console.log(name);
//     };
// }
// let name = 'Jony';
// let work = makeWorker();
// //work();
//
// let counter = makeCounter();
//
// let user = {
//     firstName: "Вася",
//     sayHi() {
//         console.log(`Привет, ${this.firstName}!`);
//     }
// };
// // Not working
// //setTimeout(user.sayHi, 1000); // Привет, undefined!
// // Working variant
// // setTimeout(function() {
// //     user.sayHi(); // Привет, Вася!
// // }, 1000);
//
// // setTimeout(() => user.sayHi(), 1000); // Привет, Вася!
// // user = { sayHi() { alert("Другой пользователь в 'setTimeout'!"); } };
//
// let user1 = {
//     firstName: "Вася",
//     lastName: "Petrov",
//     sayGoodBye(){
//         alert(`Good Bye, ${this.firstName}!`);
//     }
// };
// function func() {
//     alert(this.firstName+this.lastName);
// }
// let funcUser = func.bind(user1);
// //funcUser();
// let sayGood = user1.sayGoodBye.bind(user1); // Привет, Вася!
// //sayGood();
//
//
// let user2 = {
//     firstName: "Вася",
//     lastName: "Petrov",
//     sayWord(phrase){
//         alert(`${phrase} ${this.firstName}?`);
//     }
// };
//
// let sayWord = user2.sayWord.bind(user2);
// //sayWord('What`s hapend');
//
// //setTimeout(sayWord('What`s hapend'), 2000); // Привет, Вася!
// let userAll = {
//     name:'Petia',
//     surname: 'Ivanov',
//     do(phrase){
//         alert(`${phrase} ${this.firstName}?`);
//     },
//     go(phrase){
//         alert(`${phrase} ${this.firstName}?`);
//     }
// }
// for (let key in userAll) {
//     if (typeof userAll[key] == 'function') {
//         userAll[key] = userAll[key].bind(userAll);
//     }
// }
// //userAll.go();
// let str = "Kavabanba";



// if(str.includes('Ka',0)){
//     console.log(str.includes('ba',5));
// }else{
//     console.log('str.indexOf is not defined');
// }
//console.log( "Fidget".startsWith("Wid") );
// let sayHi = user.sayHi.bind(user); // (*)
//setTimeout(sayHi, 1000); // Привет, Вася!
