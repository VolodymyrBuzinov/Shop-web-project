var myHeaders = new Headers();
myHeaders.append(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQwYjQxM2RlYWU1ZjAwMTdlNDFhZDUiLCJzaWQiOiI1ZmQzODY5NzZkYTZhYjAwMTdkYmY1MzEiLCJpYXQiOjE2MDc2OTgwNzEsImV4cCI6MTYwNzcwMTY3MX0.XSEhefQjwZYtDwmD6nIxV5CbT_rIGhSnBKY-KN5pAo8',
);

var formdata = new FormData();
formdata.append('title', 'Developer');
formdata.append('description', 'front-end is best');
formdata.append('category', 'work');
formdata.append('price', '0');
formdata.append('phone', '+380995585547');
formdata.append(
  'file',
  fileInput.files[0],
  '/D:/картинки от 08/ChitzChatz.jpg',
);
formdata.append(
  'file',
  fileInput.files[0],
  '/D:/картинки от 08/first-program.jpg',
);
formdata.append(
  'file',
  fileInput.files[0],
  '/D:/картинки от 08/haikyuu-voleybol-sport-oboi.jpg',
);
formdata.append(
  'file',
  fileInput.files[0],
  '/D:/картинки от 08/images (1).jpg',
);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow',
};

fetch('https://callboard-backend.herokuapp.com/call/', requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
