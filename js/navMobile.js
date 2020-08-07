function openMobileMenu() {
  var m = document.getElementsByClassName('menuClosed');
  if (m.length > 0) {
    m[0].classList.add("menuOpened");
    m[0].classList.remove("menuClosed");
  }
}

function closeMobileMenu() {
  var m = document.getElementsByClassName('menuOpened');
  if (m.length > 0) {
    m[0].classList.add("menuClosed");
    m[0].classList.remove("menuOpened");
  }
}
