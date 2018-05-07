<template>
  <div class="game">
    <div class="primary-view">
      <SceneGenerator
        :scene="sceneProcessed" />
    </div>
    <div class="secondary-view">
      <div class="step-container">
        <div class="step">
          <StepGenerator
            :takeStep="takeStep"
            :layerStep="layerStep" />
        </div>
      </div>
      <div class="game-btns-container">
        <div class="game-btn btn-map"></div>
        <div class="game-btn btn-scrapbook"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Levels from './levelsNew';
  import SceneGenerator from './common/LayeredImage2/SceneGenerator2';
  import StepGenerator from './common/LayeredImage2/StepGenerator';

  export default {
    name: 'GameNew',
    components: {
      SceneGenerator,
      StepGenerator
    },
    metaInfo: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
    data() {
      return {
        offsetX: 0,
        offsetY: 0,
        canvasWidth: 0,
        canvasHeight: 0,
        activeLayer: 1,
        currentScene: 'IntroTest'
      }
    },
    methods: {
      takeStep(i) {
        if(this.layerStep.stepType == 'Click through') {
          this.activeLayer++;
        }
        else {
          this.activeLayer = this.layerStep.options[i].layer;
        }
      },
      keyListener: function(e) {
        if((e.keyCode === 46 || e.keyCode == 8) && this.selectedIndex != -1) {
          //this.removeElement(this.selectedIndex);
        }
      }
    },
    computed: {
      layerStep() {
        return {
          ...this.scene.layerSteps[this.activeLayer],
          index: this.activeLayer
        }
      },
      sceneProcessed() {
        return {
          background: this.scene.background,
          elements: this.layerElements
        }
      },
      layerElements() {
        if(this.activeLayer == 0) {
          return this.scene.layers[0];
        }
        else {
          return [
            ...this.scene.layers[0],
            ...this.scene.layers[this.activeLayer]
          ];
        }
      },
      scene() {
        return Levels[this.currentScene];
      }
    },
    created: function() {
      document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function() {
      document.removeEventListener('keyup', this.escapeKeyListener);
    }
  }
</script>

<style lang="scss" scoped>
  $orientation-break: 600px;
  #app {
    background-color: white !important;
  }

  .game {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    @media only screen and (max-width: $orientation-break) {
      flex-direction: column;
    }

    .primary-view {
      flex: 1 0 75%;
      max-width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;

      @media only screen and (max-width: $orientation-break) {
        flex: 0 0 0;
        display: block;
      }
    }

    .secondary-view {
      flex: 0 1 25%;
      display: flex;
      flex-direction: column;
      background-color: #b2bec3;
      border-left: 1px solid black;
      padding: 16px;

      @media only screen and (max-width: $orientation-break) {
        flex: 1 0 0;
      }

      .step-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .step {
          width: 100%;
        }
      }

      .game-btns-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border-top: 1px solid black;
        padding-top: 16px;

        .game-btn {
          width: 140px;
          height: 64px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 250ms;
          border-radius: 16px;
          cursor: pointer;

          &:hover {
            background-color: #636e72;
          }

          &.btn-map {
            background-image: url('/static/ui/map.png');
          }
          &.btn-scrapbook {
            background-image: url('/static/ui/scrapbook.png');
          }
        }
      }
    }
  }
</style>
