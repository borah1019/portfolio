$(function() {
  
  /* GNB */
  $('#gnb>li').mouseenter(function () {
    $(this).children().css({
      'display' : 'flex',
      'gap' : '60px'
    });
  });
  $('#gnb>li:nth-child(n+2)').mouseenter(function () {
    $('#header .gnb_bg').show();
  });
  $('#gnb>li').mouseleave(function () {
    $(this).children('.dep2_wrap, ul').hide();
    $('#header .gnb_bg').hide();
  });

  /* Search */
  $('.util .btn_search_open').click(function () {
    $('.search_wrap').show();
  });
  $('.search_wrap .btn_search_close').click(function () {
    $('.search_wrap').hide();
  });

  /* All menu */
  // PC
  $('.util .btn_allmenu_open').click(function () {
    $('.allmenu_wrap').show();
    $('html').css('overflow', 'hidden');
  });
  $('.allmenu_wrap .btn_allmenu_close').click(function () {
    $('.allmenu_wrap').hide();
    $('html').css('overflow', 'auto');
  });
  // Mobile
  $('.allmenu_list>li>a').click(function() {
    $(this).addClass('active');
    $('.allmenu_list>li>a').not(this).removeClass('active');
  });
  $('.allmenu_list>.allmenu_product>.dep2>li>a').click(function() {
    $(this).addClass('active');
    $('.allmenu_list>.allmenu_product>.dep2>li>a').not(this).removeClass('active');
  });
  $('.family_site_box button').click(function () {
    // $('.family_site_box ul').show();
    $(this).next().toggle();
  });

  /* Customer */
  // Swiper
  const customerSwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 1000
    },
    breakpoints: {
      510: {
        slidesPerView: 2
      }
    },
    pagination: {
      el: '.main_customer_wrap .dot_btns',
    },
    navigation: {
      nextEl: '.main_customer_wrap .next_btn',
      prevEl: '.main_customer_wrap .prev_btn',
    }
  });
})