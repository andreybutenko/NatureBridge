<template>
  <div @click="onclick" class="layered-image-btn" :style="{ top: y, left: x, width: width, height: height }" :class="{ debug: debug }"></div>
</template>

<script>
  export default {
    name: 'LayeredImageBtn',
    props: ['x', 'y', 'width', 'height', 'onclick', 'debug']
  }
</script>

<style lang="scss" scoped>
  .layered-image-btn {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;

    &:hover {
      animation-name: glow;
      animation-duration: 750ms;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &.debug {
      background-color: rgba(255, 0, 0, 0.25);
      cursor: pointer;
    }
  }

  @keyframes glow {
    0%  { background-color: rgba(0, 0, 0, 0); }
    100% { background-color: rgba(255, 255, 255, 0.25); }
  }
</style>
