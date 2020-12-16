export default function onPost (id) {
     const accessToken = sessionStorage.getItem('token');
     var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQwZWEyODBjOGRhNDAwMTc2ODljMjQiLCJzaWQiOiI1ZmQxMTM1OTBjOGRhNDAwMTc2ODljYTAiLCJpYXQiOjE2MDc1Mzc0OTcsImV4cCI6MTYxMDE2NTQ5N30.NoWT46_Jwpx8ohODgqzneECBSbQKtn610a3lsM27iYc");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};
       fetch(`https://callboard-backend.herokuapp.com/call/favourite/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
     } 
      
  