'use strict';

/**
 * @ngdoc function
 * @name nflteamstatstwoApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the nflteamstatstwoApp
 */
angular.module('nflteamstatstwoApp')
  .controller('TeamCtrl', function ($scope, $routeParams, TeamStats) {
    $scope.teamid = $routeParams.teamid;
    $scope.TeamStats = TeamStats.query({teamid: $scope.teamid});
  });