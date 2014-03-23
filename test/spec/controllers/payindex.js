'use strict';

describe('Controller: PayindexCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var PayindexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayindexCtrl = $controller('PayindexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
