'use strict';

/**
 * @ngdoc function
 * @name flickrFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrFrontEndApp
 */
angular.module('flickrFrontEndApp')
  .controller('MainCtrl',[ '$window','$http', function ($window, $http) {
    // assign this to main for readability and to prevent binding issues
    var main = this;
    
    // create local varaiables
    main.allItems = []; // All Items
    main.displayedItems = []; // only the items that are visible
    main.query = '';
    
    // Would need to be moved to environment config, when  deployed to Server
    main.url = 'http://localhost:3000/flickrFeed'; 

    function init() {
      // On start up request the Feed from the Backend
      $http.get(main.url).then(successCallback, errorCallback);
    }

    init();

    function successCallback(feed) {
      // Asssign the feed data 
      main.allItems = feed.data.items;
      main.displayedItems = feed.data.items;
    }

    function errorCallback() {
      // Give generic Error Message to user. No details, to prevent exploit of vulnerabilities
      $window.alert('There seems to be a Problem with the flickr Api. Please try again later');
    }

   	main.filterList = function() {
      // filter all items for query and assign to displayed items
   		main.displayedItems = main.filterItems(main.allItems, main.query);
   	};

   // Used to filter the list of results. While one can use the pipe option in Angular.js this will cause perfomance issues 
   // When faced with larger datasets, which is why this option is no longer recommended in newer versions of Angular
   // To learn more on that, check documentation here: https://angular.io/guide/pipes#appendix-no-filterpipe-or-orderbypipe
   main.filterItems = function(items, query) {
      // make the query a lowercase string
      query = query.toLowerCase();
      // Filtering for title as most pictures do not have tags
    	return items.filter(function(item) {
    		return item.title.toLowerCase().indexOf(query) !== -1;
    	});
    }
  }]);
