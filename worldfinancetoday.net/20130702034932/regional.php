<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>World Finance Today</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="mktstyle.css" rel="stylesheet" type="text/css">
<script language="JavaScript" type="text/JavaScript"></script>
<SCRIPT Language="JavaScript">
<!-- hide from old browsers
  // Copyright 1999, 2000 by Ray Stott
  // OK to use if this copyright is included
  // Script available at http://www.crays.com/jsc
  var TimezoneOffset = -4  // adjust for time zone
  var localTime = new Date()
  var ms = localTime.getTime()
             + (localTime.getTimezoneOffset() * 60000)
             + TimezoneOffset * 3600000
  var time =  new Date(ms)
  var hour = time.getHours()
  var minute = time.getMinutes()
  var second = time.getSeconds()
  var curTime = "" + ((hour > 12) ? hour - 12 : hour)
  if(hour==0) curTime = "12"
  curTime += ((minute < 10) ? ":0" : ":") + minute
  curTime += ((second < 10) ? ":0" : ":") + second
  curTime += (hour >= 12) ? " PM" : " AM"

//-->
</SCRIPT>


<SCRIPT LANGUAGE="JavaScript">
<!--
// Get today's current date.
var now = new Date();

// Array list of days.
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

// Array list of months.
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

// Calculate the number of the current day in the week.
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();

// Calculate four digit year.
function fourdigits(number)	{
	return (number < 1000) ? number + 1900 : number;
								}

// Join it all together
today =  days[now.getDay()] + ", " +
              months[now.getMonth()] + " " +
               date + ", " +
                (fourdigits(now.getYear())) ;

//  End -->
</script>

		<script type="text/javascript">

/***********************************************
* Local Time script- © Dynamic Drive (http://www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/

var weekdaystxt=["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

function showLocalTime(container, servermode, offsetMinutes, displayversion){
if (!document.getElementById || !document.getElementById(container)) return
this.container=document.getElementById(container)
this.displayversion=displayversion
var servertimestring=(servermode=="server-php")? 'October 10, 2008 17:29:33' : (servermode=="server-php")? '<!--#config timefmt="%B %d, %Y %H:%M:%S"--><!--#echo var="DATE_LOCAL" -->' : '<%= Now() %>'
this.localtime=this.serverdate=new Date(servertimestring)
this.localtime.setTime(this.serverdate.getTime()+offsetMinutes*60*1000) //add user offset to server time
this.updateTime()
this.updateContainer()
}

showLocalTime.prototype.updateTime=function(){
var thisobj=this
this.localtime.setSeconds(this.localtime.getSeconds()+1)
setTimeout(function(){thisobj.updateTime()}, 1000) //update time every second
}

showLocalTime.prototype.updateContainer=function(){
var thisobj=this
if (this.displayversion=="long")
this.container.innerHTML=this.localtime.toLocaleString()
else{
var hour=this.localtime.getHours()
var minutes=this.localtime.getMinutes()
var seconds=this.localtime.getSeconds()
var ampm=(hour>=12)? "PM" : "AM"
var dayofweek=weekdaystxt[this.localtime.getDay()]
this.container.innerHTML=formatField(hour, 1)+":"+formatField(minutes)+":"+formatField(seconds)+" "+ampm+" ("+dayofweek+")"
}
setTimeout(function(){thisobj.updateContainer()}, 1000) //update container every second
}

function formatField(num, isHour){
if (typeof isHour!="undefined"){ //if this is the hour field
var hour=(num>12)? num-12 : num
return (hour==0)? 12 : hour
}
return (num<=9)? "0"+num : num//if this is minute or sec field
}

</script></head>

<body>
<div id="wrap">
<div id="header">
	<img src="images/banner_01.jpg" border="0" align="top"><img src="images/banner_02.jpg" border="0" align="top"><img src="images/banner_03.jpg" border="0" align="top"><img src="images/banner_04.jpg" border="0" align="top">
</div>
<div id="timewrap">
	<div id="todaydate"><script>document.write(""+today);</script></div>
    <div id="worldtime">
    	<!--<span class="cityname">London:</span><span id="timecontainer1"></span>
        &nbsp;&nbsp;|&nbsp;&nbsp;<span class="cityname">Madrid:</span> <span id="timecontainer2"></span>
	    &nbsp;&nbsp;|&nbsp;&nbsp;<span class="cityname">New York:</span> <span id="timecontainer3"></span>
        &nbsp;&nbsp;|&nbsp;&nbsp;<span class="cityname">Tokyo:</span> <span id="timecontainer4"></span>
		<script type="text/javascript">
        new showLocalTime("timecontainer1", "server-php", 0, "short")
        new showLocalTime("timecontainer2", "server-php", +60, "short")
        new showLocalTime("timecontainer3", "server-php", -300, "short")
        new showLocalTime("timecontainer4", "server-php", +480, "short")
        </script>-->
     </div><!--end worldtime-->
</div><!--end timewrap-->
   <div id="nav">
<ul>
	<li><a href="index.php" target="_parent">Home</a></li>
    <li><a href="regional.php" class="selected" target="_parent">Regional / Emerging Markets</a></li>
	<li><a href="commodities.php" target="_parent">Commodities</a></li>
    <li><a href="currencies.php" target="_parent">Currencies</a></li>
    <li><a href="equities.php" target="_parent">Equity Markets</a></li>
    <li><a href="bonds.php" target="_parent">Bonds and Rates</a></li>
</ul>
</div>

<div id="main">

<div id="col4">

<div id="reg_am_news" class="box boxbrdr">
<h2>Americas</h2>
<h4>Yahoo! Finance - US Market Resources</h4>
<div>
<ul>
<li><a href='http://finance.yahoo.com/news/enticing-dividend-paying-stock-picks-040001023.html' target="_blank">Enticing Dividend-Paying Stock Picks</a><br />
Angling for more yield from your portfolio? Who isn't in this low-rate environment? Sure, there's ri
<li><a href='http://finance.yahoo.com/news/days-good-ipo-strategy-requires-194556383.html' target="_blank">These days, a good IPO strategy requires keeping tabs on Ben Bernanke</a><br />
IPOs in the US have been on a roll this year, with companies on track to raise the most money by g
<li><a href='http://finance.yahoo.com/news/next-wave-tech-ipos-big-174001735.html' target="_blank">Investors are tired of giving their money to tech founders without strings attached</a><br />
The latest round of tech IPOs has featured multi-class stock structures that give company founders a
<li><a href='http://finance.yahoo.com/news/paid-investor-133030229.html' target="_blank">How to Get Paid to Be an Investor</a><br />
There are so many advantages to selling puts to buy stocks you want to own. It’s a safe and reliab
<li><a href='http://finance.yahoo.com/news/guess-buying-amid-june-sell-044453511.html' target="_blank">Guess Who Was Buying Amid the June Sell-Off</a><br />
Fears arising from a tapering of stimulus in the U.S. may have resulted in a sell-off in equity and
<li><a href='http://finance.yahoo.com/news/buy-hold-dead-long-live-124903225.html' target="_blank">Buy-and-Hold is Dead . Long Live Buy-and-Hold</a><br />
In recent years, buy-and-hold has suffered its share of slings and arrows by those with novel theori
<li><a href='http://finance.yahoo.com/news/5-great-comeback-stocks-040001515.html' target="_blank">5 Great Comeback Stocks</a><br />
These companies are putting a troubled past behind them. The stocks are risky, but they offer big op
<li><a href='http://finance.yahoo.com/news/secret-income-strategy-generate-exceptional-124542643.html' target="_blank">A Secret Income Strategy to Generate Exceptional Investment Return</a><br />
Every dividend-growth stock has a starting point for paying a dividend. Exceptional wealth isn't gen
<li><a href='http://finance.yahoo.com/news/avaya-delayed-ipo-appears-back-190422748.html' target="_blank">Avaya’s delayed IPO appears to be back on track amid a hot market for public offerings</a><br />
The IPO for US telecommunications company Avaya, which first filed for a $1 billion public offering
<li><a href='http://finance.yahoo.com/news/brazil-economy-weak-ipos-still-232605869.html' target="_blank">Brazil’s economy is weak, but its IPOs are still going strong</a><br />
Brazil’s GDP growth has been disappointing, but one company remains bullish on the economy: cement
<li><a href='http://finance.yahoo.com/news/sec-documents-show-nasdaq-computers-185524213.html' target="_blank">How Facebook’s IPO was bungled by Nasdaq’s computers</a><br />
At last, electronic exchange Nasdaq has agreed to cough up $10 million dollars to settle SEC charges
<li><a href='http://finance.yahoo.com/news/tesla-shares-race-past-100-151306158.html' target="_blank">Tesla shares race past $100 as investors shrug off Better Place bankruptcy</a><br />
Are you one of those investors shorting Tesla Motors? Best to stay in bed today. The Silicon Valley
</ul></div>


<h4>Wall Street Journal</h4>
<div>
<ul>
<li><a href='http://online.wsj.com/article/SB10001424127887323297504578579460312802342.html?mod=rss_economy' target="_blank">U.S. Factories Buck Global Growth Slowdown</a><br />
America's factories accelerated slightly in June, easing fears of a deeper U.S. slowdown, but weakne
<li><a href='http://online.wsj.com/article/SB10001424127887324577904578559933968739000.html?mod=rss_economy' target="_blank">Revitalized Car Industry Cranks Up U.S. Exports</a><br />
The U.S. auto industry, in tatters just four years ago, is emerging as an export powerhouse, driven
<li><a href='http://online.wsj.com/article/SB10001424127887323297504578579430486604200.html?mod=rss_economy' target="_blank">Construction Spending Hits 3½-Year High</a><br />
Spending on construction projects in the U.S. rose to the highest level in more than 3½ years in Ma
<li><a href='http://online.wsj.com/article/SB10001424127887324251504578580033053986640.html?mod=rss_economy' target="_blank">U.S. Corporations Paid 12.6% Tax Rate in 2010</a><br />
A government watchdog agency found that large, profitable U.S. companies on average paid U.S. federa
<li><a href='http://online.wsj.com/article/SB10001424127887324251504578577321508114396.html?mod=rss_economy' target="_blank">Forces Converge in Emerging Markets</a><br />
Countries from Turkey to Brazil to China are getting hit by a brutal combination of events, as econo
<li><a href='http://online.wsj.com/article/SB10001424127887324251504578579790726593224.html?mod=rss_economy' target="_blank">Clouds Over Canada Damp Loonie</a><br />
Canada's slowing growth and high levels of household debt are sapping the strength of its currency.
<li><a href='http://online.wsj.com/article/SB10001424127887324251504578579292237914344.html?mod=rss_economy' target="_blank">Inside China's Bank-Rate Missteps</a><br />
A rare peek into the actions of China's leaders in a month when a Chinese cash crunch spooked global
<li><a href='http://online.wsj.com/article/SB10001424127887323836504578553223951565636.html?mod=rss_economy' target="_blank">China Home Prices Jumped in May</a><br />
Housing prices in China's 70 major cities in May registered their highest annual growth rate in more
</ul></div>

</div>
<!--</div>

<div id="col2">-->

<div id="europenews" class="box boxbrdr">
<h2>Europe</h2>
<h4>Guardian.co.uk - Business</h4>
<div>
</ul></div>


<br />
<h4>Europe Business Resources - BigNewsNetwork.com</h4>
<div>
<ul>
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215561302/scat/baf10b3527f6df38' target="_blank">Nokia to buy control of its joint venture with Siemens</a><br />
NEW YORK - Mobile handset maker Nokia agreed on Monday to buy Siemens's half of a telecommunications equipment joint venture for about 1.7 billion euros ($2.2 billion) as Nokia continued to struggle with challenges in its core business. The deal will see Nokia pay less than 2 billion euros ($2.60 billion) for Siemens' 50 percent stake in the joint venture. Nokia has failed to maintain its 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215561301/scat/baf10b3527f6df38' target="_blank">Vatican priest seeks house arrest while claiming to have helped friends</a><br />
ROME - Monsignor Nunzio Scarano, a Vatican priest arrested in a 17 million pounds money laundering plot has admitted to have behaved wrongly while claiming he was only trying to help out friends. Dubbed 'Don 500' because the 500 euro note is his favourite banknote, Scarano was questioned for three hours Monday by Judge Barbara Callari. His lawyer Silverio Sica said that Scarano, who has 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215561297/scat/baf10b3527f6df38' target="_blank">Steinway accepts $438mn Kohlberg buyout offer</a><br />
NEW YORK - Famous piano maker Steinway and Sons has entered into a definitive agreement to be acquired by an affiliate of New York based Kohlberg Company, a global private equity investment firm, for around $438 million (288 million pounds). Under the terms of the agreement, an affiliate of Kohlberg will pay $35.00 per share in cash for Steinway's stock, representing a premium of 33% based on 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215566670/scat/baf10b3527f6df38' target="_blank">US spying report could harm ties with Italy Minister</a><br />
Reports that the US spied on the European Union and Italian diplomats must be verified but if proved to be true, they will "compromise" bilateral ties, Italian Defence Minister Mario Mauro has said. "If we are allies, it is unacceptable that someone inside the relationship acts as the Soviet Union did with its satellites," Mauro told La Repubblica TV in a reference to the Cold War era. "But our 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215547188/scat/baf10b3527f6df38' target="_blank">Outraged France Germany say US bugging of EU offices totally unacceptable</a><br />
France and Germany have asked the United States to come clean over reports that its top intelligence services have been spying on key European Union offices. A report in Germany's Der Spiegel magazine said European Union offices in the US and Europe had been bugged by the National Security Agency (NSA). The magazine claimed that other 'targets' included the French, Italian and Greek embassies 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215566726/scat/baf10b3527f6df38' target="_blank">Marriott continues European growth with Paris.</a><br />
Marriott International announced that the 298-room Paris Marriott Opera Ambassador Hotel will join its portfolio of more than 3,800 properties worldwide on 1st July 2013 under a franchise agreement with WB AMBASSADOR 
</ul></div>


</div>

<div id="asiapacnews" class="box boxbrdr">
<h2>Asia / Pacific</h2>
<h4>BusinessWeek.com</h4>
<div>
<ul>
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/08hfxfb1-e0/lessons-from-apples-ipad-adventure-in-china-02242012.html' target="_blank">Lessons from Apple's iPad Adventure in China</a><br />
Among the basics for the Chinese market: Know who your regulators are
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/gNJypbEWCAw/mao-s-red-flag-returning-to-drive-china-leaders-from-audi-cars.html' target="_blank">A Comeback for Chairman Mao's Limo</a><br />
Chairman Mao Zedong&rsquo;s Red Flag limousine is making a comeback after a $280 million overhaul, seeking to regain its standing as the ride of Chinese leaders from Volkswagen AG&rsquo;s Audi.
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/eLbt9OG0S8k/chinas-savers-wise-up-to-abovemarket-rates-02232012.html' target="_blank">China's Savers Wise Up to Above-Market Rates</a><br />
The search for higher yields may undermine the country's banking system
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/ITMsH_HrfYU/for-spain-an-economic-lifeline-from-china-02232012.html' target="_blank">China Gives Economic Lifeline to Spain</a><br />
Though they account for less than 3 percent of Spain&rsquo;s immigrants, Chinese make up nearly 23 percent of the country&rsquo;s foreign-born entrepreneurs
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/7CRwAVfT9b0/shanghai-has-a-smog-problem-too' target="_blank">Shanghai Has a Smog Problem, Too</a><br />
Shanghai is registering hazardous readings of particulate matter, even as Beijing experiences an additional day of thick smog
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/JJEqmfb0sA8/why-pollution-in-beijing-will-persist' target="_blank">Why Pollution in Beijing Will Persist</a><br />
Beijing faces a daunting array of problems in tackling the city's pollution
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/yflCF0er6zI/chinas-economy-is-on-the-mend-but-concerns-remain' target="_blank">China's Economy Is on the Mend, but Concerns Remain</a><br />
China's GDP growth topped estimates, but debt and a shaky real estate market leave cause for concerns
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/6ho1nKFrgVs/singapores-lee-hsien-loong-talks-global-economics' target="_blank">Singapore's Lee Hsien Loong Talks Global Economics</a><br />
Singapore's prime minister welcomes the U.S.'s renewed focus on Southeast Asia
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/_b9dDOqIrHQ/myanmar-wants-to-be-the-next-tiger' target="_blank">Myanmar Wants to Be the Next Tiger</a><br />
Myanmar's cheap labor, abundant mineral wealth, and agricultural promise could finally be tapped if Washington decides upcoming elections are fair
<li><a href='http://rss.businessweek.com/~r/bw_rss/asiaindex/~3/6pit9O1syFQ/video' target="_blank">China Web Stocks Surge</a><br />
Youku Inc., owner of China&rsquo;s most-popular online video site, plans to acquire competitor Tudou Holdings Ltd
</ul></div>


<br />
<h4>Asia Business Resources - BigNewsNetwork.com</h4>
<div>
<ul>
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215561302/scat/5e8a9e9456185a7e' target="_blank">Nokia to buy control of its joint venture with Siemens</a><br />
NEW YORK - Mobile handset maker Nokia agreed on Monday to buy Siemens's half of a telecommunications equipment joint venture for about 1.7 billion euros ($2.2 billion) as Nokia continued to struggle with challenges in its core business. The deal will see Nokia pay less than 2 billion euros ($2.60 billion) for Siemens' 50 percent stake in the joint venture. Nokia has failed to maintain its 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215561298/scat/5e8a9e9456185a7e' target="_blank">Renewed call to ban Chinese lanterns after UK recycling plant gutted</a><br />
LONDON - More than 200 firefighters battled for hours on Monday to contain one of the biggest blaze in recent times in a plastic recycling plant near Birmingham after about 100,000 tonnes of plastic material accidently caught fire apparently due to a Chinese lantern. Firefighters were called around 11 pm on Sunday to the scene of the blaze at the Jayplas recycling facility in Smethwick, near 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215565992/scat/5e8a9e9456185a7e' target="_blank">Finnair British Airways Japan Airlines unite</a><br />
Finnair has applied to join British Airways and Japan Airlines in a joint business agreement to improve revenues and competitiveness on flights between Europe and Japan. British Airways and Japan Airlines entered into a joint business agreement in October 2012 to increase flight choices. The addition of Finnair to the joint business agreement would further enhance customer benefits, 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215565993/scat/5e8a9e9456185a7e' target="_blank">Chinas Reforms Need No Wrist Cutting</a><br />
from the interbank market a week-and-a-half ago, followed by equally fast liquidity injections, is an example of how China can support reforms to modernize the economy without harming its growth outlook. In this particular case, measures were taken to restrain an informal network of money lenders while quickly restoring and protecting the financial intermediation by the regulated banking 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215565977/scat/5e8a9e9456185a7e' target="_blank">Worlds Second Biggest IPO Makes Debut</a><br />
The world&amp;#039;s second biggest initial public offering (IPO) of the year, a $4 billion new listing by Suntory Beverage and Food, makes its debut on the Tokyo stock exchange this week. But it does so amid a backdrop of volatile equity markets, something that may not bode well for trading in the new shares. &amp;quot;If you look at the hype you get with big IPOs and the big gains you often get in the 
<li><a href='http://www.bignewsnetwork.com/index.php/sid/215565994/scat/5e8a9e9456185a7e' target="_blank">Global Markets Asian stocks perkier Nikkei extends gains</a><br />
Reset SYDNEY (July 2): Asian stocks rose on Tuesday with Tokyo&amp;#039;s Nikkei extending gains after encouraging manufacturing data in Europe and the United States helped cheer a market fretting about a slowing Chinese economy.MSCI&amp;#039;s broadest index of Asia-Pacific shares outside Japan rose 0.5 percent in early trade, reversing Monday&amp;#039;s 0.3 percent fall. Australian shares climbed 1.8 
</ul></div>


</div>

<div id="middleeastnews" class="boxbrdr">
<h2>Middle East</h2>
<h4>FT.com | Middle East</h4>

  <div>
</ul></div>

<br />


<h4>AME INFO | Finance and Economy</h4>
<div>
<ul>
<li><a href='http://www.ameinfo.com/algosaibi-offer-72bn-debt-347271' target="_blank">Algosaibi to make new offer on $7.2bn debt</a><br />
Saudi Arabia's Ahmad Hamad Algosaibi & Brothers Co plans to make a new offer on $7.2bn of debt to creditors including BNP Paribas (BNP) and Standard Chartered, as it seeks to bounce back from the Middle Easts biggest corporate default, Bloomberg has reported. Algosaibi, which runs a bottling plant for PepsiCo Inc. products in the kingdom and has interests ranging from finance to shipping, will propose the new deal in the coming months, said CEO Simon Charlton. Four years ago, creditors rejected a proposal from Algosaibi. The group wants to get back to focusing on business and gain access to credit markets, said Charlton, who is also Algosaibis chief restructuring officer.
<li><a href='http://www.ameinfo.com/iran-non-oil-exports-topped-97bln-1q-347270' target="_blank">Iran says non-oil exports topped $9.7bln in 1Q</a><br />
The Iranian Customs Administration has said its non-oil exports have exceeded $9.7bn in the first quarter of the current Iranian year (started March 21), despite the US-led Western sanctions imposed against the country, Fars news has reported. The country exported 21.699 tonnes of various types of goods including gas condensates, from March 21 to June 21. Non-oil commodities accounted for $5.112bn of the total $9.751bn worth of goods exported in the first three months, while the export value of gas condensates and petrochemicals stood at $2.096bn and $2.542bn, respectively, the figures showed.
<li><a href='http://www.ameinfo.com/regulators-probing-insurers-iran-links-347269' target="_blank">US regulators probing insurers on Iran links</a><br />
US regulators have named Swiss Reinsurance Co. and Lloyds of London among companies being probed about their compliance with an expanded Iran sanctions law, Bloomberg has reported. The state Department of Financial Services said it learned that several insurers issued coverage that applied to trades made with Iran, including one policy issued by a group of European domiciled companies. Swiss Re is aware of its legal obligations and has a robust program in place to assure full compliance, Michael Gawthorne, a spokesman for the Zurich-based company, the worlds second-biggest reinsurer, said. Any suggestion that Swiss Re is in violation of trade sanction laws against Iran is without merit.
<li><a href='http://www.ameinfo.com/sabb-advances-lender-upgrades-corporate-governance-347253' target="_blank">SABB advances as lender upgrades corporate governance</a><br />
The Tadawul All-Share Index added 0.95%, finishing at 7,567.43 points. The Saudi British Bank (SABB) gained 1.35%, finishing at SR37.60. Earlier in the day, SABB announced that in line with the regulatory directives and the provisions of the Corporate Governance Regulations issued by the Capital Market Authority (CMA), which required some provisions of the regulations to be implemented by all listed companies including Paragraph (d) of Article (10) thereof which stipulate that among the main functions of the Board of Directors is laying down specific and explicit polices, standards and procedures, for the membership of the Board of Directors and implementing them after they have been approved the General Assembly. SABB added "In view of that, the bank's management finalized during the first half of 2013, an inclusive draft of policies and procedural standards regarding membership of the bank's board which included all related regulatory requirements and the best local and international practices."
</ul></div>


  <br />
  <div align="center"><a href="http://www.menareport.com/en/business,Financial_Markets/" target="_blank"><img src="images/mena_logo.gif" alt="Mena Report" border="0"></a></div><br /><br />
	<br />
    <div>
<p>Khaleej Times : Business News</p>
<ul>
<li><a href='http://www.khaleejtimes.com/biz/inside.asp?xfile=/data/uaebusiness/2013/June/uaebusiness_June333.xml&section=uaebusiness' target="_blank">Emaar, Meraas launch Dubai Inn</a><br />
New affordable hotel brand to meet growing demand from global travellers
<li><a href='http://www.khaleejtimes.com/biz/inside.asp?xfile=/data/uaebusiness/2013/June/uaebusiness_June336.xml&section=uaebusiness' target="_blank">Enoc clarifies crude cargo shipment to Lankan firm</a><br />
Emirates National Oil Company, or Enoc, has a strong, positive and long-term working relationship with key partners in the oil sector in Sri Lanka and successfully delivered approximately 532,000 metric tonnes of crude oil and petroleum products to Ceylon Petroleum Corporation, or CPC.
<li><a href='http://www.khaleejtimes.com/biz/inside.asp?xfile=/data/uaebusiness/2013/June/uaebusiness_June335.xml&section=uaebusiness' target="_blank">Majid Al Futtaim earmarks Dh3b for Dubai expansion</a><br />
Upgrades and new projects to better serve customer demand
<li><a href='http://www.khaleejtimes.com/biz/inside.asp?xfile=/data/uaebusiness/2013/June/uaebusiness_June338.xml&section=uaebusiness' target="_blank">Drydocks World in talks for futuristic projects</a><br />
Drydocks World and Maritime World has met officials from two key companies to discuss the progress on the Water Discus Hotel project.
</ul></div>


    <div align="center"><a href="http://english.aljazeera.net/business/" target="_blank"><img src="images/aljazeera_net.jpg" border="0"></a></div>

</div> <!--end middleastnews-->
</div><!--end col2-->

<div id="col3">
<div id="regional_resources" class="box boxbrdr">
<h2>Global Market Resources</h2>
<ul>
	<li><a href="http://www.marketwatch.com/markets/emergingmarkets" target="_blank">MarketWatch : Emerging Markets</a></li>
    <li><a href="http://www.forbes.com/emergingmarkets/" target="_blank">Forbes : Emerging Markets</a></li>
    <li><a href="http://www.dailyfx.com/forex_market_news/" target="_blank">Daily FX : Forex Market Resources</a></li>
    <li><a href="http://www.einnews.com/news-EmergingMarkets" target="_blank">EINNews.com : Emerging Markets Resources</a></li>
</ul>
</div>
<div id="emergingmkts" class="box boxbrdr">
<h2>Emerging Markets</h2>
<h4>FT.com | Emerging Markets Resources</h4>
<div>
<ul>
<li><a href='http://www.ft.com/cms/s/0/b30e26b0-e1fb-11e2-95c1-00144feabdc0.html?ftcamp=published_links%2Frss%2Fmarkets_emerging%2Ffeed%2F%2Fproduct' target="_blank">Shares start second half on front foot</a><br />
<span>published on Mon, 01 Jul 2013 20:11:48 GMT</span><br />
Investors put money to work at start of third quarter, with robust US manufacturing data offsetting disappointing news on the Chinese economy
<li><a href='http://www.ft.com/cms/s/0/cfa708d0-e243-11e2-87ec-00144feabdc0.html?ftcamp=published_links%2Frss%2Fmarkets_emerging%2Ffeed%2F%2Fproduct' target="_blank">Let Croatia lead the Balkans into the EU</a><br />
<span>published on Mon, 01 Jul 2013 18:24:05 GMT</span><br />
Every country that binds itself to the union’s rules and institutions brings us closer to the goal of a Europe whole, free and at peace
</ul></div>


<h4>Emerging Market Monitor</h4>
<div>
<ul>
<li><a href='http://feedproxy.google.com/~r/EmergingMarketsMonitorRssFeed/~3/TmYWssHdbmE/Deteriorating-Economic-Prospects.html' target="_blank">Deteriorating Economic Prospects (Emerging Markets Monitor)</a><br />
<span>published on Fri, 21 Jun 2013 00:00 GMT</span><br />
South Africa's economic prospects have deteriorated amid rapid currency depreciation and rising tensions in the critical mining sector. We are forecasting real GDP growth of 2.3% in 2013 and 3.3% in 2
<li><a href='http://feedproxy.google.com/~r/EmergingMarketsMonitorRssFeed/~3/MP4mT5FwuP0/UAH:-Possible-Liberalisation-Ahead.html' target="_blank">UAH: Possible Liberalisation Ahead (Emerging Markets Monitor)</a><br />
<span>published on Thu, 07 Jun 2012 00:00 GMT</span><br />
The hryvnia depreciated by 0.62% to 8.08/US$ on June 6, from 8.03/US$ in April, and we expect the currency to trade between the UAH7.9900-8.2000/US$ over Q312, given that the National Bank of Ukraine
<li><a href='http://feedproxy.google.com/~r/EmergingMarketsMonitorRssFeed/~3/gxuhBCPjGZA/CNY-View-Playing-Out-Further-Weakness-In-Store.html' target="_blank">CNY View Playing Out, Further Weakness In Store (Emerging Markets Monitor)</a><br />
<span>published on Mon, 25 Jun 2012 00:00 GMT</span><br />
BMI View: Our long-held view of Chinese yuan weakness in 2012 is gaining traction, with our medium-term target of CNY6.4000/US$ now firmly in sight. Moreover, with the technicals, fundamentals and sen
<li><a href='http://feedproxy.google.com/~r/EmergingMarketsMonitorRssFeed/~3/6RmPj8iXMrU/Limited-Scope-For-Progress-In-Talks-With-US.html' target="_blank">Limited Scope For Progress In Talks With US (Emerging Markets Monitor)</a><br />
<span>published on Tue, 31 Mar 2009 00:00 GMT</span><br />
We do not see much scope for improvement in relations between Myanmar and the new Obama administration in the US as the State Peace and Development Council (SPDC) regime shows no sign of changing its
<li><a href='http://feedproxy.google.com/~r/EmergingMarketsMonitorRssFeed/~3/9VS_KOFD0Xg/Rand-Weakness-Will-Prompt-Rate-Hikes.html' target="_blank">Rand Weakness Will Prompt Rate Hikes (Emerging Markets Monitor)</a><br />
<span>published on Fri, 07 Jun 2013 00:00 GMT</span><br />
The recent sharp depreciation of the rand will likely feed through to higher inflation via elevated import costs. Consequently, we have altered our outlook for monetary policy and now expect 100bps of
<li><a href='http://feedproxy.google.com/~r/EmergingMarketsMonitorRssFeed/~3/J674o-wpD2I/CLP-Sell-Off-To-Hasten-Downside-For-IPSA.html' target="_blank">CLP Sell-Off To Hasten Downside For IPSA (Emerging Markets Monitor)</a><br />
<span>published on Wed, 05 Jun 2013 00:00 GMT</span><br />
We maintain our view that a slowdown in the Chilean consumer&nbsp;in 2013 will weigh on the performance of equities in this sector, removing the support that has helped prevent a sharper sell-off in t
<li><a href='http://feedproxy.google.com/~r/EmergingMarketsMonitorRssFeed/~3/qalZgZ9HNzI/Dollar-Strength-To-Erode-Export-Competitiveness.html' target="_blank">Dollar Strength To Erode Export Competitiveness (Emerging Markets Monitor)</a><br />
<span>published on Wed, 05 Jun 2013 00:00 GMT</span><br />
We believe that US dollar strength over the coming years will negatively affect Ecuador's trade competitiveness, compounding a weakening of the country's external accounts. However, we believe an appr
<li><a href='http://feedproxy.google.com/~r/EmergingMarketsMonitorRssFeed/~3/FoYzN9VSd5E/Regional-Equity-Strategy.html' target="_blank">Regional Equity Strategy (Emerging Markets Monitor)</a><br />
<span>published on Tue, 04 Jun 2013 00:00 GMT</span><br />
Our bullish 'MSCI Malaysia over MSCI South East Asia' view is up 6.9%. These gains have been driven by the recent declines in the likes of the Thai SET and the Philippines Composite indices, which are
</ul></div>


<h4>Euromoney.com</h4>
<div>
<ul>
<li><a href='http://www.euromoney.com/Article/3212601/Mongolia-banks-on-mining-project.html' target="_blank">Mongolia banks on mining project</a><br />
<span>published on Thu, 30 May 2013 00:00:00 GMT</span><br />
With fresh signs of political and legislative progress, there is a renewed sense of optimism around the country after more than a year of political posturing that cast a pall over the nation and put the brakes on foreign direct investment that sent asset prices tumbling.
<li><a href='http://www.euromoney.com/Article/3215528/Request-for-proposal-a-quiet-revolution.html' target="_blank">Request for proposal: a quiet revolution</a><br />
<span>published on Thu, 06 Jun 2013 00:00:00 GMT</span><br />
The growth of e-auctions, consultants and Sepa, as well as rising corporate demand for innovative services, means the request for proposal (RFP) – the bidding process for corporates when tapping a bank for cash-management services – is evolving to meet new demands.
<li><a href='http://www.euromoney.com/Article/3213050/Latin-America-Are-emerging-market-indices-telling-the-right-story.html' target="_blank">Latin America: Are emerging market indices telling the right story?</a><br />
<span>published on Fri, 31 May 2013 00:00:00 GMT</span><br />
The popularity of some seemingly high-risk frontier bond issues suggests investors are driven by the need to fill index allocations rather than issuer quality. It also suggests the traditional market-capitalization approach of indices needs reconsideration.
<li><a href='http://www.euromoney.com/Article/3211930/M-A-New-paradigm-emerges-for-Egyptian-dealmaking.html' target="_blank">M&A: New paradigm emerges for Egyptian dealmaking</a><br />
<span>published on Wed, 29 May 2013 00:00:00 GMT</span><br />
QInvest bid for EFG Hermes collapses; New buyouts show what is possible
</ul></div>


</div>

<div id="emerg_resources" class="box boxbrdr">
<h2>Emerging Market Resources</h2>
<ul>

<li><a href="http://www.accenture.com" target="_blank">Emerging Market</a><br />Become a High Performance Business
In The New Era Of Globalization </li>

<li><a href="http://www.lusight.com" target="_blank">Emerging Markets Research
</a><br />Independent views on IPOs Data, forecasts, reports and tools</li>

<li><a href="http://www.MoneyWeek.Com" target="_blank">Emerging Market
</a><br />Investment Facts, Figures & All The Latest Tips with MoneyWeek ™. </li>

<li><a href="http://www.insuranceday.com" target="_blank">Emerging Markets</a><br />Insurance industry resources on the
emerging markets </li>

</ul>
</div>


</div><!--end col3-->

</div><!--end main-->
<br class="clearfloat" />
<div id="footer">All Rights Reserved.  Copyright &copy; 2009.</div>
</div><!--end wrap-->
</body>
</html>
