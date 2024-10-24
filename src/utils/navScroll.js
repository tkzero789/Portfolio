document.addEventListener("DOMContentLoaded", (event) => {
  const ulElement = document.querySelector("#scroll-header");
  const anchorElements = document.querySelectorAll(".scroll-item");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 82) {
      ulElement.classList.add("bg-blur-header", "border-0");
      anchorElements.forEach((anchorElement) => {
        anchorElement.classList.add("text-secondary");
      });
    } else {
      ulElement.classList.remove("bg-blur-header", "border-0");
      anchorElements.forEach((anchorElement) => {
        anchorElement.classList.remove("text-secondary");
      });
    }
  });
});
