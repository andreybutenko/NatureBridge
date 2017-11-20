<template>
  <div class="container narrow">
    <div class="center-content">
      <h1>Journaling!</h1>
      <p>{{ prompt }}</p>
      <textarea v-model="response" placeholder="Type a response..."></textarea>
      <div class="btn" @click="save()">Done</div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'RangerStation',
    mounted() {
      globalStore.visitLocation('RangerStation');
    },
    data() {
      return {
        prompt: 'Why or why not do you think it\'s important to have national parks?',
        response: ''
      }
    },
    methods: {
      save() {
        globalStore.addJournal(this.prompt, this.response);
        this.$router.push('CampHub');
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    margin-bottom: 1em;
  }

  textarea {
    width: 100%;
    font-family: inherit;
    font-size: 18px;
    margin: 8px;
    padding: 8px;
    height: 8em;
  }

  .btn {
    background-color: #bdc3c7;
    transition: all 250ms;
    padding: 16px;
    margin: 16px;
    cursor: pointer;
    color: black;

    &:hover {
      background-color: #95a5a6
    }
  }
</style>
