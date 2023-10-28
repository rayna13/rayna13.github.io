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

/** Home page animation */


const textElement = document.querySelector('#typed-text');
const texts = ["Développeuse Web", "Scroller pour en savoir plus"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Typing speed
let deletionSpeed = 75; // Faster deletion speed

function typeText() {
  const currentText = texts[textIndex];
  if (isDeleting) {
    // Remove a character
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = deletionSpeed; // Use deletion speed
  } else {
    // Add a character
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100; // Reset typing speed
  }

  // Check if the text is fully typed or deleted
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeText, typingSpeed);
}

// Start the typing effect
setTimeout(typeText, typingSpeed);
