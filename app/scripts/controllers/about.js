'use strict';

/**
 * @ngdoc function
 * @name shoppingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shoppingApp
 */
angular.module('shoppingApp')
  .controller('AboutCtrl', function ($scope, cricket) {

  		var promise = cricket.getPlayers();

  		promise.then(function(data){
  			$scope.team = data;
  			console.log($scope.team);
  		});

  });
