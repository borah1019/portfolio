// HEADER
// UTIL - SEARCH
const btnSearch = document.querySelector('.util>.btn_search');
const searchWrap = document.querySelector('.util .pc_search_wrap');


btnSearch.addEventListener('click', function() {
  function closeSearchWrap() {
    btnSearch.className = "btn_search";
    searchWrap.style.transform = "translateY(-100%)";  
  }

  if (this.className === "btn_search") {
    btnSearch.className = "btn_close";
    searchWrap.style.transform = "translateY(0)";
  } else {
    closeSearchWrap();
  }

  window.addEventListener('resize', closeSearchWrap);
})

// ALL MENU - ALL MENU WRAP
const btnAllmenu = document.querySelector('.btn_allmenu');
const allmenuWrap = document.querySelector('.allmenu_wrap');
const btnClose = document.querySelector('.allmenu_wrap .btn_close');

function closeAllmenuWrap() {
  allmenuWrap.style.transform = "translateX(100%)";
}
btnAllmenu.addEventListener('click', function() {
  allmenuWrap.style.transform = "translateX(0)";
})

btnClose.addEventListener('click', closeAllmenuWrap);
window.addEventListener('resize', closeAllmenuWrap);

// ALL MENU - MENU
const allmenuDep1 = document.querySelectorAll('.allmenu .allmenu_dep1');
const allmenuDep2 = document.querySelectorAll('.allmenu .allmenu_dep1 .allmenu_dep2');

allmenuDep1.forEach(function(e) {
  const allmenuDep1Link = e.querySelector('a');

  allmenuDep1Link.addEventListener('click', function() {
    const thisAllmenuDep2 = e.querySelector('.allmenu_dep2');
    
    allmenuDep2.forEach(function(e) {
      e.parentElement.style.height = "64px";
      e.parentElement.querySelector('a').classList.remove('clicked');
      e.style.opacity = '0';
    })

    if (this.parentElement.offsetHeight == 64) {
      thisAllmenuDep2.style.opacity = '1';
      this.parentElement.style.height = `${64 + thisAllmenuDep2.offsetHeight}px`;
      this.classList.add('clicked');
    } else {
      thisAllmenuDep2.style.opacity = '0';
      this.parentElement.style.height = "64px";
      this.classList.remove('clicked');
    }
  })
})

// sec02_menu
// menu_tabs

const menu_tabs = Array.from(document.querySelectorAll('#sec02_menu .menu_tabs li'));
const menu_boxes = Array.from(document.querySelectorAll('#sec02_menu .menu_boxes ul'));


menu_tabs.forEach(function(e) {
  let menu_tab_index;
  e.addEventListener('click', function() {
    menu_tab_index = menu_tabs.indexOf(e);
    menu_tabs.forEach(function(e) {
      e.classList.remove('clicked');
    })
    e.classList.add('clicked');
    menu_boxes.forEach(function(e) {
      e.classList.remove('clicked');
    })
    menu_boxes[menu_tab_index].classList.add('clicked');
  })
})