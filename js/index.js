$(document).ready(function(){
    $(".ItemButton").click(function(){
      $(".listing").append(" <div>" + $(".inputBox").val()+ "</div>");
    });
    
  });