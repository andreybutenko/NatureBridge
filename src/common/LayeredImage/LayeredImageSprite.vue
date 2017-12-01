<template>
  <img class="layered-image-sprite" :src="imageUrl" :style="{ top: y, left: x, transform: 'scale(' + scale + ')' }"></div>
</template>

<script>
  export default {
    name: 'LayeredImageSprite',
    props: ['x', 'y', 'imageUrl', 'scale']
  }
</script>

<style lang="scss" scoped>
  .layered-image-sprite {
    position: absolute;
    transform-origin: 0 0;
  }
</style>
