$(function() {
  /* Header */
  $('#gnb .dep2').hide();
  $('#gnb>li').hover(function() {
    $('#gnb .dep2').stop().slideUp();
    $(this).children('ul').stop().slideDown();
  }, function() {
    $('#gnb .dep2').stop().slideUp();
  });

  $('.family_site button').click(function() {
    $('.family_site ul').show();
  })

  // $('.family_site ul').click(function() {
  //   $(this).hide();
  // })

  $('.btn_sitemap').click(function() {
    $('.sitemap').toggle()
  })

  /* Visual wrap */
  // const visualSwiper1 = new Swiper('.main_visual_img.swiper', {
  //   // Optional parameters
  //   loop: true,
  //   autoplay: {
  //     delay: 4000
  //   },
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });
  const visualSwiper2 = new Swiper('.main_visual_txt.swiper', {
    // Optional parameters
    crossFade: true,
    loop: true,
    autoplay: {
      delay: 4000,
    }
  });

  /* Promotion */
  $('main.ads .sub_container .ads_list li').click(function() { //li를 클릭하면
    $('main.ads .vod_popup_box').show(); //box 보임
  })

  $('main.ads .vod_close').click(function() { //닫기 버튼 클릭하면
    $('main.ads .vod_popup_box').hide(); //box 안 보임
  })

  $('main.ads .vod_select_box button').click(function(event) {
    event.preventDefault(); //버튼의 기본 역할(이벤트)을 없앰
    $('main.ads .vod_select_box ul').show();
  })
}) //onload