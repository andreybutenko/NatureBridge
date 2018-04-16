<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import LevelIndex from './levels/index.js';
  import Sidebar from './common/Sidebar';
  import PlayerMap from './common/PlayerMap';
  import PlayerInventory from './common/PlayerInventory';
  import PlayerScrapbook from './common/PlayerScrapbook';
  import Toast from './common/Toast';
  import { globalStore } from './main.js';

  export default {
    name: 'app',
    components: {
      Sidebar,
      PlayerMap,
      PlayerInventory,
      PlayerScrapbook,
      Toast,
      ...LevelIndex.components
    },
    data() {
      return {
        mapVisible: false,
        toastText: '',
        toastVisible: false,
        inventoryVisible: false,
        scrapbookVisible: false
      }
    },
    methods: {
      displayModal(name, visibility) {
        this[name + 'Visible'] = visibility;
      },
      showToast(text) {
        this.toastText = text;
        this.toastVisible = true;
        setTimeout(() => this.toastVisible = false, 3000);
      }
    },
    computed: {
      inventory() {
        return globalStore.inventory;
      },
      inventoryMessage() {
        return globalStore.inventoryMessage;
      }
    },
    watch: {
      inventoryMessage() {
        this.showToast(globalStore.inventoryMessage);
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Saira+Extra+Condensed|VT323');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  .container {
    padding: 16px;
    display: flex;
    justify-content: center;
    width: 100%;

    & > div {
      flex: 1;
    }

    &.narrow > div {
      width: 850px;
      flex: 0 1 850px;
    }
  }

  a:not(.normal) {
    display: inline-block;
    text-decoration: none;
    padding: 16px;
    margin: 8px 8px 8px 0;

    color: white;
    background-color: #3498db;
  }

  p {
    line-height: 1.8;
  }

  ul {
    margin-left: 1.5em;
  }

  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .modal-content {
      width: 500px;
      background-color: white;
      padding: 16px;

      &.big {
        width: 800px;
        height: 600px;
      }
    }
  }
</style>
