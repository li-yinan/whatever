'use strict';

angular.module('whateverApp')
.directive('radioItem', function () {
    return {
        templateUrl: "views/offcosUI/radioItem.html",
        restrict: "E",
        require: "^radioSet",
        replace: true,
        transclude: true,
        scope: {
            id: "@rid",
            selected: "="
        },
        controller: ["$scope", "$element", function($scope, $element) {
            $scope.select = function() {
                $scope.$emit("selectionChange", $scope.id);
            };
        }],
        link: function postLink(scope, element, attrs) {
        }
    };
});
