// Dynamic Typing Effect for Hero Section
const dynamicText = document.getElementById('dynamic-text');
const phrases = ["My Portfolio", "Hithesh's Projects", "Creative Ideas"];
let phraseIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < phrases[phraseIndex].length) {
        dynamicText.textContent += phrases[phraseIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            deleteEffect();
        }, 2000);
    }
}

function deleteEffect() {
    if (charIndex > 0) {
        dynamicText.textContent = phrases[phraseIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteEffect, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 100);
    }
}

// Trigger the typing effect on page load
typeEffect();

// Scroll-Based Active Link Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

// Form Validation and Feedback
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        feedback.textContent = "⚠️ Please fill out all fields!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "✅ Thank you for your message! I'll get back to you soon.";
        feedback.style.color = "#58a6ff";

        // Reset form
        form.reset();
        setTimeout(() => {
            feedback.textContent = "";
        }, 5000);
    }
});
