'use strict';

describe('Controller: TextnewsdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var TextnewsdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TextnewsdetailCtrl = $controller('TextnewsdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
