'use strict';

angular.module('whateverApp')
.directive('bottomNavBar', function () {
    return {
        templateUrl: "views/offcosUI/bottomNavBar.html",
        restrict: 'E',
        replace: true,
        scope: {
            type: "@"
        },
        controller: [ "$scope", function ($scope) {
        } ],
        link: function postLink(scope, element, attrs) {
        }
    };
});
