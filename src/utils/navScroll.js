document.addEventListener("DOMContentLoaded", (event) => {
  const ulElement = document.querySelector("#scroll-header");
  const anchorElements = document.querySelectorAll(".scroll-item");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 82) {
      ulElement.classList.add("bg-blur-base", "border-0", "text-dark-text");
      anchorElements.forEach((anchorElement) => {
        anchorElement.classList.add(" ");
      });
    } else {
      ulElement.classList.remove("bg-blur-base", "border-0", "text-dark-text");
      anchorElements.forEach((anchorElement) => {
        anchorElement.classList.remove(" ");
      });
    }
  });
});
