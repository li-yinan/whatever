'use strict';

angular.module('whateverApp')
.directive('list', function () {
    return {
        templateUrl: "views/offcosUI/list.html",
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: [ "$scope", "$element", function ($scope, $element) {
            $scope.getValue = function() {
                var res = {};
                $element.find("li").each(function(index, el) {
                    var scope = angular.element(el).scope();
                    if(scope.item.id) {
                        res[scope.item.id] = scope.item.value;
                    }
                });
                return res;
            };
            $scope.setValue = function(data) {
                $element.find("li").each(function(index, el) {
                    var scope = angular.element(el).scope();
                    if(scope.item.id in data) {
                        scope.item.value = data[scope.item.id];
                    }
                });
            }
        } ],
        link: function postLink(scope, element, attrs) {
            var type = element.attr("type");
            scope.type = type;
        }
    };
});
