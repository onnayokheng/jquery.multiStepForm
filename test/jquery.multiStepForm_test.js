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
            this.elems = $('form#signup-form');
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

    test('sets default css', 4, function() {
        this.elems.multiStepForm();
        strictEqual( this.elems.css('height'), '300px', 'sets height to 300px' );
        strictEqual( this.elems.css('width'), '300px', 'sets width to 300px' );
        strictEqual( this.elems.find('section').first().css('height'), '300px', 'sets height to 300px' );
        strictEqual( this.elems.find('section').first().css('width'), '300px', 'sets width to 300px' );
    });

    test('user can set own size', 4, function() {
        this.elems.multiStepForm({
            'height': '350',
            'width': '400'
        });
        strictEqual( this.elems.css('height'), '350px', 'sets height to 400' );
        strictEqual( this.elems.css('width'), '400px', 'sets width to 400' );
        strictEqual( this.elems.find('section').first().css('height'), '350px', 'sets height to 400' );
        strictEqual( this.elems.find('section').first().css('width'), '400px', 'sets width to 400' ); 
    });

    test('all pages but the last have a next button', 3, function() {
        this.elems.multiStepForm();
        var pages = this.elems.find('section');
    
        ok($(pages[0]).find('button:contains("Next")').length, 'next button on first page');
        ok($(pages[1]).find('button:contains("Next")').length, 'next button on second page');
        ok(!$(pages[2]).find('button:contains("Next")').length, 'no next button on last page');
    });

    test('all pages but the last have a next button', 3, function() {
        this.elems.multiStepForm();
        var pages = this.elems.find('section');
    
        ok(!$(pages[0]).find('button:contains("Previous")').length, 'no previous button on first page');
        ok($(pages[1]).find('button:contains("Previous")').length, 'previous button on second page');
        ok($(pages[2]).find('button:contains("Previous")').length, 'previous button on last page');
    });

    asyncTest('next button shows next page', 2, function() {
        this.elems.multiStepForm();
        var pages = this.elems.find('section');
        $(pages[0]).find('button:contains("Next")').click();
        var self = this;
        setTimeout(function(){
            strictEqual( self.elems.find('#slider').first().css('margin-left'), '-300px', 'move slider to the second page');
                    $(pages[1]).find('button:contains("Next")').click();
            setTimeout(function() {
              strictEqual( self.elems.find('#slider').first().css('margin-left'), '-600px', 'move slider to the third page');
              start();
            }, 500);
        }, 500);
    });

    asyncTest('previous button shows previous page', 2, function() {
        this.elems.multiStepForm();
        var pages = this.elems.find('section');
        $(pages[0]).find('button:contains("Next")').click();
        $(pages[1]).find('button:contains("Next")').click();
        $(pages[2]).find('button:contains("Previous")').click();
        var self = this;
        setTimeout(function(){
            strictEqual( self.elems.find('#slider').first().css('margin-left'), '-300px', 'move slider to the second page');
            $(pages[1]).find('button:contains("Previous")').click();
            setTimeout(function() {
              strictEqual( self.elems.find('#slider').first().css('margin-left'), '0px', 'move slider to the first page');
              start();
            }, 500);
        }, 1500);
    });

    test('new submit button has the same text as the old one', 1, function() {
        this.elems.multiStepForm();
        strictEqual( this.elems.find('button#submitButton').first().text(), 'Sign Up!', 'submit button has same text');
    });
}(jQuery));
