'use strict';

angular.module('whateverApp')
  .controller('MainCtrl', ["$scope", "Data", "dataUrl", "$timeout", function ($scope, Data, url, $timeout) {
      var screenWidth = $(window).width();
      Data.get(url.index, {}, function(data) {
          Data.gets(data.pic_ad, "pic", function() {
              $scope.$apply(function() {
                  for(var i=0;i<data.pic_ad.length;i++) {
                      data.pic_ad[i].height = parseInt(screenWidth/2,10);
                  }
                  $scope.data = data;
                  $timeout(function() {
                      $('.banner').unslider({
                          loop: false,
                          dots: true
                      });
                  }, 0);
              });
          });
      });

      /**
       * @brief 点击退出，先confirm
       *
       * @return 
       */
      $scope.confirmQuit = function() {
          function onConfirm(button) {
              if(button==1) navigator.app.exitApp(); //选择了确定才执行退出
          }
          navigator.notification.confirm(
            '确定要退出程序吗?',  // message
            onConfirm,              // callback to invoke with index of button pressed
            '确定要退出程序吗?',            // title
            '确定,取消'          // buttonLabels
          );
      };
  }]);
