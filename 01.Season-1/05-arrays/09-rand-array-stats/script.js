// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

document.getElementById("run").addEventListener("click", () => {
    // your code here

let nRand = 10    
let arr = []
function rand10() {
    return Math.trunc(Math.random() * 100) + 1
}
function multiRand(n) {
    
    for (let i = 0; i < n; i++)
        arr.push(rand10())

    return arr
}


function average(arr) {
	return arr.reduce((a,b) => a + b, 0) / arr.length;}
    
function min(arr) {
        return Math.min(...arr);}
    
function max(arr) {
        return Math.max(...arr);}

function getArraySum(arr){
            var total=0;
            for(var i in arr) { 
                total += arr[i];
            }
            return total;
        }

console.log("The " + nRand + " random numbers of the array are " + multiRand(nRand) + ".");
console.log("The smallest number is " + min(arr) + ".");
console.log("The biggest number is " + max(arr) + ".");
console.log("The sum of those numbers is " + getArraySum(arr) + ".");
console.log("The average of all numbers is " + average(arr) + ".");




})
