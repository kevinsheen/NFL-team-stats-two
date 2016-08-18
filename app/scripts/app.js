'use strict';

/**
 * @ngdoc overview
 * @name nflteamstatstwoApp
 * @description
 * # nflteamstatstwoApp
 *
 * Main module of the application.
 */
angular
  .module('nflteamstatstwoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage', // added to enable localStorage features
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/team/:teamid', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .otherwise({
        redirectTo: '/'
      });
  });