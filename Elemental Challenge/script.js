$(document).ready(function() {
    // Menu Toggle
    $('#menu-toggle').click(function() {
      $('#nav-links').toggleClass('active');
      $(this).toggleClass('change');
    });

    // Slider Functionality
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let i;
      let slides = $(".carousel");
      let dots = $(".dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
  
    window.plusSlides = function(n) {
      changeSlide(slideIndex += n);
    }
  
    window.currentSlide = function(n) {
      changeSlide(slideIndex = n);
    }
  
    function changeSlide(n) {
      let i;
      let slides = $(".carousel");
      let dots = $(".dot");
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  });

  $('.btn').click(function () {
    $('.btn').removeClass('active');
    $(this).addClass('active');
  });