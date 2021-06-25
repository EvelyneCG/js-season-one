// 06-objects/04-from-entries/script.js - 6.4: fromEntries


document.getElementById("run").addEventListener("click", () => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    let createObj = [];
        keys.forEach((item, index) => {
            createObj.push([item, values[index]]);
        });
        const object = Object.fromEntries(createObj);
        console.log(object);
    
})();
