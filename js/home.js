"use strict";

window.onload = function(){

    document.getElementById("menu").onclick = function(e){

        e.preventDefault();
        openMobileMenu();
    }

    document.getElementById("close").onclick = function(e){

        e.preventDefault();
        closeMobileMenu();
    }

    var heroImage = document.querySelector(".hero-image");

    var section1Image = document.querySelector(".section1img");

    heroImage.addEventListener('mouseenter', function(){

        this.src = "media/home-hero-image-hover.png";
    });

    heroImage.addEventListener('mouseleave', function(){

        this.src = "media/home-hero-image.png";
    });

    section1Image.addEventListener('mouseenter', function(){

        this.src = "media/section-1-image-hover.png";
    });

    section1Image.addEventListener('mouseleave', function(){

        this.src = "media/section-1-image.png";
    });

}