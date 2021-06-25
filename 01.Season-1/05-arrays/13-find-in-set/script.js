// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


document.getElementById("run").addEventListener("click", () => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here

    console.log(people.size);
    console.log((people.has("Alexandre")) + ", there is an Alexandre in the Set people.");

})();
