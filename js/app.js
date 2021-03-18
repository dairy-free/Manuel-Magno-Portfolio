const toggleNav = document.getElementsByClassName('fa-bars')[0]
const navBar = document.getElementsByClassName('navbar-container')[0]

console.log(toggleNav, navBar)

toggleNav.addEventListener('click', () => navBar.classList.add('show-nav'));

