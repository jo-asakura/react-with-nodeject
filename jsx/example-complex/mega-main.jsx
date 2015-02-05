(function megaMainInit(module) {
  'use strict';

  module.exports = function (app, window, $, coffee, tea, undefined) {
    return function () {
      $('.js-complex-app-placeholder').innerHTML = '<div class="js-coffee"></div><div class="js-tea"></div>';
      coffee($('.js-coffee'));
      tea($('.js-tea'));
    };
  };
})(module);
