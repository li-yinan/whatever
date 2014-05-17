'use strict';

angular.module('whateverApp')
.controller('CarsearchCtrl', ["$scope", "Data", "dataUrl", "$routeParams", "$location", "$timeout", function ($scope, Data, url, $routeParams, $location, $timeout) {
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
        var hash = "/carIndex" +
            "/" + param.brandId +
            "/" + param.priceId +
            "/" + param.usedtimeId +
            "/" + param.mileageId +
            "/" + param.gearboxId;
        $location.path(hash);
    };
    $scope.query = query;

    $scope.clear = function() {
        init();
    };

}]);
