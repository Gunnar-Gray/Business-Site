export default function initHeader() {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebarMenu = document.querySelector(".sidebar-menu");
  const sidebarClose = document.querySelector(".sidebar-close");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeToggleSidebar = document.querySelector(".theme-toggle-sidebar");
  const body = document.querySelector("body");
  
  sidebarToggle.addEventListener("click", () => {
    sidebarMenu.classList.toggle("open");
  });
  
  sidebarClose.addEventListener("click", () => {
    sidebarMenu.classList.remove("open");
  });
  
  themeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-theme");
    themeToggleSidebar.checked = !themeToggleSidebar.checked;
  });
  
  themeToggleSidebar.addEventListener("change", () => {
    body.classList.toggle("dark-theme");
    themeToggle.checked = !themeToggle.checked;
  });
}

