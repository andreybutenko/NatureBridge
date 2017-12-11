<template>
  <div class="modal-container" @click="onDismiss()">
    <div class="modal-content big" @click.stop="() => {}">
      <img src="../assets/ui/backpack-open.png" class="backpack-icon" />
      <ul v-if="inventory.length > 0">
        <li v-for="item in inventory">{{ item }}</li>
      </ul>
      <p v-else>
        Your backpack is empty!
      </p>
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
  .backpack-icon {
    margin-top: -100px;
    margin-left: -100px;
  }
</style>
