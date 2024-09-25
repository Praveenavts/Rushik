// JavaScript for Carousel
let currentIndex = 0;
const itemsToShow = 2; // Number of images to show at a time
const totalItems = document.querySelectorAll('.carousel-item').length;
const carousel = document.getElementById('carousel');
const itemWidth = 600; // Width of each item (in px)

// Function to move the carousel
function updateCarousel() {
    const offset = -(currentIndex * itemWidth);
    carousel.style.transform = `translateX(${offset}px)`;
}

// Next button click event
document.getElementById('next').addEventListener('click', () => {
    if (currentIndex + itemsToShow < totalItems) {
        currentIndex++;
        updateCarousel();
    }
});

// Previous button click event
document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// interval
setInterval(()=>{
    if(currentIndex==totalItems-2){
        currentIndex=0;
    }
    else{
        currentIndex++;
    }
    updateCarousel();
},3000);
