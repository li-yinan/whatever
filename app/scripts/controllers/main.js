'use strict';

angular.module('whateverApp')
  .controller('MainCtrl', ["$scope", "Data", "dataUrl", "$timeout", function ($scope, Data, url, $timeout) {
      Data.get(url.index, {}, function(data) {
          Data.gets(data.pic_ad, "pic", function() {
              $scope.$apply(function() {
                  $scope.pic_ad = data.pic_ad;
                  $scope.pic_show_ad = data.pic_show_ad;
              });
          });
      });
  }]);
