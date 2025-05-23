// JavaScript Document
//function loadAJAX(css_selector,filepath){
	//$(css_selector).load(filepath);
	//	}
		
		
   
 // navigation
 
	$('#nav li').click(function() {
		location.href = $ (this).find('a').attr('href');
	});

