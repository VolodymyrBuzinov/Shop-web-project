import toggleRegisterModal from './open-close-modal';
import pushError from './error-message';
import favouritesCalls from '../../templates/favourites/favourites-and-myCalls.hbs';
import { fillTheForm } from '../edit-modal-logic/edit-modal-open';
import slider from '../category/slider';

const renderContainer = document.querySelector('.pagination-div');

export default async function login(log) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(log),
  };

  try {
    await fetch(
      'https://callboard-backend.herokuapp.com/auth/login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Password is wrong') {
          pushError(result.message);
        } else if (
          result.message ===
          `User with ${
            JSON.parse(requestOptions.body).email
          } email doesn't exist`
        ) {
          pushError(result.message);
        } else if (result.message === '"email" is not allowed to be empty') {
          pushError(result.message);
        } else if (result.message === '"password" is not allowed to be empty') {
          pushError(result.message);
        } else {
          sessionStorage.setItem('token', result.accessToken);
          sessionStorage.setItem('sid', result.sid);
          sessionStorage.setItem('refresh', result.refreshToken);
          document.getElementById('form').reset();
          toggleRegisterModal();
          return result.user;
        }
      })
      .then(user => {
        console.log(user.id);

        renderContainer.innerHTML = favouritesCalls(user);
        const myCallsContainer = document.querySelector('.myCalls__list');
        // slider();

        myCallsContainer.addEventListener('click', e => {
          fillTheForm(e.target.dataset);
        });
      });
  } catch (error) {
    console.log('error', error);
  }
}
