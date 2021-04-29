$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//change grid
// $('#change-grid').click(function(){
//  $('.item-1').css({"grid-column":"1", "grid-row":"span 4"});
//  $('.item-2').css({"grid-column":"2/4", "grid-row":"span 1"});
//  $('.item-3').css({"grid-column":"4/5", "grid-row":"span 4"});
//  $('.item-4').css({"grid-column":"2/3", "grid-row":"span 1"});
//  $('.item-5').css({"grid-column":"3/4", "grid-row":"span 1"});
//  $('.item-6').css({"grid-column":"2/4", "grid-row":"span 1"});
// });
