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
      visited: [],
      inventory: [],
      inventoryMessage: '',
      journals: [],
      attrs: {
        weedersTalked: false,
        weedersHelped: false,
        salmonFreed: false,
        basecampSquirrel: false,
        weederSquirrel: false
      },
      triviaRemaining: trivia
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
    },
    getTrivia() {
      return this.triviaRemaining.shift();
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
