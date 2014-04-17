/**
 * @file autologin.js
 * @brief 自动登录功能
 * @author liyinan
 * @version 1.0
 * @date 2014-04-16
 */
(function() {
    var uuid = "";
    if(window.device) {
        uuid = device.uuid;
    } else {
        return;
    }
    $.ajax({
        url: "http://42.51.153.179/landing/auto_landing.php",
        method: "GET",
        data: {
            uuid: uuid
        },
        success: function() {
            //更改底部导航栏的状态，从登陆变为注销
            $("#logState")
                .removeClass("log-state-1")
                .addClass("log-state-2");
        }
    });
})();
