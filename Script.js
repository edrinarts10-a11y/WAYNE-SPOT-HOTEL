let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 4000); // Change every 4 sec
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');




toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});