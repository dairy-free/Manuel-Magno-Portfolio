const navBar = document.getElementsByClassName('navbar-container')[0]
const menuBtn = document.getElementsByClassName('menu-btn')[0]
let menuOpen = false;
const showNav = document.getElementsByClassName('navbar-container')[0]
const darkenContainer = document.getElementsByClassName('darken-container')[0]
const body = document.getElementsByTagName('body')[0]
console.log(body)




// Toggles Nav Menu & Transforms Hamburger Menu
menuBtn.addEventListener('click', () => {
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
});




