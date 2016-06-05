'use strict';

var html = require('raw!./view.radio.html');

module.exports = {
  template: html,
  data: {
    option: 'opt1'
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Radio';
  }
};
