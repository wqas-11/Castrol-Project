// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  // Scroll smoothly to the top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Define a function to scroll to the top
function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

// Call the function when the window is loaded
window.onload = function () {
  scrollToTop();
};

// Call the function when the page is reloaded
window.addEventListener('beforeunload', function () {
  scrollToTop();
});



// Function to open mobile menu
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

function toggleMobileMenu(icon) {
  icon.classList.toggle('change');
  var menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('active');
}

// Function to close mobile menu
function closeMobileMenu() {
    var icon = document.getElementById('hamburger-icon');
    var menu = document.querySelector('.mobile-menu');
    if (icon.classList.contains('change')) {
        icon.classList.remove('change');
    }
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
}

// Add event listener for window resize
window.addEventListener('resize', function() {
    closeMobileMenu();
});