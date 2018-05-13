<template>
  <div class="minigame-viewer">
    <CompassTutorial
      :switchScene="switchScene"
      v-if="enabled('CompassTutorial')" />
    <CompassNavigator
      :switchScene="switchScene"
      v-if="enabled('CompassNavigator')" />
  </div>
</template>

<script>
  import CompassTutorial from './CompassTutorial'
  import CompassNavigator from './CompassNavigator'

  export default {
    name: 'MinigameViewer',
    props: ['name', 'switchScene'],
    components: {
      CompassTutorial,
      CompassNavigator
    },
    methods: {
      enabled(name) {
        return this.name == name;
      }
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
