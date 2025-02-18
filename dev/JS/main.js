const menu = document.getElementById("menu");
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const header = document.querySelector('.header__content');
const content = document.querySelector('.main');
// Abrir menu
openBtn.addEventListener("click", () => {
  menu.classList.add("menu-open");
  openBtn.classList.toggle("hidden");

  header.classList.toggle("blur");
  content.classList.toggle("blur");
});

// Fechar menu
closeBtn.addEventListener("click", () => {
  menu.classList.remove("menu-open");
  openBtn.classList.toggle("hidden");

  header.classList.toggle("blur");
  content.classList.toggle("blur");
});

// Fechar menu ao clicar fora dele
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && event.target !== openBtn && menu.classList.contains("menu-open")) {
    setTimeout(() => {
      menu.classList.remove("menu-open");
      openBtn.classList.toggle("hidden");

      header.classList.toggle("blur");
      content.classList.toggle("blur");
    }, 100); // Pequeno delay para evitar conflito
  }
});

