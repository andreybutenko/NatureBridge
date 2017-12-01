<template>
  <router-link :to="destination" class="layered-image-nav" :style="{ top: y, left: x, width: width, height: height }" :class="{ debug: debug }">
  </router-link>
</template>

<script>
  export default {
    name: 'LayeredImageNav',
    props: ['x', 'y', 'width', 'height', 'destination', 'debug']
  }
</script>

<style lang="scss" scoped>
  .layered-image-nav {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    transition: 250ms all;

    &:hover {
      background-color: rgba(0, 255, 0, 0.1)
    }

    &.debug {
      background-color: rgba(255, 0, 0, 0.25);
      cursor: pointer;
    }
  }
</style>
