'use strict';

describe('Controller: PicnewsdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var PicnewsdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PicnewsdetailCtrl = $controller('PicnewsdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
