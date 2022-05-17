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
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Pages Navigations End

// Project showroom start
var activeProject = 1; //holds the value of project to show
// Project structure
let mpMainImg = document.querySelector(".pMainImg");

let mpTitle = document.querySelector(".p-name");
let mpYear = document.querySelector(".year");
let mpDesc = document.querySelector(".p-desc");
let mpLiveLink = document.querySelector(".liveLink");
let mpText = document.querySelector(".text");
let imgShow1 = document.querySelector(".p1img");
let imgShow2 = document.querySelector(".p2img");

// end of struct
const projects = [
  {
    pImg: "link",
    pTitle: "Zuri Landing Page",
    pYear: "2022",
    pDesc: "Some Text",
    pLiveLink: "link",
    pMoreText: "Some more text",
    pImg1: "link",
    pImg2: "link",
  },
  {
    pImg: "link",
    pTitle: "Zuri Landing Page",
    pYear: "2022",
    pDesc: "Some Text",
    pLiveLink: "link",
    pMoreText: "Some more text",
    pImg1: "link",
    pImg2: "link",
  },
];

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
//  {
//       pImg: "link",
//       pTitle: "Zuri Landing Page",
//       pYear: "2022",
//       pDesc: "Some Text",
//       pLiveLink: "link",
//       pMoreText: "Some more text",
//     pImg1:"link",
//     pImg2:"link"
// }

pnext.addEventListener("click", function () {
  scrollToTop();
  activeProject--;
});
pprev.addEventListener("click", function () {
  scrollToTop();
  activeProject++;
});

// Project showroom end
