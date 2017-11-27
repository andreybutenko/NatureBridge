<template>
  <div class="container">
    <div class="center-content">
      <div>
        <div class="pano-view" :style="{ backgroundImage: panoUrl, backgroundPositionX: panoPosition }" @click="attemptNavigation()">
          <img class="pano-minimap" :src="minimapUrl" />
          <div class="compass">
            <div class="compass-pointer" :style="{ transform: compassTransform }"></div>
          </div>
          <div class="success-popup" v-if="displaySuccess">
            <img src="../assets/trail/success.png" />
          </div>
        </div>
        <div class="control-container">
        	<div @click="turn('left')"><img src="../assets/trail/left.png" /></div>
        	<div @click="turn('right')"><img src="../assets/trail/right.png" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'TrailGame',
    data() {
      return {
        stages: [
          {
            name: 'painted-hills',
            originalWidth: 14848,
            originalHeight: 2616,
            offsetDeg: 135,
            initialRotation: 180,
            successRange: [315, 360]
          }
        ],
        config: {
          stepDeg: 45
        },
        name: '',
        successRange: [0, 0],
        degPxRatio: 0,
        offsetDeg: 0,
        rotation: 0,
        displaySuccess: false
      }
    },
    mounted() {
      globalStore.visitLocation('TrailGame');
    },
    created() {
      this.loadStage('painted-hills');
    },
    methods: {
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
      },
      attemptNavigation() {
        const normalizedRotation = this.rotation % 360 || 360;
        console.log(normalizedRotation);
        console.log(this.successRange)
    	  if(normalizedRotation >= this.successRange[0] && normalizedRotation <= this.successRange[1]) {
  		    this.flashSuccess();
    	  }
      },
      flashSuccess() {
        this.displaySuccess = true;
    	  setTimeout(() => this.displaySuccess = false, 500);
      }
    },
    computed: {
      panoPosition() {
        return (-1 * (this.rotation + this.offsetDeg) * this.degPxRatio) + 'px';
      },
      compassTransform() {
        return 'rotate(-' + this.rotation + 'deg)';
      },
      minimapUrl() {
        return require('../assets/trail/' + this.name + '-map.png');
      },
      panoUrl() {
        return 'url(\'' + require('../assets/trail/' + this.name + '-pano.jpg') + '\')';
      }
    }
  }
</script>

<style lang="scss">
  .pano-view {
    position: relative;
    width: 800px;
    height: 600px;
    background-repeat: repeat-x;
    background-size: cover;
    background-position-x: 20px;
    transition: all 1s;

    .pano-minimap {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 300px;
    }

    .compass {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 100px;
      height: 100px;
      background-image: url('../assets/trail/compass-bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      .compass-pointer {
        background-image: url('../assets/trail/compass-fg.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        transition: all 1s;
      }
    }
  }

  .control-container {
    display: flex;
    width: 800px;

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

  .success-popup {
    background-color: rgba(46, 204, 113, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms;
  }
</style>
