
  console.log(123);
$(document).ready(function () {
  //script for popups

  $('a.show_popup').click(function () {
    return false;
  });

  $('a.show_video_popup').click(function () {
    $('div.video').find('iframe').attr('src', $(this).attr('href'));
    $('div.video').fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
    return false;
  });

  $('a.close').click(function () {
    $(this).parent().fadeOut(100);
    $('.popup iframe').attr("src", '');
    $('#overlay').remove('#overlay');
    return false;
  });

  $(function(){
    $(document).mouseup(function (e){
      var div = $(".popup");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(this).parent().fadeOut(0);
        $('#overlay').remove('#overlay');
        div.hide();
        return false;
      }
    });
  });

  //script for tabs
  $("div.selectTabs").each(function () {
    var tmp = $(this);
    $(tmp).find(".lineTabs li").each(function (i) {
      $(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
        var tab_id=i+1;
        $(tmp).find(".lineTabs li").removeClass("active");
        $(this).parent().addClass("active");
        $(tmp).find(".tab_content div").stop(false,false).hide();
        $(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
        return false;
      });
    });
  });
});

$(document).ready(function(){
  $('.slickCarouselWrapper').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: false,
    arrows: false,
    dots: true,
  });
});

$(document).ready(function() {
        $('span.block').css("opacity", "0");
        $('span.background').hover(function() {
                    $('span.block', this).stop().fadeTo("normal", .9);},
                function() {
                    $('span.block', this).stop().fadeTo("normal", .0);
                });
        $('form').on('submit', function (e) {
            var ch = true;
            $(this).find('[type=text]').each(function() {
                if(!$(this).val().length) {
                    $(this).css('border', '2px solid red');
                    ch = false;
                    }
            });

            var data = $(this).serialize();
            if(ch) {
                $.post(
                    '/send/',
                    data,
                    function (data) {
                        console.log(data);
                        if (data != "Error") {
                            $('#zvonok').modal('hide');
                           $('#thankyou').modal('show');
//                            $('#thankyou').fadeIn(500);
//                            $("body").append("<div id='overlay'></div>");
//                            $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
                        }
                    }
                );
            }
            return false;

        });
    });
