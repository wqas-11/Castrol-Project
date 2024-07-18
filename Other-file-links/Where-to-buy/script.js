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

// Where to buy

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('.tabs-header-item');
  const tabContents = document.querySelectorAll('.tabs-body-content');

  // Add click event listeners to each tab button
  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          const tabItemId = button.getAttribute('data-tab-item-id');

          tabContents.forEach(content => {
              if (content.getAttribute('data-tab-item-id') === tabItemId) {
                  content.style.display = 'block';
              } else {
                  content.style.display = 'none';
              }
          });
      });
  });
});


// is active
// Get all buttons with class "tabs-header-item"
const buttons = document.querySelectorAll('.tabs-header-item');

// Loop through each button and add click event listener
buttons.forEach(button => {
  button.addEventListener('click', function () {
      buttons.forEach(btn => {
          btn.classList.remove('is-active');
      });
      this.classList.add('is-active');
  });
});
