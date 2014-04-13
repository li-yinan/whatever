'use strict';

angular.module('whateverApp')
  .controller('PicdetailCtrl', ["$scope", "Data", "dataUrl", "$routeParams", function ($scope, Data, url, $routeParams) {
      $scope.showNum = 0;
      //绑定左右翻页按钮事件
      var length = 0;
      //$scope.clickLeft = function() {
      //    $scope.showNum = ($scope.showNum+length-1)%length;
      //};
      //$scope.clickRight = function() {
      //    $scope.showNum = ($scope.showNum+length+1)%length;
      //};
      var clickLeft = function() {
          $scope.showNum = ($scope.showNum+length-1)%length;
      };
      var clickRight = function() {
          $scope.showNum = ($scope.showNum+length+1)%length;
      };
      $("#picDetail").on("swipeLeft swipeRight swipeleft swiperight", function(e) {
          $scope.$apply(function() {
              e.type.toLowerCase() == "swipeleft" ? clickRight(): clickLeft();
          });
      });

      //获取数据
      Data.get(url.picDetail, {"id":$routeParams.id}, function(data) {
          Data.gets(data, "pic", function() {
              $scope.$apply(function() {
                  $scope.data = data;
                  length = data.length;
              })
          });
      });
  }]);
