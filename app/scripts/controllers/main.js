'use strict';

angular.module('whateverApp')
  .controller('MainCtrl', ["$scope", "Data", "dataUrl", function ($scope, Data, url) {
      Data.get(url.index, {}, function(data) {
          $scope.data = data;
          setTimeout(function() {
              $('#indexAd').carousel({
                  interval: 2000
              });
          }, 0);
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
