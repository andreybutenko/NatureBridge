<template>
  <img
    :src="imageUrl"
    class="layered-image-sprite"
    :class="{ clickable: !!onclick, dancing: dancing, selected: selected }"
    :style="style"
    @click.stop="click($event)">
  </div>
</template>

<script>
  export default {
    name: 'LayeredImageSprite',
    props: ['x', 'y', 'imageUrl', 'size', 'flip', 'onclick', 'dancing', 'selected', 'customStyle'],
    computed: {
      style() {
        return {
          top: this.y,
          left: this.x,
          height: this.size,
          transform: 'scaleX(' + (this.flip ? '-1' : '1') + ') translateX(' + (this.flip ? '-100%' : '0') + ')',
          ...this.customStyle
        }
      }
    },
    methods: {
      click(e) {
        if(!!this.onclick) {
          this.onclick(e);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layered-image-sprite {
    position: absolute;
    transform-origin: 0 0;
    transition: all 250ms;

    &.clickable {
      cursor: pointer;
    }

    &.dancing {
      transform-origin: 50% 100%;
      animation-name: wiggle;
      animation-duration: 2000ms;
      animation-iteration-count: infinite;
    }

    &.selected {
      border: 1px dotted red;
      background-color: rgba(255, 0, 0, 0.4);
    }
  }
</style>

<style lang="scss">
  @keyframes wiggle {
    0% {transform: rotate(0deg);}
    33% {transform: rotate(-10deg);}
    66% {transform: rotate(10deg);}
    100% {transform: rotate(0deg);}
  }
</style>
