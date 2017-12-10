<template>
  <div class="journal-compose" v-show="visible">
    <p class="prompt">{{ prompt }}</p>
    <textarea v-model="response" placeholder="Type a response..."></textarea>
    <div class="btn" @click="() => save()">Done</div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'JournalEntry',
    props: ['prompt', 'visible', 'onComplete'],
    data() {
      return {
        response: ''
      }
    },
    methods: {
      save() {
        globalStore.addJournal(this.prompt, this.response);
        this.onComplete();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .journal-compose {
    position: absolute;
    top: 0;
    margin: 0 auto;
    background-color: white;
    background-image: url('../assets/ui/journal-compose-bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 800px;
    width: 500px;
    padding: 32px;
    margin-top: 16px;
  }

  img {
    margin-bottom: 1em;
  }

  .prompt {
    font-family: 'VT323';
    font-size: 24px;
    line-height: 1em;
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
