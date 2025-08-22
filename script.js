// Hamburger menu toggle for mobile nav
const menuBtn = document.getElementById('menu-btn');
const navUl = document.getElementById('nav-ul');
menuBtn.onclick = () => {
  navUl.classList.toggle('show');
  menuBtn.classList.toggle('open');
};

// Hide menu on mobile link click
document.querySelectorAll('#nav-ul li a').forEach(link => {
  link.onclick = () => {
    navUl.classList.remove('show');
    menuBtn.classList.remove('open');
  };
});

// Typed.js HERO animation
new Typed('.animated-role', {
  strings: [
    "People Analytics Specialist", 
    "Data Engineer", 
    "Workforce Reporting Expert", 
    "BI Dashboard Builder"
  ],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});

// ScrollReveal animations
ScrollReveal().reveal('.home-section', { origin: 'top', distance: '40px', duration: 900, delay: 200 });
ScrollReveal().reveal('.about-section', { origin: 'left', distance: '60px', duration: 900, delay: 300 });
ScrollReveal().reveal('.service-card', { origin: 'right', distance: '60px', duration: 1000, interval: 200 });
ScrollReveal().reveal('.portfolio-item', { origin: 'bottom', distance: '40px', duration: 900, interval: 100 });
ScrollReveal().reveal('.contact-section', { origin: 'left', distance: '60px', duration: 900 });
