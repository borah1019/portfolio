$(function() {
  /* Header */
  // GNB dep2
  $('#gnb .dep2').hide();
  $('#gnb>li').hover(function () {
    $('#gnb .dep2').stop().slideUp();
    $(this).children('ul').stop().slideDown();
  }, function () {
    $(this).children().css('border-bottom', 0);
    $('#gnb .dep2').stop().slideUp();
  });

  // Sitemap
  $('#header .util .btn_sitemap').click(function () {
    $(this).toggleClass('on');
    $('body').toggleClass('fixed');
    $('#header').toggleClass('green');
    $('#header .sitemap').toggle();
    $('#header nav').toggle();
    $('#header h1 a').toggleClass('white');
    $('#header .util .language a').toggleClass('white');
  });

  /* Footer */
  // Family_site
  $('#footer .family_site button').click(function () {
    $('#footer .family_site ul').show();
  });
  $(window).click(function (e) {
    if(!$(e.target).parent().hasClass('family_site')) {
      $('#footer .family_site ul').hide();
    }
  });

  /* Visual wrap */
  const visualSwiper = new Swiper('#main .main_visual.swiper', {
    loop: true,
    autoplay: {
      delay: 4000
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });

  /* Promotion */
  $('#main.ads').click(function() {
    console.log('dd');
  });
  // $('#main.ads .ads_list li').click(function() {
  //   console.log('dd');
  //   $('#main.ads .vod_popup_box').show();
  // });
  // $('#main.ads .vod_close').click(function() {
  //   $('#main.ads .vod_popup_box').hide();
  // });
  // $('#main.ads .vod_select_box button').click(function(event) {
  //   event.preventDefault();
  //   $('#main.ads .vod_select_box ul').show();
  // });
});