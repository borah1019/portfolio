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

// SKILLS
const skills = document.querySelectorAll('.skills li');

skills.forEach(function (e) {
  e.addEventListener('mouseover', function () {
    e.style.opacity = "0";
  })
});

/* SECTION 02 - WEB */

/* SECTION 03 - JAVASCRIPT */
const javaScriptProjectHead = document.querySelectorAll('.sec03_javaScript .project_head>li');
const javaScriptProjectInfoLinkPC = document.querySelector('.sec03_javaScript .project_body .link_pc');
const javaScriptProjectInfoLinkMobile = document.querySelector('.sec03_javaScript .project_body .link_m');
const javaScriptProjectInfoPBox = document.querySelector('.sec03_javaScript .project_body .info_p');
const javaScriptProjectInfoSkillsBox = document.querySelector('.sec03_javaScript .project_body .info_skills');

javaScriptProjectHead.forEach(function (e) {
  e.addEventListener('click', function () {
    javaScriptProjectHead.forEach(function (e) {
      e.classList.remove('on');
    })
    e.classList.add('on');
    
    const javaScriptProjectInfoP = e.querySelector('.info_p').innerHTML;
    javaScriptProjectInfoPBox.innerHTML = javaScriptProjectInfoP;
    
    const javaScriptProjectInfoSkills = e.querySelector('.info_skills').innerHTML;
    javaScriptProjectInfoSkillsBox.innerHTML = javaScriptProjectInfoSkills;
    
    const index = Array.from(javaScriptProjectHead).indexOf(e) + 1;
    javaScriptProjectInfoLinkPC.style.backgroundImage = `url('./img/sec02_javascript/javascript_project${index}.jpg')`;
    javaScriptProjectInfoLinkMobile.style.backgroundImage = `url('./img/sec02_javascript/javascript_project${index}_m.jpg')`;

    const javaScriptProjectInfoLink = e.querySelector('a');
    javaScriptProjectInfoLinkPC.href = javaScriptProjectInfoLink;
    javaScriptProjectInfoLinkMobile.href = javaScriptProjectInfoLink;
  })
});

/* SECTION 04 - GRAPHIC */

const graphicProjects = document.querySelectorAll('.graphic_project');
const graphicProjectList = graphicProjects[0].querySelectorAll('li');
const graphicProjectModal = document.querySelector('.graphic_project_modal');
const graphicProjectModalList = document.querySelectorAll('.graphic_project_modal .graphic_projects>li');

// GRAPHIC MODAL
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
    
    btnClose.addEventListener('click', function (){
      graphicProjectModal.style.display = "none";
      btnClose.classList.remove('close');
      document.querySelector('body').classList.remove('modal_on');
    })
  })
});

// SCROLL TRIGGER
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