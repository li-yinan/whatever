'use strict';
(function() {
    var mod = angular.module('whateverApp');
    if(/8848|7999/.test(location.host)){
        mod.value('dataUrl', {
            index: "/mock/index.json",
            community: "/mock/community.json",
            time: "/mock/getTime.json",
            serviceTicket: "/mock/submitService.json",
            scrollnews: "/mock/scrollnews.json",
            news: "/mock/news.json",
            newsDetail: "/mock/newsdetail.json",
            logout: "/mock/logout.json",
            login: "/mock/login.json",
            register: "/mock/register.json",
            picDetail: "/mock/picdetail.json"
        });
        mod.value('remoteServerDomain',"http://" + location.host);
    } else {
        mod.value('dataUrl', {
            //首页
            index: "/common/init.php",
            community: "/water_and_electricity/get_communities.php",
            time: "/water_and_electricity/get_time.php",
            serviceTicket: "/water_and_electricity/set_order.php",
            scrollnews: "/common/ad.php",
            news: "/news/init.php",
            newsDetail: "/news/text_news_details.php",
            logout: "/landing/unlanding.php",
            login: "/landing/landing.php",
            register: "/landing/register.php",
            picDetail: "/news/pic_news_details.php"
        });
        mod.value('remoteServerDomain',"http://42.51.153.179");
    }
})();
