'use strict';

describe('Service: cricket', function () {

  // load the service's module
  beforeEach(module('shoppingApp'));

  // instantiate service
  var cricket;
  beforeEach(inject(function (_cricket_) {
    cricket = _cricket_;
  }));

  it('should do something', function () {
    expect(!!cricket).toBe(true);
  });

});
