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
    console.log(basket.count());
    console.log("HaHaHa");
  });
