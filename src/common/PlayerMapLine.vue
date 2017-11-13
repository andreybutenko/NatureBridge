<template>
  <div
    v-if="visible"
    :style="style">
  </div>
</template>

<script>
  const POINT_WIDTH = 25;

  export default {
    name: 'PlayerMapNode',
    props: ['startTop', 'startLeft', 'endTop', 'endLeft', 'visible'],
    computed: {
      style() {
        return {
          // top: Math.min(this.startTop, this.endTop) + 'px',
          // left: Math.min(this.startLeft, this.endLeft) + 'px',
          top: (this.startTop + POINT_WIDTH / 2) + 'px',
          left: (this.startLeft + POINT_WIDTH / 2) + 'px',
          transform: 'rotate(' + this.triangleAngle + 'deg)',
          width: this.hypotenuseLength + 'px'
        }
      },
      //
      triangleHeight() {
        return this.endTop - this.startTop;
      },
      triangleWidth() {
        return this.endLeft - this.startLeft;
      },
      hypotenuseLength() {
        return Math.sqrt(Math.pow(this.triangleWidth, 2) + Math.pow(this.triangleHeight, 2));
      },
      triangleAngle() {
        return Math.atan(this.triangleHeight / this.triangleWidth) * 180 / Math.PI
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    position: absolute;
    height: 1px;
    background-color: black;
    transform-origin: 0 0;
  }
</style>
