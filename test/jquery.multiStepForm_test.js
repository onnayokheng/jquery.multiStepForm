/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

    module('jQuery#multiStepForm', {
        setup: function() {
            this.elems = $('div#signup-form');
        }
    });

    test('is available on the jquery object', 1, function() {
        ok($.fn.multiStepForm, 'Should be accessible on a collection');
    });

    test('should be chainable', 1, function() {
        strictEqual( this.elems.multiStepForm(), this.elems, 'it returns the jquery object' );
    });

    test('offers a default object on multiStepForm namespace', 1, function() {
        ok(!!$.fn.multiStepForm.defaults, 'the user can change the defaults');
    });

    test('sets default css', 2, function() {
        this.elems.multiStepForm();
        strictEqual( this.elems.find('div').first().css('height'), '300px', 'sets height to 300px' );
        strictEqual( this.elems.find('div').first().css('width'), '300px', 'sets width to 300px' );
    });

}(jQuery));
