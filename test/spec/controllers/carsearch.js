'use strict';

describe('Controller: CarsearchCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var CarsearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarsearchCtrl = $controller('CarsearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
