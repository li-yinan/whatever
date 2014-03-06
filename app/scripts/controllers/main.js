'use strict';

angular.module('whateverApp')
  .controller('MainCtrl', ["$scope", "Data", "dataUrl", function ($scope, Data, url) {
      Data.get(url.news, function(data) {
          $scope.data = data;
          setTimeout(function() {
              $('.carousel').carousel({
                  interval: 3000
              });
          }, 0);
      });
  }]);
