/* eslint-disable no-param-reassign, linebreak-style */
/* globals describe, it, expect */

const VueStoreLab = require('./../index.js');

describe('VueStoreLab', () => {
  it('can has a default store and actions', () => {
    const store = new VueStoreLab();

    expect(store.state).toEqual({});
    expect(store.actions).toEqual({});
    expect(typeof store.dispatch).toBe('function');
  });
});
