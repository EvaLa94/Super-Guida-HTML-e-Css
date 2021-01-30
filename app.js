// VARIABLES

const logo = document.querySelector(".logo");
const headName = document.querySelector(".head-name");
const hardSkills = document.querySelector(".hard-skills-parent");
const skillList = document.querySelectorAll(".skill-list");
const progressBar = document.querySelectorAll(".progress");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

const hardSkillsArray = ["html", "css", "sass", "bootstrap", "javascript"];

// EVENT LISTENERS
// Flower animation
headName.addEventListener("mouseenter", function () {
  logo.style.animation = "logo 8s linear infinite";
  headName.style.transform = "scale(1.1)";
});
headName.addEventListener("mouseleave", function () {
  logo.style.animation = "";
  headName.style.transform = "";
});

// Hard Skills animation
if (hardSkills) {
  hardSkills.addEventListener("click", function (e) {
    removeActive(e);
    toggleActive(e);
  });
}

// Burger Menu Animation
burger.addEventListener("click", function (e) {
  burger.classList.toggle("burger-active");
  navLinks.classList.toggle("nav-links-active");
});

// FUNCTIONS
// toggle the active class to show more information
function toggleActive(e) {
  for (let i = 0; i < hardSkillsArray.length; i++) {
    if (
      e.target.parentElement.classList.contains(
        `${hardSkillsArray[i]}-container`
      )
    ) {
      e.target.parentElement.classList.toggle("active");
    }
  }
}

// Remove active class to the containers
function removeActive(e) {
  for (let child of hardSkills.children) {
    if (
      child.classList.contains("active") &&
      child !== e.target.parentElement
    ) {
      child.classList.remove("active");
    }
  }
}
