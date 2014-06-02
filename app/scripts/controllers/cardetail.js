'use strict';

angular.module('whateverApp')
  .controller('CardetailCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      Data.get(url.getCarDetail, {"id":$routeParams.id}, function(data) {
          $scope.data = data;
          $scope.pic_list = [];
          for ( var i = 0; i < data.pic_list.length; i++ ) {
              $scope.pic_list.push({
                  id: "",
                  url: "",
                  pic: data.pic_list[i]
              });
          }
      });
  }]);
