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
  contactHolder.style.height = "100vh";
  contactHolder.style.display = "flex";
});

work.addEventListener("click", function () {
  scrollToTop();
  projectPreview.style.display = "none";

  aboutHolder.style.display = "none";
  contactHolder.style.display = "none";
  workHolder.style.display = "block";
});

logo.addEventListener("click", function () {
  scrollToTop();
  projectPreview.style.display = "none";

  aboutHolder.style.display = "none";
  contactHolder.style.display = "none";
  workHolder.style.display = "block";
});

about.addEventListener("click", function () {
  scrollToTop();
  projectPreview.style.display = "none";

  aboutHolder.style.display = "block";
  contactHolder.style.display = "none";
  workHolder.style.display = "none";
});

closeContact.addEventListener("click", function () {
  contactHolder.style.height = "0vh";
  contactHolder.style.display = "none";
});

const pHeading = document.querySelectorAll(".p-heading");
console.log(pHeading);

pHeading.forEach((pHeading) =>
  pHeading.addEventListener("click", function () {
    scrollToTop();

    aboutHolder.style.display = "none";
    contactHolder.style.display = "none";
    workHolder.style.display = "none";
    projectPreview.style.display = "block";
  })
);

// Pages Navigations End

// Project showroom start
var activeProject = 1; //holds the value of project to show

const pnext = document.querySelector(".p-next");
const pprev = document.querySelector(".p-prev");
const pall = document.querySelector(".allprojects");

pall.addEventListener("click", function () {
  scrollToTop();
  projectPreview.style.display = "none";

  aboutHolder.style.display = "none";
  contactHolder.style.display = "none";
  workHolder.style.display = "block";
});

pnext.addEventListener("click", function () {
  scrollToTop();
  activeProject--;
});
pprev.addEventListener("click", function () {
  scrollToTop();
  activeProject++;
});

// Project showroom end
