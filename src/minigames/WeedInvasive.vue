<template>
  <div class="beetle-impact-container">
    <div class="beetle-impact">
      <div class="stats">
        <div>
          <b>Weeds Remaining:</b> {{remaining}}
        </div>
        <div>
          <b>Weeds Picked:</b> {{score.correct}}
        </div>
        <div>
          <b>Incorrectly Picked:</b> {{score.wrong}}
        </div>
      </div>
      <SceneGenerator :scene="scene" />
    </div>
    <div class="instructions-background" v-if="!started || ended || wrong">
      <div class="instructions-modal" v-if="wrong">
        <h1>Careful!</h1>
        <p>That was a native species, not a stinky bob!</p>
        <p>Remember: stinky bobs have <i>purple</i> petals.</p>
        <div class="btn-start" @click="wrong = false">
          Continue
        </div>
      </div>
      <div class="instructions-modal" v-if="!started">
        <h1>Invasive Species</h1>
        <p>It's your job to weed stinky bob!</p>
        <p>They are an invasive species, which means they threaten the native species!</p>
        <div class="ex">
          <img src="/NatureBridge/static/misc/stinkybob.png" />
          <p>Stinky bob have purple petals.</p>
        </div>
        <div class="ex">
          <img src="/NatureBridge/static/misc/native1.png" />
          <p>Native species have yellow petals.</p>
        </div>
        <p>
          Click on a plant to pick it. Make sure to only pick the stinky bob!
        </p>
        <div class="btn-start" @click="startGame">
          Let's Play!
        </div>
      </div>
      <div class="instructions-modal" v-if="ended">
        <h1>Invasive Species</h1>
        <p>Great job! You successfully thinned <b>{{score.correct}}</b> stinky bob.</p>
        <p>By removing invasive species, you are preventing damage to the ecosystem.</p>
        <div class="btn-start">
          Continue
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SceneGenerator from '../common/LayeredImage2/SceneGenerator2';
  export default {
    name: 'WeedInvasive',
    components: { SceneGenerator },
    data() {
      return {
        config: {
          gridWidth: 8.7,
          gridInterval: 0.4,
          offset: 0,
          initialWeeds: 10
        },
        plants: [],
        started: false,
        ended: false,
        wrong: false,
        score: {
          correct: 0,
          wrong: 0
        }
      }
    },
    mounted() {
      this.generatePlants();
      this.generateWeeds();
    },
    methods: {
      generatePlants() {
        for(let x = 0; x < this.config.gridWidth; x += this.config.gridInterval) {
          for(let y = 0; y < this.config.gridWidth; y += this.config.gridInterval) {
            const id = x + '-' + y;

            this.plants.push({
              id: id,
              picked: false,
              weed: false,
              onclick: () => this.clickPlant(id),
              get customStyle() {
                return {
                  ...(this.picked ? { "display": "none" } : {}),
                  ...(this.weed ? { "zIndex": "999" } : {})
                }
              },

              left: this.getRandomPosition(x),
              top: this.getRandomPosition(y),
              get source() {
                return this.weed ? 'misc/stinkybob.png' : 'misc/native1.png';
              },
              type: 'sprite',
              size: '5%'
            })
          }
        }
      },
      generateWeeds() {
        for(let i = 0; i < this.config.initialWeeds; i++) {
          this.getRandomPlant().weed = true;
        }
      },

      startGame() {
        this.started = true;
      },

      clickPlant(id) {
        const plant = this.getPlant(id);
        plant.picked = true;
        if(plant.weed) {
          this.score.correct++;
        }
        else {
          this.wrong = true;
          this.score.wrong++;
        }
        if(this.remaining <= 0) {
          this.ended = true;
        }
      },

      // helpers
      getPlant(id) {
        return this.plants.filter(plant => plant.id == id)[0];
      },
      getRandomPlant() {
        return this.plants[Math.floor(Math.random() * this.plants.length)];
      },
      getRandomPosition(n) {
        return (Math.random() * 10 + n * 10 + this.config.offset) + "%";
      }
    },
    computed: {
      remaining() {
        return this.config.initialWeeds - this.score.correct;
      },
      scene() {
        return {
          background: "backgrounds/weeders_px-01.png",
          elements: this.plants
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .beetle-impact-container {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100vh;
  }
  .beetle-impact {
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .stats {
      display: flex;
      width: 100%;
      background-color: #3498db;
      padding: 16px;

      & > * {
        flex: 1;
        text-align: center;
      }
    }
  }

  .instructions-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;

    .instructions-modal {
      background-color: white;
      padding: 32px;

      .ex {
        display: flex;
        align-items: center;
        margin: 1em 0;

        img {
          height: 2.5em;
          margin-right: 1em;
        }

        .infested {
          filter: hue-rotate(270deg) saturate(2)
        }

        .trembling {
          transform-origin: 50% 100%;
          animation-name: wiggle;
          animation-duration: 2000ms;
          animation-iteration-count: infinite;
        }

        .infested-dead {
          filter: grayscale(1);
        }
      }

      .btn-start {
        padding: 16px;
        text-align: center;
        color: white;
        cursor: pointer;
        background-color: #27ae60;
        transition: all 250ms;
        margin-top: 16px;

        &:hover {
          background-color: #2ecc71;
        }
      }
    }
  }
</style>
