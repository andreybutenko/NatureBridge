<template>
  <div class="toast-container">
    <div class="toast" :class="{ hidden: !visible }">
      {{ text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    props: ['text', 'visible']
  }
</script>

<style lang="scss" scoped>
  .toast-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .toast {
      width: 600px;
      background-color: black;
      text-align: center;
      color: white;
      padding: 16px;
      transition: all 250ms;
      transform: translateY(0);

      &.hidden {
        transform: translateY(100%);
      }
    }
  }
</style>
