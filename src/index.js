 
{require('./js/card/fetch-card.js')};
import "./sass/main.scss";
import cardTpl from './templates/card.hbs';
import menuJSON from './js/card/menu';

const cardRef = document.querySelector('.card__list');

const menuCardList = menuJSON.reduce((acc, menuJSON) => {
    return acc + cardTpl(menuJSON)
}, '');

cardRef.insertAdjacentHTML("beforeend", menuCardList);
console.log(menuCardList);

