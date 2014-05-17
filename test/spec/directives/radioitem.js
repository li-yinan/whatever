'use strict';

describe('Directive: radioItem', function () {

  // load the directive's module
  beforeEach(module('whateverApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<radio-item></radio-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the radioItem directive');
  }));
});
