// SCRIPT SLIDER

var slideIndex = 1;

let slides = ''
let m = 0;

function plusSlides(id, n) {
    var slides = document.querySelectorAll(`#${id} .mySlides`);
    var dot = document.querySelectorAll(`#${id} .dot`);
    if (m + n == slides.length) {
        n = 0 - m
    }
    if (m + n == -1) {
        n = slides.length - 1
    }
    slides[m + n].style.display = "block";
    slides[m].style.display = "none";
    dot[m + n].classList.add("active");
    dot[m].classList.remove("active");
    m = m + n
}

function currentSlide(id, n) {
    var dot = document.querySelectorAll(`#${id} .dot`);
    var slides = document.querySelectorAll(`#${id} .mySlides`);
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove("active");
    }
    for (let i = 0; i < slides.length; i++) {
        console.log(slides[i]);
        slides[i].style.display = "none";
    }
    dot[n].classList.add("active");
    slides[n].style.display = "block";
}


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
        document.getElementById('img').classList.toggle("zoom")
    }
    else if (Array.prototype.slice.call(document.querySelectorAll('video')).includes(document.getElementById(id))) {
        modalVideo.src = document.getElementById(id).src
        document.getElementById('img').style.display = "none"
        document.getElementById('video').style.display = "block"
        document.getElementById('video').classList.toggle("zoom")
    }
    captionText.innerHTML = document.getElementById(id).title;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}