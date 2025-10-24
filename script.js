let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Typing text code

const typed = new Typed('.multiple-text', {
      strings: ['Physical Fitness...', 'Weight Gain...','Stregth Training...','Weight Lifting...','Running...'],
      typeSpeed: 60,
      backSpeed: 60,
      backdelap: 1000,
      loop:true,
    });