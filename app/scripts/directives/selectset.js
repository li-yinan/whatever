'use strict';

angular.module('whateverApp')
.directive('selectSet', function () {
    return {
        templateUrl: "views/offcosui/selectset.html",
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            title: "=",
            data: "=",
            dataUrl: "=",
            value: "="
        },
        controller: ["$scope", "$element", function($scope, $element) {
            $scope.showDialog = function() {
                $scope.$broadcast("opendialog");
            };

            $scope.$on("onOk", function( e, value ) {
                $scope.value = value;
                $scope.data = $scope.data || [];
                for( var i = 0; i< $scope.data.length; i++ ) {
                    if( $scope.value == $scope.data[ i ].id ) {
                        $scope.text = $scope.data[ i ].text;
                    }
                }
                setTimeout(function() {
                    $scope.$emit("onselectionChange");
                }, 0)
            });
            var update = function() {
                $scope.data = $scope.data || [];
                for( var i = 0; i< $scope.data.length; i++ ) {
                    if( $scope.value == $scope.data[ i ].id ) {
                        $scope.text = $scope.data[ i ].text;
                    }
                }
            }
            $scope.$watch("data", update);

        }],
        link: function postLink($scope, element, attrs) {
        }
    };
});
