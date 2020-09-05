$(document).ready(function(){
    $(".ItemButton").click(function(){
      $(".listing").append("<div class='NewValues'>"+" <div><img src='assets/check_box_outline_blank-black-18dp.svg'></div>"+ $(".inputBox").val()+" <div><img src='assets/edit-black-18dp.svg'><img src='assets/delete-black-18dp.svg'></div>" +"</div>");
    });
    
  });