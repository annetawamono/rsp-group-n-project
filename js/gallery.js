"use strict";
window.onload = function () {
  document.getElementById('menu').addEventListener("click", (e) => {
    e.preventDefault();
    openMobileMenu();
  });

  document.getElementById('close').addEventListener("click", (e) => {
    e.preventDefault();
    closeMobileMenu();
  });
}
