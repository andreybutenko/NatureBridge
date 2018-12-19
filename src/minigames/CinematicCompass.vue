<template>
  <div class="container" :style="getContainerScaling()">
    <div>
      <div class="pano-view" :style="{ backgroundImage: panoUrl, backgroundPositionX: panoPosition }"></div>
      <div class="control-container">
      	<div @click="turn('left')"><img src="../assets/trail/left.png" /></div>
        <div @click="stage.clickHandler()" class="labelled">
          <img :src="action.src" />
          <p>{{action.text}}</p>
        </div>
      	<div @click="turn('right')"><img src="../assets/trail/right.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Scaler from '../common/Scaler';

  export default {
    name: 'CinematicCompass',
    props: ['stage', 'action'],
    mixins: [Scaler],
    data() {
      return {
        degPxRatio: 0,
        rotation: 0
      }
    },
    created() {
      this.setup();
    },
    methods: {
      setup() {
        const scaledImageWidth = this.stage.originalWidth * (600 / this.stage.originalHeight);
        this.degPxRatio = scaledImageWidth / 360;

        this.successRange = this.stage.successRange;
        this.rotation = this.stage.initialRotation;
      },
      turn(dir) {
        if(dir == 'left') this.setPanoRotation(this.rotation - this.stage.stepDeg);
        if(dir == 'right') this.setPanoRotation(this.rotation + this.stage.stepDeg);
      },
      setPanoRotation(deg) {
        if(this.stage.restrictRotation &&
          (deg < this.stage.rotateRange[0] || deg > this.stage.rotateRange[1])) {
          return;
        }

        this.rotation = deg;
      }
    },
    computed: {
      panoPosition() {
        return (-1 * (this.rotation + this.stage.offsetDeg) * this.degPxRatio) + 'px';
      },
      panoUrl() {
        return 'url(/static/backgrounds/' + this.stage.file + ')';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    user-select: none;
  }

  .pano-view {
    position: relative;
    width: 100%;
    height: 600px;
    background-repeat: repeat-x;
    background-size: cover;
    background-position-x: 20px;
    transition: all 1s;
  }

  .control-container {
    display: flex;
    width: 100%;

    div {
      flex: 1;
      display: flex;
      justify-content: center;
      cursor: pointer;
      padding: 16px;
      transition: all 100ms;
      user-select: none;

      &.labelled {
        flex-direction: column;
        align-items: center;

        animation-name: pulse-anim;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        border-radius: 10px;

        img {
          width: 50px;
          height: 50px;
        }

        p {
          font-family: 'VT323';
          font-size: 24px;
        }
      }

      &:hover {
        background-color: #ccc;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  @keyframes pulse-anim {
    from { background-color: #ffffff; }
    to { background-color: #00cec9; }
  }
</style>
