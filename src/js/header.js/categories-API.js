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
   return fetch(`https://callboard-backend.herokuapp.com/call/specific/work`)
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
  inCabinet() {    
    var myHeaders = new Headers();
    let storageToken = sessionStorage.getItem('token');
myHeaders.append("Authorization", storageToken);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

return fetch("https://callboard-backend.herokuapp.com/user", requestOptions)
  .then(response => response.text())
  .then(result => result)
  .catch(error => console.log('error', error));
  }
onError () {
  error({
    title: 'Неправильный адрес страницы!!!',
    delay: 1500
  })
  }  
}



 
