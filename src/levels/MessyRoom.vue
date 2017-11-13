<template>
  <div class="container">
    <div class="center-content">
      <h1 class="title">You're late! Get packed!</h1>
      <h2 class="title">{{ timeRemaining }} seconds left...</h2>
      <div style="position: relative" class="game-area">
        <img
      	  src="../assets/messy/room.png" />

        <MessyRoomItem
          v-for="item in items"
          :key="item.name"
          :onPress="onPressItem"
          :name="item.name"
          :top="item.top"
          :left="item.left" />
      </div>

      <div class="columns">
        <div class="column-container">
          <div>
            <b v-if="!!found.length">You found:</b>
            <ul>
              <li v-for="item in found" :key="item.name">{{ item.display }}</li>
            </ul>
          </div>
        </div>
        <div class="column-container">
          <div>
            <b>Items to pack:</b>
            <ul>
              <li v-for="item in remaining" :key="item.name">{{ item.display }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="modal-container" v-if="gameOver">
        <div class="modal-content" v-if="remaining.length == 0">
          <h1 class="modal-title">Hurray!</h1>
          <p>
            You may have not been prepared in advance, but you were able to get packed last-minute in only {{ 30 - timeRemaining }} seconds.
          </p>

          <router-link to="BusRide">Get on the bus!</router-link>
        </div>
        <div class="modal-content" v-else>
          <h1 class="modal-title">Game Over!</h1>
          <p>
            You weren't able to get everything you needed packed, but your bus is already here! You were still missing:
          </p>
          <ul>
            <li v-for="item in remaining" :key="item.name">{{ item.display }}</li>
          </ul>

          <router-link to="BusRide">Get on the bus!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import MessyRoomItem from './MessyRoomItem';

  export default {
    name: 'MessyRoom',
    components: { MessyRoomItem },
    data() {
      return {
        timeRemaining: 30,
        timer: null,
        timerStarted: false,
        gameOver: false,
        items: [
          { name: 'firstaid', display: 'First Aid', top: 432, left: 725 },
          { name: 'jacket', display: 'Jacket', top: 505, left: 467 },
          { name: 'flashlight', display: 'Flashlight', top: 515, left: 140 },
          { name: 'rope', display: 'Rope', top: 235, left: 645 },
        ],
        found: []
      }
    },
    mounted() {
      globalStore.visitLocation('MessyRoom');
    },
    methods: {
      onPressItem(name) {
        this.found.push(...this.items.filter(item => item.name == name))

        if(!this.timerStarted) this.startTimer();
        if(this.remaining.length == 0) this.stopTimer();
      },
      startTimer() {
        this.timerStarted = true;
        this.timeRemaining = this.timeRemaining - 1;
        this.timer = window.setInterval(() => {
          this.timeRemaining = this.timeRemaining - 1;

          if(this.timeRemaining == 0) {
            this.stopTimer();
          }
        }, 1000);
      },
      stopTimer() {
        window.clearInterval(this.timer);
        this.gameOver = true;
      }
    },
    computed: {
      remaining() {
        return this.items.filter(item => this.found.indexOf(item) == -1)
      }
    }
  }
</script>

<style lang="scss">
  .columns {
    display: flex;
    flex-direction: row;
    flex: 1 0 100%;
    width: 100%;

    .column-container {
      flex: 1;
      display: flex;
      justify-content: center;

      & > div {
        flex: 0 0 25%;
      }
    }
  }

  .title {
    font-weight: bold;
    text-align: center;
  }

  .game-area {
    margin: 16px 0;
  }
</style>
