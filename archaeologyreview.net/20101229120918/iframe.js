jQuery(document).ready(function($) {
		$('iframe').load(function()	{
			this.style.height = this.contentWindow.document.body.scrollHeight + 'px';	
		});		
		$('iframe').each(function() {
			$(this).attr('src',$(this).attr('src'));
		});		
	}
);