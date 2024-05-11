// index.js -jQuery that uses buttons to modify site
// Author: Cabe Davis
// Date: 5/11/2024

$("#Challenge").append("<button id='button-challenge'>Make Special</button>");

$("#Problems").append("<button id='button-challenge'>Make Special</button>");

$("#Results").append("<button id='button-challenge'>Make Special</button>");


$("button-challenge").click(function(){
  $("#Challenge").toggleClass("special");
});

$("button-challenge").click(function(){
  $("#Problems").toggleClass("special");
});

$("button-challenge").click(function(){
  $("#Results").toggleClass("special");
});