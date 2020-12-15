export default function refreshToken(id, acce) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${acce}`,
    },
    body: JSON.stringify(id),
  };
  fetch('https://callboard-backend.herokuapp.com/auth/refresh', requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      sessionStorage.setItem('token', result.newAccessToken);
      sessionStorage.setItem('sid', result.newSid);
      sessionStorage.setItem('refresh', result.newRefreshToken);
    })
    .catch(error => console.log('error', error));
}
