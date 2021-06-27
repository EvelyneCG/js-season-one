//07-classes/02-methods/script.js - 7.2: methods


document.getElementById("run").addEventListener("click", () => {
    // your code here
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }    
getfullName() {
      return this.firstName + " " + this.lastName;
  } 
  }

 function sayHello() {
     return "Hello ";
   }

    let user1 = new Person("Evelyne", "Colaço Garcia");
    let user2 = new Person("Elisandre", "Laenens");
    let user3 = new Person("Marianne", "Auquier");
    let user4 = new Person("Mélisande", "Vicari");

    console.log(sayHello() + user1.getfullName());
    console.log(sayHello() + user2.getfullName());
    console.log(sayHello() + user3.getfullName());
    console.log(sayHello() + user4.getfullName());
})
