$(document).ready(function(){
    $("#all").click(function(){
        $(".active").removeClass("active");
        $("#all").addClass("active"); 
        $(".pendingTasks").addClass("hide");
    }); 

    $("#pending").click(function(){
        $(".active").removeClass("active");
        $("#pending").addClass("active"); 
        $(".pendingTasks").removeClass("hide");
    }); 
     
    $("#completed").click(function(){
        $(".active").removeClass("active");
        $("#completed").addClass("active"); 
        $(".pendingTasks").addClass("hide");
    }); 

    $("#plus").click(function(){
        console.log("checking plus");
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

    $(".imgBox").click(function(){
        $('#imgFile').trigger("click");
    })


});