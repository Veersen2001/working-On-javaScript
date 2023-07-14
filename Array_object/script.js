// arrya to object

// Object.assign()
const arr1 = ["atul","veer","hello"];
const obj1 = Object.assign({},arr1);
console.log(obj1);

// object - spread

const obj2 ={...arr1}
console.log(obj2);

const arr = [
  ['name', 'bobby hadz'],
  ['age', 30],
];

const obj = Object.fromEntries(arr);

console.log(obj); // 👉️ { name: 'bobby hadz', age: 30 }
