
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
let confirmy = false
while (!confirmy) {
    let age = prompt("How old are you?");
    let gender = prompt("Which gender are you?");
    let town = prompt("In wich town do you live?");
    
    confirmy = confirm ("You are " + age + " years old, you're a " + gender + " and you live in " + town + ".");

    if (confirmy) {
        alert ("Thanks for your personal informations. I'm gonna hack you!");
    }}


})();
