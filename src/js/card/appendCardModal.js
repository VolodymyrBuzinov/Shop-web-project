import refs from './cardModalRefs.js';
import { throttle, delay, debounce } from 'lodash';

try {
    window.onload = function (e) {
        _.debounce(document.querySelector('body').addEventListener('click', openCardModal), 100);
    }
} catch (error) {
    console.log("Проблема з додаванням слухача на <body>: ", error);
}

function openCardModal(e) {
    if (e.target.classList[0] === 'card__img' || 'card__text') {
        console.log(
            "dom-вузол, на якому спрацював event listener: ",
            e.target,
            "Дата-атрибути найближчого предка з класом card__img: ",
            e.target.closest('.card__item').attributes,
            e.target.closest('.card__item').getAttribute('data-description'),
            e.target.closest('.card__item').getAttribute('data-category'),
            e.target.closest('.card__item').getAttribute('data-category'),
            e.target.closest('.card__item').getAttribute('data-userid'),
        e.target.closest('.card__item').getAttribute('data-phone'));
        try {
            
            document.querySelector('.goods-modal__title').textContent = e.target.closest('.card__item').getAttribute('data-title');
            document.querySelector('.phone-title').textContent = e.target.closest('.card__item').getAttribute('data-phone');
            document.querySelector('.goods-modal__discription-text').textContent = e.target.closest('.card__item').getAttribute('data-description');
            document.querySelector('.goods-modal__price').textContent = `${e.target.closest('.card__item').getAttribute('data-price')} грн`;
            // document.querySelector('.goods-modal__price').textContent = "textContent працює";
        } catch (error) {
            console.log("Проблема з вставкою",error)
        }
        
        e.preventDefault();
        refs.mainParent.classList.toggle('is-open');
        document.querySelector('body').removeEventListener('click', openCardModal);
        document.querySelector('.card-modal__image-big').setAttribute('src', e.target.getAttribute('src'));
       try {
            // window.onload = function (e) {
                _.debounce(document.querySelector('body').addEventListener('click', openCardModal), 100);
            // }
        } catch (error) {
            console.log("Проблема з додаванням слухача на <body>: ", error);
        }
        refs.closeSVG.addEventListener('click', closeCardModal);
    }
}

function closeCardModal(e) { 
    // if (e.target.tagName === "SECTION") {
    e.preventDefault();
    refs.mainParent.classList.toggle('is-open');
    console.log('Заработало!')
    //  toggleModal();
     console.log("Спрацював event listener на кнопці закривання модалки карточки", e.target);
    //  refs.closeSVG.addEventListener('click', closeCardModal);
    // }
}

    //close modal by ESC
    window.addEventListener("keypress", e => {
        if (e.keyCode === 27) {
            toggleModal();
            // document.getElementById('card-modal__id').hidden= 1;
            // clearSrc();
        }
    });

    function toggleModal() {
        refs.mainParent.classList.toggle('is-open');
    }
    