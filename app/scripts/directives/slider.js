'use strict';

angular.module('whateverApp')
.directive('slider', function () {
    return {
        templateUrl: "views/offcosUI/slider.html",
        restrict: 'E',
        replace: true,
        scope: {
            data: "="
        },
        controller: [ "$scope", "$element", "$timeout", function ($scope, $element, $timeout) {
            $scope.$watch("data", function() {
                $timeout(function() {
                    $($element).unslider({
                        loop: false,
                        dots: true
                    });
                }, 0);
            });
        } ],
        link: function postLink(scope, element, attrs) {
        }
    };
});
