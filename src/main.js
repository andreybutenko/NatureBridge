import Vue from 'vue'
import VueRouter from 'vue-router';
import Meta from 'vue-meta'

Vue.options.devtool = true;

import App from './App.vue'
import GameNew from './GameNew.vue'
import Editor from './Editor.vue'
import Welcome from './Welcome.vue'
import trivia from './trivia.js';
import BeetleImpact from './minigames/BeetleImpact.vue'

Vue.use(VueRouter);
Vue.use(Meta);

const router = new VueRouter({
  routes: [
    { path: '', component: Welcome },
    { path: '/game', component: GameNew },
    { path: '/editor', component: Editor },
    { path: '/beetle', component: BeetleImpact }
  ]
});

export const globalStore = new Vue({
  data() {
    return {
      attrs: {},
      visited: [],
      journals: [],
      badges: [],
      triviaRemaining: trivia
    }
  },
  methods: {
    visitLocation(name) {
      this.visited.push(name);
    },
    hasVisited(name) {
      return this.visited.indexOf(name) > -1;
    },
    addJournal(title, response) {
      this.journals.push({
        title: title,
        response: response
      })
    },
    getTrivia() {
      return this.triviaRemaining.shift();
    },
    set(attr, value) {
      this.attrs[attr] = value;
    },
    get(attr) {
      return this.attrs[attr];
    },
    earnBadge(name) {
      if(this.badges.indexOf(name) < 0) {
        this.badges.push(name);
      }
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
