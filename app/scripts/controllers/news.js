'use strict';

angular.module('whateverApp')
  .controller('NewsCtrl', ["$scope", "Data", "dataUrl", function ($scope, Data, url) {
      Data.get(url.news, {}, function(data) {
          $scope.data = data;
          setTimeout(function() {
              $('#carousel').carousel({
                  interval: 2000
              });
          }, 0);
      });
  }]);
