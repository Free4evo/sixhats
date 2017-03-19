//mobile
$(document).ready(function(){
  if (window.matchMedia('(max-width: 425px)').matches) {
      $('header .contacts-bar').insertAfter('.create');
      $('.slick-dots').insertAfter('.slickCarouselWrapper');
  }
})

$( window ).resize(function() {
  if (window.matchMedia('(max-width: 425px)').matches){
    $('header .contacts-bar').insertAfter('.create');
  }else{
    $('header .contacts-bar').insertAfter('.lang-bar');
  }
});

$(document).ready(function(){
  $('.show-more').on('click', function(){
    $('.toggle').toggleClass('mob-off')
    if ($('.show-more p span').html()=='больше'){
      $('.show-more p span').text('меньше');
      $('.show-more p img').attr("src", "img/less.svg")
    } else {
      $('.show-more p span').text('больше');
      $('.show-more p img').attr("src", "img/more.svg")
    }
  })
})

//mobile menu
$(document).ready(function(){
  $('.nav-button').on('click', function(){
    $('#navigation').css("display", "flex")
  })
  $('.cancel').on('click', function(){
    $('#navigation').css("display", "none")
  })
  if (window.matchMedia('(max-width: 425px)').matches){
    $('#navigation a').on('click', function(){
      $('#navigation').css("display", "none")
    })
  }
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
  $(".set > a").on("click", function(e){
    e.preventDefault();
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

//show_video_popup
$(document).ready(function(){
  $('.show_video_popup').on('click', function(e){
    e.preventDefault()
    $('.video-popup').css("display", "flex")
    $('.video-popup iframe').attr("src", $(this).attr("href"))
    if (window.matchMedia('(max-width: 425px)').matches){
      $('.video-popup iframe').attr("width", "100%")
    }
  })
  $('.video-popup').on('click', function(){
    $('.video-popup').css("display", "none")
    $('iframe').attr('src', $('iframe').attr('src'))
  })
})
