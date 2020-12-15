// import cardModalHbs from '../../templates/cardModal.hbs';
import refs from './cardModalRefs.js';
import { throttle, delay, debounce } from 'lodash';

// function appendCardPreview() {
//     // refs.parent.insertAdjacentHTML('afterbegin', cardModalHbs());
//     refs.parent.classList.toggle('is-open');
// }
// appendCardPreview();

// var mutationObserver = new MutationObserver(function(mutations) {
//     mutations.forEach(function (mutation) {
//         if (e.target.tagName === "IMG") { //кликнул на карточку - открыть модалку
//             console.log(body);
//             refs.cardOnClick.addEventListener('click', () => {return console.log("Слухача додано")});
//         }
//   });
// });

// mutationObserver.observe(document.querySelector('.section-pagination'), {
//   attributes: true,
//   characterData: true,
//   childList: true,
//   subtree: true,
//   attributeOldValue: true,
//   characterDataOldValue: true
// });

window.onload = function () {
    _.debounce(document.querySelector('body').addEventListener('click', openCardModal), 100);
    // alert('Страница загружена');
}

function openCardModal(e) {
    console.log(e.target);
    // if (e.target.tagName === "LI") { //кликнул на карточку - открыть модалку
    //     return
            e.preventDefault();
    refs.mainParent.classList.toggle('is-open');
    document.querySelector('body').removeEventListener('click', openCardModal)
    return refs.close.addEventListener('click', closeCardModal);
    // refs.closeSVG.addEventListener('click', closeCardModal);
    // }
}

function closeCardModal(e) {
    console.log(e.target);
    if (e.target.tagName === "SECTION")
        return
    e.preventDefault();
    refs.parent.classList.toggle('is-open');
    // console.log('Заработало!')
        // toggleModal();
        // updateHistory(e);
        // updatedContent();
}






// try{
//     refs.cardOnClick.addEventListener('click', openCardModal);
// } catch (err) {
//     console.log(err);
// }




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

    // export default function toggleModal() {
    //     refs.overlay.classList.toggle('is-open');
    // }
// };



// refs.mainParent.addEventListener('click', console.log('test'));


// refs.mainParent.onClick = function() {

//     console.log('test');

// //     document.querySelector('.js-card-lightbox').classList.toggle('is-open');
// //     // e.preventDefault();

// //     // console.log(cardOnClick);refs.

// //     let target = e.target;
// //     if (target.tagName != '.card__item') return;
    
// //     document.querySelector('.js-card-lightbox').classList.toggle('is-open');

// //     let cardOnClick = e.target.closest('.card__item'); // (1)

// //     if (!'.card__item') return; // (2)

// //     if (!refs.mainParent.contains('.card__item')) { return } else { console.log('target');}; // (3)

// // //   highlight(td); // (4)

// //     // const getCardHrefAttribute = e.target.getAttribute('href');
// //     // if ('.card__item') {
// //     //     document.querySelector('.js-card-lightbox').classList.toggle('is-open');
// //     // }

// //     // let getOriginalImage = images.find(images => images.description === getAltAttribute).original;
// //     console.log("Єто",'.card__item');
//     return;
// }


