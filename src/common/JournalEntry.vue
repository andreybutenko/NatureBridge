<template>
  <div class="journal-container" v-if="shown">
    <div class="journal-compose">
      <p class="prompt">{{ prompt }}</p>
      <textarea v-model="response" placeholder="Type a response..."></textarea>
      <div class="btn" @click="() => save()">Done</div>
      <p class="read-more">Read about this on the <a class="normal" @click="showRangerWiki">Ranger Wiki!</a></p>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'JournalEntry',
    props: ['registerShow', 'showRangerWiki', 'onComplete'],
    data() {
      return {
        shown: false,
        prompt: '',
        response: ''
      }
    },
    mounted() {
      this.registerShow(this.show);
    },
    methods: {
      show(prompt) {
        this.shown = true;
        this.prompt = prompt;
        this.response = '';
      },
      save() {
        globalStore.addJournal(this.prompt, this.response);
        this.shown = false;
        this.onComplete();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .journal-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw !important;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .journal-compose {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: white;
    background-image: url('../assets/ui/journal-compose-bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 724px;
    width: 500px;
    padding: 32px;
    margin-top: 16px;
  }

  img {
    margin-bottom: 1em;
  }

  .prompt {
    white-space: pre-wrap;
    font-family: 'VT323';
    font-size: 24px;
    line-height: 1em;
  }

  .read-more {
    padding: 16px 0;
    text-align: center;

    a {
      cursor: pointer;
      color: #3498db;
      text-decoration: underline;
    }
  }

  textarea {
    width: 100%;
    font-family: inherit;
    font-size: 18px;
    padding: 8px;
    height: 8em;
    margin: 1em 0;
    resize: vertical;
  }

  .btn {
    background-color: #bdc3c7;
    transition: all 250ms;
    padding: 16px;
    cursor: pointer;
    color: black;

    &:hover {
      background-color: #95a5a6
    }
  }
</style>
