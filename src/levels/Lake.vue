<template>
  <div class="container">
    <div class="center-content">
      <div>
        <div class="pano-view" :style="{ backgroundImage: panoUrl, backgroundPositionX: panoPosition }" @click="attemptNavigation()">
        </div>
        <div class="control-container">
        	<div @click="turn('left')"><img src="../assets/trail/left.png" /></div>
        	<div @click="turn('right')"><img src="../assets/trail/right.png" /></div>
        </div>
        <div class="text">
          {{ scrollingDisplay }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'Lake',
    data() {
      return {
        scrollingDisplay: '',
        scrollingBuffer: 'You get to the lake, and you take a moment to relax and think about your adventure. You finished the game!',
        stages: [
          {
            name: 'dock_pano',
            originalWidth: 1920,
            originalHeight: 346,
            offsetDeg: 135,
            initialRotation: -210,
            successRange: [60, 150]
          }
        ],
        config: {
          stepDeg: 30
        },
        name: '',
        successRange: [0, 0],
        degPxRatio: 0,
        offsetDeg: 0,
        rotation: 0,
        displaySuccess: false,
        displayFail: false
      }
    },
    created() {
      this.loadStage('dock_pano');
      setTimeout(() => this.addCharacter(), 30);
    },
    methods: {
      addCharacter() {
        this.scrollingDisplay += this.scrollingBuffer.charAt(0);
        this.scrollingBuffer = this.scrollingBuffer.substr(1);

        if(!!this.scrollingBuffer.length) {
          setTimeout(() => this.addCharacter(), 30);
        }
      },
      loadStage(name) {
        const stage = this.stages.filter(stage => stage.name == name)[0];

        const scaledImageWidth = stage.originalWidth * (600 / stage.originalHeight);
        this.degPxRatio = scaledImageWidth / 360;

        this.name = stage.name;
        this.successRange = stage.successRange;
        this.offsetDeg = stage.offsetDeg;
        this.rotation = stage.initialRotation;
      },
      turn(dir) {
        if(dir == 'left') this.setPanoRotation(this.rotation - this.config.stepDeg);
        if(dir == 'right') this.setPanoRotation(this.rotation + this.config.stepDeg);
      },
      setPanoRotation(deg) {
        this.rotation = deg;
      }
    },
    computed: {
      panoPosition() {
        return (-1 * (this.rotation + this.offsetDeg) * this.degPxRatio) + 'px';
      },
      panoUrl() {
        return 'url(\'' + require('../assets/trail/' + this.name + '.jpg') + '\')';
      }
    }
  }
</script>

<style lang="scss">
  .pano-view {
    position: relative;
    width: 1200px;
    height: 600px;
    background-repeat: repeat-x;
    background-size: cover;
    background-position-x: 20px;
    transition: all 1s;
  }

  .control-container {
    display: flex;
    width: 1200px;

    div {
      flex: 1;
      display: flex;
      justify-content: center;
      cursor: pointer;
      padding: 16px;
      transition: all 100ms;
      user-select: none;

      &:hover {
        background-color: #ccc;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  .text {
    background-color: white;
    margin-top: 16px;
    padding: 16px;
    text-align: center;
  }
</style>
