'use strict';

angular.module('whateverApp')
.directive('radioSet', function () {
    return {
        templateUrl: "views/offcosui/radioset.html",
        transclude: true,
        replace: true,
        restrict: 'E',
        scope: {
            data: "=",
            value: "="
        },
        controller: ["$scope", function($scope) {
            $scope.originValue = $scope.value;
            $scope.selfValue = $scope.value;
            $scope.$on("selectionChange", function(e, selectedId) {
                $scope.originValue = $scope.selfValue;
                $scope.selfValue = selectedId;
                $scope.$emit("valueChange", $scope.selfValue);
            });

            $scope.$on("onOpen", function() {
                $scope.originValue = $scope.value;
                $scope.selfValue = $scope.value;
            });

            $scope.$on("onClose", function() {
                $scope.selfValue = $scope.originValue;
            })
        }],
        link: function postLink(scope, element, attrs) {
        }
    };
});
