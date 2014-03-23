'use strict';

describe('Controller: PayintroCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var PayintroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayintroCtrl = $controller('PayintroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
