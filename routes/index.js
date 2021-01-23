var express = require('express');
var router = express.Router();
require("dotenv").config();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {

  //-------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------
  // GET to openwheather
  let city_name = "Lido di Ostia"
  let language = "it"
  let openweathermap_call = "https://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=" + process.env.OPEN_WHEATHER_API_KEY + ""

  request(openweathermap_call, function(error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------

  res.render('index', { title: 'Express' });
});

module.exports = router;
