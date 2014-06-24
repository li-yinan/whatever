'use strict';

describe('Controller: AddetailCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var AddetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddetailCtrl = $controller('AddetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
