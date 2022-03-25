$(document).ready(function ($) {
  /* Icons */
  feather.replace();

  /* Progress bar */
  var pageProgress = function () {
    $(window).scroll(function () {
      var wintop = $(window).scrollTop(),
        docheight = $('body').height(),
        winheight = $(window).height();
      var totalScroll = (wintop / (docheight - winheight)) * 100;
      $('.progressBar').css('width', totalScroll + '%');
    });
  };
  pageProgress();

  /* Email address */
  $('.email-icon').click(function () {
    $('.email-address').toggle();
  });
});

/* Project gallery */
var slideIndex = 1;
showSlides('1', slideIndex);
showSlides('2', slideIndex);

function currentSlide(p, n) {
  showSlides(p, (slideIndex = n));
}

function showSlides(p, n) {
  var i;
  var slides = document.getElementsByClassName('gallery-slide-' + p);
  var dots = document.getElementsByClassName('demo-' + p);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
