//SET TO CURRENT YEAR
const yearEl = document.querySelector(".year");
const curYear = new Date().getFullYear();
yearEl.textContent = curYear;
////////////////////////////////////
//MOBILE NAVIGATION
const butnav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
butnav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
//////////////////////////////////////
//SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    console.log(href);
    //scrolling
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const selectEl = document.querySelector(href);
      selectEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    //close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
///////////////////////////////////////
//sticky navigation
const sectionheroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    //in viewport
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionheroEl);
