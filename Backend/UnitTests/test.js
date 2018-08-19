var test = require('tape');
var flickr_api = require('../ApiServices/flickr_api');
var flickr_cache = require('../ApiServices/flickr_cache');
 
// Check that resolved promise returns a string 
test('Test Flickr Api', function (t) {
    t.plan(1);
    let api = flickr_api()
    api.then(function(result) {
    	t.equal(typeof result, 'string');
    })
});

// Check that Cache returns an Object
test('Test Flickr Cache', function (t) {
    t.plan(1);
    let cache = flickr_cache()
    t.equal(typeof cache, 'object');
});