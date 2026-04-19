// Sticky Navbar
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(reveal => observer.observe(reveal));

// Typing Effect
const text = "Frontend Developer";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
if (typingElement) typeEffect();

// Dark Mode
const toggleBtn = document.getElementById("darkModeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

// ===== EMAILJS ACTIVATION =====
(function () {
  emailjs.init("H4fAwMKPvlVyvwhwB");
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#2563eb";

    emailjs.sendForm(
  "service_bxglv0p",
  "template_ramamf8",
  this
)
    .then(() => {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    })
    .catch((error) => {
      status.textContent = "Failed to send message.";
      status.style.color = "red";
      console.log("EmailJS Error:", error);
    });
  });
}
