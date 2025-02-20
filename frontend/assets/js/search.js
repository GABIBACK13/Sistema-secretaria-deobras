import '../css/chamadas-search/search.css';

const chamadaList = document.querySelector('#chamadas-list');
const homeList = document.querySelector('#home-list');
const dataViewList = document.querySelector('#data-view-list');
const searchList = document.querySelector('#search-list');

document.addEventListener('DOMContentLoaded', () => {
  chamadaList.classList.remove('selected');
  homeList.classList.remove('selected');
  dataViewList.classList.remove('selected');
  searchList.classList.add('selected');
});