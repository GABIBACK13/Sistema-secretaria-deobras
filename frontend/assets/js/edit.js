import '../css/register/form.css';
import '../css/register/register.css';

const chamadaList = document.querySelector('#chamadas-list');
const homeList = document.querySelector('#home-list');
const dataViewList = document.querySelector('#data-view-list');
const searchList = document.querySelector('#search-list');

document.addEventListener('DOMContentLoaded', () => {
  dataViewList.classList.add('selected');
  
  homeList.classList.remove('selected');
  chamadaList.classList.remove('selected');
  searchList.classList.remove('selected');
});