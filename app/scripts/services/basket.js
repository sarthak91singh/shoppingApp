'use strict';

/**
 * @ngdoc service
 * @name shoppingApp.basket
 * @description
 * # basket
 * Service in the shoppingApp.
 */
angular.module('shoppingApp')
  .factory('basket', function () {

    var basket = {};
    var count = 0;

    return{
    	get: function(){
    		return basket;
    	},
    	add: function(item){
			if(basket[item.id]){
				basket[item.id].quantity += 1;
			}
			else{
				basket[item.id] ={
					type: item,
					quantity: 1
				};
			}
			count += 1;
    	},
    	remove: function(item){
    		delete basket[item.id];
    		count -= 1;
    	},

    	count: function(){
    		return count;
    	}

    };

  });
