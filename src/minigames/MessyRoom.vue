<template>
  <div class="container">
    <div class="center-content">
      <h1 class="title">Pack for the Park!</h1>
      <h2 class="title">{{ timeRemaining }} seconds left...</h2>
      <div style="position: relative" class="game-area">
        <img
          style="width: 100%"
      	  src="/static/packing/background.png" />

        <MessyRoomItem
          v-for="item in items"
          :key="item.name"
          :onPress="onPressItem"
          :name="item.name"
          :top="item.top"
          :left="item.left"
          :visible="isVisible(item.name)" />
      </div>

      <div class="columns">
        <div class="column-container">
          <div class="packed">
            <b>You found:</b>
            <ul class="two-column">
              <li v-for="item in found" :key="item.name">{{ item.display }}</li>
            </ul>
          </div>
        </div>
        <div class="column-container">
          <div class="to-pack">
            <b>Items to pack:</b>
            <ul class="two-column">
              <li v-for="item in remaining" :key="item.name">{{ item.display }}</li>
            </ul>
            <br v-for="(item, i) in found" v-if="i % 2 == 0" />
          </div>
        </div>
      </div>

      <div class="modal-container" v-if="intro && !viewingEssentials">
        <div class="modal-content">
          <h1 class="modal-title">Pack Fast!</h1>
          <p>
            Before going to a park, it is important to be prepared. Make sure to pack the <span class="link" @click="viewingEssentials = true">10 Essentials</span> so you will be read for any situation.
          </p>
          <p>
            Click on these items to pack them in your bag:
          </p>
          <ul class="two-column">
            <li v-for="item in remaining" :key="item.name">{{ item.display }}</li>
          </ul>

          <div class="btn-container">
            <div class="play-btn" @click="intro = false">Begin!</div>
          </div>
        </div>
      </div>

      <div class="modal-container" v-if="viewingEssentials">
        <div class="modal-content">
          <h1 class="modal-title">10 Essentials</h1>
          <ul>
            <li>Navigation</li>
            <li>Sun Protection</li>
            <li>Insulation</li>
            <li>Illumination</li>
            <li>First Aid</li>
            <li>Tool Kit</li>
            <li>Fire</li>
            <li>Nutrition</li>
            <li>Hydration</li>
            <li>Emergency Shelter</li>
          </ul>

          <div class="btn-container">
            <div class="play-btn" @click="viewingEssentials = false">Back to instructions</div>
          </div>
        </div>
      </div>

      <div class="modal-container" v-if="gameOver">
        <div class="modal-content" v-if="remaining.length == 0">
          <h1 class="modal-title">Hurray!</h1>
          <p>
            Great packing! Now you have everything you need to have a safe and enjoyable trip to the Park. You earned your <b>Wilderness Preparedness Badge</b>!
          </p>

          <div class="btn-container">
            <div class="play-btn btn-restart" @click="reset()">Play Again</div>
            <div class="play-btn" @click="switchScene('WaveGoodbye')">Let's get going!</div>
          </div>
        </div>
        <div class="modal-content" v-else>
          <h1 class="modal-title">Game Over!</h1>
          <p>
            Time's up! Looks like you weren't able to find everything you needed in time.
          </p>
          <p>
            Play again and find all the items to earn the <b>Wilderness Preparedness Badge</b>!
          </p>

          <div class="btn-container">
            <div class="play-btn btn-restart" @click="reset()">Play Again</div>
            <div class="play-btn" @click="switchScene('WaveGoodbye')">Continue on and borrow what you need from a friend on the way</div>
          </div>
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
    props: ['switchScene'],
    components: { MessyRoomItem },
    data() {
      return {
        timeRemaining: 30,
        timer: null,
        timerStarted: false,
        intro: true,
        gameOver: false,
        viewingEssentials: false,
        items: [
          { name: 'compass', display: 'Compass', left: 750, top: 270 },
          { name: 'firstaid', display: 'First Aid', left: 726, top: 434 },
          { name: 'hat', display: 'Hat', left: 406, top: 532 },
          { name: 'jacket', display: 'Jacket', left: 466, top: 508 },
          { name: 'knife', display: 'Knife', left: 688, top: 446 },
          { name: 'lunch', display: 'Lunch Bag', left: 716, top: 512 },
          { name: 'matches', display: 'Box of Matches', left: 610, top: 280 },
          { name: 'rope', display: 'Rope', left: 642, top: 240 },
          { name: 'sunscreen', display: 'Sunscreen', left: 704, top: 234 },
          { name: 'tarp', display: 'Tarp', left: 566, top: 260 },
          { name: 'water bottle', display: 'Water Bottle', left: 628, top: 218 }
        ],
        found: []
      }
    },
    mounted() {
      globalStore.visitLocation('MessyRoom');
    },
    methods: {
      reset() {
        this.timeRemaining = 30;
        this.timerStarted = false;
        this.intro = true;
        this.gameOver = false;
        this.found = [];
      },
      onPressItem(name) {
        this.found.push(...this.items.filter(item => item.name == name))

        if(!this.timerStarted) this.startTimer();
        if(this.remaining.length == 0) this.stopTimer();
      },
      isVisible(name) {
        return this.found.map(item => item.name).indexOf(name) == -1;
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
        if(this.remaining.length == 0) {
          globalStore.earnBadge('wilderness_preparedness');
        }
      }
    },
    computed: {
      remaining() {
        return this.items.filter(item => this.found.indexOf(item) == -1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .columns {
    display: flex;
    flex-direction: row;
    flex: 1 0 100%;
    width: 100%;
    max-width: 800px;

    .column-container {
      flex: 1;
      display: flex;
      justify-content: center;

      div {
        flex: 1;
      }

      .to-pack {
        border-left: 1px solid black;
        padding-left: 16px;
      }
    }
  }

  ul.two-column {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      flex: 1 1 50%;
    }
  }

  .link {
    color: #2980b9;
    text-decoration: underline;
    cursor: pointer;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .play-btn {
      flex: 1;
      padding: 16px;
      text-align: center;
      color: white;
      cursor: pointer;
      background-color: #27ae60;
      transition: all 250ms;
      margin-top: 16px;

      &.btn-restart {
        color: black;
        background-color: #fdcb6e;

        &:hover {
          background-color: #ffeaa7;
        }
      }

      &:hover {
        background-color: #2ecc71;
      }
    }
  }

  .center-content {
    height: 100%;
  }

  .title {
    font-weight: bold;
    text-align: center;
  }

  .game-area {
    margin: 16px 0;
    max-width: 100%;
  }

  .modal-content > h1,
  .modal-content > p {
    color: black;
  }

  .play-btn {
    padding: 16px;
    text-align: center;
    color: white;
    cursor: pointer;
    background-color: #27ae60;
    transition: all 250ms;
    margin-top: 16px;

    &:hover {
      background-color: #2ecc71;
    }
  }
</style>
