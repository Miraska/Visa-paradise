
$(function() {


  // Header fixed
  let header = $("#header");
  let intro = $("#intro");
  let introH;
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let nav__icons = $("#nav__icons");
  let call__button = $("#call__button");
  let navToggle = $("#navToggle");


  $(window).on("scroll load resize", function() {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    }
    else {
      header.removeClass("fixed");
    }
  });
  console.log("Worked!");
  




  // Smoth Scroll
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");
    nav__icons.removeClass("show");
    call__button.removeClass("show");

    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 700);
  });



  // Nav Toggle
  navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
    nav__icons.toggleClass("show");
    call__button.toggleClass("show");
  });


}); 


