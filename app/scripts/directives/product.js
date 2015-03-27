'use strict';

/**
 * @ngdoc directive
 * @name shoppingApp.directive:product
 * @description
 * # product
 */
angular.module('shoppingApp')
  .directive('product', function () {
    return {
      template: '{{item.name}}'+
    '<img ng-src="{{item.img}}" style="height: 150px; width: 150px">' +
    '{{item.price | currency}}',
      restrict: 'E',
    };
  });
