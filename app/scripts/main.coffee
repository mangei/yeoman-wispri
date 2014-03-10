### global window, _ ###

'use strict';
 
window.app = 
  createCatalystsUsername: (firstname, lastname) ->
    if !_.isString(firstname) || firstname.length == 0
      return null
    if !_.isString(lastname) || lastname.length == 0
      return null 
    (firstname[0] + lastname).toLowerCase() 