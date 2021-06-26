// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here

    var Damn = document.getElementsByClassName("target");

    for (var i = 0; i < Damn.length; i++) {
      Damn[i].innerHTML = "Owned!";
      }
})();
