document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // 👈 ESSA LINHA FAZ REANIMAR
      }

    });
  });

  elements.forEach(el => observer.observe(el));
});

const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    content.classList.toggle("active");

    
  });
});


