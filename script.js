// Function to add a smooth scroll effect to anchor links
function smoothScrollToAnchor(event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  const scrollOffset = 100; // Adjust the scroll offset as needed
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
    offsetTop: scrollOffset
  });
}

// Add event listeners to anchor links for smooth scrolling
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', smoothScrollToAnchor);
});

// Function to toggle a CSS class for the menu button and navigation menu
function toggleMenu() {
  menu.classList.toggle('open');
  open.classList.toggle('hidden');
  close.classList.toggle('hidden');
}

// Add event listeners to open and close the menu
open.addEventListener('click', openmenu);
close.addEventListener('click', closemenu);

// Function to change the background color of the navbar on scroll
function changeNavBgColor() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

// Add event listener to track scroll and change navbar background color
window.addEventListener("scroll", changeNavBgColor);
