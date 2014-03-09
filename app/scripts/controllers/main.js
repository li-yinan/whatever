'use strict';

angular.module('whateverApp')
  .controller('MainCtrl', ["$scope", "Data", "dataUrl", function ($scope, Data, url) {
      Data.get(url.index, {}, function(data) {
          $scope.data = data;
          setTimeout(function() {
              $('.carousel').carousel({
                  interval: 2000
              });
          }, 0);
      });
  }]);
