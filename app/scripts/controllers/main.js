'use strict';

/**
 * @ngdoc function
 * @name nflteamstatstwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nflteamstatstwoApp
 */
angular.module('nflteamstatstwoApp')
  .controller('MainCtrl', function ($scope, Teams,$localStorage, $location) {
    $scope.Teams = $localStorage.Teams;
    if ($scope.Teams === undefined){
      console.log("initializing team data"); 
      $scope.Teams = Teams.query();
    } 
  
  $scope.selectTeam = function (teamid){
    $localStorage.Teams = $scope.Teams;
    $location.url("/team/"+teamid);
  }
  
 
  
});
