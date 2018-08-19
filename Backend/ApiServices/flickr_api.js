const lib = require('https');

const HOST_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

function makeRequest(url) {
  // return Promise to make async request
  return new Promise((resolve, reject) => {
    // user https to fire the request
    const request = lib.get(url, (response) => {
      // handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
         reject(new Error('Failed to load page, status code: ' + response.statusCode));
       }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(body.join('')));
    });
    // handle connection errors of the request
    request.on('error', (err) => reject(err))
    })
};

function getFlickrFeed() {
	return makeRequest(HOST_URL);
}

module.exports = getFlickrFeed;