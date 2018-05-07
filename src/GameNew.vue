<template>
  <div class="game">
    <div class="primary-view">
      <SceneGenerator
        :scene="sceneProcessed" />
    </div>
    <div class="secondary-view">
      <div class="step-container">
        <StepGenerator
          :takeStep="takeStep"
          :layerStep="layerStep" />
      </div>
      <div class="game-btns-container">
        [BUTTON] [BUTTON] [BUTTON]
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
      background-color: red;
      max-width: 100vw;

      @media only screen and (max-width: $orientation-break) {
        flex: 0 0 0;
      }
    }

    .secondary-view {
      flex: 0 1 25%;
      display: flex;
      flex-direction: column;
      background-color: blue;

      @media only screen and (max-width: $orientation-break) {
        flex: 1 0 0;
      }

      .step-container {
        background-color: purple;
        flex: 1;
      }

      .game-btns-container  {
        background-color: yellow;
      }
    }
  }
</style>
