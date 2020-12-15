// // сюди в html потрібно вставити кнопку
// const jsBtn = document.querySelector(".js-button");
// // кнопка з інформ. про продавця
// const infoSellerBtn = document.querySelector(".goods-modal__button.js-btn");
// // основна кнопка
// const mainBtn = document.querySelector('.goods-modal__button');
// // рендеримо іншу кнопку
// // передати сюди апі по якому буде рендиритися
// // textChangeBtn(дані для рендеру)

// console.log(textChangeBtn(user));
// const btnMarkup = textChangeBtn(user);

// mainBtn.addEventListener('click', onClickBtn);

// function textChangeBtn(data) {
//   console.log(data);
//    return data
//     .map(({registrationDate, phone}) => {
//       return ` <button class="goods-modal__button js-btn">
//      Ольга <span class="goods-modal__text">- на OLX c {{registrationDate}}</span>
//     <span class="phone-title"> {{phone}} </span>
//       </button>`;
//     })
//     .join("");
// }
// function onClickBtn() {
//   mainBtn.classList.add('is-hidden');
//   // додаємо кнопку у розмітку html
//   jsBtn.insertAdjacentHTML('beforebegin', btnMarkup);
// }