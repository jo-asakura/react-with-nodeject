(function megaMainInit(module) {
  'use strict';

  module.exports = function (app, window, coffee, tea, undefined) {
    return function () {
      // $ - should be a dependency but for a test it's inlined
      $('body').html('<div class="js-coffee"></div><div class="js-tea"></div>');
      coffee($('.js-coffee')[0]);
      tea($('.js-tea')[0]);
    };
  };
})(module);
