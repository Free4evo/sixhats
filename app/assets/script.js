//mobile
$(document).ready(function(){
  if (window.matchMedia('(max-width: 425px)').matches) {
      $('header .contacts-bar').insertAfter('.create');
      $('.slick-dots').insertAfter('.slickCarouselWrapper');
  }
})

$( window ).resize(function() {
  if (window.matchMedia('(max-width: 425px)').matches) {
    $('header .contacts-bar').insertAfter('.create');
  }else{
    $('header .contacts-bar').insertAfter('.lang-bar');
  }
});

$(document).ready(function(){
  $('.show-more').on('click', function(){
    $('.toggle').toggleClass('mob-off')
  })
})

//slick carousel
$(document).ready(function(){
  $('.slickCarouselWrapper').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: false,
    arrows: false,
    dots: true,
  });
});

//smoth scroll
$(document).ready(function(){
    $("a[href^='#']").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//drop down
$(document).ready(function(){
  $(".set > a").siblings(".content").slideUp();
  $(".set > a").on("click", function(event){
    event.preventDefault();
    if($(this).hasClass("outter") && $(this).hasClass("active")){
      $(".set > a img").attr("src", "img/down-arrow.svg");
      $(".set > a").removeClass("active");
      $('.content').slideUp(200);
      return;
    } else if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
    }else{
      $(this).find("img").attr("src", "img/up-arrow.svg");
      $(this).addClass("active");
      $(this).siblings('.content').slideDown(200);
    }
  });
});


