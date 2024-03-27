$(function() {
  // Common

  // Header
  // $('#header #gnb>li').hover(function() {
  //   $('#header #gnb .dep2').show();
  // }), (function() {
  //   $('#header #gnb .dep2').hide();
  // })

  // Index - Business6
  $('#main .business6 .center_list .tabs li').click(function() {
    let n = $(this).index();
    
    $('#main .business6 .center_list .tabs li').not(this).removeClass();
    $(this).addClass('center' + (n + 1));

    $('#main .business6 .tab_contents .content').hide();
    $('#main .business6 .tab_contents .content').eq(n).show();
  })

  // $('#main .business6 .tab_contents .center_btns a').mouseenter(function() {
  //   $('#main .business6 .tab_contents .center_btns a.btn_view').removeClass();
  // })

  $('#main .business6 .tab_contents .center_btns a.btn_view').hover(function() {
    $(this).removeClass('btn_view');
  }, function() {
    $(this).addClass('btn_view');
  })









})