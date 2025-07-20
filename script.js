// ByteForge Studio - script.js
// Interactive behaviors for navigation, section reveal, and contact form validation
// Auto-hide after 10 seconds
setTimeout(() => {
    hideSplash();
  }, 20000);
  
  // Function to hide splash screen and show main content
  function hideSplash() {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }
  document.addEventListener("DOMContentLoaded", () => {
      // Scroll to sections smoothly
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    
  
   
    // Mobile nav toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }
  
    // Reveal sections on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => observer.observe(section));
  
    // Show certificates
    const showCertificatesBtn = document.getElementById("show-cert-btn");
    const certSection = document.getElementById("certificates");
    if (showCertificatesBtn && certSection) {
      showCertificatesBtn.addEventListener("click", () => {
        if (certSection.style.display === "none" || certSection.style.display === "") {
          certSection.style.display = "block";
          certSection.scrollIntoView({ behavior: "smooth" });
        } else {
          certSection.style.display = "none";
        }
      });
    }
  
    // Simple contact form validation
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", e => {
        const email = form.querySelector('input[type="email"]');
        if (email && !email.value.includes("@")) {
          e.preventDefault();
          alert("Please enter a valid email address.");
        }
      });
    }
  });