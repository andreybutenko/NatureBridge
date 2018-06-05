<template>
  <div class="beetle-impact-container">
    <div class="beetle-impact">
      <div class="stats">
        <div>
          <b>Time Left:</b> <span class="big">{{timeLeft}}</span>
        </div>
        <div>
          <b>Weeds Picked:</b> <span class="big">{{score.correct}}</span>
        </div>
        <div class="key">
          <img src="/static/misc/plant2.png" />
          <span>Pick only this plant!</span>
        </div>
      </div>
      <SceneGenerator :scene="scene" :sub="true" />
    </div>
    <div class="instructions-background" v-if="!started || ended || wrong">
      <div class="instructions-modal" v-if="wrong">
        <h1>Careful!</h1>
        <p>That was a native plant, not an invasive plant!</p>
        <div class="btn-container">
          <div class="btn-start" @click="wrong = false">
            Continue
          </div>
        </div>
      </div>
      <div class="instructions-modal" v-if="!started">
        <h1>Invasive Species</h1>
        <p>It's your job to remove invasive plants, which harm the ecosystem by preventing native species from thriving.</p>
        <div class="ex">
          <img src="/static/misc/plant2.png" />
          <p>These are the invasive species we want to pick.</p>
        </div>
        <div class="ex">
          <img src="/static/misc/plant1.png" />
          <img src="/static/misc/plant3.png" />
          <p>These are the native plants we want to keep.</p>
        </div>
        <p>
          Click on a plant to pick it. Make sure to only pick the invasive species! Pick as many as possible in {{timeLeft}} seconds.
        </p>
        <div class="btn-container">
          <div class="btn-start" @click="startGame">
            Let's Weed!
          </div>
        </div>
      </div>
      <div class="instructions-modal" v-if="ended">
        <h1>Invasive Species</h1>
        <p>Great work! You successfully weeded <b>{{score.correct}}</b> invasive plants.</p>
        <p v-if="score.correct < config.awardThreshold">You need just {{Math.ceil(config.awardThreshold - score.correct)}} more to earn the <b>Species Protector Badge</b>!</p>
        <p v-else>Congratulations, you earned the <b>Species Protector Badge</b> for your good performance!</p>
        <div class="btn-container">
          <div class="btn-start btn-restart" @click="reset()">
            Play Again
          </div>
          <div class="btn-start" @click="switchScene('MT1_2')">
            Continue
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import SceneGenerator from '../common/LayeredImage2/SceneGenerator2';
  export default {
    name: 'WeedInvasive',
    components: { SceneGenerator },
    props: ['switchScene'],
    data() {
      return {
        config: {
          gridWidth: 8.7,
          gridInterval: 0.4,
          offset: 0,
          weedId: 1,
          awardThreshold: 50
        },
        timeLeft: 40,
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
    },
    methods: {
      reset() {
        this.plants = [];
        this.timeLeft = 40;
        this.started = false;
        this.ended = false;
        this.generatePlants();
        this.score = {
          correct: 0,
          wrong: 0
        };
      },

      generatePlants() {
        for(let x = 0; x < this.config.gridWidth; x += this.config.gridInterval) {
          for(let y = 0; y < this.config.gridWidth; y += this.config.gridInterval) {
            const id = x + '-' + y;

            const weedId = this.config.weedId;

            this.plants.push({
              id: id,
              picked: false,
              plantType: Math.floor(Math.random() * 3),
              onclick: () => this.clickPlant(id),
              get customStyle() {
                return {
                  ...(this.picked ? { "display": "none" } : {}),
                  ...(this.plantType == weedId ? { "zIndex": "999" } : {})
                }
              },

              left: this.getRandomPosition(x),
              top: this.getRandomPosition(y),
              get source() {
                if(this.plantType == 0) return 'misc/plant1.png';
                else if(this.plantType == 1) return 'misc/plant2.png';
                else return 'misc/plant3.png';
              },
              type: 'sprite',
              size: '5%'
            })
          }
        }
      },

      startGame() {
        this.started = true;
        this.setCountdownTimer();
      },

      setCountdownTimer() {
        if(this.timeLeft > 0) {
          setTimeout(() => {
            this.timeLeft--;
            this.setCountdownTimer();
          }, 1000);
        }
        else {
          this.ended = true;
          this.wrong = false;
          if(this.score.correct > this.config.awardThreshold) {
            globalStore.earnBadge('species_protector');
          }
        }
      },

      clickPlant(id) {
        const plant = this.getPlant(id);
        plant.picked = true;
        if(plant.plantType == this.config.weedId) {
          this.score.correct++;
        }
        else {
          this.wrong = true;
          this.score.wrong++;
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
        return this.plants.filter(plant => plant.plantType == this.config.weedId).length;
      },
      scene() {
        return {
          background: "backgrounds/grass_dark.png",
          elements: this.plants
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $orientation-break: 600px;
  .beetle-impact-container {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100vh;

    .beetle-impact {
      user-select: none;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: stretch;

      @media only screen and (max-width: $orientation-break) {
        flex-direction: column;
      }

      .stats {
        display: flex;
        flex-direction: column;
        background-color: #3498db;
        padding: 16px;

        @media only screen and (max-width: $orientation-break) {
          flex-direction: row;
        }

        & > * {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .big {
          font-size: 64px;
          display: block;

          @media only screen and (max-width: $orientation-break) {
            font-size: 32px;
          }
        }

        .key {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          img {
            height: 3em;
            margin-right: 1em;
          }
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

        .btn-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .btn-start {
            flex: 1;
            padding: 16px;
            text-align: center;
            color: white;
            cursor: pointer;
            background-color: #27ae60;
            transition: all 250ms;
            margin-top: 16px;

            &.btn-restart {
              color: black;
              background-color: #fdcb6e;

              &:hover {
                background-color: #ffeaa7;
              }
            }

            &:hover {
              background-color: #2ecc71;
            }
          }
        }
      }
    }
  }
</style>
