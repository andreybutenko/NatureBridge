<template>
  <div class="sidebar">
    <div class="btns">
      <div class="btn-sidebar" @click="clickNavigation('inventory')">
        <img src="../assets/ui/backpack.png" />
        <span class="label">Backpack</span>
      </div>
      <div class="btn-sidebar" @click="clickNavigation('map')">
        <img src="../assets/ui/map.png" />
        <span class="label">Map</span>
      </div>
      <div class="btn-sidebar" @click="clickNavigation('scrapbook')">
        <img src="../assets/ui/scrapbook.png" />
        <span class="label">Scrapbook</span>
      </div>
      <div class="cheat-btn" @click="clickCheat()">Cheat</div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  export default {
    name: 'Sidebar',
    props: ['onDisplayModal'],
    methods: {
      clickNavigation(name) {
        this.onDisplayModal(name, true);
      },
      clickCheat() {
        const itemName = prompt('Item name');
        globalStore.addItem(itemName);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    flex: 0 0 200px;
    height: 100vh;
    background-color: #000;
    color: white;
    padding: 16px;
  }

  .btns {
    display: flex;
    flex-direction: column;
    height: 100%;

    .btn-sidebar {
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-family: 'Saira Extra Condensed', sans-serif;
      font-size: 18px;

      cursor: pointer;
      transition: 250ms all;
      border-radius: 5px;

      &:hover {
        background-color: #111;

        img {
          transform: scale(2) translateY(10px);
        }
      }

      img {
        transition: 250ms all;
        filter: drop-shadow(0px 0px 24px rgba(255, 255, 255, 0.8));
      }

      img, .label {
        display: block;
      }
    }

    .cheat-btn {
      cursor: pointer;
      background-color: red;
      color: white;
      text-align: center;
      border-radius: 5;
      padding: 16px;
      margin-bottom: 48px;
    }
  }
</style>
