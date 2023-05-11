import initHeader from "./header.js";
import initHero from "./hero.js";
import initFooter from "./footer.js";
import initTheme from "./theme.js";
import initIntro from "./intro.js";
import initAbout from "./about.js";
import initTestimonials from "./testimonials.js";
import initPortfolio from "./portfolio.js";
import initContact from "./contact.js";
import initTimeline from "./timeline.js";
import initCaseStudies from "./case-studies.js";
import initToolsPlatforms from "./tools-platforms.js";
import initTutorialsResources from "./tutorials-resources.js";
import initImageScroller from "./imageScroller.js";
import initInspiringExamples from "./inspiring-examples.js";

// Load all modules
document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHero();
  initFooter();
  initTheme();
  initIntro();
  initAbout();
  initTestimonials();
  initPortfolio();
  initContact();
  initTimeline();
  initCaseStudies();
  initToolsPlatforms();
  initTutorialsResources();
  initImageScroller();
  initInspiringExamples();
});