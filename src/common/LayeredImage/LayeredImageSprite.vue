<template>
  <img class="layered-image-sprite" :src="imageUrl" :style="style" :class="{ clickable: !!onclick }" @click.stop="click"></div>
</template>

<script>
  export default {
    name: 'LayeredImageSprite',
    props: ['x', 'y', 'imageUrl', 'scale', 'flip', 'onclick'],
    computed: {
      style() {
        const xScale = (this.flip ? -1 : 1) * this.scale;
        return {
          top: this.y,
          left: this.x,
          transform: 'scaleX(' + xScale + ') scaleY(' + this.scale + ')'
        }
      }
    },
    methods: {
      click() {
        if(!!this.onclick) {
          this.onclick();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layered-image-sprite {
    position: absolute;
    transform-origin: 0 0;

    &.clickable {
      cursor: pointer;
    }
  }
</style>
