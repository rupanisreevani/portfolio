function sendMessage() {
  fetch("http://127.0.0.1:8000/api/contact/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("status").innerText = "Message sent successfully!";
  });
}

function goToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   PROJECT SCROLL
========================= */
function goToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

/* =========================
   CONTACT MESSAGE DEMO
========================= */
function sendMessage() {
  document.getElementById("status").innerText =
    "✅ Message sent successfully!";
}

/* =========================
   SCROLL REVEAL EFFECT
========================= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
      el.classList.add("active");
    }
  });
});


/* =========================
   TYPING EFFECT
========================= */
const words = ["Full Stack Developer", "Python Developer", "React Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].slice(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].slice(0, j--);
    }

    document.getElementById("typing").innerText = currentWord;

    if (j === words[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }
  setTimeout(type, 120);
}

type();
