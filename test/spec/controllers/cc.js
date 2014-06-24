'use strict';

describe('Controller: CcCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var CcCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CcCtrl = $controller('CcCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
