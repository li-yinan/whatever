'use strict';
(function() {
    var mod = angular.module('whateverApp');
    if(/localhost/.test(location.host)){
        mod.value('dataUrl', {
            index: "/mock/index.json",
            city: "/mock/city.json",
            community: "/mock/community.json",
            scrollnews: "/mock/scrollnews.json",
            news: "/mock/news.json",
            newsDetail: "/mock/newsdetail.json",
            picDetail: "/mock/picdetail.json"
        })
        mod.value('remoteServerDomain',"http://localhost:8848/");
    } else {
        mod.value('dataUrl', {
            index: "/common/init.php",
            scrollnews: "/common/ad.php",
            news: "/news/init.php",
            newsDetail: "/news/text_news_details.php",
            picDetail: "/news/pic_news_details.php"
        })
        mod.value('remoteServerDomain',"http://42.51.153.179");
    }
})();
