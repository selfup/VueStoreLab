/* eslint-disable no-param-reassign, linebreak-style */
/* global Vue */

/*!
 * VueStoreLab
 * (c) 2016-2017 Regis Jean-Pierre Boudinot (selfup)
 * Released under the MIT License.
 */

const StoreLab = require('store-lab');

class VueStoreLab {
  constructor(state = {}, actions = {}) {
    this.internal = new StoreLab(state, actions);
    this.install = (Vue) => {
      Vue.prototype.VueStoreLabState = this.internal.state;
      Object.defineProperty(
        Vue,
        '$vss',
        { get() { return this.VueStoreLabState; } },
      );
      Vue.prototype.dispatch = this.internal.dispatch;
    };
  }
}

module.exports = VueStoreLab;
