const express = require('express');
const encryptLib = require('../modules/encryption');
const isAuthenticated = require('../modules/isAuthenticated');
const pool = require('../modules/pool.js');
const router = express.Router();

// START GET ROUTE FOR WISHLIST
router.get('/wishlist/:id', function(request, response){
  const user_id = request.params.id;
  const query = 'SELECT * FROM user_cards JOIN cards ON cards.id = user_cards.card_id WHERE wishlist=true AND user_cards.user_id =$1 ORDER BY type;';
  pool.query(query, [user_id])
  .then(function(result){
    response.send(result.rows);
  }).catch(function(error){
    response.sendStatus(500);
  });
});
// END GET ROUTE FOR WISHLIST

router.put('/edit/:id', function(request, response){
  const user_id = request.params.id;
  const query = 'UPDATE user_cards SET quantity=$1 WHERE id=$2';
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

router.delete('/delete/:id', function(request, response){
  const user_id = request.params.id;
  const query = 'DELETE FROM user_cards WHERE card_id={id}';
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

module.exports = router;
