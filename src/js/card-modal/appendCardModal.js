import refs from './cardModalRefs.js';
import { throttle, delay, debounce } from 'lodash';
import { onFavourite } from '../card/card';

let priсe = 10;

try {
  window.addEventListener('load', () => {
    const lists = document.querySelectorAll('ul.js-card-open');
    lists.forEach(list => {
      list.addEventListener('click', openCardModal);
      list.addEventListener('click', onFavourite);
    });
  });
} catch (error) {
  // console.log("Проблема з додаванням слухача на <body>: ", error);
}

function openCardModal(e) {
  console.log(e.target);
  if (e.target.tagName !== 'LI') {
    return;
  }
  const {
    category,
    description,
    title,
    price,
    phone,
    id,
    images,
  } = e.target.dataset;
  // console.log(category, description, title, price, phone, id, images);
  try {
    refs.title.textContent = title;
    refs.phone.textContent = phone;
    refs.infoButton.textContent = `- на OLX з 12 груд. 2020р.`; //${порахована дата від реєстрації}
    refs.description.textContent = description;
    refs.price.textContent = `${price} грн`;
  } catch (error) {
    // console.log("Проблема з вставкою",error)
  }

  e.preventDefault();
  refs.parent.classList.toggle('is-open');
  refs.bigImage.src = images.split(',')[0];

  document.querySelector('.card-modal__image-tumbnail').src = images;

  const checkImgSrc = () => {
    refs.bigImage.onerror = function () {
      refs.bigImage.setAttribute(
        'alt',
        'Проблема із зображенням: невірний формат або недійсне посилання.',
      );
    };
  };

  checkImgSrc();
  document.querySelector('body').classList.add('hidden');
  refs.overlay.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      closeCardModal(e);
    }
  });
  refs.closeSVG.addEventListener('click', closeCardModal);
}

document.onkeydown = e => {
  if (e.keyCode === 27) {
    refs.parent.classList.remove('is-open');
  }
};

function closeCardModal(e) {
  e.preventDefault();
  document.querySelector('body').classList.remove('hidden');
  refs.parent.classList.remove('is-open');
}

// function openCardModal(e) {
//     console.log(e.target.dataset);
//     if (e.target.classList[0] === 'card__img' || 'card__text') {
//       e.target;
//       e.target.closest('.card__item').attributes;
//       e.target.closest('.card__item').getAttribute('data-description');
//       e.target.closest('.card__item').getAttribute('data-category');
//       e.target.closest('.card__item').getAttribute('data-category');
//       e.target.closest('.card__item').getAttribute('data-userid');
//       e.target.closest('.card__item').getAttribute('data-card-id');
//       e.target.closest('.card__item').getAttribute('data-phone');

//       try {
//         refs.title.textContent = e.target
//           .closest('.card__item')
//           .getAttribute('data-title');
//         refs.phone.textContent = e.target
//           .closest('.card__item')
//           .getAttribute('data-phone');
//         refs.infoButton.textContent = `- на OLX з 12 груд. 2020р.`; //${порахована дата від реєстрації}
//         refs.description.textContent = e.target
//           .closest('.card__item')
//           .getAttribute('data-description');

//         if (e.target.closest('.card__item').getAttribute('data-price') !== null) {
//           refs.price.textContent = `${e.target
//             .closest('.card__item')
//             .getAttribute('data-price')} грн`;
//         } else {
//           refs.price.textContent = `${price} грн`;
//           priсe = 10;
//         }
//       } catch (error) {
//         // console.log("Проблема з вставкою",error)
//       }

//       e.preventDefault();
//       refs.parent.classList.toggle('is-open');
//       refs.body.removeEventListener('click', openCardModal);
//       refs.bigImage.setAttribute(
//         'src',
//         e.target.closest('.card__item').getAttribute('data-images'),
//       );

//       document
//         .querySelector('.card-modal__image-tumbnail')
//         .setAttribute(
//           'src',
//           e.target.closest('.card__item').getAttribute('data-images'),
//         );

//       const checkImgSrc = () => {
//         refs.bigImage.onerror = function () {
//           refs.bigImage.setAttribute(
//             'alt',
//             'Проблема із зображенням: невірний формат або недійсне посилання.',
//           );
//         };
//       };

//       checkImgSrc();

//       try {
//         _.debounce(refs.body.addEventListener('click', openCardModal), 100);
//       } catch (error) {
//         // console.log("Проблема з додаванням слухача на <body>: ", error);
//       }
//       refs.closeSVG.addEventListener('click', closeCardModal);
//     }
//   }
