'use strict';

/**
 * @ngdoc function
 * @name shoppingApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the shoppingApp
 */
angular.module('shoppingApp')
  .controller('NavCtrl', function ($scope, basket) {
    $scope.basket = basket;
  });
