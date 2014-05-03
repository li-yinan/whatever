'use strict';

describe('Controller: CardetailCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var CardetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardetailCtrl = $controller('CardetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
