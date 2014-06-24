'use strict';

angular.module('whateverApp')
.controller('HousesearchCtrl', ["$scope", "Data", "dataUrl", "$routeParams", "$location", "$timeout", "Param", function ($scope, Data, url, $routeParams, $location, $timeout, Param) {
    var init = function () {
        var queryUrl = "";
        if(Param.get("cur") == "tab1") {
            queryUrl = url.get_house_choose_info;
        } else {
            queryUrl = url.get_rent_choose_info;
        }
        Data.get( queryUrl, {}, function(data) {
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
        var queryUrl = "";
        if(Param.get("cur") == "tab1") {
            queryUrl = url.get_house_result_count;
        } else {
            queryUrl = url.get_rent_result_count;
        }
        var listScope = angular.element("ul").scope();
        var param = listScope.getValue();
        Data.get(queryUrl, param, function(data) {
            $scope.total = data.count;
        });
    };

    var query = function() {
        var listScope = angular.element("ul").scope();
        var param = listScope.getValue();
        Param.set("param", param);
        $location.path("/houseIndex");
    };
    $scope.query = query;

    $scope.clear = function() {
        init();
    };

}]);
