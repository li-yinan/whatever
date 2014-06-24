'use strict';

angular.module('whateverApp')
.directive('bottomNavBar', function () {
    return {
        templateUrl: "views/offcosui/bottomnavbar.html",
        restrict: 'E',
        replace: true,
        scope: {
            type: "@"
        },
        controller: [ "$scope", "Param", "$location", function ($scope, Param, $location) {
            $scope.goCustom = function() {
                var textArr = [
                    "咨询收获上乘生活！",
                    "欢迎拨打客服电话！"
                ];
                Param.set("ccText", textArr);
                Param.set("topBarTitle", "客服");
                $location.path("/cc");
            };
            $scope.goPublish = function() {
                var textArr = [
                    "发布二手车、二手房",
                    "租房、活动、招聘等信息",
                    "欢迎拨打咨询电话！"
                ];
                Param.set("ccText", textArr);
                Param.set("topBarTitle", "我要发布");
                $location.path("/pub");
            };
            $scope.goUc = function() {
                var login = true;
                if ( login ) {
                    $location.path("/usercenter");
                } else {
                    $location.path("/login");
                }
            };
        } ],
        link: function postLink(scope, element, attrs) {
        }
    };
});
