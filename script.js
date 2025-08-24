// Fade-in on scroll for book elements
document.addEventListener("DOMContentLoaded", () => {
    const books = document.querySelectorAll(".book");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
  
    books.forEach(book => observer.observe(book));
  });