
function feedNews() {
   
           // create a feed control
           var feedlist = new google.feeds.FeedControl();
   
           feedlist.addFeed("http://news.bbc.co.uk/rss/newsonline_world_edition/technology/rss.xml", "BBC News");
           feedlist.addFeed("http://www.nytimes.com/services/xml/rss/nyt/Technology.xml", "NYT");
	   feedlist.addFeed("http://news.cnet.com/2547-1_3-0-20.xml", "CNET");
           feedlist.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           feedlist.setNumEntries(5);
           feedlist.draw(document.getElementById("news"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
       }
      
function feedNews2() {
   
           // create a feed control
           var feedlist = new google.feeds.FeedControl();
   
	   
           feedlist.addFeed("http://feeds.reuters.com/reuters/technologyNews?format=xml", "Reuters");
   	   feedlist.addFeed("http://pheedo.msnbc.msn.com/id/3033117/device/rss/", "MSNBC");
	   feedlist.addFeed("http://www.infoworld.com/homepage/feed", "InfoWorld");
           feedlist.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           feedlist.setNumEntries(4);
           feedlist.draw(document.getElementById("news2"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
       }
        
