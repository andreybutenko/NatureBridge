<template>
  <div class="squirrel-trivia-container" v-if="shown">
    <div class="squirrel-trivia">
      <div class="content">
        <h1>Squirrel Trivia!</h1>
        <p>{{ question }}</p>
        <div class="btn-container" :class="{ complete: chosen != -1 }">
          <div
            v-for="(option, index) in options"
            class="btn"
            :class="{ correct: chosen != -1 && correct == index, incorrect: chosen == index && correct != index }"
            @click="() => choose(index)">{{ option }}</div>
        </div>
        <p v-if="chosen != -1">{{ explanation }}</p>
        <div class="btn close" @click="() => shown = false" v-if="chosen != -1">Okay</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'SquirrelTrivia',
    props: ['registerShow'],
    data() {
      return {
        question: '',
        options: [],
        correct: -1,
        chosen: -1,
        explanation: '',
        shown: false
      }
    },
    mounted() {
      this.registerShow(this.show);
    },
    methods: {
      show() {
        this.loadQuestion();
        this.shown = true;
      },
      loadQuestion() {
        const result = globalStore.getTrivia();
        this.question = result.question;
        this.options = result.options;
        this.correct = result.correct;
        this.explanation = result.explanation;
        this.chosen = -1;
      },
      choose(index) {
        if(this.chosen == -1) {
          this.chosen = index;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .squirrel-trivia-container {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;

    .squirrel-trivia {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 800px;
      height: 600px;
      transform: translateX(-50%) translateY(-50%);
      background-image: url('../assets/trivia-bg.png');

      .content {
        margin-left: 190px;
        margin-top: 140px;
        margin-right: 100px;

        .btn-container {
          display: flex;
          flex-wrap: wrap;

          .btn {
            flex: 1 0 calc(50% - 16px);
            text-align: center;
            background-color: #ccc;
            transition: 250ms all;
            margin: 8px;
            padding: 16px;
            cursor: pointer;
            font-size: 14px;

            &:hover {
              background-color: #ddd;
            }
          }

          &.complete {
            .btn {
              padding: 8px 16px;
              margin: 4px;

              &.correct {
                background-color: #2ecc71;
              }

              &.incorrect {
                background-color: #e74c3c;
              }
            }
          }
        }

        & > .btn {
          background-color: white;
          border: 1px solid #999;
          padding: 4px;
          text-align: center;
          margin-top: 4px;
          transition: 250ms all;
          cursor: pointer;

          &:hover {
            background-color: #eee;
          }
        }
      }
    }
  }
</style>
