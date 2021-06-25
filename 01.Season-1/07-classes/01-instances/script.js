// 07-classes/01-instances/script.js - 7.1: instances


document.getElementById("run").addEventListener("click", () => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    let chat1 = new Cat("Skitty", 9);
    let chat2 = new Cat("Pixel", 6);

    console.log(chat1, chat2);
})();
