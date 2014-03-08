'use strict';

angular.module('whateverApp')
  .value('dataUrl', {
      scrollnews: "/mock/scrollnews.json",
      news: "/mock/news.json",
      newsDetail: "/mock/newsdetail.json",
      picDetail: "/mock/picdetail.json"
  })
  //.value('remoteServerDomain',"http://localhost:8848/");
  .value('remoteServerDomain',"");
