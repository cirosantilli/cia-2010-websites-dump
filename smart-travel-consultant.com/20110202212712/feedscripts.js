
 
  // tabbed feeds

 function loadNewsTabs() {
  
   var feedControl2 = new google.feeds.FeedControl();
      feedControl2.addFeed("http://travel.sohu.com/rss/lvyouxinwen.xml", "Sohu.com : 旅游新闻");
   feedControl2.addFeed("http://rss.xinhuanet.com/rss/travel.xml", "&#26032;&#21326;&#32593;-&#26053;&#28216;&#20449;&#24687;");
   feedControl2.addFeed("http://www.traveldaily.cn/rss/online.html", "环球旅讯");

   feedControl2.draw(document.getElementById("news"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
 
   }
    

    
 