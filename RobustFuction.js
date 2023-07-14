console.log(getPerson({name:"Mithun", age:20}));
console.log(getPerson({name:"Mithun"}));
console.log(getPerson(["Mithun", "name"]));


  function getPerson(person) {
  try {
    if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
      throw error;
    }
    
    const { name, age } = person;
    return `Name: ${name}, Age: ${age}`;
  }
   catch (error) {
    return "Invalid parameter type";
  }
}

