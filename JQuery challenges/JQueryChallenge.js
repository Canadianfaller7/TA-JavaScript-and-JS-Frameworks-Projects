// JQuery focusing on id
$(document).ready(function(){
    $("button").click(function(){
        $("#test").toggle();
    });
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
      });
    $("#p1").hover(function(){
        alert("You hovered over the p1 ID!")
    })
});


    

