'use strict';

/**
 * @ngdoc service
 * @name shoppingApp.catalog
 * @description
 * # catalog
 * Service in the shoppingApp.
 */
angular.module('shoppingApp')
  .value('catalog', [
  {
  	id: 1,
  	name: 'Batarang',
  	img: 'http://g-ecx.images-amazon.com/images/G/01/img11/shoes/a_plus_detail/c26-B006H30KAE-1-l.jpg',
  	price: 80
  },

  {
  	id: 2,
  	name: 'Utility Belt',
  	img: 'http://g-ecx.images-amazon.com/images/G/01/img11/shoes/a_plus_detail/c26-B006H30KAE-1-l.jpg',
  	price: 120
  },

  {
  	id: 3,
  	name: 'Cape',
  	img: 'http://g-ecx.images-amazon.com/images/G/01/img11/shoes/a_plus_detail/c26-B006H30KAE-1-l.jpg',
  	price: 47
  },

  {
  	id: 4,
  	name: 'Batmobile',
  	img: 'http://g-ecx.images-amazon.com/images/G/01/img11/shoes/a_plus_detail/c26-B006H30KAE-1-l.jpg',
  	price: 100000
  }
]);
