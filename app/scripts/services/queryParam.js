'use strict';

angular.module('whateverApp')
  .service('Param', ["$http", "remoteServerDomain", function Data($http, domain) {
    var exports = {};
    var _param = {};

    exports.set= function(key, value) {
        _param[key] = value || "";
    };

    exports.get = function(key) {
        return _param[key] || "";
    }

    exports.clearAll = function() {
        _param = {};
    }
    exports.clear = function(key) {
        delete _param[key];
    }
    return exports;
  }]);
