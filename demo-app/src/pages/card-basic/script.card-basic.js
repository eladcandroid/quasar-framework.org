'use strict';

var html = require('raw!./view.card-basic.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Basic Cards';
  }
};
