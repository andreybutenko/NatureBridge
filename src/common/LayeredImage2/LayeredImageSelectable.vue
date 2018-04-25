<template>
  <div @click.stop="onclick" class="layered-image-btn" :style="styles" :class="{ debug: debug }"></div>
</template>

<script>
  export default {
    name: 'LayeredImageSelectable',
    props: ['x', 'y', 'width', 'height', 'onclick', 'debug'],
    computed: {
      styles() {
        return {
          top: this.y,
          left: this.x,
          height: this.height,
          width: this.width
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layered-image-btn {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;

    &:hover,
    &.debug {
      animation-name: glow;
      animation-duration: 750ms;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  @keyframes glow {
    0%  { background-color: rgba(0, 0, 0, 0); }
    100% { background-color: rgba(255, 255, 255, 0.25); }
  }
</style>
