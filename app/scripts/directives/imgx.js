'use strict';

angular.module('whateverApp')
  .directive('imgx', function () {
    return {
      template: '<img></img>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        //element.text('this is the imgx directive');
        var promise = element.bind("load", function () {
            console.log("url is" + attrs.src);
        });
        element.src = attrs.src;
      }
    };
  });
