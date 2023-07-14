let re = /hi/;
let result = re.test("hi atul");

console.log(result); //true

// match()
let str = "Are you ok?yes,I'm OK";
let result1 = str.match(/ok/gi);
console.log(result1);
console.log(result1.join(''));

