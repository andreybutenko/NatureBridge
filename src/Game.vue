<template>
  <div class="ui-container">
    <Sidebar
      :onDisplayModal="displayModal" />
    <PlayerMap v-if="mapVisible" :onDismiss="() => mapVisible = false" />
    <PlayerInventory v-if="inventoryVisible" :onDismiss="() => inventoryVisible = false" />
    <PlayerScrapbook v-if="scrapbookVisible" :onDismiss="() => scrapbookVisible = false" />
    <router-view></router-view>
    <Toast :text="toastText" :visible="toastVisible" />
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
    name: 'game',
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
  body {
    background-color: #333;
  }
  .ui-container {
    display: flex;
    flex-direction: row;
  }
</style>
