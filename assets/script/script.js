const burgerCheckbox = document.getElementById("burger");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        burgerCheckbox.checked = false;
    });
});


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("[data-target=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("[data-target=" + sectionId + "]").classList.remove("active");
    }
  });
}
