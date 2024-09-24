const img_banner = document.querySelector('#imagem-banner');
const container_banner = document.querySelector('.banner');
const previous_carousel = document.querySelector('#previous');
const next_carousel = document.querySelector('#next');

let index = 1;
let firstSlide;

function changeImage() {
    img_banner.setAttribute('src', `imgs/BANNER${index}.png`);
    nextSlide();
}

function nextSlide() {
    if (index < 3) {
        index++;
    } else {
        index = 1;
    }
    img_banner.setAttribute('src', `imgs/BANNER${index}.png`);
}

function previousSlide() {
    if (index > 1) {
        index--;
    } else {
        index = 3;
    }
    img_banner.setAttribute('src', `imgs/BANNER${index}.png`);
}

let banner = setInterval(changeImage, 5000);
container_banner.addEventListener('mouseover', () => {
    clearInterval(banner);
});

container_banner.addEventListener('mouseout', () => {
    clearInterval(banner);
    banner = setInterval(changeImage, 5000);
});

next_carousel.addEventListener('click', nextSlide);
previous_carousel.addEventListener('click', previousSlide);
