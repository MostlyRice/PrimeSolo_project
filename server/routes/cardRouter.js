const express = require('express');
const encryptLib = require('../modules/encryption');
const isAuthenticated = require('../modules/isAuthenticated');
const pool = require('../modules/pool.js');
const router = express.Router();

// router.get('/', function(req, res) {
//     console.log('get /user route');
//     // check if logged in
//     if(req.isAuthenticated()) { // req.isAuthenticated() ensures the user is logged in
//       // send back user object from database
//       console.log('logged in');
//     } else {
//         // failure best handled on the server. do redirect here.
//         console.log('not logged in');
//         // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
//         res.sendStatus(403);
//       }
//     });

router.post('/', function(request, response){
console.log('In Card post', request.body);
let tradelist = false;
let wishlist = false;

if (request.body.data == 'tradelist'){
    tradelist = true;
} else {
    wishlist = true;
}
const query = 'INSERT INTO cards (cardname, type, image) VALUES ($1, $2, $3);';
pool.query(query, [request.body.card.name, request.body.card.type_line, request.body.card.image_uris.png])
.then(function(result){
    response.sendStatus(200);
}).catch(function(error){
    console.log('there was a problem', error);
    response.sendStatus(500);
});
})

module.exports = router;