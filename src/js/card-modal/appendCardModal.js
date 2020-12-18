import refs from './cardModalRefs.js';
import { throttle, delay, debounce } from 'lodash';

let priсe = 10;

try {
    window.onload = function (e) {
        _.debounce(document.querySelector('body').addEventListener('click', openCardModal), 100);
    }
} catch (error) {
    // console.log("Проблема з додаванням слухача на <body>: ", error);
}

function openCardModal(e) {
    if (e.target.classList[0] === 'card__img' || 'card__text') {

        //Не видаляти - слухачі подій працюють некоректно.
        console.log(
            "dom-вузол, на якому спрацював event listener: ",
            e.target,
            "Дата-атрибути найближчого предка з класом card__img: ",
            e.target.closest('.card__item').attributes,
            e.target.closest('.card__item').getAttribute('data-description'),
            e.target.closest('.card__item').getAttribute('data-category'),
            e.target.closest('.card__item').getAttribute('data-category'),
            e.target.closest('.card__item').getAttribute('data-userid'),
            e.target.closest('.card__item').getAttribute('data-card-id'),
            e.target.closest('.card__item').getAttribute('data-phone'));
        
        try {
            refs.title.textContent = e.target.closest('.card__item').getAttribute('data-title');
            refs.phone.textContent = e.target.closest('.card__item').getAttribute('data-phone');
            refs.infoButton.textContent = `- на OLX з 12 груд. 2020р.`; //${порахована дата від реєстрації}
            refs.description.textContent = e.target.closest('.card__item').getAttribute('data-description');

            if (e.target.closest('.card__item').getAttribute('data-price') !== null) {
                refs.price.textContent = `${e.target.closest('.card__item').getAttribute('data-price')} грн`;
            } else {
                refs.price.textContent = `${price} грн`;
                priсe = 10;
            }

        } catch (error) {
            // console.log("Проблема з вставкою",error)
        }
        
        e.preventDefault();
        refs.parent.classList.toggle('is-open');
        refs.body.removeEventListener('click', openCardModal);
        refs.bigImage.setAttribute('src', e.target.closest('.card__item').getAttribute('data-images'));
        
        document.querySelector('.card-modal__image-tumbnail').setAttribute('src', e.target.closest('.card__item').getAttribute('data-images'));
        
        const checkImgSrc = () => {
            refs.bigImage.onerror = function () {
                refs.bigImage.setAttribute('alt', 'Проблема із зображенням: невірний формат або недійсне посилання.');
            }
        };

        checkImgSrc();
        

        try {
            _.debounce(refs.body.addEventListener('click', openCardModal), 100);
        } catch (error) {
            // console.log("Проблема з додаванням слухача на <body>: ", error);
        }
        refs.closeSVG.addEventListener('click', closeCardModal);
    }
}

document.onkeydown = (e) => {
    if (e.keyCode === 27) {
        refs.parent.classList.remove('is-open');
    }
}

function closeCardModal(e) { 
    // e.stopPropagation();
    e.preventDefault();
    refs.parent.classList.toggle('is-open');
    // console.log("Спрацював event listener на кнопці закривання модалки карточки", e.target);
}
