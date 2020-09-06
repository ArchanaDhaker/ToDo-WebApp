$(document).ready(function(){
    $(".ItemButton").click(function(){
      $(".listing").append("<div class='NewValues'>"+" <div class='checkBox'><img src='assets/check_box_outline_blank-black-18dp.svg'></div>"+ $(".inputBox").val()+" <div class='edit'><img src='assets/edit-black-18dp.svg'><img src='assets/delete-black-18dp.svg'></div>" +"</div>");
    });

  });

