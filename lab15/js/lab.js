//Author: Cabe Davis
// Date: 6/2/2024

$("#activate").click(function() {
    $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/{treeko}/",
    type: "GET",
    dataType : "json",
    success: function(data) {
        $("output").text(data.value);
    },
    error: function (jqXHR, textStatus, errorThrown) { 
        console.log("Error:", textStatus, errorThrown);
    }
})
})
