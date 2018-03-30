const express = require('express');
const encryptLib = require('../modules/encryption');
const isAuthenticated = require('../modules/isAuthenticated');
const pool = require('../modules/pool.js');
const router = express.Router();

// START GET ROUTE FOR HAVELIST
router.get('/havelist/:id', function(request, response){
  const user_id = request.params.id;
  const query = 'SELECT * FROM user_cards JOIN cards ON cards.id = user_cards.card_id WHERE havelist=true AND user_cards.user_id =$1;';
  pool.query(query, [user_id])
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
router.get('/tradelist/:id', function(request, response){
  const user_id = request.params.id;
  const query = 'SELECT * FROM user_cards JOIN cards ON cards.id = user_cards.card_id WHERE tradelist=true AND user_cards.user_id =$1;';
  pool.query(query, [user_id])
  .then(function(result){
    console.log('Results from the Tradelist',result);
    response.send(result.rows);
  
  }).catch(function(error){
    console.log('there was a problem...with the tradelist router', error);
    response.sendStatus(500);
  });
});
// END GET ROUTE FOR TRADELIST

// START GET ROUTE FOR WISHLIST
router.get('/wishlist/:id', function(request, response){
  const user_id = request.params.id;
  const query = 'SELECT * FROM user_cards JOIN cards ON cards.id = user_cards.card_id WHERE wishlist=true AND user_cards.user_id =$1;';
  pool.query(query, [user_id])
  .then(function(result){
    console.log('Results from the Wishlist',result);
    response.send(result.rows);
  }).catch(function(error){
    console.log('there was a problem...with the Wishlist router', error);
    response.sendStatus(500);
  });
});
// END GET ROUTE FOR WISHLIST

module.exports = router;
