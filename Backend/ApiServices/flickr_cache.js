let flickr_api = require('./flickr_api');

let flickrCache;

//Initalize Cache on StartUp
loadCache();

function convertJsonFeedToObject(feed) {
	// Cut the first Characters from the string, as they are invalid json
	feed = feed.substring(15)
	// Cut the last Character from the string to get Valid Json
	feed = feed.substring(0, feed.length - 1);
	// Parse to json
    return JSON.parse(feed);
}

function loadCache() {
	// Request the Public Feed from Flickr
	let feed = flickr_api()
	.then(function(data) {
		// Convert the json feed to a json Object
		flickrCache = convertJsonFeedToObject(data);
		// Repeat the update after 5 seconds
		setTimeout(loadCache, 5000);
	})
	.catch(function(error) {
		// Print the error on the server Side
		console.log(error);
		// Try to update the cache again
		setTimeout(loadCache, 100);
	});
}

function getFeedFromCache() {
	// Return the current Cache
	return flickrCache;	
}

module.exports = getFeedFromCache;