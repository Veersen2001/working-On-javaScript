// const userOne=()=>{
//     return "first page";
// }
// const userTwo = () =>{
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve("Login System");
//     },2000);
//   })

   
// }

// const userThree=()=>{
//     return "home";
// };

// const callme= async ()=>{
//     let one = userOne();
//     console.log(one);
    
//     let two =  await userTwo();
//     console.log(two);

//     let three = userThree();
//     console.log(three);

// };
// callme();


let c = { greet: 'Hi!' };

let d;



d = c;

c.greeting = 'Hello!';

console.log(d.greeting);
console.log(c);

