
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age



document.getElementById("run").addEventListener("click", () => {
    // your code here

let jour = document.getElementById("dob-day").value;
let mois = document.getElementById("dob-month").value;
let an = document.getElementById("dob-year").value;
let aujourdhui = new Date();

let anniversaire = new Date(an, mois, jour);

let x = aujourdhui - anniversaire;

let age = x / 31536000000;

alert("You are " + Math.round(age) + " years old.");

})();
