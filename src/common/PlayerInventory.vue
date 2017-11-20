<template>
  <div class="modal-container" @click="onDismiss()">
    <div class="modal-content big" @click.stop="() => {}">
      <ul>
        <li v-for="item in inventory">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'PlayerInventory',
    props: ['onDismiss'],
    computed: {
      inventory() {
        return globalStore.inventory;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .map {
    position: relative;
  }
</style>
