// SCRIPT SLIDER
var slide = document.getElementById("slide");
slide.currentSlideIndex = 1;
showSlides(slide, slide.currentSlideIndex);

var slide1 = document.getElementById("slide1");
slide1.currentSlideIndex = 1;
showSlides(slide1, slide1.currentSlideIndex);

var slide2 = document.getElementById("slide2");
slide2.currentSlideIndex = 1;
showSlides(slide2, slide2.currentSlideIndex);

var slide3 = document.getElementById("slide3");
slide3.currentSlideIndex = 1;
showSlides(slide3, slide3.currentSlideIndex);

var slide4 = document.getElementById("slide4");
slide4.currentSlideIndex = 1;
showSlides(slide4, slide4.currentSlideIndex);

var slide5 = document.getElementById("slide5");
slide5.currentSlideIndex = 1;
showSlides(slide5, slide5.currentSlideIndex);

var slide6 = document.getElementById("slide6");
slide6.currentSlideIndex = 1;
showSlides(slide6, slide6.currentSlideIndex);

var slide7 = document.getElementById("slide7");
slide7.currentSlideIndex = 1;
showSlides(slide7, slide7.currentSlideIndex);

var slide8 = document.getElementById("slide8");
slide8.currentSlideIndex = 1;
showSlides(slide8, slide8.currentSlideIndex);

function plusSlides(id, n) {
    showSlides(id, id.currentSlideIndex += n);
}

function currentSlide(id, n) {
    showSlides(id, id.currentSlideIndex = n);
}

function showSlides(id, n) {

    var i;
    var slides = id.getElementsByClassName("mySlides");
    var dots = id.getElementsByClassName("dot");
    if (n > slides.length) { id.currentSlideIndex = 1 }
    if (n < 1) { id.currentSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[id.currentSlideIndex - 1].style.display = "block";
    dots[id.currentSlideIndex - 1].className += " active";
}

// var slideIndex = 1;

// let slides = ''
// let m = 0;

// function plusSlides(id, n) {
//     var slides = document.querySelectorAll(`#${id} .mySlides`);
//     var dot = document.querySelectorAll(`#${id} .dot`);
//     if (m + n == slides.length) {
//         n = 0 - m
//     }
//     if (m + n == -1) {
//         n = slides.length - 1
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         dot[i].classList.remove("active");
//     }
//     slides[m + n].style.display = "block";    
//     dot[m + n].classList.add("active");    
//     m = m + n
// }

// function currentSlide(id, n) {
//     var dot = document.querySelectorAll(`#${id} .dot`);
//     var slides = document.querySelectorAll(`#${id} .mySlides`);
//     for (let i = 0; i < dot.length; i++) {
//         dot[i].classList.remove("active");
//     }
//     for (let i = 0; i < slides.length; i++) {
//         console.log(slides[i]);
//         slides[i].style.display = "none";
//     }
//     dot[n].classList.add("active");
//     slides[n].style.display = "block";
// }


// SCRIPT LIGHTBOX

var modal = document.getElementById("myModal");

var img = document.getElementById("#myImg");
var modalImg = document.getElementById("img");

var video = document.getElementById("#myVid");
var modalVideo = document.getElementById("video");

var captionText = document.getElementById("caption");

function clickNext(id) {
    modal.style.display = "block";
    if (Array.prototype.slice.call(document.querySelectorAll('img')).includes(document.getElementById(id))) {
        modalImg.src = document.getElementById(id).src
        document.getElementById('video').style.display = "none"
        document.getElementById('img').style.display = "block"
    }
    else if (Array.prototype.slice.call(document.querySelectorAll('video')).includes(document.getElementById(id))) {
        modalVideo.src = document.getElementById(id).src
        document.getElementById('img').style.display = "none"
        document.getElementById('video').style.display = "block"
    }
    captionText.innerHTML = document.getElementById(id).title;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
    modal.classList.add("dnone")
    let method = document.querySelector("#myModal").classList == "dnone" ? "play" : "pause";
    document.querySelector("#video")[method]();
}