function linearFeed() {
   
           // create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://www.bing.com/search?q=health+news&form=QBLH&qs=n&sk=&sc=8-0&format=rss", "Health News Links");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(8); /**can change the number of entries**/
           oneFeeds.draw(document.getElementById("linear"),
	 {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
       }

	   function linearFeed2() {
   
           // create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://www.medicalnewstoday.com/rss/featurednews.xml", "Health News Today");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(5); /**can change the number of entries**/
           oneFeeds.draw(document.getElementById("linear2"),
	 {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
       }
	   function linearFeed3() {
   
           // create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://www.medicinenet.com/rss/dailyword.xml", "Medical Term of the Day");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(1); /**can change the number of entries**/
           oneFeeds.draw(document.getElementById("linear3"),
	 {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
       }
	   

   function multiFeed() {
   
           // create a feed control
           var multiFeeds = new google.feeds.FeedControl();
   
			multiFeeds.addFeed("http://rssfeeds.webmd.com/rss/rss.aspx?RSSSource=RSS_PUBLIC", "WebMD");
			multiFeeds.addFeed("http://feeds.feedburner.com/mnt/healthnews?format=xml", "Medical News Today");
			multiFeeds.addFeed("http://feeds.bbci.co.uk/news/health/rss.xml", "BBC Health");
			multiFeeds.addFeed("http://feeds.feedburner.com/allhealthnews?format=xml", "MedIndina");
						multiFeeds.addFeed("http://www.mayoclinic.com/rss/MayoFull.xml", "Mayo Clinic");
   
           multiFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           multiFeeds.setNumEntries(15);
           multiFeeds.draw(document.getElementById("feedsmulti"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
       }
	   
		   
	   
	   