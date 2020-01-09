var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("API is working properly");
});

router.get('/customers', function(req, res, next) {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

router.get('/products', function(req, res, next) {
  const products = [
    {id: 1, brand: 'Ford', model: 'Mustang'},
    {id: 2, brand: 'Nissan', model: 'GTR'},
    {id: 3, brand: 'Audi', model: 'TTS'},
  ];

  res.json(products);
});

module.exports = router;