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

  /* 주요연혁 & 수상내역 */
  $('#main.milestones .sub_content_tab>li>span').click(function () {
    let tabOnNum = $(this).parent().index();
    $('#main.milestones .sub_content_tab>li>span').removeClass('tab_on');
    $(this).addClass('tab_on');
    $('#main.milestones .sub_content_box_item').eq(tabOnNum).css('display', 'flex');
    $('#main.milestones .sub_content_box_item').eq(!tabOnNum).css('display', 'none');
  });
  $('#main.award .sub_content_tab>li>span').click(function () {
    tabOnNum = $(this).parent().index();
    $('#main.award .sub_content_tab>li>span').removeClass('tab_on');
    $(this).addClass('tab_on');
    $('#main.award .sub_content_box_item').eq(tabOnNum).css('display', 'flex');
    $('#main.award .sub_content_box_item').eq(!tabOnNum).css('display', 'none');
  });

  /* Promotion */
  $('#main.ads .vod_select_box button').click(function(event) {
    event.preventDefault();
    $('#main.ads .vod_select_box ul').show();
  });
  $(window).click(function (e) {
    if(!$(e.target).parent().hasClass('vod_select_box')) {
      $('#main.ads .vod_select_box ul').hide();
    }
  });
  $('#main.ads .ads_list li').click(function() {
    $('#main.ads .vod_popup_box').show();
  });
  $('#main.ads .vod_close').click(function() {
    $('#main.ads .vod_popup_box').hide();
  });
});