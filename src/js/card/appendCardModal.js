"use strict"

import cardModalHbs from '../../templates/cardModal.hbs';

const refs = {
    mainParent: document.querySelector('body'),
    parent: document.querySelector('.card-modal'),
    cardOnClick: document.querySelector('.card__item'),
    contactInfo: document.querySelector('goods-modal__button'),
    contactInfoWrapper: document.querySelector('.goods-modal__info'),
};



function cardPreview() {
    refs.parent.insertAdjacentHTML('afterbegin', cardModalHbs());
    document.querySelector('.js-card-lightbox').classList.toggle('is-open');
}
cardPreview();

refs.contactInfo.addEventListener('click', openInfoByClick)

function openInfoByClick (e) {
    refs.contactInfo.classList.toggle('.hide-button');
    refs.contactInfo.classList.toggle('.goods-modal__button');
}




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


