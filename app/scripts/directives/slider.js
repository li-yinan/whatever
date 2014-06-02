'use strict';

angular.module('whateverApp')
.directive('slider', function () {
    return {
        templateUrl: "views/offcosui/slider.html",
        restrict: 'E',
        replace: true,
        scope: {
            link: "@",
            data: "="
        },
        controller: [ "$scope", "$element", "$timeout", function ($scope, $element, $timeout) {
            $scope.$watch("data", function() {
                setTimeout(function() {
                    $($element).unslider({
                        loop: false,
                        dots: true
                    });
                }, 0);
            });
            $scope.getHref = function(id) {
                var url = "";
                if ( $scope.link ) {
                    url = "#" + $scope.link + "/" + id;
                } else {
                    url = "";
                }
                return url;
            }
        } ],
        link: function postLink(scope, element, attrs) {
        }
    };
});
