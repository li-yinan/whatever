'use strict';

angular.module('whateverApp')
  .controller('LoginCtrl', ["$scope", "Data", "dataUrl", "$timeout", "$location", function ($scope, Data, url, $timeout, $location) {
      var uuid = "";
      if(window.device) {
          uuid = device.uuid;
      }
      //发送注销请求
      var _changeLoginState = $scope._changeLoginState = function() {
          $("#logState")
              .removeClass("log-state-2")
              .addClass("log-state-1");
      };
      Data.get(url.logout, {}, _changeLoginState);
      if(uuid) {
          var _setUserName = $scope._setUserName = function(data) {
              $scope.username = data.username;
          };
          //这个请求和注销没有依赖关系，可以并行执行
          Data.get(url.getUserName, {uuid: uuid}, _setUserName);
      }
      $scope.login = function() {
          var param = {};
          param.uuid = uuid;
          param.username = $scope.username;
          if(!param.username) {
              alert("请填写昵称");
              return "请填写昵称";
          }
          param.password = $scope.password;
          if(!param.password) {
              alert("请填写密码");
              return "请填写密码";
          }
          //发出登陆请求
          var _sendLoginRequest = $scope._sendLoginRequest = function(data) {
              //登陆成功之后要跳转到首页
              if(data.status === 0) {
                  $("#logState")
                      .removeClass("log-state-1")
                      .addClass("log-state-2");
                  $location.path("/");
                  return "登陆成功";
              } else {
                  alert(data.statusInfo);
                  return "登陆失败";
              }
          };
          Data.get(url.login, param, _sendLoginRequest);
          return "";
      };
      /**
       * @brief 跳转到注册页面
       *
       * @return 
       */
      $scope.register = function() {
          $location.path("/register");
          return "跳转到注册";
      };
  }]);
