////////////// SIDEBAR FUNCTIONALITY /////////////
function openNav() {
    document.getElementById("sideNav").style.width = "180px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// Close when clicked outside
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById("sideNav");
    const navBtn = document.querySelector(".navBtn");

    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnNavBtn = navBtn.contains(event.target);

    // Check if sidebar open
    const sidebarWidth = sidebar.style.width;
    const isSidebarOpen = sidebarWidth && sidebarWidth !== "0" && sidebarWidth !== "0px";

    if (!isClickInsideSidebar && !isClickOnNavBtn && isSidebarOpen) {
        closeNav();
    }
});

// Link is clicked
document.querySelectorAll('#sideNav .links').forEach(function (link) {
    link.addEventListener('click', function () {
        closeNav();
    });
});

// On Scroll
window.addEventListener('scroll', function () {
    const sidebar = document.getElementById("sideNav");
    const sidebarWidth = sidebar.style.width;
    const isSidebarOpen = sidebarWidth && sidebarWidth !== "0" && sidebarWidth !== "0px";

    if (isSidebarOpen) {
        closeNav();
    }
});

///////Search Area////////
document.addEventListener('click', function (event) {
const dropdowns = document.querySelectorAll('select');
dropdowns.forEach(select => {
if (!select.contains(event.target)) {
select.blur();
}
});
});


document.querySelectorAll('select').forEach(select => {
select.addEventListener('change', () => {
select.blur(); // close dropdown after selection
});
});


document.getElementById("searchForm").addEventListener("submit", function (e) {
e.preventDefault();
const data = {
location: document.getElementById("location").value,
type: document.getElementById("type").value,
sort: document.getElementById("sort").value,
bedrooms: document.getElementById("bedrooms").value,
baths: document.getElementById("baths").value,
minPrice: document.getElementById("min-price").value,
maxPrice: document.getElementById("max-price").value,
};
console.log("Search Criteria:", data);
alert("Search submitted! Check console for data.");
});

// Carousel Images
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const thumbs = document.querySelectorAll(".thumbnail");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  slides.forEach(slide => slide.style.display = "none");
  thumbs.forEach(thumb => thumb.classList.remove("active"));
  slides[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

// Contact Section
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all required fields.";
      formStatus.style.color = "red";
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.style.color = "red";
      return;
    }

    console.log({
      name: name,
      email: email,
      message: message,
    });

    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";

    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
    }, 4000);
  });
});