'use strict';

angular.module('whateverApp')
.directive('dialog', function () {
    return {
        templateUrl: "views/offcosUI/dialog.html",
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: ["$scope", "$element","$timeout", function ($scope, $element, $timeout) {
            $scope.isShow = false;
            $scope.selfValue = $scope.value

            $scope.$on("valueChange", function (e, value) {
                $scope.selfValue = value;
            });

            $scope.$on("opendialog", function () {
                $scope.$broadcast("onOpen");
                $scope.isShow = true;
            });

            $scope.$on("closedialog", function () {
                $scope.close();
            });

            $scope.onOk = function () {
                $scope.$emit("onOk", $scope.selfValue);
                $scope.close();
            };

            $scope.onCancel = function () {
                $scope.$emit("onCancel");
                $scope.close();
            };

            $scope.close = function () {
                $timeout( function () {
                    $scope.isShow = false;
                    $scope.$broadcast("onClose");
                }, 500);
            };
        }],
        link: function postLink(scope, element, attrs) {
            scope.type = element.attr("type");
            element.click( function ( e ) {
                return false;
            });
        }
    };
  });
