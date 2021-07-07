let objKey = {name: "Vasia"}
let map = new Map()
map.set(1, "one")
map.set("1", "one string")
map.set("two", "two string")
map.set(true, "true")
map.set(objKey, "object value")
//console.log(map)

let obj = {
  name: "John",
  age: 30,
  height: 172
};


let mapFromObj = new Map(Object.entries(obj));
let map3 = new Map(
  [
    ['banana', "banan"],
    ['orange', "or"],
    ['meat', "met"]
  ]
)
let prices = Object.fromEntries(map3.entries());
let map2 = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);
let arrayFromMap = Array.from(map3)

// console.log(mapFromObj);
// console.log(prices);
//console.log(arrayFromMap[0]);
// for(let item of mapFromObj.entries()){
//     console.log(item)
// }

let set = new Set();
let jony = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let vasia = { name: "Vasia" };
// считаем гостей, некоторые приходят несколько раз
// set.add(jony);
// set.add(pete);
// set.add(mary);
// set.add(jony);
// set.add(mary);
// set.add(mary);

// function unique(arr) {
//     return Array.from(new Set(arr));
//   //   let set = new Set();
//   // for(let item of arr){
//   //     set.add(item)
//   // }
//   // return set;
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr) {
//     let map = new Map();
//     for (let word of arr) {
//         // разбиваем слово на буквы, сортируем и объединяем снова в строку
//         let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//         map.set(sorted, word);
//     }
//     return Array.from(map.values());
// }
//console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// for (let value of set2.values()) console.log(value);
// for (let user of set) {
//     console.log(user.name); // John (потом Pete и Mary)
// }
// set2.forEach((value, valueAgain, set) => {
//     console.log(value);
// });
// console.log(set)

let weakMap = new WeakMap();
let obj_1 = {};
weakMap.set(jony, "jony"); // работает (объект в качестве ключа)
weakMap.set(pete, "pete"); // работает (объект в качестве ключа)
jony = null;
// console.log(weakMap)
// console.log(weakMap.get(jony))
console.log(true.length)
