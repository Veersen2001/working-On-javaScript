// function Student(name) {
//   this.name = name;
// }

// Student.prototype.printDetails = function() {
//   console.log("Hello, my name is " + this.name);
// };

// // Instantiate a Student object with the name "Mithun"
// const student = new Student("Mithun");

// // Call the printDetails method
// student.printDetails();




// Temporal Dead Zone => let / const
console.log(bar); // undefined
  console.log(foo); // ReferenceError
var bar = 1; 
let foo = 2; // End of TDZ (for foo)