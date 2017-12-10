<template>
  <div class="layered-image-label" :style="{ top: y, left: x }" :class="{ far: far, wide: wide, clickable: !!onclick }" @click.stop="click">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'LayeredImageLabel',
    props: ['x', 'y', 'far', 'wide', 'onclick'],
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
  .layered-image-label {
    position: absolute;
    font-family: 'VT323';
    font-size: 32px;
    background-image: url('../../assets/misc/label-bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 130px;
    text-align: center;
    padding: 8px 16px;

    &.far {
      font-size: 24px;
      width: 100px;
      padding: 6px 12px;
    }

    &.wide {
      width: 250px;
      font-size: 24px;
      background-image: url('../../assets/misc/label-wide-bg.png');
    }

    &.clickable {
      cursor: pointer;
    }
  }
</style>
