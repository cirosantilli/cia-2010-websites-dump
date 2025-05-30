  
  
 function loadNewsTabs() {
  
   var newsfeeds = new google.feeds.FeedControl();
   newsfeeds.addFeed("http://www.elpais.com/rss/rss_section.html?anchor=elpporint", "ElPa&iacute;s.com");
   newsfeeds.addFeed("http://rss.wn.com/Spanish/top-stories", "WN Network");
   newsfeeds.addFeed("http://newsrss.bbc.co.uk/rss/spanish/latin_america/rss.xml", "BBCMundo");
   newsfeeds.addFeed("http://www.ipsnoticias.net/rss/titulares.xml", "IPS");
   newsfeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
   newsfeeds.setNumEntries(5);
   newsfeeds.draw(document.getElementById("news"),
                         {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
 
   }
 
  
  
  
  function loadIntlTabs() {
    
     var intlfeeds = new google.feeds.FeedControl();
     intlfeeds.addFeed("http://news.google.com/news?ned=es_ve&topic=w&output=rss", "Google");
     intlfeeds.addFeed("http://www.elpais.com/rss/rss_section.html?anchor=elpporint", "ElPa&iacute;s.com");
     intlfeeds.addFeed("http://www.voanews.com/spanish/customCF/RecentStoriesRSS.cfm?keyword=Americas", "VOA");
     intlfeeds.addFeed("http://www.laprensa.com.ar/ResourcesManager.aspx?Resource=Rss.aspx&Rss=7", "La Prensa");
     intlfeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
     intlfeeds.setNumEntries(4);
     intlfeeds.draw(document.getElementById("intlnews"),
                           {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
   
     }
   
    
function loadEconTabs() {
    
     var econfeeds = new google.feeds.FeedControl();
     econfeeds.addFeed("http://www.infolatam.com/rss.jsp", "Infolatam.com");
     econfeeds.addFeed("http://www.ipsnoticias.net/rss/economia.xml", "IPS");
     econfeeds.addFeed("http://www.lanacion.com.ar/herramientas/rss/index.asp?categoria_id=6373", "WSJOnline.com");
     econfeeds.addFeed("http://www.voanews.com/spanish/customCF/RecentStoriesRSS.cfm?keyword=Economy%20and%20Finance", "VOA");
     
     econfeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
     econfeeds.setNumEntries(4);
     econfeeds.draw(document.getElementById("econnews"),
                           {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
   
     }
    
    
    
function loadDepTabs() {
    
     var depfeeds = new google.feeds.FeedControl();
     depfeeds.addFeed("http://espndeportes-assets.espn.go.com/rss/news?cc=3888", "ESPN");
     depfeeds.addFeed("http://www.eluniversal.com/rss/dep_avances.xml", "El Universal");
     depfeeds.addFeed("http://rss.marca.com/rss/descarga.htm?data2=425", "Marca");
     depfeeds.addFeed("http://www.ultimahora.com/adjuntos/rss/UHDeportes.xml", "Ultima Hora");
     depfeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
     depfeeds.setNumEntries(4);
     depfeeds.draw(document.getElementById("depnews"),
                           {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
   
     }
   
        

    
function loadTecTabs() {
    
     var tecfeeds = new google.feeds.FeedControl();
     tecfeeds.addFeed("http://espanol.news.yahoo.com/rss/tecnologia", "Yahoo! : Tecnolog&iacute;a");
     tecfeeds.addFeed("http://www.terra.es/tecnologia/rss/noticias.rss", "Terra");
     tecfeeds.addFeed("http://www.pcworldenespanol.com/pcwla2.nsf/noticiasrss", "PC World");
     tecfeeds.setLinkTarget(google.feeds.LINK_TARGET_BLANK);
     tecfeeds.setNumEntries(5);
     tecfeeds.draw(document.getElementById("tecnews"),
                           {drawMode : google.feeds.FeedControl.DRAW_MODE_TABBED});
   
     }
  
