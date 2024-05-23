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
const graphicProjectList1 = document.querySelectorAll('#graphic .project_list.list1 .project');
const graphicProjectList2 = document.querySelectorAll('#graphic .project_list.list2 .project');

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

// Modal
const graphicProjectList = document.querySelectorAll('#graphic .project_list');
const graphicProjects = document.querySelectorAll('#graphic .project');
const graphicProjectListLength = graphicProjects.length / 2;
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

// Data
const graphicProjectsData = [
  {
    title: '에어팟 광고',
    content: '일러스트레이터로 제작한 에어팟 광고 포스터입니다. 에어팟을 의인화한 스토리텔링에 중점을 두었습니다.',
  }, {
    title: '몬스터 주식회사',
    content: '포토샵으로 제작한 영화 포스터입니다. 시각적인 강조 효과를 위해 대각선 구도와 컬러를 활용하였습니다.',
  }, {
    title: 'Free Willy',
    content: '일러스트레이터로 제작한 영화 포스터입니다. 리소그라피 인쇄에 초점을 두어 작업하였습니다.',
  }, {
    title: '돌고',
    content: '써니킴 작가의 돌고라는 작품을 보고 일러스트레이터로 제작한 포스터입니다. 도형을 가지고 이 도형들이 서로서로 관계를 맺어 가는 느낌으로 작업하였습니다.',
  }, {
    title: '나무',
    content: '써니킴 작가의 나무라는 작품을 보고 일러스트레이터로 제작한 포스터입니다. 크롭에 중점을 두어 작업하였습니다.',
  }, {
    title: '우울하면 도움될 지도',
    content: '일러스트레이터로 제작한 지도입니다. 우울할 때 들릴 수 있는 비밀 장소들을 일러스트로 소개합니다.',
  }, {
    title: 'Everyone has treasures',
    content: '일러스트레이터로 제작한 전시 포스터입니다. 보물에 대한 메시지를 전합니다.',
  }, {
    title: '에어팟 광고2',
    content: '포토샵으로 제작한 에어팟 광고 포스터입니다. 선이 없어 편리한 제품의 장점을 강조하고자 하였습니다.',
  }, {
    title: '풀 엮고 흙 빚어',
    content: '일러스트레이터로 제작한 전시 포스터입니다. 블렌드 효과를 중점으로 작업하였습니다.',
  }, {
    title: 'How to wear a bracelet alone',
    content: '일러스트레이터로 제작한 포스터입니다. 혼자 팔찌를 착용하는 방법을 일러스트로 소개합니다.',
  }
];

graphicProjectList.forEach(function (e) {
  e.querySelectorAll('.project').forEach(function (e, i) {
    let index = i;
    const graphicData = function () {
      const projectImg = document.querySelectorAll('#graphic .project img')[index].getAttribute('src');
      const projectTitle = graphicProjectsData[index].title;
      const projectContent = graphicProjectsData[index].content;
      const graphicModalImg = document.querySelector('#graphic .project_modal img');
      const graphicModalTitle = document.querySelector('#graphic .project_modal .project_txt h2');
      const graphicModalContent = document.querySelector('#graphic .project_modal .project_txt p');

      graphicModalImg.setAttribute('src', projectImg);
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