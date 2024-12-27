/* HEADER */

// MENU
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.btn_menu');

btnMenu.addEventListener('click', function () {
  menu.classList.toggle('open');
  btnMenu.classList.toggle('close');
});

const menuList = document.querySelectorAll('.menu>li');
const sectionList = document.querySelectorAll('section');

menuList.forEach(function (e, i) {
  e.addEventListener('click', function () {
    menu.classList.remove('open');
    btnMenu.classList.remove('close');

    const sectionTop = sectionList[i].offsetTop;
    console.log(sectionTop);
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  })
})

/* SECTION 01 - ABOUT */

//skills
const skills = document.querySelectorAll('.skills li');

skills.forEach(function (e) {
  e.addEventListener('mouseover', function () {
    e.style.opacity = "0";
  })
});

/* SECTION 02 - WEB */

/* SECTION 03 - JAVASCRIPT */
const javaScriptProjectHead = document.querySelectorAll('.sec03_javaScript .project_head>li');
const javaScriptProjectInfoPBox = document.querySelector('.sec03_javaScript .project_body .info_p');

javaScriptProjectHead.forEach(function (e) {
  e.addEventListener('click', function () {
    javaScriptProjectHead.forEach(function (e) {
      e.classList.remove('on');
    })
    e.classList.add('on');

    const javaScriptProjectInfoP = e.children[1].innerText;
    javaScriptProjectInfoPBox.innerText = javaScriptProjectInfoP;
  })
});

/* SECTION 04 - GRAPHIC */

const graphicProjects = document.querySelectorAll('.graphic_project');
const graphicProjectList = graphicProjects[0].querySelectorAll('li');
const graphicProjectModal = document.querySelector('.graphic_project_modal');
const graphicProjectModalList = document.querySelectorAll('.graphic_project_modal .graphic_projects>li');

graphicProjectList.forEach(function (e, i) {
  e.addEventListener('click', function (){
    const btnClose = document.querySelector('.btn_close');

    graphicProjectModalList.forEach(function (e) {
      e.style.display = "none";
    });
    
    i < 9
    ? graphicProjectModalList[i].style.display = "flex"
    : graphicProjectModalList[i - 9].style.display = "flex"

    graphicProjectModal.style.display = "flex";
    btnClose.classList.add('close');
    document.querySelector('body').classList.add('modal_on');
    // btnMenu.classList.add('close');
    
    btnClose.addEventListener('click', function (){
      graphicProjectModal.style.display = "none";
      btnClose.classList.remove('close');
      document.querySelector('body').classList.remove('modal_on');
      // btnMenu.classList.remove('close');
    })
  })
  
  // scrollTrigger
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.to(graphicProjectList[i], {
  //   transform: 'translateY(0)',
  //   scrollTrigger: {
  //     trigger: graphicProjectList[i],
  //     start: 'top 90%',
  //     end: '20% 80%',
  //     scrub: 2,
  //     markers: true
  //   }
  // });
});

// 정리 필요
gsap.registerPlugin(ScrollTrigger);

gsap.to(graphicProjectList[0], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[0], 
    start: 'top 90%',
    end: '20% 80%',
    scrub: 2,
    // markers: true
  }
});

gsap.to(graphicProjectList[1], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[1],
    start: '20% 90%',
    end: '30% 80%',
    scrub: 2,
    // markers: true
  }
});

gsap.to(graphicProjectList[2], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[2],
    start: '40% 90%',
    end: '40% 80%',
    scrub: 2,
    // markers: true
  }
});

gsap.to(graphicProjectList[3], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[3], 
    start: 'top 90%',
    end: '20% 80%',
    scrub: 2,
    // markers: true
  }
});

gsap.to(graphicProjectList[4], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[4],
    start: '20% 90%',
    end: '25% 80%',
    scrub: 2,
    // markers: true
  }
});

gsap.to(graphicProjectList[5], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[5],
    start: '40% 90%',
    end: '30% 80%',
    scrub: 2,
    // markers: true
  }
});

gsap.to(graphicProjectList[6], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[6], 
    start: 'top 90%',
    end: '20% 80%',
    scrub: 2,
    // markers: true
  }
});

gsap.to(graphicProjectList[7], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[7],
    start: '20% 90%',
    end: '25% 80%',
    scrub: 2,
    // markers: true
  }
});

gsap.to(graphicProjectList[8], {
  transform: 'translateY(0)',
  scrollTrigger: {
    trigger: graphicProjectList[8],
    start: '40% 90%',
    end: '20% 80%',
    scrub: 2,
    // markers: true
  }
});