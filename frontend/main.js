/* =========================
   CONTACT FORM (FRONTEND ONLY)
========================= */
function sendMessage(event) {
  event.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (name === "" || email === "" || message === "") {
    status.innerText = "❌ Please fill all fields";
    status.style.color = "red";
    return;
  }

  // Frontend success message (NO backend)
  status.innerText = "✅ Message sent successfully!";
  status.style.color = "#38bdf8";

  // Clear form
  document.getElementById("contactForm").reset();
}

/* =========================
   SMOOTH PROJECT SCROLL
========================= */
function goToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

/* =========================
   SCROLL REVEAL EFFECT
========================= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* =========================
   TYPING TEXT EFFECT
========================= */
const words = [
  "Full Stack Developer",
  "Python Developer",
  "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect() {
  const typingElement = document.getElementById("typing");
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.innerText = currentWord.slice(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typingEffect, 1000);
      return;
    }
  } else {
    typingElement.innerText = currentWord.slice(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typingEffect, isDeleting ? 80 : 120);
}

typingEffect();
