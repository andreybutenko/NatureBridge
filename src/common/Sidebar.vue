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
      <div class="btn-sidebar">
        <img src="../assets/ui/scrapbook.png" />
        <span class="label">Scrapbook</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: ['onDisplayModal'],
    methods: {
      clickNavigation(name) {
        this.onDisplayModal(name, true);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    flex: 0 0 400px;
    height: 100vh;
    background-color: #bdc3c7;
    padding: 16px;
  }

  .btns {
    display: flex;
    flex-direction: row;

    background-color: white;
    padding: 8px 16px;

    .btn-sidebar {
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: center;

      font-family: 'Saira Extra Condensed', sans-serif;
      font-size: 18px;

      cursor: pointer;
      transition: 250ms all;
      border-radius: 5px;

      &:hover {
        background-color: #ecf0f1;
      }

      img, .label {
        display: block;
      }
    }
  }
</style>
