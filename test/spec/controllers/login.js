'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('whateverApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    window.device = {};
    device.uuid = "aaa";
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('login test', function () {
    //expect(scope.awesomeThings.length).toBe(3);

    expect($("#logState").text()).toBe("");

    expect(device.uuid).toBe("aaa");

    expect(scope.login()).toBe("请填写昵称");
    scope.username = "lyn";
    expect(scope.login()).toBe("请填写密码");
    scope.password = "123456";
    expect(scope.login()).toBe("");

    scope._setUserName({username:"lyn"})
    expect(scope.username).toBe("lyn");

    $(document.body).append($('<div id="logState"></div>'));
    scope._changeLoginState();
    expect($("#logState").hasClass("log-state-1")).toBe(true);

    expect(scope._sendLoginRequest({status:1})).toBe("登陆失败");
    expect($("#logState").hasClass("log-state-1")).toBe(true);

    expect(scope._sendLoginRequest({status:0})).toBe("登陆成功");
    expect($("#logState").hasClass("log-state-2")).toBe(true);

    expect(scope.register()).toBe("跳转到注册");
  });
});
