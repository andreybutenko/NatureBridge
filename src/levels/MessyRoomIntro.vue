<template>
  <div class="container narrow">
    <div class="center-content" v-if="step == 0">
      <img src="../assets/messy-awake/dark-sleeping.png" />
      <p>
        {{ scrollingDisplay }}
      </p>
      <div class="btn" v-if="showBtn" @click="step++">Continue</div>
    </div>
    <div class="center-content" v-if="step == 1">
      <img src="../assets/messy-awake/dark-awake.png" />
      <p>
        You wake up and realize that you forgot to finish packing the night before. Find as many items as you can before the bus leaves!
      </p>
      <router-link class="btn" to="Game/MessyRoom">Pack Fast!</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MessyRoomIntro',
    mounted() {
      setTimeout(() => this.addCharacter(), 50);
    },
    data() {
      return {
        step: 0,
        showBtn: false,
        scrollingDisplay: '',
        scrollingBuffer: '"Wake up, Maria! You’re going to miss the bus!"'
      }
    },
    methods: {
      addCharacter() {
        this.scrollingDisplay += this.scrollingBuffer.charAt(0);
        this.scrollingBuffer = this.scrollingBuffer.substr(1);

        if(!!this.scrollingBuffer.length) {
          setTimeout(() => this.addCharacter(), 30);
        }
        else {
          this.showBtn = true;
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  p {
    color: white;
  }

  img {
    margin-bottom: 1em;
  }

  .btn {
    background-color: #bdc3c7;
    transition: all 250ms;
    padding: 16px;
    margin: 16px;
    cursor: pointer;
    color: black;

    &:hover {
      background-color: #95a5a6
    }
  }
</style>
