import toggleRegisterModal from './open-close-modal';
import pushError from './error-message';
import favouritesCalls from '../../templates/favourites/favourites-and-myCalls.hbs';
import { fillTheForm } from '../edit-modal-logic/edit-modal-open';
import slider from '../category/slider';
import links from '../header.js/links'

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
        renderContainer.innerHTML = favouritesCalls(user);
        if (sessionStorage['token']) {
          links.myCabinetButton.style.display = 'flex';
          links.regButton.style.display = 'none';
          links.logoutButton.style.display = 'flex';
          links.addCalls.style.display = 'flex';          
        }
        const login = function (evt) {
          if (evt) {
            var myHeaders = new Headers();
            let token = sessionStorage.getItem('token');
            myHeaders.append("Authorization", `Bearer ${token}`);  
            var requestOptions = {
            method: 'POST',
            headers: myHeaders, 
                                 }
            fetch("https://callboard-backend.herokuapp.com/auth/logout", requestOptions)
             links.myCabinetButton.style.display = 'none';
             links.regButton.style.display = 'flex';
             links.logoutButton.style.display = 'none';
             links.addCalls.style.display = 'none';  
            sessionStorage.clear();            
          }
        }
        // const myCabinet = function (evt) {
        //   renderContainer.innerHTML = favouritesCalls(user);
        // }
        links.logoutButton.addEventListener('click', login)       
        // links.myCabinetButton.addEventListener('click', myCabinet)
        const myCallsContainer = document.querySelector('.myCalls__list');        
        myCallsContainer.addEventListener('click', e => {
          fillTheForm(e.target.dataset);
        });
      });
  } catch (error) {
    console.log('error', error);
  }
}
