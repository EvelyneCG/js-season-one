// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

document.getElementById("run").addEventListener("click", () => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

fruits[0] = "banana";
fruits[9] = "kiwi";

console.log(fruits);
alert(fruits);

})();
