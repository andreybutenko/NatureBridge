import Vue from 'vue'
import VueRouter from 'vue-router';
import Meta from 'vue-meta'

Vue.options.devtool = true;

import App from './App.vue'
import Game from './Game.vue'
import GameNew from './GameNew.vue'
import Editor from './Editor.vue'
import Welcome from './Welcome.vue'
import LevelIndex from './levels/index.js';
import trivia from './trivia.js';
import BeetleImpact from './minigames/BeetleImpact.vue'
import WeedInvasive from './minigames/WeedInvasive.vue'
import MessyRoom from './minigames/MessyRoom.vue'

Vue.use(VueRouter);
Vue.use(Meta);

const router = new VueRouter({
  routes: [
    { path: '', component: Welcome },
    //{ path: '/game', component: Game, children: LevelIndex.routes },
    { path: '/game2', component: GameNew },
    { path: '/editor', component: Editor },
    { path: '/beetle', component: BeetleImpact },
    { path: '/weed', component: WeedInvasive },
    { path: '/messy', component: MessyRoom }
  ]
});

export const globalStore = new Vue({
  data() {
    return {
      attrs: {},
      visited: [],
      journals: [],
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
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
