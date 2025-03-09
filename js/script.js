/* Hamburber menu click */
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
}

/* hamburger menu tutup*/
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});