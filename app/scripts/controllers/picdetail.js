'use strict';

angular.module('whateverApp')
  .controller('PicdetailCtrl', ["$scope", "Data", "dataUrl", "$routeParams",function ($scope, Data, url, $routeParams) {
      Data.get(url.picDetail, {"id":$routeParams.id}, function(data) {
          $scope.data = data;
          setTimeout(function() {
              $('#picDetail').carousel({
                  interval: 2000
              });
          }, 0);
      });
  }]);
