import refreshToken from './refresh-token';

const sid = sessionStorage.getItem('sid');
const access = sessionStorage.getItem('token');

function getUser(acces) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${acces}`
        },
        redirect: 'follow',
    };

    fetch("https://callboard-backend.herokuapp.com/user", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if(result.message === 'Unauthorized'){
                console.log('ошибкa');
                refreshToken({sid: `${sid}`}, access);
            }
        })
        .catch(error => console.log('error', error));
}

const myRoom = document.querySelector('.my-room');

myRoom.addEventListener('click', ()=>{
    getUser(access)
});


