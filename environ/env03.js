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
