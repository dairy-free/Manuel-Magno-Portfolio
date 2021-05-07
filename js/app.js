const navBar = document.getElementsByClassName('navbar-container')[0]
const menuBtn = document.getElementsByClassName('menu-btn')[0]
let menuOpen = false;
const showNav = document.getElementsByClassName('navbar-container')[0]
const navWork = document.getElementsByClassName('nav-work')[0]
const navAbout = document.getElementsByClassName('nav-about')[0]
const darkenContainer = document.getElementsByClassName('darken-container')[0]
const body = document.getElementsByTagName('body')[0]




// Toggles Nav Menu & Transforms Hamburger Menu
menuBtn.addEventListener('click', NavMenuToggle);
navWork.addEventListener('click', NavMenuToggle);
navAbout.addEventListener('click', NavMenuToggle);


function NavMenuToggle(){

  if(!menuOpen) {
    menuBtn.classList.add('open');
    navBar.classList.add('show-nav')
    darkenContainer.classList.add('darken')
    body.style.overflow = "hidden";
    menuOpen = true;
    
  } else {
    menuBtn.classList.remove('open');
    navBar.classList.remove('show-nav')
    darkenContainer.classList.remove('darken')
    body.style.overflow = "visible";
    menuOpen = false;
  }
}


