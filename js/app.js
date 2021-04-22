const navBar = document.getElementsByClassName('navbar-container')[0]
const menuBtn = document.getElementsByClassName('menu-btn')[0]
let menuOpen = false;
const showNav = document.getElementsByClassName('navbar-container')[0]
const darkenContainer = document.getElementsByClassName('container')[0]
const darkenNavbar = document.getElementsByClassName('nav-icon-container')[0]

// Toggles Nav Menu & Transforms Hamburger Menu
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navBar.classList.add('show-nav')
    darkenContainer.classList.add('darken')
    darkenNavbar.classList.add('darken')
    menuOpen = true;
    
  } else {
    menuBtn.classList.remove('open');
    navBar.classList.remove('show-nav')
    darkenContainer.classList.remove('darken')
    darkenNavbar.classList.remove('darken')
    menuOpen = false;
  }
});




