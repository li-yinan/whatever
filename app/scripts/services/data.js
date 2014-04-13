'use strict';

angular.module('whateverApp')
  .service('Data', ["$http", "remoteServerDomain", function Data($http, domain) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var exports = {};

    //计算有多少个ajax请求在执行，最后一个退出才清除mask
    var maskFlag = 0;
    var maskEl = document.createElement("div");
    var maskBgEl = document.createElement("div");
    maskEl.appendChild(maskBgEl);
    maskEl.style.display = "none";
    maskEl.className = "mask";
    maskBgEl.className = "mask-bg";
    document.body.appendChild(maskEl);
    var showMask = function() {
        maskFlag++;
        maskEl.style.display = "";
    };
    var hideMask = function() {
        maskFlag--;
        if(maskFlag==0) {
            maskEl.style.display = "none";
        }
    };

    var request = function(method, url, param, callback, fail) {
        showMask();
        callback = callback || function() {};
        fail = fail || function() {};
        url = domain + url;

        var httpObj = {};

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        if(method == "get") {
            httpObj = $http[method](url);
        } else {
            httpObj = $http[method](url, param, config);
        }
        httpObj.success(function(data) {
            if(data.status == 0) {
                callback(data.data);
            } else {
                fail(data.statusInfo);
            }
            hideMask();
        }).error(function(e) {
            fail();
            hideMask();
        });
    }

    exports.get = function(url, param, callback, fail) {
        if(!/\?/.test(url)) {
            url += "?" + $.param(param);
        } else {
            url += "&" + $.param(param);
        }
        request("get", url, {}, callback, fail);
    };

    exports.post = function(url, param, callback, fail) {
        param = $.param(param);
        request("post", url, param, callback, fail);
    };

    exports.gets = function(urlArr, key, callback, fail) {
        showMask();
        var arr = [];
        for(var i=0;i<urlArr.length;i++) {
            arr.push($.ajax(urlArr[i][key]));
        }
        $.when.apply($,arr).done(function() {
            callback();
            hideMask();
        }).fail(function() {
            fail();
            hideMask();
        });
    }
    return exports;
  }]);
