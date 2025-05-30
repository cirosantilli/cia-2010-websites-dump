  
  // tabbed feeds

 function loadNewsTabs() {
  
   var feedControl2 = new google.feeds.FeedControl();
   feedControl2.addFeed("http://feeds.concierge.com/ConciergeTravelFeatures", "Concierge.com");
   feedControl2.addFeed("http://www.worldtravelguide.net/news/rss.ehtml", "World Travel Guide News");
   feedControl2.addFeed("http://www.telegraph.co.uk/travel/rss", "Telegraph.co.uk : Travel");
   feedControl2.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
   feedControl2.draw(document.getElementById("news"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
 
   }
   
   
   
   function loadHotel() {
  
   var feedControl2 = new google.feeds.FeedControl();
   feedControl2.addFeed("http://www.ttglive.com/c/journal/journalrss?articleType=Hotels", "TTG : Hotels");
   feedControl2.addFeed("http://feeds.hotelnewsresource.com/HotelNewsResource", "Hotel News Resource");
   feedControl2.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
   feedControl2.draw(document.getElementById("news"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
 
   }
   