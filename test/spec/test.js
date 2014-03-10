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
