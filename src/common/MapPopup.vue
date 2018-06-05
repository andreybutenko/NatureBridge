<template>
  <div class="map-container" @click="ondismiss" v-if="shown">
    <div class="map" @click.stop="() => {}">
      <img src="/static/misc/compass_trailhead.png" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MapPopup',
    props: ['registerShow'],
    data() {
      return {
        shown: false
      }
    },
    mounted() {
      this.registerShow(this.show);
    },
    methods: {
      show() {
        this.shown = true;
      },
      ondismiss() {
        this.shown = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .map-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw !important;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
