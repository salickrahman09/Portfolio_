// Toggle icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Read More button for specific sections
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.getElementById("read-more-btn");
  const moreContent = document.getElementById("more-content");

  if (readMoreBtn && moreContent) {  // Ensure these elements exist
    readMoreBtn.addEventListener("click", function (event) {
      event.preventDefault();
      if (moreContent.classList.contains("hidden")) {
        moreContent.classList.remove("hidden");
        readMoreBtn.textContent = "Read Less";
      } else {
        moreContent.classList.add("hidden");
        readMoreBtn.textContent = "Read More";
      }
    });
  }
});

// Toggle service section read more
document.querySelectorAll('.services .read-more').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const servicesBox = this.closest('.services-box');
    
    if (servicesBox.classList.contains('active')) {
      this.textContent = 'Read More';
    } else {
      this.textContent = 'Read Less';
    }
    
    servicesBox.classList.toggle('active');
  });
});

// Scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar when a navbar link is clicked (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Scroll reveal animations
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}



