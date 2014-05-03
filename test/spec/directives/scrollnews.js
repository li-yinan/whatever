'use strict';

describe('Directive: scrollnews', function () {

  // load the directive's module
  beforeEach(module('whateverApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('convert scrollnews tag to marquee', inject(function ($compile) {
    element = angular.element('<scrollnews></scrollnews>');
    element = $compile(element)(scope);

    //expect(element[0].tagName).toBe("marquee");

    var data = [
        {
            "id": "4",
            "url": "http://42.51.153.179/pic/20140309/a624c92152e0482eef8e7a7448cfb81d.jpg",
            "text": "用心改变一座城市"
        },
        {
            "id": "3",
            "url": "http://42.51.153.179/pic/20140309/0a65860a59cd385eef48ea722727978a.jpg",
            "text": "中国矿山企业导购指南"
        }
    ];
    var children = element.find("a");

  }));
});
