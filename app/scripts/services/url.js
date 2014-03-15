'use strict';

angular.module('whateverApp')
  .value('dataUrl', {
      index: "/mock/index.json",
      scrollnews: "/mock/scrollnews.json",
      news: "/mock/news.json",
      newsDetail: "/mock/newsdetail.json",
      picDetail: "/mock/picdetail.json"
      //scrollnews: "/common/ad.php",
      //news: "/news/init.php",
      //newsDetail: "/news/text_news_details.php",
      //picDetail: "/news/pic_news_details.php"
  })
  .value('remoteServerDomain',"http://localhost:8848/");
  //.value('remoteServerDomain',"http://42.51.153.179");
