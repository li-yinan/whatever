'use strict';

describe('Directive: radioSet', function () {

  // load the directive's module
  beforeEach(module('whateverApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<radio-set></radio-set>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the radioSet directive');
  }));
});
