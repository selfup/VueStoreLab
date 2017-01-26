/* eslint-disable no-param-reassign, linebreak-style */
/* globals describe, it, expect */

const VueStoreLab = require('./../lib/index.js');

describe('VueStoreLab', () => {
  const appState = {
    messages: [],
  };

  const appActions = {
    ADD_MESSAGE(state, message) {
      const messages = Object.assign([], state.messages);
      messages.unshift(message);
      return { messages };
    },
    CLEAR() {
      return { messages: [] };
    },
    OOPS() {
      return 'lol';
    },
  };

  it('has a default store and actions - exposes install', () => {
    const store = new VueStoreLab();

    expect(store.internal.state).toEqual({});
    expect(store.internal.actions).toEqual({});
    expect(typeof store.internal.dispatch).toBe('function');
    expect(typeof store.install).toBe('function');
  });

  it('can take in user defined state and actions', () => {
    const store = new VueStoreLab(appState, appActions);

    expect(store.internal.state).toEqual(appState);
    expect(store.internal.actions).toEqual(appActions);
  });

  it('can mutate state', () => {
    const store = new VueStoreLab(appState, appActions);
    expect(store.internal.state.messages).toEqual([]);

    store.internal.dispatch('ADD_MESSAGE', 'OK');
    expect(store.internal.state.messages).toEqual(['OK']);

    store.internal.dispatch('CLEAR');
    expect(store.internal.state.messages).toEqual([]);
  });

  it('raises an error when an object literal is not returned', () => {
    const store = new VueStoreLab(appState, appActions);

    expect(() => store.internal.dispatch('OOPS'))
      .toThrow(new Error('StoreLab: Please Return An Object Literal :D'));
  });

  it('attaches the right properties via prototypes to an object', () => {
    class Vue {}

    const store = new VueStoreLab(appState, appActions);

    store.install(Vue);

    const vue = new Vue();

    expect(vue.VueStoreLabState).toBe(appState);
    expect(vue.dispatch).toBe(store.internal.dispatch);
  });
});
