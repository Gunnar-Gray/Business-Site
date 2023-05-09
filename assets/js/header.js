export default function initHeader() {
  // Sidebar menu functionality
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebarMenu = document.querySelector(".sidebar-menu");

  sidebarToggle.addEventListener("click", function () {
    // This event listener is called when the sidebar button is clicked

    // Toggle the display of the sidebar menu
    if (sidebarMenu.style.left === "0px") {
      sidebarMenu.style.left = "-100%";
    } else {
      sidebarMenu.style.left = "0";
    }
  });

  // Theme toggle functionality
  const themeToggleButtons = document.querySelectorAll(".theme-toggle");

  themeToggleButtons.forEach((themeToggle) => {
    themeToggle.addEventListener("click", function () {
      // This event listener is called when the theme toggle button is clicked

      // Toggle the theme class on the body element
      const body = document.querySelector("body");

      if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
      } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
      }
    });
  });
}
