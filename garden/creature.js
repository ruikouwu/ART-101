
$("#crAdd").click( function(){

    let crName=$("#crName").val();
    let crAge=$("#crAge").val();

    console.log(crName);
    console.log(crAge);

    $("#creature-list").append(
        "<div id='creature'>"+crName+"<br>"+"Age: "+crAge+"</div>"
    )
    
    $("#crName").val("");
    $("#crAge").val("");
}); 