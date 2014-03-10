
/* global window, _ */

(function() {
  'use strict';
  window.app = {
    createCatalystsUsername: function(firstname, lastname) {
      if (!_.isString(firstname) || firstname.length === 0) {
        return null;
      }
      if (!_.isString(lastname) || lastname.length === 0) {
        return null;
      }
      return (firstname[0] + lastname).toLowerCase();
    }
  };

}).call(this);
