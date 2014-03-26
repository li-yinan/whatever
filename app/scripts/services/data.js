'use strict';

angular.module('whateverApp')
  .service('Data', ["$http", "remoteServerDomain", function Data($http, domain) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var exports = {};
    var request = function(method, url, param, callback, fail) {
        callback = callback || function() {};
        fail = fail || function() {};
        url = domain + url;
        $http[method](url, param).success(function(data) {
            if(data.status == 0) {
                callback(data.data);
            } else {
                fail(data.statusInfo);
            }
        }).error(function(e) {
            fail();
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
    return exports;
  }]);
