const burgerCheckbox = document.getElementById("burger");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        burgerCheckbox.checked = false;
    });
});