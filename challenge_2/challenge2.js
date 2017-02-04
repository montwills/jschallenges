$(function(){
  var title = $("h1");
  var currentColor = title.css("color");
  var sectionLinks = $(".title");

  // Toggles heading color between red and black

  title.click(function() {
    if ($(this).css("color") === currentColor) {
      $(this).css("color", "red");
    }
    else {
      $(this).css("color", currentColor);
    }
  })

  // Hides all odd number section links. zero-indexed.

  sectionLinks.filter(":even").hide();

  
  // iterates through all <p>

  $("p").each(function() { 
    var comment = $(this).text(); 
    // comment is the text from each <p> this refers to the current element "p"
    $(this).text(comment.replace("Bacon", "LASER VISION"));
  })

  // Removed last 2 posts.

  $(".post").slice(-3).detach();
})