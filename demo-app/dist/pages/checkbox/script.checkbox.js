module.exports=function(e){function n(l){if(c[l])return c[l].exports;var t=c[l]={exports:{},id:l,loaded:!1};return e[l].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var c={};return n.m=e,n.c=c,n.p="",n(0)}({0:function(e,n,c){e.exports=c(37)},37:function(e,n,c){"use strict";var l=c(38);e.exports={template:l,data:{checked:!1},ready:function(){quasar.current.layout.vm.$data.title="Checkbox"}}},38:function(e,n){e.exports='<h5>Model: <em>{{checked}}</em></h5>\n\n<h5>Standalone</h5>\n<label>\n  <checkbox :model.sync="checked"></checkbox>\n  Checkbox Label\n</label>\n\n<h5>Inside of a List</h5>\n<div class="list bordered inner-delimiter">\n  <label class="item">\n    <checkbox :model.sync="checked"></checkbox>\n    <div class="item-content">\n      Checkbox Label\n    </div>\n  </label>\n  <label class="item">\n    <checkbox :model.sync="checked"></checkbox>\n    <div class="item-content">\n      Checkbox Label\n    </div>\n  </label>\n</div>\n<br>\n<div class="list bordered inner-delimiter">\n  <label class="item">\n    <div class="item-content">\n      <div class="item-label">\n        Checkbox Label\n      </div>\n      <checkbox :model.sync="checked"></checkbox>\n    </div>\n  </label>\n  <label class="item">\n    <div class="item-content">\n      <div class="item-label">\n        Checkbox Label\n      </div>\n      <checkbox :model.sync="checked"></checkbox>\n    </div>\n  </label>\n</div>\n'}});