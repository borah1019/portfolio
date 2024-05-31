/********** Header - GNB **********/
const header = document.querySelector('#header');
const aboutOffsetTop = document.querySelector('#about').offsetTop;
const webOffsetTop = document.querySelector('#web').offsetTop;
const javascriptOffsetTop = document.querySelector('#javascript').offsetTop;
const graphicOffsetTop = document.querySelector('#graphic').offsetTop;
const contactOffsetTop = document.querySelector('#contact').offsetTop;

// Hide
window.addEventListener('scroll', function () {
  const scrollY = this.scrollY;
  
  if (scrollY >= aboutOffsetTop - window.outerHeight / 5) {
    header.style.transform = "translateY(0)";
  } else {
    header.style.transform = "translateY(-120%)";
  }
});

// Tab - click
const gnbLists = document.querySelectorAll('#header #gnb>li>a');
const headerHeight = document.querySelector('#header').clientHeight;
gnbLists.forEach(function (e) {
  e.addEventListener('click', function (e) {
    gnbLists.forEach(function (e) {
      e.style.color = "#222";
    });
    const thisTab = this.parentElement.className;
    e.preventDefault();
    const moveToSection = document.querySelector('#' + thisTab + '').offsetTop - headerHeight;
    window.scrollTo({top: moveToSection, behavior: "smooth" });
  });
  e.addEventListener('mousedown', function () {
    this.style.color = "var(--color_main)";
  });
});

/********** ABOUT **********/

// Keyword animation
gsap.to('#intro .name', {
  opacity: 0,
  scrollTrigger: {
    trigger: '#intro .keyword>div:nth-child(3)',
    start: 'bottom 100%',
    end: 'bottom 75%',
    scrub: 2,
  }
});

// gsap.registerPlugin(ScrollTrigger);
gsap.to('#intro .keyword>div:nth-child(1)', {
  top: -280,
  scrollTrigger: {
    trigger: '#intro .keyword>div:nth-child(1)',
    start: 'top 100%',
    scrub: 4
  }
});
gsap.to('#intro .keyword>div:nth-child(2)', {
  top: -280,
  scrollTrigger: {
    trigger: '#intro .keyword>div:nth-child(2)',
    start: 'top 100%',
    scrub: 4
  }
});
gsap.to('#intro .keyword>div:nth-child(3)', {
  top: -280,
  scrollTrigger: {
    trigger: '#intro .keyword>div:nth-child(3)',
    start: 'top 100%',
    scrub: 4
  }
});

// profile animation
gsap.to('#intro .name', {
  scrollTrigger: {
    trigger: '#about .profile_title',
    scrub: 1
  },
  display: 'none'
});
gsap.to('#about .profile_img', {
  transform: 'translateX(0)',
  scrollTrigger: {
    trigger: '#about .profile_title',
    start: 'top 80%',
    end: 'bottom 90%',
    scrub: 2,
  },
  duration: 1
});
gsap.to('#about .profile_title', {
  transform: 'translateX(0)',
  scrollTrigger: {
    trigger: '#about .profile_title',
    start: 'top 80%',
    end: 'bottom 90%',
    scrub: 2,
  },
  duration: 1
});

/********** JAVASCRIPT **********/
const menuTab = document.querySelectorAll('#javascript .menu li a');
const projectList = document.querySelectorAll('#javascript .project');
const h2List = document.querySelectorAll('#javascript .project h2');
const h2TextList = [];

// Menu select
menuTab[0].style.background = "var(--color_main)";
menuTab[0].style.color = "#fff";
projectList[0].style.display = "block";
menuTab.forEach(function (e, i) {
  e.addEventListener('click', function () {
    menuTab.forEach(function (e) {
      e.style.background = "#fff";
      e.style.color = "var(--color_gray1)"
    });
    e.style.background = "var(--color_main)"
    e.style.color = "#fff";
    projectList.forEach(function (e) {
      e.style.display = "none";
    });
    projectList[i].style.display = "block";
  });
});

/********** GRAPHIC **********/

const graphic = document.querySelector('#graphic');
const graphicProjectList = document.querySelectorAll('#graphic .project_list');
const graphicProjectList1 = document.querySelectorAll('#graphic .project_list:nth-child(1) .project');
const graphicProjectList2 = document.querySelectorAll('#graphic .project_list:nth-child(2) .project');
const graphicProjects = document.querySelectorAll('#graphic .project');
const graphicProjectListLength = graphicProjects.length / 2;

// Swipe
graphicProjectList1.forEach(function (e) {
  e.addEventListener('mouseover', function () {
    this.parentElement.style.animationPlayState = "paused";
    this.parentElement.nextElementSibling.style.animationPlayState = "paused";
  });
  e.addEventListener('mouseout', function () {
    this.parentElement.style.animationPlayState = "running";
    this.parentElement.nextElementSibling.style.animationPlayState = "running";
  });
});

graphicProjectList2.forEach(function (e) {
  e.addEventListener('mouseover', function () {
    this.parentElement.style.animationPlayState = "paused";
    this.parentElement.previousElementSibling.style.animationPlayState = "paused";
  });
  e.addEventListener('mouseout', function () {
    this.parentElement.style.animationPlayState = "running";
    this.parentElement.previousElementSibling.style.animationPlayState = "running";
  });
});

// Thumbnail


// Modal box
const graphicModal = document.querySelector('#graphic .project_modal');
const graphicModalWrap = document.querySelector('#graphic .project_modal .modal_wrap');
const graphicModalPagination = document.querySelectorAll('#graphic .modal_wrap .pagination span');
const graphicModalButton = document.querySelectorAll('#graphic .modal_wrap .pagination button');

graphicProjects.forEach(function (i) {
  i.addEventListener('click', function () {
    graphicModal.classList.add('bg_modal');
    graphicModalWrap.style.display = 'flex';
  });
});

document.querySelector('#graphic .btn_close').addEventListener('click', function () {
  graphicModal.classList.remove('bg_modal');
  graphicModalWrap.style.display = 'none';
});

// Modal Data
const graphicProjectsData = [
  {
    title: '에어팟 광고',
    content: '개인적으로 작업한 에어팟 광고 포스터입니다. 에어팟을 의인화하여 일러스트로 표현하였으며, 스토리텔링에 중점을 두었습니다.',
  }, {
    title: '몬스터 주식회사',
    content: '개인적으로 제작한 영화 포스터입니다. 긴장감을 조성하고, 시각적인 강조 효과를 주기 위해 대각선 구도와 컬러를 활용하였습니다.',
  }, {
    title: 'Free Willy',
    content: '개인적으로 제작한 영화 포스터입니다. 리소그라피 인쇄를 활용하여, 범고래에게 자유를 주는 요소들과 범고래의 자유를 가로막는 것들을 시각적으로 대조하여 표현하였습니다.',
  }, {
    title: '문구 디자인',
    content: '문구 회사에서 개발했던 자연을 소재로 한 문구 스티커들입니다. 자연의 다양한 이야기를 제품에 옮겨 담아 더욱 감성적으로 디자인하였습니다.',
  }, {
    title: '우울하면 도움될 지도',
    content: '‘우울할 때 도움이 되는 지도’와 ‘우울할 때 도움이 될 것 같기도’ 라는 두 가지의 뜻을 동시에 내포하는 지도입니다. 기분이 울적해서 집에 곧장 들어가기 싫을 때, 남들의 눈치를 보거나 돈을 쓸 필요 없이 마음껏 마음을 삭이고 들어갈 수 있는 비밀 장소를 소개한 작업입니다. (봉천동 한정)',
  }, {
    title: 'SNS 배너',
    content: '식품 회사에서 제작했던 인스타그램 업로드용 배너들입니다. 이벤트와 카드뉴스, 레시피 영상 등 다채로운 콘텐츠를 기획하고 디자인하였습니다.',
  }, {
    title: 'Everyone has treasures',
    content: '보물에 대한 메시지를 전하는 전시의 포스터입니다. 꼭 금은보화만이 보물이 아닙니다. ‘보물은 누구에게나 있다’는 메시지를 전합니다.',
  }, {
    title: '에어팟 광고2',
    content: '개인적으로 작업한 에어팟 광고 포스터입니다. 선이 없어 편리한 에어팟의 강점을 살리고자, 반대로 선이 있는 이어폰의 불편함을 시각적으로 극대화 하였습니다.',
  }, {
    title: '풀 엮고 흙 빚어',
    content: '개인적으로 작업한 ‘풀 엮고 흙 빚어’ 전시의 포스터입니다. 흙과 풀이 연상되는 컬러를 활용하였으며, 엮는 과정에서 풀이 엇갈리게 되는 모습을 떠올리며 블렌딩 효과를 넣은 요소들이 서로 엇갈리도록 배치하였습니다.',
  }, {
    title: 'How to wear a bracelet alone',
    content: '일러스트레이터로 제작한 포스터입니다. 혼자 팔찌를 착용하는 방법을 일러스트로 소개합니다.',
  }
];

graphicProjectList.forEach(function (e) {
  e.querySelectorAll('.project').forEach(function (e, i) {
    let index = i;
    const graphicData = function () {
      const projectTitle = graphicProjectsData[index].title;
      const projectContent = graphicProjectsData[index].content;
      const graphicModalImg = document.querySelector('#graphic .project_modal .project_img');
      const graphicModalTitle = document.querySelector('#graphic .project_modal .project_txt h2');
      const graphicModalContent = document.querySelector('#graphic .project_modal .project_txt p');

      graphicModalImg.style.backgroundImage = `url("../project/graphic/graphic_project${index + 1}.jpg")`;
      graphicModalTitle.innerText = projectTitle;
      graphicModalContent.innerText = projectContent;

      graphicModalPagination[0].innerHTML = index + 1;
      graphicModalPagination[2].innerHTML = graphicProjectListLength;
    }
    e.addEventListener('click', function () {
      graphicData()
      graphicModalButton[0].addEventListener('click', function () {
        index + 1 <= 1 ? index = graphicProjectListLength - 1 : index--;
        console.log(index)
        graphicData()
      });
      graphicModalButton[1].addEventListener('click', function () {
        index + 1 > graphicProjectListLength - 1 ? index = 0 : index++;
        console.log(index)
        graphicData()
      });
    })
  });
});

/********** CONTACT **********/
// Text change
const mailIcon = document.querySelector('#contact a');
const contactMessage1 = document.querySelector('#contact .message1');
const contactMessage2 = document.querySelectorAll('#contact .message2');

function contactMouseover() {
  contactMessage1.style.transform = "translateX(-120%)";
  contactMessage2[0].style.transform = "translateX(0)";
  setTimeout(() => {
  contactMessage2[1].style.transform = "translateX(0)";
  }, 50);
}
function contactMouseout () {
  contactMessage1.style.transform = "translateX(0)";
  contactMessage2[0].style.transform = "translateX(-120%)";
  setTimeout(() => {
  contactMessage2[1].style.transform = "translateX(-120%)";
  }, 50);
};

const contactAnimation = function () {
  if (window.outerWidth <= 900) {
    contactMessage2.forEach(function (e) {
      e.style.transform = "translateX(0)";
    });
    mailIcon.removeEventListener('mouseover', contactMouseover);
    mailIcon.removeEventListener('mouseout', contactMouseout);
  } else if (window.outerWidth > 900) {
    contactMessage2.forEach(function (e) {
      e.style.transform = "translateX(-120%)";
    });
    mailIcon.addEventListener('mouseover', contactMouseover);
    mailIcon.addEventListener('mouseout', contactMouseout);
  };
};
contactAnimation();
window.addEventListener('resize', contactAnimation);