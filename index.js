'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-param-reassign, linebreak-style */
/* global Vue */

/*!
 * VueStoreLab
 * (c) 2016-2017 Regis Jean-Pierre Boudinot (selfup)
 * Released under the MIT License.
 */

var StoreLab = require('store-lab');

var VueStoreLab = function VueStoreLab() {
  var _this = this;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, VueStoreLab);

  this.internal = new StoreLab(state, actions);
  this.install = function (Vue) {
    Vue.prototype.VueStoreLabState = _this.internal.state;
    Vue.prototype.dispatch = _this.internal.dispatch;
  };
};

module.exports = VueStoreLab;
