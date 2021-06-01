const navBar = document.getElementsByClassName('navbar-container')[0]
const menuBtn = document.getElementsByClassName('menu-btn')[0]
let menuOpen = false;
const showNav = document.getElementsByClassName('navbar-container')[0]
const navWork = document.getElementsByClassName('nav-work')[0]
const navAbout = document.getElementsByClassName('nav-about')[0]
const navContact = document.getElementsByClassName('nav-contact')[0]
const darkenContainer = document.getElementsByClassName('darken-container')[0]
const scrollContainer = document.getElementsByClassName('scroll-container')[0]





// Toggles Nav Menu & Transforms Hamburger Menu
menuBtn.addEventListener('click', NavMenuToggle);
navWork.addEventListener('click', closeMenu);
navAbout.addEventListener('click', closeMenu);
navContact.addEventListener('click', closeMenu);


function NavMenuToggle(){

  if( menuOpen === false ) {
    
    menuBtn.classList.add('open');
    navBar.classList.add('show-nav')
    darkenContainer.classList.add('darken')
    scrollContainer.style.overflow = "hidden";
    menuOpen = true;
    
  } else {

    closeMenu()

  }
  
  

}

function closeMenu() {
  
  menuBtn.classList.remove('open');
  navBar.classList.remove('show-nav')
  darkenContainer.classList.remove('darken')
  scrollContainer.style.overflow = "visible";
  menuOpen = false;

}


// Observers 

const sections = document.querySelectorAll('.sections');
const introSection = document.getElementById('introduction');
const nav = document.getElementsByClassName('navbar')[0];
const faders = document.querySelectorAll(".fade-in");
const sliders = document.getElementsByClassName('slide-in')[0];





// Nav and Intro 

const options = {
  threshold: 0,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer ) {
  entries.forEach(entry => {

    if(!entry.isIntersecting) {
      return;

    } else {

      entry.target.classList.add('appear')
      observer.unobserve(entry.target);

    }

   
    
  })
}, options);

// sliders.forEach(slider => {
//   observer.observe(slider);
// });


observer.observe(nav)


// Body 

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px 0px 0px"
};



const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;

    } else {
      
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});




