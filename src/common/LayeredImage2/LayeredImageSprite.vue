<template>
  <img
    :src="imageUrl"
    class="layered-image-sprite"
    :class="{ clickable: !!onclick, dancing: dancing, trembling: trembling, selected: selected }"
    :style="style"
    @click.stop="click($event)"
    draggable="false">
  </div>
</template>

<script>
  export default {
    name: 'LayeredImageSprite',
    props: ['x', 'y', 'imageUrl', 'size', 'flip', 'onclick', 'dancing', 'trembling', 'selected', 'customStyle'],
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
    transition: filter 250ms;
    user-drag: none;
    user-select: none;

    &.clickable {
      cursor: pointer;
    }

    &.dancing {
      transform-origin: 50% 100%;
      animation-name: wiggle;
      animation-duration: 2000ms;
      animation-iteration-count: infinite;
    }

    &.trembling {
      transform-origin: 50% 100%;
      animation-name: tremble;
      animation-duration: 200ms;
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

  @keyframes tremble {
    0%, 100% {
      transform: translateX(0px);
    }
    33% {
      transform: translateX(-5%);
    }
    66%{
      transform: translateX(5%);
    }
  }
</style>
