var express = require('express');
var router = express.Router();
require("dotenv").config();
var request = require('request');


router.get('/:city_name', function(req, res, next) {

  var city_name = req.params.city_name;
  console.log(city_name)

  let openweathermap_call = "https://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=" + process.env.OPEN_WHEATHER_API_KEY + ""
  request(openweathermap_call, function(error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    //res.render('wheatherData', { title: 'Express', openwheather_data: body });
    return res.json(body)
  });



});

module.exports = router;
