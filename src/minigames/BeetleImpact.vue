<template>
  <div class="beetle-impact-container">
    <div class="beetle-impact">
      <div class="stats">
        <div>
          <b>Time:</b> <span class="big">{{timeLeft}}</span>
        </div>
        <div>
          <b>Trees Thinned:</b> <span class="big">{{score.saved}}</span>
        </div>
        <div>
          <b>Trees Lost:</b> <span class="big">{{score.killed}}</span>
        </div>
      </div>
      <SceneGenerator :scene="scene" :sub="true" />
    </div>
    <div class="instructions-background" v-if="!started || ended">
      <div class="instructions-modal" v-if="!started">
        <h1>Forest Health</h1>
        <p>It's your job to thin the beetle-infested trees in order to improve the health of the forest. </p>
        <div class="ex">
          <img src="/static/misc/pine.png" class="healthy" />
          <p>Trees will start off green and healthy!</p>
        </div>
        <div class="ex">
          <img src="/static/misc/pine.png" class="infested" />
          <p>They will turn red when they're infected by beetles.</p>
        </div>
        <div class="ex">
          <img src="/static/misc/pine.png" class="infested trembling" />
          <p>If you don't thin them quickly, they'll start trembling!</p>
        </div>
        <div class="ex">
          <img src="/static/misc/pine.png" class="infested-dead" />
          <p>Trees will die if you don't take any action.</p>
        </div>
        <p>
          Click on a tree to thin it. It takes 3 seconds to cut down a tree after you click, so act fast! Ready?
        </p>
        <div class="btn-container">
          <div class="btn-start" @click="startGame">
            Protect the Forest!
          </div>
        </div>
      </div>
      <div class="instructions-modal" v-if="ended">
        <h1>Forest Health</h1>
        <p>Great job! You successfully thinned <b>{{score.saved}}</b> trees.</p>
        <p>By thinning beetle-infested trees, you help promote growth of healthy trees.</p>
        <p v-if="score.saved < targetScore">You need just {{Math.ceil(targetScore - score.saved)}} more to earn the <b>Tree Thinning Badge</b>!</p>
        <p v-else>Congratulations, you earned the <b>Tree Thinning Badge</b> for your good performance!</p>
        <div class="btn-container">
          <div class="btn-start btn-restart" @click="reset()">
            Play Again
          </div>
          <div class="btn-start" @click="switchScene('RT3')">
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
    name: 'BeetleImpact',
    components: { SceneGenerator },
    props: ['switchScene'],
    data() {
      return {
        config: {
          gridWidth: 8.7,
          gridInterval: 0.9,
          offset: 0,
          initialInfected: 5,
          awardThreshold: 0.65
          // gridWidth: 8,
          // gridInterval: 1.1,
          // offset: 2
        },
        trees: [],
        started: false,
        ended: false,
        infectionFrequencySteps: [1000, 750, 400],
        infectionFrequencyDelay: 10000,
        infectionFrequencyStep: -1,
        infectionStepTime: 5000,

        timeLeft: 30,
        score: {
          saved: 0,
          killed: 0,
          created: 0
        }
      }
    },
    mounted() {
      this.generateTrees();
    },
    methods: {
      reset() {
        this.trees = [];
        this.generateTrees();
        this.started  = false;
        this.ended = false;
        this.timeLeft = 30;
        this.infectionFrequencyStep = -1;
        this.score = {
          saved: 0,
          killed: 0,
          created: 0
        }
      },
      generateTrees() {
        for(let x = 0; x < this.config.gridWidth; x += this.config.gridInterval) {
          for(let y = 0; y < this.config.gridWidth; y += this.config.gridInterval) {
            const id = x + '-' + y;
            this.trees.push({
              id: id,
              onclick: () => this.clickTree(id),
              infected: 0,
              countdown: -1,

              get customStyle() {
                if(this.infected == 0) {
                  return {};
                }
                else if(this.infected == 1 || this.infected == 2) {
                  return { "filter": "hue-rotate(270deg) saturate(2)", "zIndex": "999" };
                }
                else if(this.infected == 3) {
                  return { "filter": "grayscale(1)", "zIndex": "999" }
                }
                else if(this.infected == -1) {
                  return { "display": "none" }
                }
              },
              get dancing() {
                return this.infected == 2 && this.countdown == -1;
              },
              get trembling() {
                return this.countdown > -1;
              },

              left: this.getRandomPosition(x),
              top: this.getRandomPosition(y),
              source: 'misc/pine.png',
              type: 'sprite',
              size: '10%'
            })
          }
        }
      },

      startGame() {
        this.increaseDifficulty();
        this.setInfectionTimer();
        this.setCountdownTimer();
        for(let i = 0 ; i < this.config.initialInfected; i++) {
          this.infectRandomTree();
        }
        this.started = true;
      },

      clickTree(id) {
        const tree = this.getTree(id);
        if(tree.infected < 3 && tree.infected > 0 && tree.countdown == -1 && this.timeLeft > 0) {
          tree.countdown = 3;
          this.setCountdownDestroyTree(id);
        }
      },

      setCountdownDestroyTree(id) {
        setTimeout(() => {
          const tree = this.getTree(id);

          // if the tree died in the meantime
          if(tree.infected == 3 || tree.countdown == -1) return;

          tree.countdown--;
          if(tree.countdown == 0) {
            tree.infected = -1;
            tree.countdown = -1;
            this.score.saved++;
          }
          else {
            this.setCountdownDestroyTree(id);
          }
        }, 1000);
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
          this.trees.filter(tree => tree.countdown != -1).forEach(tree => tree.countdown = -1);
          if(this.score.saved > this.targetScore) {
            globalStore.earnBadge('tree-thinning');
          }
        }
      },

      // increasing difficulty
      increaseDifficulty() {
        this.infectionFrequencyStep++;
        if(this.infectionFrequencyStep < this.infectionFrequencySteps.length - 1) {
          setTimeout(this.increaseDifficulty, this.infectionFrequencyDelay);
        }
      },

      // infections
      setInfectionTimer() {
        if(this.timeLeft <= 0) return;
        setTimeout(() => {
          this.setInfectionTimer();
          this.infectRandomTree();
          if(Math.random() > 0.75) this.infectRandomTree();
        }, this.infectionFrequency);
      },
      infectRandomTree() {
        if(this.timeLeft <= 0) return;
        const tree = this.getRandomTree();
        if(tree.infected == 0) {
          tree.infected = 1;

          setTimeout(() => {
            this.progressInfection(tree.id);
          }, this.infectionStepTime);
          this.score.created++;
        }
      },
      progressInfection(id) {
        if(this.timeLeft <= 0) return;
        const tree = this.getTree(id);
        if(tree.infected > 0) {
          tree.infected++;
        }
        if(tree.infected == 1 || tree.infected == 2) {
          setTimeout(() => {
            this.progressInfection(tree.id);
          }, this.infectionStepTime);
        }
        else if(tree.infected == 3)  {
          this.score.killed++;
          tree.countdown = -1;
        }
      },

      // helpers
      getTree(id) {
        return this.trees.filter(tree => tree.id == id)[0];
      },
      getRandomTree() {
        return this.trees[Math.floor(Math.random() * this.trees.length)];
      },
      getRandomPosition(n) {
        return (Math.random() * 10 + n * 10 + this.config.offset) + "%";
      }
    },
    computed: {
      infectionFrequency() {
        return this.infectionFrequencySteps[this.infectionFrequencyStep] || 100000000000000;
      },
      countdowns() {
        return this.trees.filter(tree => tree.countdown != -1).map(tree => {
          return {
            type: 'countdown',
            left: tree.left,
            top: 'calc(' + tree.top + ' + 25px)',
            text: tree.countdown
          }
        })
      },
      targetScore() {
        return this.score.created * this.config.awardThreshold;
      },
      scene() {
        return {
          background: "backgrounds/grass.png",
          elements: [
            ...this.countdowns,
            ...this.trees
          ]
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
