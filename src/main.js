import Vue from 'vue'
import VueRouter from 'vue-router';

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
      visited: []
    }
  },
  methods: {
    visitLocation(name) {
      this.visited.push(name);
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
