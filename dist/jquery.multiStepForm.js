/*! jQuery Multistepform - v0.1.0 - 2012-11-03
* https://github.com/nickromano/jquery.multiStepForm
* Copyright (c) 2012 Nick Romano; Licensed GPL */

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
