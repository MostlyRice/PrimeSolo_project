
const express = require('express');
const encryptLib = require('../modules/encryption');
const isAuthenticated = require('../modules/isAuthenticated');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/', function(request, response){ 
  const query = 'INSERT INTO cards (cardname, type, set_name, usd, image) VALUES ($1, $2, $3, $4, $5) RETURNING cards.id;';
  pool.query(query, [request.body.card.name, request.body.card.type_line, request.body.card.set_name, request.body.card.usd, request.body.card.image_uris.normal])
  .then(function(result){//Added to the cards table

    let usd = parseFloat(request.body.card.usd);
    let numberOfCards = parseFloat(request.body.numberOfCards);
    let cardTotals = (usd * numberOfCards).toFixed(2);
    let userID = request.body.userID;
    let cardID = result.rows[0].id;
    let tradelist = false;
    let wishlist = false;
    let havelist = false;
    console.log('havelist', tradelist);

    if (request.body.data == 'havelist'){
      havelist = true;
      const query = 'INSERT INTO user_cards (user_id, card_id, quantity, cardtotals, tradelist, wishlist, havelist) VALUES ($1, $2, $3, $4, $5, $6, $7);';
      pool.query(query, [userID, cardID, numberOfCards, cardTotals, tradelist, wishlist, havelist])
      .then(function(result){
        response.sendStatus(200);
      }).catch(function(error){
        console.log('there was a problem', error);
        response.sendStatus(500);
      });
    }//If it's in the Havelist, then it's added in the User_cards

    else if (request.body.data == 'wishlist'){
      wishlist = true;
      const query = 'INSERT INTO user_cards (user_id, card_id, quantity, cardtotals, tradelist, wishlist, havelist) VALUES ($1, $2, $3, $4, $5, $6, $7);';
      pool.query(query, [userID, cardID, numberOfCards, cardTotals, tradelist, wishlist, havelist])
      .then(function(result){
        response.sendStatus(200);
      }).catch(function(error){
        console.log('there was a problem', error);
        response.sendStatus(500);
      });
    }//If it's in the wishlist, then it's added in the User_cards

    else {
      tradelist = true;
      const query = 'INSERT INTO user_cards (user_id, card_id, quantity, cardtotals, tradelist, wishlist, havelist) VALUES ($1, $2, $3, $4, $5, $6, $7);';
      pool.query(query, [userID, cardID, numberOfCards, cardTotals, tradelist, wishlist, havelist])
      .then(function(result){
        response.sendStatus(200);
      }).catch(function(error){
        console.log('there was a problem', error);
        response.sendStatus(500);
      });}

    }).catch(function(error){
      console.log('there was a problem', error);
      response.sendStatus(500);
    });
  })//If it's in the tradelist, then it's added in the User_cards

  module.exports = router;