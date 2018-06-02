<template>
  <div>
    <CinematicCompass
      :stage="stage" />
  </div>
</template>

<script>
  import CinematicCompass from './CinematicCompass';
  import { globalStore } from '../main.js';

  export default {
    name: 'Lake',
    components: { CinematicCompass },
    props: ['showJournalEntry', 'switchScene'],
    data() {
      return {
        stage: {
          file: 'dock_pano.jpg',
          originalWidth: 9112,
          originalHeight: 1644,
          offsetDeg: 135,
          initialRotation: -210,
          stepDeg: 30,
          showMap: false,
          clickHandler: () => {
            this.showJournalEntry('For climate change adaptation, there is no recipe, no road map, and yet no time to lose; science and society must tackle the climate change issue in a timely way, despite uncertainty. What your most important values for the Park to take in the face of a changing climate? What do you love about the parks that you want to see protected?')
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .confirm-dialog-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    flex: 0 0 100vw;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    transition: 250ms all;

    background-color: rgba(0, 0, 0, 0.4);

    .confirm-dialog {
      background-color: #dfe6e9;
      border-radius: 15px;
      padding: 16px;
      width: 800px;
      overflow: hidden;

      p {
        font-family: 'Saira Extra Condensed', sans-serif;
        font-size: 32px;
      }

      .warning {
        color: #d63031;
      }

      .action {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 16px;

        .continue-btn {
          background-color: #00b894;

          &:hover {
            background-color: #019679;
          }
        }

        .cancel-btn {
          background-color: #7f8c8d;
          margin-right: 16px;

          &:hover {
            background-color: #626c6d;
          }
        }

        .continue-btn,
        .cancel-btn {
          display: inline-block;
          color: white;
          border-radius: 15px;
          padding: 32px 64px;
          text-align: center;
          cursor: pointer;
          transition: 250ms all;
        }
      }
    }
  }
</style>
