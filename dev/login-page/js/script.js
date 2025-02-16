const entryButton = document.querySelector('.btn-login');

entryButton.addEventListener('click', () => {
  const loginForm = document.querySelector('.login-main__form');
  const buttonSection = document.querySelector('.login-main__button');
  const title = document.querySelector('.login-main__title');
  if (loginForm.classList.contains('hidden')) {
    loginForm.classList.toggle('hidden');
    buttonSection.classList.toggle('hidden');
    title.classList.toggle('hidden');
  }
});
