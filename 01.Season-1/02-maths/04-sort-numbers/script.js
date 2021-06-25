// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let array = [];
        let nbre = document.getElementById("numbers").value;
        let split = nbre.split(",");
        for (let nbre of split) {
array.push(Number(nbre)) }
array.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;

});

alert (array);


    });

})();
