// JavaScript Document

// NEWS

 function loadNews() {
  
   var feedControl2 = new google.feeds.FeedControl();
	feedControl2.addFeed("http://feeds.feedburner.com/fodors/travel-news?format=xml", "Fodors.com");
	feedControl2.addFeed("http://feeds.feedburner.com/weblogsinc/gadling", "Gadling");
	feedControl2.addFeed("http://feeds.feedburner.com/worldhum?format=xml", "WorldHum");
	feedControl2.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	feedControl2.setNumEntries(5);
	feedControl2.draw(document.getElementById("news"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
 
   }
   
   function loadHotels() {
  
   var feedControl2 = new google.feeds.FeedControl();
	feedControl2.addFeed("http://www.shermanstravel.com/blogs/hotel_buzz/feed", "ShermansTravel.com Hotel Buzz");
	feedControl2.addFeed("http://hotels.travelzoo.com/rss/", "Travelzoo.com Hotel Deals");
	feedControl2.addFeed("http://www.cheapticketlinks.org/feed/", "Cheap Ticket Links");
	feedControl2.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	feedControl2.setNumEntries(8);
	feedControl2.draw(document.getElementById("hotelnews"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
 
   }
   
   function loadAirlines() {
  
   var feedControl2 = new google.feeds.FeedControl();
	feedControl2.addFeed("http://deals.travelzoo.com/rss/all/", "Travelzoo.com Deals");
	feedControl2.addFeed("http://www.independenttraveler.com/feeds/rss/bargains.xml", "The Independent Traveler Bargains");
	feedControl2.addFeed("http://www.cheapticketlinks.org/feed/", "Cheap Ticket Links");
	feedControl2.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	feedControl2.setNumEntries(4);
	feedControl2.draw(document.getElementById("airnews"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
 
   }
   
   
// DEALS

function loadDeals() {
  
   var feedControl2 = new google.feeds.FeedControl();
	feedControl2.addFeed("http://deals.travelzoo.com/rss/all/", "Travelzoo.com Deals");
	feedControl2.addFeed("http://www.independenttraveler.com/feeds/rss/bargains.xml", "The Independent Traveler Bargains");
	feedControl2.addFeed("http://www.cheapticketlinks.org/feed/", "Cheap Ticket Links");
	feedControl2.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	feedControl2.setNumEntries(8);
	feedControl2.draw(document.getElementById("dealnews"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
 
   }
   
  function loadDestinations() {
  
   var feedControl2 = new google.feeds.FeedControl();
	feedControl2.addFeed("http://feeds.concierge.com/ConciergeTravelFeatures", "Concierge.com");

	feedControl2.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
	feedControl2.setNumEntries(8);
	feedControl2.draw(document.getElementById("destnews"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});
 
   }  
   
   
   
   

    
   

 