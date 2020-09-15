$(document).ready(function(){
    $("#all").click(function(){
        $(".active").removeClass("active");
        $("#all").addClass("active"); 
    }); 
    $("#pending").click(function(){
        $(".active").removeClass("active");
        $("#pending").addClass("active"); 
    });  
    $("#completed").click(function(){
        $(".active").removeClass("active");
        $("#completed").addClass("active"); 
    }); 

    $("#plus").click(function(){
        console.log("cahercckhinang");
        $(".templet_1").addClass("hide");
        $(".templet_2").removeClass("hide"); 
        $("#right").addClass("hide");
        $("#direction").removeClass("hide");
    }); 

    $("#direction").click(function(){
        console.log("checking back");
        $("#direction").addClass("hide");
        $(".templet_1").removeClass("hide");
        $("#right").removeClass("hide");
        $(".templet_2").addClass("hide");
    });
});