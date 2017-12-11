<template>
  <div class="modal-container" @click="onDismiss()">
    <div class="modal-content big modal-content-journal" @click.stop="() => {}">
      <!-- <div class="btn" @click="print()">Print this</div> -->
      <div class="left" v-if="journals.length > 0">
        <b>{{ journals[0].title }}</b>
        <p>{{ journals[0].response }}</p>
      </div>
      <div class="right">
        <img src="../assets/journal/weeding.png" v-if="weedersHelped" />
        <img src="../assets/journal/fish.png" v-if="salmonFreed" />
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'PlayerScrapbook',
    props: ['onDismiss'],
    computed: {
      journals() {
        return globalStore.journals;
      },
      weedersHelped() {
        return globalStore.getAttr('weedersHelped');
      },
      salmonFreed() {
        return globalStore.getAttr('salmonFreed');
      }
    },
    methods: {
      print() {
        window.print();
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    white-space: pre-wrap;
    margin-bottom: 16px;
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

  .modal-content-journal {
    background-image: url('../assets/ui/ranger-wiki-bg.png');
    display: flex;
  }

  .left, .right {
    width: 323px;
    margin-left: 55px;
    margin-right: 55px;
    margin-top: 60px;
    margin-bottom: 60px;

    img {
      width: 100%;
    }
  }

  @media print {
    .btn {
      display: none;
    }
  }
</style>
