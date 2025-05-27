'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});




/**
 * toggle view more & view less testimonial
 * 
 * when click view more button
 */

const toggleBtn = document.getElementById("toggleTestimonials");
const hiddenTestimonials = document.querySelectorAll(".hidden-testimonial");
let expanded = false;

toggleBtn.addEventListener("click", () => {
  hiddenTestimonials.forEach(item => {
    item.style.display = expanded ? "none" : "flex";
  });
  toggleBtn.querySelector("span").textContent = expanded ? "View More" : "View Less";
  toggleBtn.querySelector("ion-icon").name = expanded ? "chevron-down-outline" : "chevron-up-outline";
  expanded = !expanded;
});
/**
 * toggle view more & view less gallery photo
 * 
 * when click view more button
 */

const toggleBtn2 = document.getElementById("toggleGallery");
const hiddenGalleryPhotoes = document.querySelectorAll(".img-hidden");
let expanded2 = false;

toggleBtn2.addEventListener("click", () => {
  hiddenGalleryPhotoes.forEach(item => {
    item.style.display = expanded2 ? "none" : "flex";
  });
  toggleBtn2.querySelector("span").textContent = expanded2 ? "View More" : "View Less";
  toggleBtn2.querySelector("ion-icon").name = expanded2 ? "chevron-down-outline" : "chevron-up-outline";
  expanded2 = !expanded2;
});


// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault();

//   // Get form values
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var message = document.getElementById('message').value;
//   var mobile = document.getElementById('mobile').value;
//   // Check if any field is empty
//   if (!name || !email || !message || !mobile) {
//     alert('Please fill in all fields.');
//     return;
//   }
//   // Send email using EmailJS
//   emailjs.send('service_6tb2q4g', 'template_qk8621o', {
//     from_name: name,
//     from_email: email,
//     from_mobile: mobile,
//     message: message
//   }).then(function (response) {
//     console.log('SUCCESS!', response.status, response.text);
//     alert('Your message has been sent successfully!');
//     document.getElementById('contact-form').reset();
//   }, function (error) {
//     console.log('FAILED...', error);
//     alert('Failed to send your message. Please try again later.');
//     document.getElementById('contact-form').reset();
//   });
// });

// (function () {
//   emailjs.init("w-7uVGjj3m6yp4Mkq"); // Replace 'YOUR_USER_ID' with your EmailJS user ID
// })();

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var mobile = document.getElementById('mobile').value.trim();

  // Check if any field is empty
  if (!name || !email || !message || !mobile) {
    alert('Please fill in all fields.');
    return;
  }

  // Prepare form data for Web3Forms
  var formData = new FormData(this);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert('Your message has been sent successfully!');
        document.getElementById('contact-form').reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      alert('Failed to send your message. Please try again later.');
      document.getElementById('contact-form').reset();
    });
});