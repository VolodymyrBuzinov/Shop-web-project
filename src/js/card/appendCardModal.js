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
            document.querySelector('.phone-title').textContent = e.target.closest('.card__item').getAttribute('data-phone');
            document.querySelector('.goods-modal__discription-text').textContent = e.target.closest('.card__item').getAttribute('data-description');
        } catch (error) {
            console.log("Проблема з вставкою",error)
        }
        
        e.preventDefault();
        refs.mainParent.classList.toggle('is-open');
        document.querySelector('body').removeEventListener('click', openCardModal);
        // cardImageFromItemInPagination = e.target.getAttribute('src');
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

// document.querySelector('body').

    // refs.close.addEventListener('click', closeCardModal);
    // refs.closeSVG.addEventListener('click', closeCardModal);

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


// refs.contactInfo.addEventListener('click', openInfoByClick);

// function openInfoByClick (e) {
//     refs.contactInfo.classList.toggle('.hide-button');
//     refs.contactInfo.classList.toggle('.goods-modal__button');
// }

// const closeCardModal = (e) => {
//     window.removeEventListener('keydown', onEscKeyPress);
//     if(e.target === e.currentTarget) {
//         refs.parent.classList.remove('is-open');
//     }
// }
//Закрытие модалки

    // refs.close.addEventListener('click', toggleModal);
    // refs.parent.addEventListener('click', toggleModal);
    // refs.overlay.addEventListener('click', toggleModal);
    // refs.closeByClickOnOverlay.addEventListener('click', clearSrc);

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
    