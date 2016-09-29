$(document).ready(function (){

// Smooth Scrolling for internal links

$('a[href^="#"]').on("click",function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $("html, body").stop().animate({
          "scrollTop": $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

// Change background of nav bar on scroll
$("#home").addClass("animated bounce");
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > window.innerHeight - 55) {
      $(".navbar").removeClass("transparent");
    } else {
      $(".navbar").addClass("transparent");
    }
});



// Activate scrollspy to highlight nav item when scrolled over
 $('button').click(function(){
 $('h1').stop().animate({ color: 'red' }, 1000);
 });


$("#home").addClass('animated bounce');

$("body").scrollspy({target: ".navbar"})

// Bind events to open and close portfolio popups
$(".thumbnail-overlay").on("click", openProject.bind( this ))
$(".close-window").on("click", closeWindow.bind(this))

function openProject( event ) {
  if ( $(event.target).next(".thumbnail-overlay") ) {
    var id =  "#" + $(event.target).parent().attr("page");
    $(id).fadeIn()
  } else {
    var id =  "#" + $(event.target).attr("page");
    console.log(id)
    console.log($(event.target))
    $(id).fadeIn()
  }
}

function closeWindow( event ) {
  $(event.target).parents(".full-screen").fadeOut();
}

});
