'use strict';

/**
 * @ngdoc function
 * @name shoppingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingApp
 */
angular.module('shoppingApp')
  .controller('MainCtrl', function ($scope, catalog, basket) {
    $scope.catalog = catalog;
    $scope.basket = basket;
    console.log('Basket Service contents: ',basket);

  });
