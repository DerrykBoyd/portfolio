// hide typewriter on animation end
const typewriter = document.querySelector('.typewriter');
typewriter.addEventListener('animationend', e => {
  if (e.animationName === 'typewriter') {
    setTimeout(() => {
      e.target.style['border-right-color'] = 'transparent';
    }, 500);
  }
})

// highlight bottom nav based on scroll
const btmNavItems = document.querySelectorAll('.btm-nav-item');
const tech = document.querySelector('#tech');
const projects = document.querySelector('#projects');
const education = document.querySelector('#education');

document.addEventListener('scroll', _ => {
  btmNavItems.forEach(item => item.classList.remove('active'))
  if (window.scrollY < tech.offsetTop-16) btmNavItems[0].classList.add('active');
  else if (window.scrollY < projects.offsetTop-16) btmNavItems[1].classList.add('active');
  else if (window.scrollY < education.offsetTop-16) btmNavItems[2].classList.add('active');
  else btmNavItems[3].classList.add('active');
})