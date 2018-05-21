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
          <div class="fail-popup" v-if="displayFail">
            <p>{{ stage.failMessage }}</p>
          </div>
        </div>
        <div class="control-container">
        	<div @click="turn('left')"><img src="../assets/trail/left.png" /></div>
          <div @click="attemptNavigation()" class="labelled">
            <img src="../assets/trail/up.png" />
            <p>GO</p>
          </div>
        	<div @click="turn('right')"><img src="../assets/trail/right.png" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Compass',
    props: ['stage', 'onSuccess'],
    data() {
      return {
        degPxRatio: 0,
        rotation: 0,
        displaySuccess: false,
        displayFail: false
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
      },
      attemptNavigation() {
        if(this.displaySuccess || this.displayFail) return;

        let normalizedRotation = this.rotation % 360 || 360;
        if(normalizedRotation < 0) { normalizedRotation = normalizedRotation + 360; }

        if(this.stage.hasOwnProperty('clickHandler')) {
          this.stage.clickHandler(normalizedRotation, this.flashSuccess, this.flashFail);
          return;
        }

    	  if(normalizedRotation >= this.stage.successRange[0] && normalizedRotation <= this.stage.successRange[1]) {
  		    this.flashSuccess();
    	  }
        else {
          this.flashFail();
        }
      },
      flashSuccess() {
        this.displaySuccess = true;
    	  setTimeout(() => {
          this.displaySuccess = false;
          this.onSuccess();
        }, 1000);
      },
      flashFail() {
        this.displayFail = true;
    	  setTimeout(() => this.displayFail = false, 2000);
      }
    },
    computed: {
      panoPosition() {
        return (-1 * (this.rotation + this.stage.offsetDeg) * this.degPxRatio) + 'px';
      },
      compassRotation() {
        return this.stage.hasOwnProperty('compassTransform') ?
          this.stage.compassTransform(this.rotation) :
          this.rotation;
      },
      compassTransform() {
        return 'rotate(' + (-1 * this.compassRotation) + 'deg)';
      },
      minimapUrl() {
        return '/NatureBridge/static/misc/' + this.stage.file;
      },
      panoUrl() {
        return 'url(/NatureBridge/static/backgrounds/' + this.stage.file + ')';
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

      &.labelled {
        flex-direction: column;
        align-items: center;

        img {
          width: 40px;
          height: 40px;
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

  .success-popup {
    background-color: rgba(46, 204, 113, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms;
  }

  .fail-popup {
    background-color: rgba(198, 74, 43, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms;

    p {
      font-family: 'VT323';
      font-size: 24px;
      background-color: #cdcccc;
      border: 5px solid black;
      text-align: center;
      padding: 8px 16px;
      user-select: none;
      white-space: pre;
    }
  }
</style>
