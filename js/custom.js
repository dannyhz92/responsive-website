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
