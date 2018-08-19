# Flickr Coding Challenge

This Project was created for the Flickr Coding Challenge: https://github.com/Isentia/Coding-Challenge/blob/master/Software-Engineer-Full-Stack-JavaScript-Coding-Challenge.md

A live demo of the finished challenge can be seen here: 

While the instructions in the Challenge said, that the list should be filtered by tags, I found, that hardly any of the pictures in the stream have tags. Therefore my application filters for the title instead of the tag.

## Implementation Details

While it would be possible to request the Flickr API from the Frontend, this is not generally good practice
as cross-domain requests open the door for XSS attacks. 

Therefore the Application requests the Flickr API on the Backend Site. The Backend Caches the Stream to provide a quick response for the frontend. The Cache is updated with a new feed every five seconds.


# Front End
## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.


#Back End

##Install & Start Server
To start the server simply execute `npm install` and then run it with `node index.js`

Unit Testing is done with tape. The tests can be started using `npm test`

