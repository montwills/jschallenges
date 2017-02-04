$(function(){
  var title = $("h1");
  var currentColor = title.css("color");


  title.click(function() {
    if ($(this).css("color") === currentColor) {
      $(this).css("color", "red");
    }
    else {
      $(this).css("color", currentColor);
    }
  })


  $(".title").filter(":even").hide();


  
	//all your code should go here

})