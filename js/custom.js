// ==================================SERVICES+=======================

$(function() {
  // nimate on scroll
  new WOW().init();
});


$(function() {

  $("#work").magnificPopup({
    delegate:"a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});

// team section

$(function(){
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

$(function(){
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

$(function(){
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });

});

// clients

$(function(){
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

// navigation
 $(function(){

   $(window).scroll(function(){
     if($(window).scrollTop() < 50 ){
       $("nav").removeClass("vesco-top-nav");
       $("#back-to-top").fadeOut();
     } else {
       $("nav").addClass("vesco-top-nav");
       $("#back-to-top").fadeIn();

     }
   });

 });

$(function(){
  $("a.smooth-scroll").click(function(event){

    event.preventDefault();
    var section = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section).offset().top - 64
    },1250, "easeInOutExpo");

  });
});

$(function(){
  $(".navbar-collapse ul li a").on("click touch", function(){
    $(".navbar-toggle").click();
  });
});
