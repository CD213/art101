// index.js - whips
// Author: Cabe Davis
// Date: 28 April 2024

// Define Variables
myTransport = ["Bus","Rides from Roomies", "Mazda Miata"];

// create object 4 main ride
myMainRide = {
  make: "Mazda",
  model: "Miata",
  color: "Red",
  year: 1992,
  age: function() {
      return 2024 - this.year;
  }
}

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln ("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
