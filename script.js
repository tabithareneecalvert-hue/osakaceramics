let currentLang = "jp";

function changeLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("jp"); // Set the default language to Japanese
  document.getElementById("langBtn").addEventListener("click", () => {
    const newLang = currentLang === "en" ? "jp" : "en";
    changeLanguage(newLang);
  });
});

// Mobile hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
const modal = document.getElementById("welcomeModal");
const closeBtn = document.querySelector(".modal .close");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Show modal after 1 second
window.addEventListener("load", () => {
  setTimeout(() => {
    modal.style.display = "block";
  }, 1000);
});

// Close on X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close on button
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close on outside click
window.addEventListener("click", (e) => {
  modal.style.display = "none";
});
