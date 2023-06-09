

	function tm_animate_text(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word');
		
			animateSpan.typed({
				strings: ["System Software Development Lead", "Software Engineer", "Data Scientist", "Data Analyst", "Firmware Engineer", "Validation Engineer"],
				loop: true,
				startDelay: 0,
				backDelay: 0
			});
	}

	jQuery(document).on('ready', function () {
		(function ($) {
			tm_animate_text();
		})(jQuery);
	});