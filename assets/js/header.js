// header.js

document.addEventListener("DOMContentLoaded", function () {
    // This function is called when the DOM is fully loaded
  
    // Sidebar menu functionality
    const sidebar = document.querySelector(".sidebar");
    const sidebarMenu = document.querySelector(".sidebar-menu");
  
    sidebar.addEventListener("click", function () {
      // This event listener is called when the sidebar button is clicked
  
      // Toggle the display of the sidebar menu
      sidebarMenu.style.display = sidebarMenu.style.display === "block" ? "none" : "block";
    });
  });
  