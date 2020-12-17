import refs from './cardModalRefs.js';

try {
    window.onload = function (e) {
    document.querySelector('body').addEventListener('click', openCardModal);
    }
} catch (error) {
    console.log("Проблема з додаванням слухача на <body>: ", error);
}

function openCardModal(e) {
    if (e.target.classList[0] === 'card__img' || 'card__text') {
        e.target.closest('.card__item').attributes,
            e.target.closest('.card__item').getAttribute('data-description')
            e.target.closest('.card__item').getAttribute('data-category')
            e.target.closest('.card__item').getAttribute('data-category')
            e.target.closest('.card__item').getAttribute('data-userid')
            e.target.closest('.card__item').getAttribute('data-card-id')
            e.target.closest('.card__item').getAttribute('data-phone')
    }
         try {
            refs.title.textContent = e.target.closest('.card__item').getAttribute('data-title');
            refs.phone.textContent = e.target.closest('.card__item').getAttribute('data-phone');
            refs.infoButton.textContent = `- на OLX з 12 груд. 2020р.`; //${порахована дата від реєстрації}
            refs.description.textContent = e.target.closest('.card__item').getAttribute('data-description');
            refs.price.textContent = `${e.target.closest('.card__item').getAttribute('data-price')} грн`;
        } catch (error) {
            console.log("Проблема з вставкою",error)
        }
        
        e.preventDefault();

        refs.parent.classList.toggle('is-open');
        refs.body.removeEventListener('click', openCardModal);
        refs.bigImage.setAttribute('src', e.target.getAttribute('src'));
        

        try {
            refs.body.addEventListener('click', openCardModal);
        } catch (error) {
            console.log("Проблема з додаванням слухача на <body>: ", error);
        }
        refs.closeSVG.addEventListener('click', closeCardModal);
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
   
}
