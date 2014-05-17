'use strict';

angular.module('whateverApp')
.directive('topNavBar', function () {
    return {
        templateUrl: "views/offcosUI/topNavBar.html",
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            type: "@",
            url: "@"
        },
        controller: [ "$scope", function ($scope) {
        } ],
        link: function postLink(scope, element, attrs) {
        }
    };
});
