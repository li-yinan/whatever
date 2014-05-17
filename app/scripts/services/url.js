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
            getUserName: "/mock/getUserName.json",
            getHistory: "/mock/getHistory.json",
            getBrand: "/mock/getBrand.json",
            getPrice: "/mock/getPrice.json",
            getUsedtime: "/mock/getUsedtime.json",
            getMileage: "/mock/getMileage.json",
            getGearbox: "/mock/getGearbox.json",
            carInit: "/mock/carInit.json",
            getCarDetail: "/mock/getCarDetail.json",
            picDetail: "/mock/picdetail.json",
            get_choose_info: "/mock/get_choose_info.json",
            get_result_count: "/mock/get_result_count.json"
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
            getUserName: "/landing/get_username",
            getHistory: "/water_and_electricity/get_history.php",
            getBrand: "/second_hand_car/get_brand_list.php",
            getPrice: "/second_hand_car/get_price_list.php",
            getUsedtime: "/second_hand_car/get_usedtime_list.php",
            getMileage: "/second_hand_car/get_mileage_list.php",
            getGearbox: "/second_hand_car/get_gearbox_list.php",
            carInit: "/second_hand_car/init.php",
            getCarDetail: "/second_hand_car/car_info_details.php",
            picDetail: "/news/pic_news_details.php",
            get_choose_info: "/second_hand_car/get_choose_info.php",
            get_result_count: "/second_hand_car/get_result_count.php"
        });
        mod.value('remoteServerDomain',"http://42.51.153.179");
    }
})();
