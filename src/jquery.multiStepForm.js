/*
 * jquery.multiStepForm
 * https://github.com/nickromano/jquery.multiStepForm
 *
 * Copyright (c) 2012 Nick Romano
 * Licensed under the GPL license.
 */

(function($) {

var multiStepForm = {
    init: function(el, config) {
		this.el = el;
        this.$el = $(el);
		
		this.config = $.extend({}, $.fn.multiStepForm.defaults, config);
		
        this.container = this.$el.css({
			'height': this.config.height,
			'width': this.config.width,
			'overflow': 'hidden'
        });

        this.pages = this.$el.find('div');
        this.numPages = this.pages.length;

		this.setUpCSS();
    },

    setUpCSS: function() {
		var self = this;

		this.pages.each(function() {
			var page = $(this).css({
				'height': self.config.height,
				'width': self.config.width,
				'display': 'inline-block',
				'position': 'relative'
			});

			self.setUpNextButtons(page);
			self.setUpPreviousButtons(page);
		});
    },

	setUpNextButtons: function(page) {
		if ( page.is(this.pages.last()) ) {
			return;
		}
        var button = $('<button>', {
            text: 'Next'
            /*
            click: function() {
				console.log('pressed'); 
            }
            */
        });
        page.append(button).html();
	},

	setUpPreviousButtons: function(page) {
		if ( page.is(this.pages.first()) ) {
			return;
		}
        var button = $('<button>', {
            text: 'Previous'
            /*
            click: function() {
				console.log('pressed'); 
            }
            */
        });
        page.append(button).html();
	}
};

$.fn.multiStepForm = function(config) {
    var obj = Object.create(multiStepForm);

    return this.each(function() {
        obj.init(this, config);
    });
};

$.fn.multiStepForm.defaults = {
    height: '300px',
    width: '300px'
};

}(jQuery));
