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
  
});
