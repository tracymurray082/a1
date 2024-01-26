'use strict';
$(document).ready(function () {
  // Nice Select Initialization

  if($("select").length > 0){
    $('select').niceSelect();
  }
  AOS.init({
    once: true,
    duration: 1000,
    disable: function () {
      var maxWidth = 991;
      return window.innerWidth < maxWidth;
    }
  });

  //counter up
  if($(".counter").length > 0){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
  }



  //***ISOTOPE***
  // Portfolio-01
  $(window).load(function () {
    
  });

  // $(window).load(function () {
   
  // })
  $(".navigation-active").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows"
  });
  $(".navigation-active-masonry").isotope({
    itemSelector: ".grid-item"
  });
  $('.portfolio-v2').isotope({
    itemSelector: '.grid-item',
    masonry: {
      columnWidth: 0
    }
  });
  // change is-checked class on buttons
  $('.navigation-list').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a,button', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  // filter items on button click
  $(".navigation-list").on("click", "li", function () {
    // $(this).addClass("active").siblings().removeClass("active");
    var filterValue = $(this).attr("data-filter");
    $(".isotope-navigation").isotope({
      filter: filterValue
    });
  });


  // Cart Quantity
  $('.increment-btn').on('click', function () {
    var inc = $(this).siblings('.quantity-value').html();
    var newVal = parseInt(inc, 10) + 1;
    $(this).siblings('.quantity-value').html(newVal);
  });

  $('.decrement-btn').on('click', function () {
    var dec = $(this).siblings('.quantity-value').html();
    var newVal = parseInt(dec, 10) - 1;
    if (newVal >= 1) {
      $(this).siblings('.quantity-value').html(newVal);
    }
  });
});



$(window).on('load', function () {
  $("body").addClass("loading");
  setTimeout(function () {
    $(".preloader-wrapper").fadeOut(500);
    $("body").removeClass("loading");
    $("body").addClass("loaded");
  }, 1000);
  setTimeout(function () {
    $(".preloader-wrapper").remove();
  }, 2000);
});


$(document).ready(function () {
  // change active class on pagination
  $('.pagination-wrapper').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.btn-main', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
});
if($("#testimonial-slider").length > 0){
  $("#testimonial-slider").slick({
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  })
}
if($(".three-column-slider").length > 0){
  $(".three-column-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}


if($(".four-column-slider").length > 0){
  $(".four-column-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}
if($("#heroSlider").length > 0){

  $("#heroSlider").slick({
    arrows: false,
    asNavFor: '#heroSliderNav',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  })
}
if($("#heroSliderNav").length > 0){

  $("#heroSliderNav").slick({
    arrows: false,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    asNavFor: '#heroSlider',
    infinite: false
  })
}


if($(".product-image-main").length > 0){
  $(".product-image-main").slick({
    arrows: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product-image-thumbnail',
    infinite: false,
    fade: true
  })
}

if($(".product-image-thumbnail").length > 0){
  $(".product-image-thumbnail").slick({
    arrows: false,
    draggable: false,
    slidesToShow: 3,
    focusOnSelect: true,
    asNavFor: '.product-image-main',
    infinite: false
  })
}

// Add overflow hidden class to body when offcanvas is shown
$(".offcanvas").on("shown.bs.offcanvas", function () {
  $("body").addClass("overflow-hidden");
})
// Remove overflow hidden class to body when offcanvas is hidden
$(".offcanvas").on("hide.bs.offcanvas", function () {
  $("body").removeClass("overflow-hidden");
})