// Modal and Form Handling
const getStartedBtn = document.getElementById('getStartedBtn');
const modal = document.getElementById('popupForm');
const closeBtn = document.querySelector('.close-btn');
const joinForm = document.getElementById('joinForm');

// Show modal when Get Started is clicked
getStartedBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal with close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle modal form submission
joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(joinForm);
    console.log('Form data:', Object.fromEntries(formData));
    
    // Show thank you message and reset form
    joinForm.reset();
    modal.style.display = 'none';
    alert('Thank you for joining FitLife! We will contact you soon.');
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    console.log('Contact form data:', Object.fromEntries(formData));
    
    // Show thank you message and reset form
    contactForm.reset();
    thankYouMessage.style.display = 'block';
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 3000);
});

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Countdown Timer
function updateTimer() {
    const target = new Date();
    target.setHours(target.getHours() + 24);
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = target - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer').textContent = 
            `${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('timer').textContent = "EXPIRED";
        }
    }, 1000);
}

updateTimer();

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Active Link Management
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  // Function to update active link
  function updateActiveLink() {
    const currentHash = window.location.hash;
    
    // Remove active class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to matching link
    if (currentHash) {
      const activeLink = document.querySelector(`.nav-links a[href="${currentHash}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    } else {
      // Default to home link if no hash
      document.querySelector('.nav-links a[href="#hero"]').classList.add('active');
    }
  }

  // Update on initial load
  updateActiveLink();

  // Update on hash change
  window.addEventListener('hashchange', updateActiveLink);

  // Smooth scroll with offset
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offset = 80; // Navbar height
        const topPos = targetSection.offsetTop - offset;
        
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });

        // Update URL hash
        history.pushState(null, null, targetId);
        updateActiveLink();
      }
    });
  });

  // Scrollspy for automatic detection
  window.addEventListener('scroll', function() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = `#${section.id}`;
      }
    });

    if (currentSection) {
      history.replaceState(null, null, currentSection);
      updateActiveLink();
    }
  });
});
// Set current year dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

// Close menu after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});