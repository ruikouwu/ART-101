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

$("#ghostyguy").hover(function () {
    $(this).addClass("reveal-ghost");
});

$("#ghost-button").hover(function () {
    $(this).addClass("reveal-ghost");
});

$(document).mousemove(function (event) {
    let leonOffset = $("#leonkennedy").offset();
    let leonX = leonOffset.left;
    let leonY = leonOffset.top;

    let distance = Math.hypot(event.pageX - leonX, event.pageY - leonY);

    if (distance < 200) {
        $("#leonkennedy").addClass("alert");
    } else {
        $("#leonkennedy").removeClass("alert");
    }
});

$(document).mousedown(function () {
    $("#scaryguy").addClass("shake");
});

$(document).mouseup(function () {
    $("#scaryguy").removeClass("shake");
});

$(document).keydown(function () {
    $("#hidden-message").fadeIn(2000);
});