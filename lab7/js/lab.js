// index.js - purpose and description here
// Author: Your Name
// Date:

function sortUserName() {
  var userName = window.prompt("Yo tell me your name big dawg, no capatalization:");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}
//output
document.writeln("You if your name wasn't lame: ", 
    sortUserName(), "</br>")

// let's get this party started
main();
