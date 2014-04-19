'use strict';

angular.module('whateverApp')
  .controller('LoginCtrl', ["$scope", "Data", "dataUrl", "$timeout", "$location", function ($scope, Data, url, $timeout, $location) {
      var uuid = "";
      if(window.device) {
          uuid = device.uuid;
      }
      //发送注销请求
      Data.get(url.logout, {}, function(data) {
          $("#logState")
              .removeClass("log-state-2")
              .addClass("log-state-1");
      });
      if(uuid) {
          //这个请求和注销没有依赖关系，可以并行执行
          Data.get(url.getUserName, {uuid: uuid}, function(data) {
              $scope.username = data.username;
          });
      }
      $scope.login = function() {
          var param = {};
          param.uuid = uuid;
          param.username = $scope.username;
          if(!param.username) {
              alert("请填写昵称");
              return;
          }
          param.password = $scope.password;
          if(!param.password) {
              alert("请填写密码");
              return;
          }
          //发出登陆请求
          Data.get(url.login, param, function(data) {
              //登陆成功之后要跳转到首页
              if(data.status === 0) {
                  $("#logState")
                      .removeClass("log-state-1")
                      .addClass("log-state-2");
                  $location.path("/");
              } else {
                  alert(data.statusInfo);
              }
          });
      };
      /**
       * @brief 跳转到注册页面
       *
       * @return 
       */
      $scope.register = function() {
          $location.path("/register");
      };
  }]);
