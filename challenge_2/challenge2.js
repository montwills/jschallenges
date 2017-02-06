$(function(){
  var defaultTitleColor = $("h1").css("color");


  // toggles heading color between red and black

  $("h1").click(function() {
    if ($(this).css("color") == defaultTitleColor) {
      $(this).css("color", "red");
    } else {
      $(this).css("color", defaultTitleColor);
    }
  })


  // Hides all odd number section links (zero-indexed).

  $(".title").filter(":even").slideUp(1200);

  
  // Replace all 'Bacon' with 'LASER VISION'

  $(".post").children().each(function() {
    $(this).html( $(this).html().replace(/Bacon/g, "LASER VISION") );
  })

  // Removed last 2 posts.

  $(".post").slice(-3).remove();

  
  // Removes [ad] images in right column

  $("aside img").fadeOut(2000);


  // Remove last 2 <hr/>

  $("hr:nth-last-child(2n - 1)").remove();
  $("hr:nth-last-child(1)").remove();
})