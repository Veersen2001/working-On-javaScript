class Person{

    constructor(n,a)
    {
     this.name = n;
     this.age = a;
     
    
    }
   
   getDetails()
   {
    if(this.name===undefined && this.age===undefined)
    {
         return `"Name:Unknow , Age:0"`;
    }
    else{
         return `"Name: ${this.name}, Age:${this.age}"`
    }
   
   }


}
 const person1 = new Person("Mithun",20);
console.log(person1.getDetails());

const person2 = new Person();
console.log(person2.getDetails());