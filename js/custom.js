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
