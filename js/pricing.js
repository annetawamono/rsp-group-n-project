"use strict";

window.onload = function () {

    document.getElementById("menu").onclick = function (e) {

        e.preventDefault();
        openMobileMenu();
    }

    document.getElementById("close").onclick = function (e) {

        e.preventDefault();
        closeMobileMenu();
    }
}