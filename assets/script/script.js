/** Burger menu */

const burgerCheckbox = document.getElementById("burger");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        burgerCheckbox.checked = false;
    });
});


/** Navigation */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  let scrollY = window.scrollY;

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

/** Home page animation */

const textElement = document.querySelector('#typed-text');
const texts = ["Développeuse Web", "Scrollez pour en savoir plus"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletionSpeed = 75;

function typeText() {
  const currentText = texts[textIndex];
  if (isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = deletionSpeed;
  } else {
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeText, typingSpeed);
}

setTimeout(typeText, typingSpeed);


/** Section title */

const sectionTags = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const h2 = entry.target.querySelector('h2');
          const hr = entry.target.querySelector('hr');
          const h2Width = h2.getBoundingClientRect().width;
          hr.style.width = h2Width / 2 + 'px';
          hr.style.visibility = 'visible';
      }
  });
}, { threshold: 0.5 });


sectionTags.forEach(section => {
  observer.observe(section);
});
