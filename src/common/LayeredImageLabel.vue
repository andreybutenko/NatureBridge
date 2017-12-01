<template>
  <div class="layered-image-label" :style="{ top: y, left: x }"  :class="{ far: far }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'LayeredImageLabel',
    props: ['x', 'y', 'far']
  }
</script>

<style lang="scss" scoped>
  .layered-image-label {
    position: absolute;
    font-family: 'VT323';
    font-size: 32px;
    background-color: #bdc3c7;
    padding: 8px 16px;
    border: 2px dotted black;
    border-radius: 5px;

    &.far {
      font-size: 24px;
      padding: 6px 12px;
    }
  }
</style>
