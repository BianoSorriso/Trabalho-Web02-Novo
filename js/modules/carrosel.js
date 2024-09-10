const img_banner = document.querySelector('#imagem-banner');
const container_banner = document.querySelector('.banner');
const previus_carrosel = document.querySelector('#previous');
const next_carrosel = document.querySelector('#next');
const video = document.getElementById('video');

let indice = 1;
let primeiroSlide;
function sumirVideo(indi) {
  if (indi > 1) {
    video.style.display = 'none';
  } else {
    video.style.display = 'block';
  }
}

function mudarImagem() {
  sumirVideo(indice);

  img_banner.setAttribute('src', `./imgs/img${indice}.png`);

  proximoSlide();
}

function proximoSlide() {
  if (indice < 5) {
    indice++;
  } else {
    indice = 1;
  }

  sumirVideo(indice);
  img_banner.setAttribute('src', `./imgs/img${indice}.png`);
}

function slideAnterior() {
  if (indice > 1) {
    indice--;
  } else {
    indice = 5;
  }
  sumirVideo(indice);
  img_banner.setAttribute('src', `./imgs/img${indice}.png`);
}

let banner = setInterval(mudarImagem, 5000);
container_banner.addEventListener('mouseover', (event) => {
  clearInterval(banner);
});

container_banner.addEventListener('mouseout', (event) => {
  clearInterval(banner);
  banner = setInterval(mudarImagem, 5000);
});

next_carrosel.addEventListener('click', proximoSlide);
previus_carrosel.addEventListener('click', slideAnterior);
