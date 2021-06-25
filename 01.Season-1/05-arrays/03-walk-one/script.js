// 05-arrays/01-get-element/script.js - 5.1: walk through the list


document.getElementById("run").addEventListener("click", () => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here

    let fLen = fruits.length;

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
      text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

    console.log(fruits);

})();
