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

var slideIndex1 = 0; // Slide index for the first slideshow
var slideIndex2 = 0; // Slide index for the second slideshow
var myTimer1; // Timer for the first slideshow
var myTimer2; // Timer for the second slideshow

// Start the automatic slideshow for both slideshows when the page is loaded
window.addEventListener('load', function () {
  carousel1();
  carousel2();
});

// Function to control automatic slideshow and text change for the first slideshow
function carousel1() {
  var i;
  var slides = document.querySelectorAll('.slideshow1 .mySlides');
  var texts = document.querySelectorAll('.slideshow1 .slide-show-text-container');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts[i].style.display = "none";  // Hide all text containers
  }

  slideIndex1++;

  if (slideIndex1 > slides.length) { slideIndex1 = 1; }

  slides[slideIndex1 - 1].style.display = "block";
  texts[slideIndex1 - 1].style.display = "block";  // Display the corresponding text container

  // Change image and text every 4 seconds
  myTimer1 = setTimeout(carousel1, 4000);
}

// Function to control automatic slideshow and text change for the second slideshow
function carousel2() {
  var i;
  var slides = document.querySelectorAll('.slideshow2 .mySlides');
  var texts = document.querySelectorAll('.slideshow2 .slide-show-text-container');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts[i].style.display = "none";  // Hide all text containers
  }

  slideIndex2++;

  if (slideIndex2 > slides.length) { slideIndex2 = 1; }

  slides[slideIndex2 - 1].style.display = "block";
  texts[slideIndex2 - 1].style.display = "block";  // Display the corresponding text container

  // Change image and text every  seconds
  myTimer2 = setTimeout(carousel2, 4000);
}

// Function to navigate manually for the first slideshow
function plusDivs1(n) {
  showDivs(slideIndex1 += n, 'slideshow1');
  // Reset timer and start again
  clearTimeout(myTimer1);
  myTimer1 = setTimeout(carousel1, 4000);
}

// Function to navigate manually for the second slideshow
function plusDivs2(n) {
  showDivs(slideIndex2 += n, 'slideshow2');
  // Reset timer and start again
  clearTimeout(myTimer2);
  myTimer2 = setTimeout(carousel2, 4000);
}

// Function to display slides for both slideshows
function showDivs(n, slideshow) {
  var i;
  var slides = document.querySelectorAll(`.${slideshow} .mySlides`);
  var texts = document.querySelectorAll(`.${slideshow} .slide-show-text-container`);

  if (n > slides.length) { slideIndex1 = 1; slideIndex2 = 1; }
  if (n < 1) { slideIndex1 = slides.length; slideIndex2 = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts[i].style.display = "none";  // Hide all text containers
  }

  if (slideshow === 'slideshow1') {
    slides[slideIndex1 - 1].style.display = "block";
    texts[slideIndex1 - 1].style.display = "block";  // Display the corresponding text container
  } else if (slideshow === 'slideshow2') {
    slides[slideIndex2 - 1].style.display = "block";
    texts[slideIndex2 - 1].style.display = "block";  // Display the corresponding text container
  }
}


var slideIndexMini = 0; // Slide index for the mini slideshow
var myTimerMini; // Timer for the mini slideshow

// Start the automatic mini slideshow when the page is loaded
window.addEventListener('load', function () {
  carouselMini();
});

// Function to control automatic mini slideshow for the mini slideshow
function carouselMini() {
  var i;
  var slidesMini = document.querySelectorAll('.mini-slide-show .mySlides');
  var textsMini = document.querySelectorAll('.mini-slide-show .mini-slide-show-text-container');

  for (i = 0; i < slidesMini.length; i++) {
    slidesMini[i].style.display = "none";
    textsMini[i].style.display = "none";  // Hide all text containers
  }

  slideIndexMini++;

  if (slideIndexMini > slidesMini.length) { slideIndexMini = 1; }

  slidesMini[slideIndexMini - 1].style.display = "block";
  textsMini[slideIndexMini - 1].style.display = "block";  // Display the corresponding text container
}

// Function to navigate manually for the mini slideshow
function plusDivsMini(n) {
  showDivsMini(slideIndexMini += n);
  // Reset timer and start again
  clearTimeout(myTimerMini);
  myTimerMini = setTimeout(carouselMini, 4000);
}

// Function to display slides for the mini slideshow
function showDivsMini(n) {
  var i;
  var slidesMini = document.querySelectorAll('.mini-slide-show .mySlides');
  var textsMini = document.querySelectorAll('.mini-slide-show .mini-slide-show-text-container');

  if (n > slidesMini.length) { slideIndexMini = 1; }
  if (n < 1) { slideIndexMini = slidesMini.length; }

  for (i = 0; i < slidesMini.length; i++) {
    slidesMini[i].style.display = "none";
    textsMini[i].style.display = "none";  // Hide all text containers
  }

  slidesMini[slideIndexMini - 1].style.display = "block";
  textsMini[slideIndexMini - 1].style.display = "block";  // Display the corresponding text container
}


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