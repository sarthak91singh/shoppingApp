'use strict';

/**
 * @ngdoc service
 * @name shoppingApp.cricket
 * @description
 * # cricket
 * Service in the shoppingApp.
 */
angular.module('shoppingApp')
  .service('cricket', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var deferred = $q.defer();

    $http.get('../../resources/cricket.json').then(function(data){
    	deferred.resolve(data);
    });

    this.getPlayers = function(){
    	return deferred.promise;
    };

  });
