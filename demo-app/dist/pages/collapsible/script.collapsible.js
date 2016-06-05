module.exports=function(i){function n(t){if(e[t])return e[t].exports;var a=e[t]={exports:{},id:t,loaded:!1};return i[t].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var e={};return n.m=i,n.c=e,n.p="",n(0)}({0:function(i,n,e){i.exports=e(39)},39:function(i,n,e){"use strict";var t=e(40);i.exports={template:t,ready:function(){quasar.current.layout.vm.$data.title="Collapsible"}}},40:function(i,n){i.exports='<div style="max-width: 600px;">\n  <h5>Accordion</h5>\n  <ul v-collapsible>\n    <li>\n      <div><i>assignment_ind</i>First</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </div>\n    </li>\n    <li>\n      <div><i>explore</i>Second</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </div>\n    </li>\n    <li>\n      <div><i>shopping_cart</i>Third</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </div>\n    </li>\n  </ul>\n\n  <h5>Popout</h5>\n  <ul class="popout" v-collapsible>\n    <li>\n      <div><i>room</i>First</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </div>\n    </li>\n    <li>\n      <div><i>shopping_basket</i>Second</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </div>\n    </li>\n    <li>\n      <div><i>loyalty</i>Third</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </div>\n    </li>\n  </ul>\n\n  <h5>Ubiquity. Using Cards as content.</h5>\n  <ul v-collapsible>\n    <li>\n      <div><i>assignment_ind</i>First Card</div>\n      <div class="card bg-primary text-white">\n        <div class="card-title">\n          Card Title\n        </div>\n        <div class="card-content">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        </div>\n      </div>\n    </li>\n    <li>\n      <div><i>explore</i>Second Card</div>\n      <div class="card">\n        <img src="assets/mountains.jpg">\n        <div class="card-content">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        </div>\n      </div>\n    </li>\n    <li>\n      <div><i>shopping_cart</i>Third Card</div>\n      <div class="card">\n        <div class="card-media">\n          <img src="assets/map.png">\n          <button class="primary circular"><i>explore</i></button>\n        </div>\n        <div class="card-content">\n          <div class="item">\n            <i>local_bar</i>\n            <div class="item-content">\n              <div class="item-label">\n                <p class="item-title">Bar XYZ</p>\n                <p>Have a drink.</p>\n              </div>\n            </div>\n          </div>\n          <div class="item">\n            <i>local_gas_station</i>\n            <div class="item-content">\n              <div class="item-label">\n                <p class="item-title">Gas Station</p>\n                <p>Fill your gas tank.</p>\n              </div>\n            </div>\n          </div>\n          <div class="item">\n            <i>local_movies</i>\n            <div class="item-content">\n              <div class="item-label">\n                <p class="item-title">Cinema XYZ</p>\n                <p>Watch a movie.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="card-actions card-no-top-padding">\n          <div class="text-lime">\n            13 minutes\n          </div>\n          <div>\n            (1 mile)\n          </div>\n          <div class="auto"></div>\n          <button class="primary clear small"><i class="on-left">directions</i> Start</button>\n        </div>\n      </div>\n    </li>\n  </ul>\n\n  <h5>Freely - Can open multiple items simultaneously</h5>\n  <ul v-collapsible="true">\n    <li>\n      <div><i>assignment_ind</i>First</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </div>\n    </li>\n    <li>\n      <div><i>explore</i>Second</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </div>\n    </li>\n    <li>\n      <div><i>shopping_cart</i>Third</div>\n      <div>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </div>\n    </li>\n  </ul>\n</div>\n'}});