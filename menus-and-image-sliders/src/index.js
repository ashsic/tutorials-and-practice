// index.js

// function toggleDropdown() {
//     const dropdown = document.querySelector("#myDropdown");
//     dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
// }

// // Close the dropdown if the user clicks outside of it
// window.addEventListener('click', (event) => {
//     const dropdown = document.getElementById("myDropdown");
//     if (!event.target.matches('.dropbtn')) {
//         dropdown.style.display = 'none';
//     };
// });

// document.querySelector(".dropbtn").addEventListener('click', toggleDropdown);

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-image').length;

function updateCarousel(slideNum) {
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((image, index) => {
        if (index !== slideNum) {
            image.style.display = 'none';
        } else {
            image.style.display = 'block';
        }
    });
}

function changeSlide(event) {
    let direction = 0;
    if (event.target.id === 'next-button') {
        direction = 1;
    } else {
        direction = -1;
    }

    currentSlide += direction;
    console.log('test')

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateCarousel(currentSlide);
}

document.querySelector('#next-button').addEventListener('click', changeSlide);
document.querySelector('#prev-button').addEventListener('click', changeSlide);