// 07-classes/03-inheritance/script.js - 7.3: inheritance


document.getElementById("run").addEventListener("click", () => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
})();
