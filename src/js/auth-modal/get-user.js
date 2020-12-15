import refreshToken from './refresh-token';
// import favouritesCalls from '../../templates/favourites/favourites-and-myCalls.hbs';
// import { fillTheForm } from '../edit-modal-logic/edit-modal-open';

const access = sessionStorage.getItem('token');
function getUser(acces) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${acces}`,
    },
    redirect: 'follow',
  };
  fetch('https://callboard-backend.herokuapp.com/user', requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      //   const renderContainer = document.querySelector('.pagination-div');
      //   renderContainer.innerHTML = favouritesCalls(result);

      //   const myCallsContainer = document.querySelector('.myCalls__list');

      //   myCallsContainer.addEventListener('click', e => {
      //     fillTheForm(e.target.dataset);
      //   });

      const sid = sessionStorage.getItem('sid');

      if (result.message === 'Unauthorized') {
        console.log('ошибкa');
        refreshToken({ sid: `${sid}` }, access);
      }
    })
    .catch(error => console.log('error', error));
}
const myRoom = document.querySelector('.my-room');
myRoom.addEventListener('click', () => {
  getUser(access);
});
