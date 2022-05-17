console.log("Coded by Billy Kibet");
console.log(
  "Version three of my website\nTring to fake a react app just to avoid reloading"
);
console.log("===================================");

const work = document.querySelector(".work");
const logo = document.querySelector(".logo");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const closeContact = document.querySelector(".close");
const contactHolder = document.querySelector(".contactHolder");
const projectPreview = document.querySelector(".projectPreview");
const workHolder = document.querySelector(".plateHolder");
const aboutHolder = document.querySelector(".aboutHolder");

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
contact.addEventListener("click", function () {
  scrollToTop();

  contactHolder.style.height = "100vh";
  contactHolder.style.display = "flex";
  projectPreview.style.display = "none";

  aboutHolder.style.display = "none";
  workHolder.style.display = "none";
  updateNav();
});

work.addEventListener("click", function () {
  scrollToTop();
  projectPreview.style.display = "none";

  aboutHolder.style.display = "none";
  contactHolder.style.display = "none";
  workHolder.style.display = "block";
  updateNav();
});

logo.addEventListener("click", function () {
  scrollToTop();
  projectPreview.style.display = "none";

  aboutHolder.style.display = "none";
  contactHolder.style.display = "none";
  workHolder.style.display = "block";
  updateNav();
});

about.addEventListener("click", function () {
  scrollToTop();
  projectPreview.style.display = "none";

  aboutHolder.style.display = "block";
  contactHolder.style.display = "none";
  workHolder.style.display = "none";
  updateNav();
});

closeContact.addEventListener("click", function () {
  contactHolder.style.height = "0vh";
  contactHolder.style.display = "none";
});

const menuBtn = document.querySelector(".menu");

const menuWrapper = document.querySelector(".nav");

menuBtn.addEventListener("click", function () {
  updateNav();
});
function updateNav() {
  menuWrapper.classList.toggle("isOpen");

  if (menuWrapper.classList.contains("isOpen")) {
    menuWrapper.style.height = "40vh";

    menuWrapper.style.display = "flex";
  } else {
    menuWrapper.style.height = "0vh";
    menuWrapper.style.display = "none";
  }
}
