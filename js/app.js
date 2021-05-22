const navBar = document.getElementsByClassName('navbar-container')[0]
const menuBtn = document.getElementsByClassName('menu-btn')[0]
let menuOpen = false;
const showNav = document.getElementsByClassName('navbar-container')[0]
const navWork = document.getElementsByClassName('nav-work')[0]
const navAbout = document.getElementsByClassName('nav-about')[0]
const navContact = document.getElementsByClassName('nav-contact')[0]
const darkenContainer = document.getElementsByClassName('darken-container')[0]
const body = document.getElementsByTagName('body')[0]





// Toggles Nav Menu & Transforms Hamburger Menu
menuBtn.addEventListener('click', NavMenuToggle);
navWork.addEventListener('click', NavMenuToggle);
navAbout.addEventListener('click', NavMenuToggle);
navContact.addEventListener('click', NavMenuToggle);


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


// Observer 

const sections = document.querySelectorAll('.sections');
const introSection = document.getElementById('introduction');
const workSection = document.getElementById('work');
const aboutSection = document.getElementById('about-me');
const contactSection = document.getElementById('contact-me');




const options = {
  threshold: 0,
  rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries, observer ) {
  entries.forEach(entry => {
    // console.log(entry.target)
    // sections.classList.add('fade-in')

  })
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// observer.observe(introSection)


