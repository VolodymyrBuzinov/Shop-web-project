import { fn } from 'jquery';
import foundProductsTls from '../../templates/product-cards.hbs';
import {fetchFoundProducts} from './apiService-search-form.js';

const refs = {
    openSearch: document.querySelector('.js-search-button'),
    backdrop: document.querySelector('[data-backdrop]'),
    searchForm: document.querySelector('.SEARCH-FORM__form'),
    btnCloseSearch: document.querySelector('.SEARCH-FORM__close-popap'),
    btnSearch: document.querySelector('[data-form-search]'),
    input: document.querySelector('.SEARCH-FORM__form-input'),
    alert: document.querySelector('.SEARCH-FORM__alert'),
    cardDiv: document.querySelector('.pagination-div'),
    cardSection: document.querySelector('.card')
  };

refs.openSearch.addEventListener('click', onOpenSearch);
refs.btnCloseSearch.addEventListener('click', onCloseSearch);
refs.backdrop.addEventListener('click', (e) => {
  if(e.target === e.currentTarget) {
    onCloseSearch();
  }
});
refs.btnSearch.addEventListener('click', onSearch);
refs.input.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    onSearch();
  }
});

window.addEventListener('keyup',(e) => {
  if(e.code === 'Escape') {
    onCloseSearch();
    return;
  }
});

function onOpenSearch() {
    refs.backdrop.classList.remove('is-hidden');
    resetInput();
}

function onCloseSearch(e) {
  refs.backdrop.classList.add('is-hidden');
}

function onSearch(e) {
  // e.preventDefault();
  const searchQuery = refs.input.value.trim();

  fetchFoundProducts(searchQuery)
    .then(product => {
      if(searchQuery === '' || product.length === 0) {
        refs.alert.classList.remove('is-hidden');
        refs.backdrop.classList.remove('is-hidden');
        clearMarkup();
        return;
      }
      // e.preventDefault();
        
        renderFoundProductsList(product);
        updateState(`/search?value=${searchQuery}`);
        
    })
    .catch(error => console.log(error))
    // .finally(() => refs.input.reset());
} 

function renderFoundProductsList(product) {
  const markup = foundProductsTls(product);
  refs.cardDiv.innerHTML = markup;
  refs.backdrop.classList.add('is-hidden');
  refs.cardDiv.classList.add('style');
  refs.cardSection.classList.add('is_hiden');
}

function clearMarkup() {
  refs.cardDiv.innerHTML = '';
}

function resetInput() {
    document.getElementById('myInput').value=''; 
}

function updateState(payload) {
  history.pushState(payload, null, payload) 
} 
