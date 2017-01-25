# VueStoreLab

JavaScript State Tree Plugin for Vue!

Example jsfiddle: https://jsfiddle.net/selfup/zhcw48mq

### Installation/Usage

This was built with modern build tools in mind.

Frontend assumptions are that you use a build tool:
1. Webpack
2. Grunt
3. Gulp

This is transpiled to ES5 from ES6 so any modern Node version will work :smile:

`npm install vue-store-lab --save`

Example Code on jsfiddle with source code in there: https://jsfiddle.net/selfup/kxt4drd5/

Example Code here:

```javascript
import VueStoreLab from 'vue-store-lab';

const appState = {
  dates: [],
};

const appActions = {
  ADD(state, date) {
    const newDate = new Date().getTime();
    const dates = [newDate, ...state.dates];
    return { dates };
  },
  CLEAR() {
    return { dates: [] };
  },
};

/**
  This is where you give VueStoreLab your state and actions :D
*/
Vue.use(new VueStoreLab(appState, appActions));

const App = Vue.extend({
  props: {
    state: {
      type: Object,
    },
  },
  computed: {
    dates() {
      return this.state.dates;
    },
    datesLength() {
      return this.dates.length;
    },
    canClear() {
      return this.datesLength > 0;
    },
  },
  template: (`
    <section>
      <button @click='dispatch("ADD")'>
        add
      </button>
      <button
        v-if='canClear'
        @click='dispatch("CLEAR")'
      >
        clear
      </button>
      <p>Dates length: {{ datesLength }}</p>
      <hr v-if='canClear'>
      <article v-for='date in dates'>
        {{ date }}
      </article>
    </section>
  `),
});

new Vue({
  el: '#app',
  components: { App },
  data() { return { state: this.VueStoreLabState } },
	template: (`<app :state='state'></app>`),
});
```

### Exceptions

You might need a polyfill for `Object.assign` :joy:

### DISCLAIMER

This is a continuation of reegux/vue-reegux/controllux
