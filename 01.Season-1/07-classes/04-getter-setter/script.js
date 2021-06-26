// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


document.getElementById("run").addEventListener("click", () => {
    // your code here

    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }    
get fullName() {
      return this.firstName + " " + this.lastName;
  } 
  
set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
  set changeName(newName) {
    this.firstName = newName;
}
};


    let user1 = new Person("Evelyne", "Colaço Garcia");
    let user2 = new Person("Elisandre", "Laenens");
    let user3 = new Person("Marianne", "Auquier");
    

console.log(user1.fullName);
user1.changeName = "Evy";
console.log(user1.fullName);
}    
);
