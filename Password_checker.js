class User{
    
    
    constructor(n,p)
    {
        this.name=n;
        this.pass = p;
    }
 setPassword(str)
    {
          if (str.match(/[a-z]/g) && str.match(/[A-Z]/g) && str.match( /[0-9]/g)  && str.length >=8)
          {
             this.pass = str;
          } 
         else
         {
            console.log("Error: Invalid password! Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
         }
              
      
    }
   getpassword()
    {
       return "*".repeat(this.pass.length);

    }
   
}

const user = new User("Mithun","Password123");
console.log(user.getpassword());

user.setPassword("myPassword");

user.setPassword("Mypasswotrd231");
console.log(user.getpassword());

