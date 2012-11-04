/*
 * jquery.multiStepForm
 * https://github.com/nickromano/jquery.multiStepForm
 *
 * Copyright (c) 2012 Nick Romano
 * Licensed under the GPL license.
 */

(function($) {

var multiStepForm = {
    init: function() {
    }
};

$.fn.multiStepForm = function() {
    var obj = Object.create(multiStepForm);

    return this.each(function() {
        obj.init();
    });
};

}(jQuery));
