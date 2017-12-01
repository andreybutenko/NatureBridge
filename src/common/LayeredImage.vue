<template>
  <div class="layered-image">
    <img :src="imageUrl" />
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'PlayerMap',
    props: ['imageUrl']
  }
</script>

<style lang="scss" scoped>
  .layered-image {
    position: relative;
  }
</style>
