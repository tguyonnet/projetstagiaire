

var db = new PouchDB('http://localhost:5984/madera/');

db.info().then(function (info) {
    console.log(info);
})

db.put({
    _id: 'customer',
    name: '',
    firstName : '',
    
  }).then(function (response) {
    // handle response
  }).catch(function (err) {
    console.log(err);
  });