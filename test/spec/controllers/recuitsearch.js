'use strict';

describe('Controller: RecuitsearchCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var RecuitsearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecuitsearchCtrl = $controller('RecuitsearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
