# Guide

## Install requirements
 - node.js
 - Git

## Install Yeoman
`npm install -g yo`

##Install webapp Generator
`npm install -g generator-webapp`

## Show generated files
 - generated structure
 - config files
 - minified versions of CSS and JavaScript files (run `grunt` before)

## Live-Reload

Start grunt-server: `grunt serve`

### Update HTML

`index.html`

    <h2>Yeoman rocks!</h2>

### Update CSS

`styles/main.css`

    h2 {
        color: green;
        font-family: monospace;
        font-weight: bold;
    }

## Install UnderscoreJS with Bower

Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects.

First show the search function:

`bower search underscore`

`bower install --save underscore`

Show `bower.json`

Show `bower_components` folder

Integrade with the index.html:

 - Show `<!-- bower:js -->` block
 - Run `grunt bowerInstall`
 - Show block again

Test it in console:

    var arr = [23,16,2,3,7,332];
    _.min(arr);
    _.max(arr);
    _.shuffle(arr);

# Script & Testing

Adjust `.jshintrc` to fix some warnings:

    {
        "node": true,
        "browser": true,
        "esnext": true,
        "bitwise": true,
        "camelcase": false,
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "indent": false,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "quotmark": "single",
        "undef": true,
        "unused": true,
        "strict": true,
        "trailing": false,
        "smarttabs": true,
        "jquery": true
    }


add empty method in `scripts/main.js`
       
    'use strict';

    window.app = {
      createCatalystsUsername: function (firstname, lastname) {
    };

under `test/index.html`

    <!-- include source files here... -->
    <script src="scripts/main.js"></script>

add tests in `test/spec/test.js`

    /* global describe, it, assert, window */

    (function () {
        'use strict';

        describe('We test our app functions', function() {
            it('should give me my username', function() {
                assert.equal(window.app.createCatalystsUsername('Manuel', 'Geier'), 'mgeier');
            });
            it('should return null if firstname is not a string', function() {
                assert.equal(window.app.createCatalystsUsername(1, 'Geier'), null);
            }); 
            it('should return null if lastname is not a string', function() {
                assert.equal(window.app.createCatalystsUsername('Manuel', 1), null);
            });
            it('should return null if firstname is empty', function() {
                assert.equal(window.app.createCatalystsUsername('', 'Geier'), null);
            });
            it('should return null if lastname is empty', function() {
                assert.equal(window.app.createCatalystsUsername('Manuel', ''), null);
            });
            it('should return null if firstname and lastname are empty', function() {
                assert.equal(window.app.createCatalystsUsername('', ''), null);
            });
        });
    })();

implement method:

    /* global window, _ */

    'use strict';

    window.app = {
      createCatalystsUsername: function (firstname, lastname) {
        if(!_.isString(firstname) || firstname.length === 0) {
          return null;
        }
        if(!_.isString(lastname) || lastname.length === 0) {
          return null;
        }
        return (firstname[0] + lastname).toLowerCase();
      }
    };

# CoffeeScript

Install: `npm install grunt-contrib-coffee --save-dev`

add in Gruntfile.js at the end

        grunt.loadNpmTasks('grunt-contrib-coffee');

check help to see the new `coffee` command: `grunt --help`

    coffee  Compile CoffeeScript files into JavaScript *

add in `Gruntfile.js` to `watch` object for live reload:

            coffeescript: {
                files: ['<%= config.app %>/scripts/*.coffee'],
                tasks: ['coffee']
            }

create a copy of `main.js` -> `main.coffee`

    ### global window, _ ###
   
    'use strict';
 
    window.app =
      createCatalystsUsername: (firstname, lastname) ->
        if !_.isString(firstname) || firstname.length == 0
          return null
        if !_.isString(lastname) || lastname.length == 0 
          return null 
        (firstname[0] + lastname).toLowerCase() 


# Resources

 - Yeoman - http://yeoman.io/
 - Grunt - http://gruntjs.com/
 - Bower - http://bower.io/
 - Underscore.js - http://underscorejs.org/
 - CoffeeScript - http://coffeescript.org/