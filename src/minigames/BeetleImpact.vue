<template>
  <div class="beetle-impact-container">
    <div class="beetle-impact">
      <div class="stats">
        <div>
          <b>Time Remaining:</b> {{timeLeft}}
        </div>
        <div>
          <b>Trees Thinned:</b> {{score.saved}}
        </div>
        <div>
          <b>Trees Lost:</b> {{score.killed}}
        </div>
      </div>
      <SceneGenerator :scene="scene" />
    </div>
    <div class="instructions-background" v-if="!started || ended">
      <div class="instructions-modal" v-if="!started">
        <h1>Beetle Impact</h1>
        <p>It's your job to thin the beetle-infected trees!</p>
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
          Click on a tree to thin it. The beetle outbreak will get worse over the 40 seconds. Ready?
        </p>
        <div class="btn-start" @click="startGame">
          Let's Play!
        </div>
      </div>
      <div class="instructions-modal" v-if="ended">
        <h1>Beetle Impact</h1>
        <p>Great job! You successfully thinned <b>{{score.saved}}</b> trees.</p>
        <p>By thinning beetle-infested trees, you are preventing damage to the ecosystem.</p>
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
    name: 'BeetleImpact',
    components: { SceneGenerator },
    data() {
      return {
        config: {
          gridWidth: 8.7,
          gridInterval: 0.9,
          offset: 0
          // gridWidth: 8,
          // gridInterval: 1.1,
          // offset: 2
        },
        trees: [],
        started: false,
        ended: false,
        infectionFrequencySteps: [2500, 1000, 750, 500],
        infectionFrequencyDelay: 10000,
        infectionFrequencyStep: -1,
        infectionStepTime: 5000,

        timeLeft: 40,
        score: {
          saved: 0,
          killed: 0
        }
      }
    },
    mounted() {
      this.generateTrees();
    },
    methods: {
      generateTrees() {
        for(let x = 0; x < this.config.gridWidth; x += this.config.gridInterval) {
          for(let y = 0; y < this.config.gridWidth; y += this.config.gridInterval) {
            const id = x + '-' + y;
            this.trees.push({
              id: id,
              onclick: () => this.clickTree(id),
              infected: 0,

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
                return this.infected == 2;
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
        this.started = true;
      },

      clickTree(id) {
        const tree = this.getTree(id);
        if(tree.infected < 3 && tree.infected > 0) {
          tree.infected = -1;
          this.score.saved++;
        }
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
      scene() {
        return {
          background: "backgrounds/weeders_px-01.png",
          elements: this.trees
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
