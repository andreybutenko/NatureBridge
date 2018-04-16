<template>
  <div class="layered-image" @mousemove="mousemove" @click="onclick">
    <img class="layered-image-img" :src="imageUrl" />
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'LayeredImage',
    props: ['imageUrl', 'mousemove', 'onclick']
  }
</script>

<style lang="scss" scoped>
  .layered-image {
    display: inline-block;
    position: relative;
  }
</style>
