const year = document.getElementById("year");
const backToTop = document.getElementById("backToTop");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
