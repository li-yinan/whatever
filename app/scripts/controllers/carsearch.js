'use strict';

angular.module('whateverApp')
.controller('CarsearchCtrl', ["$scope", "Data", "dataUrl", "$routeParams", "$location", "$timeout", "Param", function ($scope, Data, url, $routeParams, $location, $timeout, Param) {
    var init = function () {
        Data.get(url.get_choose_info, {}, function(data) {
            $scope.data = data;
            $timeout(function() {
                getTotalCount();
            },0);
        });
    };
    init();

    $scope.$on("onselectionChange", function() {
        getTotalCount();
    });

    var getTotalCount = function() {
        var listScope = angular.element("ul").scope();
        var param = listScope.getValue();
        Data.get(url.get_result_count, param, function(data) {
            $scope.total = data.count;
        });
    };

    var query = function() {
        var listScope = angular.element("ul").scope();
        var param = listScope.getValue();
        Param.set("param",param);
        $location.path("/carIndex");
    };
    $scope.query = query;

    $scope.clear = function() {
        init();
    };

}]);
