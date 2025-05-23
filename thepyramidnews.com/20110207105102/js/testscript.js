// JavaScript Document
$(document).ready(function(){

	// handling clicks on the navigation link
	$('ul#tpn_se_na a').click(function(e) {
		$('ul#tpn_se_na li').removeClass('selected');							
		$(this).parent().addClass('selected');
	});
	
	
	
});