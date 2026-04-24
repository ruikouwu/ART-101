// "let" is a variable catered toward values/numbers
let count = 0;
let grammar=["time", "times"];

$("#needy-button").click( function() {

    if (count < 1) {
        count = count + 1;
        $("#needy-button").html("You clicked me " + count + " " + grammar[0]);
    } else {
        count = count + 1;
        $("#needy-button").html("You clicked me " + count + " " + grammar[1]);
    }
});