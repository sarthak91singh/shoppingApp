'use strict';

describe('Service: basket', function () {

  // load the service's module
  beforeEach(module('shoppingApp'));

  // instantiate service
  var basket;
  beforeEach(inject(function (_basket_) {
    basket = _basket_;
  }));

  it('should initially be empty.', function () {
    expect(basket.count()).toBe(0);
  });

});
