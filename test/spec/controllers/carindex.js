'use strict';

describe('Controller: CarindexCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var CarindexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarindexCtrl = $controller('CarindexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(3).toBe(3);
  });
});
