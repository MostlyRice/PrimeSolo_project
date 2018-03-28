const express = require('express');
const encryptLib = require('../modules/encryption');
const isAuthenticated = require('../modules/isAuthenticated');
const pool = require('../modules/pool.js');
const router = express.Router();

// START GET ROUTE FOR HAVELIST
router.get('/havelist', function(request, response){
  console.log('In Card post', request.body);
  const query = 'SELECT * FROM user_cards JOIN cards ON cards.id = user_cards.card_id WHERE havelist=true;';
  pool.query(query)
  .then(function(result){
    console.log('Results from the Havelist',result);
    response.send(result.rows);
  }).catch(function(error){
    console.log('there was a problem...with the havelist router', error);
    response.sendStatus(500);
  });
});
// END GET ROUTE FOR HAVELIST

// START GET ROUTE FOR TRADELIST
router.get('/tradelist', function(request, response){
  console.log('In Card post', request.body);
  const query = 'SELECT * FROM user_cards JOIN cards ON cards.id = user_cards.card_id WHERE tradelist=true;';
  pool.query(query)
  .then(function(result){
    console.log('Results from the Tradelist',result);
    response.send(result.rows);
  }).catch(function(error){
    console.log('there was a problem...with the tradelist Touter', error);
    response.sendStatus(500);
  });
});
// END GET ROUTE FOR TRADELIST

// START GET ROUTE FOR WISHLIST
router.get('/wishlist', function(request, response){
  console.log('In Card post', request.body);
  const query = 'SELECT * FROM user_cards JOIN cards ON cards.id = user_cards.card_id WHERE wishlist=true;';
  pool.query(query)
  .then(function(result){
    console.log('Results from the wishlist',result);
    response.send(result.rows);
  }).catch(function(error){
    console.log('there was a problem...with the wishlist router', error);
    response.sendStatus(500);
  });
});
// END GET ROUTE FOR WISHLIST

module.exports = router;
