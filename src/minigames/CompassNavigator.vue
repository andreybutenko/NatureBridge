<template>
  <div>
    <Compass
      :stage="stage"
      :checkmarks="markers"
      :onSuccess="onSuccess"
      :instructions="'Look around to you find a trail you'd like to explore.'" />
    <div class="confirm-dialog-container" v-show="destination != ''">
      <div class="confirm-dialog">
        <p>
          Would you like to continue to the <b>{{ destinationText }}</b>?
        </p>
        <p class="warning" v-if="hasVisited(destination)">
          <b>Note: </b> You've already gone down this trail!
        </p>
        <div class="action">
          <div class="cancel-btn" @click="destination = ''">
            No
          </div>
          <div class="continue-btn" @click="onSuccess">
            Yes
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Compass from './Compass';
  import { globalStore } from '../main.js';

  export default {
    name: 'CompassTutorial',
    components: { Compass },
    props: ['switchScene'],
    created() {
      if(globalStore.hasVisited('MT1') && globalStore.hasVisited('HT1') && globalStore.hasVisited('RT1') && !globalStore.get('exploreFlag')) {
        globalStore.set('exploreFlag', true);
        this.switchScene('Finale1');
      }
      else {
        globalStore.set('exploreFlag', false);
      }
    },
    data() {
      return {
        destination: '',
        destinationText: '',
        stage: {
          file: 'compass_trailhead.png',
          originalWidth: 4867,
          originalHeight: 900,
          offsetDeg: 135,
          initialRotation: -90,
          stepDeg: 30,
          failMessage: 'There\'s no trail there!\nMake sure you are oriented towards a trail.',
          clickHandler: (deg, flashSuccess, flashFail) => {
            console.log(deg);
            if(deg >= 210 && deg <= 270) {
              this.destination = 'HT1';
              this.destinationText = 'Historical Trail';
            }
            else if((deg >= 330 && deg <= 360) || (deg >= 0 && deg <= 30)) {
              this.destination = 'MT1';
              this.destinationText = 'Mountain Trail';
            }
            else if(deg >= 70 && deg <= 120) {
              this.destination = 'RT1';
              this.destinationText = 'River Trail';
            }
            else {
              flashFail();
            }
          }
        }
      }
    },
    methods: {
      onSuccess() {
        this.switchScene(this.destination);
      },
      hasVisited(name) {
        return globalStore.hasVisited(name);
      }
    },
    computed: {
      markers() {
        const res = [];
        if(globalStore.hasVisited('MT1')) res.push({ x: '120px', y: '40px' });
        if(globalStore.hasVisited('HT1')) res.push({ x: '10px', y: '90px' });
        if(globalStore.hasVisited('RT1')) res.push({ x: '260px', y: '70px' });
        return res;
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
