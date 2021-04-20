const navBar = document.getElementsByClassName('navbar-container')[0]
const menuBtn = document.getElementsByClassName('menu-btn')[0]
let menuOpen = false;
const showNav = document.getElementsByClassName('navbar-container')[0]
console.log(showNav)

// Toggles Nav Menu & Transforms Hamburger Menu
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navBar.classList.add('show-nav')
    menuOpen = true;
    
  } else {
    menuBtn.classList.remove('open');
    navBar.classList.remove('show-nav')
    menuOpen = false;
  }
});




