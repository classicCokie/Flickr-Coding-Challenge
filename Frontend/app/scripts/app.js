'use strict';

/**
 * @ngdoc overview
 * @name flickrFrontEndApp
 * @description
 * # flickrFrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('flickrFrontEndApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
