class Employee{
  salary;
  name;
  position;
    constructor(s)
    {
      
     this.salary = s;

    }
   
   getSalary()
   {
    
    return this.salary;
   }


}
 const employee1 = new Employee(80000);
console.log(employee1.getSalary());