   

function LoadNews() {
   
           // create a feed control
           var mlbFeeds = new google.feeds.FeedControl();
     
           mlbFeeds.addFeed("http://mlb.mlb.com/partnerxml/gen/news/rss/mlb.xml", "MLB Official");
		   mlbFeeds.addFeed("http://feeds.cbssports.com/cbssportsline/mlb_news", "Sportsline");
		   mlbFeeds.addFeed("http://sports.espn.go.com/espn/rss/mlb/news", "ESPN");
		   mlbFeeds.addFeed("http://www.covers.com/rss/rss_articles.aspx?topic=sport/baseball/mlb", "Covers.com");
           mlbFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           mlbFeeds.setNumEntries(8);
           mlbFeeds.draw(document.getElementById("news"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
       }


function LoadNYT(){

           // create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://www.nytimes.com/services/xml/rss/nyt/Baseball.xml", "Top Stories : MLB (NYT.com)");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(5);
           oneFeeds.draw(document.getElementById("nyt"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});


}




function LoadNL(){

           // create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://rss.scout.com/rss.aspx?&p=18&nid=249&cat=8", "National League News");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(5);
           oneFeeds.draw(document.getElementById("nl"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});


}


function LoadBaseball(){
	   // create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://baseballdeworld.com/feed/", "Baseball De World");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(5);
           oneFeeds.draw(document.getElementById("bdw"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});

}

function LoadIntl(){
	   // create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://www.mister-baseball.com/feed/", "International Headlines");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(5);
           oneFeeds.draw(document.getElementById("intlbball"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});

}

function LoadBlogs(){
	   // create a feed control
           var blogFeeds = new google.feeds.FeedControl();
   
           blogFeeds.addFeed("http://www.baseballdailydigest.com/feed/", "Baseball Daily Digest Blog");
           blogFeeds.addFeed("http://feeds.feedburner.com/Bottom9", "Bottom 9 Blog");
           blogFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           blogFeeds.setNumEntries(5);
           blogFeeds.draw(document.getElementById("bballblogs"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});

}

function LoadPlayer(){
	   // create a feed control
           var playerFeeds = new google.feeds.FeedControl();
   
           playerFeeds.addFeed("http://feeds.cbssports.com/cbssportsline/mlbplayerupdates", "MLB Player Updates (CBSSportsline");
	playerFeeds.addFeed("http://baseballanalysts.com/index.xml", "BaseballAnalysts.com");
           
           playerFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           playerFeeds.setNumEntries(8);
           playerFeeds.draw(document.getElementById("player_news"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});

}






function LoadAL(){

           // create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://rss.scout.com/rss.aspx?&p=18&nid=248&cat=8", "American League News");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(5);
           oneFeeds.draw(document.getElementById("al"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});


}


function LoadChatter(){// create a feed control
           var oneFeeds = new google.feeds.FeedControl();
   
           oneFeeds.addFeed("http://www.baseballthinkfactory.org/files/gamechatter/rss_2.0/", "Daily Game Chatter");
           oneFeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
           oneFeeds.setNumEntries(10);
           oneFeeds.draw(document.getElementById("gamechatter"),
                            {drawMode : google.feeds.FeedControl.DRAW_MODE_LINEAR});


}





function LoadSlideShow() {
    var feed  = "http://www.metacafe.com/tags/ejercicios/rss.xml";
    var options = {displayTime:2000, transistionTime:600, scaleImages:true};
    var ss = new GFslideShow(feed, "slideShow", options);
  }



