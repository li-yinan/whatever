'use strict';

describe('Controller: PayhistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var PayhistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayhistoryCtrl = $controller('PayhistoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
