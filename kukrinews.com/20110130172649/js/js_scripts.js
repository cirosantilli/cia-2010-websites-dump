function index_news_feed() {

	var oneFeeds = new google.feeds.FeedControl(); 
	
	oneFeeds.addFeed("http://www.thehimalayantimes.com/rss.php", "Himalayan News");
	oneFeeds.addFeed("http://www.bignewsnetwork.com/?rss=7399985502eaed63", "Big News Network");
	oneFeeds.addFeed("http://www.telegraphnepal.com/rss.php?PHPSESSID=dfe1d41fd4e2ed2823e01d7890cef9e2", "Telegraph Nepal");
	oneFeeds.addFeed("http://newsrss.bbc.co.uk/rss/newsonline_world_edition/south_asia/rss.xml", "BBC S Asia");
	oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	oneFeeds.setNumEntries(10); 
	oneFeeds.draw(document.getElementById("index_news_rss"), {drawMode: google.feeds.FeedControl.DRAW_MODE_TABBED});
}	


function sports_news_feed() {

	var oneFeeds = new google.feeds.FeedControl(); 
	
	oneFeeds.addFeed("http://nepalisports.com/feed/", "NepaliSports.com");
	oneFeeds.addFeed("http://www.cricinfo.com/rss/content/story/feeds/0.xml", "CricInfo");
	oneFeeds.addFeed("http://www.cricket.com.np/new/feed/", "Nepal Cricket");
	oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	oneFeeds.setNumEntries(10); 
	oneFeeds.draw(document.getElementById("sports_news_rss"), {drawMode: google.feeds.FeedControl.DRAW_MODE_TABBED});
}	


function entertainment_news_feed() {

	var oneFeeds = new google.feeds.FeedControl(); 
	
	oneFeeds.addFeed("http://www.thesun.co.uk/sol/homepage/feeds/rss/article1999685.ece", "The Sun");
	oneFeeds.addFeed("http://feeds.feedburner.com/thr/international", "Hollywood Reporter");
	oneFeeds.addFeed("http://feeds.feedburner.com/glamsham/MBba", "GlamSham News");
	oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	oneFeeds.setNumEntries(10); 
	oneFeeds.draw(document.getElementById("entertainment_news_rss"), {drawMode: google.feeds.FeedControl.DRAW_MODE_TABBED});
}	


function biz_news_feed() {

	var oneFeeds = new google.feeds.FeedControl(); 
	
	oneFeeds.addFeed("http://www.nepalbiznews.com/newsdata/rss/rss.php?wcCategory=0&wcHeadlines=5", "Nepal BizNews");
	oneFeeds.addFeed("http://newsrss.bbc.co.uk/rss/newsonline_world_edition/business/rss.xml", "BBC Business");
	oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	oneFeeds.setNumEntries(10); 
	oneFeeds.draw(document.getElementById("biz_news_rss"), {drawMode: google.feeds.FeedControl.DRAW_MODE_TABBED});
}


