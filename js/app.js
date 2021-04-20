const navBar = document.getElementsByClassName('navbar-container')[0]
const menuBtn = document.getElementsByClassName('menu-btn')[0]
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
})

// console.log(menuBtn)

// toggleNav.addEventListener('click', () => navBar.classList.add('show-nav'));


