document.getElementById("myBtn").addEventListener("click", open_close);
var menuState = 0 // close
function open_close() {
  if(menuState === 0){
     menuState = 1;
     document.getElementById("mySidenav").style.width = "20%";
     document.getElementById("main").style.marginLeft = "20%";
     document.getElementById("main").style.opacity=0.5;
  }
  else {
     menuState = 0;
     document.getElementById("mySidenav").style.width = "0%";
     document.getElementById("main").style.marginLeft = "0%";
     document.getElementById("main").style.opacity=1;
  }
  console.log(menuState);
}


// function hideLoader() {
//   $('#loading').hide();
// }

// $(window).ready(hideLoader);

// // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
// setTimeout(hideLoader, 20 * 1000);  

// $('ul.nav').find('a').click(function(){
//    var $href = $(this).attr('href');
//    var $anchor = $('#'+$href).offset();
//    // window.scrollTo($anchor.left,$anchor.top);
//    $('body').animate({ scrollTop: $anchor.top });
//    return false;
// });

{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
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
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
</script> */}