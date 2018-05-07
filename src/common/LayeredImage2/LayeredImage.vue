<template>
  <div class="layered-image" @mousemove="mousemove || noop" @click="onclick || noop">
    <img class="layered-image-img" :src="imageUrl" />
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'LayeredImage',
    props: ['imageUrl', 'mousemove', 'onclick'],
    methods: {
      noop() {}
    }
  }
</script>

<style lang="scss" scoped>
  .layered-image {
    display: inline-block;
    position: relative;

    img {
      max-width: 100%;
    }
  }
</style>
