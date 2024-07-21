document.addEventListener("DOMContentLoaded", (event) => {
  const ulElement = document.querySelector("#scroll-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 82) {
      ulElement.classList.add("bg-blur-header", "text-secondary", "border-0");
    } else {
      ulElement.classList.remove(
        "bg-blur-header",
        "text-secondary",
        "border-0",
      );
    }
  });
});
