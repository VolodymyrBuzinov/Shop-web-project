const { error, success, alert } = require('@pnotify/core');
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import links from './links'


export default class CategoriesApi {
  constructor(query) {
    this.query = query;      
  }
  
  onHome () {
    return fetch("https://callboard-backend.herokuapp.com/call?page=1")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

onSales () {   
  return fetch("https://callboard-backend.herokuapp.com/call/specific/sales")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

onRecreationAndSport () {  
   return fetch("https://callboard-backend.herokuapp.com/call/specific/recreationAndSport")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

onFree () {    
    return fetch("https://callboard-backend.herokuapp.com/call/specific/free")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

onbusinessAndServices () {   
   return fetch("https://callboard-backend.herokuapp.com/call/specific/businessAndServices")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onWork () {   
   return fetch(`https://callboard-backend.herokuapp.com/call/specific/${this.query}`)
  .then(response => response.json())
  .then(result => result)
    .catch(error => console.log('error', error));
  
}
onTransport () {   
   return fetch("https://callboard-backend.herokuapp.com/call/specific/transport")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onElectronics () {    
   return fetch("https://callboard-backend.herokuapp.com/call/specific/electronics")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onTrade () {   
   return fetch("https://callboard-backend.herokuapp.com/call/specific/trade")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onProperty () {    
   return fetch("https://callboard-backend.herokuapp.com/call/specific/property")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
  }
//   inCabinet() {
//    var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQyN2FlYjAwMzE5MzAwMTdlOTE3OTUiLCJzaWQiOiI1ZmQ0YzY4Yzg1ZGRhMjAwMTcyYmQ1YTQiLCJpYXQiOjE2MDc3Nzk5ODAsImV4cCI6MTYwNzc4MzU4MH0.xygu1Ehj2RUpfBtRX4_Y58PyxDt38rHh-rtv2S7wa78");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://callboard-backend.herokuapp.com/call/favourites", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//   }
onError () {
  error({
    title: 'Неправильный адрес страницы!!!',
    delay: 1500
  })
  }  
}



 
