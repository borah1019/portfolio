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