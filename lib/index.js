/* eslint-disable no-param-reassign, linebreak-style */
/* global Vue */

/*!
 * VueStoreLab
 * (c) 2016-2017 Regis Jean-Pierre Boudinot (selfup)
 * Released under the MIT License.
 */

const VUE_STORELAB_ERROR = 'StoreLab: Please Return An Object Literal :D';

class VueStoreLab {
  constructor(state = {}, actions = {}) {
    this.state = state;
    this.actions = actions;

    this.dispatch = (action, data) => {
      const newMergeData = this.actions[action](this.state, data);
      if (typeof newMergeData !== 'object') throw Error(VUE_STORELAB_ERROR);
      Object.assign(this.state, newMergeData);
    };

    this.install = (Vue) => {
      Vue.prototype.VueStoreLabState = this.state;
      Vue.prototype.dispatch = this.dispatch;
    };
  }
}

module.exports = VueStoreLab;
