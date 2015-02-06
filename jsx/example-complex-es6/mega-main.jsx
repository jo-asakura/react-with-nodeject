let megaMainInit = (app, window, $, coffee, tea, undefined) => {
  'use strict';

  return () => {
    $('.js-complex-app-placeholder').innerHTML = '<div class="js-coffee"></div><div class="js-tea"></div>';
    coffee($('.js-coffee'));
    tea($('.js-tea'));
  };
};

export default megaMainInit;