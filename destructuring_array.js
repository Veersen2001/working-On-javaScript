// normal array
let introduction = ["Hello", "I" , "am", "Sarah"];
let greeting = introduction[0];
let name = introduction[3];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"

// destructuring
let introduction1 = ["Hello", "I" , "am", "Sarah"];
let [greeting1, pronoun] = introduction1;

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

// Skipping Items in an Array
let [greeting2,,,name2] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting2);//"Hello"
console.log(name2);//"Sarah"