// "let" is a variable catered toward values/numbers
let count = 0;
let grammar=["time", "times"];
let colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click( function() {

    $("#needy-button").click(function () { 
    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] );
    $("body").css("background-color", colors[count]);
    count = count + 1;
    });

    if (count == 4) {
        count = 0;
        console.log("it happened");
    }

    if (colors[count] == "HotPink") {
        $("needy-button").after("Pink");
    }

});

