$(function () {
  
  /* Header */
  // Gnb - dep2
  $('#gnb>li>a').mouseenter(function () {
    $('#gnb>li>').css('border-bottom', 0);
    $(this).parent().css('border-bottom', '4px solid var(--main1)');
    $('#header nav').animate({
      height: '200px'
    });
    $('#gnb .dep2').css('display', 'none');
    $(this).next('.dep2').css('display', 'flex');
  }).mouseout(function () {
    $(this).parent().css('border-bottom', 0);
  });
  $('#header nav').mouseleave(function () {
    $('#gnb .dep2').css('display', 'none');
    $(this).animate({
      height: '120px'
    });
  });
  
  // Gnb - Search
  $('#header .util .btn_search_open').click(function () {
    $(this).next('.search_wrap').slideToggle(200);
  })
  

  /* Index - Visaul */

  // Visual image width
  let $visList = $('#main .visual .swiper-wrapper');
  let $visContent = $('#main .visual .swiper-slide');
  let $visContentLeng = $visContent.length;
  $visList.width((100 * $visContentLeng)+ '%');
  $visContent.css({
    'width': 100 / $visContentLeng + '%',
  });

  // Swiper
  const visualSwiper = new Swiper('#main .visual', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000
    },
    pagination: {
      el: '#main .visual .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '#main .visual .swiper-button-next',
      prevEl: '#main .visual .swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  /* Index - Exhibition */

  // List width
  let $exhList = $('#main .exhibition .swiper-wrapper');
  let $exhContent = $('#main .exhibition .swiper-slide');
  let $exhContentLeng = $exhContent.length;
  $exhContent.width((100 + '%' / $exhContentLeng) - ((30 * $exhContentLeng + 'px') / $exhContentLeng));
  $exhList.width((((100 + '%') - (90 + 'px')) / 4) * $exhContentLeng + (30 * ($exhContentLeng - 1)));

  // swiper
  const exhibitionSwiper = new Swiper('#main .exhibition .swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '#main .exhibition .swiper-button-next',
      prevEl: '#main .exhibition .swiper-button-prev',
    },
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      }
    }
  });

  /* Index - Notice */
  
  // Slide
  let $notiList = $('#main .notice .notice_wrap ul');
  let $notiContent = $('#main .notice .notice_wrap ul li');
  let $notiHeight = $('.notice .notice_wrap ul li').height();
  let $notiContentLeng = $notiContent.length;
  let notiSlideNum = 0;
  $('.notice .btns_arrow button').click(function () {
    let btnsName = $(this).attr('class');
    switch (btnsName) {
      case 'prev':
        (notiSlideNum <= 0) ? notiSlideNum : notiSlideNum--
        $notiList.animate({'margin-top': -$notiHeight * notiSlideNum});
        console.log(notiSlideNum)
        break;
      case 'next':
        (notiSlideNum >= $notiContentLeng - 1) ? notiSlideNum : notiSlideNum++;
        $notiList.animate({'margin-top': -$notiHeight * notiSlideNum});
        console.log(notiSlideNum)
    }
  });

  /* Index - Experience */

  // List Append
  // let $expList = $('.experience ul');
  // let $expContent;

  // let $expContentLeng = 3;
  // for (i = 0; i < $expContentLeng; i++) {
  //   $expList.append('<li><button></button><strong><a href="#"></a></a></strong><span></span></li>');
  //   $expContent = $('.experience ul li');
  //   $expContent.eq(i).find('button').text('모집중');
  //   $expContent.eq(i).find('a').attr({href: 'link'});
  //   $expContent.eq(i).find('strong').text('체험_' + (i + 1) + '문화가 있는 날 프로그램 안내 - 체험 프로그램을 소개하는 글이 들어갑니다!');
  //   $expContent.eq(i).find('span').text('2024.00.00');
  // }

  
  /* Index - Relic */

  // List width
  let $relContent = $('#main .relic .swiper-slide');

  // swiper
  const relicSwiper = new Swiper('#main .relic .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000
    },
    navigation: {
      nextEl: '#main .relic .swiper-button-next',
      prevEl: '#main .relic .swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      }
    }
  });

  /* Index - Youtube */

  // List Append
  let $youList = $('#main .youtube swiper-wrapper');
  let $youContent = $('#main .youtube swiper-slide');
  let $youContentLeng = $youContent.length;
  $youContent.Width = ((100 + '%' / $youContentLeng) - (30 * ($youContentLeng - 1) + 'px' / $youContentLeng));
  $youList.width((((100 + '%') - (90 + 'px')) / 4) * $youContentLeng + (30 * ($youContentLeng - 1)));

  // swiper
  const youtubeSwiper = new Swiper('#main .youtube .swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 10000,
    freeMode: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      750: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
    }
  });

  /* Index - Instagram */

  // List width
  let $insList = $('#main .instagram .swiper-wrapper');
  let $insContent = $('#main .instagram .swiper-slide');
  let $insContentLeng = $insContent.length;
  $insContent.width((100 + '%' / $insContentLeng) - ((30 * ($insContentLeng - 1) + 'px') / $insContentLeng));
  $insList.width((((100 + '%') - (90 + 'px')) / 4) * $insContentLeng + (30 * ($insContentLeng - 1)));

  // swiper
  const instagramSwiper = new Swiper('#main .instagram .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000
    },
    navigation: {
      nextEl: '#main .instagram .swiper-button-next',
      prevEl: '#main .instagram .swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      }
    }
  });

  /* Index - Map */

  // Map list
  $('.map .btns_map button').click(function () {
    let btnNum = $(this).index();
    $('.map .btns_map button').removeClass('on');
    $(this).addClass('on');
    $('.map .map_list>li').hide();
    $('.map .map_list>li').eq(btnNum).show();
  });
  new daum.roughmap.Lander({
		"timestamp" : "1706600724134",
		"key" : "2hw43",
		"mapWidth" : "640",
		"mapHeight" : "360"
	}).render();
});