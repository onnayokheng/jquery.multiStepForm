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
			'height': this.config.height + 'px',
			'width': this.config.width + 'px',
			'overflow': 'hidden'
        });

        this.pages = this.$el.find('section');
        this.numPages = this.pages.length;
        
        this.list = this.$el.find('div#slider').css({
			'width': this.numPages * this.config.width * '1.10' + 'px' // the extra ten percent is a hack to make sure all the sections are in-line
        });
		this.currentPage = 0;

		this.setUpPages();
    },

    setUpPages: function() {
		var self = this;

		this.pages.each(function() {
			var page = $(this).css({
				'height': self.config.height + 'px',
				'width': self.config.width + 'px',
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
		var self = this;
        var button = $('<button>', {
            text: 'Next',
            click: function() {
				self.nextPage();
            }
        });
        page.append(button).html();
	},

	setUpPreviousButtons: function(page) {
		if ( page.is(this.pages.first()) ) {
			return;
		}
		var self = this;
        var button = $('<button>', {
            text: 'Previous',
            click: function() {
				self.previousPage();
            }
        });
        page.append(button).html();
	},

	nextPage: function() {
		this.currentPage += 1;
		this.list.css({
			'margin-left': -(this.currentPage * this.config.height)
		});
	},

	previousPage: function() {
		this.currentPage -= 1;
		this.list.css({
			'margin-left': -(this.currentPage * this.config.height)
		});
	}
};

$.fn.multiStepForm = function(config) {
    var obj = Object.create(multiStepForm);

    return this.each(function() {
        obj.init(this, config);
    });
};

$.fn.multiStepForm.defaults = {
    height: '300',
    width: '300'
};

}(jQuery));
