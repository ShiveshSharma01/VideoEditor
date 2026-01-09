const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("active");
  });
}

// Skill stagger
function animateSkills() {
  document.querySelectorAll(".skill").forEach((skill, i) => {
    setTimeout(() => {
      skill.style.opacity = "1";
      skill.style.transform = "translateY(0)";
    }, i * 150);
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  revealOnScroll();
  animateSkills();
});
