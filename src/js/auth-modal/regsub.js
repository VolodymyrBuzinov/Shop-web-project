import refs from './refs';
import login from './login';
import register from './register';
// import refreshToken from './refresh-token';

const handleRegisterSubmit = event => {
  event.preventDefault();

  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  })
  
  if (event.target.classList.value === "registration-button") {
    register(body);

  } else
    if (event.target.classList.value === "registration-button-entry") {
      login(body);
  
    }
  
}

refs.registerFormRef.addEventListener('click', handleRegisterSubmit)