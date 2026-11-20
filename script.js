
// Get the navigation elements
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const menuBackdrop = document.getElementById("menuBackdrop");
const mobileMenu = document.getElementById("mobileMenu");

// Function to open the mobile navigation menu
function openMenu() {
  document.body.classList.add("menu-open");

  menuToggle.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
}

// Function to close the mobile navigation menu
function closeMenu() {
  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

// Open menu when hamburger button is clicked
menuToggle.addEventListener("click", openMenu);

// Close menu when X button is clicked
menuClose.addEventListener("click", closeMenu);

// Close menu when the dark backdrop is clicked
menuBackdrop.addEventListener("click", closeMenu);

// Close menu after clicking any navigation link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close menu when Escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
