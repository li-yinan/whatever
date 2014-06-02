'use strict';

angular.module('whateverApp')
.directive('topNavBar', function () {
    return {
        templateUrl: "views/offcosui/topnavbar.html",
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            type: "@",
            searchurl: "@",
            url: "@"
        },
        controller: [ "$scope", function ($scope) {
            $scope.href = $scope.url || "javascript:history.go(-1)";
        } ],
        link: function postLink(scope, element, attrs) {
        }
    };
});
