const carouselContainer = document.querySelector('.main__alerts');
const cards = document.querySelectorAll('.alert');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth; // Obtém a nova largura do card
  carouselContainer.style.transform = `translateX(${-index * cardWidth}px)`;

  // Esconde ou exibe as setas conforme o índice
  prevBtn.style.display = index === 0 ? 'none' : 'block';
  nextBtn.style.display = index === cards.length - 1 ? 'none' : 'block';
}

nextBtn.addEventListener('click', () => {
  if (index < cards.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Suporte para Swipe (Arrastar no celular)
let startX = 0;
carouselContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && index < cards.length - 1) {
    index++;
  } else if (endX - startX > 50 && index > 0) {
    index--;
  }
  updateCarousel();
});
// Atualiza o carrossel quando a tela é redimensionada
window.addEventListener('resize', updateCarousel);

// Garante que o carrossel fique alinhado no início
updateCarousel();
