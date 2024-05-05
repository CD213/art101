// index.js - purpose and description here
// Author: Cabe
// Date:

function calculator(x){
  return (x/2);}

Array = [20, 40, 60, 80, 100]
console.log("Cabe's Array", Array);

var result = Array.map(calculator);
console.log("The Array divided by 2:", result);

var result = Array.map(function(x){
  return x ** 2;
}
)
console.log("The Array Squared:", result);