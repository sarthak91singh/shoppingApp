'use strict';

describe('Directive: product', function () {

  // load the directive's module
  beforeEach(module('shoppingApp'));

  // var element;
  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

/*  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<product></product>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the product directive');
  }));*/
});
