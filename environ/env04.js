let envTitle = "The Dark Forest";
let envEntities = ["hand", "ghost", "human"];

let leon = {
    name: "Leon", 
    mood: "suspicious", 
    entityType: envEntities[2]
};

let ghost = {
    name: "???",
    mood: "sneaky",
    entityType: envEntities[1]
};

let hand = {
    name: "Barry",
    mood: "tired",
    entityType: envEntities[0]
};

$("#hand-button").click(function () {
    let message = "<p> hey my name is " + hand.name + ".</p>"
    $("#output1").html(message);
});

$("#leon-button").click(function () {
    let message = "<p> hey my name is " + leon.name + ".</p>"
    $("#output2").html(message);
});

$("#ghost-button").click(function () {
    let message = "<p> hey my name is " + ghost.name + ".</p>"
    $("#output3").html(message);
});

function eliminateEntity(eliminate) {

    if (eliminate == "Barry") {
        $("#scaryguy").remove();
        $("#hand-button").remove();
        $("#output1").remove();
    }
    else if (eliminate == "???") {
        $("#ghostyguy").remove();
        $("#ghost-button").remove();
        $("#output3").remove();
    }
    else if (eliminate == "Leon") {
        $("#leon").remove();
        $("#leon-button").remove();
        $("#output2").remove();
    }
    else if (eliminate == "Everyone") {
        $("#scaryguy").remove();
        $("#hand-button").remove();
        $("#output1").remove();
        $("#ghostyguy").remove();
        $("#ghost-button").remove();
        $("#output3").remove();
        $("#leon").remove();
        $("#leon-button").remove();
        $("#output2").remove();
    }
}

$("#eliminate-button").click(function () {
    let eliminateWho = prompt("Who do you want to eliminate?");

    eliminateEntity(eliminateWho);
});