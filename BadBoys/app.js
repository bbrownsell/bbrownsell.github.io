//  Carousel & info
const carouselSlide = document.querySelector(".carousel-slide");
const carouselInfo = document.querySelector(".carousel-slide-info");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const carouselDiv = document.querySelectorAll(".carousel-slide-info div");

// Next/Prev Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter
let counter = 1;
let counter2 = 1;
const size = carouselImages[0].clientWidth;
const size2 = carouselDiv[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
carouselInfo.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

// Button listeners

nextBtn.addEventListener('click', function() {
    console.log(nextBtn);
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', function() {
    console.log(prevBtn);
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', function() {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Info carousel

nextBtn.addEventListener('click', function() {
    if (counter2 >= carouselDiv.length -1) return;
    carouselInfo.style.transition = "transform 0.4s ease-in-out";
    counter2++;
    carouselInfo.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

prevBtn.addEventListener('click', function() {
    if (counter2 <= 0) return;
    carouselInfo.style.transition = "transform 0.4s ease-in-out";
    counter2--;
    carouselInfo.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

carouselInfo.addEventListener('transitionend', function() {
    if (carouselDiv[counter2].id === "lastClone") {
        carouselInfo.style.transition = "none";
        counter2 = carouselDiv.length -2;
        carouselInfo.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }
    if (carouselDiv[counter2].id === "firstClone") {
        carouselInfo.style.transition = "none";
        counter2 = carouselDiv.length - counter2;
        carouselInfo.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }
});