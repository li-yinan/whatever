'use strict';

describe('Controller: RecuitdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var RecuitdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecuitdetailCtrl = $controller('RecuitdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
