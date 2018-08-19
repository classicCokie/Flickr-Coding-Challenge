var express = require('express');
var flickr_cache = require('./ApiServices/flickr_cache');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Get the latest Flickr feed
app.get('/flickrFeed', function (req, res) {
  let response = flickr_cache();
  res.send(response);
});

// Serve the Angular Files from this directory once the application is deployed to a server 
app.use('/', express.static('files'));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});