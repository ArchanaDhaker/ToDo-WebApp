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
        console.log("checking plus");
        $(".templet_1").addClass("hide");
        $(".templet_2").removeClass("hide"); 
        $("#right").addClass("hide");
        $("#direction").removeClass("hide");
        //$("#plus").addClass("hide");
    }); 

    $("#direction").click(function(){
        console.log("checking back");
        $("#direction").addClass("hide");
        $(".templet_1").removeClass("hide");
        $("#right").removeClass("hide");
        $(".templet_2").addClass("hide");
    });

    $(".imgBox").click(function(){
        // yaha ander krna hai
        // wo input div g box ke ander hai isliye imgbox pe click hone pe ek loop ban raha hai bahar nikaal de us div ko
        $('#imgFile').trigger("click");
    })
});