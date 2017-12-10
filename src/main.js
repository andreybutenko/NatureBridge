import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.options.devtool = true;

import App from './App.vue'
import LevelIndex from './levels/index.js';

Vue.use(VueRouter);
console.log(LevelIndex.routes)
const router = new VueRouter({
  routes: LevelIndex.routes
});

export const globalStore = new Vue({
  data() {
    return {
      visited: [],
      inventory: ['pencil', 'water'],
      inventoryMessage: '',
      journals: [],
      attrs: {
        weedersTalked: false,
        weedersHelped: false,
        salmonFreed: false
      }
    }
  },
  methods: {
    visitLocation(name) {
      this.visited.push(name);
    },
    addItem(name) {
      this.inventoryMessage = 'You got a ' + name + '!';
      this.inventory.push(name);
    },
    removeItem(name) {
      this.inventory = this.inventory.filter(node => node.name != name);
    },
    addJournal(title, response) {
      this.journals.push({
        title: title,
        response: response
      })
    },
    has(name) {
      return this.inventory.indexOf(name) > -1;
    },
    setAttr(name, val) {
      this.attrs[name] = val;
    },
    getAttr(name) {
      return this.attrs[name];
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
