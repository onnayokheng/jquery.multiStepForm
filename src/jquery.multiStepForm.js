/*
 * jquery.multiStepForm
 * https://github.com/nickromano/jquery.multiStepForm
 *
 * Copyright (c) 2012 Nick Romano
 * Licensed under the GPL license.
 */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
