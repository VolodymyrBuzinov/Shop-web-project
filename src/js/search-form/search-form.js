import foundProductsTls from '../../templates/product-cards.hbs';
import {fetchFoundProducts} from './apiService-search-form.js';

const refs = {
    openSearch: document.querySelector('.js-search-button'),
    backdrop: document.querySelector('[data-backdrop]'),
    form: document.querySelector('[data-form]'),
    btnCloseSearch: document.querySelector('.SEARCH-FORM__close-popap'),
    btnSearch: document.querySelector('[data-form-search]'),
    founding: document.querySelector('.found-products'),
    input: document.querySelector('.SEARCH-FORM__form-input'),
    alert: document.querySelector('.SEARCH-FORM__alert'),
  };

refs.openSearch.addEventListener('click', onOpenSearch);
refs.btnCloseSearch.addEventListener('click', onCloseSearch);
refs.backdrop.addEventListener('click', onCloseSearch);
refs.btnSearch.addEventListener('click', onSearch);


function onOpenSearch() {
    refs.backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscKeyPress);
}

function onCloseSearch(e) {
    window.removeEventListener('keydown', onEscKeyPress);
    if(e.target === e.currentTarget) {
        refs.backdrop.classList.add('is-hidden');
    }
}

function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = evt.code === ESC_KEY_CODE;
  
    if(isEscKey) {
      onCloseSearch();
    }
}

function onSearch(e) {
  e.preventDefault();
  
  const searchQuery = refs.input.value.trim();

  fetchFoundProducts(searchQuery)
    .then(product => {
      if(searchQuery === '' || product.length === 0) {
        refs.alert.classList.remove('is-hidden');
        refs.backdrop.classList.remove('is-hidden');
        clearMarkup();
        return;
      }
      
        renderFoundProductsList(product);
    })
    .catch(error => console.log(error))
    .finally(() => refs.form.reset());
}
      
    
       
function renderFoundProductsList(product) {
  const markup = foundProductsTls(product);
  refs.founding.innerHTML = markup;
  refs.backdrop.classList.add('is-hidden');
}

function clearMarkup() {
  refs.founding.innerHTML = '';
}