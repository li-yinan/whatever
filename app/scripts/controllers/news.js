'use strict';

angular.module('whateverApp')
  .controller('NewsCtrl', ["$scope", "Data", "dataUrl", function ($scope, Data, url) {
      var screenWidth = $(window).width();
      Data.get(url.news, {}, function(data) {
          for(var i=0;i<data.banner.length;i++) {
              data.banner[i].height = parseInt(screenWidth/2,10);
          }
          $scope.data = data;
          setTimeout(function() {
              $('.banner').unslider({
                  loop: false,
                  dots: true
              });
          }, 0);
      });
  }]);
