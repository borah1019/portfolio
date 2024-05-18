$(function() {
  /* Header */
  $('#header #gnb>li').mouseenter(function() {
    const gnbIndex = $(this).index();
    $('#header #gnb>li .dep2').hide();
    $('#header #gnb>li').eq(gnbIndex).children('.dep2').css('display', 'grid');
  });
  $('#header #gnb>li .dep2').mouseleave(function() {
    $(this).hide();
  });

  /* Business6 */
  // tab
  $('#main .business6 .center_list .tabs li').click(function() {
    let n = $(this).index();

    $('#main .business6 .center_list .tabs li').not(this).removeClass();
    $(this).addClass('center' + (n + 1));
    $('#main .business6 .tab_contents .content').hide();
    $('#main .business6 .tab_contents .content').eq(n).show();
  });
  // 상세보기
  $('#main .business6 .tab_contents .center_btns a.btn_view').hover(function() {
    $(this).removeClass('btn_view');
  }, function() {
    $(this).addClass('btn_view');
  });
});