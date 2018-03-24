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

module.exports = router;