// index.js -jQuery that uses buttons to modify site
// Author: Cabe Davis
// Date: 5/11/2024

$("#Challenge, #Problems, #Results").on("click", "button", function() {
  $(this).parent().toggleClass("special");});
  $("#Challenge, #Problems, #Results").each(function() {
    $(this).append("<button class='make-special'>Make Special</button>");});