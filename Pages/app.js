// Je récupère tout les classes .thisSlide (Vous pouvez appeler la classe comme vous voulez)
const slideList = document.querySelectorAll(".thisSlide");
// Je déclare toutes ces classes dans un Tableau
const slideArray = [...slideList];

// Pour chaque element du Tableau je déclare que slide = element, ainsi j'évite de déclarer 50 slides
slideArray.forEach(element => {
    let slide = element;
    // Si le slide existe (toujours vrai) alors ce slide prendra 1 en index et mettra en marche la fonction showSlides
    if (this.slide) {
        slide.currentSlideIndex = 1;
        showSlides(slide, slide.currentSlideIndex);
        return
    } else {
        console.log('Une erreur s\'est produite');
    }
});

function plusSlides(slide, n) {
    showSlides(slide, slide.currentSlideIndex += n);
}

function currentSlide(slide, n) {
    showSlides(slide, slide.currentSlideIndex = n);
}

function showSlides(slide, n) {
    var i;
    var slides = slide.getElementsByClassName("mySlides");
    var dots = slide.getElementsByClassName("dot");
    if (n > slides.length) { slide.currentSlideIndex = 1 }
    if (n < 1) { slide.currentSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide.currentSlideIndex - 1].style.display = "block";
    dots[slide.currentSlideIndex - 1].className += " active";
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

// Open Modal
function clickNext(id) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("img");
    let modalVideo = document.getElementById("video");
    let captionText = document.getElementById("caption");

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

// Close Modal
function closeModal() {
    let modal = document.getElementById("myModal");

    modal.style.display = "none";
    modal.classList.add("dnone")
    let method = document.querySelector("#myModal").classList == "dnone" ? "play" : "pause";
    document.querySelector("#video")[method]();
}