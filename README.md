# jQuery Multistepform

Turn a long form into a multi page sliding form

[![Build Status](https://secure.travis-ci.org/nickromano/jquery.multiStepForm.png)](http://travis-ci.org/nickromano/jquery.multiStepForm)

## Example
JSFiddle http://jsfiddle.net/nickromano/3J8FD/

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/nickromano/jquery.multiStepForm/master/dist/jquery.multiStepForm.min.js
[max]: https://raw.github.com/nickromano/jquery.multiStepForm/master/dist/jquery.multiStepForm.js

In your web page:

```html
<form id="signup-form">
    <section>
        <label for="first">First Name:</label>
        <input type="text" name="first" id="first" />
        <label for="last">Last Name:</label>
        <input type="text" name="last" id="last" />
    </section>
    <section>
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" />
    </section>
    <section>
        <label for="passsword">Password:</label>
        <input type="password" name="passsword" id="passsword" />
        <label for="confirm">Confirm Password:</label>
        <input type="password" name="confirm" id="confirm" />
        <input type="submit" value="Sign Up!" />
    </section>
</form>
<script src="jquery.js"></script>
<script src="jquery.multiStepForm.min.js"></script>
<script>
    $('#signup-form').multiStepForm();
</script>
```

## Documentation
Treat each ```<section>``` tag as a page for the multi step form

Configurable options:
-----------
<table>
    <tr>
        <th>Option</th><th>Default setting</th><th>Usage</th>
    </tr>
    <tr>
        <td>height</td><td>'300'</td><td>Height of each page in px</td>
    </tr>
    <tr>
        <td>width</td><td>'300'</td><td>Width of each page in px</td>
    </tr>
    <tr>
        <td>animate</td><td>'500'</td><td>Speed of the sliding animation in miliseconds</td>
    </tr>
</table>

## Release History
11/4 Initial Release

## License
Copyright (c) 2012 Nick Romano  
Licensed under the GPL license.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

### Important notes
Please don't edit files in the `dist` subdirectory as they are generated via grunt. You'll find source code in the `src` subdirectory!

While grunt can run the included unit tests via PhantomJS, this shouldn't be considered a substitute for the real thing. Please be sure to test the `test/*.html` unit test file(s) in _actual_ browsers.

### Installing grunt
_This assumes you have [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed already._

1. Test that grunt is installed globally by running `grunt --version` at the command-line.
1. If grunt isn't installed globally, run `npm install -g grunt` to install the latest version. _You may need to run `sudo npm install -g grunt`._
1. From the root directory of this project, run `npm install` to install the project's dependencies.

### Installing PhantomJS

In order for the qunit task to work properly, [PhantomJS](http://www.phantomjs.org/) must be installed and in the system PATH (if you can run "phantomjs" at the command line, this task should work).

Unfortunately, PhantomJS cannot be installed automatically via npm or grunt, so you need to install it yourself. There are a number of ways to install PhantomJS.

* [PhantomJS and Mac OS X](http://ariya.ofilabs.com/2012/02/phantomjs-and-mac-os-x.html)
* [PhantomJS Installation](http://code.google.com/p/phantomjs/wiki/Installation) (PhantomJS wiki)

Note that the `phantomjs` executable needs to be in the system `PATH` for grunt to see it.

* [How to set the path and environment variables in Windows](http://www.computerhope.com/issues/ch000549.htm)
* [Where does $PATH get set in OS X 10.6 Snow Leopard?](http://superuser.com/questions/69130/where-does-path-get-set-in-os-x-10-6-snow-leopard)
* [How do I change the PATH variable in Linux](https://www.google.com/search?q=How+do+I+change+the+PATH+variable+in+Linux)
