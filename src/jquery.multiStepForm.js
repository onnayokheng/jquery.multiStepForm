/*
 * jquery.multiStepForm
 * https://github.com/nickromano/jquery.multiStepForm
 *
 * Copyright (c) 2012 Nick Romano
 * Licensed under the GPL license.
 */

(function($) {
    "use strict";

    var multiStepForm = {
        init: function(el, config) {
            this.el = el;
            this.$el = $(el);

            this.config = $.extend({}, $.fn.multiStepForm.defaults, config);

            this.slider = $('<div>',{
                'id': 'slider'
            }).html(this.$el.html());
            this.$el.html(this.slider);

            this.container = this.$el.css({
                'height': this.config.height + 'px',
                'width': this.config.width + 'px',
                'overflow': 'hidden'
            });

            this.pages = this.$el.find('section');
            this.numPages = this.pages.length;

            this.$el.find('#slider').css({
                'width': this.numPages * this.config.width * '1.10' + 'px' 
                // the extra ten percent is a hack to make sure all the sections are in-line
            });

            this.currentPage = 0;
            this.submit = this.$el.find('input[type="submit"]').hide();

            this.setUpPages();
        },

        setUpPages: function() {
            var self = this;

            this.pages.each(function() {
                var page = $(this).css({
                    'height': self.config.height + 'px',
                    'width': self.config.width + 'px',
                    'display': 'inline-block',
                    'position': 'relative',
                    'float': 'left'
                });

                self.setUpNextButtons(page);
                self.setUpPreviousButtons(page);

                if ( page.is(self.pages.last()) ) {
                    var submitButton = $('<button>', {
                        text: self.submit.attr('value'),
                        'id': 'submitButton',
                        click: function(e) {
                            e.preventDefault();
                            self.$el.submit();
                        }
                    }).css({
                        'position': 'absolute',
                        'bottom': '20px',
                        'right': '20px',
                        'height': '30px',
                        'font-size': '14px'
                    });
                    page.append(submitButton).html();
                }
            });
        },

        setUpNextButtons: function(page) {
            if ( page.is(this.pages.last()) ) {
                return;
            }
            var self = this;
            var button = $('<button>', {
                text: 'Next',
                click: function(e) {
                    e.preventDefault();
                    self.nextPage();
                }
            }).css({
                'position': 'absolute',
                'bottom': '20px',
                'right': '20px',
                'width': '54px',
                'height': '30px',
                'font-size': '14px'
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
                click: function(e) {
                    e.preventDefault();
                    self.previousPage();
                }
            }).css({
                'position': 'absolute',
                'bottom': '20px',
                'left': '20px',
                'width': '78px',
                'height': '30px',
                'font-size': '14px'
            });
            page.append(button).html();
        },

        nextPage: function() {
            this.currentPage += 1;
            this.slider.animate({
                'margin-left': -(this.currentPage * this.config.height)
            }, this.config.animate);
        },

        previousPage: function() {
            this.currentPage -= 1;
            this.slider.animate({
                'margin-left': -(this.currentPage * this.config.height)
            }, this.config.animate);
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
        width: '300',
        animate: '500'
    };

}(jQuery));
