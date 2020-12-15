// import cardModalHbs from '../../templates/cardModal.hbs';
import refs from './cardModalRefs.js';
import { throttle, delay, debounce } from 'lodash';

// function appendCardPreview() {
//     // refs.parent.insertAdjacentHTML('afterbegin', cardModalHbs());
//     refs.parent.classList.toggle('is-open');
// }
// appendCardPreview();

window.onload = function (e) {
    _.debounce(document.querySelector('body').addEventListener('click', openCardModal), 100);
}

function openCardModal(e) {
    if (e.target.classList[0] === 'card__img') {
        e.preventDefault();
        refs.mainParent.classList.toggle('is-open');
        document.querySelector('body').removeEventListener('click', openCardModal);
        return;
    }
}

    refs.close.addEventListener('click', closeCardModal);
    refs.closeSVG.addEventListener('click', closeCardModal);

function closeCardModal(e) {
    console.log(e.target);
    if (e.target.tagName === "SECTION")
        return
    e.preventDefault();
    refs.parent.classList.toggle('is-open');
    console.log('Заработало!')
        // toggleModal();
        // updateHistory(e);
        // updatedContent();
}


// refs.contactInfo.addEventListener('click', openInfoByClick);

// function openInfoByClick (e) {
//     refs.contactInfo.classList.toggle('.hide-button');
//     refs.contactInfo.classList.toggle('.goods-modal__button');
// }

// const closeCardModal = (e) => {
//     window.removeEventListener('keydown', onEscKeyPress);
//     if(e.target === e.currentTarget) {
//         refs.modal.classList.remove('is-open');
//     }
// }
//Закрытие модалки

// () => {

    // refs.close.addEventListener('click', toggleModal);
    // refs.parent.addEventListener('click', toggleModal);
    // refs.overlay.addEventListener('click', toggleModal);
    // refs.closeByClickOnOverlay.addEventListener('click', clearSrc);

    //close modal by ESC
    window.addEventListener("keydown", event => {
        if (event.keyCode === 27) {
            toggleModal();
            // clearSrc();
        }
    });

    function toggleModal() {
        refs.overlay.classList.toggle('is-open');
    }





