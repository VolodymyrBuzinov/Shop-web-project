export default function onPost(id) {
  const accessToken = sessionStorage.getItem('token');
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}`);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };
  fetch(
    `https://callboard-backend.herokuapp.com/call/favourite/${id}`,
    requestOptions,
  )
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
