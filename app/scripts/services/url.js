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
            houseInit: "/mock/houseInit.json",
            housequery1: "/mock/houseInit.json",
            housequery2: "/mock/houseInit.json",
            getCarDetail: "/mock/getCarDetail.json",
            getHouseDetail: "/mock/getHouseDetail.json",
            getRentDetail: "/mock/getRentDetail.json",
            picDetail: "/mock/picdetail.json",
            get_choose_info: "/mock/get_choose_info.json",
            get_house_choose_info: "/mock/get_house_choose_info.json",
            get_rent_choose_info: "/mock/get_rent_choose_info.json",
            get_result_count: "/mock/get_result_count.json",
            get_house_result_count: "/mock/get_house_result_count.json",
            get_rent_result_count: "/mock/get_rent_result_count.json",
            getPhone: "/mock/get_phone.json",
            editPassword: "/mock/modify_pwd.json",
            getRecuitList: "/mock/getRecuitList.json",
            get_recuit_search_info: "/mock/get_recuit_search_info.json",
            get_recuit_search_result_count: "/mock/get_recuit_search_result_count.json",
            getRecuitDetail: "/mock/getRecuitDetail.json",
            adDetail: "/mock/adDetail.json",
            activity: "/mock/activity.json",
            getLoginUserName: "/mock/get_user_name.json"
        });
        mod.value('remoteServerDomain',"http://" + location.host);
    } else {
        mod.value('dataUrl', {
            //首页
            index: "/common/init.php",
            community: "/dry_clean/get_communities.php",
            time: "/dry_clean/get_time.php",
            serviceTicket: "/dry_clean/set_order.php",
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
            houseInit: "/second_hand_house/init.php",
            housequery1: "/second_hand_house/init.php",
            housequery2: "/renting_house/init.php",
            getCarDetail: "/second_hand_car/car_info_details.php",
            getHouseDetail: "/second_hand_house/second_hand_house_info_details.php",
            getRentDetail: "/renting_house/renting_house_info_details.php",
            picDetail: "/news/pic_news_details.php",
            get_choose_info: "/second_hand_car/get_choose_info.php",
            get_house_choose_info: "/second_hand_house/get_choose_info.php",
            get_rent_choose_info: "/renting_house/get_choose_info.php",
            get_result_count: "/second_hand_car/get_result_count.php",
            get_house_result_count: "/second_hand_house/get_result_count.php",
            get_rent_result_count: "/renting_house/get_result_count.php",
            getPhone: "/common/get_phone.php",
            editPassword: "/landing/modify_pwd.php",
            getRecuitList: "/recruitment/init.php",
            get_recuit_search_info: "/recruitment/get_choose_info.php",
            get_recuit_search_result_count: "/recruitment/get_result_count.php",
            getRecuitDetail: "/recruitment/recruitment_info_details.php",
            adDetail: "/activity/activity_info",
            activity: "/activity/init.php",
            getLoginUserName: "/personal_center/get_user_info.php"
        });
        mod.value('remoteServerDomain',"http://42.51.153.179");
    }
})();
