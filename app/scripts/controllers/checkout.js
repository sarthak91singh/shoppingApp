'use strict';

/**
 * @ngdoc function
 * @name shoppingApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the shoppingApp
 */
angular.module('shoppingApp')
  .controller('CheckoutCtrl', function ($scope, basket) {
    $scope.basket = basket;
  });
